import { Component, HostListener, OnInit } from '@angular/core';
import { HelperService } from '../../helper.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-shipment-results',
  templateUrl: './shipment-results.component.html',
  styleUrl: './shipment-results.component.scss'
})
export class ShipmentResultsComponent implements OnInit {

  public shipmentListResponse: any = {};
  public filteredShipmentListResponse: any = {};
  public statuses = [
    "Ready for Backroom Pick",
    "Backroom Pick In Progress",
    "Ready for Customer Pickup",
    "Ready for Packing",
    "Packing in Progress",
    "Packed",
    "Shipped/Picked",
    "Cancelled"
  ];
  
  public items : any[] = [];
  private page : number = 1;
  private pageSize : number = 5;
  public isLoading: boolean = false;


  constructor(private helperService: HelperService, private router: Router) {
    this.loadShipments();
  }

  ngOnInit(): void {
    this.helperService.getAllShipments()
      .subscribe(data => {
        this.shipmentListResponse = data ?? {};
        this.filteredShipmentListResponse = { ...this.shipmentListResponse };

      });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:any){
    console.log(document.body.offsetHeight);
    if((window.innerHeight + window.scrollY)+1 >= document.body.offsetHeight){
      this.loadShipments();
    }
  }


  public onBack() {
    history.back();
  }

  public onClose() {
    this.router.navigate(['/home']);
  }

  public onTileClick(shipment: any) {
    const id = shipment.OrderNo;
    this.router.navigate(['/shipment/details', id]);
  }

  public openFilterPopUp() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  public closeFilterPopUp() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  public onFiltersApplied() {
    const selectedStatuses = this.statuses.filter(status => {
      const checkbox = document.getElementById(status) as HTMLInputElement;
      return checkbox.checked;
    }) ?? [];

    if (selectedStatuses.length === 0) {
      this.filteredShipmentListResponse = { ...this.shipmentListResponse };
    } else {
      const filteredShipmentListResponse: any = {
        Shipments: {
          TotalNumberOfRecords: this.shipmentListResponse.Shipments.TotalNumberOfRecords,
          Shipment: this.shipmentListResponse.Shipments.Shipment.filter((shipment: { Status: string; }) => selectedStatuses.includes(shipment.Status))
        }
      };
      this.filteredShipmentListResponse = { ...filteredShipmentListResponse };
    }
    this.closeFilterPopUp();
  }


  public onResetFilters() {
    this.statuses.forEach(status => {
      const checkbox = document.getElementById(status) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = false;
      }
    });
  }

  public loadShipments(){
    this.isLoading = true
    const fakeDelayForLoading = 2000;
    this.helperService.getShipmentListScroll(this.page, this.pageSize)
    .pipe(delay(fakeDelayForLoading))
    .subscribe(newItems=>{
      console.log("this.items",this.items);
      console.log("this.newItems",newItems);
      this.items = [...this.items, ...newItems];
      console.log("this.items",this.items);
      this.page++;
      this.isLoading = false;
    })
  }

}
