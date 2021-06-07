import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let TilesRadioComponent = class TilesRadioComponent {
    constructor() {
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
    ngOnInit() { }
    changeEvent() {
        this.radioChange.emit(this.selectedValue);
    }
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
        template: `
  <div class="form" *ngIf="jsonData.length > 0" [style.background-color]="background">
  <p class="form__answer" [style.width]="width" *ngFor="let rad of jsonData;let i=index;">
    <input type="radio" id="{{id}}-{{i}}" name="{{name}}" [value]="rad.value" [(ngModel)]="selectedValue" (change)="changeEvent()">
    <label for="{{id}}-{{i}}">
      <img [src]="rad.url" style="width:100%" [style.height]="img_height" id="img-{{id}}-{{i}}" name="img-{{name}}" /> {{rad.name}}
    </label>
  </p>
  </div>`,
        styles: [`
  .form {width: 100%;margin: auto;background: #00171F;padding: 5px 0px 0px 5px;color: #FAFAFA;}
  .form__answer {display: inline-block;box-sizing: border-box;width: 24%;margin: 0px 1% 1% 0px;height: auto;vertical-align: top;font-size: 22px;text-align: center;}
  label {border: 1px solid rgba(250, 250, 250, 0.15);box-sizing: border-box;display: block;height: 100%;width: 100%;padding: 10px 10px 30px 10px;cursor: pointer;opacity: .5;transition: all .5s ease-in-out;margin-bottom: 0px;}
  label:hover, label:focus, label:active {border: 1px solid rgba(250, 250, 250, 0.5);}
  input[type="radio"] {opacity: 0;width: 0;height: 0;position: absolute;}
  input[type="radio"]:active ~ label {opacity: 1;}
  input[type="radio"]:checked ~ label {opacity: 1;border: 1px solid #FAFAFA;}
  `]
    })
], TilesRadioComponent);
export { TilesRadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi90aWxlcy1yYWRpby90aWxlcy1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUF1Qi9FLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBVzlCO1FBVFMsT0FBRSxHQUFRLGlCQUFpQixDQUFDO1FBQzVCLFNBQUksR0FBUSxzQkFBc0IsQ0FBQztRQUNuQyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBUSxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFRLE9BQU8sQ0FBQztRQUMxQixlQUFVLEdBQVEsU0FBUyxDQUFDO1FBQzVCLGtCQUFhLEdBQVEsR0FBRyxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6QyxxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLE1BQU07UUFDTix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLHdHQUF3RztRQUN4RyxPQUFPO1FBQ1AsTUFBTTtRQUNOLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsd0dBQXdHO1FBQ3hHLE9BQU87UUFDUCxNQUFNO1FBQ04sd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQix3R0FBd0c7UUFDeEcsT0FBTztRQUNQLE1BQU07UUFDTix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLHdHQUF3RztRQUN4RyxPQUFPO1FBQ1AsSUFBSTtJQUNOLENBQUM7SUFDRCxRQUFRLEtBQUssQ0FBQztJQUNkLFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGLENBQUE7QUF0Q1U7SUFBUixLQUFLLEVBQUU7K0NBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO2lEQUFvQztBQUNuQztJQUFSLEtBQUssRUFBRTtxREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7a0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3VEQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTt1REFBNkI7QUFDNUI7SUFBUixLQUFLLEVBQUU7MERBQTBCO0FBQ3hCO0lBQVQsTUFBTSxFQUFFO3dEQUFrQztBQVRoQyxtQkFBbUI7SUFyQi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFOzs7Ozs7OztTQVFIO2lCQUNFOzs7Ozs7OztHQVFSO0tBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQXdDL0I7U0F4Q1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtdGlsZXMtcmFkaW8nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImZvcm1cIiAqbmdJZj1cImpzb25EYXRhLmxlbmd0aCA+IDBcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJiYWNrZ3JvdW5kXCI+XHJcbiAgPHAgY2xhc3M9XCJmb3JtX19hbnN3ZXJcIiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiAqbmdGb3I9XCJsZXQgcmFkIG9mIGpzb25EYXRhO2xldCBpPWluZGV4O1wiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwie3tpZH19LXt7aX19XCIgbmFtZT1cInt7bmFtZX19XCIgW3ZhbHVlXT1cInJhZC52YWx1ZVwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZVwiIChjaGFuZ2UpPVwiY2hhbmdlRXZlbnQoKVwiPlxyXG4gICAgPGxhYmVsIGZvcj1cInt7aWR9fS17e2l9fVwiPlxyXG4gICAgICA8aW1nIFtzcmNdPVwicmFkLnVybFwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIFtzdHlsZS5oZWlnaHRdPVwiaW1nX2hlaWdodFwiIGlkPVwiaW1nLXt7aWR9fS17e2l9fVwiIG5hbWU9XCJpbWcte3tuYW1lfX1cIiAvPiB7e3JhZC5uYW1lfX1cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9wPlxyXG4gIDwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC5mb3JtIHt3aWR0aDogMTAwJTttYXJnaW46IGF1dG87YmFja2dyb3VuZDogIzAwMTcxRjtwYWRkaW5nOiA1cHggMHB4IDBweCA1cHg7Y29sb3I6ICNGQUZBRkE7fVxyXG4gIC5mb3JtX19hbnN3ZXIge2Rpc3BsYXk6IGlubGluZS1ibG9jaztib3gtc2l6aW5nOiBib3JkZXItYm94O3dpZHRoOiAyNCU7bWFyZ2luOiAwcHggMSUgMSUgMHB4O2hlaWdodDogYXV0bzt2ZXJ0aWNhbC1hbGlnbjogdG9wO2ZvbnQtc2l6ZTogMjJweDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gIGxhYmVsIHtib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMTUpO2JveC1zaXppbmc6IGJvcmRlci1ib3g7ZGlzcGxheTogYmxvY2s7aGVpZ2h0OiAxMDAlO3dpZHRoOiAxMDAlO3BhZGRpbmc6IDEwcHggMTBweCAzMHB4IDEwcHg7Y3Vyc29yOiBwb2ludGVyO29wYWNpdHk6IC41O3RyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7bWFyZ2luLWJvdHRvbTogMHB4O31cclxuICBsYWJlbDpob3ZlciwgbGFiZWw6Zm9jdXMsIGxhYmVsOmFjdGl2ZSB7Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpO31cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge29wYWNpdHk6IDA7d2lkdGg6IDA7aGVpZ2h0OiAwO3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmFjdGl2ZSB+IGxhYmVsIHtvcGFjaXR5OiAxO31cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IGxhYmVsIHtvcGFjaXR5OiAxO2JvcmRlcjogMXB4IHNvbGlkICNGQUZBRkE7fVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaWxlc1JhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgaWQ6IGFueSA9ICdzbWwtdGlsZXMtcmFkaW8nO1xyXG4gIEBJbnB1dCgpIG5hbWU6IGFueSA9ICdzbWwtdGlsZXMtcmFkaW8tbmFtZSc7XHJcbiAgQElucHV0KCkganNvbkRhdGE6IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBhbnkgPSBcIjI0JVwiO1xyXG4gIEBJbnB1dCgpIGltZ19oZWlnaHQ6IGFueSA9IFwiMTAwcHhcIjtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kOiBhbnkgPSBcIiMwMDE3MUZcIjtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBhbnkgPSAnMic7XHJcbiAgQE91dHB1dCgpIHJhZGlvQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vICMjI1NhbWxwbGUgRGF0YSMjI1xyXG4gICAgLy8gdGhpcy5qc29uRGF0YSA9IFtcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIG5hbWU6ICdPcHRpb24gMScsXHJcbiAgICAvLyAgICAgdmFsdWU6ICcxJyxcclxuICAgIC8vICAgICB1cmw6ICdodHRwOi8vbW9iaWxmeS5hYWFkZXYuaW5mby9tZWRpYS9Nb2JpbGZ5LzAwMDExMTc5LzgyZjE0ZDJlLTMyZmQtNDNmMi1hODc0LWQyY2UzMzFlYWRkMS5qcGcnXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBuYW1lOiAnT3B0aW9uIDInLFxyXG4gICAgLy8gICAgIHZhbHVlOiAnMicsXHJcbiAgICAvLyAgICAgdXJsOiAnaHR0cDovL21vYmlsZnkuYWFhZGV2LmluZm8vbWVkaWEvTW9iaWxmeS8wMDAxMTE3OS81MGFlNjM1OS04NzRjLTQzNTktYmU0Yi05YzdhMGNlODFjMDEuanBnJ1xyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgbmFtZTogJ09wdGlvbiAzJyxcclxuICAgIC8vICAgICB2YWx1ZTogJzMnLFxyXG4gICAgLy8gICAgIHVybDogJ2h0dHA6Ly9tb2JpbGZ5LmFhYWRldi5pbmZvL21lZGlhL01vYmlsZnkvMDAwMTExNzkvNTU4ZTI5NjAtNTNkNS00MjVhLWJjOWMtMWNlZmIyZDlkOTNiLmpwZydcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIG5hbWU6ICdPcHRpb24gNCcsXHJcbiAgICAvLyAgICAgdmFsdWU6ICc0JyxcclxuICAgIC8vICAgICB1cmw6ICdodHRwOi8vbW9iaWxmeS5hYWFkZXYuaW5mby9tZWRpYS9Nb2JpbGZ5LzAwMDExMTc5LzA0ZTA1ZGUyLWE1YzEtNDNmMy05NjY2LTk0YzQzMGJlYjQyNS5qcGcnXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyBdXHJcbiAgfVxyXG4gIG5nT25Jbml0KCkgeyB9XHJcbiAgY2hhbmdlRXZlbnQoKSB7XHJcbiAgICB0aGlzLnJhZGlvQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19