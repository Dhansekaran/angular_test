import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule,MatInputModule, MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminRoutingModule } from '@src/app/admin/admin-routing.module';
import { LoginComponent } from '@src/app/admin/account/login';
import { ForgotPasswordComponent } from '@src/app/admin/account/forgot_password';
import { MenuComponent } from '@src/app/admin/menu';
import { DashboardComponent } from '@src/app/admin/dashboard';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
  	CommonModule,
    FontAwesomeModule,
  	MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  	FormsModule,
  	AdminRoutingModule,
  ],
  exports: [ MenuComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }