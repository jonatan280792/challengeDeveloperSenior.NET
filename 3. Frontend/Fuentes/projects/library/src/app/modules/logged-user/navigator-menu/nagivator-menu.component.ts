import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { onSideNavChange, animateText } from '@common/library/animations/animations';
import { SidenavService } from '@services/library/sidenav.service';
import { TranslateService } from '@ngx-translate/core';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  animations: [onSideNavChange, animateText],
  selector: 'app-navigator-menu',
  templateUrl: './navigator-menu.html'
})

export class NavigatorMenuComponent implements OnInit {
  public sideNavState = false;
  public linkText = false;
  menu: any;

  constructor (
    private sidenavService: SidenavService,
    private translate: TranslateService
  ) {
    // this.translate.setDefaultLang('es');
    this.createMenu();
  }

  ngOnInit() {}

  createMenu() {
    this.menu = [
      {
        title: 'menu.home',
        url: '/home',
        icon: 'dashboard'
      },
      {
        title: 'menu.register',
        url: 'register',
        icon: 'addClients'
      },
      {
        title: 'menu.sales',
        url: 'editorials',
        icon: 'newSale'
      }
    ];
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this.sidenavService.sideNavState$.next(this.sideNavState);
  }


  
}
