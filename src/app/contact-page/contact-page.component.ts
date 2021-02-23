import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {MyErrorStateMatcher} from '../sign-in/sign-in.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;
  matcher = new MyErrorStateMatcher();

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() { }

  submit() {
    this.authService.openSnackBar("Your message has been sent !", "OK");
  }

}
