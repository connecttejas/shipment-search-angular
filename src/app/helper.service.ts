import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private jsonUrl = 'assets/shipment-list.json';

  constructor(private translate: TranslateService, private http: HttpClient) {
  }

  public getAllShipments(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

  public setDefaultLang(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  public switchLanguage(lang: string) {
    this.translate.use(lang);
  }

}
