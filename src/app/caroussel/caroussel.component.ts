import {Component, Input, OnInit, Output} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {
  @Input() limit: number;

  breakpoint: string;
  items: Observable<any[]>;
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
