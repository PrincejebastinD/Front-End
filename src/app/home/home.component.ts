import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  LoginForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.LoginForm = this.fb.group({
      UserName: new FormControl(''),
      Email: new FormControl(''),
      gender: new FormControl(''),
      about: new FormControl(''),
      imageExt:new FormControl('')
    });
  }

  submit() {
   
  }
 
}
