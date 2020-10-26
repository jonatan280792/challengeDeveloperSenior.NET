import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material';
import es from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { ApplibraryModule } from '@app/library/app.module';
import { AppRoutes } from './app-routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Config } from '@config/index';
import { CustomIconService } from '@common/custom-icons/custom-icon.service';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@services/theme-service';
import { ChartsModule } from 'ng2-charts';

const imports = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  ChartsModule,
  RouterModule.forRoot(
    AppRoutes,
    {
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      useHash: true
    }
  ),  
  ApplibraryModule.forRoot(),  
];

const providers = [  
  CustomIconService,
  ThemeService,
  { 
    provide: MAT_DIALOG_DATA, useValue: {} 
  },
  { 
    provide: MatDialogRef, useValue: {} 
  },
];

registerLocaleData(es);

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [imports],
  providers: [providers]  
})
export class AppModule { }
