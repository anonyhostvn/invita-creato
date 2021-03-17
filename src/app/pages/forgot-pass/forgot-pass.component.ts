import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-forgot-pass',
    templateUrl: './forgot-pass.component.html',
    styleUrls: [
        './forgot-pass.component.css',
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
export class ForgotPassComponent implements OnInit {

    isLoading: Boolean = false;

    forgotPassForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ])
    });

    get email() {
        return this.forgotPassForm.get('email');
    }

    onSubmit = () => {
        console.log(this.forgotPassForm.value);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
