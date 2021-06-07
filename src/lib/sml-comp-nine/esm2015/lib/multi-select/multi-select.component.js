import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
let MultiSelectComponent = class MultiSelectComponent {
    constructor(http, elementRef) {
        this.http = http;
        this.elementRef = elementRef;
        this.dropdownList = [];
        this.selectedItems = [];
        this.label = 'Label Name';
        this.searchString = '';
        this.getvalue = new EventEmitter();
        this.GenericToken = "";
        this.database = "ASSIST";
        this.schema = "keys";
        this.procedure = "SKILLS_List";
        this.body = {};
        this.fieldName = "Description";
        this.fieldId = "SkillsId";
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.signalStyle = false;
        this.staticStyle = true;
        this.switchStyle = true;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.isOpen = false;
    }
    ngOnInit() {
        this.getToken();
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
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
                this.getDrpData();
            });
        }
        else {
            this.getDrpData();
        }
    }
    getDrpData() {
        const url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, this.body, this.httpOptionJSON).subscribe(res => {
            if (res) {
                this.dropdownList = [];
                let temp = [];
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    let nType = {
                        "id": temp[i][this.fieldId],
                        "name": temp[i][this.fieldName]
                    };
                    this.dropdownList.push(nType);
                }
            }
            else {
                this.dropdownList = [];
            }
        }, error => {
            this.dropdownList = [];
        });
    }
    onItemSelect(item) {
        this.getvalue.emit(this.selectedItems);
    }
    OnItemDeSelect(item) {
        this.getvalue.emit(this.selectedItems);
    }
    onSelectAll(items) {
        this.getvalue.emit(this.selectedItems);
    }
    onDeSelectAll(items) {
        this.getvalue.emit(this.selectedItems);
    }
    onOpen() {
        this.isOpen = true;
    }
    onClose() {
        this.isOpen = false;
    }
};
MultiSelectComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ElementRef }
];
__decorate([
    Input()
], MultiSelectComponent.prototype, "dropdownList", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "selectedItems", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "label", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "searchString", void 0);
__decorate([
    Output()
], MultiSelectComponent.prototype, "getvalue", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "database", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "schema", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "procedure", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "body", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "fieldName", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "fieldId", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "style", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "switchStyle", void 0);
MultiSelectComponent = __decorate([
    Component({
        selector: 'sml-multi-select',
        template: `
	<div class="position-relative">
        <div class="input-field" [ngStyle]="borderStyle" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}">
            <ng-select [items]="dropdownList" bindLabel="name" appendTo="body" multiple="true" (open)="onOpen()" (close)="onClose()" (change)="onItemSelect($event)" [(ngModel)]="selectedItems">
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
	.label{position:absolute;top:-24px;left:0px;font-size:12px;}
	.z-9999{z-index:9999;}
	.float-groupdd .label{position:absolute;top:-24px;left:0px;font-size:12px;}
	.float-group{position:relative;padding:14px 2px 0px 0px;}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	:host /deep/ .ng-select .ng-select-container{border:none !important;background: var(--back-color);}
	:host /deep/ .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}
	:host /deep/ .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}
	:host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}	
	`]
    })
], MultiSelectComponent);
export { MultiSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFxQzNGLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBeUJoQyxZQUFvQixJQUFnQixFQUFTLFVBQXNCO1FBQS9DLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeEIxRCxpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVEsWUFBWSxDQUFDO1FBQzFCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBUSxRQUFRLENBQUM7UUFDekIsV0FBTSxHQUFRLE1BQU0sQ0FBQztRQUNyQixjQUFTLEdBQVEsYUFBYSxDQUFDO1FBQy9CLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixjQUFTLEdBQVEsYUFBYSxDQUFDO1FBQy9CLFlBQU8sR0FBUSxVQUFVLENBQUM7UUFDMUIsV0FBTSxHQUFRLGdDQUFnQyxDQUFDO1FBSS9DLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ3JDLG1CQUFjLEdBQUc7WUFD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SyxFQUFFO2tEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO3VEQUFnQztBQUMvQjtJQUFSLEtBQUssRUFBRTtxREFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7b0RBQWdEO0FBQy9DO0lBQVIsS0FBSyxFQUFFO21EQUFZO0FBQ1g7SUFBUixLQUFLLEVBQUU7eURBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3dEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTt5REFBOEI7QUFDN0I7SUFBUixLQUFLLEVBQUU7eURBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO3lEQUE2QjtBQW5CekIsb0JBQW9CO0lBbkNoQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztFQWFUO2lCQUNROzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JSO0tBQ0QsQ0FBQztHQUVXLG9CQUFvQixDQXNHaEM7U0F0R1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc21sLW11bHRpLXNlbGVjdCcsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiIFtuZ0NsYXNzXT1cInsnZmxvYXQtZ3JvdXAnOnN3aXRjaFN0eWxlLCdmbG9hdC1ncm91cGRkJzogIXN3aXRjaFN0eWxlLCdzaWduYWwtbGluZSc6IHNpZ25hbFN0eWxlLCdmbG9hdC1ncm91cC1zdGF0aWMnOiBzdGF0aWNTdHlsZX1cIj5cclxuICAgICAgICAgICAgPG5nLXNlbGVjdCBbaXRlbXNdPVwiZHJvcGRvd25MaXN0XCIgYmluZExhYmVsPVwibmFtZVwiIGFwcGVuZFRvPVwiYm9keVwiIG11bHRpcGxlPVwidHJ1ZVwiIChvcGVuKT1cIm9uT3BlbigpXCIgKGNsb3NlKT1cIm9uQ2xvc2UoKVwiIChjaGFuZ2UpPVwib25JdGVtU2VsZWN0KCRldmVudClcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkSXRlbXNcIj5cclxuICAgICAgICAgICAgPC9uZy1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cInN3aXRjaFN0eWxlXCIgY2xhc3M9XCJsYWJlbFwiIFtuZ0NsYXNzXT1cInsnei05OTk5JzogaXNPcGVufVwiIFtuZ1N0eWxlXT1cInN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBsYWJlbCB9fVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxsYWJlbCAqbmdJZj1cIiFzd2l0Y2hTdHlsZVwiIGNsYXNzPVwibGFiZWxcIiAgW25nU3R5bGVdPVwic3R5bGVcIj5cclxuICAgICAgICAgICAge3sgbGFiZWwgfX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcblx0YCxcclxuXHRzdHlsZXM6IFtgXHJcblx0Omhvc3R7LS1jLXdpZHRoOjY0NXB4Oy0tYy1oZWlnaHQ6NDRweDstLWxhYmVsLWxlZnQ6NHB4Oy0tbGFiZWwtdG9wOjJweDstLXZhbHVlLWxlZnQ6NHB4Oy0tdmFsdWUtdG9wOjE3cHg7LS1mb250LWNvbG9yOnJnYmEoMCwwLDAsLjg3KTstLWJhY2stY29sb3I6I2ZmZjstLWZvbnQtc2l6ZToxNHB4Oy0tZm9udC13ZWlnaHQ6MjAwOy0tZm9udC1mYW1pbHk6QXJpYWw7fVxyXG5cdC5wb3NpdGlvbi1yZWxhdGl2ZXtwb3NpdGlvbjpyZWxhdGl2ZTt9XHJcblx0LmlucHV0LWZpZWxke2JvcmRlcjoxcHggc29saWQgI2RlZTJlNjtib3JkZXItcmFkaXVzOjJweDt3aWR0aDp2YXIoLS1jLXdpZHRoKSAhaW1wb3J0YW50O21pbi1oZWlnaHQ6dmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG87fVxyXG5cdC5mbG9hdC1ncm91cGRke3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MHB4O31cclxuXHQuc2lnbmFsLWxpbmV7Ym9yZGVyLXRvcDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLWxlZnQ6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1yaWdodDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowcHggIWltcG9ydGFudDt9XHJcblx0LmxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjRweDtsZWZ0OjBweDtmb250LXNpemU6MTJweDt9XHJcblx0LnotOTk5OXt6LWluZGV4Ojk5OTk7fVxyXG5cdC5mbG9hdC1ncm91cGRkIC5sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTI0cHg7bGVmdDowcHg7Zm9udC1zaXplOjEycHg7fVxyXG5cdC5mbG9hdC1ncm91cHtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjE0cHggMnB4IDBweCAwcHg7fVxyXG5cdC5mbG9hdC1ncm91cCAubGFiZWx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6bm9ybWFsO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7bGVmdDp2YXIoLS1sYWJlbC1sZWZ0KTt0cmFuc2l0aW9uOmFsbCAyMDBtcztvcGFjaXR5OjE7bWFyZ2luOjA7d2lkdGg6ODclO2hlaWdodDphdXRvfVxyXG5cdC5mbG9hdC1ncm91cC1zdGF0aWMgLmxhYmVse2ZvbnQtc2l6ZTo5cHg7Zm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO3RvcDp2YXIoLS1sYWJlbC10b3ApO2xlZnQ6dmFyKC0tbGFiZWwtbGVmdCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTt0cmFuc2l0aW9uOmFsbCAyMDBtcztvcGFjaXR5OjE7bWFyZ2luOjA7d2lkdGg6ODclO2hlaWdodDphdXRvO31cclxuXHQ6aG9zdCAvZGVlcC8gLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXI6bm9uZSAhaW1wb3J0YW50O2JhY2tncm91bmQ6IHZhcigtLWJhY2stY29sb3IpO31cclxuXHQ6aG9zdCAvZGVlcC8gLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctbGVmdDp2YXIoLS12YWx1ZS1sZWZ0KSAhaW1wb3J0YW50O3BhZGRpbmctdG9wOnZhcigtLXZhbHVlLXRvcCkgIWltcG9ydGFudDt9XHJcblx0Omhvc3QgL2RlZXAvIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lcntoZWlnaHQ6dmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtmb250LXdlaWdodDp2YXIoLS1mb250LXdlaWdodCkgIWltcG9ydGFudDtmb250LWZhbWlseTp2YXIoLS1mb250LWZhbWlseSkgIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2stY29sb3IpICFpbXBvcnRhbnQ7Y29sb3I6dmFyKC0tZm9udC1jb2xvcikgIWltcG9ydGFudDt9XHJcblx0Omhvc3QgL2RlZXAvIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHt0b3A6dmFyKC0tdmFsdWUtdG9wKSAhaW1wb3J0YW50O31cdFxyXG5cdGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGRyb3Bkb3duTGlzdDogYW55ID0gW107XHJcblx0QElucHV0KCkgc2VsZWN0ZWRJdGVtczogYW55ID0gW107XHJcblx0QElucHV0KCkgbGFiZWw6IGFueSA9ICdMYWJlbCBOYW1lJztcclxuXHRASW5wdXQoKSBzZWFyY2hTdHJpbmc6IGFueSA9ICcnO1xyXG5cdEBPdXRwdXQoKSBnZXR2YWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBHZW5lcmljVG9rZW46IGFueSA9IFwiXCI7XHJcblx0QElucHV0KCkgZGF0YWJhc2U6IGFueSA9IFwiQVNTSVNUXCI7XHJcblx0QElucHV0KCkgc2NoZW1hOiBhbnkgPSBcImtleXNcIjtcclxuXHRASW5wdXQoKSBwcm9jZWR1cmU6IGFueSA9IFwiU0tJTExTX0xpc3RcIjtcclxuXHRASW5wdXQoKSBib2R5OiBhbnkgPSB7fTtcclxuXHRASW5wdXQoKSBmaWVsZE5hbWU6IGFueSA9IFwiRGVzY3JpcHRpb25cIjtcclxuXHRASW5wdXQoKSBmaWVsZElkOiBhbnkgPSBcIlNraWxsc0lkXCI7XHJcblx0QElucHV0KCkgYXBpVVJMOiBhbnkgPSAnaHR0cDovL2Fzc2lzdC5hYWFkZXYuaW5mby9hcGkvJztcclxuXHRASW5wdXQoKSBzdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcblx0QElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgc3RhdGljU3R5bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdEBJbnB1dCgpIHN3aXRjaFN0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRodHRwT3B0aW9uSlNPTiA9IHtcclxuXHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdH0pXHJcblx0fTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5nZXRUb2tlbigpO1xyXG5cdH1cclxuXHRuZ09uQ2hhbmdlcyhldmVudCkge1xyXG5cdFx0aWYgKGV2ZW50LnN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5zdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGxldCBjc3MgPSBldmVudC5zdHlsZS5jdXJyZW50VmFsdWU7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtd2lkdGgnLCBjc3NbJ2Mtd2lkdGgnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtaGVpZ2h0JywgY3NzWydjLWhlaWdodCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtbGVmdCcsIGNzc1snbGFiZWwtbGVmdCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtdG9wJywgY3NzWydsYWJlbC10b3AnXSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnQudmFsdWVTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGxldCBjc3MgPSBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtbGVmdCcsIGNzc1sndmFsdWUtbGVmdCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtdG9wJywgY3NzWyd2YWx1ZS10b3AnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtY29sb3InLCBjc3NbJ2NvbG9yJ10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LXNpemUnLCBjc3NbJ2ZvbnQtc2l6ZSddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC13ZWlnaHQnLCBjc3NbJ2ZvbnQtd2VpZ2h0J10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWZhbWlseScsIGNzc1snZm9udC1mYW1pbHknXSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnQuYm9yZGVyU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LmJvcmRlclN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0bGV0IGNzcyA9IGV2ZW50LmJvcmRlclN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFjay1jb2xvcicsIGNzc1snYmFja2dyb3VuZC1jb2xvciddKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Z2V0VG9rZW4oKSB7XHJcblx0XHRpZiAodGhpcy5HZW5lcmljVG9rZW4gPT0gXCJcIikge1xyXG5cdFx0XHR0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVVJMICsgXCJHZXRTeXN0ZW1JbmZvP3Bhc3Njb2RlPWZsaXBwZXI2MTNcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5HZW5lcmljVG9rZW4gPSByZXNbXCJHZW5lcmljVG9rZW5cIl07XHJcblx0XHRcdFx0dGhpcy5nZXREcnBEYXRhKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5nZXREcnBEYXRhKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldERycERhdGEoKSB7XHJcblx0XHRjb25zdCB1cmwgPSB0aGlzLmFwaVVSTCArIFwiRGF0YS9FeGVjL1wiICsgdGhpcy5kYXRhYmFzZSArIFwiL1wiICsgdGhpcy5zY2hlbWEgKyBcIi9cIiArIHRoaXMucHJvY2VkdXJlICsgXCI/YXBpX2tleT1cIiArIHRoaXMuR2VuZXJpY1Rva2VuO1xyXG5cdFx0dGhpcy5odHRwLnBvc3QodXJsLCB0aGlzLmJvZHksIHRoaXMuaHR0cE9wdGlvbkpTT04pLnN1YnNjcmliZShyZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzKSB7XHJcblx0XHRcdFx0dGhpcy5kcm9wZG93bkxpc3QgPSBbXTtcclxuXHRcdFx0XHRsZXQgdGVtcDogYW55ID0gW107XHJcblx0XHRcdFx0dGVtcCA9IHJlcztcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCBuVHlwZSA9IHtcclxuXHRcdFx0XHRcdFx0XCJpZFwiOiB0ZW1wW2ldW3RoaXMuZmllbGRJZF0sXHJcblx0XHRcdFx0XHRcdFwibmFtZVwiOiB0ZW1wW2ldW3RoaXMuZmllbGROYW1lXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5kcm9wZG93bkxpc3QucHVzaChuVHlwZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZHJvcGRvd25MaXN0ID0gW107XHJcblx0XHRcdH1cclxuXHRcdH0sIGVycm9yID0+IHtcclxuXHRcdFx0dGhpcy5kcm9wZG93bkxpc3QgPSBbXTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRvbkl0ZW1TZWxlY3QoaXRlbTogYW55KSB7XHJcblx0XHR0aGlzLmdldHZhbHVlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuXHR9XHJcblx0T25JdGVtRGVTZWxlY3QoaXRlbTogYW55KSB7XHJcblx0XHR0aGlzLmdldHZhbHVlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuXHR9XHJcblx0b25TZWxlY3RBbGwoaXRlbXM6IGFueSkge1xyXG5cdFx0dGhpcy5nZXR2YWx1ZS5lbWl0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcblx0fVxyXG5cdG9uRGVTZWxlY3RBbGwoaXRlbXM6IGFueSkge1xyXG5cdFx0dGhpcy5nZXR2YWx1ZS5lbWl0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcblx0fVxyXG5cdGlzT3BlbjphbnkgPSBmYWxzZTtcclxuICAgIG9uT3Blbigpe1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==