import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
let TextareaComponent = class TextareaComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.staticStyle = false;
        this.readOnly = false;
        this.getvalue = new EventEmitter;
        this.onblur = new EventEmitter;
    }
    ngOnInit() { }
    ngOnChanges(event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            let css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            let css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
        }
    }
    getValue(event) {
        this.getvalue.emit(event.target.value);
    }
    onBlur(event) {
        this.onblur.emit(event.target.value);
    }
};
TextareaComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TextareaComponent.prototype, "value", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "name", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "row", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "column", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "label", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "maxLenght", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "style", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "inputStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "readOnly", void 0);
__decorate([
    Output()
], TextareaComponent.prototype, "getvalue", void 0);
__decorate([
    Output()
], TextareaComponent.prototype, "onblur", void 0);
TextareaComponent = __decorate([
    Component({
        selector: 'sml-input-textarea',
        template: `
  <div class="position-relative">
  <div class="input-field" 
      [ngStyle]="borderStyle" 
      [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}">
      <textarea *ngIf="!readOnly"
      type="text" 
      class="form-control" 
      [value]="value"  
      [rows]="row" 
      [cols]="column"
      (keyup)="getValue($event)" 
      (blur)="onBlur($event)"
      [ngStyle]="valueStyle"
      required></textarea>
      <textarea *ngIf="readOnly"
      type="text" 
      class="form-control" 
      [value]="value"  
      [rows]="row" 
      [cols]="column"
      (keyup)="getValue($event)" 
      (blur)="onBlur($event)"
      [ngStyle]="valueStyle"
      required readOnly></textarea>
    <label class="label" 
          [ngStyle]="style">
          {{ label }} <span *ngIf="maxLenght">: {{ maxLenght }}</span>
    </label>
  </div>
</div>
  `,
        styles: [`
  /* css variable */
  :host {
      --c-width: 645px;
      --label-left: 10px;
      --label-top: 0px;
      --value-left: 10px;
      --value-top: 0px;
  }
  /* box css */
  .position-relative {
      position: relative;
  }
  .input-field {
      border: 1px solid rgb(222, 226, 230);
      border-radius: 2px;
      width: var(--c-width) !important;
  }
  /* control css */
  .form-control {
      display: block;
      padding-top: 0.375rem;
      padding-right: 0.75rem;
      padding-bottom: 0.375rem;
      padding-left: var(--value-left);
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: none;
      resize: none;
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }
  .form-control {
      background-color: inherit;
      box-shadow: none !important;
  }
  .signal-line{
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      border-radius: 0px !important;
  }
  /* labelcss */
  .label {
      position: absolute;
      top: -24px;
      left: 0px; 
      font-size: 12px;
      padding: 0px !important;
        text-align: left;
  }
  .float-group {
      position: relative;
      padding: 14px 24px 2px 0px;
  }
  .float-group .form-control {
      padding-top: var(--value-top);
      padding-right: 0px;
      padding-bottom: 0px;
      padding-left: var(--value-left);
  }
  .float-group .label {
    font-size: 12px;
    font-weight: normal;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: var(--label-left);
    transition: all 200ms;
    opacity: 1;
    margin: 0;
    width: 87%;
    height: auto;
  }

  @media all and (-ms-high-contrast:none) {
      *::-ms-backdrop, .float-group .label {
          top: 0%!important;
          transform: translateY(50%);
      }
  }
  
  .float-group .form-control:focus {
      box-shadow: none;
      border: none
  }
  .float-group-static .label {
      font-size: 9px;
      font-weight: bold !important;  /* floating lable always bold */
      position: absolute;
      top: var(--label-top);
      left: var(--label-left);
      transform: translateY(0px);
      transition: all 200ms;
      opacity: 1;
      margin: 0;
      width: 87%;
      height: auto;
   }
  .float-group .form-control:focus-within ~ .label,
  .float-group .form-control:valid ~ .label {
      font-size: 9px;
      font-weight: bold !important;  /* floating lable always bold */
      position: absolute;
      top: var(--label-top);
      left: var(--label-left);
      transform: translateY(0px);
      transition: all 200ms;
      opacity: 1;
      margin: 0;
      width: 87%;
      height: auto;
  }  
  `]
    })
], TextareaComponent);
export { TextareaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWlucHV0cy1uaW5lLyIsInNvdXJjZXMiOlsibGliL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBeUozRixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWtCMUIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVBqQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLENBQUM7SUFFYSxDQUFDO0lBQy9DLFFBQVEsS0FBSyxDQUFDO0lBQ2QsV0FBVyxDQUFDLEtBQUs7UUFDYixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtZQUNuRSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNwRjtRQUNELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQzdFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0wsQ0FBQztJQUNELFFBQVEsQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0osTUFBTSxDQUFDLEtBQUs7UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRCxDQUFBOztZQXRCbUMsVUFBVTs7QUFqQmpDO0lBQVIsS0FBSyxFQUFFO2dEQUFPO0FBQ047SUFBUixLQUFLLEVBQUU7K0NBQU07QUFDTDtJQUFSLEtBQUssRUFBRTs4Q0FBSztBQUNKO0lBQVIsS0FBSyxFQUFFO2lEQUFRO0FBQ1A7SUFBUixLQUFLLEVBQUU7Z0RBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTtvREFBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTtzREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7Z0RBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTtzREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7c0RBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO3NEQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTtxREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7cURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO21EQUEyQjtBQUN6QjtJQUFULE1BQU0sRUFBRTttREFBNkI7QUFDL0I7SUFBVCxNQUFNLEVBQUU7aURBQTJCO0FBaEJ4QixpQkFBaUI7SUF2SjdCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JYO2lCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUhWO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQXdDN0I7U0F4Q1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NtbC1pbnB1dC10ZXh0YXJlYScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiIFxyXG4gICAgICBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiIFxyXG4gICAgICBbbmdDbGFzc109XCJ7J2Zsb2F0LWdyb3VwJzpzd2l0Y2hTdHlsZSwnZmxvYXQtZ3JvdXBkZCc6ICFzd2l0Y2hTdHlsZSwnc2lnbmFsLWxpbmUnOiBzaWduYWxTdHlsZSwnZmxvYXQtZ3JvdXAtc3RhdGljJzogc3RhdGljU3R5bGV9XCI+XHJcbiAgICAgIDx0ZXh0YXJlYSAqbmdJZj1cIiFyZWFkT25seVwiXHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiICBcclxuICAgICAgW3Jvd3NdPVwicm93XCIgXHJcbiAgICAgIFtjb2xzXT1cImNvbHVtblwiXHJcbiAgICAgIChrZXl1cCk9XCJnZXRWYWx1ZSgkZXZlbnQpXCIgXHJcbiAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiXHJcbiAgICAgIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgIDx0ZXh0YXJlYSAqbmdJZj1cInJlYWRPbmx5XCJcclxuICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCIgIFxyXG4gICAgICBbcm93c109XCJyb3dcIiBcclxuICAgICAgW2NvbHNdPVwiY29sdW1uXCJcclxuICAgICAgKGtleXVwKT1cImdldFZhbHVlKCRldmVudClcIiBcclxuICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxyXG4gICAgICBbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCJcclxuICAgICAgcmVxdWlyZWQgcmVhZE9ubHk+PC90ZXh0YXJlYT5cclxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiPlxyXG4gICAgICAgICAge3sgbGFiZWwgfX0gPHNwYW4gKm5nSWY9XCJtYXhMZW5naHRcIj46IHt7IG1heExlbmdodCB9fTwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgLyogY3NzIHZhcmlhYmxlICovXHJcbiAgOmhvc3Qge1xyXG4gICAgICAtLWMtd2lkdGg6IDY0NXB4O1xyXG4gICAgICAtLWxhYmVsLWxlZnQ6IDEwcHg7XHJcbiAgICAgIC0tbGFiZWwtdG9wOiAwcHg7XHJcbiAgICAgIC0tdmFsdWUtbGVmdDogMTBweDtcclxuICAgICAgLS12YWx1ZS10b3A6IDBweDtcclxuICB9XHJcbiAgLyogYm94IGNzcyAqL1xyXG4gIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMiwgMjI2LCAyMzApO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1jLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBjb250cm9sIGNzcyAqL1xyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZy10b3A6IDAuMzc1cmVtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4zNzVyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2lnbmFsLWxpbmV7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBsYWJlbGNzcyAqL1xyXG4gIC5sYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtMjRweDtcclxuICAgICAgbGVmdDogMHB4OyBcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuZmxvYXQtZ3JvdXAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHggMjRweCAycHggMHB4O1xyXG4gIH1cclxuICAuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS12YWx1ZS10b3ApO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCAubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKSB7XHJcbiAgICAgICo6Oi1tcy1iYWNrZHJvcCwgLmZsb2F0LWdyb3VwIC5sYWJlbCB7XHJcbiAgICAgICAgICB0b3A6IDAlIWltcG9ydGFudDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lXHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cC1zdGF0aWMgLmxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAvKiBmbG9hdGluZyBsYWJsZSBhbHdheXMgYm9sZCAqL1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogdmFyKC0tbGFiZWwtdG9wKTtcclxuICAgICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgd2lkdGg6IDg3JTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMtd2l0aGluIH4gLmxhYmVsLFxyXG4gIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOnZhbGlkIH4gLmxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAvKiBmbG9hdGluZyBsYWJsZSBhbHdheXMgYm9sZCAqL1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogdmFyKC0tbGFiZWwtdG9wKTtcclxuICAgICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgd2lkdGg6IDg3JTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH0gIFxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSB2YWx1ZTtcclxuICAgIEBJbnB1dCgpIG5hbWU7XHJcbiAgICBASW5wdXQoKSByb3c7XHJcbiAgICBASW5wdXQoKSBjb2x1bW47XHJcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbWF4TGVuZ2h0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBzd2l0Y2hTdHlsZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgc2lnbmFsU3R5bGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBzdGF0aWNTdHlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgaW5wdXRTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgcmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSBnZXR2YWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblx0QE91dHB1dCgpIG9uYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcbiAgICBuZ09uQ2hhbmdlcyhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5zdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXdpZHRoJywgY3NzWydjLXdpZHRoJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLWhlaWdodCcsIGNzc1snYy1oZWlnaHQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWxlZnQnLCBjc3NbJ2xhYmVsLWxlZnQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLXRvcCcsIGNzc1snbGFiZWwtdG9wJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQudmFsdWVTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtbGVmdCcsIGNzc1sndmFsdWUtbGVmdCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtdG9wJywgY3NzWyd2YWx1ZS10b3AnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VmFsdWUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmdldHZhbHVlLmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHRvbkJsdXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm9uYmx1ci5lbWl0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==