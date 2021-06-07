import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ProfileSubMenuComponent = class ProfileSubMenuComponent {
    constructor() {
        this.menuClick = new EventEmitter;
    }
    ngOnInit() { }
    clickMenu() {
        this.menuClick.emit();
    }
};
__decorate([
    Input()
], ProfileSubMenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], ProfileSubMenuComponent.prototype, "link", void 0);
__decorate([
    Input()
], ProfileSubMenuComponent.prototype, "submenuStyle", void 0);
__decorate([
    Output()
], ProfileSubMenuComponent.prototype, "menuClick", void 0);
ProfileSubMenuComponent = __decorate([
    Component({
        selector: 'sml-navbar-menu-profilemenu-profilesubmenu',
        template: `
	<a *ngIf="link" class="dropdown-item" href="#" [ngStyle]="submenuStyle" [routerLink]="link">{{label}}</a>
	<a *ngIf="!link" class="dropdown-item" style="cursor: pointer;" [ngStyle]="submenuStyle" (click)="clickMenu()">{{label}}</a>
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
	`]
    })
], ProfileSubMenuComponent);
export { ProfileSubMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1zdWJtZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL21lbnUvcHJvZmlsZS1tZW51L3Byb2ZpbGUtc3VibWVudS9wcm9maWxlLXN1Ym1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBdUMvRSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQU1uQztRQURVLGNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBQztJQUN2QixDQUFDO0lBRWpCLFFBQVEsS0FBSyxDQUFDO0lBRWQsU0FBUztRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNELENBQUE7QUFYUztJQUFSLEtBQUssRUFBRTtzREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO3FEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7NkRBQW1CO0FBQ2pCO0lBQVQsTUFBTSxFQUFFOzBEQUE4QjtBQUwzQix1QkFBdUI7SUFyQ25DLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSw0Q0FBNEM7UUFDdEQsUUFBUSxFQUFFOzs7RUFHVDtpQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRCUjtLQUNELENBQUM7R0FFVyx1QkFBdUIsQ0FhbkM7U0FiWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC1uYXZiYXItbWVudS1wcm9maWxlbWVudS1wcm9maWxlc3VibWVudScsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8YSAqbmdJZj1cImxpbmtcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIFtuZ1N0eWxlXT1cInN1Ym1lbnVTdHlsZVwiIFtyb3V0ZXJMaW5rXT1cImxpbmtcIj57e2xhYmVsfX08L2E+XHJcblx0PGEgKm5nSWY9XCIhbGlua1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIFtuZ1N0eWxlXT1cInN1Ym1lbnVTdHlsZVwiIChjbGljayk9XCJjbGlja01lbnUoKVwiPnt7bGFiZWx9fTwvYT5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHQub3ZlcmxheWJ0biB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LmRyb3Bkb3duLW1lbnUge1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0bGVmdDogdW5zZXQ7XHJcblx0fVxyXG5cdC51c2VySWNvbiB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEycHhcclxuXHR9XHJcblx0LnVzZXJJY29uIGltZyB7XHJcblx0XHR3aWR0aDogMjRweFxyXG5cdH1cclxuXHQuZHJvcGRvd24tdG9nZ2xlIHNwYW4sLmRyb3Bkb3duLW1lbnV7XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0fVxyXG5cdC5kcm9wZG93bi10b2dnbGU6OmFmdGVyeyAgICBcclxuXHRcdHRvcDogM3B4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHRgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHRASW5wdXQoKSBsaW5rOiBzdHJpbmc7XHJcblx0QElucHV0KCkgc3VibWVudVN0eWxlOiBhbnk7XHJcblx0QE91dHB1dCgpIG1lbnVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxuXHJcblx0Y2xpY2tNZW51KCl7XHJcblx0XHR0aGlzLm1lbnVDbGljay5lbWl0KCk7XHJcblx0fVxyXG59XHJcbiJdfQ==