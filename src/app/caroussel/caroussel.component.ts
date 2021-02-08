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
    {text: 'Dodge Charger', content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\nA small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\nbred for hunting.', image: 'https://media.gqmagazine.fr/photos/5e528eaa94cd350008180630/master/w_1200,c_limit/fast-furious-1970-dodge-charger.jpg', cols: 1, rows: 1, color: 'white'},
    {text: 'Mustang Fastback', content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\nA small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\nbred for hunting.', image: 'https://www.telegraph.co.uk/content/dam/films/2017/04/05/1967_Mustang-Tokyo_Drift_trans_NvBQzQNjv4BqJKw5vLEHYuL1UeCKr-xp3IGUylfIO2AnqMD-bPhjICI.png?imwidth=450', cols: 1, rows: 1, color: 'white'},
    {text: 'Chevrolet Chevelle', content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\nA small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\nbred for hunting.', image: 'https://lh3.googleusercontent.com/proxy/iX9YIBg6sh93N75LaxUClw6sBoYOxs5TxWRqlUHDKCUo4slYGbilGo8goPLBtiOcP-lZxK2eqGrsjqkSIZpubJez0HEMQrCkfafd88SvtrIOHzrJp_yJFZgpNHHiOJn7', cols: 1, rows: 1, color: 'white'},
  ];
  ngOnInit(): void {
  }

}
