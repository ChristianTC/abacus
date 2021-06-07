import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let CreditCardNewComponent = class CreditCardNewComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.cardObject = { cardNumber: "", cardHolder: "", expiryDate: "", cvc: "" };
        this.submitValue = new EventEmitter;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('#newcreditcard')['card']({
            container: '.card-wrapper',
            formSelectors: {
                numberInput: 'input#number',
                expiryInput: 'input#expiry',
                cvcInput: 'input#cvc',
                nameInput: 'input#name' // optional - defaults input[name="name"]
            },
            width: 240,
            formatting: true,
            debug: true
        });
    }
    ngOnChanges(event) {
        if (event.labelStyle != undefined && event.labelStyle.currentValue != undefined) {
            let css = event.labelStyle.currentValue;
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
        if (event.buttonStyle != undefined && event.buttonStyle.currentValue != undefined) {
            let css = event.buttonStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--focus-color', css['focus-color']);
            this.elementRef.nativeElement.style.setProperty('--focus-spread', css['focus-spread']);
            this.elementRef.nativeElement.style.setProperty('--focus-blur', css['focus-blur']);
            this.elementRef.nativeElement.style.setProperty('--focus-x', css['focus-x']);
            this.elementRef.nativeElement.style.setProperty('--focus-y', css['focus-y']);
        }
    }
    submitClick() {
        this.submitValue.emit(this.cardObject);
    }
};
CreditCardNewComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], CreditCardNewComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], CreditCardNewComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], CreditCardNewComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], CreditCardNewComponent.prototype, "buttonStyle", void 0);
__decorate([
    Input()
], CreditCardNewComponent.prototype, "cardObject", void 0);
__decorate([
    Output()
], CreditCardNewComponent.prototype, "submitValue", void 0);
CreditCardNewComponent = __decorate([
    Component({
        selector: 'sml-credit-card-new',
        template: `
  <div class="mainCardBack">
  <div  class="card-wrapper"></div>
  <div class="formCardMain">
    <form id="newcreditcard">
      <div class="main-row">
        <div class="w-50s">
          <div class="position-relative">
            <div class="input-field float-group float-group-static" [ngStyle]="borderStyle">
              <input type="text" class="form-control" [(ngModel)]="cardObject.cardNumber" id="number"  name="number" [ngStyle]="valueStyle"
                required>
              <label for="number" class="label" [ngStyle]="labelStyle">
                Card Number
              </label>
            </div>
          </div>
        </div>
        </div>
        <div class="main-row mt-1">
        <div class="w-50s">
          <div class="position-relative">
            <div class="input-field float-group float-group-static" [ngStyle]="borderStyle">
              <input type="text" class="form-control" [(ngModel)]="cardObject.cardHolder" id="name"  name="name" [ngStyle]="valueStyle"
                required>
              <label for="first-name" class="label" [ngStyle]="labelStyle">
                Card Holder
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="main-row mt-1">
        <div class="w-25s">
          <div class="position-relative">
            <div class="input-field float-group float-group-static" [ngStyle]="borderStyle">
              <input type="text" class="form-control" [(ngModel)]="cardObject.expiryDate" id="expiry"  name="expiry" [ngStyle]="valueStyle" required>
              <label for="expiry" class="label" [ngStyle]="labelStyle">
                Expiry Date
              </label>
            </div>
          </div>
        </div>
        <div class="w-25s">
          <div class="position-relative">
            <div class="input-field float-group float-group-static" [ngStyle]="borderStyle">
              <input type="text" class="form-control" [(ngModel)]="cardObject.cvc" id="cvc"  name="cvc" [ngStyle]="valueStyle" required>
              <label for="cvc" class="label" [ngStyle]="labelStyle">
                CVC
              </label>
            </div>
          </div>
        </div>
        <div class="w-50sb">
          <button class="btn btn-primary" [ngStyle]="buttonStyle" (click)="submitClick()" name="cardsubmit">Submit</button>
        </div>
      </div>
    </form>
  </div>
  </div>
  `,
        styles: [`
  :host{--c-width:100%;--c-height:25px;--label-left:7px;--label-top:2px;--value-left:8px;--value-top:0px;}
  .btn:focus{outline:0;box-shadow:var(--focus-x) var(--focus-y) var(--focus-blur) var(--focus-spread) var(--focus-color);}
  .position-relative{position:relative;}
  .input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
  .form-control{display:block;padding-top:0.375rem;padding-right:0.75rem;padding-bottom:0.375rem;padding-left:var(--value-left);font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;min-height:var(--c-height) !important;transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;}
  .form-control{background-color:inherit;}
  .label{position:absolute;top:-24px;left:0px;font-size:12px;}
  .float-group{position:relative;padding:14px 24px 2px 0px;}
  .float-group .form-control{padding-top:var(--value-top);padding-right:0px;padding-bottom:0px;padding-left:var(--value-left);}
  .float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
  .float-group .form-control:focus{outline:none !important;box-shadow:none;}
  .mainCardBack{background:#ECEBEC;width: 300px;}
  .formCardMain{margin:auto;width:90%;padding-bottom:15px;}
  .main-row{width:100%;}
  .w-50s{width:100%;display:inline-block;padding-left:5px;padding-right:5px;}
  .w-50sb{width:100%;display:inline-block;padding-left:5px;padding-right:5px;position:relative;top:5px;text-align:right;}
  .w-25s{width:50%;display:inline-block;padding-left:5px;padding-right:5px;}
  :host /deep/ .card-wrapper .jp-card-container{margin-left: -6px !important;}
  `]
    })
], CreditCardNewComponent);
export { CreditCardNewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQtbmV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvY3JlZGl0LWNhcmQtbmV3L2NyZWRpdC1jYXJkLW5ldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNGM0YsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFTakMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhqQyxlQUFVLEdBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUE7UUFDNUUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksQ0FBQztJQUVLLENBQUM7SUFFL0MsUUFBUTtJQUNSLENBQUM7SUFDRCxlQUFlO1FBQ2IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsU0FBUyxFQUFFLGVBQWU7WUFDMUIsYUFBYSxFQUFFO2dCQUNiLFdBQVcsRUFBRSxjQUFjO2dCQUMzQixXQUFXLEVBQUUsY0FBYztnQkFDM0IsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFNBQVMsRUFBRSxZQUFZLENBQUMseUNBQXlDO2FBQ2xFO1lBQ0QsS0FBSyxFQUFFLEdBQUc7WUFDVixVQUFVLEVBQUUsSUFBSTtZQUNoQixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lB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RFQ7aUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlI7S0FDRixDQUFDO0dBQ1csc0JBQXNCLENBb0RsQztTQXBEWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NtbC1jcmVkaXQtY2FyZC1uZXcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cIm1haW5DYXJkQmFja1wiPlxyXG4gIDxkaXYgIGNsYXNzPVwiY2FyZC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImZvcm1DYXJkTWFpblwiPlxyXG4gICAgPGZvcm0gaWQ9XCJuZXdjcmVkaXRjYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTUwc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBmbG9hdC1ncm91cCBmbG9hdC1ncm91cC1zdGF0aWNcIiBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJjYXJkT2JqZWN0LmNhcmROdW1iZXJcIiBpZD1cIm51bWJlclwiICBuYW1lPVwibnVtYmVyXCIgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibnVtYmVyXCIgY2xhc3M9XCJsYWJlbFwiIFtuZ1N0eWxlXT1cImxhYmVsU3R5bGVcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgTnVtYmVyXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1yb3cgbXQtMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTUwc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBmbG9hdC1ncm91cCBmbG9hdC1ncm91cC1zdGF0aWNcIiBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJjYXJkT2JqZWN0LmNhcmRIb2xkZXJcIiBpZD1cIm5hbWVcIiAgbmFtZT1cIm5hbWVcIiBbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdC1uYW1lXCIgY2xhc3M9XCJsYWJlbFwiIFtuZ1N0eWxlXT1cImxhYmVsU3R5bGVcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgSG9sZGVyXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi1yb3cgbXQtMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTI1c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBmbG9hdC1ncm91cCBmbG9hdC1ncm91cC1zdGF0aWNcIiBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJjYXJkT2JqZWN0LmV4cGlyeURhdGVcIiBpZD1cImV4cGlyeVwiICBuYW1lPVwiZXhwaXJ5XCIgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleHBpcnlcIiBjbGFzcz1cImxhYmVsXCIgW25nU3R5bGVdPVwibGFiZWxTdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgRXhwaXJ5IERhdGVcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTI1c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBmbG9hdC1ncm91cCBmbG9hdC1ncm91cC1zdGF0aWNcIiBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJjYXJkT2JqZWN0LmN2Y1wiIGlkPVwiY3ZjXCIgIG5hbWU9XCJjdmNcIiBbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImN2Y1wiIGNsYXNzPVwibGFiZWxcIiBbbmdTdHlsZV09XCJsYWJlbFN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICBDVkNcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTUwc2JcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbbmdTdHlsZV09XCJidXR0b25TdHlsZVwiIChjbGljayk9XCJzdWJtaXRDbGljaygpXCIgbmFtZT1cImNhcmRzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgOmhvc3R7LS1jLXdpZHRoOjEwMCU7LS1jLWhlaWdodDoyNXB4Oy0tbGFiZWwtbGVmdDo3cHg7LS1sYWJlbC10b3A6MnB4Oy0tdmFsdWUtbGVmdDo4cHg7LS12YWx1ZS10b3A6MHB4O31cclxuICAuYnRuOmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OnZhcigtLWZvY3VzLXgpIHZhcigtLWZvY3VzLXkpIHZhcigtLWZvY3VzLWJsdXIpIHZhcigtLWZvY3VzLXNwcmVhZCkgdmFyKC0tZm9jdXMtY29sb3IpO31cclxuICAucG9zaXRpb24tcmVsYXRpdmV7cG9zaXRpb246cmVsYXRpdmU7fVxyXG4gIC5pbnB1dC1maWVsZHtib3JkZXI6MXB4IHNvbGlkICNkZWUyZTY7Ym9yZGVyLXJhZGl1czoycHg7d2lkdGg6dmFyKC0tYy13aWR0aCkgIWltcG9ydGFudDttaW4taGVpZ2h0OnZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O2hlaWdodDphdXRvO31cclxuICAuZm9ybS1jb250cm9se2Rpc3BsYXk6YmxvY2s7cGFkZGluZy10b3A6MC4zNzVyZW07cGFkZGluZy1yaWdodDowLjc1cmVtO3BhZGRpbmctYm90dG9tOjAuMzc1cmVtO3BhZGRpbmctbGVmdDp2YXIoLS12YWx1ZS1sZWZ0KTtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoxLjU7Y29sb3I6IzQ5NTA1NztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2JvcmRlcjpub25lO21pbi1oZWlnaHQ6dmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O31cclxuICAuZm9ybS1jb250cm9se2JhY2tncm91bmQtY29sb3I6aW5oZXJpdDt9XHJcbiAgLmxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjRweDtsZWZ0OjBweDtmb250LXNpemU6MTJweDt9XHJcbiAgLmZsb2F0LWdyb3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTRweCAyNHB4IDJweCAwcHg7fVxyXG4gIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9se3BhZGRpbmctdG9wOnZhcigtLXZhbHVlLXRvcCk7cGFkZGluZy1yaWdodDowcHg7cGFkZGluZy1ib3R0b206MHB4O3BhZGRpbmctbGVmdDp2YXIoLS12YWx1ZS1sZWZ0KTt9XHJcbiAgLmZsb2F0LWdyb3VwLXN0YXRpYyAubGFiZWx7Zm9udC1zaXplOjlweDtmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOnZhcigtLWxhYmVsLXRvcCk7bGVmdDp2YXIoLS1sYWJlbC1sZWZ0KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO3RyYW5zaXRpb246YWxsIDIwMG1zO29wYWNpdHk6MTttYXJnaW46MDt3aWR0aDo4NyU7aGVpZ2h0OmF1dG87fVxyXG4gIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3Vze291dGxpbmU6bm9uZSAhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZTt9XHJcbiAgLm1haW5DYXJkQmFja3tiYWNrZ3JvdW5kOiNFQ0VCRUM7d2lkdGg6IDMwMHB4O31cclxuICAuZm9ybUNhcmRNYWlue21hcmdpbjphdXRvO3dpZHRoOjkwJTtwYWRkaW5nLWJvdHRvbToxNXB4O31cclxuICAubWFpbi1yb3d7d2lkdGg6MTAwJTt9XHJcbiAgLnctNTBze3dpZHRoOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjVweDt9XHJcbiAgLnctNTBzYnt3aWR0aDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDo1cHg7cG9zaXRpb246cmVsYXRpdmU7dG9wOjVweDt0ZXh0LWFsaWduOnJpZ2h0O31cclxuICAudy0yNXN7d2lkdGg6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDo1cHg7fVxyXG4gIDpob3N0IC9kZWVwLyAuY2FyZC13cmFwcGVyIC5qcC1jYXJkLWNvbnRhaW5lcnttYXJnaW4tbGVmdDogLTZweCAhaW1wb3J0YW50O31cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlZGl0Q2FyZE5ld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGxhYmVsU3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBidXR0b25TdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGNhcmRPYmplY3Q6IGFueSA9IHsgY2FyZE51bWJlcjogXCJcIiwgY2FyZEhvbGRlcjogXCJcIiwgZXhwaXJ5RGF0ZTogXCJcIiwgY3ZjOiBcIlwiIH1cclxuICBAT3V0cHV0KCkgc3VibWl0VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgJCgnI25ld2NyZWRpdGNhcmQnKVsnY2FyZCddKHtcclxuICAgICAgY29udGFpbmVyOiAnLmNhcmQtd3JhcHBlcicsXHJcbiAgICAgIGZvcm1TZWxlY3RvcnM6IHtcclxuICAgICAgICBudW1iZXJJbnB1dDogJ2lucHV0I251bWJlcicsIC8vIG9wdGlvbmFsIOKAlCBkZWZhdWx0IGlucHV0W25hbWU9XCJudW1iZXJcIl1cclxuICAgICAgICBleHBpcnlJbnB1dDogJ2lucHV0I2V4cGlyeScsIC8vIG9wdGlvbmFsIOKAlCBkZWZhdWx0IGlucHV0W25hbWU9XCJleHBpcnlcIl1cclxuICAgICAgICBjdmNJbnB1dDogJ2lucHV0I2N2YycsIC8vIG9wdGlvbmFsIOKAlCBkZWZhdWx0IGlucHV0W25hbWU9XCJjdmNcIl1cclxuICAgICAgICBuYW1lSW5wdXQ6ICdpbnB1dCNuYW1lJyAvLyBvcHRpb25hbCAtIGRlZmF1bHRzIGlucHV0W25hbWU9XCJuYW1lXCJdXHJcbiAgICAgIH0sXHJcbiAgICAgIHdpZHRoOiAyNDAsIC8vIG9wdGlvbmFsIOKAlCBkZWZhdWx0IDM1MHB4XHJcbiAgICAgIGZvcm1hdHRpbmc6IHRydWUsIC8vIG9wdGlvbmFsIC0gZGVmYXVsdCB0cnVlXHJcbiAgICAgIGRlYnVnOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5sYWJlbFN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5sYWJlbFN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGNzcyA9IGV2ZW50LmxhYmVsU3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXdpZHRoJywgY3NzWydjLXdpZHRoJ10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLWhlaWdodCcsIGNzc1snYy1oZWlnaHQnXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWxlZnQnLCBjc3NbJ2xhYmVsLWxlZnQnXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLXRvcCcsIGNzc1snbGFiZWwtdG9wJ10pO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnZhbHVlU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgY3NzID0gZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLWxlZnQnLCBjc3NbJ3ZhbHVlLWxlZnQnXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLXRvcCcsIGNzc1sndmFsdWUtdG9wJ10pO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmJ1dHRvblN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5idXR0b25TdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxldCBjc3MgPSBldmVudC5idXR0b25TdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvY3VzLWNvbG9yJywgY3NzWydmb2N1cy1jb2xvciddKTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9jdXMtc3ByZWFkJywgY3NzWydmb2N1cy1zcHJlYWQnXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvY3VzLWJsdXInLCBjc3NbJ2ZvY3VzLWJsdXInXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvY3VzLXgnLCBjc3NbJ2ZvY3VzLXgnXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvY3VzLXknLCBjc3NbJ2ZvY3VzLXknXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN1Ym1pdENsaWNrKCkge1xyXG4gICAgdGhpcy5zdWJtaXRWYWx1ZS5lbWl0KHRoaXMuY2FyZE9iamVjdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==