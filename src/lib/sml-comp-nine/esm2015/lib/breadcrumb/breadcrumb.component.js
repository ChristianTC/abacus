import { __decorate } from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
let BreadcrumbComponent = class BreadcrumbComponent {
    constructor() {
        this.StatusNotes = [];
        this.buttons = [];
        this.disable = false;
        this.actionClick = new EventEmitter;
        this.statusClick = new EventEmitter;
        // StatusNotes = [{
        //   a: 1,
        //   Description: 'Request Finance Contract',
        //   IsFinal: 0
        // },
        // {
        //   a: 2,
        //   Description: 'Contract Sent to Finance Company',
        //   IsFinal: 0
        // },
        // {
        //   a: 3,
        //   Description: 'Contract Sent to Finance Company',
        //   IsFinal: 0
        // },
        // {
        //   a: 4,
        //   Description: 'Notice of Acceptance Received',
        //   IsFinal: 0
        // },
        // {
        //   a: 5,
        //   Description: 'Pre-Notice Voided Received',
        //   IsFinal: 0
        // },
        // {
        //   a: 6,
        //   Description: 'Pre-Notice Voided Received',
        //   IsFinal: 1
        // }];
        this.show = true;
        this.type = 'component';
        this.disabled = false;
        this.config = {
            initialSlide: this.StatusNotes.length,
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 'auto',
            speed: 100,
            centeredSlides: false,
            slidesPerGroup: 5,
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            loopFillGroupWithBlank: false,
            navigation: true,
            pagination: false,
        };
        this.scrollbar = {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
        };
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true,
            hideOnClick: false
        };
    }
    ngOnInit() {
        this.config.initialSlide = this.StatusNotes.length;
    }
    toggleType() {
        this.type = (this.type === 'component') ? 'directive' : 'component';
    }
    toggleDisabled() {
        this.disabled = !this.disabled;
    }
    toggleDirection() {
        this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
    }
    toggleSlidesPerView() {
        if (this.config.slidesPerView !== 1) {
            this.config.slidesPerView = 3;
        }
        else {
            this.config.slidesPerView = 1;
        }
    }
    toggleOverlayControls() {
        if (this.config.navigation) {
            this.config.scrollbar = false;
            this.config.navigation = false;
            this.config.pagination = this.pagination;
        }
        else if (this.config.pagination) {
            this.config.navigation = false;
            this.config.pagination = false;
            this.config.scrollbar = this.scrollbar;
        }
        else {
            this.config.scrollbar = false;
            this.config.pagination = false;
            this.config.navigation = true;
        }
        if (this.type === 'directive') {
            this.directiveRef.setIndex(0);
        }
        else {
            this.componentRef.directiveRef.setIndex(0);
        }
    }
    toggleKeyboardControl() {
        this.config.keyboard = !this.config.keyboard;
    }
    toggleMouseWheelControl() {
        this.config.mousewheel = !this.config.mousewheel;
    }
    onIndexChange(index) {
        console.log('Swiper index: ', index);
    }
    clickMethod(event) {
        this.actionClick.emit(event);
    }
    goToIndex(index) {
        this.componentRef.directiveRef.setIndex(index);
    }
    clickStatus(note) {
        this.statusClick.emit(note);
    }
};
__decorate([
    Input()
], BreadcrumbComponent.prototype, "StatusNotes", void 0);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "buttons", void 0);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "disable", void 0);
__decorate([
    Output()
], BreadcrumbComponent.prototype, "actionClick", void 0);
__decorate([
    Output()
], BreadcrumbComponent.prototype, "statusClick", void 0);
__decorate([
    ViewChild(SwiperComponent)
], BreadcrumbComponent.prototype, "componentRef", void 0);
__decorate([
    ViewChild(SwiperDirective)
], BreadcrumbComponent.prototype, "directiveRef", void 0);
BreadcrumbComponent = __decorate([
    Component({
        selector: 'sml-breadcrumb',
        template: `
<div class="mt-3" *ngIf="StatusNotes.length <= 5">
    <div class="w-100 d-flex ng-star-inserted align-items-center" style="padding-right: 0px;">
        <ng-template ngFor let-note [ngForOf]="StatusNotes" let-i="index">
            <div class="vatOuter" [ngClass]="{'vatFirstCards' : i < StatusNotes.length - 1, 'card-inverse resultGreen' : i == StatusNotes.length - 1}" (click)="clickStatus(note)">
                <div class="vatMiddle">
                    <span class="checkMark"><i class="fas fa-check-circle"></i></span>
                    {{ note.Description }}
                </div>
            </div>
            <div *ngIf="note.IsFinal != 1 && !((i + 1) == StatusNotes.length && buttons.length == 0)" class="vatArrowR">
                <i class="fas fa-chevron-right"></i>
            </div>
        </ng-template>
        <div class="fropdown" *ngIf="buttons.length > 0">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" [ngClass]="{'disabled': disable === true}">
                <span style="width:80%;">{{buttons[0].Title}}</span>
                <span class="dropdown-toggle-after">
                    <img src="./assets/Arrowcombobox.png">
                </span>
            </button>
            <div class="dropdown-menu" >
                <a *ngFor="let button of buttons;let i = index;" class="dropdown-item"  href="javascript:void(0)"  (click)="clickMethod(button.Action)">{{button.Title}}</a>
            </div>
        </div>
    </div>
</div>
<div class="mt-3" *ngIf="StatusNotes.length > 5">
    <div class=" swiperCustom d-flex align-items-center">
        <div class="swiper_wrap position-relative">
            <swiper #swiperComp *ngIf="type == 'component' && show" [config]="config" (indexChange)="onIndexChange($event)"> 
                <ng-template  ngFor let-note [ngForOf]="StatusNotes" let-i="index">
                    <div class="vatOuter" [ngClass]="{'vatFirstCards' : i < StatusNotes.length - 1, 'card-inverse resultGreen' : i == StatusNotes.length - 1}" (click)="clickStatus(note)">
                        <div class="vatMiddle">
                            <span class="checkMark"><i class="fas fa-check-circle"></i></span>
                            {{ note.Description }}
                        </div> 
                    </div>
                    <div *ngIf="note.IsFinal != 1 && !((i + 1) == StatusNotes.length && buttons.length == 0)" class="vatArrowR">
                        <i class="fas fa-chevron-right"></i>
                    </div> 
                </ng-template>  
            </swiper>
        </div>
        <div class="fropdown" *ngIf="buttons.length > 0">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" [ngClass]="{'disabled': disable === true}">
                <span style="width:80%;">{{buttons[0].Title}}</span>
                <span class="dropdown-toggle-after">
                    <img src="./assets/Arrowcombobox.png">
                </span>
            </button>
            <div class="dropdown-menu" >
                <a *ngFor="let button of buttons;let i = index;" class="dropdown-item" href="javascript:void(0)" (click)="clickMethod(button.Action)">{{button.Title}}</a>
            </div>
        </div>
    </div>
</div>
  `,
        styles: [`
.vatFirstCards {
    background-color: #f2f2f2;
    color: #808184
}

.vatOuter {
    display: table;
    /*position: absolute;*/
    border-radius: 4px;
    top: 0;
    left: 0;
    height: 100%;
    width: 150px;
}

.vatMiddle {
    display: inline-flex;
    font-size: 14px;
    align-items: center;
    padding: 10px 6px;
    line-height: 1.4;
    min-height: 57px;
}

.vatArrowR {
    box-sizing: border-box;
    margin: 0px 8px !important;
    color: #bdbec0;
}

.swiperCustom .vatArrowR {
    width: auto !important
}

.swiperCustom .vatOuter {
    width: 170px !important
}

.resultGreen {
    background-color: #8ec63f;
    color: #fff
}

.textGreen {
    color: #6da23a;
    font-size: 10px;
}

.bg-gradient-blue {
    background: rgb(81, 136, 218);
    background: linear-gradient(135deg, rgba(81, 136, 218, 1) 0%, rgba(52, 135, 226, 1) 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5188da', endColorstr='#3487e2', GradientType=1) !important;
}


    .checkMark {
        font-size: 16px;
        display: inline-block;
        margin-right: 8px;
    }

    .swiper-wrapper {
        align-items: center;
    }

    .dropdown-toggle-after{
       content: '';
       border: none;
       font-family: 'Font Awesome 5 Free';
       font-weight: 900;
       color: #6a942f;
       vertical-align: 0;
       width: 35px !important;
       height: 104%;
       background: #a3d45d;
       position: absolute;
       z-index: 999;
       top: -1px;
       right: -1px;
       border-radius: 5px;
       border-bottom-left-radius: 0;
       border-top-left-radius: 0;
       display: flex;
       justify-content: center;
       align-items: center;

   }
   .dropdown-toggle-after img{width: 16px;  transition: ease-in-out all 0.2s}
   .show .dropdown-toggle-after img{transform: rotate(-180deg);  transition: ease-in-out all 0.2s}
   .dropdown-toggle {
    width: 170px;
    background-color: #8ec63f;
    color: #fff;
    display: inline-flex;
    white-space: unset !important;
    text-align: left;
    align-items: center;
    font-size: 14px;
    padding:9px 6px;
    line-height: 1.4;
    position: relative;
    min-height: 57px;
}
.dropdown-toggle::after {
    display:none !important;
}

.dropdown-toggle:focus {
    box-shadow: none;
}

/*.dropdown-menu{
    padding: 0;
    border: none;

}
*/
.bordertop{
    border: 1px solid #eae9e9cc;
    position: relative; 
    margin-top: 20px; 
    border-radius: 3px;
}
.dropdown-item{
    font-size: 14px;
     padding: 6px;
     border-left: 3px solid #fff;
     white-space: pre-wrap !important;

}
.dropdown-divider{
    margin: 0;
}
.dropdown-menu.show {
     width: 175px;
}
.dropdown-item:hover{
    background-color: #fff;
    color: #8ec63f;
    border-left: 3px solid #8ec63f;
}

.updrop{position: absolute; top: -19px; right: 18px;}
  `]
    })
], BreadcrumbComponent);
export { BreadcrumbComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFDSCxlQUFlLEVBQUUsZUFBZSxFQUVuQyxNQUFNLG9CQUFvQixDQUFDO0FBbU41QixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQVE1QjtRQU5TLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN4QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFRekMsbUJBQW1CO1FBQ25CLFVBQVU7UUFDViw2Q0FBNkM7UUFDN0MsZUFBZTtRQUNmLEtBQUs7UUFDTCxJQUFJO1FBQ0osVUFBVTtRQUNWLHFEQUFxRDtRQUNyRCxlQUFlO1FBQ2YsS0FBSztRQUNMLElBQUk7UUFDSixVQUFVO1FBQ1YscURBQXFEO1FBQ3JELGVBQWU7UUFDZixLQUFLO1FBQ0wsSUFBSTtRQUNKLFVBQVU7UUFDVixrREFBa0Q7UUFDbEQsZUFBZTtRQUNmLEtBQUs7UUFDTCxJQUFJO1FBQ0osVUFBVTtRQUNWLCtDQUErQztRQUMvQyxlQUFlO1FBQ2YsS0FBSztRQUNMLElBQUk7UUFDSixVQUFVO1FBQ1YsK0NBQStDO1FBQy9DLGVBQWU7UUFDZixNQUFNO1FBRUMsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixTQUFJLEdBQVcsV0FBVyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUEwQjtZQUNuQyxZ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Ozs7Ozs7OztHQXlEWDtpQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0pWO0tBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQXNJL0I7U0F0SVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBTd2lwZXJDb21wb25lbnQsIFN3aXBlckRpcmVjdGl2ZSwgU3dpcGVyQ29uZmlnSW50ZXJmYWNlLFxyXG4gICAgU3dpcGVyU2Nyb2xsYmFySW50ZXJmYWNlLCBTd2lwZXJQYWdpbmF0aW9uSW50ZXJmYWNlXHJcbn0gZnJvbSAnbmd4LXN3aXBlci13cmFwcGVyJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzbWwtYnJlYWRjcnVtYicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48ZGl2IGNsYXNzPVwibXQtM1wiICpuZ0lmPVwiU3RhdHVzTm90ZXMubGVuZ3RoIDw9IDVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBkLWZsZXggbmctc3Rhci1pbnNlcnRlZCBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDBweDtcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW5vdGUgW25nRm9yT2ZdPVwiU3RhdHVzTm90ZXNcIiBsZXQtaT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YXRPdXRlclwiIFtuZ0NsYXNzXT1cInsndmF0Rmlyc3RDYXJkcycgOiBpIDwgU3RhdHVzTm90ZXMubGVuZ3RoIC0gMSwgJ2NhcmQtaW52ZXJzZSByZXN1bHRHcmVlbicgOiBpID09IFN0YXR1c05vdGVzLmxlbmd0aCAtIDF9XCIgKGNsaWNrKT1cImNsaWNrU3RhdHVzKG5vdGUpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmF0TWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja01hcmtcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IG5vdGUuRGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm5vdGUuSXNGaW5hbCAhPSAxICYmICEoKGkgKyAxKSA9PSBTdGF0dXNOb3Rlcy5sZW5ndGggJiYgYnV0dG9ucy5sZW5ndGggPT0gMClcIiBjbGFzcz1cInZhdEFycm93UlwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvcGRvd25cIiAqbmdJZj1cImJ1dHRvbnMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGRpc2FibGUgPT09IHRydWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOjgwJTtcIj57e2J1dHRvbnNbMF0uVGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlLWFmdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9BcnJvd2NvbWJvYm94LnBuZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiA+XHJcbiAgICAgICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnM7bGV0IGkgPSBpbmRleDtcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiICAoY2xpY2spPVwiY2xpY2tNZXRob2QoYnV0dG9uLkFjdGlvbilcIj57e2J1dHRvbi5UaXRsZX19PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm10LTNcIiAqbmdJZj1cIlN0YXR1c05vdGVzLmxlbmd0aCA+IDVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCIgc3dpcGVyQ3VzdG9tIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyX3dyYXAgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPHN3aXBlciAjc3dpcGVyQ29tcCAqbmdJZj1cInR5cGUgPT0gJ2NvbXBvbmVudCcgJiYgc2hvd1wiIFtjb25maWddPVwiY29uZmlnXCIgKGluZGV4Q2hhbmdlKT1cIm9uSW5kZXhDaGFuZ2UoJGV2ZW50KVwiPiBcclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAgbmdGb3IgbGV0LW5vdGUgW25nRm9yT2ZdPVwiU3RhdHVzTm90ZXNcIiBsZXQtaT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhdE91dGVyXCIgW25nQ2xhc3NdPVwieyd2YXRGaXJzdENhcmRzJyA6IGkgPCBTdGF0dXNOb3Rlcy5sZW5ndGggLSAxLCAnY2FyZC1pbnZlcnNlIHJlc3VsdEdyZWVuJyA6IGkgPT0gU3RhdHVzTm90ZXMubGVuZ3RoIC0gMX1cIiAoY2xpY2spPVwiY2xpY2tTdGF0dXMobm90ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhdE1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja01hcmtcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbm90ZS5EZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm5vdGUuSXNGaW5hbCAhPSAxICYmICEoKGkgKyAxKSA9PSBTdGF0dXNOb3Rlcy5sZW5ndGggJiYgYnV0dG9ucy5sZW5ndGggPT0gMClcIiBjbGFzcz1cInZhdEFycm93UlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+ICBcclxuICAgICAgICAgICAgPC9zd2lwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZyb3Bkb3duXCIgKm5nSWY9XCJidXR0b25zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOiBkaXNhYmxlID09PSB0cnVlfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ3aWR0aDo4MCU7XCI+e3tidXR0b25zWzBdLlRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZS1hZnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvQXJyb3djb21ib2JveC5wbmdcIj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgPlxyXG4gICAgICAgICAgICAgICAgPGEgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBidXR0b25zO2xldCBpID0gaW5kZXg7XCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJjbGlja01ldGhvZChidXR0b24uQWN0aW9uKVwiPnt7YnV0dG9uLlRpdGxlfX08L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbi52YXRGaXJzdENhcmRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBjb2xvcjogIzgwODE4NFxyXG59XHJcblxyXG4udmF0T3V0ZXIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLnZhdE1pZGRsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBtaW4taGVpZ2h0OiA1N3B4O1xyXG59XHJcblxyXG4udmF0QXJyb3dSIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDBweCA4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjYmRiZWMwO1xyXG59XHJcblxyXG4uc3dpcGVyQ3VzdG9tIC52YXRBcnJvd1Ige1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudFxyXG59XHJcblxyXG4uc3dpcGVyQ3VzdG9tIC52YXRPdXRlciB7XHJcbiAgICB3aWR0aDogMTcwcHggIWltcG9ydGFudFxyXG59XHJcblxyXG4ucmVzdWx0R3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlYzYzZjtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi50ZXh0R3JlZW4ge1xyXG4gICAgY29sb3I6ICM2ZGEyM2E7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig4MSwgMTM2LCAyMTgpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg4MSwgMTM2LCAyMTgsIDEpIDAlLCByZ2JhKDUyLCAxMzUsIDIyNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyM1MTg4ZGEnLCBlbmRDb2xvcnN0cj0nIzM0ODdlMicsIEdyYWRpZW50VHlwZT0xKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuICAgIC5jaGVja01hcmsge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN3aXBlci13cmFwcGVyIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi10b2dnbGUtYWZ0ZXJ7XHJcbiAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XHJcbiAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgY29sb3I6ICM2YTk0MmY7XHJcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogMDtcclxuICAgICAgIHdpZHRoOiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBoZWlnaHQ6IDEwNCU7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjYTNkNDVkO1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICB9XHJcbiAgIC5kcm9wZG93bi10b2dnbGUtYWZ0ZXIgaW1ne3dpZHRoOiAxNnB4OyAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgYWxsIDAuMnN9XHJcbiAgIC5zaG93IC5kcm9wZG93bi10b2dnbGUtYWZ0ZXIgaW1ne3RyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpOyAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgYWxsIDAuMnN9XHJcbiAgIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlYzYzZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzo5cHggNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDU3cHg7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLyouZHJvcGRvd24tbWVudXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG59XHJcbiovXHJcbi5ib3JkZXJ0b3B7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlOWU5Y2M7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgbWFyZ2luLXRvcDogMjBweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmRyb3Bkb3duLWl0ZW17XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmZjtcclxuICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmRyb3Bkb3duLWRpdmlkZXJ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgICAgd2lkdGg6IDE3NXB4O1xyXG59XHJcbi5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjOGVjNjNmO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjOGVjNjNmO1xyXG59XHJcblxyXG4udXBkcm9we3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtMTlweDsgcmlnaHQ6IDE4cHg7fVxyXG4gIGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgU3RhdHVzTm90ZXM6IGFueSA9IFtdO1xyXG4gICAgQElucHV0KCkgYnV0dG9uczogYW55ID0gW107XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAT3V0cHV0KCkgYWN0aW9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gICAgQE91dHB1dCgpIHN0YXR1c0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZy5pbml0aWFsU2xpZGUgPSB0aGlzLlN0YXR1c05vdGVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8vIFN0YXR1c05vdGVzID0gW3tcclxuICAgIC8vICAgYTogMSxcclxuICAgIC8vICAgRGVzY3JpcHRpb246ICdSZXF1ZXN0IEZpbmFuY2UgQ29udHJhY3QnLFxyXG4gICAgLy8gICBJc0ZpbmFsOiAwXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICBhOiAyLFxyXG4gICAgLy8gICBEZXNjcmlwdGlvbjogJ0NvbnRyYWN0IFNlbnQgdG8gRmluYW5jZSBDb21wYW55JyxcclxuICAgIC8vICAgSXNGaW5hbDogMFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgYTogMyxcclxuICAgIC8vICAgRGVzY3JpcHRpb246ICdDb250cmFjdCBTZW50IHRvIEZpbmFuY2UgQ29tcGFueScsXHJcbiAgICAvLyAgIElzRmluYWw6IDBcclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIGE6IDQsXHJcbiAgICAvLyAgIERlc2NyaXB0aW9uOiAnTm90aWNlIG9mIEFjY2VwdGFuY2UgUmVjZWl2ZWQnLFxyXG4gICAgLy8gICBJc0ZpbmFsOiAwXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICBhOiA1LFxyXG4gICAgLy8gICBEZXNjcmlwdGlvbjogJ1ByZS1Ob3RpY2UgVm9pZGVkIFJlY2VpdmVkJyxcclxuICAgIC8vICAgSXNGaW5hbDogMFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgYTogNixcclxuICAgIC8vICAgRGVzY3JpcHRpb246ICdQcmUtTm90aWNlIFZvaWRlZCBSZWNlaXZlZCcsXHJcbiAgICAvLyAgIElzRmluYWw6IDFcclxuICAgIC8vIH1dO1xyXG5cclxuICAgIHB1YmxpYyBzaG93OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSAnY29tcG9uZW50JztcclxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGNvbmZpZzogU3dpcGVyQ29uZmlnSW50ZXJmYWNlID0ge1xyXG4gICAgICAgIGluaXRpYWxTbGlkZTogdGhpcy5TdGF0dXNOb3Rlcy5sZW5ndGgsXHJcbiAgICAgICAgYTExeTogdHJ1ZSxcclxuICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgc3BlZWQ6IDEwMCxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDUsXHJcbiAgICAgICAga2V5Ym9hcmQ6IHRydWUsXHJcbiAgICAgICAgbW91c2V3aGVlbDogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxiYXI6IGZhbHNlLFxyXG4gICAgICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IGZhbHNlLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHRydWUsXHJcbiAgICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBzY3JvbGxiYXI6IFN3aXBlclNjcm9sbGJhckludGVyZmFjZSA9IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgIH07XHJcbiAgICBwcml2YXRlIHBhZ2luYXRpb246IFN3aXBlclBhZ2luYXRpb25JbnRlcmZhY2UgPSB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICBoaWRlT25DbGljazogZmFsc2VcclxuICAgIH07XHJcbiAgICBAVmlld0NoaWxkKFN3aXBlckNvbXBvbmVudCkgY29tcG9uZW50UmVmOiBTd2lwZXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFN3aXBlckRpcmVjdGl2ZSkgZGlyZWN0aXZlUmVmOiBTd2lwZXJEaXJlY3RpdmU7XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZVR5cGUoKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gKHRoaXMudHlwZSA9PT0gJ2NvbXBvbmVudCcpID8gJ2RpcmVjdGl2ZScgOiAnY29tcG9uZW50JztcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b2dnbGVEaXNhYmxlZCgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9nZ2xlRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmRpcmVjdGlvbiA9ICh0aGlzLmNvbmZpZy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvZ2dsZVNsaWRlc1BlclZpZXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnNsaWRlc1BlclZpZXcgIT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2xpZGVzUGVyVmlldyA9IDM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2xpZGVzUGVyVmlldyA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHRvZ2dsZU92ZXJsYXlDb250cm9scygpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcubmF2aWdhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zY3JvbGxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcubmF2aWdhdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IHRoaXMucGFnaW5hdGlvbjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLnBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcubmF2aWdhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zY3JvbGxiYXIgPSB0aGlzLnNjcm9sbGJhcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zY3JvbGxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25maWcubmF2aWdhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnZGlyZWN0aXZlJykge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZVJlZi5zZXRJbmRleCgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kaXJlY3RpdmVSZWYuc2V0SW5kZXgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHRvZ2dsZUtleWJvYXJkQ29udHJvbCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZy5rZXlib2FyZCA9ICF0aGlzLmNvbmZpZy5rZXlib2FyZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b2dnbGVNb3VzZVdoZWVsQ29udHJvbCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZy5tb3VzZXdoZWVsID0gIXRoaXMuY29uZmlnLm1vdXNld2hlZWw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25JbmRleENoYW5nZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N3aXBlciBpbmRleDogJywgaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgY2xpY2tNZXRob2QoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbkNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdvVG9JbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRpcmVjdGl2ZVJlZi5zZXRJbmRleChpbmRleCk7XHJcbiAgICB9XHJcbiAgICBjbGlja1N0YXR1cyhub3RlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDbGljay5lbWl0KG5vdGUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==