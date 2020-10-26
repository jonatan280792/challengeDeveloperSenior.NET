import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material';
import { LibraryService } from '@app/library/services/library-services';
import { ModalService } from '@common/modal/modal.service';
import { SnackBarService } from '@common/snack-bar/snack-bar-service';

@Component({
  selector: 'app-control-editorial',
  templateUrl: './control-editorial.html',
})
export class ControlEditorialComponent implements OnInit {
  @Output() returnElement: EventEmitter<any> = new EventEmitter<any>();
  @Input() nameModal: string;
  @Input() dataElement: any;
  public formEditorial: FormGroup;
  data: any;
  color: ThemePalette = 'accent';

  constructor(
    private fb: FormBuilder,
    private libraryService: LibraryService,
    private modalService: ModalService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    this.formEditorial = this.fb.group({
      id: [0],
      name: [null, Validators.required],
      campus: [null, Validators.required],
      status: [null]      
    });

    if (this.dataElement) {
      this.formEditorial.controls['id'].setValue(this.dataElement.id);
      this.formEditorial.controls['name'].setValue(this.dataElement.name);
      this.formEditorial.controls['campus'].setValue(this.dataElement.campus);
      this.formEditorial.controls['status'].setValue(this.dataElement.status);
    }
  }

  controlRegister() {
    const dataRegister = this.formEditorial.getRawValue();

    this.data = {
      id: dataRegister.id === null ? 0: dataRegister.id,
      name: dataRegister.name,
      campus: dataRegister.campus,
      status: dataRegister.status === null ? false: dataRegister.status
    }

    if (this.dataElement) {
      this.libraryService.updateEditorials(this.data).subscribe(responsePut => {
        if (responsePut.status === 'Ok') {
          this.modalService.close(this.nameModal);
          this.returnElement.emit(responsePut);
        }
        
        this.snackBarService.showSnackBar(responsePut.message, 'Cerrar', responsePut.status === 'Ok' ? 3000 : 5000);
      })
    } else {
      this.libraryService.setEditorials(this.data).subscribe(responseSet => {
        if (responseSet.status === 'Ok') {
          this.modalService.close(this.nameModal);
          this.returnElement.emit(responseSet);
        }
        this.snackBarService.showSnackBar(responseSet.message, 'Cerrar', responseSet.status === 'Ok' ? 3000 : 5000);
      });
    }
  }

  close() {
    this.modalService.close(this.nameModal);
  }
}
