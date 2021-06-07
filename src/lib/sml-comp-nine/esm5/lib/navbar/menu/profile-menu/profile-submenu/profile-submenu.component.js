import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ProfileSubMenuComponent = /** @class */ (function () {
    function ProfileSubMenuComponent() {
        this.menuClick = new EventEmitter;
    }
    ProfileSubMenuComponent.prototype.ngOnInit = function () { };
    ProfileSubMenuComponent.prototype.clickMenu = function () {
        this.menuClick.emit();
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
            template: "\n\t<a *ngIf=\"link\" class=\"dropdown-item\" href=\"#\" [ngStyle]=\"submenuStyle\" [routerLink]=\"link\">{{label}}</a>\n\t<a *ngIf=\"!link\" class=\"dropdown-item\" style=\"cursor: pointer;\" [ngStyle]=\"submenuStyle\" (click)=\"clickMenu()\">{{label}}</a>\n\t",
            styles: ["\n\t.overlaybtn {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 9;\n\t\tdisplay: none;\n\t}\n\t.dropdown-menu {\n\t\tz-index: 9999;\n\t\tright: 0;\n\t\tleft: unset;\n\t}\n\t.userIcon {\n\t\tmargin-right: 12px\n\t}\n\t.userIcon img {\n\t\twidth: 24px\n\t}\n\t.dropdown-toggle span,.dropdown-menu{\n\t\tfont-size: 13px;\n\t}\n\t.dropdown-toggle::after{    \n\t\ttop: 3px;\n\t\tposition: relative;\n\t}\n\t"]
        })
    ], ProfileSubMenuComponent);
    return ProfileSubMenuComponent;
}());
export { ProfileSubMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1zdWJtZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL21lbnUvcHJvZmlsZS1tZW51L3Byb2ZpbGUtc3VibWVudS9wcm9maWxlLXN1Ym1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBdUMvRTtJQU1DO1FBRFUsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFDO0lBQ3ZCLENBQUM7SUFFakIsMENBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwyQ0FBUyxHQUFUO1FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBVlE7UUFBUixLQUFLLEVBQUU7MERBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTt5REFBYztJQUNiO1FBQVIsS0FBSyxFQUFFO2lFQUFtQjtJQUNqQjtRQUFULE1BQU0sRUFBRTs4REFBOEI7SUFMM0IsdUJBQXVCO1FBckNuQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsNENBQTRDO1lBQ3RELFFBQVEsRUFBRSx1UUFHVDtxQkFDUSwyY0E0QlI7U0FDRCxDQUFDO09BRVcsdUJBQXVCLENBYW5DO0lBQUQsOEJBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC1uYXZiYXItbWVudS1wcm9maWxlbWVudS1wcm9maWxlc3VibWVudScsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8YSAqbmdJZj1cImxpbmtcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIFtuZ1N0eWxlXT1cInN1Ym1lbnVTdHlsZVwiIFtyb3V0ZXJMaW5rXT1cImxpbmtcIj57e2xhYmVsfX08L2E+XHJcblx0PGEgKm5nSWY9XCIhbGlua1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIFtuZ1N0eWxlXT1cInN1Ym1lbnVTdHlsZVwiIChjbGljayk9XCJjbGlja01lbnUoKVwiPnt7bGFiZWx9fTwvYT5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHQub3ZlcmxheWJ0biB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LmRyb3Bkb3duLW1lbnUge1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0bGVmdDogdW5zZXQ7XHJcblx0fVxyXG5cdC51c2VySWNvbiB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEycHhcclxuXHR9XHJcblx0LnVzZXJJY29uIGltZyB7XHJcblx0XHR3aWR0aDogMjRweFxyXG5cdH1cclxuXHQuZHJvcGRvd24tdG9nZ2xlIHNwYW4sLmRyb3Bkb3duLW1lbnV7XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0fVxyXG5cdC5kcm9wZG93bi10b2dnbGU6OmFmdGVyeyAgICBcclxuXHRcdHRvcDogM3B4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHRgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHRASW5wdXQoKSBsaW5rOiBzdHJpbmc7XHJcblx0QElucHV0KCkgc3VibWVudVN0eWxlOiBhbnk7XHJcblx0QE91dHB1dCgpIG1lbnVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxuXHJcblx0Y2xpY2tNZW51KCl7XHJcblx0XHR0aGlzLm1lbnVDbGljay5lbWl0KCk7XHJcblx0fVxyXG59XHJcbiJdfQ==