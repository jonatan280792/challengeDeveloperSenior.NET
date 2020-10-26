import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibraryService } from '@app/library/services/library-services';
import {
  enterOnlyNumbers
} from '@utils/index';
import { ModalService } from '@common/modal/modal.service';
import { SnackBarService } from '@common/snack-bar/snack-bar-service';

@Component({
  selector: 'app-control-register',
  templateUrl: './control-register.html',
})
export class ControlRegisterComponent implements OnInit {
  @Output() returnElement: EventEmitter<any> = new EventEmitter<any>();
  @Input() nameModal: string;
  @Input() dataElement: any;
  @Input() lstEditorials: any;
  public formRegister: FormGroup;
  public enterOnlyNumbers: any;
  isbn: number;
  n_pages: number;
  data: any;

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
    this.formRegister = this.fb.group({
      id: [0],
      isbn: [this.isbn, Validators.required],
      id_editorial: [null, Validators.required],
      title: [null, Validators.required],
      synopsis: [null, Validators.required],
      n_pages: [this.isbn, Validators.required]
    });

    this.enterOnlyNumbers = enterOnlyNumbers(this.formRegister);

    if (this.dataElement) {
      this.formRegister.controls['id'].setValue(this.dataElement.id);
      this.formRegister.controls['isbn'].setValue(this.dataElement.isbn);
      this.formRegister.controls['id_editorial'].setValue(this.dataElement.id_editorial);
      this.formRegister.controls['title'].setValue(this.dataElement.title);
      this.formRegister.controls['n_pages'].setValue(this.dataElement.n_pages);
      this.formRegister.controls['synopsis'].setValue(this.dataElement.synopsis);
      
    }
  }

  controlRegister() {
    const dataRegister = this.formRegister.getRawValue();

    this.data = {
      id: dataRegister.id === null ? 0: dataRegister.id,
      isbn: parseInt(dataRegister.isbn),
      id_editorial: dataRegister.id_editorial,
      title: dataRegister.title,
      synopsis: dataRegister.synopsis,
      n_pages: parseInt(dataRegister.n_pages)
    }

    if (this.dataElement) {
      this.libraryService.updateLibrarys(this.data).subscribe(responsePut => {
        if (responsePut.status === 'Ok') {
          this.modalService.close(this.nameModal);
          this.returnElement.emit(responsePut);
        }
        
        this.snackBarService.showSnackBar(responsePut.message, 'Cerrar', responsePut.status === 'Ok' ? 3000 : 5000);
      })
    } else {
      this.libraryService.setLibrarys(this.data).subscribe(responseSet => {
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
