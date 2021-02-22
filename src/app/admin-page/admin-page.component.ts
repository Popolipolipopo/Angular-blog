import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  newPostUrl: string;
  oldPostUrl: string;
  breakpoint: string;
  items: Observable<any[]>;
  isModifying:boolean = false;
  currentPostTitle:string = "";
  currentPostContent:string = "";
  currentPostId:string = "";
  currentPostCategory:string = "";
  myControl = new FormControl();
  toggleValue:string = "Create";
  filteredOptions: Observable<string[]>;
  categories: string[] = [];

  constructor( public authService: AuthService, private store: AngularFirestore, private storage: AngularFireStorage, private ref:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.items = this.store.collection('blogs').valueChanges();
    this.store.firestore.collection("blogs").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (!this.categoryExists(doc.data()["categories"])) {
          this.categories.push(doc.data()["categories"]);
        }
      });
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.ref.detectChanges();
  }

  categoryExists(category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].toLowerCase() == category.toLowerCase())
        return true;
    }
    return false;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.categories.filter(option => option.toLowerCase().includes(filterValue));
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

  toggleModifying(title, content, image_id, category) {
    this.isModifying = true;
    this.toggleValue = "Modify";
    this.currentPostTitle = title;
    this.currentPostContent = content;
    this.currentPostId = image_id;
    this.oldPostUrl = "https://firebasestorage.googleapis.com/v0/b/angularblog-e02d1.appspot.com/o/blogs%2F" + this.currentPostId + "?alt=media";
    this.newPostUrl = "";
    this.currentPostCategory = category;
  }

  submitForm() {
    if (this.isModifying) {
      this.authService.ModifyPost(this.currentPostTitle, this.currentPostContent, this.newPostUrl, this.oldPostUrl, this.currentPostId, this.currentPostCategory);
    } else {
      this.authService.CreatePost(this.currentPostTitle, this.currentPostContent, this.newPostUrl, this.currentPostCategory);
    }
  }

  cancelModifying() {
    this.isModifying = false;
    this.toggleValue = "Create";
    this.currentPostTitle = "";
    this.currentPostContent = "";
    this.currentPostId = "";
    this.oldPostUrl = "";
    this.newPostUrl = "";
    this.currentPostCategory = "";
  }

}
