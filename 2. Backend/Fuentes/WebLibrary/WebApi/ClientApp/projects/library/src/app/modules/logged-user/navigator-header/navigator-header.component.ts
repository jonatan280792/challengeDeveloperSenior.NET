import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { ThemeService } from '@services/theme-service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { sessionPersistence } from '@utils/session-persistence.util';
import { TranslateService } from '@ngx-translate/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigator-header',
  templateUrl: './navigator-header.html',
  // encapsulation: ViewEncapsulation.None
})
export class NavigatorHeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav;
  public language: string;
  public theme: string;
  public themeList = [
    { businessCode: '1', description: 'logged-user.themes.theme1', icon: 'blueWhite' },
    { businessCode: '2', description: 'logged-user.themes.theme2', icon: 'pinkBlack' },
    { businessCode: '3', description: 'logged-user.themes.theme3', icon: 'blueBlack' }
  ];

  languages: any = [
    { value: 'es', description: 'Español', icon: 'spanish' },
    { value: 'en', description: 'Ingles', icon: 'english' },
  ];

  constructor(
    private themeService: ThemeService,
    private translate: TranslateService,
    private overlayContainer: OverlayContainer
  ) {
    const browserLang = translate.getBrowserLang();
    this.translate.setDefaultLang(browserLang);
    this.loadLanguage();    
  }

  ngOnInit() {}

  loadLanguage() {
    this.language = sessionPersistence.get('language');
    
    if (this.language) {
      this.useLanguage(this.language);
    }
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkBlue(checked);
  }

  changeTheme(theme: string) {
    this.language = theme;
    const checked = true;
    if (theme === '2') {
      this.themeService.setDarkPink(checked);
      this.themeService.setDarkBlue(false);
      this.themeService.setColorTheme('pinkDark');
      this.overlayContainer.getContainerElement().classList.add('blue-dark');
    } else if (theme === '3') {
      this.themeService.setDarkBlue(checked);
      this.themeService.setDarkPink(false);
      this.themeService.setColorTheme('blueDark');
    } else {
      this.themeService.setDarkBlue(false);
      this.themeService.setDarkPink(false);
      this.overlayContainer.getContainerElement().classList.remove('blue-dark');
    }
  }

  useLanguage(language: string) {
    this.language = language;

    sessionPersistence.set('language', this.language);
    this.translate.use(this.language);
  }
}
