import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let SubmenuComponent = class SubmenuComponent {
    constructor() {
        this.actionClick = new EventEmitter;
    }
    ngOnInit() { }
    menuClick() {
        this.actionClick.emit();
    }
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
        template: `
  <a *ngIf="link && param" class="dropdown-item" [routerLink]="[link,param]">{{label}}</a>
  <a *ngIf="link && param == undefined" class="dropdown-item" [routerLink]="link">{{label}}</a>
  <a *ngIf="link == undefined" (click)="menuClick()" class="dropdown-item">{{label}}</a>
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
], SubmenuComponent);
export { SubmenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL25hdmJhci9tZW51L3N1Ym1lbnUvc3VibWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUEyQy9FLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBUXpCO1FBRlUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksQ0FBQztJQUV6QixDQUFDO0lBQ2pCLFFBQVEsS0FBSyxDQUFDO0lBQ2QsU0FBUztRQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztDQUNKLENBQUE7QUFYWTtJQUFSLEtBQUssRUFBRTsrQ0FBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOzhDQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7K0NBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTtzREFBbUI7QUFDakI7SUFBVCxNQUFNLEVBQUU7cURBQWdDO0FBTmhDLGdCQUFnQjtJQXpDNUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUU7Ozs7Q0FJYjtpQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ1Y7S0FDRixDQUFDO0dBQ1csZ0JBQWdCLENBYTVCO1NBYlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NtbC1uYXZiYXItbWVudS1zdWJtZW51JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGEgKm5nSWY9XCJsaW5rICYmIHBhcmFtXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgW3JvdXRlckxpbmtdPVwiW2xpbmsscGFyYW1dXCI+e3tsYWJlbH19PC9hPlxyXG4gIDxhICpuZ0lmPVwibGluayAmJiBwYXJhbSA9PSB1bmRlZmluZWRcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBbcm91dGVyTGlua109XCJsaW5rXCI+e3tsYWJlbH19PC9hPlxyXG4gIDxhICpuZ0lmPVwibGluayA9PSB1bmRlZmluZWRcIiAoY2xpY2spPVwibWVudUNsaWNrKClcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj57e2xhYmVsfX08L2E+XHJcbmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgLm92ZXJsYXlidG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi51c2VySWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHhcclxufVxyXG5cclxuLnVzZXJJY29uIGltZyB7XHJcbiAgICB3aWR0aDogMjRweFxyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlIHNwYW4sLmRyb3Bkb3duLW1lbnV7Zm9udC1zaXplOiAxM3B4O31cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7ICAgIHRvcDogM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO31cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VibWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGxpbms6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHBhcmFtOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzdWJtZW51U3R5bGU6IGFueTtcclxuICAgIEBPdXRwdXQoKSBhY3Rpb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcbiAgICBtZW51Q2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25DbGljay5lbWl0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19