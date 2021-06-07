import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var ProfileMenuComponent = /** @class */ (function () {
    function ProfileMenuComponent() {
    }
    ProfileMenuComponent.prototype.ngOnInit = function () { };
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
            template: "\n\t<div class=\"dropdown position-relative\">\n  <a class=\"nav-link dropdown-toggle\" [ngStyle]=\"menuStyle\" data-toggle=\"dropdown\" href=\"javascript:void\">\n    <span class=\"userIcon\">\n      <img src=\"{{imagepath}}\">\n    </span>\n    <span>{{label}}</span>\n  </a>\n  <div class=\"dropdown-menu\">\n    <ng-content></ng-content>\n  </div>\n</div>\n\t",
            styles: ["\n\t.overlaybtn {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 9;\n\t\tdisplay: none;\n\t}\n\t.dropdown-menu {\n\t\tz-index: 9999;\n\t\tright: 0;\n\t\tleft: unset;\n\t}\n\t.userIcon {\n\t\tmargin-right: 12px\n\t}\n\t.userIcon img {\n\t\twidth: 24px\n\t}\n\t.dropdown-toggle span,.dropdown-menu{\n\t\tfont-size: 13px;\n\t}\n\t.dropdown-toggle::after{    \n\t\ttop: 3px;\n\t\tposition: relative;\n\t}\n\ta {\n\t\tcolor: white;\n\t}\n\t"]
        })
    ], ProfileMenuComponent);
    return ProfileMenuComponent;
}());
export { ProfileMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL21lbnUvcHJvZmlsZS1tZW51L3Byb2ZpbGUtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQW1EL0U7SUFNQztJQUFnQixDQUFDO0lBRWpCLHVDQUFRLEdBQVIsY0FBYSxDQUFDO0lBTkw7UUFBUixLQUFLLEVBQUU7dURBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTsyREFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7MkRBQWdCO0lBSlosb0JBQW9CO1FBakRoQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFFBQVEsRUFBRSw2V0FZVDtxQkFDUSwwZUErQlI7U0FDRCxDQUFDO09BRVcsb0JBQW9CLENBU2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC1uYXZiYXItbWVudS1wcm9maWxlbWVudScsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzPVwiZHJvcGRvd24gcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICA8YSBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIFtuZ1N0eWxlXT1cIm1lbnVTdHlsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInVzZXJJY29uXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwie3tpbWFnZXBhdGh9fVwiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4+e3tsYWJlbH19PC9zcGFuPlxyXG4gIDwvYT5cclxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHQub3ZlcmxheWJ0biB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LmRyb3Bkb3duLW1lbnUge1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0bGVmdDogdW5zZXQ7XHJcblx0fVxyXG5cdC51c2VySWNvbiB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEycHhcclxuXHR9XHJcblx0LnVzZXJJY29uIGltZyB7XHJcblx0XHR3aWR0aDogMjRweFxyXG5cdH1cclxuXHQuZHJvcGRvd24tdG9nZ2xlIHNwYW4sLmRyb3Bkb3duLW1lbnV7XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0fVxyXG5cdC5kcm9wZG93bi10b2dnbGU6OmFmdGVyeyAgICBcclxuXHRcdHRvcDogM3B4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHRhIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHR9XHJcblx0YF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmdcclxuXHRASW5wdXQoKSBpbWFnZXBhdGg6IHN0cmluZztcclxuXHRASW5wdXQoKSBtZW51U3R5bGU6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxufVxyXG4iXX0=