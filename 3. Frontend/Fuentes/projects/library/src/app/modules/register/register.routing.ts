import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageRegisterComponent } from './register.component';

const routes: Routes = [
  { path: '', component: PageRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRouting { }
