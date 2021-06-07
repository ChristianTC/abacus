import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SubmenuComponent = /** @class */ (function () {
    function SubmenuComponent() {
        this.actionClick = new EventEmitter;
    }
    SubmenuComponent.prototype.ngOnInit = function () { };
    SubmenuComponent.prototype.menuClick = function () {
        this.actionClick.emit();
    };
    __decorate([
        Input()
    ], SubmenuComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], SubmenuComponent.prototype, "link", void 0);
    __decorate([
        Input()
    ], SubmenuComponent.prototype, "param", void 0);
    __decorate([
        Input()
    ], SubmenuComponent.prototype, "submenuStyle", void 0);
    __decorate([
        Output()
    ], SubmenuComponent.prototype, "actionClick", void 0);
    SubmenuComponent = __decorate([
        Component({
            selector: 'sml-navbar-menu-submenu',
            template: "\n  <a *ngIf=\"link && param\" class=\"dropdown-item\" [routerLink]=\"[link,param]\">{{label}}</a>\n  <a *ngIf=\"link && param == undefined\" class=\"dropdown-item\" [routerLink]=\"link\">{{label}}</a>\n  <a *ngIf=\"link == undefined\" (click)=\"menuClick()\" class=\"dropdown-item\">{{label}}</a>\n",
            styles: ["\n  .overlaybtn {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9;\n    display: none;\n}\n\n.dropdown-menu {\n    z-index: 9999;\n    right: 0;\n    left: unset;\n}\n\n.nav-link {\n    color: #ffffff;\n}\n\n.userIcon {\n    margin-right: 12px\n}\n\n.userIcon img {\n    width: 24px\n}\n\n.dropdown-toggle span,.dropdown-menu{font-size: 13px;}\n.dropdown-toggle::after{    top: 3px;\n    position: relative;}\n  "]
        })
    ], SubmenuComponent);
    return SubmenuComponent;
}());
export { SubmenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL25hdmJhci9tZW51L3N1Ym1lbnUvc3VibWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUEyQy9FO0lBUUk7UUFGVSxnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO0lBRXpCLENBQUM7SUFDakIsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFDZCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBVlE7UUFBUixLQUFLLEVBQUU7bURBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTtrREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFO21EQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7MERBQW1CO0lBQ2pCO1FBQVQsTUFBTSxFQUFFO3lEQUFnQztJQU5oQyxnQkFBZ0I7UUF6QzVCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLDZTQUliO3FCQUNZLG9kQWdDVjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FhNUI7SUFBRCx1QkFBQztDQUFBLEFBYkQsSUFhQztTQWJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzbWwtbmF2YmFyLW1lbnUtc3VibWVudScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxhICpuZ0lmPVwibGluayAmJiBwYXJhbVwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIFtyb3V0ZXJMaW5rXT1cIltsaW5rLHBhcmFtXVwiPnt7bGFiZWx9fTwvYT5cclxuICA8YSAqbmdJZj1cImxpbmsgJiYgcGFyYW0gPT0gdW5kZWZpbmVkXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgW3JvdXRlckxpbmtdPVwibGlua1wiPnt7bGFiZWx9fTwvYT5cclxuICA8YSAqbmdJZj1cImxpbmsgPT0gdW5kZWZpbmVkXCIgKGNsaWNrKT1cIm1lbnVDbGljaygpXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+e3tsYWJlbH19PC9hPlxyXG5gLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gIC5vdmVybGF5YnRuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiB1bnNldDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udXNlckljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4XHJcbn1cclxuXHJcbi51c2VySWNvbiBpbWcge1xyXG4gICAgd2lkdGg6IDI0cHhcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZSBzcGFuLC5kcm9wZG93bi1tZW51e2ZvbnQtc2l6ZTogMTNweDt9XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyeyAgICB0b3A6IDNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1Ym1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBsaW5rOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwYXJhbTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc3VibWVudVN0eWxlOiBhbnk7XHJcbiAgICBAT3V0cHV0KCkgYWN0aW9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG4gICAgbWVudUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uQ2xpY2suZW1pdCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==