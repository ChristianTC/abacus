import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
var ListSearchComponent = /** @class */ (function () {
    function ListSearchComponent(http, elementRef) {
        this.http = http;
        this.elementRef = elementRef;
        this.id = 'sml-list-search';
        this.name = 'sml-list-search';
        this.label = 'Label Name';
        this.value = 'Los';
        this.listData = [];
        this.getvalue = new EventEmitter();
        this.GenericToken = "";
        this.database = "ASSIST";
        this.schema = "dbo";
        this.procedure = "ZIPCODE_ListCities";
        this.fieldName = "City";
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.switchStyle = true;
        this.signalStyle = false;
        this.staticStyle = true;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.keyword = 'name';
    }
    ListSearchComponent.prototype.ngOnInit = function () {
        this.getToken();
    };
    ListSearchComponent.prototype.ngOnChanges = function (event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            var css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            var css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            var css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    };
    ListSearchComponent.prototype.getToken = function () {
        var _this = this;
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(function (res) {
                _this.GenericToken = res["GenericToken"];
            });
        }
    };
    ListSearchComponent.prototype.setSelectedData = function (event) {
        this.getvalue.emit(event);
    };
    ListSearchComponent.prototype.onChangeSearch = function (search) {
        var _this = this;
        var body = {
            SearchString: search
        };
        var url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, body, this.httpOptionJSON).subscribe(function (res) {
            if (res) {
                _this.listData = [];
                var temp = [];
                temp = res;
                for (var i = 0; i < temp.length; i++) {
                    var nType = {
                        id: i + 1,
                        name: temp[i][_this.fieldName]
                    };
                    _this.listData.push(nType);
                }
            }
            else {
                _this.listData = [];
            }
        }, function (error) {
            _this.listData = [];
        });
    };
    ListSearchComponent.prototype.onFocused = function (e) {
        // do something
    };
    ListSearchComponent.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "listData", void 0);
    __decorate([
        Output()
    ], ListSearchComponent.prototype, "getvalue", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "GenericToken", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "database", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "schema", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "procedure", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "fieldName", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "apiURL", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "switchStyle", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "signalStyle", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "staticStyle", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "borderStyle", void 0);
    __decorate([
        Input()
    ], ListSearchComponent.prototype, "valueStyle", void 0);
    ListSearchComponent = __decorate([
        Component({
            selector: 'sml-list-search',
            template: "\n    <div class=\"position-relative\">\n        <div class=\"input-field\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n            [ngStyle]=\"borderStyle\">\n            <div class=\"ng-autocomplete\">\n                <ng-autocomplete [data]=\"listData\" [initialValue]=\"value\" [searchKeyword]=\"keyword\" (selected)='setSelectedData($event)'\n                    (inputChanged)='onChangeSearch($event)' (inputFocused)='onFocused($event)' [itemTemplate]=\"itemTemplate\"\n                    [notFoundTemplate]=\"notFoundTemplate\">\n                </ng-autocomplete>\n                <ng-template #itemTemplate let-item>\n                    <a [innerHTML]=\"item.name\"></a>\n                </ng-template>\n                <ng-template #notFoundTemplate let-notFound>\n                    <div [innerHTML]=\"notFound\"></div>\n                </ng-template>\n            </div>\n            <label for=\"{{name}}\" class=\"label\" [ngStyle]=\"style\">\n                {{ label }}\n            </label>\n        </div>\n    </div>\n\t",
            styles: ["\n\t:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n\t:host /deep/ ng-autocomplete .autocomplete-container{height:auto;border:none !important;box-shadow:none !important;}\n\t:host /deep/ ng-autocomplete .autocomplete-container .input-container .x{display:none !important;}\n\t.ng-autocomplete{width:100% !important;}\n\t:host /deep/ ng-autocomplete .autocomplete-container .input-container input{font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;line-height:1.5 !important;min-height:var(--c-height) !important;height:auto;}\n\t.position-relative{position:relative;}\n\t.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;z-index:999;}\n\t.float-group{position:relative;padding:1px 1px 1px 1px;}\n\t.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t"]
        })
    ], ListSearchComponent);
    return ListSearchComponent;
}());
export { ListSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9saXN0LXNlYXJjaC9saXN0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUEwQzVGO0lBeUJDLDZCQUFvQixJQUFnQixFQUFVLFVBQXNCO1FBQWhELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeEIzRCxPQUFFLEdBQVEsaUJBQWlCLENBQUM7UUFDNUIsU0FBSSxHQUFRLGlCQUFpQixDQUFDO1FBQzlCLFVBQUssR0FBUSxZQUFZLENBQUM7UUFDMUIsVUFBSyxHQUFRLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBUSxRQUFRLENBQUM7UUFDekIsV0FBTSxHQUFRLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQVEsb0JBQW9CLENBQUM7UUFDdEMsY0FBUyxHQUFRLE1BQU0sQ0FBQztRQUN4QixXQUFNLEdBQVEsZ0NBQWdDLENBQUM7UUFDL0MsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFJckMsbUJBQWMsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3hCLGNBQWMsRUFBRSxrQkFBa0I7YUFD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b25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC1saXN0LXNlYXJjaCcsXHJcblx0dGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiIFtuZ0NsYXNzXT1cInsnZmxvYXQtZ3JvdXAnOnN3aXRjaFN0eWxlLCdmbG9hdC1ncm91cGRkJzogIXN3aXRjaFN0eWxlLCdzaWduYWwtbGluZSc6IHNpZ25hbFN0eWxlLCdmbG9hdC1ncm91cC1zdGF0aWMnOiBzdGF0aWNTdHlsZX1cIlxyXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmctYXV0b2NvbXBsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctYXV0b2NvbXBsZXRlIFtkYXRhXT1cImxpc3REYXRhXCIgW2luaXRpYWxWYWx1ZV09XCJ2YWx1ZVwiIFtzZWFyY2hLZXl3b3JkXT1cImtleXdvcmRcIiAoc2VsZWN0ZWQpPSdzZXRTZWxlY3RlZERhdGEoJGV2ZW50KSdcclxuICAgICAgICAgICAgICAgICAgICAoaW5wdXRDaGFuZ2VkKT0nb25DaGFuZ2VTZWFyY2goJGV2ZW50KScgKGlucHV0Rm9jdXNlZCk9J29uRm9jdXNlZCgkZXZlbnQpJyBbaXRlbVRlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25vdEZvdW5kVGVtcGxhdGVdPVwibm90Rm91bmRUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1hdXRvY29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2l0ZW1UZW1wbGF0ZSBsZXQtaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBbaW5uZXJIVE1MXT1cIml0ZW0ubmFtZVwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vdEZvdW5kVGVtcGxhdGUgbGV0LW5vdEZvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJub3RGb3VuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e25hbWV9fVwiIGNsYXNzPVwibGFiZWxcIiBbbmdTdHlsZV09XCJzdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAge3sgbGFiZWwgfX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cdGAsXHJcblx0c3R5bGVzOiBbYFxyXG5cdDpob3N0ey0tYy13aWR0aDo2NDVweDstLWMtaGVpZ2h0OjQ0cHg7LS1sYWJlbC1sZWZ0OjEwcHg7LS1sYWJlbC10b3A6MHB4Oy0tdmFsdWUtbGVmdDoxMHB4Oy0tdmFsdWUtdG9wOjE3cHg7LS1mb250LWNvbG9yOnJnYmEoMCwwLDAsLjg3KTstLWJhY2stY29sb3I6I2ZmZjstLWZvbnQtc2l6ZToxNHB4Oy0tZm9udC13ZWlnaHQ6MjAwOy0tZm9udC1mYW1pbHk6QXJpYWw7fVxyXG5cdDpob3N0IC9kZWVwLyBuZy1hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1jb250YWluZXJ7aGVpZ2h0OmF1dG87Ym9yZGVyOm5vbmUgIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDt9XHJcblx0Omhvc3QgL2RlZXAvIG5nLWF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC54e2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31cclxuXHQubmctYXV0b2NvbXBsZXRle3dpZHRoOjEwMCUgIWltcG9ydGFudDt9XHJcblx0Omhvc3QgL2RlZXAvIG5nLWF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGlucHV0e2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6dmFyKC0tZm9udC13ZWlnaHQpICFpbXBvcnRhbnQ7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1iYWNrLWNvbG9yKSAhaW1wb3J0YW50O2NvbG9yOnZhcigtLWZvbnQtY29sb3IpICFpbXBvcnRhbnQ7cGFkZGluZzowcHggIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6dmFyKC0tdmFsdWUtbGVmdCkgIWltcG9ydGFudDtwYWRkaW5nLXRvcDp2YXIoLS12YWx1ZS10b3ApICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MS41ICFpbXBvcnRhbnQ7bWluLWhlaWdodDp2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtoZWlnaHQ6YXV0bzt9XHJcblx0LnBvc2l0aW9uLXJlbGF0aXZle3Bvc2l0aW9uOnJlbGF0aXZlO31cclxuXHQuaW5wdXQtZmllbGR7Ym9yZGVyOjFweCBzb2xpZCAjZGVlMmU2O2JvcmRlci1yYWRpdXM6MnB4O3dpZHRoOnZhcigtLWMtd2lkdGgpICFpbXBvcnRhbnQ7bWluLWhlaWdodDp2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtoZWlnaHQ6YXV0bzt9XHJcblx0LnNpZ25hbC1saW5le2JvcmRlci10b3A6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1sZWZ0Om5vbmUgIWltcG9ydGFudDtib3JkZXItcmlnaHQ6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MHB4ICFpbXBvcnRhbnQ7fVxyXG5cdC5sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTI0cHg7bGVmdDowcHg7Zm9udC1zaXplOjEycHg7cGFkZGluZzowcHg7ei1pbmRleDo5OTk7fVxyXG5cdC5mbG9hdC1ncm91cHtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjFweCAxcHggMXB4IDFweDt9XHJcblx0LmZsb2F0LWdyb3VwIC5sYWJlbHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDpub3JtYWw7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtsZWZ0OnZhcigtLWxhYmVsLWxlZnQpO3RyYW5zaXRpb246YWxsIDIwMG1zO29wYWNpdHk6MTttYXJnaW46MDt3aWR0aDo4NyU7aGVpZ2h0OmF1dG87fVxyXG5cdC5mbG9hdC1ncm91cC1zdGF0aWMgLmxhYmVse2ZvbnQtc2l6ZTo5cHg7Zm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO3RvcDp2YXIoLS1sYWJlbC10b3ApO2xlZnQ6dmFyKC0tbGFiZWwtbGVmdCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTt0cmFuc2l0aW9uOmFsbCAyMDBtcztvcGFjaXR5OjE7bWFyZ2luOjA7d2lkdGg6ODclO2hlaWdodDphdXRvO31cclxuXHRgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGlkOiBhbnkgPSAnc21sLWxpc3Qtc2VhcmNoJztcclxuXHRASW5wdXQoKSBuYW1lOiBhbnkgPSAnc21sLWxpc3Qtc2VhcmNoJztcclxuXHRASW5wdXQoKSBsYWJlbDogYW55ID0gJ0xhYmVsIE5hbWUnO1xyXG5cdEBJbnB1dCgpIHZhbHVlOiBhbnkgPSAnTG9zJztcclxuXHRASW5wdXQoKSBsaXN0RGF0YTogYW55ID0gW107XHJcblx0QE91dHB1dCgpIGdldHZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIEdlbmVyaWNUb2tlbjogYW55ID0gXCJcIjtcclxuXHRASW5wdXQoKSBkYXRhYmFzZTogYW55ID0gXCJBU1NJU1RcIjtcclxuXHRASW5wdXQoKSBzY2hlbWE6IGFueSA9IFwiZGJvXCI7XHJcblx0QElucHV0KCkgcHJvY2VkdXJlOiBhbnkgPSBcIlpJUENPREVfTGlzdENpdGllc1wiO1xyXG5cdEBJbnB1dCgpIGZpZWxkTmFtZTogYW55ID0gXCJDaXR5XCI7XHJcblx0QElucHV0KCkgYXBpVVJMOiBhbnkgPSAnaHR0cDovL2Fzc2lzdC5hYWFkZXYuaW5mby9hcGkvJztcclxuXHRASW5wdXQoKSBzd2l0Y2hTdHlsZTogYm9vbGVhbiA9IHRydWU7XHJcblx0QElucHV0KCkgc2lnbmFsU3R5bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoKSBzdGF0aWNTdHlsZTogYm9vbGVhbiA9IHRydWU7XHJcblx0QElucHV0KCkgc3R5bGU6IGFueTtcclxuXHRASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuXHRodHRwT3B0aW9uSlNPTiA9IHtcclxuXHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdH0pXHJcblx0fTtcclxuXHRrZXl3b3JkID0gJ25hbWUnO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5nZXRUb2tlbigpO1xyXG5cdH1cclxuXHRuZ09uQ2hhbmdlcyhldmVudCkge1xyXG5cdFx0aWYgKGV2ZW50LnN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5zdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGxldCBjc3MgPSBldmVudC5zdHlsZS5jdXJyZW50VmFsdWU7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtd2lkdGgnLCBjc3NbJ2Mtd2lkdGgnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtaGVpZ2h0JywgY3NzWydjLWhlaWdodCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtbGVmdCcsIGNzc1snbGFiZWwtbGVmdCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtdG9wJywgY3NzWydsYWJlbC10b3AnXSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnQudmFsdWVTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGxldCBjc3MgPSBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtbGVmdCcsIGNzc1sndmFsdWUtbGVmdCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtdG9wJywgY3NzWyd2YWx1ZS10b3AnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtY29sb3InLCBjc3NbJ2NvbG9yJ10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LXNpemUnLCBjc3NbJ2ZvbnQtc2l6ZSddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC13ZWlnaHQnLCBjc3NbJ2ZvbnQtd2VpZ2h0J10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWZhbWlseScsIGNzc1snZm9udC1mYW1pbHknXSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnQuYm9yZGVyU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LmJvcmRlclN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0bGV0IGNzcyA9IGV2ZW50LmJvcmRlclN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFjay1jb2xvcicsIGNzc1snYmFja2dyb3VuZC1jb2xvciddKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Z2V0VG9rZW4oKSB7XHJcblx0XHRpZiAodGhpcy5HZW5lcmljVG9rZW4gPT0gXCJcIikge1xyXG5cdFx0XHR0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVVJMICsgXCJHZXRTeXN0ZW1JbmZvP3Bhc3Njb2RlPWZsaXBwZXI2MTNcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5HZW5lcmljVG9rZW4gPSByZXNbXCJHZW5lcmljVG9rZW5cIl07XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzZXRTZWxlY3RlZERhdGEoZXZlbnQpIHtcclxuXHRcdHRoaXMuZ2V0dmFsdWUuZW1pdChldmVudCk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlU2VhcmNoKHNlYXJjaDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRTZWFyY2hTdHJpbmc6IHNlYXJjaFxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IHVybCA9IHRoaXMuYXBpVVJMICsgXCJEYXRhL0V4ZWMvXCIgKyB0aGlzLmRhdGFiYXNlICsgXCIvXCIgKyB0aGlzLnNjaGVtYSArIFwiL1wiICsgdGhpcy5wcm9jZWR1cmUgKyBcIj9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW47XHJcblx0XHR0aGlzLmh0dHAucG9zdCh1cmwsIGJvZHksIHRoaXMuaHR0cE9wdGlvbkpTT04pLnN1YnNjcmliZShyZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzKSB7XHJcblx0XHRcdFx0dGhpcy5saXN0RGF0YSA9IFtdO1xyXG5cdFx0XHRcdGxldCB0ZW1wOiBhbnkgPSBbXTtcclxuXHRcdFx0XHR0ZW1wID0gcmVzO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0bGV0IG5UeXBlID0ge1xyXG5cdFx0XHRcdFx0XHRpZDogaSArIDEsXHJcblx0XHRcdFx0XHRcdG5hbWU6IHRlbXBbaV1bdGhpcy5maWVsZE5hbWVdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmxpc3REYXRhLnB1c2goblR5cGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmxpc3REYXRhID0gW107XHJcblx0XHRcdH1cclxuXHRcdH0sIGVycm9yID0+IHtcclxuXHRcdFx0dGhpcy5saXN0RGF0YSA9IFtdO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG9uRm9jdXNlZChlKSB7XHJcblx0XHQvLyBkbyBzb21ldGhpbmdcclxuXHR9XHJcbn1cclxuIl19