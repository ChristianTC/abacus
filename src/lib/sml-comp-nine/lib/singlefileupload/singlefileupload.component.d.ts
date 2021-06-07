import { OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class SinglefileuploadComponent implements OnInit {
    private http;
    idInputFile: string;
    label: any;
    global_url: any;
    url: any;
    fileurl: any;
    FilesGroupIdvalue: any;
    FileId: any;
    nameFile: any;
    dataBase: any;
    fileResponse: EventEmitter<any>;
    imageSrc: string;
    GenericToken: any;
    filename: string;
    height: any;
    width: any;
    filelink: string;
    UploadedFileli: boolean;
    FilesGroupId: string;
    editContent: boolean;
    isFiles: any;
    contentIndex: any;
    datas: any;
    description: string;
    textdata: string;
    percentDone: number;
    uploadSuccess: boolean;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    constructor(http: HttpClient);
    ngOnInit(): void;
    upload(files: File[]): void;
    getListdata(): void;
    uploadAndProgress(files: File[]): void;
    edit(data: any, i: any): void;
    updateName(id: any): void;
    esc(): void;
    DeleteFIles(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SinglefileuploadComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SinglefileuploadComponent, "sml-singlefileupload", never, { "idInputFile": "idInputFile"; "global_url": "global_url"; "url": "url"; "fileurl": "fileurl"; "FilesGroupIdvalue": "FilesGroupIdvalue"; "FileId": "FileId"; "nameFile": "nameFile"; "dataBase": "dataBase"; "label": "label"; }, { "fileResponse": "fileResponse"; }, never, never>;
}

//# sourceMappingURL=singlefileupload.component.d.ts.map