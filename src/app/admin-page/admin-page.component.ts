import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  pageTitle:string = "";
  newPostUrl: string;
  oldPostUrl: string;
  breakpoint: string;
  items: Observable<any[]>;
  isModifying:boolean = false;
  currentPostTitle:string = "";
  currentPostContent:string = "";
  currentPostId:string = "";

  constructor( public authService: AuthService, private store: AngularFirestore, private storage: AngularFireStorage) {
    this.pageTitle = "Create a post";
  }

  ngOnInit(): void {
    this.items = this.store.collection('blogs').valueChanges();
  }

  // tslint:disable-next-line:typedef
  onResize(event) {
    this.breakpoint = (window.innerWidth <= 880) ? '0 1 calc(100% - 16px)' : '0 1 calc(33% - 16px)';
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.newPostUrl = event.target.result.toString();
        this.oldPostUrl = "";
      }
    }
  }

  deleteBlog(id) {
    this.store.collection("blogs").doc(id).delete();
    this.storage.ref("blogs/" + id).delete();
  }

  toggleModifying(title, content, image_id) {
    this.isModifying = true;
    this.pageTitle = "Modify a post";
    this.currentPostTitle = title;
    this.currentPostContent = content;
    this.currentPostId = image_id;
    this.oldPostUrl = "https://firebasestorage.googleapis.com/v0/b/angularblog-e02d1.appspot.com/o/blogs%2F" + this.currentPostId + "?alt=media";
    this.newPostUrl = "";
  }

  submitForm() {
    if (this.isModifying) {
      this.authService.ModifyPost(this.currentPostTitle, this.currentPostContent, this.newPostUrl, this.oldPostUrl, this.currentPostId);
    } else {
      this.authService.CreatePost(this.currentPostTitle, this.currentPostContent, this.newPostUrl);
    }
  }

}
