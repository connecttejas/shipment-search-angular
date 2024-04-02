import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../../helper.service';
import { Shipment } from '../shipment';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrl: './shipment-details.component.scss'
})
export class ShipmentDetailsComponent implements OnInit {

  public orderId = '';
  public responseData = {};
  public shipmentDetails: Shipment = {};
  public showInfo: boolean = false;
  public isDataAvailable = false;
  public screenWidth:any;

  constructor(private route: ActivatedRoute, private helperService: HelperService, private router: Router) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id') ?? '';
    this.helperService.getShipmentDetails().subscribe(res => {
      if(res.Shipment.OrderNo === this.orderId){
        this.isDataAvailable = true;
        this.shipmentDetails =  res.Shipment;
      }else{
        this.isDataAvailable = false;
        this.shipmentDetails ={};
      }
    });

  }

  @HostListener('window:resize',['event'])
  getScreenSize(e?:any){
    this.screenWidth = window.innerWidth;
  }

  public expandInfo() {
    this.showInfo = !this.showInfo;
  }

  public onBack() {
    history.back();
  }

  public onClose() {
    this.router.navigate(['/home']);
  }
}
