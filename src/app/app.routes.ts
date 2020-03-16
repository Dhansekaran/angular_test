import { Routes } from '@angular/router';
import { HomeComponent } from '@src/app/home/home.component';

export const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  {
      path: 'admin',
      loadChildren: () => import('@src/app/admin/admin.module').then(m => m.AdminModule) 
  }
];
export class adminRoutingModule { }