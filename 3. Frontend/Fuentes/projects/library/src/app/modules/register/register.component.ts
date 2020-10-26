import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { LibraryService } from '@app/library/services/library-services';
import { ModalService } from '@common/modal/modal.service';
import { SnackBarService } from '@common/snack-bar/snack-bar-service';
import { TranslateService } from '@ngx-translate/core';
import { setLanguage } from '@utils/index';

@Component({
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  selector: 'app-register',
  templateUrl: './register.html',
})
export class PageRegisterComponent implements OnInit, AfterViewInit  {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public dataSource: MatTableDataSource<any>;
  public librarys: any;
  public lstEditorials: any; 
  expandedElement: any | null;
  columnsToDisplay;
  showEdit: boolean;
  isEditRegister: boolean;
  dataElement: any;
  
  constructor(
    private libraryService: LibraryService,
    private modalService: ModalService,
    private snackBarService: SnackBarService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(setLanguage('language'));
  }

  ngOnInit() {
    this.initValues();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  initValues() {
    this.libraryService.getLibrarys().subscribe(responseLibrarys => {
      this.columnsToDisplay = ['id', 'isbn', 'editorial', 'title', 'n_pages', 'actions'];
      this.librarys = responseLibrarys;
      // this.dataSource = this.librarys;
      this.dataSource = new MatTableDataSource(this.librarys);
    });

    this.libraryService.getEditorials().subscribe(responseLibrarys => {
      this.lstEditorials = responseLibrarys;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  processAction(id, data?) {
    this.dataElement = data;
    this.showEdit = false;
    

    setTimeout(() => {
      this.showEdit = true;
      this.modalService.open(id);
    });
  }

  deleteElement(element: any) {
    this.libraryService.deleteLibrarys(element).subscribe(response => {
      if (response.transaction === 1) {
        this.initValues();
      };
      this.snackBarService.showSnackBar(response.message, 'Cerrar', 3000);
    }); 
  }

  returnElement(event) {
    this.initValues();
  }
}
