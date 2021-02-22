import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import {AngularFireStorage} from '@angular/fire/storage';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  isLogged = false;
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public afSt: AngularFireStorage,
    public router: Router,
    public ngZone: NgZone,
    private _snackBar: MatSnackBar,// NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  Makeid(length) {
    let result:string = '';
    let characters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength:number = characters.length;
    for ( let i:number = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  CreatePost(title, content, image_url, category) {
    let id:string = this.Makeid(20);
    this.UploadImage(image_url, id);
    this.afs.collection("blogs").doc(id).set({
      "title": title,
      "content": content,
      "image_name": id,
      "categories": category
    }).then(() => {
      this.openSnackBar("Post successfully created", "OK");
    });
  }

  ModifyPost(title, content, new_image_url, old_image_url, id, category) {
    if (!old_image_url) {
      this.UploadImage(new_image_url, id);
    }
    this.afs.collection("blogs").doc(id).set({
      "title": title,
      "content": content,
      "image_name": id,
      "categories": category
    }).then(() => {
      location.reload();
      this.openSnackBar("Post successfully modified", "OK");
    });
  }


  UploadImage(url, id) {
    this.afSt.ref("blogs/" + id).putString(url, "data_url");
  }

  DeleteImage(id) {
    this.afSt.ref("blogs/" + id).delete();
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.isLogged = true;
        this.ngZone.run(() => {
          this.router.navigate(['admin']);
          this.openSnackBar("User successfully logged in", "OK");
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        this.openSnackBar("Email and/or password incorrect", "OK");
      })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

/*
  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /!* Call the SendVerificaitonMail() function when new user sign
        up and returns promise *!/
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
*/

/*
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['blog-management']);
        })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }
*/

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }


// Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null || this.isLogged === true);
  }



}
