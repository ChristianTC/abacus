import { OnInit, ElementRef, NgZone, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import * as ɵngcc0 from '@angular/core';
export declare class AddressComponent implements OnInit {
    private http;
    private mapsAPILoader;
    private ngZone;
    searchElementRef: ElementRef;
    object: any;
    itemObject: any;
    addressStr: any;
    switchStyle: boolean;
    staticStyle: boolean;
    labelStyle: any;
    borderStyle: any;
    valueStyle: any;
    selectValueStyle: any;
    buttonStyle: any;
    lableBoxStyle: any;
    borderBoxStyle: any;
    mapBoxStyle: any;
    getvalue: EventEmitter<any>;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    GenericToken: any;
    database: any;
    schema: any;
    procedure: any;
    apiURL: any;
    body: any;
    dropdownList: any;
    isRebind: any;
    geoCoder: any;
    latitude: number;
    longitude: number;
    copylatitude: number;
    copylongitude: number;
    isGoogleOpen: any;
    zoom: number;
    address: string;
    addressObj: any;
    constructor(http: HttpClient, mapsAPILoader: MapsAPILoader, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    apply(event: any): void;
    setCurrentLocation(): void;
    getAddress(latitude: any, longitude: any): void;
    getLatLan(): void;
    openGoogle(): void;
    closeGoogle(event: any): void;
    getDrpData(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddressComponent, "sml-address", never, { "object": "object"; "itemObject": "itemObject"; "addressStr": "addressStr"; "staticStyle": "staticStyle"; "GenericToken": "GenericToken"; "database": "database"; "schema": "schema"; "procedure": "procedure"; "apiURL": "apiURL"; "body": "body"; "switchStyle": "switchStyle"; "labelStyle": "labelStyle"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; "selectValueStyle": "selectValueStyle"; "buttonStyle": "buttonStyle"; "lableBoxStyle": "lableBoxStyle"; "borderBoxStyle": "borderBoxStyle"; "mapBoxStyle": "mapBoxStyle"; }, { "getvalue": "getvalue"; }, never, never>;
}

//# sourceMappingURL=address.component.d.ts.map