import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
let SelectComponent = class SelectComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.id = 'sml-input-select';
        this.label = "Label Name";
        this.disabled = false;
        this.clearable = false;
        this.listValue = [];
        this.value = "";
        this.signalStyle = false;
        this.staticStyle = true;
        this.switchStyle = true;
        this.swGroupBy = false;
        this.multiple = false;
        this.selectvalue = new EventEmitter;
        this.isOpen = false;
    }
    ngOnInit() {
        if (this.value == "") {
            this.value = null;
        }
    }
    ngOnChanges(event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            let css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            let css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            let css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    }
    getselectvalue(event) {
        if (event) {
            this.selectvalue.emit(event.id);
        }
        else {
            this.value = null;
            this.selectvalue.emit("");
        }
    }
    onOpen() {
        this.isOpen = true;
    }
    onClose() {
        this.isOpen = false;
    }
};
SelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], SelectComponent.prototype, "id", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "label", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "clearable", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "listValue", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "value", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "style", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "swGroupBy", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "multiple", void 0);
__decorate([
    Output()
], SelectComponent.prototype, "selectvalue", void 0);
SelectComponent = __decorate([
    Component({
        selector: 'sml-input-select',
        template: `
    <div class="position-relative">
        <div class="input-field" [ngStyle]="borderStyle" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}">
            <ng-select *ngIf="!swGroupBy" [items]="listValue" bindLabel="name" [clearable]="clearable" [disabled]="disabled" bindValue="id" (change)="getselectvalue($event)"
                [(ngModel)]="value"   (open)="onOpen()" (close)="onClose()" [multiple]="multiple">
            </ng-select>
            <ng-select *ngIf="swGroupBy" [items]="listValue" bindLabel="name" [clearable]="clearable" [disabled]="disabled" bindValue="id" (change)="getselectvalue($event)"
                [(ngModel)]="value"   (open)="onOpen()" (close)="onClose()" groupBy="group" [multiple]="multiple">
                <ng-template ng-optgroup-tmp let-item="item">
                    {{item.group}}
                </ng-template>
            </ng-select>
            <label *ngIf="switchStyle" class="label" [ngClass]="{'z-9999': isOpen}" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
        <label *ngIf="!switchStyle" class="label"  [ngStyle]="style">
            {{ label }}
        </label>
    </div>
    `,
        styles: [`
    :host{--c-width:645px;--c-height:44px;--label-left:4px;--label-top:2px;--value-left:4px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
    .position-relative{position:relative;}
    .input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
    .float-groupdd{position:relative;padding:0px;}
    .signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
    .label{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;
        text-align: left;}
    .z-9999{z-index:9999;}
    .float-groupdd .label{position:absolute;top:-24px;left:0px;font-size:12px;}
    .float-group{position:relative;padding:14px 2px 0px 0px;}
    .float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}
    

    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, .float-group .label {
            top: 0%!important;
            transform: translateY(50%);
        }
    }
    
    .float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
    :host /deep/ .ng-select .ng-select-container{border:none !important;}
    :host /deep/ .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}
    :host /deep/ .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}
    :host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}
    `]
    })
], SelectComponent);
export { SelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxRGpILElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFpQnhCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFoQmpDLE9BQUUsR0FBUSxrQkFBa0IsQ0FBQztRQUM3QixVQUFLLEdBQVEsWUFBWSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFJaEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDekMsV0FBTSxHQUFPLEtBQUssQ0FBQztJQUVuQixDQUFDO0lBQ0QsUUFBUTtRQUNKLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUM7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQUs7UUFDYixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtZ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QUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTtpREFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7a0RBQTRCO0FBQzNCO0lBQVIsS0FBSyxFQUFFO2tEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs4Q0FBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7OENBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTtvREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7bURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO29EQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTtvREFBNkI7QUFDNUI7SUFBUixLQUFLLEVBQUU7b0RBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO2tEQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTtpREFBMkI7QUFDekI7SUFBVCxNQUFNLEVBQUU7b0RBQWdDO0FBZmhDLGVBQWU7SUFuRDNCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW9CVDtpQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQlI7S0FDSixDQUFDO0dBQ1csZUFBZSxDQTREM0I7U0E1RFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc21sLWlucHV0LXNlbGVjdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCIgW25nU3R5bGVdPVwiYm9yZGVyU3R5bGVcIiBbbmdDbGFzc109XCJ7J2Zsb2F0LWdyb3VwJzpzd2l0Y2hTdHlsZSwnZmxvYXQtZ3JvdXBkZCc6ICFzd2l0Y2hTdHlsZSwnc2lnbmFsLWxpbmUnOiBzaWduYWxTdHlsZSwnZmxvYXQtZ3JvdXAtc3RhdGljJzogc3RhdGljU3R5bGV9XCI+XHJcbiAgICAgICAgICAgIDxuZy1zZWxlY3QgKm5nSWY9XCIhc3dHcm91cEJ5XCIgW2l0ZW1zXT1cImxpc3RWYWx1ZVwiIGJpbmRMYWJlbD1cIm5hbWVcIiBbY2xlYXJhYmxlXT1cImNsZWFyYWJsZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIGJpbmRWYWx1ZT1cImlkXCIgKGNoYW5nZSk9XCJnZXRzZWxlY3R2YWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIiAgIChvcGVuKT1cIm9uT3BlbigpXCIgKGNsb3NlKT1cIm9uQ2xvc2UoKVwiIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiPlxyXG4gICAgICAgICAgICA8L25nLXNlbGVjdD5cclxuICAgICAgICAgICAgPG5nLXNlbGVjdCAqbmdJZj1cInN3R3JvdXBCeVwiIFtpdGVtc109XCJsaXN0VmFsdWVcIiBiaW5kTGFiZWw9XCJuYW1lXCIgW2NsZWFyYWJsZV09XCJjbGVhcmFibGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBiaW5kVmFsdWU9XCJpZFwiIChjaGFuZ2UpPVwiZ2V0c2VsZWN0dmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCIgICAob3Blbik9XCJvbk9wZW4oKVwiIChjbG9zZSk9XCJvbkNsb3NlKClcIiBncm91cEJ5PVwiZ3JvdXBcIiBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIj5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZy1vcHRncm91cC10bXAgbGV0LWl0ZW09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtLmdyb3VwfX1cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvbmctc2VsZWN0PlxyXG4gICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJzd2l0Y2hTdHlsZVwiIGNsYXNzPVwibGFiZWxcIiBbbmdDbGFzc109XCJ7J3otOTk5OSc6IGlzT3Blbn1cIiBbbmdTdHlsZV09XCJzdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAge3sgbGFiZWwgfX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bGFiZWwgKm5nSWY9XCIhc3dpdGNoU3R5bGVcIiBjbGFzcz1cImxhYmVsXCIgIFtuZ1N0eWxlXT1cInN0eWxlXCI+XHJcbiAgICAgICAgICAgIHt7IGxhYmVsIH19XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIDpob3N0ey0tYy13aWR0aDo2NDVweDstLWMtaGVpZ2h0OjQ0cHg7LS1sYWJlbC1sZWZ0OjRweDstLWxhYmVsLXRvcDoycHg7LS12YWx1ZS1sZWZ0OjRweDstLXZhbHVlLXRvcDoxN3B4Oy0tZm9udC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyk7LS1iYWNrLWNvbG9yOiNmZmY7LS1mb250LXNpemU6MTRweDstLWZvbnQtd2VpZ2h0OjIwMDstLWZvbnQtZmFtaWx5OkFyaWFsO31cclxuICAgIC5wb3NpdGlvbi1yZWxhdGl2ZXtwb3NpdGlvbjpyZWxhdGl2ZTt9XHJcbiAgICAuaW5wdXQtZmllbGR7Ym9yZGVyOjFweCBzb2xpZCAjZGVlMmU2O2JvcmRlci1yYWRpdXM6MnB4O3dpZHRoOnZhcigtLWMtd2lkdGgpICFpbXBvcnRhbnQ7bWluLWhlaWdodDp2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtoZWlnaHQ6YXV0bzt9XHJcbiAgICAuZmxvYXQtZ3JvdXBkZHtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjBweDt9XHJcbiAgICAuc2lnbmFsLWxpbmV7Ym9yZGVyLXRvcDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLWxlZnQ6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1yaWdodDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowcHggIWltcG9ydGFudDt9XHJcbiAgICAubGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yNHB4O2xlZnQ6MHB4O2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7fVxyXG4gICAgLnotOTk5OXt6LWluZGV4Ojk5OTk7fVxyXG4gICAgLmZsb2F0LWdyb3VwZGQgLmxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjRweDtsZWZ0OjBweDtmb250LXNpemU6MTJweDt9XHJcbiAgICAuZmxvYXQtZ3JvdXB7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoxNHB4IDJweCAwcHggMHB4O31cclxuICAgIC5mbG9hdC1ncm91cCAubGFiZWx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6bm9ybWFsO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7bGVmdDp2YXIoLS1sYWJlbC1sZWZ0KTt0cmFuc2l0aW9uOmFsbCAyMDBtcztvcGFjaXR5OjE7bWFyZ2luOjA7d2lkdGg6ODclO2hlaWdodDphdXRvfVxyXG4gICAgXHJcblxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpIHtcclxuICAgICAgICAqOjotbXMtYmFja2Ryb3AsIC5mbG9hdC1ncm91cCAubGFiZWwge1xyXG4gICAgICAgICAgICB0b3A6IDAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmxvYXQtZ3JvdXAtc3RhdGljIC5sYWJlbHtmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6dmFyKC0tbGFiZWwtdG9wKTtsZWZ0OnZhcigtLWxhYmVsLWxlZnQpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7dHJhbnNpdGlvbjphbGwgMjAwbXM7b3BhY2l0eToxO21hcmdpbjowO3dpZHRoOjg3JTtoZWlnaHQ6YXV0bzt9XHJcbiAgICA6aG9zdCAvZGVlcC8gLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXI6bm9uZSAhaW1wb3J0YW50O31cclxuICAgIDpob3N0IC9kZWVwLyAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1sZWZ0OnZhcigtLXZhbHVlLWxlZnQpICFpbXBvcnRhbnQ7cGFkZGluZy10b3A6dmFyKC0tdmFsdWUtdG9wKSAhaW1wb3J0YW50O31cclxuICAgIDpob3N0IC9kZWVwLyAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OnZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6dmFyKC0tZm9udC13ZWlnaHQpICFpbXBvcnRhbnQ7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1iYWNrLWNvbG9yKSAhaW1wb3J0YW50O2NvbG9yOnZhcigtLWZvbnQtY29sb3IpICFpbXBvcnRhbnQ7fVxyXG4gICAgOmhvc3QgL2RlZXAvIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHt0b3A6dmFyKC0tdmFsdWUtdG9wKSAhaW1wb3J0YW50O31cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgaWQ6IGFueSA9ICdzbWwtaW5wdXQtc2VsZWN0JztcclxuICAgIEBJbnB1dCgpIGxhYmVsOiBhbnkgPSBcIkxhYmVsIE5hbWVcIjtcclxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBjbGVhcmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGxpc3RWYWx1ZTogYW55ID0gW107XHJcbiAgICBASW5wdXQoKSB2YWx1ZTogYW55ID0gXCJcIjtcclxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgc2lnbmFsU3R5bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHN0YXRpY1N0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHN3aXRjaFN0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHN3R3JvdXBCeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3R2YWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgICBpc09wZW46YW55ID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmKHRoaXMudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5nT25DaGFuZ2VzKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5zdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBldmVudC5zdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtd2lkdGgnLCBjc3NbJ2Mtd2lkdGgnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtaGVpZ2h0JywgY3NzWydjLWhlaWdodCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtbGVmdCcsIGNzc1snbGFiZWwtbGVmdCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtdG9wJywgY3NzWydsYWJlbC10b3AnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC52YWx1ZVN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNzcyA9IGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS1sZWZ0JywgY3NzWyd2YWx1ZS1sZWZ0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS10b3AnLCBjc3NbJ3ZhbHVlLXRvcCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC1jb2xvcicsIGNzc1snY29sb3InXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtc2l6ZScsIGNzc1snZm9udC1zaXplJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LXdlaWdodCcsIGNzc1snZm9udC13ZWlnaHQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtZmFtaWx5JywgY3NzWydmb250LWZhbWlseSddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmJvcmRlclN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5ib3JkZXJTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBldmVudC5ib3JkZXJTdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2stY29sb3InLCBjc3NbJ2JhY2tncm91bmQtY29sb3InXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0c2VsZWN0dmFsdWUoZXZlbnQpIHtcclxuICAgICAgICBpZihldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0dmFsdWUuZW1pdChldmVudC5pZCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdHZhbHVlLmVtaXQoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25PcGVuKCl7XHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgb25DbG9zZSgpe1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19