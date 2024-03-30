import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private translate: TranslateService) {
  }
  public setDefaultLang(lang: string) {
    this.translate.setDefaultLang(lang);
  }


}
