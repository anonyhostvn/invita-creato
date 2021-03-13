import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {registerValidator} from './register.validators';


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
        rePassword: new FormControl('', [
            Validators.required,
        ])
    }, {
        validators: registerValidator
    });

    get username() { return this.registerForm.get('username'); }

    get password() { return this.registerForm.get('password'); }

    get rePassword() { return this.registerForm.get('rePassword'); }

    onSubmit = () => {
        console.log(this.registerForm.value);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
