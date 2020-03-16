import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faTachometerAlt,faCar } from '@fortawesome/free-solid-svg-icons';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'admin-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    faTachometerAlt = faTachometerAlt;
    faCar = faCar;
    active_mainmenu = 'Dashboard';
    active_submenu = '';
    active_childmenu = '';
    menu_list = [];

    constructor() { }

    ngOnInit() {
        this.menu_list = [
            {
                menu_name : 'Dashboard',
                menu_link:'/admin/dashboard',
                menu_icon : faTachometerAlt,
                submenu:[]
            },
            {
                menu_name : 'Fleet Tracking',
                menu_link:'',
                menu_icon : faCar,
                submenu:[
                    {
                        menu_name : 'Dashboard',
                        menu_link:'',
                        menu_icon : '',
                        submenu:[]
                    },
                    {
                        menu_name : 'Fleet management',
                        menu_link:'',
                        menu_icon : '',
                        submenu:[
                            {
                                menu_name : 'Manage Company',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            },
                            {
                                menu_name : 'Fleet Models',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            },
                            {
                                menu_name : 'Fleets',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            },
                            {
                                menu_name : 'Package Plan',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            },
                            {
                                menu_name : 'Manage Assigned Fleets',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            }
                        ]
                    },
                    {
                        menu_name : 'Workforce',
                        menu_link:'',
                        menu_icon : '',
                        submenu:[
                            {
                                menu_name : 'Manage Dispatchers',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            },
                            {
                                menu_name : 'Manage Drivers',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            },
                            {
                                menu_name : 'Manage Subscription',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            },
                            {
                                menu_name : 'Driver Ratings',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            },
                            {
                                menu_name : 'Driver Shift History',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            },
                            {
                                menu_name : 'Driver Wallet',
                                menu_link:'',
                                menu_icon : '',
                                submenu:[]
                            }
                        ]
                    }
                ]
            }
        ];
    }

    menuchange(menus,types){
        if(types==1){
            if(this.active_mainmenu==menus){
                this.active_mainmenu = '';
            }else{
                this.active_mainmenu = menus;
            }
            
        }else if(types==2){
            if(this.active_submenu==menus){
                this.active_submenu = '';
            }else{
                this.active_submenu = menus;
            }
        }else if(types==3){
            this.active_childmenu = menus;
        }
    }

}
