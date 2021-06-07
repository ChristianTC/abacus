import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ButtongroupComponent = class ButtongroupComponent {
    constructor() {
        this.obj = { label: 'My Dropdown', dropdownButtons: [] };
        this.actionClick = new EventEmitter;
        this.hoverAnchor = {};
    }
    ngOnInit() {
    }
    getHoverStyle() {
        let nType = {
            'background-color': '#fff',
            'color': this.buttonGroupStyle.backgroundcolor,
            'border-left': '3px solid' + this.buttonGroupStyle.backgroundcolor,
            'font-family': this.buttonGroupValueStyle['font-family'],
            'font-size': this.buttonGroupValueStyle['font-size'],
            'font-weight': this.buttonGroupValueStyle['font-weight'],
            'cursor': 'pointer'
        };
        return nType;
    }
    clickMethod(event) {
        this.actionClick.emit(event);
    }
};
__decorate([
    Input()
], ButtongroupComponent.prototype, "obj", void 0);
__decorate([
    Input()
], ButtongroupComponent.prototype, "buttonGroupStyle", void 0);
__decorate([
    Input()
], ButtongroupComponent.prototype, "buttonGroupLabelStyle", void 0);
__decorate([
    Input()
], ButtongroupComponent.prototype, "buttonGroupValueStyle", void 0);
__decorate([
    Output()
], ButtongroupComponent.prototype, "actionClick", void 0);
ButtongroupComponent = __decorate([
    Component({
        selector: 'sml-buttongroup',
        template: `
	<div class="w-100 mb-5">
	<div class="form-row align-items-center mb-5">
		<div class="col-md-12 col-12 mb-0">
			<div class="btn-group">
				<button type="button" [ngStyle]="buttonGroupLabelStyle" [style.background]="buttonGroupStyle?.backgroundcolor" [style.width]="buttonGroupStyle?.width"
				 [style.height]="buttonGroupStyle?.height" class="btn btn-default  dropdown-toggle" data-toggle="dropdown">
					{{ obj.label }}
					<span [style.background]="buttonGroupStyle?.togglebackgroundcolor" class="dropdown-toggle-after" [style.height]="buttonGroupStyle?.height">
						<img src="./assets/Arrowcombobox.png">
					</span>
				</button>
				<div [style.width]="buttonGroupStyle?.width" class="dropdown-menu">
					<a *ngFor="let button of obj.dropdownButtons;let i = index;" class="dropdown-item" (mouseover)="hoverAnchor[i] = true" (click)="clickMethod(button.action)"
					 (mouseleave)="hoverAnchor[i]=false" [ngStyle]="hoverAnchor[i]?getHoverStyle(): buttonGroupValueStyle">
						{{button.title}}
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
	`,
        styles: [`
		
.dropdown-toggle-after{
    border: none;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #6a942f;
    vertical-align: 0;
    width: 35px !important;
    height: 104%;
    background: #a3d45d;
    position: absolute;
    z-index: 999;
    top: -1px;
    right: -1px;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;

}

.dropdown-toggle-after img{width: 16px;  transition: ease-in-out all 0.2s}
.show .dropdown-toggle-after img{transform: rotate(-180deg);  transition: ease-in-out all 0.2s}
.dropdown-toggle {
 width: 175px;
 background-color: #8ec63f;
 border-radius: 6px;
 color: #fff;
 display: inline-flex;
 white-space: unset !important;
 text-align: left;
 align-items: center;
 font-size: 14px;
 padding:9px 6px;
 line-height: 1.4;
 position: relative;
}

.dropdown-toggle:focus {
 box-shadow: none;
}

.dropdown-item{
    font-size: 14px;
     padding: 6px;
     border-left: 3px solid #fff;
     white-space: pre-wrap !important;

}
.dropdown-divider{
    margin: 0;
}
.dropdown-menu.show {
     width: 175px;
}
.dropdown-item:hover{
    background-color: #fff;
    color: #8ec63f;
    border-left: 3px solid #8ec63f;
}

.dropdown-toggle::after {
    display:none;
}

.updrop{position: absolute; top: -19px; right: 18px;}

	`]
    })
], ButtongroupComponent);
export { ButtongroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25ncm91cC9idXR0b25ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFtRy9FLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBUWhDO1FBTlMsUUFBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFJbkQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUN6QyxnQkFBVyxHQUFRLEVBQUUsQ0FBQTtJQUVyQixDQUFDO0lBQ0QsUUFBUTtJQUNSLENBQUM7SUFDRCxhQUFhO1FBQ1osSUFBSSxLQUFLLEdBQUc7WUFDWCxrQkFBa0IsRUFBRSxNQUFNO1lBQzFCLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUM5QyxhQUFhLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ2xFLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO1lBQ3hELFdBQVcsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDO1lBQ3BELGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO1lBQ3hELFFBQVEsRUFBRSxTQUFTO1NBQ25CLENBQUE7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFDRCxXQUFXLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0QsQ0FBQTtBQXpCUztJQUFSLEtBQUssRUFBRTtpREFBcUQ7QUFDcEQ7SUFBUixLQUFLLEVBQUU7OERBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFO21FQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTttRUFBNEI7QUFDMUI7SUFBVCxNQUFNLEVBQUU7eURBQWdDO0FBTjdCLG9CQUFvQjtJQWpHaEMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQlQ7aUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzRVI7S0FDRCxDQUFDO0dBQ1csb0JBQW9CLENBMkJoQztTQTNCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC1idXR0b25ncm91cCcsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzPVwidy0xMDAgbWItNVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItNVwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtMTIgbWItMFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW25nU3R5bGVdPVwiYnV0dG9uR3JvdXBMYWJlbFN0eWxlXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYnV0dG9uR3JvdXBTdHlsZT8uYmFja2dyb3VuZGNvbG9yXCIgW3N0eWxlLndpZHRoXT1cImJ1dHRvbkdyb3VwU3R5bGU/LndpZHRoXCJcclxuXHRcdFx0XHQgW3N0eWxlLmhlaWdodF09XCJidXR0b25Hcm91cFN0eWxlPy5oZWlnaHRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCAgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxyXG5cdFx0XHRcdFx0e3sgb2JqLmxhYmVsIH19XHJcblx0XHRcdFx0XHQ8c3BhbiBbc3R5bGUuYmFja2dyb3VuZF09XCJidXR0b25Hcm91cFN0eWxlPy50b2dnbGViYWNrZ3JvdW5kY29sb3JcIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZS1hZnRlclwiIFtzdHlsZS5oZWlnaHRdPVwiYnV0dG9uR3JvdXBTdHlsZT8uaGVpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiLi9hc3NldHMvQXJyb3djb21ib2JveC5wbmdcIj5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8ZGl2IFtzdHlsZS53aWR0aF09XCJidXR0b25Hcm91cFN0eWxlPy53aWR0aFwiIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG5cdFx0XHRcdFx0PGEgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBvYmouZHJvcGRvd25CdXR0b25zO2xldCBpID0gaW5kZXg7XCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKG1vdXNlb3Zlcik9XCJob3ZlckFuY2hvcltpXSA9IHRydWVcIiAoY2xpY2spPVwiY2xpY2tNZXRob2QoYnV0dG9uLmFjdGlvbilcIlxyXG5cdFx0XHRcdFx0IChtb3VzZWxlYXZlKT1cImhvdmVyQW5jaG9yW2ldPWZhbHNlXCIgW25nU3R5bGVdPVwiaG92ZXJBbmNob3JbaV0/Z2V0SG92ZXJTdHlsZSgpOiBidXR0b25Hcm91cFZhbHVlU3R5bGVcIj5cclxuXHRcdFx0XHRcdFx0e3tidXR0b24udGl0bGV9fVxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHRcdFxyXG4uZHJvcGRvd24tdG9nZ2xlLWFmdGVye1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogIzZhOTQyZjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiAwO1xyXG4gICAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTA0JTtcclxuICAgIGJhY2tncm91bmQ6ICNhM2Q0NWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICByaWdodDogLTFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGUtYWZ0ZXIgaW1ne3dpZHRoOiAxNnB4OyAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgYWxsIDAuMnN9XHJcbi5zaG93IC5kcm9wZG93bi10b2dnbGUtYWZ0ZXIgaW1ne3RyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpOyAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgYWxsIDAuMnN9XHJcbi5kcm9wZG93bi10b2dnbGUge1xyXG4gd2lkdGg6IDE3NXB4O1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzhlYzYzZjtcclxuIGJvcmRlci1yYWRpdXM6IDZweDtcclxuIGNvbG9yOiAjZmZmO1xyXG4gZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbiBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gZm9udC1zaXplOiAxNHB4O1xyXG4gcGFkZGluZzo5cHggNnB4O1xyXG4gbGluZS1oZWlnaHQ6IDEuNDtcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmZmO1xyXG4gICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uZHJvcGRvd24tZGl2aWRlcntcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uZHJvcGRvd24tbWVudS5zaG93IHtcclxuICAgICB3aWR0aDogMTc1cHg7XHJcbn1cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM4ZWM2M2Y7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM4ZWM2M2Y7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuLnVwZHJvcHtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTE5cHg7IHJpZ2h0OiAxOHB4O31cclxuXHJcblx0YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbmdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRcclxuXHRASW5wdXQoKSBvYmogPSB7IGxhYmVsOiAnTXkgRHJvcGRvd24nLCBkcm9wZG93bkJ1dHRvbnM6IFtdIH07XHJcblx0QElucHV0KCkgYnV0dG9uR3JvdXBTdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIGJ1dHRvbkdyb3VwTGFiZWxTdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIGJ1dHRvbkdyb3VwVmFsdWVTdHlsZTogYW55O1xyXG5cdEBPdXRwdXQoKSBhY3Rpb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblx0aG92ZXJBbmNob3I6IGFueSA9IHt9XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxuXHRnZXRIb3ZlclN0eWxlKCkge1xyXG5cdFx0bGV0IG5UeXBlID0ge1xyXG5cdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjZmZmJyxcclxuXHRcdFx0J2NvbG9yJzogdGhpcy5idXR0b25Hcm91cFN0eWxlLmJhY2tncm91bmRjb2xvcixcclxuXHRcdFx0J2JvcmRlci1sZWZ0JzogJzNweCBzb2xpZCcgKyB0aGlzLmJ1dHRvbkdyb3VwU3R5bGUuYmFja2dyb3VuZGNvbG9yLFxyXG5cdFx0XHQnZm9udC1mYW1pbHknOiB0aGlzLmJ1dHRvbkdyb3VwVmFsdWVTdHlsZVsnZm9udC1mYW1pbHknXSxcclxuXHRcdFx0J2ZvbnQtc2l6ZSc6IHRoaXMuYnV0dG9uR3JvdXBWYWx1ZVN0eWxlWydmb250LXNpemUnXSxcclxuXHRcdFx0J2ZvbnQtd2VpZ2h0JzogdGhpcy5idXR0b25Hcm91cFZhbHVlU3R5bGVbJ2ZvbnQtd2VpZ2h0J10sXHJcblx0XHRcdCdjdXJzb3InOiAncG9pbnRlcidcclxuXHRcdH1cclxuXHRcdHJldHVybiBuVHlwZTtcclxuXHR9XHJcblx0Y2xpY2tNZXRob2QoZXZlbnQpIHtcclxuXHRcdHRoaXMuYWN0aW9uQ2xpY2suZW1pdChldmVudCk7XHJcblx0fVxyXG59XHJcbiJdfQ==