import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {ChangeDetectorRef} from "@angular/core";

interface Categories {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-blog-page-component',
  templateUrl: './blog-page-component.component.html',
  styleUrls: ['./blog-page-component.component.css']
})

export class BlogPageComponentComponent implements OnInit {

  breakpoint: string;
  items: Observable<any[]>;
  selectedValue = '';
  categories: Categories[] = [
    {value: '', viewValue: 'None'},
  ];

  constructor(private store: AngularFirestore, private storage: AngularFireStorage, private ref:ChangeDetectorRef) {
    this.items = this.store.collection('blogs').valueChanges();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 880) ? '0 1 calc(100% - 16px)' : '0 1 calc(33% - 16px)';
    this.store.firestore.collection("blogs").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (!this.categoryExists(doc.data()["categories"])) {
          this.categories.push({
            value: doc.data()["categories"],
            viewValue: doc.data()["categories"]
          });
        }
      });
    });
    this.ref.detectChanges();
  }

  categoryExists(category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].value.toLowerCase() == category.toLowerCase())
        return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  onResize(event) {
    this.breakpoint = (window.innerWidth <= 880) ? '0 1 calc(100% - 16px)' : '0 1 calc(33% - 16px)';
  }

}
