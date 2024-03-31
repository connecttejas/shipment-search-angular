import { Component } from '@angular/core';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private language = 'en';
  constructor(private helperService: HelperService) {
    helperService.setDefaultLang(this.language);
  }
  
  switchLang(){
    this.language = this.language === 'en' ? 'fr' : 'en';
    this.helperService.switchLanguage(this.language);
  }
}
