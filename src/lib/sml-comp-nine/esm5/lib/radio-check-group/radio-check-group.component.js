import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var RadioCheckBoxListComponent = /** @class */ (function () {
    // ###Samlple Data###
    // this.jsonData = [
    //   {
    //     name:'Option 1',
    //     value:'1',
    //     isChecked:false
    //   },
    //   {
    //     name:'Option 2',
    //     value:'2',
    //     isChecked:true
    //   },
    //   {
    //     name:'Option 3',
    //     value:'3',
    //     isChecked:false
    //   }
    // ]
    function RadioCheckBoxListComponent() {
        this.id = 'sml-radio-check-box-list';
        this.name = 'sml-radio-check-box-list-name';
        this.jsonData = [];
        this.type = 'radio';
        this.selectedValue = '';
        this.radioChange = new EventEmitter();
        this.checkboxChange = new EventEmitter();
    }
    RadioCheckBoxListComponent.prototype.ngOnInit = function () { };
    RadioCheckBoxListComponent.prototype.changeEvent = function (event) {
        if (event == 'radio') {
            this.radioChange.emit(this.selectedValue);
        }
        else {
            this.checkboxChange.emit(this.jsonData);
        }
    };
    __decorate([
        Input()
    ], RadioCheckBoxListComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], RadioCheckBoxListComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], RadioCheckBoxListComponent.prototype, "jsonData", void 0);
    __decorate([
        Input()
    ], RadioCheckBoxListComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], RadioCheckBoxListComponent.prototype, "selectedValue", void 0);
    __decorate([
        Output()
    ], RadioCheckBoxListComponent.prototype, "radioChange", void 0);
    __decorate([
        Output()
    ], RadioCheckBoxListComponent.prototype, "checkboxChange", void 0);
    RadioCheckBoxListComponent = __decorate([
        Component({
            selector: 'sml-radio-check-box-list',
            template: "\n  <form class=\"formRadioCheck\">\n    <div *ngIf=\"type == 'checkbox'\">\n      <div class=\"inputGroupRadioCheck\" *ngFor=\"let chk of jsonData;let i=index;\">\n        <input id=\"{{id}}-{{i}}\" name=\"{{id}}-{{i}}\" [value]=\"chk.isChecked\" [(ngModel)]=\"chk.isChecked\" (change)=\"changeEvent('checkbox')\" type=\"checkbox\" />\n        <label for=\"{{id}}-{{i}}\">{{chk.name}}</label>\n      </div>\n    </div>\n    <div *ngIf=\"type == 'radio'\">\n      <div class=\"inputGroupRadioCheck\" *ngFor=\"let rad of jsonData;let i=index;\">\n        <input id=\"{{id}}-{{i}}\" name=\"{{name}}\" [value]=\"rad.value\" [(ngModel)]=\"selectedValue\" (change)=\"changeEvent('radio')\" type=\"radio\" />\n        <label for=\"{{id}}-{{i}}\">{{rad.name}}</label>\n      </div>\n    </div>\n  </form>\n  ",
            styles: ["\n  .inputGroupRadioCheck {\n    background-color: #fff;\n    display: block;\n    margin: 10px 0;\n    position: relative;\n  }\n  .inputGroupRadioCheck  input:checked ~ label {\n      color: #fff;\n  }\n  .inputGroupRadioCheck  input:checked ~ label:before {\n      transform: translate(-50%, -50%) scale3d(56, 56, 1);\n      opacity: 1;\n  }\n  .inputGroupRadioCheck  input:checked ~ label:after {\n      background-color: #54E0C7;\n      border-color: #54E0C7;\n  }\n  .inputGroupRadioCheck  input {\n      width: 32px;\n      height: 32px;\n      order: 1;\n      z-index: 2;\n      position: absolute;\n      right: 30px;\n      top: 50%;\n      transform: translateY(-50%);\n      cursor: pointer;\n      visibility: hidden;\n  }\n  .inputGroupRadioCheck label {\n      padding: 12px 30px;\n      width: 100%;\n      display: block;\n      text-align: left;\n      color: #3C454C;\n      cursor: pointer;\n      position: relative;\n      z-index: 2;\n      transition: color 200ms ease-in;\n      overflow: hidden;\n  }\n  .inputGroupRadioCheck label:before {\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      content: '';\n      background-color: #5562eb;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%) scale3d(1, 1, 1);\n      transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);\n      opacity: 0;\n      z-index: -1;\n  }\n  .inputGroupRadioCheck label:after {\n      width: 32px;\n      height: 32px;\n      content: '';\n      border: 2px solid #D1D7DC;\n      background-color: #fff;\n      background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E \");\n      background-repeat: no-repeat;\n      background-position: 2px 3px;\n      border-radius: 50%;\n      z-index: 2;\n      position: absolute;\n      right: 30px;\n      top: 50%;\n      transform: translateY(-50%);\n      cursor: pointer;\n      transition: all 200ms ease-in;\n  }\n  .formRadioCheck {\n    padding: 0 16px;\n    max-width: 550px;\n    font-size: 18px;\n    font-weight: 600;\n  }  \n  "]
        })
    ], RadioCheckBoxListComponent);
    return RadioCheckBoxListComponent;
}());
export { RadioCheckBoxListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tY2hlY2stZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9yYWRpby1jaGVjay1ncm91cC9yYWRpby1jaGVjay1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzRy9FO0lBU0UscUJBQXFCO0lBQ25CLG9CQUFvQjtJQUNwQixNQUFNO0lBQ04sdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsT0FBTztJQUNQLE1BQU07SUFDTix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixPQUFPO0lBQ1AsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLE1BQU07SUFDUixJQUFJO0lBQ0o7UUF6QlMsT0FBRSxHQUFRLDBCQUEwQixDQUFDO1FBQ3JDLFNBQUksR0FBUSwrQkFBK0IsQ0FBQztRQUM1QyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBUSxPQUFPLENBQUM7UUFDcEIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQW1COUIsQ0FBQztJQUNqQiw2Q0FBUSxHQUFSLGNBQVksQ0FBQztJQUNiLGdEQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBRyxLQUFLLElBQUksT0FBTyxFQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQzthQUFJO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQWpDUTtRQUFSLEtBQUssRUFBRTswREFBc0M7SUFDckM7UUFBUixLQUFLLEVBQUU7NERBQTZDO0lBQzVDO1FBQVIsS0FBSyxFQUFFO2dFQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs0REFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7cUVBQXlCO0lBQ3ZCO1FBQVQsTUFBTSxFQUFFO21FQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTtzRUFBcUM7SUFSbkMsMEJBQTBCO1FBcEd0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSxteUJBZVQ7cUJBQ1EsNnNFQWdGUjtTQUNGLENBQUM7T0FDVywwQkFBMEIsQ0FvQ3RDO0lBQUQsaUNBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQXBDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NtbC1yYWRpby1jaGVjay1ib3gtbGlzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8Zm9ybSBjbGFzcz1cImZvcm1SYWRpb0NoZWNrXCI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwidHlwZSA9PSAnY2hlY2tib3gnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEdyb3VwUmFkaW9DaGVja1wiICpuZ0Zvcj1cImxldCBjaGsgb2YganNvbkRhdGE7bGV0IGk9aW5kZXg7XCI+XHJcbiAgICAgICAgPGlucHV0IGlkPVwie3tpZH19LXt7aX19XCIgbmFtZT1cInt7aWR9fS17e2l9fVwiIFt2YWx1ZV09XCJjaGsuaXNDaGVja2VkXCIgWyhuZ01vZGVsKV09XCJjaGsuaXNDaGVja2VkXCIgKGNoYW5nZSk9XCJjaGFuZ2VFdmVudCgnY2hlY2tib3gnKVwiIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInt7aWR9fS17e2l9fVwiPnt7Y2hrLm5hbWV9fTwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwidHlwZSA9PSAncmFkaW8nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEdyb3VwUmFkaW9DaGVja1wiICpuZ0Zvcj1cImxldCByYWQgb2YganNvbkRhdGE7bGV0IGk9aW5kZXg7XCI+XHJcbiAgICAgICAgPGlucHV0IGlkPVwie3tpZH19LXt7aX19XCIgbmFtZT1cInt7bmFtZX19XCIgW3ZhbHVlXT1cInJhZC52YWx1ZVwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZVwiIChjaGFuZ2UpPVwiY2hhbmdlRXZlbnQoJ3JhZGlvJylcIiB0eXBlPVwicmFkaW9cIiAvPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ7e2lkfX0te3tpfX1cIj57e3JhZC5uYW1lfX08L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAuaW5wdXRHcm91cFJhZGlvQ2hlY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5pbnB1dEdyb3VwUmFkaW9DaGVjayAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5pbnB1dEdyb3VwUmFkaW9DaGVjayAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmlucHV0R3JvdXBSYWRpb0NoZWNrICBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRFMEM3O1xyXG4gICAgICBib3JkZXItY29sb3I6ICM1NEUwQzc7XHJcbiAgfVxyXG4gIC5pbnB1dEdyb3VwUmFkaW9DaGVjayAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogMzJweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBvcmRlcjogMTtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMzBweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5pbnB1dEdyb3VwUmFkaW9DaGVjayBsYWJlbCB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMzBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogIzNDNDU0QztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5pbnB1dEdyb3VwUmFkaW9DaGVjayBsYWJlbDpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2MmViO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuaW5wdXRHcm91cFJhZGlvQ2hlY2sgbGFiZWw6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMzJweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI0QxRDdEQztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMzInIGhlaWdodD0nMzInIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTUuNDE0IDExTDQgMTIuNDE0bDUuNDE0IDUuNDE0TDIwLjgyOCA2LjQxNCAxOS40MTQgNWwtMTAgMTB6JyBmaWxsPSclMjNmZmYnIGZpbGwtcnVsZT0nbm9uemVybycvJTNFJTNDL3N2ZyUzRSBcIik7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDJweCAzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMzBweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICB9XHJcbiAgLmZvcm1SYWRpb0NoZWNrIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH0gIFxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0NoZWNrQm94TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGlkOiBhbnkgPSAnc21sLXJhZGlvLWNoZWNrLWJveC1saXN0JztcclxuICBASW5wdXQoKSBuYW1lOiBhbnkgPSAnc21sLXJhZGlvLWNoZWNrLWJveC1saXN0LW5hbWUnO1xyXG4gIEBJbnB1dCgpIGpzb25EYXRhOiBhbnkgPSBbXTtcclxuICBASW5wdXQoKSB0eXBlOiBhbnkgPSAncmFkaW8nO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IGFueSA9ICcnO1xyXG4gIEBPdXRwdXQoKSByYWRpb0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hlY2tib3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gIyMjU2FtbHBsZSBEYXRhIyMjXHJcbiAgICAvLyB0aGlzLmpzb25EYXRhID0gW1xyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgbmFtZTonT3B0aW9uIDEnLFxyXG4gICAgLy8gICAgIHZhbHVlOicxJyxcclxuICAgIC8vICAgICBpc0NoZWNrZWQ6ZmFsc2VcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIG5hbWU6J09wdGlvbiAyJyxcclxuICAgIC8vICAgICB2YWx1ZTonMicsXHJcbiAgICAvLyAgICAgaXNDaGVja2VkOnRydWVcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIG5hbWU6J09wdGlvbiAzJyxcclxuICAgIC8vICAgICB2YWx1ZTonMycsXHJcbiAgICAvLyAgICAgaXNDaGVja2VkOmZhbHNlXHJcbiAgICAvLyAgIH1cclxuICAvLyBdXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBuZ09uSW5pdCgpIHt9XHJcbiAgY2hhbmdlRXZlbnQoZXZlbnQpe1xyXG4gICAgaWYoZXZlbnQgPT0gJ3JhZGlvJyl7XHJcbiAgICAgIHRoaXMucmFkaW9DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDaGFuZ2UuZW1pdCh0aGlzLmpzb25EYXRhKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19