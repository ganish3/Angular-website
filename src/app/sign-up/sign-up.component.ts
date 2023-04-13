import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators}from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm=new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
    lname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
    uname: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$')]),
    mail: new FormControl('',[Validators.required,Validators.email]),
    address1: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z0-9 ]*')]),
    address2: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z0-9 ]*')]),
    phone: new FormControl('',Validators.required),
    city: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
    zip: new FormControl('',Validators.required),
    state: new FormControl('california')
  })


  get f()
{
    return this.signupForm.controls;
}

onSubmit(){

  const final = {
    firstName: this.signupForm.value.fname,
    lastName: this.signupForm.value.lname,
    username: this.signupForm.value.uname,
    mail: this.signupForm.value.mail,
    phone: `+1-${this.signupForm.value.phone}`,
    address1: this.signupForm.value.address1,
    address2: this.signupForm.value.address2,
    state: this.signupForm.value.state,
    city: this.signupForm.value.city,
    zip: this.signupForm.value.zip,
  };

  // pushing object into an Array

  const finalArr = [];
  finalArr.push(final);

  // storing the form data into localStorage

  localStorage.setItem("formData", JSON.stringify(finalArr));
  console.log(final);

  // alerting users that their data has been saved successfully

  alert('Your response has been saved')
}
}
