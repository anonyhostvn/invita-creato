import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {registerValidator} from './register.validators';
import {AuthService} from '../../services/auth.service';


@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: [
        './register-page.component.css',
        '../../shared/authpagestyle/vendor/bootstrap/css/bootstrap.min.css',
        '../../shared/authpagestyle/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
        '../../shared/authpagestyle/vendor/animate/animate.css',
        '../../shared/authpagestyle/vendor/css-hamburgers/hamburgers.min.css',
        '../../shared/authpagestyle/vendor/animsition/css/animsition.min.css',
        '../../shared/authpagestyle/vendor/select2/select2.min.css',
        '../../shared/authpagestyle/vendor/daterangepicker/daterangepicker.css',
        '../../shared/authpagestyle/css/util.css',
        '../../shared/authpagestyle/css/main.css'
    ]
})
export class RegisterPageComponent implements OnInit {

    registerForm = new FormGroup({
        username: new FormControl('', [
            Validators.required
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        firstName: new FormControl('', [
            Validators.required
        ]),
        lastName: new FormControl('', [
            Validators.required
        ]),
        rePassword: new FormControl('', [
            Validators.required,
        ])
    }, {
        validators: registerValidator
    });

    get username() { return this.registerForm.get('username'); }

    get password() { return this.registerForm.get('password'); }

    get rePassword() { return this.registerForm.get('rePassword'); }

    get email() { return this.registerForm.get('email'); }

    get firstName() {return this.registerForm.get('firstName')}

    get lastName() {return this.registerForm.get('lastName')}

    onSubmit = () => {
        console.log(this.registerForm.value);
        this.authService.register(this.registerForm.value).subscribe(observer => {
            console.log(observer);
        })
    }

    constructor(
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
    }

}
