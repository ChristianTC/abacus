import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as i0 from "@angular/core";
export declare class RichTextEditorComponent implements OnInit {
    private elementRef;
    Type: string;
    Height: string;
    LabelStyle: {};
    LabelName: string;
    Value: string;
    Disabled: boolean;
    editorChange: EventEmitter<any>;
    minHeight: string;
    isExpand: boolean;
    Editor: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    onChange({ editor }: ChangeEvent): void;
    onReady(editor: any): void;
    expandEditor(): void;
    callapseEditor(): void;
    static ɵfac: i0.ɵɵFactoryDef<RichTextEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RichTextEditorComponent, "emuna-rich-text-editor", never, { "Type": "Type"; "Height": "Height"; "LabelStyle": "LabelStyle"; "LabelName": "LabelName"; "Value": "Value"; "Disabled": "Disabled"; }, { "editorChange": "editorChange"; }, never, never>;
}
