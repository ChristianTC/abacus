import { OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import * as ɵngcc0 from '@angular/core';
export declare class CropImageUploadComponent implements OnInit {
    private http;
    height: any;
    width: any;
    type: any;
    value: any;
    ratio: any;
    aspectRatio: any;
    url: string;
    path: string;
    genericToken: any;
    database: any;
    schema: any;
    OnSaveFile: EventEmitter<any>;
    capWidth: any;
    capHeight: any;
    imageName: string;
    imagePath: any;
    isHtmlbind: any;
    isUploadArea: any;
    isUploadStart: any;
    percentDone: number;
    imageChangedEvent: any;
    croppedImage: any;
    scale: number;
    transform: ImageTransform;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    constructor(http: HttpClient);
    ngOnInit(): void;
    ratioCal(): void;
    fileChangeEvent(fileInput: any): void;
    cancleClick(): void;
    upload(): void;
    imageCropped(event: ImageCroppedEvent): void;
    zoomOut(): void;
    zoomIn(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CropImageUploadComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CropImageUploadComponent, "sml-crop-image-upload", never, { "height": "height"; "width": "width"; "type": "type"; "value": "value"; "ratio": "ratio"; "aspectRatio": "aspectRatio"; "url": "url"; "path": "path"; "genericToken": "genericToken"; "database": "database"; "schema": "schema"; }, { "OnSaveFile": "OnSaveFile"; }, never, never>;
}

//# sourceMappingURL=crop-image-upload.component.d.ts.map