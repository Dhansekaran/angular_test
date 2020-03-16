import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AuthenticationService } from '@src/app/admin/_services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
        ) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        if (localStorage.getItem('currentUser')) {
            this.router.navigate([this.returnUrl]);
        }
    }

    login() {
        this.router.navigate(['']);
        this.authenticationService.login(this.model.phone, this.model.password).subscribe(
            data => {
                if (data.status) {
                    
                }
            },
            error => {
             
            }
        );

    }
}
