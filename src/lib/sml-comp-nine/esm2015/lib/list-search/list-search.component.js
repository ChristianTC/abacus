import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
let ListSearchComponent = class ListSearchComponent {
    constructor(http, elementRef) {
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
            });
        }
    }
    setSelectedData(event) {
        this.getvalue.emit(event);
    }
    onChangeSearch(search) {
        const body = {
            SearchString: search
        };
        const url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
            if (res) {
                this.listData = [];
                let temp = [];
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    let nType = {
                        id: i + 1,
                        name: temp[i][this.fieldName]
                    };
                    this.listData.push(nType);
                }
            }
            else {
                this.listData = [];
            }
        }, error => {
            this.listData = [];
        });
    }
    onFocused(e) {
        // do something
    }
};
ListSearchComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ElementRef }
];
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
        template: `
    <div class="position-relative">
        <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
            [ngStyle]="borderStyle">
            <div class="ng-autocomplete">
                <ng-autocomplete [data]="listData" [initialValue]="value" [searchKeyword]="keyword" (selected)='setSelectedData($event)'
                    (inputChanged)='onChangeSearch($event)' (inputFocused)='onFocused($event)' [itemTemplate]="itemTemplate"
                    [notFoundTemplate]="notFoundTemplate">
                </ng-autocomplete>
                <ng-template #itemTemplate let-item>
                    <a [innerHTML]="item.name"></a>
                </ng-template>
                <ng-template #notFoundTemplate let-notFound>
                    <div [innerHTML]="notFound"></div>
                </ng-template>
            </div>
            <label for="{{name}}" class="label" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
    </div>
	`,
        styles: [`
	:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
	:host /deep/ ng-autocomplete .autocomplete-container{height:auto;border:none !important;box-shadow:none !important;}
	:host /deep/ ng-autocomplete .autocomplete-container .input-container .x{display:none !important;}
	.ng-autocomplete{width:100% !important;}
	:host /deep/ ng-autocomplete .autocomplete-container .input-container input{font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;line-height:1.5 !important;min-height:var(--c-height) !important;height:auto;}
	.position-relative{position:relative;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;z-index:999;}
	.float-group{position:relative;padding:1px 1px 1px 1px;}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	`]
    })
], ListSearchComponent);
export { ListSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9saXN0LXNlYXJjaC9saXN0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUEwQzVGLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBeUIvQixZQUFvQixJQUFnQixFQUFVLFVBQXNCO1FBQWhELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeEIzRCxPQUFFLEdBQVEsaUJBQWlCLENBQUM7UUFDNUIsU0FBSSxHQUFRLGlCQUFpQixDQUFDO1FBQzlCLFVBQUssR0FBUSxZQUFZLENBQUM7UUFDMUIsVUFBSyxHQUFRLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBUSxRQUFRLENBQUM7UUFDekIsV0FBTSxHQUFRLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQVEsb0JBQW9CLENBQUM7UUFDdEMsY0FBUyxHQUFRLE1BQU0sQ0FBQztRQUN4QixXQUFNLEdBQVEsZ0NBQWdDLENBQUM7UUFDL0MsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFJckMsbUJBQWMsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxXQUFXLENB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bkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzbWwtbGlzdC1zZWFyY2gnLFxyXG5cdHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBbbmdDbGFzc109XCJ7J2Zsb2F0LWdyb3VwJzpzd2l0Y2hTdHlsZSwnZmxvYXQtZ3JvdXBkZCc6ICFzd2l0Y2hTdHlsZSwnc2lnbmFsLWxpbmUnOiBzaWduYWxTdHlsZSwnZmxvYXQtZ3JvdXAtc3RhdGljJzogc3RhdGljU3R5bGV9XCJcclxuICAgICAgICAgICAgW25nU3R5bGVdPVwiYm9yZGVyU3R5bGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5nLWF1dG9jb21wbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWF1dG9jb21wbGV0ZSBbZGF0YV09XCJsaXN0RGF0YVwiIFtpbml0aWFsVmFsdWVdPVwidmFsdWVcIiBbc2VhcmNoS2V5d29yZF09XCJrZXl3b3JkXCIgKHNlbGVjdGVkKT0nc2V0U2VsZWN0ZWREYXRhKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICAgICAgKGlucHV0Q2hhbmdlZCk9J29uQ2hhbmdlU2VhcmNoKCRldmVudCknIChpbnB1dEZvY3VzZWQpPSdvbkZvY3VzZWQoJGV2ZW50KScgW2l0ZW1UZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtub3RGb3VuZFRlbXBsYXRlXT1cIm5vdEZvdW5kVGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctYXV0b2NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNpdGVtVGVtcGxhdGUgbGV0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW2lubmVySFRNTF09XCJpdGVtLm5hbWVcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub3RGb3VuZFRlbXBsYXRlIGxldC1ub3RGb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwibm90Rm91bmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tuYW1lfX1cIiBjbGFzcz1cImxhYmVsXCIgW25nU3R5bGVdPVwic3R5bGVcIj5cclxuICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHQ6aG9zdHstLWMtd2lkdGg6NjQ1cHg7LS1jLWhlaWdodDo0NHB4Oy0tbGFiZWwtbGVmdDoxMHB4Oy0tbGFiZWwtdG9wOjBweDstLXZhbHVlLWxlZnQ6MTBweDstLXZhbHVlLXRvcDoxN3B4Oy0tZm9udC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyk7LS1iYWNrLWNvbG9yOiNmZmY7LS1mb250LXNpemU6MTRweDstLWZvbnQtd2VpZ2h0OjIwMDstLWZvbnQtZmFtaWx5OkFyaWFsO31cclxuXHQ6aG9zdCAvZGVlcC8gbmctYXV0b2NvbXBsZXRlIC5hdXRvY29tcGxldGUtY29udGFpbmVye2hlaWdodDphdXRvO2JvcmRlcjpub25lICFpbXBvcnRhbnQ7Ym94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7fVxyXG5cdDpob3N0IC9kZWVwLyBuZy1hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAueHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XHJcblx0Lm5nLWF1dG9jb21wbGV0ZXt3aWR0aDoxMDAlICFpbXBvcnRhbnQ7fVxyXG5cdDpob3N0IC9kZWVwLyBuZy1hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBpbnB1dHtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKSAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OnZhcigtLWZvbnQtd2VpZ2h0KSAhaW1wb3J0YW50O2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KSAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFjay1jb2xvcikgIWltcG9ydGFudDtjb2xvcjp2YXIoLS1mb250LWNvbG9yKSAhaW1wb3J0YW50O3BhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OnZhcigtLXZhbHVlLWxlZnQpICFpbXBvcnRhbnQ7cGFkZGluZy10b3A6dmFyKC0tdmFsdWUtdG9wKSAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjEuNSAhaW1wb3J0YW50O21pbi1oZWlnaHQ6dmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG87fVxyXG5cdC5wb3NpdGlvbi1yZWxhdGl2ZXtwb3NpdGlvbjpyZWxhdGl2ZTt9XHJcblx0LmlucHV0LWZpZWxke2JvcmRlcjoxcHggc29saWQgI2RlZTJlNjtib3JkZXItcmFkaXVzOjJweDt3aWR0aDp2YXIoLS1jLXdpZHRoKSAhaW1wb3J0YW50O21pbi1oZWlnaHQ6dmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG87fVxyXG5cdC5zaWduYWwtbGluZXtib3JkZXItdG9wOm5vbmUgIWltcG9ydGFudDtib3JkZXItbGVmdDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0Om5vbmUgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjBweCAhaW1wb3J0YW50O31cclxuXHQubGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yNHB4O2xlZnQ6MHB4O2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6MHB4O3otaW5kZXg6OTk5O31cclxuXHQuZmxvYXQtZ3JvdXB7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoxcHggMXB4IDFweCAxcHg7fVxyXG5cdC5mbG9hdC1ncm91cCAubGFiZWx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6bm9ybWFsO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7bGVmdDp2YXIoLS1sYWJlbC1sZWZ0KTt0cmFuc2l0aW9uOmFsbCAyMDBtcztvcGFjaXR5OjE7bWFyZ2luOjA7d2lkdGg6ODclO2hlaWdodDphdXRvO31cclxuXHQuZmxvYXQtZ3JvdXAtc3RhdGljIC5sYWJlbHtmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6dmFyKC0tbGFiZWwtdG9wKTtsZWZ0OnZhcigtLWxhYmVsLWxlZnQpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7dHJhbnNpdGlvbjphbGwgMjAwbXM7b3BhY2l0eToxO21hcmdpbjowO3dpZHRoOjg3JTtoZWlnaHQ6YXV0bzt9XHJcblx0YF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBpZDogYW55ID0gJ3NtbC1saXN0LXNlYXJjaCc7XHJcblx0QElucHV0KCkgbmFtZTogYW55ID0gJ3NtbC1saXN0LXNlYXJjaCc7XHJcblx0QElucHV0KCkgbGFiZWw6IGFueSA9ICdMYWJlbCBOYW1lJztcclxuXHRASW5wdXQoKSB2YWx1ZTogYW55ID0gJ0xvcyc7XHJcblx0QElucHV0KCkgbGlzdERhdGE6IGFueSA9IFtdO1xyXG5cdEBPdXRwdXQoKSBnZXR2YWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBHZW5lcmljVG9rZW46IGFueSA9IFwiXCI7XHJcblx0QElucHV0KCkgZGF0YWJhc2U6IGFueSA9IFwiQVNTSVNUXCI7XHJcblx0QElucHV0KCkgc2NoZW1hOiBhbnkgPSBcImRib1wiO1xyXG5cdEBJbnB1dCgpIHByb2NlZHVyZTogYW55ID0gXCJaSVBDT0RFX0xpc3RDaXRpZXNcIjtcclxuXHRASW5wdXQoKSBmaWVsZE5hbWU6IGFueSA9IFwiQ2l0eVwiO1xyXG5cdEBJbnB1dCgpIGFwaVVSTDogYW55ID0gJ2h0dHA6Ly9hc3Npc3QuYWFhZGV2LmluZm8vYXBpLyc7XHJcblx0QElucHV0KCkgc3dpdGNoU3R5bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgc3RhdGljU3R5bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdEBJbnB1dCgpIHN0eWxlOiBhbnk7XHJcblx0QElucHV0KCkgYm9yZGVyU3R5bGU6IGFueTtcclxuXHRASW5wdXQoKSB2YWx1ZVN0eWxlOiBhbnk7XHJcblx0aHR0cE9wdGlvbkpTT04gPSB7XHJcblx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHR9KVxyXG5cdH07XHJcblx0a2V5d29yZCA9ICduYW1lJztcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZ2V0VG9rZW4oKTtcclxuXHR9XHJcblx0bmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuXHRcdGlmIChldmVudC5zdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRsZXQgY3NzID0gZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXdpZHRoJywgY3NzWydjLXdpZHRoJ10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLWhlaWdodCcsIGNzc1snYy1oZWlnaHQnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWxlZnQnLCBjc3NbJ2xhYmVsLWxlZnQnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLXRvcCcsIGNzc1snbGFiZWwtdG9wJ10pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGV2ZW50LnZhbHVlU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRsZXQgY3NzID0gZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWU7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLWxlZnQnLCBjc3NbJ3ZhbHVlLWxlZnQnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLXRvcCcsIGNzc1sndmFsdWUtdG9wJ10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWNvbG9yJywgY3NzWydjb2xvciddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC1zaXplJywgY3NzWydmb250LXNpemUnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtd2VpZ2h0JywgY3NzWydmb250LXdlaWdodCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC1mYW1pbHknLCBjc3NbJ2ZvbnQtZmFtaWx5J10pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGV2ZW50LmJvcmRlclN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5ib3JkZXJTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGxldCBjc3MgPSBldmVudC5ib3JkZXJTdHlsZS5jdXJyZW50VmFsdWU7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2stY29sb3InLCBjc3NbJ2JhY2tncm91bmQtY29sb3InXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldFRva2VuKCkge1xyXG5cdFx0aWYgKHRoaXMuR2VuZXJpY1Rva2VuID09IFwiXCIpIHtcclxuXHRcdFx0dGhpcy5odHRwLmdldCh0aGlzLmFwaVVSTCArIFwiR2V0U3lzdGVtSW5mbz9wYXNzY29kZT1mbGlwcGVyNjEzXCIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG5cdFx0XHRcdHRoaXMuR2VuZXJpY1Rva2VuID0gcmVzW1wiR2VuZXJpY1Rva2VuXCJdO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0c2V0U2VsZWN0ZWREYXRhKGV2ZW50KSB7XHJcblx0XHR0aGlzLmdldHZhbHVlLmVtaXQoZXZlbnQpO1xyXG5cdH1cclxuXHRvbkNoYW5nZVNlYXJjaChzZWFyY2g6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0U2VhcmNoU3RyaW5nOiBzZWFyY2hcclxuXHRcdH07XHJcblx0XHRjb25zdCB1cmwgPSB0aGlzLmFwaVVSTCArIFwiRGF0YS9FeGVjL1wiICsgdGhpcy5kYXRhYmFzZSArIFwiL1wiICsgdGhpcy5zY2hlbWEgKyBcIi9cIiArIHRoaXMucHJvY2VkdXJlICsgXCI/YXBpX2tleT1cIiArIHRoaXMuR2VuZXJpY1Rva2VuO1xyXG5cdFx0dGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB0aGlzLmh0dHBPcHRpb25KU09OKS5zdWJzY3JpYmUocmVzID0+IHtcclxuXHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdHRoaXMubGlzdERhdGEgPSBbXTtcclxuXHRcdFx0XHRsZXQgdGVtcDogYW55ID0gW107XHJcblx0XHRcdFx0dGVtcCA9IHJlcztcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCBuVHlwZSA9IHtcclxuXHRcdFx0XHRcdFx0aWQ6IGkgKyAxLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiB0ZW1wW2ldW3RoaXMuZmllbGROYW1lXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5saXN0RGF0YS5wdXNoKG5UeXBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5saXN0RGF0YSA9IFtdO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBlcnJvciA9PiB7XHJcblx0XHRcdHRoaXMubGlzdERhdGEgPSBbXTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRvbkZvY3VzZWQoZSkge1xyXG5cdFx0Ly8gZG8gc29tZXRoaW5nXHJcblx0fVxyXG59XHJcbiJdfQ==