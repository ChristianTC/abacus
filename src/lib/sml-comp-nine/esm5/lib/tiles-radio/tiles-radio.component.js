import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var TilesRadioComponent = /** @class */ (function () {
    function TilesRadioComponent() {
        this.id = 'sml-tiles-radio';
        this.name = 'sml-tiles-radio-name';
        this.jsonData = [];
        this.width = "24%";
        this.img_height = "100px";
        this.background = "#00171F";
        this.selectedValue = '2';
        this.radioChange = new EventEmitter();
        // ###Samlple Data###
        // this.jsonData = [
        //   {
        //     name: 'Option 1',
        //     value: '1',
        //     url: 'http://mobilfy.aaadev.info/media/Mobilfy/00011179/82f14d2e-32fd-43f2-a874-d2ce331eadd1.jpg'
        //   },
        //   {
        //     name: 'Option 2',
        //     value: '2',
        //     url: 'http://mobilfy.aaadev.info/media/Mobilfy/00011179/50ae6359-874c-4359-be4b-9c7a0ce81c01.jpg'
        //   },
        //   {
        //     name: 'Option 3',
        //     value: '3',
        //     url: 'http://mobilfy.aaadev.info/media/Mobilfy/00011179/558e2960-53d5-425a-bc9c-1cefb2d9d93b.jpg'
        //   },
        //   {
        //     name: 'Option 4',
        //     value: '4',
        //     url: 'http://mobilfy.aaadev.info/media/Mobilfy/00011179/04e05de2-a5c1-43f3-9666-94c430beb425.jpg'
        //   },
        // ]
    }
    TilesRadioComponent.prototype.ngOnInit = function () { };
    TilesRadioComponent.prototype.changeEvent = function () {
        this.radioChange.emit(this.selectedValue);
    };
    __decorate([
        Input()
    ], TilesRadioComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], TilesRadioComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], TilesRadioComponent.prototype, "jsonData", void 0);
    __decorate([
        Input()
    ], TilesRadioComponent.prototype, "width", void 0);
    __decorate([
        Input()
    ], TilesRadioComponent.prototype, "img_height", void 0);
    __decorate([
        Input()
    ], TilesRadioComponent.prototype, "background", void 0);
    __decorate([
        Input()
    ], TilesRadioComponent.prototype, "selectedValue", void 0);
    __decorate([
        Output()
    ], TilesRadioComponent.prototype, "radioChange", void 0);
    TilesRadioComponent = __decorate([
        Component({
            selector: 'sml-tiles-radio',
            template: "\n  <div class=\"form\" *ngIf=\"jsonData.length > 0\" [style.background-color]=\"background\">\n  <p class=\"form__answer\" [style.width]=\"width\" *ngFor=\"let rad of jsonData;let i=index;\">\n    <input type=\"radio\" id=\"{{id}}-{{i}}\" name=\"{{name}}\" [value]=\"rad.value\" [(ngModel)]=\"selectedValue\" (change)=\"changeEvent()\">\n    <label for=\"{{id}}-{{i}}\">\n      <img [src]=\"rad.url\" style=\"width:100%\" [style.height]=\"img_height\" id=\"img-{{id}}-{{i}}\" name=\"img-{{name}}\" /> {{rad.name}}\n    </label>\n  </p>\n  </div>",
            styles: ["\n  .form {width: 100%;margin: auto;background: #00171F;padding: 5px 0px 0px 5px;color: #FAFAFA;}\n  .form__answer {display: inline-block;box-sizing: border-box;width: 24%;margin: 0px 1% 1% 0px;height: auto;vertical-align: top;font-size: 22px;text-align: center;}\n  label {border: 1px solid rgba(250, 250, 250, 0.15);box-sizing: border-box;display: block;height: 100%;width: 100%;padding: 10px 10px 30px 10px;cursor: pointer;opacity: .5;transition: all .5s ease-in-out;margin-bottom: 0px;}\n  label:hover, label:focus, label:active {border: 1px solid rgba(250, 250, 250, 0.5);}\n  input[type=\"radio\"] {opacity: 0;width: 0;height: 0;position: absolute;}\n  input[type=\"radio\"]:active ~ label {opacity: 1;}\n  input[type=\"radio\"]:checked ~ label {opacity: 1;border: 1px solid #FAFAFA;}\n  "]
        })
    ], TilesRadioComponent);
    return TilesRadioComponent;
}());
export { TilesRadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi90aWxlcy1yYWRpby90aWxlcy1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUF1Qi9FO0lBV0U7UUFUUyxPQUFFLEdBQVEsaUJBQWlCLENBQUM7UUFDNUIsU0FBSSxHQUFRLHNCQUFzQixDQUFDO1FBQ25DLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFRLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQVEsT0FBTyxDQUFDO1FBQzFCLGVBQVUsR0FBUSxTQUFTLENBQUM7UUFDNUIsa0JBQWEsR0FBUSxHQUFHLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3pDLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsTUFBTTtRQUNOLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsd0dBQXdHO1FBQ3hHLE9BQU87UUFDUCxNQUFNO1FBQ04sd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQix3R0FBd0c7UUFDeEcsT0FBTztRQUNQLE1BQU07UUFDTix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLHdHQUF3RztRQUN4RyxPQUFPO1FBQ1AsTUFBTTtRQUNOLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsd0dBQXdHO1FBQ3hHLE9BQU87UUFDUCxJQUFJO0lBQ04sQ0FBQztJQUNELHNDQUFRLEdBQVIsY0FBYSxDQUFDO0lBQ2QseUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBckNRO1FBQVIsS0FBSyxFQUFFO21EQUE2QjtJQUM1QjtRQUFSLEtBQUssRUFBRTtxREFBb0M7SUFDbkM7UUFBUixLQUFLLEVBQUU7eURBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3NEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTsyREFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7MkRBQTZCO0lBQzVCO1FBQVIsS0FBSyxFQUFFOzhEQUEwQjtJQUN4QjtRQUFULE1BQU0sRUFBRTs0REFBa0M7SUFUaEMsbUJBQW1CO1FBckIvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxvaUJBUUg7cUJBQ0UsNHhCQVFSO1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQXdDL0I7SUFBRCwwQkFBQztDQUFBLEFBeENELElBd0NDO1NBeENZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLXRpbGVzLXJhZGlvJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJmb3JtXCIgKm5nSWY9XCJqc29uRGF0YS5sZW5ndGggPiAwXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZFwiPlxyXG4gIDxwIGNsYXNzPVwiZm9ybV9fYW5zd2VyXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgKm5nRm9yPVwibGV0IHJhZCBvZiBqc29uRGF0YTtsZXQgaT1pbmRleDtcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInt7aWR9fS17e2l9fVwiIG5hbWU9XCJ7e25hbWV9fVwiIFt2YWx1ZV09XCJyYWQudmFsdWVcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIiAoY2hhbmdlKT1cImNoYW5nZUV2ZW50KClcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ7e2lkfX0te3tpfX1cIj5cclxuICAgICAgPGltZyBbc3JjXT1cInJhZC51cmxcIiBzdHlsZT1cIndpZHRoOjEwMCVcIiBbc3R5bGUuaGVpZ2h0XT1cImltZ19oZWlnaHRcIiBpZD1cImltZy17e2lkfX0te3tpfX1cIiBuYW1lPVwiaW1nLXt7bmFtZX19XCIgLz4ge3tyYWQubmFtZX19XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvcD5cclxuICA8L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BcclxuICAuZm9ybSB7d2lkdGg6IDEwMCU7bWFyZ2luOiBhdXRvO2JhY2tncm91bmQ6ICMwMDE3MUY7cGFkZGluZzogNXB4IDBweCAwcHggNXB4O2NvbG9yOiAjRkFGQUZBO31cclxuICAuZm9ybV9fYW5zd2VyIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym94LXNpemluZzogYm9yZGVyLWJveDt3aWR0aDogMjQlO21hcmdpbjogMHB4IDElIDElIDBweDtoZWlnaHQ6IGF1dG87dmVydGljYWwtYWxpZ246IHRvcDtmb250LXNpemU6IDIycHg7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICBsYWJlbCB7Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjE1KTtib3gtc2l6aW5nOiBib3JkZXItYm94O2Rpc3BsYXk6IGJsb2NrO2hlaWdodDogMTAwJTt3aWR0aDogMTAwJTtwYWRkaW5nOiAxMHB4IDEwcHggMzBweCAxMHB4O2N1cnNvcjogcG9pbnRlcjtvcGFjaXR5OiAuNTt0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O21hcmdpbi1ib3R0b206IDBweDt9XHJcbiAgbGFiZWw6aG92ZXIsIGxhYmVsOmZvY3VzLCBsYWJlbDphY3RpdmUge2JvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41KTt9XHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtvcGFjaXR5OiAwO3dpZHRoOiAwO2hlaWdodDogMDtwb3NpdGlvbjogYWJzb2x1dGU7fVxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXTphY3RpdmUgfiBsYWJlbCB7b3BhY2l0eTogMTt9XHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiBsYWJlbCB7b3BhY2l0eTogMTtib3JkZXI6IDFweCBzb2xpZCAjRkFGQUZBO31cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGlsZXNSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGlkOiBhbnkgPSAnc21sLXRpbGVzLXJhZGlvJztcclxuICBASW5wdXQoKSBuYW1lOiBhbnkgPSAnc21sLXRpbGVzLXJhZGlvLW5hbWUnO1xyXG4gIEBJbnB1dCgpIGpzb25EYXRhOiBhbnkgPSBbXTtcclxuICBASW5wdXQoKSB3aWR0aDogYW55ID0gXCIyNCVcIjtcclxuICBASW5wdXQoKSBpbWdfaGVpZ2h0OiBhbnkgPSBcIjEwMHB4XCI7XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZDogYW55ID0gXCIjMDAxNzFGXCI7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogYW55ID0gJzInO1xyXG4gIEBPdXRwdXQoKSByYWRpb0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyAjIyNTYW1scGxlIERhdGEjIyNcclxuICAgIC8vIHRoaXMuanNvbkRhdGEgPSBbXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBuYW1lOiAnT3B0aW9uIDEnLFxyXG4gICAgLy8gICAgIHZhbHVlOiAnMScsXHJcbiAgICAvLyAgICAgdXJsOiAnaHR0cDovL21vYmlsZnkuYWFhZGV2LmluZm8vbWVkaWEvTW9iaWxmeS8wMDAxMTE3OS84MmYxNGQyZS0zMmZkLTQzZjItYTg3NC1kMmNlMzMxZWFkZDEuanBnJ1xyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgbmFtZTogJ09wdGlvbiAyJyxcclxuICAgIC8vICAgICB2YWx1ZTogJzInLFxyXG4gICAgLy8gICAgIHVybDogJ2h0dHA6Ly9tb2JpbGZ5LmFhYWRldi5pbmZvL21lZGlhL01vYmlsZnkvMDAwMTExNzkvNTBhZTYzNTktODc0Yy00MzU5LWJlNGItOWM3YTBjZTgxYzAxLmpwZydcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIG5hbWU6ICdPcHRpb24gMycsXHJcbiAgICAvLyAgICAgdmFsdWU6ICczJyxcclxuICAgIC8vICAgICB1cmw6ICdodHRwOi8vbW9iaWxmeS5hYWFkZXYuaW5mby9tZWRpYS9Nb2JpbGZ5LzAwMDExMTc5LzU1OGUyOTYwLTUzZDUtNDI1YS1iYzljLTFjZWZiMmQ5ZDkzYi5qcGcnXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBuYW1lOiAnT3B0aW9uIDQnLFxyXG4gICAgLy8gICAgIHZhbHVlOiAnNCcsXHJcbiAgICAvLyAgICAgdXJsOiAnaHR0cDovL21vYmlsZnkuYWFhZGV2LmluZm8vbWVkaWEvTW9iaWxmeS8wMDAxMTE3OS8wNGUwNWRlMi1hNWMxLTQzZjMtOTY2Ni05NGM0MzBiZWI0MjUuanBnJ1xyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gXVxyXG4gIH1cclxuICBuZ09uSW5pdCgpIHsgfVxyXG4gIGNoYW5nZUV2ZW50KCkge1xyXG4gICAgdGhpcy5yYWRpb0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==