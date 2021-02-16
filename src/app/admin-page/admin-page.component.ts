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
  url: string;
  breakpoint: string;
  items: Observable<any[]>;
  constructor( public authService: AuthService, private store: AngularFirestore, private storage: AngularFireStorage) {
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
        this.url = event.target.result.toString();
      }
    }
  }

  deleteBlog(id) {
    this.store.collection("blogs").doc(id).delete();
    this.storage.ref("blogs/" + id).delete();
  }

}
