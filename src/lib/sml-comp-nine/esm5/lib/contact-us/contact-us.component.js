import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(http) {
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
    ContactUsComponent.prototype.ngOnInit = function () {
        this.getToken();
    };
    ContactUsComponent.prototype.getToken = function () {
        var _this = this;
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(function (res) {
                _this.GenericToken = res["GenericToken"];
            });
        }
    };
    ContactUsComponent.prototype.sendMail = function () {
        var _this = this;
        var url = this.apiURL + "Email/SendTemplateWIthSMTP/" + this.itemObject.id + "?emailTo=" + this.itemObject.emailTo;
        var body = this.itemObject.myObject;
        this.http.post(url, body).subscribe(function (res) {
            _this.responseCall.emit(res);
        }, function (error) {
            alert(error);
        });
    };
    ContactUsComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
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
            template: "\n  <div class=\"main-row\">\n  <sml-input-text [label]=\"'Email To'\" [name]=\"'emailTo'\" [value]=\"itemObject.emailTo\" (getvalue)=\"itemObject.emailTo = $event;\" [maskType]=\"''\"\n    [switchStyle]=\"'true'\" [style]=\"labelStyle\" [staticStyle]=\"'true'\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n  </sml-input-text>\n  </div>\n  <div class=\"main-row\" style=\"text-align: center;\">\n    <sml-button [label]=\"'Send Email'\" [btnCl]=\"'btn-primary'\" (buttonClick)=\"sendMail()\" [buttonStyle]=\"buttonStyle\">\n    </sml-button>\n  </div>\n  ",
            styles: [".main-row{width: 100%;margin-bottom: 7px;"]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());
export { ContactUsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC11cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBaUI1RjtJQW1CRSw0QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWIzQixlQUFVLEdBQVE7WUFDekIsRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtRQUNRLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLFdBQU0sR0FBUSxnQ0FBZ0MsQ0FBQztRQUM5QyxpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFDO1FBQzFDLG1CQUFjLEdBQUc7WUFDZixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUM7SUFDc0MsQ0FBQztJQUV6QyxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxxQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsbUNBQW1DLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO2dCQUM1RSxLQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELHFDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ25ILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXBCeUIsVUFBVTs7SUFqQjNCO1FBQVIsS0FBSyxFQUFFOzBEQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTsyREFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7MERBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFOzJEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTswREFJUDtJQUNRO1FBQVIsS0FBSyxFQUFFOzREQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTtzREFBZ0Q7SUFDOUM7UUFBVCxNQUFNLEVBQUU7NERBQWlDO0lBYi9CLGtCQUFrQjtRQWY5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSw2akJBVVQ7cUJBQ1EsMkNBQTJDO1NBQ3JELENBQUM7T0FDVyxrQkFBa0IsQ0F3QzlCO0lBQUQseUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXhDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NtbC1jb250YWN0LXVzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJtYWluLXJvd1wiPlxyXG4gIDxzbWwtaW5wdXQtdGV4dCBbbGFiZWxdPVwiJ0VtYWlsIFRvJ1wiIFtuYW1lXT1cIidlbWFpbFRvJ1wiIFt2YWx1ZV09XCJpdGVtT2JqZWN0LmVtYWlsVG9cIiAoZ2V0dmFsdWUpPVwiaXRlbU9iamVjdC5lbWFpbFRvID0gJGV2ZW50O1wiIFttYXNrVHlwZV09XCInJ1wiXHJcbiAgICBbc3dpdGNoU3R5bGVdPVwiJ3RydWUnXCIgW3N0eWxlXT1cImxhYmVsU3R5bGVcIiBbc3RhdGljU3R5bGVdPVwiJ3RydWUnXCIgW2JvcmRlclN0eWxlXT1cImJvcmRlclN0eWxlXCIgW3ZhbHVlU3R5bGVdPVwidmFsdWVTdHlsZVwiPlxyXG4gIDwvc21sLWlucHV0LXRleHQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1haW4tcm93XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XHJcbiAgICA8c21sLWJ1dHRvbiBbbGFiZWxdPVwiJ1NlbmQgRW1haWwnXCIgW2J0bkNsXT1cIididG4tcHJpbWFyeSdcIiAoYnV0dG9uQ2xpY2spPVwic2VuZE1haWwoKVwiIFtidXR0b25TdHlsZV09XCJidXR0b25TdHlsZVwiPlxyXG4gICAgPC9zbWwtYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYC5tYWluLXJvd3t3aWR0aDogMTAwJTttYXJnaW4tYm90dG9tOiA3cHg7YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RVc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGxhYmVsU3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBidXR0b25TdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGl0ZW1PYmplY3Q6IGFueSA9IHtcclxuICAgIGlkOiA1LFxyXG4gICAgZW1haWxUbzogXCJcIixcclxuICAgIG15T2JqZWN0OiB7fVxyXG4gIH1cclxuICBASW5wdXQoKSBHZW5lcmljVG9rZW46IGFueSA9IFwiXCI7XHJcbiAgQElucHV0KCkgYXBpVVJMOiBhbnkgPSAnaHR0cDovL2Fzc2lzdC5hYWFkZXYuaW5mby9hcGkvJztcclxuICBAT3V0cHV0KCkgcmVzcG9uc2VDYWxsID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBodHRwT3B0aW9uSlNPTiA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0pXHJcbiAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0VG9rZW4oKTtcclxuICB9XHJcbiAgZ2V0VG9rZW4oKSB7XHJcbiAgICBpZiAodGhpcy5HZW5lcmljVG9rZW4gPT0gXCJcIikge1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVVJMICsgXCJHZXRTeXN0ZW1JbmZvP3Bhc3Njb2RlPWZsaXBwZXI2MTNcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5HZW5lcmljVG9rZW4gPSByZXNbXCJHZW5lcmljVG9rZW5cIl07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZW5kTWFpbCgpIHtcclxuICAgIGxldCB1cmwgPSB0aGlzLmFwaVVSTCArIFwiRW1haWwvU2VuZFRlbXBsYXRlV0l0aFNNVFAvXCIgKyB0aGlzLml0ZW1PYmplY3QuaWQgKyBcIj9lbWFpbFRvPVwiICsgdGhpcy5pdGVtT2JqZWN0LmVtYWlsVG87XHJcbiAgICBsZXQgYm9keSA9IHRoaXMuaXRlbU9iamVjdC5teU9iamVjdDtcclxuICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMucmVzcG9uc2VDYWxsLmVtaXQocmVzKTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==