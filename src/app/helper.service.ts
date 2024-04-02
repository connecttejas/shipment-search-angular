import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelperService {


  constructor(private translate: TranslateService, private http: HttpClient) {
  }

  public getAllShipments(): Observable<any> {
    return this.http.get<any>('assets/shipment-list.json');
  }
  
  public getShipmentDetails(): Observable<any> {
    return this.http.get<any>('assets/shipment-details.json');
  }

  public setDefaultLang(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  public switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  public getShipmentListScroll(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>('assets/shipment-list.json')
      .pipe(map(items => items.Shipments.Shipment.slice((page - 1) * pageSize, page * pageSize)));
  }

}
