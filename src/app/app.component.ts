import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './validator/confirmed.validator';
import { emailValidator, RegexConstantsEmail } from './validator/email.validator';
import { passwordValidator, RegexConstants } from './validator/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  registerForm!: FormGroup;
  password = '';


  constructor (
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormRegister();
  }

  public createFormRegister() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidator(RegexConstantsEmail.EMAIL)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), passwordValidator(RegexConstants.PASSWORD)]],
      rePassword: ['', [Validators.required, Validators.minLength(8)]],
    },
      {
        validators: [ConfirmedValidator('password', 'rePassword')],
      });
  }

  public onSubmit() {
    console.log(this.registerForm.controls);
  }

  public get f(): { [key: string]: AbstractControl; } {
    return this.registerForm.controls;
  }

}
