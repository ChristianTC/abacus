import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
let DatetimepickerComponent = class DatetimepickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.name = 'sml-timepicker';
        this.staticStyle = false;
        this.getvalue = new EventEmitter;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('input[id$=' + this.name + ']')['inputmask']("hh:mm:ss", {
            mask: "h:s t\m",
            placeholder: "HH:MM:SS",
            insertMode: false,
            clearMaskOnLostFocus: false,
            showMaskOnHover: false,
            hourFormat: 12
        });
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
        }
    }
    selectChanged(event) {
        this.getvalue.emit(event);
    }
    onBlurMethod() {
        this.time = $('#' + this.name).val();
        this.getvalue.emit(this.time);
    }
};
DatetimepickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], DatetimepickerComponent.prototype, "time", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "name", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "width", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "label", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "style", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "staticStyle", void 0);
__decorate([
    Output()
], DatetimepickerComponent.prototype, "getvalue", void 0);
DatetimepickerComponent = __decorate([
    Component({
        selector: 'sml-input-timepicker',
        template: `
	<div class="position-relative">
	<div class="input-field" 
	  [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
	  [ngStyle]="borderStyle">
	  <input
	  	class="form-control" 	
	  	[id]="name"
      	[name]="name"
		[ngxTimepicker]="picker"
		[disableClick]="true"
		[(ngModel)]="time"
		(ngModelChange)="selectChanged($event)"
		(blur)="onBlurMethod()"
		[ngStyle]="valueStyle"
		style="text-transform: uppercase;"
		required>
	  <label class="label" [ngStyle]="style">{{ label }}</label>
	  <ngx-material-timepicker #picker></ngx-material-timepicker>
	  <ngx-material-timepicker-toggle [for]="picker"></ngx-material-timepicker-toggle>
	</div>
  	</div>
	`,
        styles: [`
	/* css variable */
	:host {
		--c-width: 645px;
		--c-height: 25px;
		--label-left: 10px;
		--label-top: 0px;
		--value-left: 10px;
		--value-top: 0px;
	}
	
	/* box css */
	.position-relative {
		position: relative;
		width: var(--c-width) !important;
	}
	.input-field {
		border: 1px solid #dee2e6;
		border-radius: 2px;
		min-height: var(--c-height) !important;
		height: auto;
	}
	/* Control Css */
	.form-control {
		display: block;
		padding-top: 0.375rem;
		padding-right: 0.75rem;
		padding-bottom: 0.375rem;
		padding-left: var(--value-left);
		font-size: 1rem;
		line-height: 1.5;
		color: #495057;
		background-color: #fff;
		background-clip: padding-box;
		border: none;
		min-height: var(--c-height) !important;
		transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	}
	.form-control {
		background-color: inherit;
		box-shadow: none !important;
	}
	.signal-line{
		border-top: none !important;
		border-left: none !important;
		border-right: none !important;
		border-radius: 0px !important;
	}
	/* labelcss */
	.label{
		position: absolute; 
		top: -24px;
		left: 0px; 
		font-size: 12px;
		padding: 0px !important;
        text-align: left;
	}
	.float-group {
		position: relative;
		padding: 14px 24px 2px 0px;
	}
	.float-group .form-control {
		padding-top: var(--value-top);
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: var(--value-left);
	}
	.float-group .label {
		font-size: 12px;
		font-weight: normal;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: var(--label-left);
		transition: all 200ms;
		opacity: 1;
		margin: 0;
		width: 87%;
		height: auto;
	}
	.float-group .form-control:focus {
		outline: none !important;
		box-shadow: none;
	}
	.float-group-static .label {
		font-size: 9px;
		font-weight: bold !important;  /* floating lable always bold */
		position: absolute;
		top: var(--label-top);
		left: var(--label-left);
		transform: translateY(0px);
		transition: all 200ms;
		opacity: 1;
		margin: 0;
		width: 87%;
		height: auto;
	}
	
	.float-group .form-control:focus + label,
	.float-group .form-control:valid + label {
		font-size: 9px;
		font-weight: bold !important;  /* floating lable always bold */
		position: absolute;
		top: var(--label-top);
		left: var(--label-left);
		transform: translateY(0px);
		transition: all 200ms;
		opacity: 1;
		margin: 0;
		width: 87%;
		height: auto;
	}
	ngx-material-timepicker-toggle {
		position: absolute;
		top: 50%;
		right: 2px;
		transform: translateY(-50%)
	}	
	`]
    })
], DatetimepickerComponent);
export { DatetimepickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGltZXBpY2tlci90aW1lcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBbUp2RixJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQWNuQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBWGpDLFNBQUksR0FBUSxnQkFBZ0IsQ0FBQztRQVE3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFRLEdBQUcsSUFBSSxZQUFZLENBQUM7SUFHdEMsQ0FBQztJQUNELFFBQVE7SUFDUixDQUFDO0lBQ0QsZUFBZTtRQUNkLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDN0MsVUFBVSxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVM7WUFDZixXQUFXLEVBQUUsVUFBVTtZQUN2QixVQUFVLEVBQUUsS0FBSztZQUNqQixvQkFBb0IsRUFBRSxLQUFLO1lBQzNCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFVBQVUsRUFBRSxFQUFFO1NBQ2QsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUNELFdBQVcsQ0FBQyxLQUFLO1FBQ2hCLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQ3RFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO1FBQ0QsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDdkUsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDMUY7SUFDRixDQUFDO0lBQ0QsYUFBYSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsWUFBWTtRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRCxDQUFBOztZQXJDZ0MsVUFBVTs7QUFaakM7SUFBUixLQUFLLEVBQUU7cURBQU07QUFDTDtJQUFSLEtBQUssRUFBRTtxREFBOEI7QUFDN0I7SUFBUixLQUFLLEVBQUU7c0RBQU87QUFDTjtJQUFSLEtBQUssRUFBRTtzREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOzREQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTtzREFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFOzREQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTsyREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7NERBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOzREQUE4QjtBQUM1QjtJQUFULE1BQU0sRUFBRTt5REFBNkI7QUFaMUIsdUJBQXVCO0lBakpuQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNCVDtpQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNIUjtLQUNELENBQUM7R0FDVyx1QkFBdUIsQ0FtRG5DO1NBbkRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCxPdXRwdXQsRWxlbWVudFJlZixFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzbWwtaW5wdXQtdGltZXBpY2tlcicsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBcclxuXHQgIFtuZ0NsYXNzXT1cInsnZmxvYXQtZ3JvdXAnOnN3aXRjaFN0eWxlLCdmbG9hdC1ncm91cGRkJzogIXN3aXRjaFN0eWxlLCdzaWduYWwtbGluZSc6IHNpZ25hbFN0eWxlLCdmbG9hdC1ncm91cC1zdGF0aWMnOiBzdGF0aWNTdHlsZX1cIlxyXG5cdCAgW25nU3R5bGVdPVwiYm9yZGVyU3R5bGVcIj5cclxuXHQgIDxpbnB1dFxyXG5cdCAgXHRjbGFzcz1cImZvcm0tY29udHJvbFwiIFx0XHJcblx0ICBcdFtpZF09XCJuYW1lXCJcclxuICAgICAgXHRbbmFtZV09XCJuYW1lXCJcclxuXHRcdFtuZ3hUaW1lcGlja2VyXT1cInBpY2tlclwiXHJcblx0XHRbZGlzYWJsZUNsaWNrXT1cInRydWVcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aW1lXCJcclxuXHRcdChuZ01vZGVsQ2hhbmdlKT1cInNlbGVjdENoYW5nZWQoJGV2ZW50KVwiXHJcblx0XHQoYmx1cik9XCJvbkJsdXJNZXRob2QoKVwiXHJcblx0XHRbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCJcclxuXHRcdHN0eWxlPVwidGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcIlxyXG5cdFx0cmVxdWlyZWQ+XHJcblx0ICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIFtuZ1N0eWxlXT1cInN0eWxlXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxyXG5cdCAgPG5neC1tYXRlcmlhbC10aW1lcGlja2VyICNwaWNrZXI+PC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcj5cclxuXHQgIDxuZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci10b2dnbGUgW2Zvcl09XCJwaWNrZXJcIj48L25neC1tYXRlcmlhbC10aW1lcGlja2VyLXRvZ2dsZT5cclxuXHQ8L2Rpdj5cclxuICBcdDwvZGl2PlxyXG5cdGAsXHJcblx0c3R5bGVzOiBbYFxyXG5cdC8qIGNzcyB2YXJpYWJsZSAqL1xyXG5cdDpob3N0IHtcclxuXHRcdC0tYy13aWR0aDogNjQ1cHg7XHJcblx0XHQtLWMtaGVpZ2h0OiAyNXB4O1xyXG5cdFx0LS1sYWJlbC1sZWZ0OiAxMHB4O1xyXG5cdFx0LS1sYWJlbC10b3A6IDBweDtcclxuXHRcdC0tdmFsdWUtbGVmdDogMTBweDtcclxuXHRcdC0tdmFsdWUtdG9wOiAwcHg7XHJcblx0fVxyXG5cdFxyXG5cdC8qIGJveCBjc3MgKi9cclxuXHQucG9zaXRpb24tcmVsYXRpdmUge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IHZhcigtLWMtd2lkdGgpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5pbnB1dC1maWVsZCB7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdFx0bWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdC8qIENvbnRyb2wgQ3NzICovXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHBhZGRpbmctdG9wOiAwLjM3NXJlbTtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMC4zNzVyZW07XHJcblx0XHRwYWRkaW5nLWxlZnQ6IHZhcigtLXZhbHVlLWxlZnQpO1xyXG5cdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRcdGNvbG9yOiAjNDk1MDU3O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRtaW4taGVpZ2h0OiB2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtcclxuXHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcblx0fVxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuXHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnNpZ25hbC1saW5le1xyXG5cdFx0Ym9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC8qIGxhYmVsY3NzICovXHJcblx0LmxhYmVse1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlOyBcclxuXHRcdHRvcDogLTI0cHg7XHJcblx0XHRsZWZ0OiAwcHg7IFxyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHR9XHJcblx0LmZsb2F0LWdyb3VwIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmc6IDE0cHggMjRweCAycHggMHB4O1xyXG5cdH1cclxuXHQuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcblx0XHRwYWRkaW5nLXRvcDogdmFyKC0tdmFsdWUtdG9wKTtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDBweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IHZhcigtLXZhbHVlLWxlZnQpO1xyXG5cdH1cclxuXHQuZmxvYXQtZ3JvdXAgLmxhYmVsIHtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHRcdGxlZnQ6IHZhcigtLWxhYmVsLWxlZnQpO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHdpZHRoOiA4NyU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHRcdG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0fVxyXG5cdC5mbG9hdC1ncm91cC1zdGF0aWMgLmxhYmVsIHtcclxuXHRcdGZvbnQtc2l6ZTogOXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgIC8qIGZsb2F0aW5nIGxhYmxlIGFsd2F5cyBib2xkICovXHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcblx0XHRsZWZ0OiB2YXIoLS1sYWJlbC1sZWZ0KTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHdpZHRoOiA4NyU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdFxyXG5cdC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzICsgbGFiZWwsXHJcblx0LmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2w6dmFsaWQgKyBsYWJlbCB7XHJcblx0XHRmb250LXNpemU6IDlweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAvKiBmbG9hdGluZyBsYWJsZSBhbHdheXMgYm9sZCAqL1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiB2YXIoLS1sYWJlbC10b3ApO1xyXG5cdFx0bGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHR3aWR0aDogODclO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHRuZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci10b2dnbGUge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRyaWdodDogMnB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpXHJcblx0fVx0XHJcblx0YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGV0aW1lcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRcclxuXHRASW5wdXQoKSB0aW1lO1xyXG5cdEBJbnB1dCgpIG5hbWU6IGFueSA9ICdzbWwtdGltZXBpY2tlcic7XHJcblx0QElucHV0KCkgd2lkdGg7XHJcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHRASW5wdXQoKSBzd2l0Y2hTdHlsZTogYm9vbGVhbjtcclxuXHRASW5wdXQoKSBzdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcblx0QElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuO1xyXG5cdEBJbnB1dCgpIHN0YXRpY1N0eWxlOiBib29sZWFuID0gZmFsc2U7XHJcblx0QE91dHB1dCgpIGdldHZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHQkKCdpbnB1dFtpZCQ9JyArIHRoaXMubmFtZSArICddJylbJ2lucHV0bWFzayddKFxyXG5cdFx0XHRcImhoOm1tOnNzXCIsIHtcclxuXHRcdFx0XHRtYXNrOiBcImg6cyB0XFxtXCIsXHJcblx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiSEg6TU06U1NcIixcclxuXHRcdFx0XHRpbnNlcnRNb2RlOiBmYWxzZSxcclxuXHRcdFx0XHRjbGVhck1hc2tPbkxvc3RGb2N1czogZmFsc2UsXHJcblx0XHRcdFx0c2hvd01hc2tPbkhvdmVyOiBmYWxzZSxcclxuXHRcdFx0XHRob3VyRm9ybWF0OiAxMlxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHRuZ09uQ2hhbmdlcyhldmVudCkge1xyXG5cdFx0aWYgKGV2ZW50LnN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5zdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGxldCBjc3MgPSBldmVudC5zdHlsZS5jdXJyZW50VmFsdWU7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtd2lkdGgnLCBjc3NbJ2Mtd2lkdGgnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtaGVpZ2h0JywgY3NzWydjLWhlaWdodCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtbGVmdCcsIGNzc1snbGFiZWwtbGVmdCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtdG9wJywgY3NzWydsYWJlbC10b3AnXSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnQudmFsdWVTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtbGVmdCcsIGNzc1sndmFsdWUtbGVmdCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtdG9wJywgY3NzWyd2YWx1ZS10b3AnXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHNlbGVjdENoYW5nZWQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmdldHZhbHVlLmVtaXQoZXZlbnQpO1xyXG5cdH1cclxuXHRvbkJsdXJNZXRob2QoKSB7XHJcblx0XHR0aGlzLnRpbWUgPVx0JCgnIycgKyB0aGlzLm5hbWUpLnZhbCgpO1xyXG5cdFx0dGhpcy5nZXR2YWx1ZS5lbWl0KHRoaXMudGltZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==