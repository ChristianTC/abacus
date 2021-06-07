import { OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class NotesComponent implements OnInit {
    private http;
    noteId: any;
    noteData: any;
    apiURL: any;
    fileurl: string;
    GenericToken: any;
    dataBase: any;
    spList: any;
    clickMethod: EventEmitter<any>;
    myInput: any;
    User: any;
    NoteObject: any;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    constructor(http: HttpClient);
    ngOnInit(): void;
    getNotes(): boolean;
    saveNote(): void;
    onInput(event: any): void;
    onInput1(event: any): void;
    isToday(date: any): any;
    groupBy(data: any): any[];
    format(data: any, format: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NotesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NotesComponent, "sml-notes", never, { "noteId": "noteId"; "noteData": "noteData"; "apiURL": "apiURL"; "fileurl": "fileurl"; "GenericToken": "GenericToken"; "dataBase": "dataBase"; "spList": "spList"; }, { "clickMethod": "clickMethod"; }, never, never>;
}

//# sourceMappingURL=notes.component.d.ts.map