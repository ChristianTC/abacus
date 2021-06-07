import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let SearchComponent = class SearchComponent {
    constructor() {
        this.value = '';
        this.searchClick = new EventEmitter();
        this.searchText = '';
    }
    ngOnInit() {
    }
    keyup(e) {
        if (e.keyCode === 13) {
            this.searchClick.emit(this.searchText);
        }
    }
};
__decorate([
    Input()
], SearchComponent.prototype, "value", void 0);
__decorate([
    Input()
], SearchComponent.prototype, "name", void 0);
__decorate([
    Input()
], SearchComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], SearchComponent.prototype, "width", void 0);
__decorate([
    Output()
], SearchComponent.prototype, "searchClick", void 0);
SearchComponent = __decorate([
    Component({
        selector: 'sml-table-header-search',
        template: `
  <div class="form-row align-items-center">
    <div class="col-md-12 col-12 mb-1">
        <input type="text" class="form-control h-39 smlSearch" [(ngModel)]="searchText" placeholder="{{placeholder}}"
            id="txt-{{name}}" name="txt-{{name}}" (keyup)="keyup($event)">
    </div>
</div>
  `,
        styles: [`
  .h-39{height: 39px;}
  .smlSearch{font-size: 9pt !important;border-radius:4px !important;border-color: #ccc !important}
  .smlSearch:focus{outline: none;box-shadow: none;}
  `]
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvaGVhZGVyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUIvRSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBUTFCO1FBTlMsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUlmLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQyxlQUFVLEdBQVEsRUFBRSxDQUFDO0lBQ0wsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQWhCVTtJQUFSLEtBQUssRUFBRTs4Q0FBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7NkNBQU07QUFDTDtJQUFSLEtBQUssRUFBRTtvREFBYTtBQUNaO0lBQVIsS0FBSyxFQUFFOzhDQUFPO0FBQ0w7SUFBVCxNQUFNLEVBQUU7b0RBQWtDO0FBTmhDLGVBQWU7SUFqQjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7aUJBQ1E7Ozs7R0FJUjtLQUNGLENBQUM7R0FFVyxlQUFlLENBa0IzQjtTQWxCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtdGFibGUtaGVhZGVyLXNlYXJjaCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC0xMiBtYi0xXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaC0zOSBzbWxTZWFyY2hcIiBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIiBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwiXHJcbiAgICAgICAgICAgIGlkPVwidHh0LXt7bmFtZX19XCIgbmFtZT1cInR4dC17e25hbWV9fVwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgLmgtMzl7aGVpZ2h0OiAzOXB4O31cclxuICAuc21sU2VhcmNoe2ZvbnQtc2l6ZTogOXB0ICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czo0cHggIWltcG9ydGFudDtib3JkZXItY29sb3I6ICNjY2MgIWltcG9ydGFudH1cclxuICAuc21sU2VhcmNoOmZvY3Vze291dGxpbmU6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTt9XHJcbiAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogYW55ID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZTtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjtcclxuICBASW5wdXQoKSB3aWR0aDtcclxuICBAT3V0cHV0KCkgc2VhcmNoQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgc2VhcmNoVGV4dDogYW55ID0gJyc7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBrZXl1cChlKSB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQ2xpY2suZW1pdCh0aGlzLnNlYXJjaFRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=