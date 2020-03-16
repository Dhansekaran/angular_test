import { Routes } from '@angular/router';
import { LoginComponent } from '@src/app/admin/account/login';
import { ForgotPasswordComponent } from '@src/app/admin/account/forgot_password';
import { MenuComponent } from '@src/app/admin/menu';
import { DashboardComponent } from '@src/app/admin/dashboard';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/admin/login', pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
      path: 'forgot_password',
      component: ForgotPasswordComponent,
  },
  {
      path: 'dashboard',
      component: DashboardComponent,
  }
];