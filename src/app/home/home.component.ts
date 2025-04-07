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

  UserImage:any
  getdata(event:any){
    const FileSource: File = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      debugger
      this.UserImage = reader.result
      console.log(this.UserImage);
      
    };
    reader.readAsDataURL(FileSource);
  }



 
}
