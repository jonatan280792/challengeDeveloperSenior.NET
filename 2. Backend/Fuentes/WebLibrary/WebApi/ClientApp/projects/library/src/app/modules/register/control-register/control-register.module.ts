import { CommonModule } from '@angular/common';
import { ControlRegisterComponent } from './control-register.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule  } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule,
  MatSnackBarModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SnackBarService } from '@common/snack-bar/snack-bar-service';

const components = [ControlRegisterComponent];

const imports = [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

const providers = [SnackBarService]

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  providers: providers,
  schemas: [NO_ERRORS_SCHEMA],
})
export class ControlRegisterModule {}
