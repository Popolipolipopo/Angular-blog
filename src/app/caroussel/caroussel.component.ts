import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
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

  breakpoint: string;
  tile: Tile[] = [
    {text: 'Dodge Charger', content: '', image: 'https://media.gqmagazine.fr/photos/5e528eaa94cd350008180630/master/w_1200,c_limit/fast-furious-1970-dodge-charger.jpg', color: 'white'},
    {text: 'Mustang Fastback', content: '', image: 'https://www.telegraph.co.uk/content/dam/films/2017/04/05/1967_Mustang-Tokyo_Drift_trans_NvBQzQNjv4BqJKw5vLEHYuL1UeCKr-xp3IGUylfIO2AnqMD-bPhjICI.png?imwidth=450', color: 'white'},
    {text: 'Chevrolet Chevelle', content: '', image: 'https://www.telegraph.co.uk/content/dam/films/2017/04/05/1967_Mustang-Tokyo_Drift_trans_NvBQzQNjv4BqJKw5vLEHYuL1UeCKr-xp3IGUylfIO2AnqMD-bPhjICI.png?imwidth=450', color: 'white'},
  ];
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 880) ? '0 1 calc(100% - 16px)' : '0 1 calc(33% - 16px)';
  }

  // tslint:disable-next-line:typedef
  onResize(event) {
    this.breakpoint = (window.innerWidth <= 880) ? '0 1 calc(100% - 16px)' : '0 1 calc(33% - 16px)';
  }

}
