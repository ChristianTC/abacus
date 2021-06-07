import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵelementEnd, EventEmitter, ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵɵtext, ɵɵtemplate, ɵɵclassProp, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { NgIf, CommonModule } from '@angular/common';
import { CKEditorComponent, CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgControlStatus, NgModel, FormsModule } from '@angular/forms';

function RichTextEditorComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function RichTextEditorComponent_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.expandEditor(); });
    ɵɵelement(1, "i", 5);
    ɵɵelementEnd();
} }
function RichTextEditorComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function RichTextEditorComponent_button_5_Template_button_click_0_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.callapseEditor(); });
    ɵɵelement(1, "i", 6);
    ɵɵelementEnd();
} }
class RichTextEditorComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.Type = 'classic';
        this.Height = '300px';
        this.LabelStyle = {};
        this.Disabled = false;
        this.editorChange = new EventEmitter();
        this.isExpand = false;
        // public Editor = ClassicEditor;
        this.Editor = DecoupledEditor;
    }
    ngOnInit() {
    }
    ngOnChanges(event) {
        if (event.Height) {
            console.log(event.Height);
            this.minHeight = event.Height.currentValue;
            this.elementRef.nativeElement.style.setProperty('--ck-height', this.minHeight);
        }
    }
    onChange({ editor }) {
        const data = editor.getData();
        this.editorChange.emit(data);
    }
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    expandEditor() {
        this.minHeight = 'calc(100vh - 72px)';
        this.elementRef.nativeElement.style.setProperty('--ck-height', this.minHeight);
        this.isExpand = true;
    }
    callapseEditor() {
        this.minHeight = this.Height;
        this.elementRef.nativeElement.style.setProperty('--ck-height', this.minHeight);
        this.isExpand = false;
    }
}
RichTextEditorComponent.ɵfac = function RichTextEditorComponent_Factory(t) { return new (t || RichTextEditorComponent)(ɵɵdirectiveInject(ElementRef)); };
RichTextEditorComponent.ɵcmp = ɵɵdefineComponent({ type: RichTextEditorComponent, selectors: [["emuna-rich-text-editor"]], inputs: { Type: "Type", Height: "Height", LabelStyle: "LabelStyle", LabelName: "LabelName", Value: "Value", Disabled: "Disabled" }, outputs: { editorChange: "editorChange" }, features: [ɵɵNgOnChangesFeature], decls: 7, vars: 8, consts: [[1, "ckeditor-area"], [2, "background", "#dcdcdc", "line-height", "32px", "padding-left", "10px"], ["class", "btn btn-exp", 3, "click", 4, "ngIf"], [3, "editor", "ngModel", "disabled", "ngModelChange", "change", "ready"], [1, "btn", "btn-exp", 3, "click"], [1, "fal", "fa-expand-arrows"], [1, "fal", "fa-compress-alt"]], template: function RichTextEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "label");
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵtemplate(4, RichTextEditorComponent_button_4_Template, 2, 0, "button", 2);
        ɵɵtemplate(5, RichTextEditorComponent_button_5_Template, 2, 0, "button", 2);
        ɵɵelementEnd();
        ɵɵelementStart(6, "ckeditor", 3);
        ɵɵlistener("ngModelChange", function RichTextEditorComponent_Template_ckeditor_ngModelChange_6_listener($event) { return ctx.Value = $event; })("change", function RichTextEditorComponent_Template_ckeditor_change_6_listener($event) { return ctx.onChange($event); })("ready", function RichTextEditorComponent_Template_ckeditor_ready_6_listener($event) { return ctx.onReady($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("fixed-area", ctx.isExpand);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.LabelName);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isExpand);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isExpand);
        ɵɵadvance(1);
        ɵɵproperty("editor", ctx.Editor)("ngModel", ctx.Value)("disabled", ctx.Disabled);
    } }, directives: [NgIf, CKEditorComponent, NgControlStatus, NgModel], styles: ["[_nghost-%COMP%] {\n      --ck-height: 200px;\n    }\n    .ckeditor-area[_ngcontent-%COMP%] {width:100%;position:relative;}\n    .fixed-area[_ngcontent-%COMP%] {\n      position: fixed !important;\n      top: 0px;\n      left: 0px;\n      right: 10px;\n      z-index: 1200;\n      height: 100vh;\n      background: #fff;\n      overflow: auto;\n    }\n    .btn-exp[_ngcontent-%COMP%], .btn-exp[_ngcontent-%COMP%]:hover, .btn-exp[_ngcontent-%COMP%]:focus {\n        position: absolute;\n        right: 10px;\n        z-index: 100;\n        top: 4px !important;\n        background: transparent;\n        border: none;\n        outline: none;\n        color: #000;\n        box-shadow: none;\n        padding: 2px 7px;\n        font-size: 14px;\n    }\n    .fixed-area[_ngcontent-%COMP%]   .btn-exp[_ngcontent-%COMP%] {\n      z-index:1400 !important;\n    }\n    [_nghost-%COMP%]  .ck-editor__editable_inline {\n      height: var(--ck-height);\n      overflow: auto;\n    }"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RichTextEditorComponent, [{
        type: Component,
        args: [{
                selector: 'emuna-rich-text-editor',
                template: `
  <div class="ckeditor-area" [class.fixed-area]="isExpand">
    <div style="background: #dcdcdc;line-height: 32px;padding-left: 10px;">
      <label>{{LabelName}}</label>
      <button *ngIf="!isExpand" (click)="expandEditor()" class="btn btn-exp"><i class="fal fa-expand-arrows"></i></button>
      <button *ngIf="isExpand"  (click)="callapseEditor()" class="btn btn-exp"><i class="fal fa-compress-alt"></i></button>
    </div>
    <ckeditor [editor]="Editor" [(ngModel)]="Value" (change)="onChange($event)" (ready)="onReady($event)" [disabled]="Disabled"></ckeditor>   
  </div>
  `,
                styles: [`
    :host {
      --ck-height: 200px;
    }
    .ckeditor-area {width:100%;position:relative;}
    .fixed-area {
      position: fixed !important;
      top: 0px;
      left: 0px;
      right: 10px;
      z-index: 1200;
      height: 100vh;
      background: #fff;
      overflow: auto;
    }
    .btn-exp,.btn-exp:hover,.btn-exp:focus {
        position: absolute;
        right: 10px;
        z-index: 100;
        top: 4px !important;
        background: transparent;
        border: none;
        outline: none;
        color: #000;
        box-shadow: none;
        padding: 2px 7px;
        font-size: 14px;
    }
    .fixed-area .btn-exp {
      z-index:1400 !important;
    }
    :host::ng-deep .ck-editor__editable_inline {
      height: var(--ck-height);
      overflow: auto;
    }
  `]
            }]
    }], function () { return [{ type: ElementRef }]; }, { Type: [{
            type: Input
        }], Height: [{
            type: Input
        }], LabelStyle: [{
            type: Input
        }], LabelName: [{
            type: Input
        }], Value: [{
            type: Input
        }], Disabled: [{
            type: Input
        }], editorChange: [{
            type: Output
        }] }); })();

class RichTextEditor {
}
RichTextEditor.ɵmod = ɵɵdefineNgModule({ type: RichTextEditor });
RichTextEditor.ɵinj = ɵɵdefineInjector({ factory: function RichTextEditor_Factory(t) { return new (t || RichTextEditor)(); }, imports: [[
            CommonModule,
            FormsModule,
            CKEditorModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RichTextEditor, { declarations: [RichTextEditorComponent], imports: [CommonModule,
        FormsModule,
        CKEditorModule], exports: [RichTextEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(RichTextEditor, [{
        type: NgModule,
        args: [{
                declarations: [RichTextEditorComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    CKEditorModule
                ],
                exports: [RichTextEditorComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of rich-text-editor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RichTextEditor, RichTextEditorComponent };
//# sourceMappingURL=rich-text-editor.js.map
