import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
let ContactUsComponent = class ContactUsComponent {
    constructor(http) {
        this.http = http;
        this.itemObject = {
            id: 5,
            emailTo: "",
            myObject: {}
        };
        this.GenericToken = "";
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.responseCall = new EventEmitter;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
            });
        }
    }
    sendMail() {
        let url = this.apiURL + "Email/SendTemplateWIthSMTP/" + this.itemObject.id + "?emailTo=" + this.itemObject.emailTo;
        let body = this.itemObject.myObject;
        this.http.post(url, body).subscribe(res => {
            this.responseCall.emit(res);
        }, error => {
            alert(error);
        });
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], ContactUsComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "buttonStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "itemObject", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "apiURL", void 0);
__decorate([
    Output()
], ContactUsComponent.prototype, "responseCall", void 0);
ContactUsComponent = __decorate([
    Component({
        selector: 'sml-contact-us',
        template: `
  <div class="main-row">
  <sml-input-text [label]="'Email To'" [name]="'emailTo'" [value]="itemObject.emailTo" (getvalue)="itemObject.emailTo = $event;" [maskType]="''"
    [switchStyle]="'true'" [style]="labelStyle" [staticStyle]="'true'" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
  </sml-input-text>
  </div>
  <div class="main-row" style="text-align: center;">
    <sml-button [label]="'Send Email'" [btnCl]="'btn-primary'" (buttonClick)="sendMail()" [buttonStyle]="buttonStyle">
    </sml-button>
  </div>
  `,
        styles: [`.main-row{width: 100%;margin-bottom: 7px;`]
    })
], ContactUsComponent);
export { ContactUsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC11cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBaUI1RixJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQW1CN0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWIzQixlQUFVLEdBQVE7WUFDekIsRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtRQUNRLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLFdBQU0sR0FBUSxnQ0FBZ0MsQ0FBQztRQUM5QyxpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFDO1FBQzFDLG1CQUFjLEdBQUc7WUFDZixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUM7SUFDc0MsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1DQUFtQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvRSxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLDZCQUE2QixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNuSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNULEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7O1lBckIyQixVQUFVOztBQWpCM0I7SUFBUixLQUFLLEVBQUU7c0RBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO3VEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtzREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7dURBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3NEQUlQO0FBQ1E7SUFBUixLQUFLLEVBQUU7d0RBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFO2tEQUFnRDtBQUM5QztJQUFULE1BQU0sRUFBRTt3REFBaUM7QUFiL0Isa0JBQWtCO0lBZjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7aUJBQ1EsMkNBQTJDO0tBQ3JELENBQUM7R0FDVyxrQkFBa0IsQ0F3QzlCO1NBeENZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLWNvbnRhY3QtdXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cIm1haW4tcm93XCI+XHJcbiAgPHNtbC1pbnB1dC10ZXh0IFtsYWJlbF09XCInRW1haWwgVG8nXCIgW25hbWVdPVwiJ2VtYWlsVG8nXCIgW3ZhbHVlXT1cIml0ZW1PYmplY3QuZW1haWxUb1wiIChnZXR2YWx1ZSk9XCJpdGVtT2JqZWN0LmVtYWlsVG8gPSAkZXZlbnQ7XCIgW21hc2tUeXBlXT1cIicnXCJcclxuICAgIFtzd2l0Y2hTdHlsZV09XCIndHJ1ZSdcIiBbc3R5bGVdPVwibGFiZWxTdHlsZVwiIFtzdGF0aWNTdHlsZV09XCIndHJ1ZSdcIiBbYm9yZGVyU3R5bGVdPVwiYm9yZGVyU3R5bGVcIiBbdmFsdWVTdHlsZV09XCJ2YWx1ZVN0eWxlXCI+XHJcbiAgPC9zbWwtaW5wdXQtdGV4dD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibWFpbi1yb3dcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cclxuICAgIDxzbWwtYnV0dG9uIFtsYWJlbF09XCInU2VuZCBFbWFpbCdcIiBbYnRuQ2xdPVwiJ2J0bi1wcmltYXJ5J1wiIChidXR0b25DbGljayk9XCJzZW5kTWFpbCgpXCIgW2J1dHRvblN0eWxlXT1cImJ1dHRvblN0eWxlXCI+XHJcbiAgICA8L3NtbC1idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgLm1haW4tcm93e3dpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206IDdweDtgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdFVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbGFiZWxTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGJ1dHRvblN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgaXRlbU9iamVjdDogYW55ID0ge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBlbWFpbFRvOiBcIlwiLFxyXG4gICAgbXlPYmplY3Q6IHt9XHJcbiAgfVxyXG4gIEBJbnB1dCgpIEdlbmVyaWNUb2tlbjogYW55ID0gXCJcIjtcclxuICBASW5wdXQoKSBhcGlVUkw6IGFueSA9ICdodHRwOi8vYXNzaXN0LmFhYWRldi5pbmZvL2FwaS8nO1xyXG4gIEBPdXRwdXQoKSByZXNwb25zZUNhbGwgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIGh0dHBPcHRpb25KU09OID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSlcclxuICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRUb2tlbigpO1xyXG4gIH1cclxuICBnZXRUb2tlbigpIHtcclxuICAgIGlmICh0aGlzLkdlbmVyaWNUb2tlbiA9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlVUkwgKyBcIkdldFN5c3RlbUluZm8/cGFzc2NvZGU9ZmxpcHBlcjYxM1wiKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLkdlbmVyaWNUb2tlbiA9IHJlc1tcIkdlbmVyaWNUb2tlblwiXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlbmRNYWlsKCkge1xyXG4gICAgbGV0IHVybCA9IHRoaXMuYXBpVVJMICsgXCJFbWFpbC9TZW5kVGVtcGxhdGVXSXRoU01UUC9cIiArIHRoaXMuaXRlbU9iamVjdC5pZCArIFwiP2VtYWlsVG89XCIgKyB0aGlzLml0ZW1PYmplY3QuZW1haWxUbztcclxuICAgIGxldCBib2R5ID0gdGhpcy5pdGVtT2JqZWN0Lm15T2JqZWN0O1xyXG4gICAgdGhpcy5odHRwLnBvc3QodXJsLCBib2R5KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy5yZXNwb25zZUNhbGwuZW1pdChyZXMpO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBhbGVydChlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19