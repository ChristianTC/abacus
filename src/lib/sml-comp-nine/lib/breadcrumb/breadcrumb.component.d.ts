import { EventEmitter } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import * as ɵngcc0 from '@angular/core';
export declare class BreadcrumbComponent {
    StatusNotes: any;
    buttons: any;
    disable: boolean;
    actionClick: EventEmitter<any>;
    statusClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    show: boolean;
    type: string;
    disabled: boolean;
    config: SwiperConfigInterface;
    private scrollbar;
    private pagination;
    componentRef: SwiperComponent;
    directiveRef: SwiperDirective;
    toggleType(): void;
    toggleDisabled(): void;
    toggleDirection(): void;
    toggleSlidesPerView(): void;
    toggleOverlayControls(): void;
    toggleKeyboardControl(): void;
    toggleMouseWheelControl(): void;
    onIndexChange(index: number): void;
    clickMethod(event: any): void;
    goToIndex(index: any): void;
    clickStatus(note: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BreadcrumbComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BreadcrumbComponent, "sml-breadcrumb", never, { "StatusNotes": "StatusNotes"; "buttons": "buttons"; "disable": "disable"; }, { "actionClick": "actionClick"; "statusClick": "statusClick"; }, never, never>;
}

//# sourceMappingURL=breadcrumb.component.d.ts.map