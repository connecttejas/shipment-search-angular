import { Component } from '@angular/core';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shipment-search-app';
  constructor(private helperService: HelperService) {
    helperService.setDefaultLang('en');
  }
}
