import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], MenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "link", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "menuStyle", void 0);
MenuComponent = __decorate([
    Component({
        selector: 'sml-navbar-menu',
        template: `
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li *ngIf="link" class="nav-item active">
      <a class="nav-link" [ngStyle]="menuStyle" [routerLink]="link">{{label}}</a>
    </li>
    <li class="nav-item dropdown position-relative" *ngIf="link == undefined">
      <a href="javascript:void()" [ngStyle]="menuStyle" class="nav-link dropdown-toggle" data-toggle="dropdown">
        {{label}}
        <b class="caret"></b>
      </a>
      <ul class="dropdown-menu">
        <ng-content></ng-content>
      </ul>
    </li>
  </ul>
</div>
	`,
        styles: [`
	.nav-link {
		color: #ffffff;
	}
	
	.positionRight {
		position: absolute;
		right: 10px;
		list-style: none
	}
	.nav-link{font-size: 13px;}
	
	.dropdown-toggle{font-size: 13px;}
	
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
		left: 0;
		left: unset;
	}
	
	.nav-link {
		color: #ffffff;
	}
	
	.userIcon {
		margin-right: 12px
	}
	
	.userIcon img {
		width: 24px
	}
	
	.dropdown-toggle span,.dropdown-menu{font-size: 13px;}
	.dropdown-toggle::after{    top: 3px;
		position: relative;}
	`]
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL25hdmJhci9tZW51L21lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFzRS9FLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFNekIsZ0JBQWdCLENBQUM7SUFDakIsUUFBUSxLQUFLLENBQUM7Q0FFZCxDQUFBO0FBUFM7SUFBUixLQUFLLEVBQUU7NENBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTsyQ0FBYztBQUNiO0lBQVIsS0FBSyxFQUFFO2dEQUFnQjtBQUpaLGFBQWE7SUFuRXpCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCVDtpQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNkNSO0tBQ0QsQ0FBQztHQUNXLGFBQWEsQ0FTekI7U0FUWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzbWwtbmF2YmFyLW1lbnUnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0PGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgPGxpICpuZ0lmPVwibGlua1wiIGNsYXNzPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBbbmdTdHlsZV09XCJtZW51U3R5bGVcIiBbcm91dGVyTGlua109XCJsaW5rXCI+e3tsYWJlbH19PC9hPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duIHBvc2l0aW9uLXJlbGF0aXZlXCIgKm5nSWY9XCJsaW5rID09IHVuZGVmaW5lZFwiPlxyXG4gICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKClcIiBbbmdTdHlsZV09XCJtZW51U3R5bGVcIiBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cclxuICAgICAgICB7e2xhYmVsfX1cclxuICAgICAgICA8YiBjbGFzcz1cImNhcmV0XCI+PC9iPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG5cdGAsXHJcblx0c3R5bGVzOiBbYFxyXG5cdC5uYXYtbGluayB7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblx0XHJcblx0LnBvc2l0aW9uUmlnaHQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDEwcHg7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lXHJcblx0fVxyXG5cdC5uYXYtbGlua3tmb250LXNpemU6IDEzcHg7fVxyXG5cdFxyXG5cdC5kcm9wZG93bi10b2dnbGV7Zm9udC1zaXplOiAxM3B4O31cclxuXHRcclxuXHQub3ZlcmxheWJ0biB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0XHJcblx0LmRyb3Bkb3duLW1lbnUge1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRsZWZ0OiB1bnNldDtcclxuXHR9XHJcblx0XHJcblx0Lm5hdi1saW5rIHtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHRcclxuXHQudXNlckljb24ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMnB4XHJcblx0fVxyXG5cdFxyXG5cdC51c2VySWNvbiBpbWcge1xyXG5cdFx0d2lkdGg6IDI0cHhcclxuXHR9XHJcblx0XHJcblx0LmRyb3Bkb3duLXRvZ2dsZSBzcGFuLC5kcm9wZG93bi1tZW51e2ZvbnQtc2l6ZTogMTNweDt9XHJcblx0LmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7ICAgIHRvcDogM3B4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO31cclxuXHRgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblx0QElucHV0KCkgbGluazogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIG1lbnVTdHlsZTogYW55O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblx0bmdPbkluaXQoKSB7IH1cclxuXHRcclxufVxyXG4iXX0=