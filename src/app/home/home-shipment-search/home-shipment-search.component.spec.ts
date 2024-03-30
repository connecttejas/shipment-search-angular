import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShipmentSearchComponent } from './home-shipment-search.component';

describe('HomeShipmentSearchComponent', () => {
  let component: HomeShipmentSearchComponent;
  let fixture: ComponentFixture<HomeShipmentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeShipmentSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeShipmentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
