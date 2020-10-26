import { NgModule } from '@angular/core';
import { PageHomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { HomeRouting } from './home.routing';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    PageHomeComponent
  ],
  exports: [PageHomeComponent],
  imports: [
    CommonModule,
    HomeRouting,
    MatCardModule,
    ChartsModule,
    RouterModule,
  ],
  providers: [
    ThemeService
  ],
})
export class HomeModule {}
