import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faTachometerAlt,faCar } from '@fortawesome/free-solid-svg-icons';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
//import { AuthenticationService,FirebaseService } from '../_services/index';

@Component({
    selector: 'admin-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
       // private authenticationService: AuthenticationService,
        //private firebaseservice:FirebaseService,
        ) { }

    ngOnInit() {
        
    }

}
