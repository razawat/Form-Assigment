import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface DataSet {
  firstName:string,
  lastName:string,
  email:string,
  mobNo:number,
  position:string,
  doj:Date,
  address:string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  customStyles = {
    w1:'w-75',
    w2:'w-100',
  }
  pageLabels = {
    header:'User Details',
    firstName:'First Name',
    lastName:'Last Name',
    email:'Email',
    mobNo:'Mobile Number',
    position:'Position',
    doj:'Date of Joining',
    address:'Address',
    reset:'Reset',
    submit:'Submit',
  }
  errorLabel = {
    requiredFieeld:'This is a required field',
    emailRequired:'Please enter a valid email address',
    mobNoRequired:'Please enter a valid mobile no.'
  }
  positions = ['Manager','Developer','Designer','HR'];
  maxDate = new Date();
  formValue!: DataSet;
  showData:boolean = false;
  mobileNoLength:string = "10";
  constructor() {}

  /** ---------------------------- Start - event function --------------------------------- */
  // On Submit button Click
  onSubmitButtonClick(formValue:NgForm) {
    console.log(formValue);
    if(formValue.valid) {
      this.formValue = formValue.value;
      this.showData = true;
      console.log(this.formValue);
      formValue.resetForm();
    }
  }
  // On Reset button click
  onResetButtonClick(formValue:NgForm) {
    formValue.resetForm();
    this.showData = false;
  }
  // On enter mobile no
  onEnterMobNo(event:Event) {
    debugger
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    const numericValue = inputValue.replace(/^0+/,'').replace(/[^0-9]/g,'');
    input.value = numericValue;
  }
  /** ---------------------------- End - event function --------------------------------- */
}
