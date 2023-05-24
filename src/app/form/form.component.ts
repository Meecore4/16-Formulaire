import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { emailValidator } from '../email-validator';


interface User {
  username: string|null|undefined;
  email: string|null|undefined;
  password: string|null|undefined;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

 
  userForm = this.fb.group({
    username: ['', Validators.required],
    credentials: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', Validators.required],
    }),
  })


  user!:User;
  constructor(private fb: FormBuilder){}

onSubmit() {
    console.log(this.userForm.value);
    this.user = {
      username: this.userForm.value.username,
      email: this.userForm.value.credentials?.email,
      password: this.userForm.value.credentials?.password,
    };
    console.log(this.user)  
  }  
}
