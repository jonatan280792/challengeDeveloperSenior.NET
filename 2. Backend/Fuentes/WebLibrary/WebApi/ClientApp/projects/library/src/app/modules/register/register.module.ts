import {
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PageRegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { RegisterRouting } from './register.routing';
import { RouterModule } from '@angular/router';
import { ModalService } from '@common/modal/modal.service';
import { ModalModule } from '@common/modal/modal.module';
import {
  TranslateLoader, TranslateModule
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '@config/index';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { ControlRegisterModule } from './control-register/control-register.module';
import { LibraryService } from '@app/library/services/library-services';
import { ServiceUtils } from '@services/services-utils';
import { SessionService } from '@services/session-service';
import { SnackBarService } from '@common/snack-bar/snack-bar-service';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: Config.appParams.translatesPathlibrary,
      suffix: '.json'
    }
  ]);
}

const components = [PageRegisterComponent];

const imports = [
  CommonModule,
  ControlRegisterModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  ModalModule,
  RegisterRouting,
  RouterModule,
  TranslateModule.forRoot({ loader: {
    deps: [HttpClient],
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory
  }})
];

const providers  = [
  ModalService,
  LibraryService,
  ServiceUtils,
  SessionService,
  SnackBarService
];

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  providers: providers,
  schemas: [NO_ERRORS_SCHEMA],
})
export class RegisterModule {}
