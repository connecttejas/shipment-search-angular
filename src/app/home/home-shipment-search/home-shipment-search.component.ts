import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from '../../helper.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-shipment-search',
  templateUrl: './home-shipment-search.component.html',
  styleUrl: './home-shipment-search.component.scss'
})


export class HomeShipmentSearchComponent implements OnInit {
  searchForm!: FormGroup;
  orderNos: string[] = [];

  constructor(private helperService: HelperService, private router: Router) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      orderNumber: new FormControl(''),
      shipmentNumber: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl('')
    });
  }

  onSearch() {
    const controls = this.searchForm.controls;
    const orderNumberValue = controls['orderNumber'].value;
    const shipmentNumberValue = controls['shipmentNumber'].value;
    const firstNameValue = controls['firstName'].value;
    const lastNameValue = controls['lastName'].value;
    const emailValue = controls['email'].value;
    const phoneNumberValue = controls['phoneNumber'].value;

    let matchedShipments: any = [];

    this.helperService.getAllShipments()
      .subscribe(data => {
        data.Shipments.Shipment.forEach((shipment: { OrderNo: any; ShipmentNo: any; BillToAddress: { FirstName: any; LastName: any; EMailID: any; DayPhone: any; }; }) => {

          if (
            (orderNumberValue && shipment.OrderNo.toLowerCase() === orderNumberValue.toLowerCase()) ||
            (shipmentNumberValue && shipment.ShipmentNo.toLowerCase() === shipmentNumberValue.toLowerCase()) ||
            (firstNameValue && shipment.BillToAddress.FirstName.toLowerCase() === firstNameValue.toLowerCase()) ||
            (lastNameValue && shipment.BillToAddress.LastName.toLowerCase() === lastNameValue.toLowerCase()) ||
            (emailValue && shipment.BillToAddress.EMailID.toLowerCase() === emailValue.toLowerCase()) ||
            (phoneNumberValue && shipment.BillToAddress.DayPhone.toLowerCase() === phoneNumberValue.toLowerCase())
          ) {
            matchedShipments.push(shipment);
          }
        });



        this.navigateToShipment(matchedShipments)
      });
  }


  navigateToShipment(matchedShipments:any) {
   if (matchedShipments.length === 1) {
      const id = matchedShipments[0].OrderNo;
      this.router.navigate(['/shipment/details', id]);
    } else {
      this.router.navigate(['/shipment']);
    }
  }


  onReset() {
    this.searchForm.reset();
  }
}