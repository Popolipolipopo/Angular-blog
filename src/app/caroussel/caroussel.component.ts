import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
  content: string;
}

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Shiba Inu', content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\nA small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\nbred for hunting.', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', cols: 1, rows: 1, color: 'white'},
    {text: 'Popolipopo', content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\nA small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\nbred for hunting.', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', cols: 1, rows: 1, color: 'white'},
    {text: 'Shiba Inu', content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\nA small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\nbred for hunting.', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', cols: 1, rows: 1, color: 'white'},
  ];
  ngOnInit(): void {
  }

}
