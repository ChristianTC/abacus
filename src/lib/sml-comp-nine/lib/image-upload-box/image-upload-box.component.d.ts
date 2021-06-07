import { OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class ImageUploadBoxComponent implements OnInit {
    private http;
    apiURL: any;
    fileurl: string;
    database: string;
    FilesGroupId: any;
    FileId: any;
    fileResponse: EventEmitter<any>;
    allowFiles: any;
    GenericToken: any;
    imagesData: any;
    isLoading: any;
    error_message: any;
    percentDone: number;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    constructor(http: HttpClient);
    ngOnInit(): void;
    getToken(): void;
    getListdata(): void;
    uploadAndProgress(files: File[]): void;
    deleteFIles(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ImageUploadBoxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ImageUploadBoxComponent, "sml-image-upload-box", never, { "apiURL": "apiURL"; "fileurl": "fileurl"; "database": "database"; "FilesGroupId": "FilesGroupId"; "FileId": "FileId"; "allowFiles": "allowFiles"; "GenericToken": "GenericToken"; }, { "fileResponse": "fileResponse"; }, never, never>;
}

//# sourceMappingURL=image-upload-box.component.d.ts.map