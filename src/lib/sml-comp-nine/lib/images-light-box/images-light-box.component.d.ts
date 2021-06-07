import { OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class ImagesLightBoxComponent implements OnInit {
    private http;
    apiURL: any;
    fileurl: string;
    database: string;
    FilesGroupId: any;
    fileResponse: EventEmitter<any>;
    body: any;
    allowFiles: any;
    GenericToken: any;
    imagesData: any;
    error_message: any;
    percentDone: number;
    uploadSuccess: boolean;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    slideIndex: any;
    slideDescription: any;
    constructor(http: HttpClient);
    ngOnInit(): void;
    getToken(): void;
    getListdata(): void;
    getFileType(url: any): "Image" | "Text" | "Audio" | "Video" | "Pdf" | "Csv" | "Doc" | "Ppt" | "Xls" | "File";
    uploadAndProgress(files: File[]): void;
    deleteFIles(value: any, index: any): void;
    openModal(): void;
    closeModal(): void;
    plusSlides(n: any): void;
    currentSlide(n: any): void;
    showSlides(n: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ImagesLightBoxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ImagesLightBoxComponent, "sml-images-light-box", never, { "apiURL": "apiURL"; "fileurl": "fileurl"; "database": "database"; "FilesGroupId": "FilesGroupId"; "body": "body"; "allowFiles": "allowFiles"; "GenericToken": "GenericToken"; }, { "fileResponse": "fileResponse"; }, never, never>;
}

//# sourceMappingURL=images-light-box.component.d.ts.map