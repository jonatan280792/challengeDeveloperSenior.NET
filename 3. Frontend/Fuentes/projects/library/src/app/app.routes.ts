import { LoggedUserComponent } from '@modules/library/logged-user/logged-user.component';
import { Routes } from '@angular/router';
import { SessionAuthGuard } from 'src/app/guards/session-auth.guard';

const AppRoutes: Routes = [
  {
    canActivate: [SessionAuthGuard],
    children: [
      {
        canActivate: [SessionAuthGuard],
        loadChildren: () => import('@modules/library/editorials/editorials.module').then(m => m.EditorialsModule),
        path: 'editorials'
      },
      {
        canActivate: [SessionAuthGuard],
        loadChildren: () => import('@modules/library/register/register.module').then(m => m.RegisterModule),
        path: 'register'
      },
      {
        canActivate: [SessionAuthGuard],
        loadChildren: () => import('@modules/library/home/home.module').then(m => m.HomeModule),
        path: ''
      },
    ],
    component: LoggedUserComponent,
    path: 'home',
  },
  {
    path: 'home',
    redirectTo: 'home'
  }
];

export { AppRoutes };
