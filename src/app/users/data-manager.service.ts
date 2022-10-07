import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  loginSignupState = false;

  userSystemEntryType = 'login';

  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  resetLinkForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  resetPasswordForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  switchBetweenLoginAndSignup(){
    this.loginSignupState = !this.loginSignupState
    this.userSystemEntryType = this.loginSignupState ? 'register' : 'login'
    this.router.navigate([`users/auth/${this.userSystemEntryType}`])
  }

  signup(){
    this.loginSignupState = !this.loginSignupState
  }


}
