import { Component, Input, Output, EventEmitter } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ckeditor/ckeditor5-angular";
import * as i3 from "@angular/forms";
function RichTextEditorComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function RichTextEditorComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.expandEditor(); });
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵelementEnd();
} }
function RichTextEditorComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function RichTextEditorComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.callapseEditor(); });
    i0.ɵɵelement(1, "i", 6);
    i0.ɵɵelementEnd();
} }
export class RichTextEditorComponent {
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
RichTextEditorComponent.ɵfac = function RichTextEditorComponent_Factory(t) { return new (t || RichTextEditorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
RichTextEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RichTextEditorComponent, selectors: [["emuna-rich-text-editor"]], inputs: { Type: "Type", Height: "Height", LabelStyle: "LabelStyle", LabelName: "LabelName", Value: "Value", Disabled: "Disabled" }, outputs: { editorChange: "editorChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 8, consts: [[1, "ckeditor-area"], [2, "background", "#dcdcdc", "line-height", "32px", "padding-left", "10px"], ["class", "btn btn-exp", 3, "click", 4, "ngIf"], [3, "editor", "ngModel", "disabled", "ngModelChange", "change", "ready"], [1, "btn", "btn-exp", 3, "click"], [1, "fal", "fa-expand-arrows"], [1, "fal", "fa-compress-alt"]], template: function RichTextEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "label");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, RichTextEditorComponent_button_4_Template, 2, 0, "button", 2);
        i0.ɵɵtemplate(5, RichTextEditorComponent_button_5_Template, 2, 0, "button", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "ckeditor", 3);
        i0.ɵɵlistener("ngModelChange", function RichTextEditorComponent_Template_ckeditor_ngModelChange_6_listener($event) { return ctx.Value = $event; })("change", function RichTextEditorComponent_Template_ckeditor_change_6_listener($event) { return ctx.onChange($event); })("ready", function RichTextEditorComponent_Template_ckeditor_ready_6_listener($event) { return ctx.onReady($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("fixed-area", ctx.isExpand);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.LabelName);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isExpand);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isExpand);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("editor", ctx.Editor)("ngModel", ctx.Value)("disabled", ctx.Disabled);
    } }, directives: [i1.NgIf, i2.CKEditorComponent, i3.NgControlStatus, i3.NgModel], styles: ["[_nghost-%COMP%] {\n      --ck-height: 200px;\n    }\n    .ckeditor-area[_ngcontent-%COMP%] {width:100%;position:relative;}\n    .fixed-area[_ngcontent-%COMP%] {\n      position: fixed !important;\n      top: 0px;\n      left: 0px;\n      right: 10px;\n      z-index: 1200;\n      height: 100vh;\n      background: #fff;\n      overflow: auto;\n    }\n    .btn-exp[_ngcontent-%COMP%], .btn-exp[_ngcontent-%COMP%]:hover, .btn-exp[_ngcontent-%COMP%]:focus {\n        position: absolute;\n        right: 10px;\n        z-index: 100;\n        top: 4px !important;\n        background: transparent;\n        border: none;\n        outline: none;\n        color: #000;\n        box-shadow: none;\n        padding: 2px 7px;\n        font-size: 14px;\n    }\n    .fixed-area[_ngcontent-%COMP%]   .btn-exp[_ngcontent-%COMP%] {\n      z-index:1400 !important;\n    }\n    [_nghost-%COMP%]  .ck-editor__editable_inline {\n      height: var(--ck-height);\n      overflow: auto;\n    }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RichTextEditorComponent, [{
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
    }], function () { return [{ type: i0.ElementRef }]; }, { Type: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaC10ZXh0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yaWNoLXRleHQtZWRpdG9yL3NyYy9saWIvcmljaC10ZXh0LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUMzRixzRUFBc0U7QUFDdEUsT0FBTyxLQUFLLGVBQWUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7OztJQVMxRSxpQ0FBdUU7SUFBN0MsZ01BQXdCO0lBQXFCLHVCQUFvQztJQUFBLGlCQUFTOzs7O0lBQ3BILGlDQUF5RTtJQUEvQyxrTUFBMEI7SUFBcUIsdUJBQW1DO0lBQUEsaUJBQVM7O0FBMEMzSCxNQUFNLE9BQU8sdUJBQXVCO0lBY2xDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFaakMsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixpQ0FBaUM7UUFDMUIsV0FBTSxHQUFHLGVBQWUsQ0FBQztJQUNjLENBQUM7SUFFL0MsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsRjtJQUNILENBQUM7SUFFTSxRQUFRLENBQUUsRUFBRSxNQUFNLEVBQWU7UUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxPQUFPLENBQUUsTUFBTTtRQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FDckQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFDOUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUNqQyxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OEZBakRVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FBOUNsQyw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsNkJBQU87UUFBQSxZQUFhO1FBQUEsaUJBQVE7UUFDNUIsOEVBQXVFO1FBQ3ZFLDhFQUF5RTtRQUMzRSxpQkFBTTtRQUNOLG1DQUF1STtRQUEzRyxrSkFBbUIsaUdBQVcsb0JBQWdCLElBQTNCLCtGQUFzQyxtQkFBZSxJQUFyRDtRQUE2RSxpQkFBVztRQUN6SSxpQkFBTTs7UUFQcUIsMENBQTZCO1FBRTdDLGVBQWE7UUFBYixtQ0FBYTtRQUNaLGVBQWlCO1FBQWpCLG9DQUFpQjtRQUNqQixlQUFnQjtRQUFoQixtQ0FBZ0I7UUFFaEIsZUFBaUI7UUFBakIsbUNBQWlCLHNCQUFBLDBCQUFBOztrREF3Q2xCLHVCQUF1QjtjQWpEbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNSLENBQUM7YUFDSDs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xyXG5pbXBvcnQgKiBhcyBEZWNvdXBsZWRFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1kZWNvdXBsZWQtZG9jdW1lbnQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhci9ja2VkaXRvci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlbXVuYS1yaWNoLXRleHQtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJja2VkaXRvci1hcmVhXCIgW2NsYXNzLmZpeGVkLWFyZWFdPVwiaXNFeHBhbmRcIj5cclxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZGNkY2RjO2xpbmUtaGVpZ2h0OiAzMnB4O3BhZGRpbmctbGVmdDogMTBweDtcIj5cclxuICAgICAgPGxhYmVsPnt7TGFiZWxOYW1lfX08L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiIWlzRXhwYW5kXCIgKGNsaWNrKT1cImV4cGFuZEVkaXRvcigpXCIgY2xhc3M9XCJidG4gYnRuLWV4cFwiPjxpIGNsYXNzPVwiZmFsIGZhLWV4cGFuZC1hcnJvd3NcIj48L2k+PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKm5nSWY9XCJpc0V4cGFuZFwiICAoY2xpY2spPVwiY2FsbGFwc2VFZGl0b3IoKVwiIGNsYXNzPVwiYnRuIGJ0bi1leHBcIj48aSBjbGFzcz1cImZhbCBmYS1jb21wcmVzcy1hbHRcIj48L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxja2VkaXRvciBbZWRpdG9yXT1cIkVkaXRvclwiIFsobmdNb2RlbCldPVwiVmFsdWVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiAocmVhZHkpPVwib25SZWFkeSgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cIkRpc2FibGVkXCI+PC9ja2VkaXRvcj4gICBcclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAgIDpob3N0IHtcclxuICAgICAgLS1jay1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNrZWRpdG9yLWFyZWEge3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7fVxyXG4gICAgLmZpeGVkLWFyZWEge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHotaW5kZXg6IDEyMDA7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1leHAsLmJ0bi1leHA6aG92ZXIsLmJ0bi1leHA6Zm9jdXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmZpeGVkLWFyZWEgLmJ0bi1leHAge1xyXG4gICAgICB6LWluZGV4OjE0MDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIDpob3N0OjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgICAgIGhlaWdodDogdmFyKC0tY2staGVpZ2h0KTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJpY2hUZXh0RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgVHlwZSA9ICdjbGFzc2ljJztcclxuICBASW5wdXQoKSBIZWlnaHQgPSAnMzAwcHgnO1xyXG4gIEBJbnB1dCgpIExhYmVsU3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSBMYWJlbE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBWYWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIERpc2FibGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGVkaXRvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBtaW5IZWlnaHQ6IHN0cmluZztcclxuICBpc0V4cGFuZCA9IGZhbHNlO1xyXG5cclxuICAvLyBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjtcclxuICBwdWJsaWMgRWRpdG9yID0gRGVjb3VwbGVkRWRpdG9yO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5IZWlnaHQpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQuSGVpZ2h0KVxyXG4gICAgICAgIHRoaXMubWluSGVpZ2h0ID0gZXZlbnQuSGVpZ2h0LmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jay1oZWlnaHQnLCB0aGlzLm1pbkhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DaGFuZ2UoIHsgZWRpdG9yIH06IENoYW5nZUV2ZW50ICkge1xyXG4gICAgY29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XHJcbiAgICB0aGlzLmVkaXRvckNoYW5nZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUmVhZHkoIGVkaXRvciApIHtcclxuICAgIGVkaXRvci51aS5nZXRFZGl0YWJsZUVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcclxuICAgICAgICBlZGl0b3IudWkudmlldy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgZWRpdG9yLnVpLmdldEVkaXRhYmxlRWxlbWVudCgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kRWRpdG9yKCkge1xyXG4gICAgdGhpcy5taW5IZWlnaHQgPSAnY2FsYygxMDB2aCAtIDcycHgpJztcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWNrLWhlaWdodCcsIHRoaXMubWluSGVpZ2h0KTtcclxuICAgIHRoaXMuaXNFeHBhbmQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2FsbGFwc2VFZGl0b3IoKSB7XHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IHRoaXMuSGVpZ2h0O1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY2staGVpZ2h0JywgdGhpcy5taW5IZWlnaHQpO1xyXG4gICAgdGhpcy5pc0V4cGFuZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19