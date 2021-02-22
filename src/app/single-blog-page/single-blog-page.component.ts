import {Component, Input, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-blog-page',
  templateUrl: './single-blog-page.component.html',
  styleUrls: ['./single-blog-page.component.css']
})

export class SingleBlogPageComponent implements OnInit {
  img: string;
  title: string;
  content: string;

  constructor(private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.img = params[0];
      this.title = params[1];
      this.content = params[2];
      console.log(params);
    });
  }

}
