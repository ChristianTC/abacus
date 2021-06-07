import { OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class VideoUploadComponent implements OnInit {
    private http;
    url: string;
    path: string;
    database: string;
    schema: any;
    fileResponse: EventEmitter<any>;
    deletefileResponse: EventEmitter<any>;
    fileId: any;
    fileGroupId: any;
    GenericToken: any;
    thumbUrl: any;
    videoLink: any;
    percentDone: number;
    uploadSuccess: boolean;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    constructor(http: HttpClient);
    ngOnInit(): void;
    uploadAndProgress(files: File[]): void;
    deleteFIles(fileId: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VideoUploadComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<VideoUploadComponent, "sml-video-upload", never, { "url": "url"; "path": "path"; "database": "database"; "schema": "schema"; "fileId": "fileId"; "fileGroupId": "fileGroupId"; "GenericToken": "GenericToken"; }, { "fileResponse": "fileResponse"; "deletefileResponse": "deletefileResponse"; }, never, never>;
}

//# sourceMappingURL=video-upload.component.d.ts.map