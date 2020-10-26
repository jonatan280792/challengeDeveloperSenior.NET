import {
  MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatSlideToggleModule, MatMenuModule, MatRadioModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { CustomIconService } from '@common/library/custom-icons/custom-icon.service';
import { LoggedUserComponent } from '@modules/library/logged-user/logged-user.component';
import { NavigatorMenuComponent } from '@modules/library/logged-user/navigator-menu/nagivator-menu.component';
import { NavigatorHeaderComponent } from '@modules/library/logged-user/navigator-header/navigator-header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Config } from '@config/index';
import { AngularMaterial } from '@imports/angular-material';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import {
  TranslateLoader, TranslateModule
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '@services/session-service';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: Config.appParams.translatesPathlibrary,
      suffix: '.json'
    }
  ]);
}

@NgModule({
  declarations: [
    LoggedUserComponent,
    NavigatorHeaderComponent,
    NavigatorMenuComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    // PageHomeComponent,

    // FlexLayoutModule,
    // NavigatorMenuComponent,
    // AngularMaterial,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSlideToggleModule,
    // ModalModule,
    // NotFoundModule,
    ChartsModule,
    RouterModule,
    TranslateModule.forRoot({ loader: {
      deps: [HttpClient],
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory
    }})
  ],
  providers: [
    ThemeService,
    CustomIconService,
    SessionService
    // UserService
  ]
})

export class LoggedUserModule { }
