import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
//import { AuthenticationService,FirebaseService } from '../_services/index';

@Component({
    selector: 'forgot-password-login',
    templateUrl: './forgot_password.component.html',
    styleUrls: ['./forgot_password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
       // private authenticationService: AuthenticationService,
        //private firebaseservice:FirebaseService,
        ) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        if (localStorage.getItem('currentUser')) {
            this.router.navigate([this.returnUrl]);
        }
    }

    login() {
         this.router.navigate(['/admin/login']);
        /*this.authenticationService.login(this.model.phone, this.model.password)
            .subscribe(
                data => {
                    if (data.status) {
                        this.firebaseservice.login_using_token(data.data.customToken).then(s=>{
                           localStorage.setItem('currentUser',JSON.stringify(data.data));
                           this.router.navigate([this.returnUrl]);
                        })
                    }
                },
                error => {
                    //this.alertService.error(error);
                    //this.loading = false;
                });*/

    }
}
