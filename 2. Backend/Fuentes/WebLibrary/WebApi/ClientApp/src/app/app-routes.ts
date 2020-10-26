import { ApplibraryModule } from '../../projects/library/src/app/app.module'
import { Routes } from '@angular/router';
import { SessionAuthGuard } from './guards/session-auth.guard';

const AppRoutes: Routes = [
  {
    // canActivate: [SessionAuthGuard],
    loadChildren: () => import('@modules/login/login.module').then((m) => m.LoginModule),
    path: 'login',
  },
  {
    // canActivate: [SessionAuthGuard],
    loadChildren: () => ApplibraryModule,
    path: 'library'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

export { AppRoutes };
