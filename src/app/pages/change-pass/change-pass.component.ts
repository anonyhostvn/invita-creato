import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changePassValidator} from './changePass.validator';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    verifyNewPassword: new FormControl('', [
      Validators.required,
    ])
  }, {
    validators: changePassValidator
  });

  get oldPassword() { return this.changePasswordForm.get('oldPassword'); }

  get newPassword() { return this.changePasswordForm.get('newPassword'); }

  get verifyNewPassword() { return this.changePasswordForm.get('verifyNewPassword'); }

  onSubmit = () => {
    console.log(this.changePasswordForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
