import { OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class MultifileuploadComponent implements OnInit {
    private http;
    idInputFile: string;
    label: any;
    nameFiles: any;
    global_url: any;
    url: any;
    fileurl: any;
    dataBase: any;
    imageSrc: string;
    FilesGroupIdvalue: any;
    moreData: boolean;
    styleZIndex: number;
    fileResponse: EventEmitter<any>;
    afterEdit: EventEmitter<any>;
    GenericToken: any;
    filename: string;
    height: any;
    width: any;
    filelink: string;
    UploadedFileli: boolean;
    FilesGroupId: string;
    editContent: boolean;
    contentIndex: any;
    datas: any;
    description: string;
    textdata: string;
    percentDone: number;
    uploadSuccess: boolean;
    constructor(http: HttpClient);
    upload(files: File[]): void;
    DeleteFIles(value: any): void;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    ngOnInit(): void;
    getListdata(): void;
    uploadAndProgress(files: File[]): void;
    edit(data: any, i: any): void;
    updateName(id: any): void;
    esc(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultifileuploadComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MultifileuploadComponent, "sml-multifileupload", never, { "idInputFile": "idInputFile"; "nameFiles": "nameFiles"; "global_url": "global_url"; "url": "url"; "fileurl": "fileurl"; "dataBase": "dataBase"; "moreData": "moreData"; "label": "label"; "FilesGroupIdvalue": "FilesGroupIdvalue"; "styleZIndex": "styleZIndex"; }, { "fileResponse": "fileResponse"; "afterEdit": "afterEdit"; }, never, never>;
}

//# sourceMappingURL=multifileupload.component.d.ts.map