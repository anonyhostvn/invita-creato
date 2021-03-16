import {Component, OnInit} from '@angular/core';

import {LoginInfo} from '../../models/login-info';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: [
        './login-page.component.css',
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
export class LoginPageComponent implements OnInit {

    model = new LoginInfo('', '');

    isLoading: Boolean = false;

    onSubmit = () => {
        this.isLoading = true;
        this.authService.login(this.model.username, this.model.password).subscribe(
            observer => {
                console.log(observer);
                this.isLoading = false;
            },
            () => {
                console.log('Error');
                this.isLoading = false;
            }
        );
    }

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        if (localStorage.getItem('token')) {
            this.router.navigate(['']);
        }
    }

}
