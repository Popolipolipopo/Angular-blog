import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-page-component',
  templateUrl: './blog-page-component.component.html',
  styleUrls: ['./blog-page-component.component.css']
})

export class BlogPageComponentComponent implements OnInit {

  breakpoint: string;
  items: Observable<any[]>;
  blogsList: Array<object> = [];
  constructor(private store: AngularFirestore, private storage: AngularFireStorage) {
    this.items = this.store.collection('blogs').valueChanges();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 880) ? '0 1 calc(100% - 16px)' : '0 1 calc(33% - 16px)';
  }

  // tslint:disable-next-line:typedef
  onResize(event) {
    this.breakpoint = (window.innerWidth <= 880) ? '0 1 calc(100% - 16px)' : '0 1 calc(33% - 16px)';
  }

}
