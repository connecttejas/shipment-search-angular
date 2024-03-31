export interface Shipment {
    AssignedToUserId?: string;
    Status?: string;
    DeliveryMethod?: string;
    ExpectedShipmentDate?: string;
    OrderNo?: string;
    ScacAndService?: string;
    ShipmentKey?: string;
    ShipmentNo?: string;
    BillToAddress?: Address;
    ToAddress?: Address;
    ShipmentLines?: ShipmentLines;
}

interface Address {
    FirstName?: string;
    LastName?: string;
    EmailID?: string;
    Phonenumber?: string;
    AddressID?: string;
    AddressLine1?: string;
    AddressLine2?: string;
    City?: string;
    Country?: string;
    State?: string;
    ZipCode?: string;
    PersonInfoKey?: string;
    DayPhone?: string; 
}

interface ShipmentLines {
    TotalNumberOfRecords?: string;
    ShipmentLine?: ShipmentLine[];
}

interface ShipmentLine {
    Quantity?: string;
    ShipmentLineKey?: string;
    OrderLine?: OrderLine;
}

interface OrderLine {
    ItemDetails?: ItemDetails;
}

interface ItemDetails {
    DisplayUnitOfMeasure?: string;
    Description: string;
    ImageUrl?: string;
    ItemID?: string;
}
