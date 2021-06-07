import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProfileMenuComponent = class ProfileMenuComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], ProfileMenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], ProfileMenuComponent.prototype, "imagepath", void 0);
__decorate([
    Input()
], ProfileMenuComponent.prototype, "menuStyle", void 0);
ProfileMenuComponent = __decorate([
    Component({
        selector: 'sml-navbar-menu-profilemenu',
        template: `
	<div class="dropdown position-relative">
  <a class="nav-link dropdown-toggle" [ngStyle]="menuStyle" data-toggle="dropdown" href="javascript:void">
    <span class="userIcon">
      <img src="{{imagepath}}">
    </span>
    <span>{{label}}</span>
  </a>
  <div class="dropdown-menu">
    <ng-content></ng-content>
  </div>
</div>
	`,
        styles: [`
	.overlaybtn {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		display: none;
	}
	.dropdown-menu {
		z-index: 9999;
		right: 0;
		left: unset;
	}
	.userIcon {
		margin-right: 12px
	}
	.userIcon img {
		width: 24px
	}
	.dropdown-toggle span,.dropdown-menu{
		font-size: 13px;
	}
	.dropdown-toggle::after{    
		top: 3px;
		position: relative;
	}
	a {
		color: white;
	}
	`]
    })
], ProfileMenuComponent);
export { ProfileMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL21lbnUvcHJvZmlsZS1tZW51L3Byb2ZpbGUtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQW1EL0UsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFNaEMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUSxLQUFLLENBQUM7Q0FDZCxDQUFBO0FBUFM7SUFBUixLQUFLLEVBQUU7bURBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTt1REFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7dURBQWdCO0FBSlosb0JBQW9CO0lBakRoQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0VBWVQ7aUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErQlI7S0FDRCxDQUFDO0dBRVcsb0JBQW9CLENBU2hDO1NBVFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzbWwtbmF2YmFyLW1lbnUtcHJvZmlsZW1lbnUnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0PGRpdiBjbGFzcz1cImRyb3Bkb3duIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBbbmdTdHlsZV09XCJtZW51U3R5bGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZFwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ1c2VySWNvblwiPlxyXG4gICAgICA8aW1nIHNyYz1cInt7aW1hZ2VwYXRofX1cIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuPnt7bGFiZWx9fTwvc3Bhbj5cclxuICA8L2E+XHJcbiAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblx0YCxcclxuXHRzdHlsZXM6IFtgXHJcblx0Lm92ZXJsYXlidG4ge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5kcm9wZG93bi1tZW51IHtcclxuXHRcdHotaW5kZXg6IDk5OTk7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGxlZnQ6IHVuc2V0O1xyXG5cdH1cclxuXHQudXNlckljb24ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMnB4XHJcblx0fVxyXG5cdC51c2VySWNvbiBpbWcge1xyXG5cdFx0d2lkdGg6IDI0cHhcclxuXHR9XHJcblx0LmRyb3Bkb3duLXRvZ2dsZSBzcGFuLC5kcm9wZG93bi1tZW51e1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdH1cclxuXHQuZHJvcGRvd24tdG9nZ2xlOjphZnRlcnsgICAgXHJcblx0XHR0b3A6IDNweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0YSB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cdGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZU1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nXHJcblx0QElucHV0KCkgaW1hZ2VwYXRoOiBzdHJpbmc7XHJcblx0QElucHV0KCkgbWVudVN0eWxlOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkgeyB9XHJcbn1cclxuIl19