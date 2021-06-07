import { __decorate } from 'tslib';
import { EventEmitter, NgZone, ViewChild, Input, Output, Component, ElementRef, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpEventType, HttpResponse, HttpClientModule } from '@angular/common/http';
import { MapsAPILoader, AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextModule, SelectModule } from 'sml-inputs-nine';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import * as moment_ from 'moment';
import { SwiperComponent, SwiperDirective, SwiperModule } from 'ngx-swiper-wrapper';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { RouterModule } from '@angular/router';
import { TagInputModule } from 'ngx-chips';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgPaymentCardModule } from 'ng-payment-card';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@agm/core';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'sml-inputs-nine';
import * as ɵngcc5 from '@sweetalert2/ngx-sweetalert2';
import * as ɵngcc6 from '@angular/forms';
import * as ɵngcc7 from 'ngx-swiper-wrapper';
import * as ɵngcc8 from '@angular/http';
import * as ɵngcc9 from '@ng-select/ng-select';
import * as ɵngcc10 from '@angular/router';
import * as ɵngcc11 from 'ngx-chips';
import * as ɵngcc12 from 'angular-ng-autocomplete';
import * as ɵngcc13 from 'ngx-image-cropper';
import * as ɵngcc14 from 'ng-payment-card';

const _c0 = ["search"];
function AddressComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵelementStart(1, "div", 0);
    ɵngcc0.ɵɵelementStart(2, "div", 20);
    ɵngcc0.ɵɵelementStart(3, "label", 21);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 0);
    ɵngcc0.ɵɵelementStart(6, "div", 20);
    ɵngcc0.ɵɵelementStart(7, "label", 21);
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "div", 0);
    ɵngcc0.ɵɵelementStart(10, "div", 20);
    ɵngcc0.ɵɵelementStart(11, "label", 22);
    ɵngcc0.ɵɵtext(12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(13, "label", 22);
    ɵngcc0.ɵɵtext(14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(15, "label", 22);
    ɵngcc0.ɵɵtext(16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.borderBoxStyle);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.lableBoxStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.itemObject.address);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.lableBoxStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.itemObject.address2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.lableBoxStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.itemObject.city);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.lableBoxStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.itemObject.state);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.lableBoxStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.itemObject.zipcode);
} }
function AddressComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵelementStart(1, "agm-map", 24);
    ɵngcc0.ɵɵelement(2, "agm-marker", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r2.mapBoxStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("height", ctx_r2.mapBoxStyle == null ? null : ctx_r2.mapBoxStyle.height);
    ɵngcc0.ɵɵproperty("latitude", ctx_r2.latitude)("longitude", ctx_r2.longitude);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("latitude", ctx_r2.latitude)("longitude", ctx_r2.longitude);
} }
const _c1 = function (a0) { return { "hide-div": a0 }; };
function ButtonComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.iconCl);
} }
function ButtonComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
function NotesComponent_div_18_li_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "div", 18);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵelement(3, "img", 19);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 20);
    ɵngcc0.ɵɵelementStart(5, "div", 21);
    ɵngcc0.ɵɵelementStart(6, "div", 22);
    ɵngcc0.ɵɵelementStart(7, "span");
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "span", 23);
    ɵngcc0.ɵɵtext(10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(11, "div", 24);
    ɵngcc0.ɵɵelementStart(12, "div", 25);
    ɵngcc0.ɵɵelement(13, "span", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "p", 27);
    ɵngcc0.ɵɵtext(15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    ɵngcc0.ɵɵclassMap(data_r4.read);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵpropertyInterpolate("src", data_r4 == null ? null : data_r4.userUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵtextInterpolate1("", data_r4.user, " \u00A0");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" /\u00A0 ", data_r4.time, "");
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵtextInterpolate(data_r4.note);
} }
function NotesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 15);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "ul", 16);
    ɵngcc0.ɵɵtemplate(4, NotesComponent_div_18_li_4_Template, 16, 7, "li", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dateGroup_r2 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.isToday(dateGroup_r2.date), " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", dateGroup_r2.noteData);
} }
const _c2 = function (a0) { return { "op": a0 }; };
function BreadcrumbComponent_div_0_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelement(1, "i", 11);
    ɵngcc0.ɵɵelementEnd();
} }
const _c3 = function (a0, a1) { return { "vatFirstCards": a0, "card-inverse resultGreen": a1 }; };
function BreadcrumbComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function BreadcrumbComponent_div_0_ng_template_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const note_r4 = ctx.$implicit; const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.clickStatus(note_r4); });
    ɵngcc0.ɵɵelementStart(1, "div", 6);
    ɵngcc0.ɵɵelementStart(2, "span", 7);
    ɵngcc0.ɵɵelement(3, "i", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, BreadcrumbComponent_div_0_ng_template_2_div_5_Template, 2, 0, "div", 9);
} if (rf & 2) {
    const note_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c3, i_r5 < ctx_r2.StatusNotes.length - 1, i_r5 == ctx_r2.StatusNotes.length - 1));
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate1(" ", note_r4.Description, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", note_r4.IsFinal != 1 && !(i_r5 + 1 == ctx_r2.StatusNotes.length && ctx_r2.buttons.length == 0));
} }
function BreadcrumbComponent_div_0_div_3_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 19);
    ɵngcc0.ɵɵlistener("click", function BreadcrumbComponent_div_0_div_3_a_7_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const button_r10 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(3); return ctx_r12.clickMethod(button_r10.Action); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r10 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(button_r10.Title);
} }
const _c4 = function (a0) { return { "disabled": a0 }; };
function BreadcrumbComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵelementStart(2, "span", 14);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "span", 15);
    ɵngcc0.ɵɵelement(5, "img", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 17);
    ɵngcc0.ɵɵtemplate(7, BreadcrumbComponent_div_0_div_3_a_7_Template, 2, 1, "a", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c4, ctx_r3.disable === true));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.buttons[0].Title);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.buttons);
} }
function BreadcrumbComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵtemplate(2, BreadcrumbComponent_div_0_ng_template_2_Template, 6, 6, "ng-template", 3);
    ɵngcc0.ɵɵtemplate(3, BreadcrumbComponent_div_0_div_3_Template, 8, 5, "div", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.StatusNotes);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.buttons.length > 0);
} }
function BreadcrumbComponent_div_1_swiper_3_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelement(1, "i", 11);
    ɵngcc0.ɵɵelementEnd();
} }
function BreadcrumbComponent_div_1_swiper_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function BreadcrumbComponent_div_1_swiper_3_ng_template_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const note_r18 = ctx.$implicit; const ctx_r21 = ɵngcc0.ɵɵnextContext(3); return ctx_r21.clickStatus(note_r18); });
    ɵngcc0.ɵɵelementStart(1, "div", 6);
    ɵngcc0.ɵɵelementStart(2, "span", 7);
    ɵngcc0.ɵɵelement(3, "i", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, BreadcrumbComponent_div_1_swiper_3_ng_template_2_div_5_Template, 2, 0, "div", 9);
} if (rf & 2) {
    const note_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r17 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c3, i_r19 < ctx_r17.StatusNotes.length - 1, i_r19 == ctx_r17.StatusNotes.length - 1));
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate1(" ", note_r18.Description, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", note_r18.IsFinal != 1 && !(i_r19 + 1 == ctx_r17.StatusNotes.length && ctx_r17.buttons.length == 0));
} }
function BreadcrumbComponent_div_1_swiper_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "swiper", 23, 24);
    ɵngcc0.ɵɵlistener("indexChange", function BreadcrumbComponent_div_1_swiper_3_Template_swiper_indexChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r23 = ɵngcc0.ɵɵnextContext(2); return ctx_r23.onIndexChange($event); });
    ɵngcc0.ɵɵtemplate(2, BreadcrumbComponent_div_1_swiper_3_ng_template_2_Template, 6, 6, "ng-template", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("config", ctx_r14.config);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r14.StatusNotes);
} }
function BreadcrumbComponent_div_1_div_4_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 19);
    ɵngcc0.ɵɵlistener("click", function BreadcrumbComponent_div_1_div_4_a_7_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r29); const button_r26 = ctx.$implicit; const ctx_r28 = ɵngcc0.ɵɵnextContext(3); return ctx_r28.clickMethod(button_r26.Action); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r26 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(button_r26.Title);
} }
function BreadcrumbComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵelementStart(2, "span", 14);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "span", 15);
    ɵngcc0.ɵɵelement(5, "img", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 17);
    ɵngcc0.ɵɵtemplate(7, BreadcrumbComponent_div_1_div_4_a_7_Template, 2, 1, "a", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c4, ctx_r15.disable === true));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.buttons[0].Title);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r15.buttons);
} }
function BreadcrumbComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "div", 20);
    ɵngcc0.ɵɵelementStart(2, "div", 21);
    ɵngcc0.ɵɵtemplate(3, BreadcrumbComponent_div_1_swiper_3_Template, 3, 2, "swiper", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, BreadcrumbComponent_div_1_div_4_Template, 8, 5, "div", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.type == "component" && ctx_r1.show);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.buttons.length > 0);
} }
function ButtongroupComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9);
    ɵngcc0.ɵɵlistener("mouseover", function ButtongroupComponent_a_9_Template_a_mouseover_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r3 = ɵngcc0.ɵɵnextContext(); return (ctx_r3.hoverAnchor[i_r2] = true); })("click", function ButtongroupComponent_a_9_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const button_r1 = ctx.$implicit; const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.clickMethod(button_r1.action); })("mouseleave", function ButtongroupComponent_a_9_Template_a_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return (ctx_r6.hoverAnchor[i_r2] = false); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.hoverAnchor[i_r2] ? ctx_r0.getHoverStyle() : ctx_r0.buttonGroupValueStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r1.title, " ");
} }
function SinglefileuploadComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.percentDone, "%");
} }
const _c5 = function (a0) { return { "width.%": a0 }; };
function SinglefileuploadComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵelement(1, "div", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c5, ctx_r1.percentDone));
} }
function SinglefileuploadComponent_div_17_li_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "a", 26);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 27);
    ɵngcc0.ɵɵelementStart(4, "div", 28);
    ɵngcc0.ɵɵlistener("click", function SinglefileuploadComponent_div_17_li_2_div_1_Template_div_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); const data_r4 = ctx_r9.$implicit; const i_r5 = ctx_r9.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.edit(data_r4, i_r5); });
    ɵngcc0.ɵɵelement(5, "img", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 30);
    ɵngcc0.ɵɵlistener("click", function SinglefileuploadComponent_div_17_li_2_div_1_Template_div_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r10); const data_r4 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.DeleteFIles(data_r4.FilesId); });
    ɵngcc0.ɵɵelement(7, "img", 31);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("href", data_r4.FileUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(data_r4.Description);
} }
function SinglefileuploadComponent_div_17_li_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 32);
    ɵngcc0.ɵɵelementStart(1, "input", 33, 34);
    ɵngcc0.ɵɵlistener("ngModelChange", function SinglefileuploadComponent_div_17_li_2_div_2_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(3); return ctx_r15.textdata = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 35);
    ɵngcc0.ɵɵelementStart(4, "div", 28);
    ɵngcc0.ɵɵlistener("click", function SinglefileuploadComponent_div_17_li_2_div_2_Template_div_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r16); const data_r4 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.updateName(data_r4.FilesId); });
    ɵngcc0.ɵɵelement(5, "img", 36);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 37);
    ɵngcc0.ɵɵlistener("click", function SinglefileuploadComponent_div_17_li_2_div_2_Template_div_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r19 = ɵngcc0.ɵɵnextContext(3); return ctx_r19.esc(); });
    ɵngcc0.ɵɵelement(7, "img", 31);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", data_r4.Description)("ngModel", ctx_r7.textdata);
} }
function SinglefileuploadComponent_div_17_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 22);
    ɵngcc0.ɵɵtemplate(1, SinglefileuploadComponent_div_17_li_2_div_1_Template, 8, 2, "div", 23);
    ɵngcc0.ɵɵtemplate(2, SinglefileuploadComponent_div_17_li_2_div_2_Template, 8, 2, "div", 24);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.contentIndex != i_r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.editContent && ctx_r3.contentIndex == i_r5);
} }
function SinglefileuploadComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵelementStart(1, "ul", 20);
    ɵngcc0.ɵɵtemplate(2, SinglefileuploadComponent_div_17_li_2_Template, 3, 2, "li", 21);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.datas);
} }
const _c6 = function (a0, a1) { return { "height.px": a0, "width.px": a1 }; };
const _c7 = function (a0) { return { "getData": a0 }; };
const _c8 = ["video"];
const _c9 = ["canvas"];
const _c10 = function (a0) { return { "avatar1": a0 }; };
function ImagecropComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 42);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r0.imagePath, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c10, ctx_r0.imagePath != "" && ctx_r0.imagePath != "assets/img/cropimage/avatar.png"));
} }
function ImagecropComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 43);
    ɵngcc0.ɵɵelementStart(1, "button", 44);
    ɵngcc0.ɵɵlistener("click", function ImagecropComponent_div_48_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.capture(); });
    ɵngcc0.ɵɵtext(2, "Snap photo");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function ImagecropComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 45);
    ɵngcc0.ɵɵelementStart(1, "button", 46);
    ɵngcc0.ɵɵlistener("click", function ImagecropComponent_div_49_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.crop(); });
    ɵngcc0.ɵɵtext(2, "Crop");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function ImagecropComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 43);
    ɵngcc0.ɵɵelementStart(1, "button", 47);
    ɵngcc0.ɵɵlistener("click", function ImagecropComponent_div_50_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.cropcam(); });
    ɵngcc0.ɵɵtext(2, "Crop");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function ImagecropComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 48);
    ɵngcc0.ɵɵlistener("click", function ImagecropComponent_button_55_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.upload(); });
    ɵngcc0.ɵɵtext(1, "Upload");
    ɵngcc0.ɵɵelementEnd();
} }
const _c11 = function (a0) { return { "justify-content-between": a0 }; };
const _c12 = [[["sml-table-header"]], [["sml-table-column"]], [["sml-table-body"]], [["sml-table-footer"]]];
const _c13 = function (a0, a1) { return { "width": a0, "overflow-x": a1 }; };
const _c14 = function (a0) { return { "over-flow": a0 }; };
const _c15 = ["sml-table-header", "sml-table-column", "sml-table-body", "sml-table-footer"];
function ColumnComponent_th_0_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 6);
} }
function ColumnComponent_th_0_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 7);
} }
const _c16 = function (a0, a1) { return { "sort_icon_divl": a0, "sort_icon_divr": a1 }; };
function ColumnComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "th", 1);
    ɵngcc0.ɵɵlistener("click", function ColumnComponent_th_0_Template_th_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.sort(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "div", 2);
    ɵngcc0.ɵɵelementStart(3, "div", 3);
    ɵngcc0.ɵɵtemplate(4, ColumnComponent_th_0_i_4_Template, 1, 0, "i", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div");
    ɵngcc0.ɵɵtemplate(6, ColumnComponent_th_0_i_6_Template, 1, 0, "i", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("width", ctx_r0.obj[ctx_r0.name].width + "px")("max-width", ctx_r0.obj[ctx_r0.name].width + "px")("min-width", ctx_r0.obj[ctx_r0.name].width + "px")("text-align", ctx_r0.obj[ctx_r0.name].columnDefinatinAlignment);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.headerStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.obj[ctx_r0.name].title, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(13, _c16, ctx_r0.obj[ctx_r0.name].columnDefinatinAlignment != "right", ctx_r0.obj[ctx_r0.name].columnDefinatinAlignment == "right"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.obj[ctx_r0.name].orderBy == "ASC" && ctx_r0.obj[ctx_r0.name].isCurrent);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.obj[ctx_r0.name].orderBy == "DESC" && ctx_r0.obj[ctx_r0.name].isCurrent);
} }
function HeaderComponent_div_1_div_1_sml_table_header_search_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "sml-table-header-search", 10);
    ɵngcc0.ɵɵlistener("searchClick", function HeaderComponent_div_1_div_1_sml_table_header_search_2_Template_sml_table_header_search_searchClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(3); return ctx_r8.searchClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("name", ctx_r5.textObj.name)("value", ctx_r5.textObj.value)("placeholder", ctx_r5.textObj.placeholder);
} }
function HeaderComponent_div_1_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function HeaderComponent_div_1_div_1_sml_table_header_count_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "sml-table-header-count", 11);
    ɵngcc0.ɵɵlistener("changevalue", function HeaderComponent_div_1_div_1_sml_table_header_count_6_Template_sml_table_header_count_changevalue_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(3); return ctx_r10.changeRowDisplayCount($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("listValue", ctx_r7.drpObj.drpDataList)("value", ctx_r7.drpObj.selectedValue);
} }
const _c17 = function (a0, a1, a2, a3) { return { "pl-5": a0, "pr-5": a1, "f-l": a2, "f-r": a3 }; };
function HeaderComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtemplate(2, HeaderComponent_div_1_div_1_sml_table_header_search_2_Template, 1, 3, "sml-table-header-search", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 7);
    ɵngcc0.ɵɵtemplate(4, HeaderComponent_div_1_div_1_ng_container_4_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 5);
    ɵngcc0.ɵɵtemplate(6, HeaderComponent_div_1_div_1_sml_table_header_count_6_Template, 1, 2, "sml-table-header-count", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(5, _c17, ctx_r3.alignment.searchposition == "right", ctx_r3.alignment.searchposition == "left", ctx_r3.alignment.searchposition == "left", ctx_r3.alignment.searchposition == "right"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.includesearch);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(10, _c17, ctx_r3.alignment.show25 == "right", ctx_r3.alignment.show25 == "left", ctx_r3.alignment.show25 == "left", ctx_r3.alignment.show25 == "right"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.includecount);
} }
function HeaderComponent_div_1_div_2_sml_table_header_count_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "sml-table-header-count", 11);
    ɵngcc0.ɵɵlistener("changevalue", function HeaderComponent_div_1_div_2_sml_table_header_count_2_Template_sml_table_header_count_changevalue_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(3); return ctx_r15.changeRowDisplayCount($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("listValue", ctx_r12.drpObj.drpDataList)("value", ctx_r12.drpObj.selectedValue);
} }
function HeaderComponent_div_1_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function HeaderComponent_div_1_div_2_sml_table_header_search_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "sml-table-header-search", 10);
    ɵngcc0.ɵɵlistener("searchClick", function HeaderComponent_div_1_div_2_sml_table_header_search_6_Template_sml_table_header_search_searchClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(3); return ctx_r17.searchClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("name", ctx_r14.textObj.name)("value", ctx_r14.textObj.value)("placeholder", ctx_r14.textObj.placeholder);
} }
function HeaderComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtemplate(2, HeaderComponent_div_1_div_2_sml_table_header_count_2_Template, 1, 2, "sml-table-header-count", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 7);
    ɵngcc0.ɵɵtemplate(4, HeaderComponent_div_1_div_2_ng_container_4_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 5);
    ɵngcc0.ɵɵtemplate(6, HeaderComponent_div_1_div_2_sml_table_header_search_6_Template, 1, 3, "sml-table-header-search", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(5, _c17, ctx_r4.alignment.show25 == "right", ctx_r4.alignment.show25 == "left", ctx_r4.alignment.show25 == "left", ctx_r4.alignment.show25 == "right"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.includecount);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(10, _c17, ctx_r4.alignment.searchposition == "right", ctx_r4.alignment.searchposition == "left", ctx_r4.alignment.searchposition == "left", ctx_r4.alignment.searchposition == "right"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.includesearch);
} }
function HeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, HeaderComponent_div_1_div_1_Template, 7, 15, "div", 3);
    ɵngcc0.ɵɵtemplate(2, HeaderComponent_div_1_div_2_Template, 7, 15, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.alignment.searchposition != "right" || ctx_r0.alignment.show25 != "right");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.alignment.searchposition == "right" && ctx_r0.alignment.show25 == "right");
} }
function HeaderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c18 = ["*"];
function FooterComponent_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" Showing ", ctx_r3.recordcount, " of ", ctx_r3.totalcount, " ");
} }
function FooterComponent_div_1_div_1_sml_table_footer_pagination_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "sml-table-footer-pagination", 9);
    ɵngcc0.ɵɵlistener("clickPage", function FooterComponent_div_1_div_1_sml_table_footer_pagination_6_Template_sml_table_footer_pagination_clickPage_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(3); return ctx_r5.pageNumberUpdate($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("noPage", ctx_r4.page)("totalRecords", ctx_r4.totalcount)("pageSize", ctx_r4.pagesize);
} }
function FooterComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵtemplate(2, FooterComponent_div_1_div_1_div_2_Template, 2, 2, "div", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 6);
    ɵngcc0.ɵɵprojection(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 4);
    ɵngcc0.ɵɵtemplate(6, FooterComponent_div_1_div_1_sml_table_footer_pagination_6_Template, 1, 3, "sml-table-footer-pagination", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c17, ctx_r1.alignment.showposition == "right", ctx_r1.alignment.showposition == "left", ctx_r1.alignment.showposition == "left", ctx_r1.alignment.showposition == "right"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.includepagecount);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(9, _c17, ctx_r1.alignment.showpaginationposition == "right", ctx_r1.alignment.showpaginationposition == "left", ctx_r1.alignment.showpaginationposition == "left", ctx_r1.alignment.showpaginationposition == "right"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.includepagination && ctx_r1.totalcount > ctx_r1.recordcount && ctx_r1.totalcount > 0);
} }
function FooterComponent_div_1_div_2_sml_table_footer_pagination_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "sml-table-footer-pagination", 9);
    ɵngcc0.ɵɵlistener("clickPage", function FooterComponent_div_1_div_2_sml_table_footer_pagination_2_Template_sml_table_footer_pagination_clickPage_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(3); return ctx_r9.pageNumberUpdate($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("noPage", ctx_r7.page)("totalRecords", ctx_r7.totalcount)("pageSize", ctx_r7.pagesize);
} }
function FooterComponent_div_1_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" Showing ", ctx_r8.recordcount, " of ", ctx_r8.totalcount, " ");
} }
function FooterComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵtemplate(2, FooterComponent_div_1_div_2_sml_table_footer_pagination_2_Template, 1, 3, "sml-table-footer-pagination", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 6);
    ɵngcc0.ɵɵprojection(4, 1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 4);
    ɵngcc0.ɵɵtemplate(6, FooterComponent_div_1_div_2_div_6_Template, 2, 2, "div", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c17, ctx_r2.alignment.showpaginationposition == "right", ctx_r2.alignment.showpaginationposition == "left", ctx_r2.alignment.showpaginationposition == "left", ctx_r2.alignment.showpaginationposition == "right"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.includepagination && ctx_r2.totalcount > ctx_r2.recordcount && ctx_r2.totalcount > 0);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(9, _c17, ctx_r2.alignment.showposition == "right", ctx_r2.alignment.showposition == "left", ctx_r2.alignment.showposition == "left", ctx_r2.alignment.showposition == "right"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.includepagecount);
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, FooterComponent_div_1_div_1_Template, 7, 14, "div", 2);
    ɵngcc0.ɵɵtemplate(2, FooterComponent_div_1_div_2_Template, 7, 14, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.alignment.showposition != "right" || ctx_r0.alignment.showpaginationposition != "right");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.alignment.showposition == "right" && ctx_r0.alignment.showpaginationposition == "right");
} }
const _c19 = ["*", "*"];
const _c20 = function (a0, a1) { return { "active": a0, "disabled": a1 }; };
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 1);
    ɵngcc0.ɵɵelementStart(1, "a", 2);
    ɵngcc0.ɵɵlistener("click", function PaginationComponent_li_4_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r3); const item_r1 = ctx.$implicit; const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.changePage(item_r1); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(2, _c20, item_r1 == ctx_r0.noPage, item_r1 == ctx_r0.noPage));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(item_r1);
} }
function TableBodyComponent_tr_0_td_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    const row_r2 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(row_r2[col_r5]);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_ul_4_span_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵlistener("click", function TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_ul_4_span_1_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); const button_r22 = ɵngcc0.ɵɵnextContext().$implicit; const row_r2 = ɵngcc0.ɵɵnextContext(6).$implicit; const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.clickMethod(button_r22.Action, row_r2); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r22 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r22.Title, " ");
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_ul_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_ul_4_span_1_li_1_Template, 2, 1, "li", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r23 = ctx.index;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", i_r23 != 0);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 14);
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_ul_4_span_1_Template, 2, 1, "span", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵngcc0.ɵɵnextContext(6);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r20.dropdownButtonStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r20.dropdownButtons);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵlistener("click", function TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_Template_div_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r31); const row_r2 = ɵngcc0.ɵɵnextContext(4).$implicit; const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.clickMethod(ctx_r30.dropdownButtons[0].Action, row_r2); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_span_3_Template, 1, 0, "span", 11);
    ɵngcc0.ɵɵtemplate(4, TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_ul_4_Template, 2, 2, "ul", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r15.dropdownButtons[0].Title, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r15.dropdownButtons.length > 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r15.dropdownButtons.length > 1);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵlistener("click", function TableBodyComponent_tr_0_td_1_span_2_div_1_div_2_div_1_Template_div_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r38); const button_r34 = ctx.$implicit; const row_r2 = ɵngcc0.ɵɵnextContext(5).$implicit; const ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.clickMethod(button_r34.Action, row_r2); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r34 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r34.Title, " ");
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_span_2_div_1_div_2_div_1_Template, 3, 1, "div", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r16.dropdownButtons);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_ul_4_span_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵlistener("click", function TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_ul_4_span_1_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r47); const button_r42 = ɵngcc0.ɵɵnextContext().$implicit; const row_r2 = ɵngcc0.ɵɵnextContext(6).$implicit; const ctx_r45 = ɵngcc0.ɵɵnextContext(); return ctx_r45.clickMethod(button_r42.Action, row_r2); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r42 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r42.Title, " ");
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_ul_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_ul_4_span_1_li_1_Template, 2, 1, "li", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r43 = ctx.index;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", i_r43 != 0);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_ul_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 14);
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_ul_4_span_1_Template, 2, 1, "span", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ɵngcc0.ɵɵnextContext(5).$implicit;
    const ctx_r40 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r40.dropdownButtonStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r2.dropdownButtons);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵlistener("click", function TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_Template_div_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r53); const row_r2 = ɵngcc0.ɵɵnextContext(4).$implicit; const ctx_r51 = ɵngcc0.ɵɵnextContext(); return ctx_r51.clickMethod(row_r2.dropdownButtons[0].Action, row_r2); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_span_3_Template, 1, 0, "span", 11);
    ɵngcc0.ɵɵtemplate(4, TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_ul_4_Template, 2, 2, "ul", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ɵngcc0.ɵɵnextContext(4).$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", row_r2.dropdownButtons[0].Title, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", row_r2.dropdownButtons.length > 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", row_r2.dropdownButtons.length > 1);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵlistener("click", function TableBodyComponent_tr_0_td_1_span_2_div_1_div_4_div_1_Template_div_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r60); const button_r56 = ctx.$implicit; const row_r2 = ɵngcc0.ɵɵnextContext(5).$implicit; const ctx_r58 = ɵngcc0.ɵɵnextContext(); return ctx_r58.clickMethod(button_r56.Action, row_r2); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r56 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r56.Title, " ");
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_span_2_div_1_div_4_div_1_Template, 3, 1, "div", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ɵngcc0.ɵɵnextContext(4).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r2.dropdownButtons);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_span_2_div_1_div_1_Template, 5, 3, "div", 8);
    ɵngcc0.ɵɵtemplate(2, TableBodyComponent_tr_0_td_1_span_2_div_1_div_2_Template, 2, 1, "div", 1);
    ɵngcc0.ɵɵtemplate(3, TableBodyComponent_tr_0_td_1_span_2_div_1_div_3_Template, 5, 3, "div", 8);
    ɵngcc0.ɵɵtemplate(4, TableBodyComponent_tr_0_td_1_span_2_div_1_div_4_Template, 2, 1, "div", 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const row_r2 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.dropdownButtonsList == false && ctx_r11.dropdownButtons.length > 0 && !ctx_r11.obj[col_r5].isSingleButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.dropdownButtonsList == false && ctx_r11.dropdownButtons.length > 0 && ctx_r11.obj[col_r5].isSingleButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.dropdownButtonsList == true && !ctx_r11.obj[col_r5].isSingleButton && row_r2.dropdownButtons.length > 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.dropdownButtonsList == true && ctx_r11.obj[col_r5].isSingleButton);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "input", 20);
    ɵngcc0.ɵɵlistener("ngModelChange", function TableBodyComponent_tr_0_td_1_span_2_div_2_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r66); const col_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const row_r2 = ɵngcc0.ɵɵnextContext().$implicit; return (row_r2[col_r5] = $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r68 = ɵngcc0.ɵɵnextContext();
    const index_r3 = ctx_r68.index;
    const row_r2 = ctx_r68.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("name", index_r3);
    ɵngcc0.ɵɵpropertyInterpolate("id", index_r3);
    ɵngcc0.ɵɵproperty("ngModel", row_r2[col_r5]);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "img", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const row_r2 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("src", row_r2[col_r5], ɵngcc0.ɵɵsanitizeUrl);
} }
function TableBodyComponent_tr_0_td_1_span_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r74 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵelementStart(1, "input", 23);
    ɵngcc0.ɵɵlistener("change", function TableBodyComponent_tr_0_td_1_span_2_div_4_Template_input_change_1_listener() { ɵngcc0.ɵɵrestoreView(_r74); const col_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const row_r2 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r72 = ɵngcc0.ɵɵnextContext(); return ctx_r72.textBoxMethod(row_r2, col_r5, "change"); })("keydown", function TableBodyComponent_tr_0_td_1_span_2_div_4_Template_input_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r74); const row_r2 = ɵngcc0.ɵɵnextContext(3).$implicit; const ctx_r76 = ɵngcc0.ɵɵnextContext(); return ctx_r76.textBoxMethod(row_r2, $event, "keydown"); })("focus", function TableBodyComponent_tr_0_td_1_span_2_div_4_Template_input_focus_1_listener() { ɵngcc0.ɵɵrestoreView(_r74); const col_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const row_r2 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r78 = ɵngcc0.ɵɵnextContext(); return ctx_r78.textBoxMethod(row_r2, col_r5, "focus"); })("blur", function TableBodyComponent_tr_0_td_1_span_2_div_4_Template_input_blur_1_listener() { ɵngcc0.ɵɵrestoreView(_r74); const col_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const row_r2 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r81 = ɵngcc0.ɵɵnextContext(); return ctx_r81.textBoxMethod(row_r2, col_r5, "blur"); })("ngModelChange", function TableBodyComponent_tr_0_td_1_span_2_div_4_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r74); const col_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const row_r2 = ɵngcc0.ɵɵnextContext().$implicit; return (row_r2[col_r5] = $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r87 = ɵngcc0.ɵɵnextContext();
    const index_r3 = ctx_r87.index;
    const row_r2 = ctx_r87.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("name", index_r3);
    ɵngcc0.ɵɵpropertyInterpolate("id", index_r3);
    ɵngcc0.ɵɵproperty("ngModel", row_r2[col_r5]);
} }
function TableBodyComponent_tr_0_td_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_span_2_div_1_Template, 5, 4, "div", 1);
    ɵngcc0.ɵɵtemplate(2, TableBodyComponent_tr_0_td_1_span_2_div_2_Template, 2, 3, "div", 1);
    ɵngcc0.ɵɵtemplate(3, TableBodyComponent_tr_0_td_1_span_2_div_3_Template, 2, 1, "div", 1);
    ɵngcc0.ɵɵtemplate(4, TableBodyComponent_tr_0_td_1_span_2_div_4_Template, 2, 3, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.obj[col_r5].isCheckbox && !ctx_r8.obj[col_r5].isImage && !ctx_r8.obj[col_r5].isTextbox);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.obj[col_r5].isCheckbox);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.obj[col_r5].isImage);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.obj[col_r5].isTextbox);
} }
const _c21 = function (a0, a1, a2, a3) { return { "breakWord": a0, "td_over": a1, "pointer-cursor": a2, "dis-none": a3 }; };
function TableBodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r92 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 4);
    ɵngcc0.ɵɵlistener("click", function TableBodyComponent_tr_0_td_1_Template_td_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r92); const col_r5 = ctx.$implicit; const row_r2 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r90 = ɵngcc0.ɵɵnextContext(); return ctx_r90.columnClick(row_r2, col_r5); });
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_span_1_Template, 2, 1, "span", 5);
    ɵngcc0.ɵɵtemplate(2, TableBodyComponent_tr_0_td_1_span_2_Template, 5, 4, "span", 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    const cindex_r6 = ctx.index;
    const index_r3 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("width", ctx_r4.obj[col_r5].width + "px")("max-width", ctx_r4.obj[col_r5].width + "px")("min-width", ctx_r4.obj[col_r5].width + "px")("text-align", ctx_r4.alignment[col_r5].columnDefinatinAlignment);
    ɵngcc0.ɵɵpropertyInterpolate3("id", "td-", ctx_r4.id, "-", index_r3, "-", cindex_r6, "");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(15, _c21, ctx_r4.obj[col_r5].isFixedWidth, !ctx_r4.obj[col_r5].isHtml, ctx_r4.obj[col_r5] == null ? null : ctx_r4.obj[col_r5].isColumnClick, !ctx_r4.obj[col_r5].isDisplay))("ngStyle", ctx_r4.rowstyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.obj[col_r5].isHtml);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.obj[col_r5].isHtml);
} }
function TableBodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 2);
    ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_0_td_1_Template, 3, 20, "td", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r3 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background", index_r3 % 2 == 0 ? ctx_r0.rowstyle.bgEven : ctx_r0.rowstyle.bgOdd);
    ɵngcc0.ɵɵpropertyInterpolate2("id", "tr-", ctx_r0.id, "-", index_r3, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.columns)("ngForTrackBy", ctx_r0.trackByIndex);
} }
function TableBodyComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr");
    ɵngcc0.ɵɵelementStart(1, "td", 24);
    ɵngcc0.ɵɵelement(2, "img", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r1.width + "px")("max-height", ctx_r1.height + "px");
    ɵngcc0.ɵɵattribute("colspan", ctx_r1.columns.length);
} }
function NavbarComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵelementEnd();
} }
const _c22 = [[["sml-navbar-menu"]], [["sml-navbar-menu-profilemenu"]]];
const _c23 = ["sml-navbar-menu", "sml-navbar-menu-profilemenu"];
function MenuComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵelementStart(1, "a", 5);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.menuStyle)("routerLink", ctx_r0.link);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function MenuComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelement(3, "b", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "ul", 9);
    ɵngcc0.ɵɵprojection(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.menuStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.label, " ");
} }
const _c24 = function (a0, a1) { return [a0, a1]; };
function SubmenuComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", ɵngcc0.ɵɵpureFunction2(2, _c24, ctx_r0.link, ctx_r0.param));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function SubmenuComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", ctx_r1.link);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
function SubmenuComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵlistener("click", function SubmenuComponent_a_2_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.menuClick(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.label);
} }
function ProfileSubMenuComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.submenuStyle)("routerLink", ctx_r0.link);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function ProfileSubMenuComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵlistener("click", function ProfileSubMenuComponent_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.clickMenu(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.submenuStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
function MultifileuploadComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" Upload Percent: ", ctx_r0.percentDone, "%");
} }
function MultifileuploadComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵelement(1, "div", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c5, ctx_r1.percentDone));
} }
function MultifileuploadComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵtext(1, "Upload Successful");
    ɵngcc0.ɵɵelementEnd();
} }
function MultifileuploadComponent_ul_21_li_1_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 36);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(data_r5.ChangedBy);
} }
function MultifileuploadComponent_ul_21_li_1_div_1_a_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 37);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(data_r5.ChangedOn);
} }
function MultifileuploadComponent_ul_21_li_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 0);
    ɵngcc0.ɵɵelementStart(1, "a", 28);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, MultifileuploadComponent_ul_21_li_1_div_1_a_3_Template, 2, 1, "a", 29);
    ɵngcc0.ɵɵtemplate(4, MultifileuploadComponent_ul_21_li_1_div_1_a_4_Template, 2, 1, "a", 30);
    ɵngcc0.ɵɵelementStart(5, "div", 31);
    ɵngcc0.ɵɵelementStart(6, "div", 32);
    ɵngcc0.ɵɵlistener("click", function MultifileuploadComponent_ul_21_li_1_div_1_Template_div_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); const data_r5 = ctx_r14.$implicit; const i_r6 = ctx_r14.index; const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.edit(data_r5, i_r6); });
    ɵngcc0.ɵɵelement(7, "img", 33);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 34);
    ɵngcc0.ɵɵlistener("click", function MultifileuploadComponent_ul_21_li_1_div_1_Template_div_click_8_listener() { ɵngcc0.ɵɵrestoreView(_r15); const data_r5 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.DeleteFIles(data_r5.FilesId); });
    ɵngcc0.ɵɵelement(9, "img", 35);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("href", data_r5.FileUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(data_r5.Description);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.moreData == true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.moreData == true);
} }
function MultifileuploadComponent_ul_21_li_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 38);
    ɵngcc0.ɵɵelementStart(1, "input", 39, 40);
    ɵngcc0.ɵɵlistener("ngModelChange", function MultifileuploadComponent_ul_21_li_1_div_2_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(3); return ctx_r20.textdata = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 31);
    ɵngcc0.ɵɵelementStart(4, "div", 32);
    ɵngcc0.ɵɵlistener("click", function MultifileuploadComponent_ul_21_li_1_div_2_Template_div_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r21); const data_r5 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r22 = ɵngcc0.ɵɵnextContext(2); return ctx_r22.updateName(data_r5.FilesId); });
    ɵngcc0.ɵɵelement(5, "img", 41);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 42);
    ɵngcc0.ɵɵlistener("click", function MultifileuploadComponent_ul_21_li_1_div_2_Template_div_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r24 = ɵngcc0.ɵɵnextContext(3); return ctx_r24.esc(); });
    ɵngcc0.ɵɵelement(7, "img", 35);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", data_r5.Description)("ngModel", ctx_r8.textdata);
} }
function MultifileuploadComponent_ul_21_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 25);
    ɵngcc0.ɵɵtemplate(1, MultifileuploadComponent_ul_21_li_1_div_1_Template, 10, 4, "div", 26);
    ɵngcc0.ɵɵtemplate(2, MultifileuploadComponent_ul_21_li_1_div_2_Template, 8, 2, "div", 27);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.contentIndex != i_r6);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.editContent && ctx_r4.contentIndex == i_r6);
} }
function MultifileuploadComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 23);
    ɵngcc0.ɵɵtemplate(1, MultifileuploadComponent_ul_21_li_1_Template, 3, 2, "li", 24);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.datas);
} }
const _c25 = function (a0) { return { "z-index": a0 }; };
function ImagesLightBoxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 28);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.error_message);
} }
function ImagesLightBoxComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" Upload Percent: ", ctx_r1.percentDone, "%");
} }
function ImagesLightBoxComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 29);
    ɵngcc0.ɵɵelement(1, "div", 30);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c5, ctx_r2.percentDone));
} }
function ImagesLightBoxComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 31);
    ɵngcc0.ɵɵtext(1, "Upload Successful");
    ɵngcc0.ɵɵelementEnd();
} }
function ImagesLightBoxComponent_div_20_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "img", 35);
    ɵngcc0.ɵɵlistener("click", function ImagesLightBoxComponent_div_20_span_1_Template_img_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r18); const i_r7 = ɵngcc0.ɵɵnextContext().index; const ctx_r17 = ɵngcc0.ɵɵnextContext(); ctx_r17.openModal(); return ctx_r17.currentSlide(i_r7 + 1); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", img_r6.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImagesLightBoxComponent_div_20_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "a", 36);
    ɵngcc0.ɵɵelement(2, "img", 37);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", img_r6.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImagesLightBoxComponent_div_20_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "a", 36);
    ɵngcc0.ɵɵelement(2, "img", 38);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", img_r6.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImagesLightBoxComponent_div_20_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "a", 36);
    ɵngcc0.ɵɵelement(2, "img", 39);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", img_r6.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImagesLightBoxComponent_div_20_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "a", 36);
    ɵngcc0.ɵɵelement(2, "img", 40);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", img_r6.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImagesLightBoxComponent_div_20_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "a", 36);
    ɵngcc0.ɵɵelement(2, "img", 41);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", img_r6.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImagesLightBoxComponent_div_20_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "a", 36);
    ɵngcc0.ɵɵelement(2, "img", 42);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", img_r6.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImagesLightBoxComponent_div_20_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "a", 36);
    ɵngcc0.ɵɵelement(2, "img", 43);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", img_r6.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImagesLightBoxComponent_div_20_span_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "a", 36);
    ɵngcc0.ɵɵelement(2, "img", 44);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", img_r6.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImagesLightBoxComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 32);
    ɵngcc0.ɵɵtemplate(1, ImagesLightBoxComponent_div_20_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, ImagesLightBoxComponent_div_20_span_2_Template, 3, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(3, ImagesLightBoxComponent_div_20_span_3_Template, 3, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(4, ImagesLightBoxComponent_div_20_span_4_Template, 3, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(5, ImagesLightBoxComponent_div_20_span_5_Template, 3, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(6, ImagesLightBoxComponent_div_20_span_6_Template, 3, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(7, ImagesLightBoxComponent_div_20_span_7_Template, 3, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(8, ImagesLightBoxComponent_div_20_span_8_Template, 3, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(9, ImagesLightBoxComponent_div_20_span_9_Template, 3, 1, "span", 11);
    ɵngcc0.ɵɵelementStart(10, "span", 33);
    ɵngcc0.ɵɵelementStart(11, "i", 34);
    ɵngcc0.ɵɵlistener("click", function ImagesLightBoxComponent_div_20_Template_i_click_11_listener() { ɵngcc0.ɵɵrestoreView(_r30); const img_r6 = ctx.$implicit; const i_r7 = ctx.index; const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.deleteFIles(img_r6.FilesId, i_r7); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r6 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", img_r6.type == "Image");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", img_r6.type == "Text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", img_r6.type == "Pdf");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", img_r6.type == "Audio");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", img_r6.type == "Video");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", img_r6.type == "Doc");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", img_r6.type == "Csv");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", img_r6.type == "Ppt");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", img_r6.type == "Xls");
} }
function ImagesLightBoxComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 45);
    ɵngcc0.ɵɵelementStart(1, "div", 46);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "img", 47);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate2("", i_r32 + 1, "\u00A0/\u00A0", ctx_r5.imagesData.length, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", img_r31.path, ɵngcc0.ɵɵsanitizeUrl);
} }
function ImageUploadBoxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.error_message);
} }
function ImageUploadBoxComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" Upload Percent: ", ctx_r3.percentDone, "%");
} }
function ImageUploadBoxComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelement(1, "div", 11);
    ɵngcc0.ɵɵelementStart(2, "div", 12);
    ɵngcc0.ɵɵelement(3, "div", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c5, ctx_r4.percentDone));
} }
function ImageUploadBoxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelement(1, "i", 5);
    ɵngcc0.ɵɵelementStart(2, "p");
    ɵngcc0.ɵɵtext(3, "Upload Image");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "input", 6);
    ɵngcc0.ɵɵlistener("change", function ImageUploadBoxComponent_div_1_Template_input_change_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.uploadAndProgress($event.target.files); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 7);
    ɵngcc0.ɵɵtemplate(6, ImageUploadBoxComponent_div_1_span_6_Template, 2, 1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, ImageUploadBoxComponent_div_1_div_7_Template, 4, 3, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(6);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.percentDone);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.percentDone);
} }
function ImageUploadBoxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵelement(1, "img", 15);
    ɵngcc0.ɵɵelementStart(2, "span", 16);
    ɵngcc0.ɵɵelementStart(3, "i", 17);
    ɵngcc0.ɵɵlistener("click", function ImageUploadBoxComponent_div_2_Template_i_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.deleteFIles(ctx_r7.imagesData.FilesId); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r2.imagesData.path, ɵngcc0.ɵɵsanitizeUrl);
} }
const _c26 = function (a0, a1, a2, a3) { return { "float-group": a0, "float-groupdd": a1, "signal-line": a2, "float-group-static": a3 }; };
function ListSearchComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "a", 7);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r4.name, ɵngcc0.ɵɵsanitizeHtml);
} }
function ListSearchComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const notFound_r5 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", notFound_r5, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c27 = function (a0) { return { "z-9999": a0 }; };
function MultiSelectComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c27, ctx_r0.isOpen))("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
} }
function MultiSelectComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.label, " ");
} }
const _c28 = function (a0) { return { "width": a0 }; };
function RadioCheckBoxListComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "input", 4);
    ɵngcc0.ɵɵlistener("ngModelChange", function RadioCheckBoxListComponent_div_1_div_1_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const chk_r3 = ctx.$implicit; return chk_r3.isChecked = $event; })("change", function RadioCheckBoxListComponent_div_1_div_1_Template_input_change_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.changeEvent("checkbox"); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "label", 5);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const chk_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate2("id", "", ctx_r2.id, "-", i_r4, "");
    ɵngcc0.ɵɵpropertyInterpolate2("name", "", ctx_r2.id, "-", i_r4, "");
    ɵngcc0.ɵɵproperty("value", chk_r3.isChecked)("ngModel", chk_r3.isChecked);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate2("for", "", ctx_r2.id, "-", i_r4, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(chk_r3.name);
} }
function RadioCheckBoxListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, RadioCheckBoxListComponent_div_1_div_1_Template, 4, 9, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.jsonData);
} }
function RadioCheckBoxListComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "input", 6);
    ɵngcc0.ɵɵlistener("ngModelChange", function RadioCheckBoxListComponent_div_2_div_1_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.selectedValue = $event; })("change", function RadioCheckBoxListComponent_div_2_div_1_Template_input_change_1_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.changeEvent("radio"); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "label", 5);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const rad_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate2("id", "", ctx_r8.id, "-", i_r10, "");
    ɵngcc0.ɵɵpropertyInterpolate("name", ctx_r8.name);
    ɵngcc0.ɵɵproperty("value", rad_r9.value)("ngModel", ctx_r8.selectedValue);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate2("for", "", ctx_r8.id, "-", i_r10, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(rad_r9.name);
} }
function RadioCheckBoxListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, RadioCheckBoxListComponent_div_2_div_1_Template, 4, 8, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.jsonData);
} }
function CropImageUploadComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "img", 26);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r3.imagePath, ɵngcc0.ɵɵsanitizeUrl);
} }
function CropImageUploadComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "img", 27);
    ɵngcc0.ɵɵelementStart(2, "span", 28);
    ɵngcc0.ɵɵtext(3, "Drag & Drop");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function CropImageUploadComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 29);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.percentDone, "% ");
} }
const _c29 = function (a0, a1) { return { "b-2": a0, "b-r": a1 }; };
function CropImageUploadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 21);
    ɵngcc0.ɵɵelementStart(1, "div", 22);
    ɵngcc0.ɵɵtemplate(2, CropImageUploadComponent_div_1_div_2_Template, 2, 1, "div", 23);
    ɵngcc0.ɵɵtemplate(3, CropImageUploadComponent_div_1_div_3_Template, 4, 0, "div", 23);
    ɵngcc0.ɵɵtemplate(4, CropImageUploadComponent_div_1_div_4_Template, 2, 1, "div", 24);
    ɵngcc0.ɵɵelementStart(5, "input", 25);
    ɵngcc0.ɵɵlistener("change", function CropImageUploadComponent_div_1_Template_input_change_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.fileChangeEvent($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c29, ctx_r0.imagePath == "", ctx_r0.type == "circle"))("ngStyle", ɵngcc0.ɵɵpureFunction2(8, _c6, ctx_r0.height, ctx_r0.width));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.imagePath != "" && !ctx_r0.isUploadStart);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.imagePath == "" && !ctx_r0.isUploadStart);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isUploadStart);
} }
const _c30 = function (a0) { return { "b-r": a0 }; };
function CropImageUploadComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 30);
    ɵngcc0.ɵɵelement(1, "img", 31);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c30, ctx_r1.type == "circle"))("src", ctx_r1.croppedImage, ɵngcc0.ɵɵsanitizeUrl)("width", ctx_r1.width)("height", ctx_r1.height);
} }
function CropImageUploadComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 32);
    ɵngcc0.ɵɵelementStart(1, "a", 33);
    ɵngcc0.ɵɵlistener("click", function CropImageUploadComponent_div_3_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.upload(); });
    ɵngcc0.ɵɵtext(2, "Upload");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "a", 34);
    ɵngcc0.ɵɵlistener("click", function CropImageUploadComponent_div_3_Template_a_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.cancleClick(); });
    ɵngcc0.ɵɵtext(4, "Cancel");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function TilesRadioComponent_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p", 3);
    ɵngcc0.ɵɵelementStart(1, "input", 4);
    ɵngcc0.ɵɵlistener("ngModelChange", function TilesRadioComponent_div_0_p_1_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.selectedValue = $event; })("change", function TilesRadioComponent_div_0_p_1_Template_input_change_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.changeEvent(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "label", 5);
    ɵngcc0.ɵɵelement(3, "img", 6);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const rad_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("width", ctx_r1.width);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate2("id", "", ctx_r1.id, "-", i_r3, "");
    ɵngcc0.ɵɵpropertyInterpolate("name", ctx_r1.name);
    ɵngcc0.ɵɵproperty("value", rad_r2.value)("ngModel", ctx_r1.selectedValue);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate2("for", "", ctx_r1.id, "-", i_r3, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("height", ctx_r1.img_height);
    ɵngcc0.ɵɵpropertyInterpolate2("id", "img-", ctx_r1.id, "-", i_r3, "");
    ɵngcc0.ɵɵpropertyInterpolate1("name", "img-", ctx_r1.name, "");
    ɵngcc0.ɵɵproperty("src", rad_r2.url, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", rad_r2.name, " ");
} }
function TilesRadioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, TilesRadioComponent_div_0_p_1_Template, 5, 16, "p", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-color", ctx_r0.background);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.jsonData);
} }
function VideoUploadComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtext(1, "Upload Video ");
    ɵngcc0.ɵɵelementEnd();
} }
function VideoUploadComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 8);
} }
function VideoUploadComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 9);
    ɵngcc0.ɵɵelement(1, "img", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", ctx_r2.videoLink, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r2.thumbUrl, ɵngcc0.ɵɵsanitizeUrl);
} }
function VideoUploadComponent_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 11);
    ɵngcc0.ɵɵlistener("change", function VideoUploadComponent_input_4_Template_input_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.uploadAndProgress($event.target.files); });
    ɵngcc0.ɵɵelementEnd();
} }
function VideoUploadComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2, "Uplaod Done");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function VideoUploadComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtemplate(1, VideoUploadComponent_div_5_div_1_Template, 3, 0, "div", 13);
    ɵngcc0.ɵɵelementStart(2, "div", 14);
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 15);
    ɵngcc0.ɵɵelement(6, "div", 16);
    ɵngcc0.ɵɵelementStart(7, "div", 17);
    ɵngcc0.ɵɵelement(8, "div", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.uploadSuccess);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r4.percentDone, "%");
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c5, ctx_r4.percentDone));
} }
function VideoUploadComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 19);
    ɵngcc0.ɵɵelementStart(1, "i", 20);
    ɵngcc0.ɵɵlistener("click", function VideoUploadComponent_span_6_Template_i_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.deleteFIles(ctx_r9.fileId); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
let AddressComponent = class AddressComponent {
    constructor(http, mapsAPILoader, ngZone) {
        this.http = http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.object = {};
        this.itemObject = {
            address: "",
            address2: "",
            zipcode: "",
            city: "",
            state: ""
        };
        this.addressStr = '';
        this.staticStyle = false;
        this.getvalue = new EventEmitter;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.GenericToken = "bfb8831504564861a864275d85f848f8bfb8831504564861a864275d85f848f8";
        this.database = "MOBILFY";
        this.schema = "static";
        this.procedure = "ZIP_CODES_STATES";
        this.apiURL = 'http://mobilfy.aaadev.info/api/';
        this.body = {};
        this.dropdownList = [];
        this.isRebind = false;
        this.isGoogleOpen = false;
        this.addressObj = {
            street_number: '',
            route: '',
            locality: '',
            administrative_area_level_1: '',
            country: '',
            postal_code: '',
            address2: ''
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getDrpData();
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    for (var i = 0; i < place.address_components.length; i++) {
                        for (var j = 0; j < place.address_components[i].types.length; j++) {
                            if (place.address_components[i].types[j] == "street_number") {
                                this.addressObj.street_number = place.address_components[i].short_name;
                            }
                            if (place.address_components[i].types[j] == "route") {
                                this.addressObj.route = place.address_components[i].long_name;
                            }
                            if (place.address_components[i].types[j] == "locality") {
                                this.addressObj.locality = place.address_components[i].long_name;
                            }
                            if (place.address_components[i].types[j] == "administrative_area_level_1") {
                                this.addressObj.administrative_area_level_1 = place.address_components[i].short_name;
                            }
                            if (place.address_components[i].types[j] == "country") {
                                this.addressObj.country = place.address_components[i].long_name;
                            }
                            if (place.address_components[i].types[j] == "postal_code") {
                                this.addressObj.postal_code = place.address_components[i].short_name;
                            }
                        }
                    }
                    this.copylatitude = place.geometry.location.lat();
                    this.copylongitude = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });
    }
    apply(event) {
        if (this.addressObj.street_number != "") {
            this.itemObject.address = this.addressObj.street_number + " " + this.addressObj.route;
        }
        else {
            this.itemObject.address = this.addressObj.route;
        }
        this.itemObject.zipcode = this.addressObj.postal_code;
        this.itemObject.city = this.addressObj.locality;
        this.itemObject.state = this.addressObj.administrative_area_level_1;
        this.latitude = JSON.parse(JSON.stringify(this.copylatitude));
        this.longitude = JSON.parse(JSON.stringify(this.copylongitude));
        this.getvalue.emit(this.itemObject);
        this.isGoogleOpen = false;
    }
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 12;
                this.getAddress(this.latitude, this.longitude);
            });
        }
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    getLatLan() {
        this.geoCoder.geocode({ 'address': this.addressStr }, (results, status) => {
            this.ngZone.run(() => {
                this.latitude = results[0].geometry.location.lat();
                this.longitude = results[0].geometry.location.lng();
                for (var i = 0; i < results[0].address_components.length; i++) {
                    for (var j = 0; j < results[0].address_components[i].types.length; j++) {
                        if (results[0].address_components[i].types[j] == "street_number") {
                            this.addressObj.street_number = results[0].address_components[i].short_name;
                        }
                        if (results[0].address_components[i].types[j] == "route") {
                            this.addressObj.route = results[0].address_components[i].long_name;
                        }
                        if (results[0].address_components[i].types[j] == "locality") {
                            this.addressObj.locality = results[0].address_components[i].long_name;
                        }
                        if (results[0].address_components[i].types[j] == "administrative_area_level_1") {
                            this.addressObj.administrative_area_level_1 = results[0].address_components[i].short_name;
                        }
                        if (results[0].address_components[i].types[j] == "country") {
                            this.addressObj.country = results[0].address_components[i].long_name;
                        }
                        if (results[0].address_components[i].types[j] == "postal_code") {
                            this.addressObj.postal_code = results[0].address_components[i].short_name;
                        }
                    }
                }
            });
        });
    }
    openGoogle() {
        this.isGoogleOpen = true;
    }
    closeGoogle(event) {
        this.isGoogleOpen = false;
    }
    getDrpData() {
        const url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, this.body, this.httpOptionJSON).subscribe(res => {
            if (res) {
                let temp = [];
                let data;
                data = res;
                for (let i = 0; i < data.length; i++) {
                    var nType = {
                        id: data[i].StateCode,
                        name: data[i].StateCode
                    };
                    temp.push(nType);
                }
                this.dropdownList = temp;
                this.isRebind = true;
                setTimeout(() => {
                    this.isRebind = false;
                });
            }
        }, error => {
            this.dropdownList = [];
        });
    }
};
AddressComponent.ɵfac = function AddressComponent_Factory(t) { return new (t || AddressComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.MapsAPILoader), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
AddressComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AddressComponent, selectors: [["sml-address"]], viewQuery: function AddressComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.searchElementRef = _t.first);
    } }, inputs: { object: "object", itemObject: "itemObject", addressStr: "addressStr", staticStyle: "staticStyle", GenericToken: "GenericToken", database: "database", schema: "schema", procedure: "procedure", apiURL: "apiURL", body: "body", switchStyle: "switchStyle", labelStyle: "labelStyle", borderStyle: "borderStyle", valueStyle: "valueStyle", selectValueStyle: "selectValueStyle", buttonStyle: "buttonStyle", lableBoxStyle: "lableBoxStyle", borderBoxStyle: "borderBoxStyle", mapBoxStyle: "mapBoxStyle" }, outputs: { getvalue: "getvalue" }, decls: 23, vars: 78, consts: [[1, "row"], [1, "col-md-6", 3, "ngClass"], [3, "label", "name", "value", "maskType", "switchStyle", "staticStyle", "borderStyle", "valueStyle", "getvalue"], [1, "col-md-4", "pl-0", "pr-0", 3, "ngClass"], [1, "col-md-2", "pl-0", "text-right", 3, "ngClass"], ["src", "assets/images/goole_map.png", "id", "googleMapImages", "name", "googlemapimages", "width", "90%", "height", "44", 2, "cursor", "pointer", 3, "click"], [1, "col-md-8", "pr-0", 3, "ngClass"], ["type", "text", "id", "autocomplete", "placeholder", "Search address", "name", "autocomplete", 1, "form-control"], ["search", ""], [1, "col-md-2", "text-right", "pr-0", 3, "ngClass"], [3, "label", "btnCl", "buttonStyle", "buttonClick"], [1, "col-md-2", "text-right", 3, "ngClass"], [1, "row", "mt-2", 3, "ngClass"], [1, "col-md-3"], [1, "col-md-5", "pl-0"], [1, "col-md-4", "pl-0"], [3, "label", "listValue", "value", "staticStyle", "borderStyle", "valueStyle", "switchStyle", "selectvalue"], ["class", "addressField mt-2", 3, "ngStyle", 4, "ngIf"], ["class", "mapField", 3, "ngStyle", 4, "ngIf"], [1, "addressField", "mt-2", 3, "ngStyle"], [1, "col-md-12", "pl-4"], [1, "mb-0", 3, "ngStyle"], [1, "pr-1", "mb-0", 3, "ngStyle"], [1, "mapField", 3, "ngStyle"], [3, "latitude", "longitude"]], template: function AddressComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "sml-input-text", 2);
        ɵngcc0.ɵɵlistener("getvalue", function AddressComponent_Template_sml_input_text_getvalue_2_listener($event) { return ctx.itemObject.address = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "sml-input-text", 2);
        ɵngcc0.ɵɵlistener("getvalue", function AddressComponent_Template_sml_input_text_getvalue_4_listener($event) { return ctx.itemObject.address2 = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "img", 5);
        ɵngcc0.ɵɵlistener("click", function AddressComponent_Template_img_click_6_listener() { return ctx.openGoogle(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 6);
        ɵngcc0.ɵɵelement(8, "input", 7, 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 9);
        ɵngcc0.ɵɵelementStart(11, "sml-button", 10);
        ɵngcc0.ɵɵlistener("buttonClick", function AddressComponent_Template_sml_button_buttonClick_11_listener($event) { return ctx.apply($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 11);
        ɵngcc0.ɵɵelementStart(13, "sml-button", 10);
        ɵngcc0.ɵɵlistener("buttonClick", function AddressComponent_Template_sml_button_buttonClick_13_listener($event) { return ctx.closeGoogle($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 12);
        ɵngcc0.ɵɵelementStart(15, "div", 13);
        ɵngcc0.ɵɵelementStart(16, "sml-input-text", 2);
        ɵngcc0.ɵɵlistener("getvalue", function AddressComponent_Template_sml_input_text_getvalue_16_listener($event) { return ctx.itemObject.zipcode = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(17, "div", 14);
        ɵngcc0.ɵɵelementStart(18, "sml-input-text", 2);
        ɵngcc0.ɵɵlistener("getvalue", function AddressComponent_Template_sml_input_text_getvalue_18_listener($event) { return ctx.itemObject.city = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "div", 15);
        ɵngcc0.ɵɵelementStart(20, "sml-input-select", 16);
        ɵngcc0.ɵɵlistener("selectvalue", function AddressComponent_Template_sml_input_select_selectvalue_20_listener($event) { return ctx.itemObject.state = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(21, AddressComponent_div_21_Template, 17, 11, "div", 17);
        ɵngcc0.ɵɵtemplate(22, AddressComponent_div_22_Template, 3, 7, "div", 18);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(64, _c1, ctx.isGoogleOpen));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleMap(ctx.labelStyle);
        ɵngcc0.ɵɵproperty("label", "Address")("name", "address")("value", ctx.itemObject.address)("maskType", "")("switchStyle", ctx.switchStyle)("staticStyle", "true")("borderStyle", ctx.borderStyle)("valueStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(66, _c1, ctx.isGoogleOpen));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleMap(ctx.labelStyle);
        ɵngcc0.ɵɵproperty("label", "Address (2nd line)")("name", "address2")("value", ctx.itemObject.address2)("maskType", "")("switchStyle", ctx.switchStyle)("staticStyle", "true")("borderStyle", ctx.borderStyle)("valueStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(68, _c1, ctx.isGoogleOpen));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(70, _c1, !ctx.isGoogleOpen));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(72, _c1, !ctx.isGoogleOpen));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("label", "Apply")("btnCl", "btn-primary")("buttonStyle", ctx.buttonStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(74, _c1, !ctx.isGoogleOpen));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("label", "Close")("btnCl", "btn-primary")("buttonStyle", ctx.buttonStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(76, _c1, ctx.isGoogleOpen));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleMap(ctx.labelStyle);
        ɵngcc0.ɵɵproperty("label", "Zip Code")("name", "zipcode")("value", ctx.itemObject.zipcode)("maskType", "")("switchStyle", ctx.switchStyle)("staticStyle", "true")("borderStyle", ctx.borderStyle)("valueStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleMap(ctx.labelStyle);
        ɵngcc0.ɵɵproperty("label", "City")("name", "city")("value", ctx.itemObject.city)("maskType", "")("switchStyle", ctx.switchStyle)("staticStyle", "true")("borderStyle", ctx.borderStyle)("valueStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleMap(ctx.labelStyle);
        ɵngcc0.ɵɵproperty("label", "State")("listValue", ctx.dropdownList)("value", ctx.itemObject.state)("staticStyle", "true")("borderStyle", ctx.borderStyle)("valueStyle", ctx.selectValueStyle)("switchStyle", ctx.switchStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.object == null ? null : ctx.object.isShowAddressBox);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.object == null ? null : ctx.object.isShowMapBox);
    } }, directives: function () { return [ɵngcc3.NgClass, ɵngcc4.TextComponent, ButtonComponent, ɵngcc4.SelectComponent, ɵngcc3.NgIf, ɵngcc3.NgStyle, ɵngcc2.AgmMap, ɵngcc2.AgmMarker]; }, styles: [".addressField[_ngcontent-%COMP%]{width:100%;min-height:85px;height:auto;border:1px solid lightgray;padding-top:5px;}\n  .mapField[_ngcontent-%COMP%]{width:100%;min-height:370px;border:1px solid lightgray;margin-top:14px;overflow:hidden;}\n  .pad-l-12[_ngcontent-%COMP%]{padding-left:12px !important;}\n  .pad-l-0[_ngcontent-%COMP%]{padding-left:0px !important;}\n   agm-map[_ngcontent-%COMP%]{height:370px;}\n  .hide-div[_ngcontent-%COMP%]{display:none;}\n   #autocomplete[_ngcontent-%COMP%]{height: 45px !important;border-radius: 4px;}\n   .col-md-2[_ngcontent-%COMP%]{padding-left: 3px !important;}\n   .col-md-6[_ngcontent-%COMP%] {padding-right: 7px !important;}\n   .col-md-3[_ngcontent-%COMP%] {padding-right: 7px !important;}\n   .col-md-5[_ngcontent-%COMP%] {padding-right: 7px !important;}\n   #autocomplete[_ngcontent-%COMP%]:focus{outline: none;box-shadow: none;border-color: lightgray; }"] });
AddressComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: MapsAPILoader },
    { type: NgZone }
];
__decorate([
    ViewChild('search')
], AddressComponent.prototype, "searchElementRef", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "object", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "itemObject", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "addressStr", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "selectValueStyle", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "buttonStyle", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "lableBoxStyle", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "borderBoxStyle", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "mapBoxStyle", void 0);
__decorate([
    Output()
], AddressComponent.prototype, "getvalue", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "database", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "schema", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "procedure", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], AddressComponent.prototype, "body", void 0);

let ButtonComponent = class ButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.buttonClick = new EventEmitter;
    }
    ngOnInit() {
    }
    ngOnChanges(event) {
        if (event.buttonStyle != undefined && event.buttonStyle.currentValue != undefined) {
            let css = event.buttonStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--focus-color', css['focus-color']);
            this.elementRef.nativeElement.style.setProperty('--focus-spread', css['focus-spread']);
            this.elementRef.nativeElement.style.setProperty('--focus-blur', css['focus-blur']);
            this.elementRef.nativeElement.style.setProperty('--focus-x', css['focus-x']);
            this.elementRef.nativeElement.style.setProperty('--focus-y', css['focus-y']);
        }
    }
    clickEvent() {
        this.buttonClick.emit();
    }
};
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["sml-button"]], inputs: { icon: "icon", label: "label", btnCl: "btnCl", iconCl: "iconCl", buttonStyle: "buttonStyle" }, outputs: { buttonClick: "buttonClick" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 4, consts: [["type", "button", 1, "btn", 3, "ngClass", "ngStyle", "click"], ["class", "fas", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "fas", 3, "ngClass"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.clickEvent(); });
        ɵngcc0.ɵɵtemplate(1, ButtonComponent_i_1_Template, 1, 1, "i", 1);
        ɵngcc0.ɵɵtemplate(2, ButtonComponent_span_2_Template, 2, 1, "span", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.btnCl)("ngStyle", ctx.buttonStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.icon);
    } }, directives: [ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc3.NgIf], styles: ["[_nghost-%COMP%] {\n          --focus-color: #82B056;\n      --focus-spread: 0px;\n      --focus-blur: 0px;\n      --focus-x: 0px;\n      --focus-y: 0px;\n  }\n  \n  .btn.btn-sm[_ngcontent-%COMP%]{\n      width: 90% !important;\n      padding: 8px 20px !important;\n      font-size: 14px; margin: 0 5px;\n  }\n  .btn[_ngcontent-%COMP%]:focus {\n      outline: 0;\n      box-shadow: var(--focus-x) var(--focus-y) var(--focus-blur) var(--focus-spread) var(--focus-color) !important;\n  }"] });
ButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ButtonComponent.prototype, "icon", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "label", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "btnCl", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "iconCl", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "buttonStyle", void 0);
__decorate([
    Output()
], ButtonComponent.prototype, "buttonClick", void 0);

let ButtonModule = class ButtonModule {
};
ButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            CommonModule
        ]] });

let AddressModule = class AddressModule {
};
AddressModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AddressModule });
AddressModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AddressModule_Factory(t) { return new (t || AddressModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            NgSelectModule,
            ButtonModule,
            TextModule,
            SelectModule,
            AgmCoreModule.forRoot({
                apiKey: "AIzaSyAqOJ907gt1wO7d96gBY3rXhXpK-gi4oPw",
                libraries: ["places"]
            }),
        ]] });

let AlertComponent = class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
    success() {
        Swal.fire({
            title: 'Done!',
            text: 'This is not implemented yet :/',
            type: 'success'
        });
    }
    error() {
        Swal.fire({
            title: 'Oops...',
            text: 'Something went wrong!',
            type: 'error',
        });
    }
    info() {
        Swal.fire({
            title: 'Done!',
            text: 'This is not implemented yet :/',
            type: 'info'
        });
    }
    warning() {
        Swal.fire({
            title: 'Done!',
            imageUrl: 'https://unsplash.it/400/200',
            text: 'This is not implemented yet :/',
            type: 'warning'
        });
    }
    doubt() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
    delete() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
};
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["sml-alert"]], decls: 13, vars: 0, consts: [[1, "d-flex", "justify-content-between"], [1, "btn", "btn-success", "btn-sm", "w-100", "mx-1", 3, "click"], [1, "btn", "btn-danger", "btn-sm", "w-100", "mx-1", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "w-100", "mx-1", 3, "click"], [1, "btn", "btn-info", "btn-sm", "w-100", "mx-1", 3, "click"], [1, "btn", "btn-warning", "btn-sm", "w-100", "mx-1", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1);
        ɵngcc0.ɵɵlistener("click", function AlertComponent_Template_button_click_1_listener() { return ctx.success(); });
        ɵngcc0.ɵɵtext(2, " Success\n");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 2);
        ɵngcc0.ɵɵlistener("click", function AlertComponent_Template_button_click_3_listener() { return ctx.error(); });
        ɵngcc0.ɵɵtext(4, " Error\n");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "button", 3);
        ɵngcc0.ɵɵlistener("click", function AlertComponent_Template_button_click_5_listener() { return ctx.info(); });
        ɵngcc0.ɵɵtext(6, "\nInfo\n");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "button", 4);
        ɵngcc0.ɵɵlistener("click", function AlertComponent_Template_button_click_7_listener() { return ctx.doubt(); });
        ɵngcc0.ɵɵtext(8, " Doubt\n");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "button", 5);
        ɵngcc0.ɵɵlistener("click", function AlertComponent_Template_button_click_9_listener() { return ctx.warning(); });
        ɵngcc0.ɵɵtext(10, " Warning\n");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "button", 6);
        ɵngcc0.ɵɵlistener("click", function AlertComponent_Template_button_click_11_listener() { return ctx.delete(); });
        ɵngcc0.ɵɵtext(12, "Delete File");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });

let AlertModule = class AlertModule {
};
AlertModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AlertModule });
AlertModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[
            CommonModule,
            SweetAlert2Module.forRoot(),
        ]] });

const moment = moment_;
let NotesComponent = class NotesComponent {
    constructor(http) {
        this.http = http;
        this.noteId = "0";
        this.noteData = [];
        this.apiURL = 'http://apinext.aaadev.info/apinext/';
        this.fileurl = 'http://preview.abacuscrm.net/media/';
        this.GenericToken = "";
        this.dataBase = "APPS";
        this.spList = "core/NOTE_ListLog";
        this.clickMethod = new EventEmitter();
        this.myInput = { value: '' };
        this.NoteObject = {
            NoteId: 0,
            Notes: "",
            ChangedBy: ""
        };
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.User = JSON.parse(localStorage.getItem('Session.User'));
    }
    ngOnInit() {
        this.getNotes();
    }
    getNotes() {
        if (this.noteId == '0') {
            return false;
        }
        this.noteData = [];
        const url = this.apiURL + "Data/Exec/" + this.dataBase + "/" + this.spList + "?api_key=" + this.GenericToken;
        const body = {
            NoteId: this.noteId
        };
        this.http.post(url, body, this.httpOptionJSON).subscribe((data) => {
            if (data) {
                let temp = [];
                for (let i = 0; i < data.length; i++) {
                    let nType = {
                        user: data[i].ChangedBy == '' ? (this.User.FirstName + ' ' + this.User.LastName) : data[i].ChangedByComplete,
                        userUrl: this.fileurl + data[i].FileUrl,
                        note: data[i].Notes,
                        date: this.format(data[i].ChangedOn, 'MM/DD/YYYY'),
                        time: this.format(data[i].ChangedOn, 'HH:MM:SS A'),
                        read: data[i].IsAction == "True" ? 'unread' : 'read',
                    };
                    temp.push(nType);
                }
                this.noteData = this.groupBy(temp);
            }
        });
    }
    saveNote() {
        if (this.noteId != "0") {
            this.NoteObject.ChangedBy = this.User.UserName;
            this.NoteObject.NoteId = this.noteId;
            const url = this.apiURL + "Data/Exec/" + this.dataBase + "/core/NOTE_SaveLog?api_key=" + this.GenericToken;
            this.http.post(url, this.NoteObject, this.httpOptionJSON).subscribe((note) => {
                this.NoteObject.Notes = "";
                this.getNotes();
            }, (error) => {
                alert(error);
            });
        }
    }
    onInput(event) {
        let code = event.keyCode;
        let note = event.target.value;
        if (code == 13 && note != '') {
            this.NoteObject.Notes = note;
            this.clickMethod.emit({ note });
            this.saveNote();
            event.target.value = '';
        }
    }
    onInput1(event) {
        let note = event;
        this.NoteObject.Notes = note;
        this.clickMethod.emit({ note });
        this.saveNote();
        this.myInput = '';
        event = '';
    }
    isToday(date) {
        if (moment(date).format('MM/DD/YYYY') == moment(new Date()).format('MM/DD/YYYY')) {
            return 'Today';
        }
        return date;
    }
    groupBy(data) {
        let groupByDate = {};
        let groupByarray = [];
        data.forEach(function (a) {
            groupByDate[a.date] = groupByDate[a.date] || [];
            groupByDate[a.date].push({
                user: a.user,
                userUrl: a.userUrl,
                note: a.note,
                date: a.date,
                time: a.time,
                read: a.read
            });
        });
        for (var key in groupByDate) {
            let nType = {
                date: key,
                noteData: groupByDate[key]
            };
            groupByarray.push(nType);
        }
        return groupByarray;
    }
    format(data, format) {
        return moment(new Date(data)).format(format);
    }
};
NotesComponent.ɵfac = function NotesComponent_Factory(t) { return new (t || NotesComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient)); };
NotesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NotesComponent, selectors: [["sml-notes"]], inputs: { noteId: "noteId", noteData: "noteData", apiURL: "apiURL", fileurl: "fileurl", GenericToken: "GenericToken", dataBase: "dataBase", spList: "spList" }, outputs: { clickMethod: "clickMethod" }, decls: 19, vars: 5, consts: [[1, "notesWrapper"], [1, "head"], [1, "notesLayout"], [1, "notesTextType"], [1, "noteTextContainer"], ["rows", "3", "name", "chat", 1, "noteTexarea", 3, "ngModel", "ngModelChange", "keyup"], ["textarea", ""], [1, "label", 3, "ngClass"], [1, "postBtn", 3, "click"], [1, "divider"], ["src", "assets/send.png", 1, "sendimg"], [1, "hr"], [1, "noteContainer"], [1, "notesHistory"], [4, "ngFor", "ngForOf"], [1, "date"], [1, "notesList"], [3, "class", 4, "ngFor", "ngForOf"], [1, "userImg"], ["onerror", "this.onerror=null; this.src='assets/usericon.png'", 1, "avatar", 3, "src"], [1, "notesInfo"], [1, "noteinfohead"], [1, "notesNameTiming"], [1, "noteTime"], [1, "hrpoint"], [1, "status"], [1, "notesStatus"], [1, "notesMessage"]], template: function NotesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "h4", 1);
        ɵngcc0.ɵɵtext(2, "Notes");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "textarea", 5, 6);
        ɵngcc0.ɵɵlistener("ngModelChange", function NotesComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.myInput.value = $event; })("keyup", function NotesComponent_Template_textarea_keyup_6_listener($event) { return ctx.onInput($event); });
        ɵngcc0.ɵɵtext(8, "                ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "label", 7);
        ɵngcc0.ɵɵtext(10, "Enter your note here");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "a", 8);
        ɵngcc0.ɵɵlistener("click", function NotesComponent_Template_a_click_11_listener() { ɵngcc0.ɵɵrestoreView(_r5); const _r0 = ɵngcc0.ɵɵreference(7); return ctx.onInput1(_r0.value); });
        ɵngcc0.ɵɵelementStart(12, "span", 9);
        ɵngcc0.ɵɵtext(13, "|");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(14, "img", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(15, "div", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "div", 12);
        ɵngcc0.ɵɵelementStart(17, "div", 13);
        ɵngcc0.ɵɵtemplate(18, NotesComponent_div_18_Template, 5, 2, "div", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngModel", ctx.myInput.value);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c2, ctx.myInput.value != ""));
        ɵngcc0.ɵɵadvance(9);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.noteData);
    } }, directives: [ɵngcc6.DefaultValueAccessor, ɵngcc6.NgControlStatus, ɵngcc6.NgModel, ɵngcc3.NgClass, ɵngcc3.NgForOf], styles: ["ul[_ngcontent-%COMP%] { margin: 0; padding: 0 }\nli[_ngcontent-%COMP%] { list-style: none; }\n.mylist[_ngcontent-%COMP%]{width: 100%; display: inline-block;}\n.fz12[_ngcontent-%COMP%] { font-size: 12px;  }\n.fz14[_ngcontent-%COMP%] { font-size: 14px;  }\n.fz16[_ngcontent-%COMP%] { font-size: 16px;  }\n.mgb5[_ngcontent-%COMP%]{margin-bottom: 5px;}\n.mgt5[_ngcontent-%COMP%]{margin-top: 5px;}\n.mgt10[_ngcontent-%COMP%]{margin-top: 10px;}\n.containerComponent[_ngcontent-%COMP%]{width: 100%; float: left;  padding: 15px; border:1px solid #f5f5f5;}\n.full-w[_ngcontent-%COMP%]{width: 100%; display: inline-block;}\n.mychatsystem[_ngcontent-%COMP%]{margin: 0; padding: 0; width: 100%; float: left;}\n.noteInput[_ngcontent-%COMP%]{resize: none; outline: none; }\n.mychatsystem[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style: none;}\n.noteInput[_ngcontent-%COMP%]{outline: none !important; box-shadow: none;}\n.d-flex[_ngcontent-%COMP%]{display: flex;}\n.justify-content-between[_ngcontent-%COMP%]{justify-content: space-between;}\n.uv_dp[_ngcontent-%COMP%] { height: 50px; width: 55px; background-color: #f7f7f7; display: inline-block; }\n.bg_list[_ngcontent-%COMP%] { background-color: #ffd5d5; border-radius: 7px; padding: 7px; font-size: 13px; border-top-left-radius: 0; float: left;}.dp_wrapper[_ngcontent-%COMP%] { width:100%; display: flex; }\n.uv_details[_ngcontent-%COMP%] { width: 90%; float: right;  position: relative; top: -27px;}\n.chat_name[_ngcontent-%COMP%]{font-size: 14px; font-weight: normal; color: #a0a0a0; font-family: sans-serif;}\n.chat_date[_ngcontent-%COMP%]{font-size: 12px; color: #9e9e9e; margin-left:0; margin-top: 2px; display: inline-block; font-family: sans-serif;}\n.adddata[_ngcontent-%COMP%]{width: 100%; display: inline-block; padding: 3px; resize: none; border-radius: 3px; border: 1px solid #e6e6e6; font-size: 13px; overflow: hidden; height: 60px;}\n.mylist[_ngcontent-%COMP%]{float: left; width: 100%;}\n.username[_ngcontent-%COMP%]{margin-left: 11px; width: 100%; justify-content: flex-end; align-items: flex-end; flex-direction: column;}\n.rightside[_ngcontent-%COMP%]   .uv_details[_ngcontent-%COMP%]{width: 90%; float: left;  position: relative; top: -27px; text-align: right; align-items: flex-end}\n.secondPersion[_ngcontent-%COMP%]{display: flex; align-items: flex-end; width: 100%;}\n.fright[_ngcontent-%COMP%]{display: flex;   width: 100%;   justify-content: flex-end;}\n.meui[_ngcontent-%COMP%]{margin-right: 13px;}\n.contenttype[_ngcontent-%COMP%]{margin-right: 18px;}\n.topright[_ngcontent-%COMP%]{ border-radius: 7px; border-top-right-radius: 0; background-color: #d9fbda;}\n.usernameFirst[_ngcontent-%COMP%]{margin-left: 14px;}\n.d_line[_ngcontent-%COMP%]{ position: absolute; width: 100%; height: 1px; background-color: #e6e6e6; top: 56%;   z-index: -1; transform: translateY(-50%);} \n.d_text[_ngcontent-%COMP%]{ font-weight: 400 !important;  color: #000;} \n.usericon[_ngcontent-%COMP%]{width: 50px;}\n.notesHistory[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 8px;\n    background-color: #fbfbfb;\n}\n.notesHistory[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    width: 3px;\n    background-color: #f0f0f0;\n    border-left: 3px solid #fbfbfb;\n    border-right: 3px solid #fbfbfb\n}\n\n.notesHistory[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-color: #e1e2e2;\n    border-radius: 30px;\n}\n\nbody[_ngcontent-%COMP%] {\n    font-family: Arial, Helvetica, sans-serif\n}\n\n.notesWrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 460px;\n    margin: 0 auto;\n}\n\n.head[_ngcontent-%COMP%] {\n    background-color: #f3f3f3;\n    color: #777;\n    padding: 8px 15px;\n    border-radius: 3px;\n}\n\n.notesLayout[_ngcontent-%COMP%] {\n    background-color: #fbfbfb;\n}\n\n.notesTextType[_ngcontent-%COMP%] {\n    padding: 12px 30px;\n}\n\n.noteTexarea[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 0.25em;\n    resize: none;\n    border-color: #d6d6d6;\n    padding: 18px 45px 15px 12px;\n    font-size: 14px\n}\n\n.noteTexarea[_ngcontent-%COMP%]:focus {\n    border-color: #8e8e8e;\n    outline: none;\n}\n.noteTexarea[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%]{\n    top:7px; font-size: 11px;\n    opacity: 0;\n}\n.op[_ngcontent-%COMP%]{\n    opacity: 0;\n}\n\n.noteTextContainer[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    margin-bottom: 8px\n}\n\n.label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 12px;\n    left: 13px;\n    margin-bottom: 0;\n    font-size: 14px;\n    color: #9d9d9dbd;\n    transition: ease-in-out 0.2s;\n}\n\n.postBtn[_ngcontent-%COMP%] {\n    display: inline-flex;\n    position: absolute;\n    bottom: 15px;\n    right: 12px;\n    text-decoration: none;\n    align-items: center;\n}\n\n.divider[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #d6d6d6;\n}\n\n.hr[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n    background-color: #cddfbd;\n}\n\n.date[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #abc98e;\n    font-size: 12px;\n    padding: 8px 0\n}\n\n.noteContainer[_ngcontent-%COMP%] {\n    padding: 0 10px;\n}\n\n.notesHistory[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: 400px;\n    padding: 0 20px;\n}\n\n.notesList[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n}\n\n.notesList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 8px 12px;\n    border-radius: 4px;\n}\n\n.notesList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 12px;\n}\n\n.notesList[_ngcontent-%COMP%]   li.unread[_ngcontent-%COMP%] {\n    background-color: #fdeaeb;\n}\n\n.notesList[_ngcontent-%COMP%]   li.read[_ngcontent-%COMP%] {\n    background-color: #fbfbfb;\n}\n\n.userImg[_ngcontent-%COMP%] {\n    width: 40px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n    border-radius: 100%;\n    display: inline-block;\n    overflow: hidden;\n    background-color: #fff;\n}\n\n.notesNameTiming[_ngcontent-%COMP%] {\n    font-size: 11px;\n    width: 370px;\n}\n\n.noteTime[_ngcontent-%COMP%] {\n    color: #90b264;\n}\n\n.notesInfo[_ngcontent-%COMP%] {\n    width: calc(100% - 40px);\n    padding: 4px 0 4px 4px;\n}\n\n.noteinfohead[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    margin-bottom:3px\n}\n\n.hrpoint[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n    background-color: #c5ced5;\n    display: inline-block\n}\n\n.status[_ngcontent-%COMP%] {\n    width: 50px;\n    text-align: right;\n}\n\n.unread[_ngcontent-%COMP%]   .notesStatus[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n    background-color: #6da23a;\n    display: inline-block;\n    border-radius: 100%;\n}\n\n.read[_ngcontent-%COMP%]   .notesStatus[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n    background-color: #c5ced5;\n    display: inline-block;\n    border-radius: 100%;\n}\n\n.notesMessage[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin: 0;\n}\n\n.sendimg[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-left: 4px;\n    position: relative;\n    top: 3px;\n}"] });
NotesComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], NotesComponent.prototype, "noteId", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "noteData", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "dataBase", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "spList", void 0);
__decorate([
    Output()
], NotesComponent.prototype, "clickMethod", void 0);

let NotesModule = class NotesModule {
};
NotesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NotesModule });
NotesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NotesModule_Factory(t) { return new (t || NotesModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });

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
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["sml-breadcrumb"]], viewQuery: function BreadcrumbComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(SwiperComponent, true);
        ɵngcc0.ɵɵviewQuery(SwiperDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.componentRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.directiveRef = _t.first);
    } }, inputs: { StatusNotes: "StatusNotes", buttons: "buttons", disable: "disable" }, outputs: { actionClick: "actionClick", statusClick: "statusClick" }, decls: 2, vars: 2, consts: [["class", "mt-3", 4, "ngIf"], [1, "mt-3"], [1, "w-100", "d-flex", "ng-star-inserted", "align-items-center", 2, "padding-right", "0px"], ["ngFor", "", 3, "ngForOf"], ["class", "fropdown", 4, "ngIf"], [1, "vatOuter", 3, "ngClass", "click"], [1, "vatMiddle"], [1, "checkMark"], [1, "fas", "fa-check-circle"], ["class", "vatArrowR", 4, "ngIf"], [1, "vatArrowR"], [1, "fas", "fa-chevron-right"], [1, "fropdown"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-default", "dropdown-toggle", 3, "ngClass"], [2, "width", "80%"], [1, "dropdown-toggle-after"], ["src", "./assets/Arrowcombobox.png"], [1, "dropdown-menu"], ["class", "dropdown-item", "href", "javascript:void(0)", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "swiperCustom", "d-flex", "align-items-center"], [1, "swiper_wrap", "position-relative"], [3, "config", "indexChange", 4, "ngIf"], [3, "config", "indexChange"], ["swiperComp", ""]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, BreadcrumbComponent_div_0_Template, 4, 2, "div", 0);
        ɵngcc0.ɵɵtemplate(1, BreadcrumbComponent_div_1_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.StatusNotes.length <= 5);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.StatusNotes.length > 5);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc3.NgClass, ɵngcc7.SwiperComponent], styles: [".vatFirstCards[_ngcontent-%COMP%] {\n    background-color: #f2f2f2;\n    color: #808184\n}\n\n.vatOuter[_ngcontent-%COMP%] {\n    display: table;\n    \n    border-radius: 4px;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 150px;\n}\n\n.vatMiddle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    font-size: 14px;\n    align-items: center;\n    padding: 10px 6px;\n    line-height: 1.4;\n    min-height: 57px;\n}\n\n.vatArrowR[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    margin: 0px 8px !important;\n    color: #bdbec0;\n}\n\n.swiperCustom[_ngcontent-%COMP%]   .vatArrowR[_ngcontent-%COMP%] {\n    width: auto !important\n}\n\n.swiperCustom[_ngcontent-%COMP%]   .vatOuter[_ngcontent-%COMP%] {\n    width: 170px !important\n}\n\n.resultGreen[_ngcontent-%COMP%] {\n    background-color: #8ec63f;\n    color: #fff\n}\n\n.textGreen[_ngcontent-%COMP%] {\n    color: #6da23a;\n    font-size: 10px;\n}\n\n.bg-gradient-blue[_ngcontent-%COMP%] {\n    background: rgb(81, 136, 218);\n    background: linear-gradient(135deg, rgba(81, 136, 218, 1) 0%, rgba(52, 135, 226, 1) 100%) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5188da', endColorstr='#3487e2', GradientType=1) !important;\n}\n\n\n    .checkMark[_ngcontent-%COMP%] {\n        font-size: 16px;\n        display: inline-block;\n        margin-right: 8px;\n    }\n\n    .swiper-wrapper[_ngcontent-%COMP%] {\n        align-items: center;\n    }\n\n    .dropdown-toggle-after[_ngcontent-%COMP%]{\n       content: '';\n       border: none;\n       font-family: 'Font Awesome 5 Free';\n       font-weight: 900;\n       color: #6a942f;\n       vertical-align: 0;\n       width: 35px !important;\n       height: 104%;\n       background: #a3d45d;\n       position: absolute;\n       z-index: 999;\n       top: -1px;\n       right: -1px;\n       border-radius: 5px;\n       border-bottom-left-radius: 0;\n       border-top-left-radius: 0;\n       display: flex;\n       justify-content: center;\n       align-items: center;\n\n   }\n   .dropdown-toggle-after[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 16px;  transition: ease-in-out all 0.2s}\n   .show[_ngcontent-%COMP%]   .dropdown-toggle-after[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform: rotate(-180deg);  transition: ease-in-out all 0.2s}\n   .dropdown-toggle[_ngcontent-%COMP%] {\n    width: 170px;\n    background-color: #8ec63f;\n    color: #fff;\n    display: inline-flex;\n    white-space: unset !important;\n    text-align: left;\n    align-items: center;\n    font-size: 14px;\n    padding:9px 6px;\n    line-height: 1.4;\n    position: relative;\n    min-height: 57px;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n    display:none !important;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]:focus {\n    box-shadow: none;\n}\n\n\n.bordertop[_ngcontent-%COMP%]{\n    border: 1px solid #eae9e9cc;\n    position: relative; \n    margin-top: 20px; \n    border-radius: 3px;\n}\n.dropdown-item[_ngcontent-%COMP%]{\n    font-size: 14px;\n     padding: 6px;\n     border-left: 3px solid #fff;\n     white-space: pre-wrap !important;\n\n}\n.dropdown-divider[_ngcontent-%COMP%]{\n    margin: 0;\n}\n.dropdown-menu.show[_ngcontent-%COMP%] {\n     width: 175px;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover{\n    background-color: #fff;\n    color: #8ec63f;\n    border-left: 3px solid #8ec63f;\n}\n\n.updrop[_ngcontent-%COMP%]{position: absolute; top: -19px; right: 18px;}"] });
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

let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            SwiperModule
        ]] });

let ButtongroupComponent = class ButtongroupComponent {
    constructor() {
        this.obj = { label: 'My Dropdown', dropdownButtons: [] };
        this.actionClick = new EventEmitter;
        this.hoverAnchor = {};
    }
    ngOnInit() {
    }
    getHoverStyle() {
        let nType = {
            'background-color': '#fff',
            'color': this.buttonGroupStyle.backgroundcolor,
            'border-left': '3px solid' + this.buttonGroupStyle.backgroundcolor,
            'font-family': this.buttonGroupValueStyle['font-family'],
            'font-size': this.buttonGroupValueStyle['font-size'],
            'font-weight': this.buttonGroupValueStyle['font-weight'],
            'cursor': 'pointer'
        };
        return nType;
    }
    clickMethod(event) {
        this.actionClick.emit(event);
    }
};
ButtongroupComponent.ɵfac = function ButtongroupComponent_Factory(t) { return new (t || ButtongroupComponent)(); };
ButtongroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtongroupComponent, selectors: [["sml-buttongroup"]], inputs: { obj: "obj", buttonGroupStyle: "buttonGroupStyle", buttonGroupLabelStyle: "buttonGroupLabelStyle", buttonGroupValueStyle: "buttonGroupValueStyle" }, outputs: { actionClick: "actionClick" }, decls: 10, vars: 15, consts: [[1, "w-100", "mb-5"], [1, "form-row", "align-items-center", "mb-5"], [1, "col-md-12", "col-12", "mb-0"], [1, "btn-group"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-default", "dropdown-toggle", 3, "ngStyle"], [1, "dropdown-toggle-after"], ["src", "./assets/Arrowcombobox.png"], [1, "dropdown-menu"], ["class", "dropdown-item", 3, "ngStyle", "mouseover", "click", "mouseleave", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "ngStyle", "mouseover", "click", "mouseleave"]], template: function ButtongroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "button", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementStart(6, "span", 5);
        ɵngcc0.ɵɵelement(7, "img", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵtemplate(9, ButtongroupComponent_a_9_Template, 2, 2, "a", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵstyleProp("background", ctx.buttonGroupStyle == null ? null : ctx.buttonGroupStyle.backgroundcolor)("width", ctx.buttonGroupStyle == null ? null : ctx.buttonGroupStyle.width)("height", ctx.buttonGroupStyle == null ? null : ctx.buttonGroupStyle.height);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.buttonGroupLabelStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.obj.label, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background", ctx.buttonGroupStyle == null ? null : ctx.buttonGroupStyle.togglebackgroundcolor)("height", ctx.buttonGroupStyle == null ? null : ctx.buttonGroupStyle.height);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleProp("width", ctx.buttonGroupStyle == null ? null : ctx.buttonGroupStyle.width);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.obj.dropdownButtons);
    } }, directives: [ɵngcc3.NgStyle, ɵngcc3.NgForOf], styles: [".dropdown-toggle-after[_ngcontent-%COMP%]{\n    border: none;\n    font-family: 'Font Awesome 5 Free';\n    font-weight: 900;\n    color: #6a942f;\n    vertical-align: 0;\n    width: 35px !important;\n    height: 104%;\n    background: #a3d45d;\n    position: absolute;\n    z-index: 999;\n    top: -1px;\n    right: -1px;\n    border-radius: 5px;\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.dropdown-toggle-after[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 16px;  transition: ease-in-out all 0.2s}\n.show[_ngcontent-%COMP%]   .dropdown-toggle-after[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform: rotate(-180deg);  transition: ease-in-out all 0.2s}\n.dropdown-toggle[_ngcontent-%COMP%] {\n width: 175px;\n background-color: #8ec63f;\n border-radius: 6px;\n color: #fff;\n display: inline-flex;\n white-space: unset !important;\n text-align: left;\n align-items: center;\n font-size: 14px;\n padding:9px 6px;\n line-height: 1.4;\n position: relative;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]:focus {\n box-shadow: none;\n}\n\n.dropdown-item[_ngcontent-%COMP%]{\n    font-size: 14px;\n     padding: 6px;\n     border-left: 3px solid #fff;\n     white-space: pre-wrap !important;\n\n}\n.dropdown-divider[_ngcontent-%COMP%]{\n    margin: 0;\n}\n.dropdown-menu.show[_ngcontent-%COMP%] {\n     width: 175px;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover{\n    background-color: #fff;\n    color: #8ec63f;\n    border-left: 3px solid #8ec63f;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n    display:none;\n}\n\n.updrop[_ngcontent-%COMP%]{position: absolute; top: -19px; right: 18px;}"] });
__decorate([
    Input()
], ButtongroupComponent.prototype, "obj", void 0);
__decorate([
    Input()
], ButtongroupComponent.prototype, "buttonGroupStyle", void 0);
__decorate([
    Input()
], ButtongroupComponent.prototype, "buttonGroupLabelStyle", void 0);
__decorate([
    Input()
], ButtongroupComponent.prototype, "buttonGroupValueStyle", void 0);
__decorate([
    Output()
], ButtongroupComponent.prototype, "actionClick", void 0);

let ButtonGroupModule = class ButtonGroupModule {
};
ButtonGroupModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonGroupModule });
ButtonGroupModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonGroupModule_Factory(t) { return new (t || ButtonGroupModule)(); }, imports: [[
            CommonModule
        ]] });

let SinglefileuploadComponent = class SinglefileuploadComponent {
    constructor(http) {
        this.http = http;
        this.idInputFile = 'other';
        this.global_url = '';
        this.url = 'http://apinext.aaadev.info/apinext/';
        this.fileurl = 'http://apinext.aaadev.info/';
        this.FilesGroupIdvalue = '0';
        this.FileId = '0';
        this.nameFile = '';
        this.dataBase = 'APPS';
        this.fileResponse = new EventEmitter;
        this.editContent = false;
        this.isFiles = false;
        this.datas = [];
        this.description = '';
        this.textdata = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.getListdata();
    }
    upload(files) {
        this.uploadAndProgress(files);
    }
    getListdata() {
        this.http.get(this.url + "GetSystemInfo?passcode=flipper613").subscribe(res => {
            this.GenericToken = res["GenericToken"];
            if (this.FilesGroupIdvalue) {
                const body = {
                    FilesGroupId: this.FilesGroupIdvalue,
                };
                const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
                this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                    this.datas = res;
                    for (let i = 0; i < this.datas.length; i++) {
                        let file_url = this.global_url + this.datas[i].FileUrl;
                        this.datas[i].FileUrl = file_url;
                        this.isFiles = true;
                    }
                    this.UploadedFileli = true;
                });
            }
        });
    }
    uploadAndProgress(files) {
        this.UploadedFileli = false;
        var formData = new FormData();
        formData.append('file', files[0], files[0].name);
        formData.append('id', this.FileId);
        formData.append('filegroupid', this.FilesGroupIdvalue);
        formData.append('mediaType', 'example');
        // formData.append('description', files[0].name);
        if (this.nameFile != '') {
            formData.append('description', this.nameFile);
        }
        else {
            formData.append('description', files[0].name);
        }
        this.http.post(this.url + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                this.uploadSuccess = true;
                this.UploadedFileli = true;
                this.filename = event.body["Description"];
                this.filelink = this.fileurl + event.body["FileUrl"];
                this.isFiles = true;
                this.fileResponse.emit(event.body);
                this.getListdata();
                setTimeout(() => {
                    this.uploadSuccess = false;
                    this.percentDone = 0;
                }, 3000);
            }
        });
    }
    edit(data, i) {
        this.textdata = data.Description;
        this.contentIndex = i;
        this.editContent = true;
    }
    updateName(id) {
        var url = this.url + "Models/Files?api_key=" + this.GenericToken;
        var body = {
            FilesId: id,
            Description: this.textdata
        };
        this.http.post(url, body).subscribe(res => {
            this.getListdata();
            this.esc();
        });
    }
    esc() {
        this.editContent = false;
        this.contentIndex = null;
    }
    DeleteFIles(value) {
        this.http.delete(this.url + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(res => {
            const body = {
                FilesGroupId: this.FilesGroupIdvalue
            };
            const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                this.datas = [];
                this.datas = res;
                this.isFiles = false;
                for (let i = 0; i < this.datas.length; i++) {
                    let file_url = this.global_url + this.datas[i].FileUrl;
                    this.datas[i].FileUrl = file_url;
                }
                this.UploadedFileli = true;
            });
        });
    }
};
SinglefileuploadComponent.ɵfac = function SinglefileuploadComponent_Factory(t) { return new (t || SinglefileuploadComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient)); };
SinglefileuploadComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SinglefileuploadComponent, selectors: [["sml-singlefileupload"]], inputs: { idInputFile: "idInputFile", global_url: "global_url", url: "url", fileurl: "fileurl", FilesGroupIdvalue: "FilesGroupIdvalue", FileId: "FileId", nameFile: "nameFile", dataBase: "dataBase", label: "label" }, outputs: { fileResponse: "fileResponse" }, decls: 18, vars: 12, consts: [[1, "w-100"], [1, "form-row", "align-items-center"], [1, "col-12", "mb-0"], [1, "col-md-12", "dropdownarea", 3, "for"], [1, "d-flex", "w-100", "flex-column"], ["type", "file", 1, "drag", 3, "id", "ngStyle", "change"], [1, "d-flex", "align-content-start", "align-items-start", "w-100", "flex-column"], [1, "d-flex", "align-content-start", "align-items-start"], [1, "uploadicon"], ["src", "./assets/upload.png"], [1, "d-flex", "flex-column", "position-relative", "w79"], [1, "fz14", "top5", 3, "ngClass"], [4, "ngIf"], [1, "progressContainer"], [1, "procesbar"], ["class", "w-100 z9", 4, "ngIf"], ["class", "listdata mt-5", 4, "ngIf"], [1, "w-100", "z9"], [1, "progressbar", 3, "ngStyle"], [1, "listdata", "mt-5"], [1, "w-100", "fileuploadlist"], ["class", "w-100 d-flex justify-content-between align-content-around", 4, "ngFor", "ngForOf"], [1, "w-100", "d-flex", "justify-content-between", "align-content-around"], ["class", "w-100 mflex", 4, "ngIf"], ["class", "w-100 d-flex align-items-center", 4, "ngIf"], [1, "w-100", "mflex"], ["target", "_blank", 3, "href"], [1, "float-right", "d-flex", "justify-content-between", "align-content-around", "settingoption"], [1, "cross", "icons", "bg-success", "pointer", "d-flex", "justify-content-center", "align-items-center", 3, "click"], ["src", "./assets/pencil-edit-button.svg"], [1, "cross", "icons", "bg-danger", "pointer", "d-flex", "justify-content-center", "align-items-center", 3, "click"], ["src", "./assets/cross.svg"], [1, "w-100", "d-flex", "align-items-center"], ["type", "text", "name", "textdata", 1, "form-control", "w-75", 3, "value", "ngModel", "ngModelChange"], ["ctrl", "ngModel"], [1, "d-flex", "justify-content-between", "align-content-around", "settingoption"], ["src", "./assets/checked.svg"], [1, "cross", "icons", "bg-dark", "pointer", "d-flex", "justify-content-center", "align-items-center", 3, "click"]], template: function SinglefileuploadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "label", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "input", 5);
        ɵngcc0.ɵɵlistener("change", function SinglefileuploadComponent_Template_input_change_5_listener($event) { return ctx.upload($event.target.files); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵelementStart(7, "div", 7);
        ɵngcc0.ɵɵelementStart(8, "span", 8);
        ɵngcc0.ɵɵelement(9, "img", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 10);
        ɵngcc0.ɵɵelementStart(11, "div", 11);
        ɵngcc0.ɵɵtext(12, "Choose a file or drag it here. ");
        ɵngcc0.ɵɵtemplate(13, SinglefileuploadComponent_span_13_Template, 2, 1, "span", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 13);
        ɵngcc0.ɵɵelement(15, "div", 14);
        ɵngcc0.ɵɵtemplate(16, SinglefileuploadComponent_div_16_Template, 2, 3, "div", 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(17, SinglefileuploadComponent_div_17_Template, 3, 1, "div", 16);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.idInputFile);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.idInputFile);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(7, _c6, ctx.height, ctx.width));
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c7, ctx.isFiles));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.percentDone);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.percentDone);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.UploadedFileli);
    } }, directives: [ɵngcc3.NgStyle, ɵngcc3.NgClass, ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc6.DefaultValueAccessor, ɵngcc6.NgControlStatus, ɵngcc6.NgModel], styles: [".cursor-pointer[_ngcontent-%COMP%] {\n\t\tcursor: pointer;\n\t  }\n\t  .node-content-wrapper[_ngcontent-%COMP%], .tree-children[_ngcontent-%COMP%] {\n\t\tposition: relative;\n\t  }  \n\t  .cr-slider-wrap[_ngcontent-%COMP%] {\n\t\tmargin: 8px auto !important\n\t  }\n\t  .drag[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\topacity: 0;\n\t\tz-index:999999;\n\t  }\n\t  .dropdownarea[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t\tborder: 1px dashed #ccc;\n\t\tpadding:10px 15px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 65px;\n\t\ttext-align: center;\n\t\talign-items: center;\n\t\tposition: relative;\n\t  }\n\t  .dropdownarea[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n\t\tcolor: #7d7c7c;\n\t\tfont-size: 17px;\n\t  }\n\t  .pd5[_ngcontent-%COMP%] {\n\t\tpadding: 89px 9px 76px 0px;\n\t\tfloat: left;\n\t\twidth: 100%;\n\t  }\n\t  .table-headed[_ngcontent-%COMP%] {\n\t\tpadding: 15px;\n\t\tdisplay: block;\n\t  }\n\t  .mgt50[_ngcontent-%COMP%] {\n\t\tmargin-top: 50px;\n\t  }\n\t  .btndefault[_ngcontent-%COMP%] {\n\t\tbackground-color: #f3f3f3;\n\t\tborder-color: #e6e6e6;\n\t\tcolor: #333;\n\t  }\n\t  .cross[_ngcontent-%COMP%] {\n\t\tdisplay: inline-block;\n\t\tfont-size: 12px;\n\t\tpadding: 5px;\n\t\tcolor: red;\n\t\tfont-weight: bold;\n\t\twidth: 10px;\n\t\theight: 10px;\n\t\tmargin-left: 10px;\n\t  }\n\t  .progressbar[_ngcontent-%COMP%] {\n\t\theight: 2px;\n\t\tbackground: green;\n\t\tfloat: left;\n\t  }\n\t  .fz14[_ngcontent-%COMP%] {\n\t\tfont-size: 14px;\n\t  }\n\t  .top50[_ngcontent-%COMP%] {\n\t\ttop: 31px;\n\t\tleft: -19px;\n\t  }\n\t  .successmsg[_ngcontent-%COMP%] {\n\t\tfont-size: 14px;\n\t\tpadding: 10px;\n\t\tcolor: green;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\ttop: -82px;\n\t  }\n\t  .fileuploadlist[_ngcontent-%COMP%] {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t  }\n\t  .fileuploadlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tmargin-bottom: 10px;\n\t  }\n\t  .fileuploadlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-size: 14px;\n\t\tcolor: #333;\n\t\ttext-transform: capitalize;\n\t  }\n\t  .pointer[_ngcontent-%COMP%] {\n\t\tcursor: pointer;\n\t  }\n\t  .cross[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\t\theight: 10px;\n\t  }\n\t  .listdata[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t\tmax-width: calc(100% - 100px);\n\t\tposition: absolute;\n\t\tbottom:12px;\n\t\tleft:77px;\n\t\tbackground-color: #fff;;\n\t\tz-index: 9999999;\n\t  }\n\t  .mflex[_ngcontent-%COMP%]{\n\t\tdisplay: flex;\n\t\tbackground: #fff;\n\t\talign-items: center;\n\t\tmax-width: calc(100% - 100px);\n\t  }\n\t  .top5[_ngcontent-%COMP%]{\n\t\ttop:12px;\n\t\tposition: relative;\n\t  }\n\t  .getData[_ngcontent-%COMP%]{\n\t\ttop:5px;\n\t  }\n\t  .settingoption[_ngcontent-%COMP%] {\n\t\twidth: 50px;\n\t  }\n\t  .icons[_ngcontent-%COMP%] {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tborder-radius: 3px;\n\t  }\n\t  .checkbox[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin: 10px 0;\n\t  }\n\t  .styled-checkbox[_ngcontent-%COMP%] {\n\t\tposition: absolute;\n\t\topacity: 0;\n\t  }\n\t  .styled-checkbox[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tpadding: 0;\n\t  }\n\t  .styled-checkbox[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]:before {\n\t\tcontent: \"\";\n\t\tmargin-right: 10px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: text-top;\n\t\twidth: 15px;\n\t\theight: 15px;\n\t\tborder: 1px solid #ccc;\n\t  }\n\t  .styled-checkbox[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]:after {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tleft: 5px;\n\t\ttop: 2px;\n\t\theight: 9px;\n\t\twidth: 5px;\n\t\tborder: solid #09b4bd;\n\t\tborder-width: 0 2px 2px 0;\n\t\t-webkit-transform: rotate(45deg);\n\t\ttransform: rotate(45deg);\n\t  }\n\t  .procesbar[_ngcontent-%COMP%] {\n\t\tbackground: #ccc;\n\t\theight: 2px;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t  }\n\t  .progressContainer[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\ttop:16px;\n\t  }\n\t  .z9[_ngcontent-%COMP%] {\n\t\tz-index: 99;\n\t\tposition: relative;\n\t  }\n\t  .w79[_ngcontent-%COMP%] {\n\t\twidth: 82%;\n\t  }\n\t  .uploadicon[_ngcontent-%COMP%] {\n\t\tpadding: 10px;\n\t  }\n\t  .w-100[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t  }\n\t  .mb-5[_ngcontent-%COMP%] {\n\t\tmargin-bottom: 3rem!important\n\t  }\n\t  .form-row[_ngcontent-%COMP%] {\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n\t\t-ms-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\tmargin-right: -5px;\n\t\tmargin-left: -5px;\n\t  }\n\t  .col-12[_ngcontent-%COMP%] {\n\t\tflex: 0 0 100%;\n\t\tmax-width: 100%;\n\t  }\n\t  .mb-0[_ngcontent-%COMP%] {\n\t\tmargin-bottom: 0px!important;\n\t  }\n\t  .form-row[_ngcontent-%COMP%] > .col[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%] {\n\t\tpadding-right: 5px;\n\t\tpadding-left: 5px;\n\t  }\n\t  .d-flex[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t  }\n\t  .position-relative[_ngcontent-%COMP%] {\n\t\tposition: relative;\n\t  }\n\t  .border[_ngcontent-%COMP%] {\n\t\tborder: 1px solid #dee2e6!important\n\t  }\n\t  .flex-column[_ngcontent-%COMP%] {\n\t\tflex-direction: column\n\t  }\n\t  .align-content-around[_ngcontent-%COMP%] {\n\t\talign-content: space-around\n\t  }\n\t  .bg-success[_ngcontent-%COMP%] {\n\t\tbackground-color: #28a745!important;\n\t  }\n\t  .bg-danger[_ngcontent-%COMP%] {\n\t\tbackground-color: #dc3545!important;\n\t  }\n\t  .justify-content-center[_ngcontent-%COMP%] {\n\t\t-webkit-box-pack: center!important;\n\t\t-ms-flex-pack: center!important;\n\t\tjustify-content: center!important;\n\t  }\n\t  .float-right[_ngcontent-%COMP%] {\n\t\tfloat: right!important;\n\t  }\n\t  .justify-content-between[_ngcontent-%COMP%] {\n\t\t-webkit-box-pack: justify!important;\n\t\t-ms-flex-pack: justify!important;\n\t\tjustify-content: space-between!important;\n\t  }\n\t  .floating-border[_ngcontent-%COMP%]{\n\t\tborder:1px solid #ccc;\n\t\tpadding: 15px !important;\n\t\tposition: relative;\n\t  }"] });
SinglefileuploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "idInputFile", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "label", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "global_url", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "FilesGroupIdvalue", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "FileId", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "nameFile", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "dataBase", void 0);
__decorate([
    Output()
], SinglefileuploadComponent.prototype, "fileResponse", void 0);

let SinglefileuploadModule = class SinglefileuploadModule {
};
SinglefileuploadModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SinglefileuploadModule });
SinglefileuploadModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SinglefileuploadModule_Factory(t) { return new (t || SinglefileuploadModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });

let ImagecropComponent = class ImagecropComponent {
    constructor(http, _http) {
        this.http = http;
        this._http = _http;
        this.url = 'http://api.aaadev.info/apinext/uploader/uploadnew';
        this.path = 'http://apinext.aaadev.info/media/';
        this.OnSaveFile = new EventEmitter;
        this.showModel = false;
        this.showImg = false;
        this.cropBtn = false;
        this.camcropBtn = false;
        this.snapPhoto = false;
        this.showUplaod = false;
        this.avtarImage = false;
        this.imagePath = 'assets/avatar.png';
        this.captures = [];
    }
    ngOnInit() {
        this.dataApi = JSON.parse(localStorage.getItem('Session.DataApi'));
        $('#cropbtn_cam').hide();
        $('#video').hide();
        $('#preview').show();
        if (this.value == '0') {
            this.imagePath = 'assets/img/cropimage/avatar.png';
        }
        else {
            this.DataDB(this.dataApi.DataFiles.DataBase, this.dataApi.DataFiles.Schema, 'FILES_Retrieve', { FilesId: this.value }).subscribe(((files) => {
                if (!(files == undefined || files == null || files == '') && files.length > 0) {
                    var urlImages = files[0].FileUrl.split('\\');
                    this.imagePath = this.path + files[0].FileUrl;
                }
            }), ((error) => {
                alert(error);
                console.log(error);
            }));
        }
        this.videos = this.video == undefined || this.video == null ? null : this.video.nativeElement;
    }
    ngAfterViewInit() {
        // const _video = this.video.nativeElement;
        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        //   navigator.mediaDevices.getUserMedia({ video: true })
        //     .then(stream => {
        //       _video.srcObject = stream;
        //       _video.play();
        //     });
        // }
    }
    start() {
        this.initCamera({ video: true, audio: false });
    }
    sound() {
        this.initCamera({ video: true, audio: true });
    }
    initCamera(config) {
        var browser = navigator;
        browser.getUserMedia = (browser.getUserMedia ||
            browser.webkitGetUserMedia ||
            browser.mozGetUserMedia ||
            browser.msGetUserMedia);
        browser.mediaDevices.getUserMedia(config).then(stream => {
            //this.videos.src = window.URL.createObjectURL(stream);
            //this.video.play();
            this.videos.srcObject = stream;
            this.videos.play();
        }, error => {
            alert(error.message);
        });
    }
    modelBox() {
        this.showModel = true;
        this.showUplaod = false;
        $('.crophide').hide();
    }
    closeModel() {
        document.getElementById("upload").value = '';
        let crimg = $('#cimgdiv').croppie('destroy');
        $('#preview').croppie('destroy');
        $('#cimgdiv').hide();
        $('.ddswhd').show();
        $('#cropbtn').show();
        $('#camswhi').show();
        $('#cropbtn').hide();
        $('#preview').hide();
        $('#video').hide();
        this.cropBtn = false;
        this.camcropBtn = false;
        this.snapPhoto = false;
        this.showModel = false;
        this.showUplaod = false;
    }
    capture() {
        $('#cimgdiv').croppie('destroy');
        $('#video').croppie('destroy');
        this.captures = [];
        this.camcropBtn = true;
        this.snapPhoto = false;
        const context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
        $('#video').hide();
        $('#cimgdiv').show();
        $('.savebtn').show();
        $('.snapPic').hide();
        $('#cropbtn').hide();
        this.imageName = "Capture.png";
        const crimg = $('#cimgdiv').croppie({
            enableExif: true,
            viewport: { width: 160, height: 160, type: 'circle' },
            boundary: {
                width: '100%',
                height: 200
            }
        });
        crimg.croppie('bind', {
            url: this.canvas.nativeElement.toDataURL('image/png'),
            circle: true,
        });
    }
    cropcam() {
        $('.htmlbinds1').attr('src', '');
        $('.crophide').show();
        this.camcropBtn = false;
        $('#cimgdiv').croppie('result', { circle: true, }, 'html').then(function (html) {
            $('.htmlbinds1').attr('src', html);
            return html;
        })
            .then(res => {
            this.captureImage = res;
        });
        $('#cimgdiv').hide();
        this.showUplaod = true;
    }
    snapPhotoEvt() {
        this.start();
        $('#video').show();
        this.snapPhoto = true;
        $('#camswhi').hide();
        $('#htmlbinds, #preview').hide();
    }
    fileChangeEvent(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            this.imageName = fileInput.target.files["0"].name;
            $('#cropbtn').show();
            $('.ddswhd').hide();
            this.cropBtn = true;
            const reader = new FileReader();
            $('#preview').attr('src', '');
            reader.onload = function (e) {
                $('#preview').attr('src', e.target.result);
                var crop = $('#preview').croppie({
                    enableExif: true,
                    viewport: {
                        width: 160,
                        height: 160,
                        type: 'circle'
                    },
                    boundary: {
                        width: '100%',
                        height: 200
                    }
                });
                crop.croppie('bind', {
                    url: e.target.result
                });
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    crop() {
        $('.crophide').show();
        $('.htmlbinds1').attr('src', '');
        $('#preview').croppie('result', { circle: true }, 'html')
            .then(function (html) {
            $('.htmlbinds1').attr('src', html);
            return html;
        })
            .then(res => {
            this.captureImage = res;
        });
        $('#preview').croppie('destroy');
        $('#preview').hide();
        $('#cropbtn').hide();
        this.showUplaod = true;
    }
    upload() {
        var block = this.captureImage.split(";");
        var contentType = block[0].split(":")[1]; // In this case "image/gif"
        var realData = block[1].split(",")[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."
        var blob = b64toBlob(realData, contentType);
        var formData = new FormData();
        formData.append('file', blob, this.imageName);
        formData.append('id', this.value);
        formData.append('filegroupid', this.value);
        formData.append('mediaType', 'profilepic');
        formData.append('description', this.imageName);
        // (document.getElementById("upload") as HTMLTextAreaElement).value = '';
        // $('.htmlbinds').attr('src', '')
        // this.avtarImage = true
        // $('#cimgdiv').hide();
        // $('#cimgdiv').hide();
        // $('.ddswhd').show();
        // $('#cropbtn').show();
        // $('#camswhi,.hide').show();
        // $('#cropbtn').hide();
        // $('#preview').hide();
        // $('#video').hide();
        // this.cropBtn = false;
        // this.camcropBtn = false;
        // this.snapPhoto = false;
        // this.showModel = false;
        // this.showUplaod = false;
        // $('.htmlbinds').attr('src', this.captureImage)
        this.http.post(this.url, formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                //this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                document.getElementById("upload").value = '';
                $('.htmlbinds').attr('src', '');
                this.avtarImage = true;
                $('#cimgdiv').hide();
                $('#cimgdiv').hide();
                $('.ddswhd').show();
                $('#cropbtn').show();
                $('#camswhi,.hide').show();
                $('#cropbtn').hide();
                $('#preview').hide();
                $('#video').hide();
                this.cropBtn = false;
                this.camcropBtn = false;
                this.snapPhoto = false;
                this.showModel = false;
                this.showUplaod = false;
                $('.htmlbinds').attr('src', this.captureImage);
                this.OnSaveFile.emit({ event });
            }
        });
        function b64toBlob(b64Data, contentType) {
            contentType = contentType || '';
            var sliceSize = sliceSize || 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        }
    }
    DataDB(database, schema, procedureName, params = {}) {
        var sqlInit = this.dataApi.ApiUrl + 'Data/Exec/';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var urlQuery = sqlInit + database + '/' + schema + '/' + procedureName + '?api_key=' + this.dataApi.AccessToken;
        return this._http.post(urlQuery, params, { headers: headers }).map(((response) => response.json())).catch(this.errorHandler);
    }
    errorHandler(error) {
        return Observable.throw(error || 'SERVER ERROR');
    }
};
ImagecropComponent.ɵfac = function ImagecropComponent_Factory(t) { return new (t || ImagecropComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc8.Http)); };
ImagecropComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ImagecropComponent, selectors: [["sml-imagecrop"]], viewQuery: function ImagecropComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c8, true);
        ɵngcc0.ɵɵviewQuery(_c9, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.video = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
    } }, inputs: { url: "url", path: "path", title: "title", height: "height", width: "width", value: "value" }, outputs: { OnSaveFile: "OnSaveFile" }, decls: 56, vars: 15, consts: [[1, "homewrap"], [1, "head_sec"], [1, "relativeLeft"], [1, "relativeUser"], [1, "user_DP", "d-flex", "justify-content-center", "align-items-center", 3, "ngStyle"], ["onerror", "this.onerror=null; this.src='assets/img/cropimage/avatar.png'", "class", "avatar", 3, "src", "ngClass", 4, "ngIf"], ["src", "", 1, "htmlbinds"], [1, "camera_w", 3, "click"], ["src", "./assets/whitecamara.png"], [1, "model_wrap", "position-fixed", "w-100", "h-100"], [1, "overlay"], [1, "model_content", "bg-white", "position-relative"], [1, "position-absolute", "times", 3, "click"], [1, "dandd_wrap", "d-flex", "flex-column"], [1, "model_header", "text-center", "mb-4"], [1, "d-inline-block", "hea", "d_text"], [1, "imgdar", "mb-2"], ["id", "camswhi", 1, "imgd_area", "ddswhd", "text-center", "d_flex", "flex-column", "align-items-center", "justify-content-center"], [1, "d_flex", "w-100", "position-relative", "flex-column", "justify-content-center", "align-items-center", "mb-1"], ["src", "./assets/cloud-upload-arrow.svg"], [1, "text-black-50", "fz11", "mb-1"], ["type", "file", "id", "upload", "accept", "image/*", 1, "file_input", 3, "change"], [1, "btn", "btn-sm", "cst_btn", "ins_md_btn", "mbtn"], [1, "d_flex", "w-100", "position-relative", "flex-column", "justify-content-center", "align-items-center", "cursor-pointer", 3, "click"], ["src", "./assets/photo-camera.svg"], [1, "text-black-50", "fz11"], [1, "text-center", "w-100", "float-left"], ["id", "preview", "src", "", 1, "w-100"], [1, "w-100", "text-center"], ["src", "", 1, "htmlbinds1", "crophide"], [1, "w-100"], ["id", "video", "width", "100%", "height", "200", "autoplay", ""], ["video", ""], ["id", "canvas", "width", "640", "height", "480", 2, "display", "none"], ["canvas", ""], ["id", "cimgdiv", 1, "w-100"], ["id", "htmlbind", 1, "saved_img", "text-center"], ["class", "text-center mb-2", 4, "ngIf"], ["class", "text-center mb-2 mt-2", "id", "cropbtn", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "ngClass"], [1, "btn", "btn-sm", "mbtn", "px-4", 2, "background", "gainsboro", 3, "click"], ["class", "btn btn-sm btn-info bgc_blue px-4 mbtn", 3, "click", 4, "ngIf"], ["onerror", "this.onerror=null; this.src='assets/img/cropimage/avatar.png'", 1, "avatar", 3, "src", "ngClass"], [1, "text-center", "mb-2"], [1, "btn", "px-4", "btn-sm", "cst_btn", "mbtn", 3, "click"], ["id", "cropbtn", 1, "text-center", "mb-2", "mt-2"], [1, "btn", "px-4", "btn-sm", "cst_btn", 3, "click"], [1, "btn", "px-4", "btn-sm", "cst_btn", "mbtn", "mt-2", 3, "click"], [1, "btn", "btn-sm", "btn-info", "bgc_blue", "px-4", "mbtn", 3, "click"]], template: function ImagecropComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵtemplate(6, ImagecropComponent_img_6_Template, 1, 4, "img", 5);
        ɵngcc0.ɵɵelement(7, "img", 6);
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵlistener("click", function ImagecropComponent_Template_div_click_8_listener() { return ctx.modelBox(); });
        ɵngcc0.ɵɵelement(9, "img", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 9);
        ɵngcc0.ɵɵelement(11, "div", 10);
        ɵngcc0.ɵɵelementStart(12, "div", 11);
        ɵngcc0.ɵɵelementStart(13, "div", 12);
        ɵngcc0.ɵɵlistener("click", function ImagecropComponent_Template_div_click_13_listener() { return ctx.closeModel(); });
        ɵngcc0.ɵɵtext(14, "\u00D7");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "div", 13);
        ɵngcc0.ɵɵelementStart(16, "div", 14);
        ɵngcc0.ɵɵelementStart(17, "span", 15);
        ɵngcc0.ɵɵtext(18, "Change Profile Pic");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "div", 16);
        ɵngcc0.ɵɵelementStart(20, "div", 17);
        ɵngcc0.ɵɵelementStart(21, "div", 18);
        ɵngcc0.ɵɵelement(22, "img", 19);
        ɵngcc0.ɵɵelementStart(23, "span", 20);
        ɵngcc0.ɵɵtext(24, "Drag & Drop");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(25, "input", 21);
        ɵngcc0.ɵɵlistener("change", function ImagecropComponent_Template_input_change_25_listener($event) { return ctx.fileChangeEvent($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(26, "span", 20);
        ɵngcc0.ɵɵtext(27, "or");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(28, "button", 22);
        ɵngcc0.ɵɵtext(29, "Upload Photo");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(30, "span", 20);
        ɵngcc0.ɵɵtext(31, "or");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(32, "div", 23);
        ɵngcc0.ɵɵlistener("click", function ImagecropComponent_Template_div_click_32_listener() { return ctx.snapPhotoEvt(); });
        ɵngcc0.ɵɵelement(33, "img", 24);
        ɵngcc0.ɵɵelementStart(34, "span", 25);
        ɵngcc0.ɵɵtext(35, "Snap Photo");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(36, "div", 26);
        ɵngcc0.ɵɵelement(37, "img", 27);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(38, "div", 28);
        ɵngcc0.ɵɵelement(39, "img", 29);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(40, "div", 30);
        ɵngcc0.ɵɵelement(41, "video", 31, 32);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(43, "div", 30);
        ɵngcc0.ɵɵelement(44, "canvas", 33, 34);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(46, "div", 35);
        ɵngcc0.ɵɵelement(47, "div", 36);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(48, ImagecropComponent_div_48_Template, 3, 0, "div", 37);
        ɵngcc0.ɵɵtemplate(49, ImagecropComponent_div_49_Template, 3, 0, "div", 38);
        ɵngcc0.ɵɵtemplate(50, ImagecropComponent_div_50_Template, 3, 0, "div", 37);
        ɵngcc0.ɵɵelementStart(51, "div", 39);
        ɵngcc0.ɵɵelementStart(52, "button", 40);
        ɵngcc0.ɵɵlistener("click", function ImagecropComponent_Template_button_click_52_listener() { return ctx.closeModel(); });
        ɵngcc0.ɵɵtext(53, "Cancel");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(54, " \u00A0 ");
        ɵngcc0.ɵɵtemplate(55, ImagecropComponent_button_55_Template, 2, 0, "button", 41);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(10, _c6, ctx.height, ctx.width));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.avtarImage);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵclassProp("showModel", ctx.showModel);
        ɵngcc0.ɵɵadvance(38);
        ɵngcc0.ɵɵproperty("ngIf", ctx.snapPhoto);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.cropBtn);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.camcropBtn);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(13, _c11, ctx.showUplaod));
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showUplaod);
    } }, directives: [ɵngcc3.NgStyle, ɵngcc3.NgIf, ɵngcc3.NgClass], styles: [".homewrap[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%\n}\n.head_sec[_ngcontent-%COMP%] {\n    background-color: #fff;\n    width: 100%;\n    min-height: auto;\n}\n.camera_w[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 100%;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.4s\n}\n.camera_w[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 26px;\n}\n.user_DP[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    border: 1px solid #d6d6d6;\n    border-radius: 100%;\n    background-color: #f8f8f8;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    cursor: pointer;\n    overflow: hidden;\n}\n.user_DP[_ngcontent-%COMP%]:hover   .camera_w[_ngcontent-%COMP%] {\n    visibility: visible;\n    opacity: 1;\n    top: 0\n}\n.avatar[_ngcontent-%COMP%] {\n    width: 60px;\n}\n.avatar1[_ngcontent-%COMP%] {\n  width: 120px !important;\n}\n.overlay[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.times[_ngcontent-%COMP%] {\n    color: lightgray;\n    font-size: 30px;\n    right: 10px;\n    top: 0;\n    line-height: 30px;\n    cursor: pointer;\n}\n.ins_md_btn[_ngcontent-%COMP%] {\n    width: 86px;\n    padding: 4px 0;\n    font-size: 11px\n}\n.text-black-50[_ngcontent-%COMP%] {\n    color: #a6a9ab;\n}\n.btn_select_group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 8px 16px\n}\n.model_wrap[_ngcontent-%COMP%] {\n    display: none;\n    top: 0;\n    left: 0;\n    z-index: 9;\n}\n.model_content[_ngcontent-%COMP%] {\n    width: 320px;\n    min-height: 400px;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n    border-radius: 4px;\n    padding: 30px;\n    box-shadow: 0 3px 6px #464545\n}\n.head_text[_ngcontent-%COMP%] {\n    color: #038888;\n    position: relative;\n    font-size: 18px;\n    padding: 6px 0\n}\n.head_text[_ngcontent-%COMP%]::after {\n    content: '';\n    display: block;\n    width: 40%;\n    height: 1px;\n    background-color: #038888;\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translate(-50%, -50%)\n}\n.imgd_area[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 200px;\n    border: 2px dashed #ccc;\n    margin: 0 auto;\n    border-radius: 100%;\n    overflow: hidden;\n}\n.imgd_area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 27px;\n}\n.file_input[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0\n}\n.cst_btn[_ngcontent-%COMP%] {\n    background-color: #00acac;\n    color: #fff;\n}\n.bgc_blue[_ngcontent-%COMP%] {\n    background-color: #6ba3e2\n}\n.fz13[_ngcontent-%COMP%] {\n    font-size: 13px;\n}\n.fz11[_ngcontent-%COMP%] {\n    font-size: 11px;\n}\n.showModel[_ngcontent-%COMP%] {\n    display: block;\n}\n.d_flex[_ngcontent-%COMP%] {\n    display: flex;\n}\n.camera_H[_ngcontent-%COMP%] {\n    display: none\n}\n.camera_D[_ngcontent-%COMP%] {\n    display: block\n}\n.imgdar[_ngcontent-%COMP%] {\n    height: 247px;\n}\n.hide[_ngcontent-%COMP%] {\n    display: none;\n}\n.htmlbinds[_ngcontent-%COMP%]:nth-child(2) {\n    display: none;\n}\n.htmlbinds[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n.relativeLeft[_ngcontent-%COMP%] {\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    display: inline-block;\n}\n.relativeUser[_ngcontent-%COMP%] {\n    display: block;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n.mbtn[_ngcontent-%COMP%] {\n    font-size: 12px;\n}\n.d-flex[_ngcontent-%COMP%] {\n    display: -webkit-box!important;\n    display: -ms-flexbox!important;\n    display: flex!important;\n}\n.flex-column[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical!important;\n    -webkit-box-direction: normal!important;\n    -ms-flex-direction: column!important;\n    flex-direction: column!important;\n}\n.position-relative[_ngcontent-%COMP%] {\n    position: relative!important;\n}\n.w-100[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.h-100[_ngcontent-%COMP%] {\n    height: 100%!important;\n}\n.position-fixed[_ngcontent-%COMP%] {\n    position: fixed!important;\n}\n.bg-white[_ngcontent-%COMP%] {\n    background-color: #fff!important;\n}\n.position-absolute[_ngcontent-%COMP%] {\n    position: absolute!important;\n}\n.btn[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    font-size: 12px !important;\n}\n.btn-sm[_ngcontent-%COMP%] {\n    padding: .25rem .5rem;\n    font-size: .875rem;\n    line-height: 1.5;\n    border-radius: .2rem;\n}\n.justify-content-center[_ngcontent-%COMP%] {\n    -webkit-box-pack: center!important;\n    -ms-flex-pack: center!important;\n    justify-content: center!important;\n}"] });
ImagecropComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: Http }
];
__decorate([
    ViewChild('video')
], ImagecropComponent.prototype, "video", void 0);
__decorate([
    ViewChild('canvas')
], ImagecropComponent.prototype, "canvas", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "title", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "height", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "width", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "value", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "url", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "path", void 0);
__decorate([
    Output()
], ImagecropComponent.prototype, "OnSaveFile", void 0);

let ImagecropModule = class ImagecropModule {
};
ImagecropModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ImagecropModule });
ImagecropModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ImagecropModule_Factory(t) { return new (t || ImagecropModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });

let TableComponent = class TableComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.obj = { border: 0 };
        this.id = 'sml-datatable';
        this.width = '';
        this.height = '';
        this.minwidth = 700;
        this.isfixedheight = false;
        this.scrollX = false;
        this.screenWidth = 0;
    }
    ngOnInit() {
        this.interSmlTable = setInterval(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }
    ngOnDestroy() {
        if (this.interSmlTable) {
            clearInterval(this.interSmlTable);
        }
    }
    onResize(event) {
        let width = $('.' + this.id).width();
        this.screenWidth = $('.' + this.id).width();
        this.width = width;
        let t_height = $("#y-" + this.id).height();
        if (t_height < 90) {
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-nonhideen', 'inherit');
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-hideen', 'inherit');
        }
        else {
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-nonhideen', 'hidden');
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-hideen', 'overlay');
        }
    }
};
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableComponent, selectors: [["sml-table"]], hostBindings: function TableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function TableComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { obj: "obj", id: "id", width: "width", height: "height", minwidth: "minwidth", isfixedheight: "isfixedheight", scrollX: "scrollX" }, ngContentSelectors: _c15, decls: 12, vars: 19, consts: [[3, "id", "ngStyle"], [1, "table", "table-bordered", "h-auto", 3, "ngClass", "border"], [1, "h-auto", "sml-table-scroll-y", 3, "id"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c12);
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 0);
        ɵngcc0.ɵɵelementStart(4, "table", 1);
        ɵngcc0.ɵɵelementStart(5, "thead");
        ɵngcc0.ɵɵelementStart(6, "tr");
        ɵngcc0.ɵɵprojection(7, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "tbody", 2);
        ɵngcc0.ɵɵprojection(9, 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div");
        ɵngcc0.ɵɵprojection(11, 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("table-100 ", ctx.id, "");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵpropertyInterpolate1("id", "x-", ctx.id, "");
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(14, _c13, ctx.screenWidth + "px", ctx.scrollX ? "auto" : "none"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("width", ctx.width + "px")("max-height", ctx.height + "px");
        ɵngcc0.ɵɵpropertyInterpolate("border", ctx.obj == null ? null : ctx.obj.border);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(17, _c14, !ctx.isfixedheight));
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵstyleProp("max-height", ctx.height + "px");
        ɵngcc0.ɵɵpropertyInterpolate1("id", "y-", ctx.id, "");
    } }, directives: [ɵngcc3.NgStyle, ɵngcc3.NgClass], styles: ["[_nghost-%COMP%]{--c-scroll-value-nonhideen:'hidden';--c-scroll-value-hideen:'overlay';}\n  [_nghost-%COMP%]     sml-table-column{display:contents;}\n  [_nghost-%COMP%]     sml-table-body{display:contents;}\n  [_nghost-%COMP%]     sml-table-footer-pagination{float:right;}\n  .over-flow[_ngcontent-%COMP%]{overflow:hidden !important;}\n  .table-bordered[_ngcontent-%COMP%]{border-bottom:1px solid #dee2e6 !important;border-top:none !important;border-left:none !important;border-right:none !important;}\n   thead[_ngcontent-%COMP%]{display:block;}\n   tbody[_ngcontent-%COMP%]{display:block;}\n  .table-100[_ngcontent-%COMP%]{width:100%;}\n  .h-auto[_ngcontent-%COMP%]{height:auto !important;}\n  .sml-table-scroll-y[_ngcontent-%COMP%]{overflow-y:var(--c-scroll-value-nonhideen);overflow-x:var(--c-scroll-value-nonhideen);}\n  .sml-table-scroll-y[_ngcontent-%COMP%]:hover{overflow-y:var(--c-scroll-value-hideen);}\n  .sml-table-scroll-y[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;background-color:#fbfbfb;}\n  .sml-table-scroll-y[_ngcontent-%COMP%]::-webkit-scrollbar-track{width:3px;background:rgba(222, 222, 222, .75);}\n  .sml-table-scroll-y[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, .5);border-radius:4px;}"] });
TableComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TableComponent.prototype, "obj", void 0);
__decorate([
    Input()
], TableComponent.prototype, "id", void 0);
__decorate([
    Input()
], TableComponent.prototype, "width", void 0);
__decorate([
    Input()
], TableComponent.prototype, "height", void 0);
__decorate([
    Input()
], TableComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], TableComponent.prototype, "isfixedheight", void 0);
__decorate([
    Input()
], TableComponent.prototype, "scrollX", void 0);

let ColumnComponent = class ColumnComponent {
    constructor() {
        this.name = '';
        this.width = '';
        this.minwidth = 700;
        this.id = 'sml-datatable';
        this.headerStyle = {};
        this.alignment = {};
        this.sortClick = new EventEmitter;
        this.table_width = 0;
    }
    ngOnInit() {
        for (var key in this.obj) {
            this.obj[key]['isDisplay'] = true;
            if (!this.obj[key]['isRemoved']) {
                this.obj[key]['isRemoved'] = false;
            }
        }
    }
    onResize(event) {
        let width = $('.' + this.id).width();
        this.table_width = width;
        this.resizeColumn();
    }
    resizeColumn() {
        let temp = [];
        let temp1 = [];
        let totalSum = 0;
        let totalMinwidth = 0;
        for (var key in this.obj) {
            temp.push(this.obj[key]);
            if (this.obj[key]['isDisplay']) {
                let w = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                totalSum = totalSum + parseInt(w);
                if (!this.obj[key].isFixedWidth) {
                    if (this.obj[key].minWidth) {
                        let mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                        totalMinwidth = totalMinwidth + parseInt(mw);
                    }
                    else {
                        this.obj[key]['minWidth'] = 100;
                        let mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                        totalMinwidth = totalMinwidth + parseInt(mw);
                    }
                }
                else {
                    let mw = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                    totalMinwidth = totalMinwidth + parseInt(mw);
                    this.obj[key]['minWidth'] = this.obj[key].width;
                }
            }
            let nType = {
                key: key,
                isRemoved: this.obj[key]['isRemoved'],
                isDisplay: this.obj[key]['isDisplay'],
                index: this.obj[key]['index'],
                minWidth: this.obj[key]['minWidth']
            };
            temp1.push(nType);
        }
        let sel1 = temp.filter(d => !d.isFixedWidth);
        let sel2 = temp.filter(d => d.isFixedWidth);
        if (this.table_width > totalSum) {
            let diff = ((this.table_width - totalSum) / sel1.length);
            for (let j = 0; j < sel1.length; j++) {
                let w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                sel1[j].width = parseInt(w) + diff;
            }
        }
        if (this.table_width < totalSum) {
            let diff = ((totalSum - this.table_width) / sel1.length);
            for (let j = 0; j < sel1.length; j++) {
                let w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                let set = parseInt(w) - diff;
                if (set >= sel1[j].minWidth) {
                    sel1[j].width = set;
                }
            }
        }
        if (this.table_width < totalMinwidth) {
            let sel_A = temp1.filter(d => (d.isDisplay && d.isRemoved));
            if (sel_A.length > 0) {
                this.obj[sel_A[0].key]['isDisplay'] = false;
            }
            else {
                let sel_B = temp1.filter(d => (d.isDisplay && !d.isRemoved));
                if (sel_B.length > 0) {
                    let index = (sel_B.length - 1);
                    this.obj[sel_B[index].key]['isDisplay'] = false;
                }
            }
        }
        else {
            let sel_C = temp1.filter(d => (!d.isDisplay && !d.isRemoved));
            if (sel_C.length > 0) {
                let index = 0;
                let diff = this.table_width - totalMinwidth;
                if (diff >= sel_C[index]['minWidth']) {
                    this.obj[sel_C[index].key]['isDisplay'] = true;
                }
            }
            else {
                let sel_D = temp1.filter(d => (!d.isDisplay && d.isRemoved));
                if (sel_D.length > 0) {
                    let index = (sel_D.length - 1);
                    let diff = this.table_width - totalMinwidth;
                    if (diff >= sel_D[index]['minWidth']) {
                        this.obj[sel_D[index].key]['isDisplay'] = true;
                    }
                }
            }
        }
    }
    sort() {
        let nType = {
            name: this.name,
            orderby: this.obj[this.name].orderBy
        };
        for (var key in this.obj) {
            if (key == this.name) {
                this.obj[this.name].isCurrent = true;
            }
            else {
                this.obj[key].isCurrent = false;
            }
        }
        this.sortClick.emit(nType);
    }
};
ColumnComponent.ɵfac = function ColumnComponent_Factory(t) { return new (t || ColumnComponent)(); };
ColumnComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ColumnComponent, selectors: [["sml-table-column"]], hostBindings: function ColumnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function ColumnComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { name: "name", width: "width", minwidth: "minwidth", id: "id", headerStyle: "headerStyle", alignment: "alignment", obj: "obj" }, outputs: { sortClick: "sortClick" }, decls: 1, vars: 1, consts: [[3, "width", "max-width", "min-width", "text-align", "ngStyle", "click", 4, "ngIf"], [3, "ngStyle", "click"], [1, "sort_icon_div", 3, "ngClass"], [1, "hi-0"], ["class", "fa fa-sort-asc sort_icon_asc cog-lightblue", 4, "ngIf"], ["class", "fa fa-sort-desc cog-lightblue", 4, "ngIf"], [1, "fa", "fa-sort-asc", "sort_icon_asc", "cog-lightblue"], [1, "fa", "fa-sort-desc", "cog-lightblue"]], template: function ColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ColumnComponent_th_0_Template, 7, 16, "th", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.obj[ctx.name].isDisplay);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgStyle, ɵngcc3.NgClass], styles: ["th[_ngcontent-%COMP%]{padding-top: 1px;padding-bottom: 1px;vertical-align: middle !important;cursor: pointer;overflow: hidden !important;}\n  .hi-0[_ngcontent-%COMP%]{height: 0px;}\n  .sort_icon_divl[_ngcontent-%COMP%] {display: inline-block;float: right;}\n  .sort_icon_divr[_ngcontent-%COMP%] {display: inline-block;float: left;}\n  .cog-lightblue[_ngcontent-%COMP%]{color:lightblue;}"] });
__decorate([
    Input()
], ColumnComponent.prototype, "name", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "width", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "obj", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "id", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "headerStyle", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "alignment", void 0);
__decorate([
    Output()
], ColumnComponent.prototype, "sortClick", void 0);

let HeaderComponent = class HeaderComponent {
    constructor() {
        this.width = '';
        this.minwidth = 700;
        this.maxwidth = '';
        this.includesearch = true;
        this.includecount = true;
        this.display = true;
        this.alignment = {};
        this.changerowcount = new EventEmitter;
        this.searchRecord = new EventEmitter;
        //##########RowCountDropdown################
        this.textObj = {
            name: 'search',
            placeholder: 'Search..',
            value: ''
        };
        this.drpObj = {
            drpDataList: [
                { id: '25', name: 'Show 25 entries' },
                { id: '50', name: 'Show 50 entries' },
                { id: '100', name: 'Show 100 entries' }
            ],
            selectedValue: '25',
        };
    }
    ngOnInit() {
    }
    changeRowDisplayCount(event) {
        this.changerowcount.emit(event);
    }
    searchClick(event) {
        this.searchRecord.emit(event);
    }
};
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["sml-table-header"]], inputs: { width: "width", minwidth: "minwidth", maxwidth: "maxwidth", includesearch: "includesearch", includecount: "includecount", display: "display", alignment: "alignment" }, outputs: { changerowcount: "changerowcount", searchRecord: "searchRecord" }, ngContentSelectors: _c18, decls: 4, vars: 1, consts: [["class", "row", 4, "ngIf"], ["headerReamaingContent", ""], [1, "row"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], [1, "dis-block", 3, "ngClass"], [3, "name", "value", "placeholder", "searchClick", 4, "ngIf"], [1, "dis-block"], [4, "ngTemplateOutlet"], [3, "listValue", "value", "changevalue", 4, "ngIf"], [3, "name", "value", "placeholder", "searchClick"], [3, "listValue", "value", "changevalue"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, HeaderComponent_div_1_Template, 3, 2, "div", 0);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, HeaderComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.display);
    } }, directives: function () { return [ɵngcc3.NgIf, ɵngcc3.NgClass, ɵngcc3.NgTemplateOutlet, SearchComponent, CountComponent]; }, styles: [".dis-block[_ngcontent-%COMP%]{display: inline-block;min-width: 200px;}\n    .f-l[_ngcontent-%COMP%]{float: left;}\n    .f-r[_ngcontent-%COMP%]{float: right;}\n    .pl-5[_ngcontent-%COMP%]{padding-left: 5px !important;}\n    .pr-5[_ngcontent-%COMP%]{padding-right: 5px !important;}"] });
__decorate([
    Input()
], HeaderComponent.prototype, "width", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "maxwidth", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "includesearch", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "includecount", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "display", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "alignment", void 0);
__decorate([
    Output()
], HeaderComponent.prototype, "changerowcount", void 0);
__decorate([
    Output()
], HeaderComponent.prototype, "searchRecord", void 0);

let FooterComponent = class FooterComponent {
    constructor() {
        this.width = '';
        this.minwidth = 700;
        this.maxwidth = '';
        this.includepagecount = true;
        this.includepagination = true;
        this.display = true;
        this.totalcount = 0;
        this.recordcount = 0;
        this.pagesize = 0;
        this.page = 1;
        this.alignment = {};
        this.changepage = new EventEmitter();
    }
    ngOnInit() {
    }
    pageNumberUpdate(event) {
        this.changepage.emit(event);
    }
};
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["sml-table-footer"]], inputs: { width: "width", minwidth: "minwidth", maxwidth: "maxwidth", includepagecount: "includepagecount", includepagination: "includepagination", display: "display", totalcount: "totalcount", recordcount: "recordcount", pagesize: "pagesize", page: "page", alignment: "alignment", obj: "obj" }, outputs: { changepage: "changepage" }, ngContentSelectors: _c19, decls: 2, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], [1, "dis-block", 3, "ngClass"], ["class", "pt-8", "style", "font-size:9pt;", 4, "ngIf"], [1, "dis-block"], [3, "noPage", "totalRecords", "pageSize", "clickPage", 4, "ngIf"], [1, "pt-8", 2, "font-size", "9pt"], [3, "noPage", "totalRecords", "pageSize", "clickPage"], ["class", "pt-8", 4, "ngIf"], [1, "pt-8"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c19);
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, FooterComponent_div_1_Template, 3, 2, "div", 0);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.display);
    } }, directives: function () { return [ɵngcc3.NgIf, ɵngcc3.NgClass, PaginationComponent]; }, styles: [".dis-block[_ngcontent-%COMP%]{\n    display: inline-block;\n}\n.f-l[_ngcontent-%COMP%]{\n    float: left;\n}\n.f-r[_ngcontent-%COMP%]{\n    float: right;\n}\n.pt-8[_ngcontent-%COMP%]{\n    padding-top: 8px;\n}\n.pl-5[_ngcontent-%COMP%]{\n    padding-left: 5px !important;\n}\n.pr-5[_ngcontent-%COMP%]{\n    padding-right: 5px !important;\n}"] });
__decorate([
    Input()
], FooterComponent.prototype, "obj", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "width", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "maxwidth", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "includepagecount", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "includepagination", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "display", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "totalcount", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "recordcount", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "pagesize", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "page", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "alignment", void 0);
__decorate([
    Output()
], FooterComponent.prototype, "changepage", void 0);

let PaginationComponent = class PaginationComponent {
    constructor() {
        this.clickPage = new EventEmitter();
        this.noItems = [];
        this.paginators = 5;
    }
    ngOnInit() {
        this.setPaginator(this.noPage);
    }
    setPaginator(n) {
        var result = this.totalRecords / this.pageSize;
        var noItems = Math.trunc(result);
        noItems = noItems + ((result > noItems) ? 1 : 0);
        this.nItem = noItems;
        var lastItem = this.noItems[4];
        var firstItem = this.noItems[0];
        var init = 0;
        var last = 0;
        this.noItems = [];
        if (n == 1) {
            if (this.nItem > this.paginators) {
                init = 1;
                last = this.paginators + 1;
            }
            else {
                init = 1;
                last = this.nItem + 1;
            }
        }
        else {
            if (this.nItem > this.paginators) {
                if (this.nItem == lastItem) {
                    if (n == (lastItem - this.paginators + 1)) {
                        if (n > 1) {
                            init = firstItem - 1;
                            last = lastItem;
                        }
                        else {
                            init = 1;
                            last = this.paginators + 1;
                        }
                    }
                    else {
                        init = firstItem;
                        last = lastItem + 1;
                    }
                }
                else {
                    if (n == 1) {
                        init = 1;
                        last = this.paginators + 1;
                    }
                    else {
                        init = n - 1;
                        last = this.paginators + init;
                    }
                }
                if ((last - 1) > this.nItem) {
                    last = this.nItem + 1;
                    init = last - this.paginators;
                }
            }
            else {
                init = 1;
                last = this.nItem + 1;
            }
        }
        for (var i = init; i < last; i++) {
            this.noItems.push(i);
        }
    }
    changePage(n) {
        this.noPage = n;
        this.clickPage.emit(n);
    }
};
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["sml-table-footer-pagination"]], inputs: { noPage: "noPage", totalRecords: "totalRecords", pageSize: "pageSize" }, outputs: { clickPage: "clickPage" }, decls: 8, vars: 7, consts: [[1, "pagination"], [1, "page-item", 3, "ngClass"], [1, "page-link", 2, "cursor", "pointer", 3, "click"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵelementStart(1, "li", 1);
        ɵngcc0.ɵɵelementStart(2, "a", 2);
        ɵngcc0.ɵɵlistener("click", function PaginationComponent_Template_a_click_2_listener() { return ctx.changePage(1); });
        ɵngcc0.ɵɵtext(3, "\u00AB");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, PaginationComponent_li_4_Template, 3, 5, "li", 3);
        ɵngcc0.ɵɵelementStart(5, "li", 1);
        ɵngcc0.ɵɵelementStart(6, "a", 2);
        ɵngcc0.ɵɵlistener("click", function PaginationComponent_Template_a_click_6_listener() { return ctx.changePage(ctx.nItem); });
        ɵngcc0.ɵɵtext(7, "\u00BB");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c4, ctx.noPage == 1));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.noItems);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c4, ctx.noPage == ctx.nItem));
    } }, directives: [ɵngcc3.NgClass, ɵngcc3.NgForOf], styles: [".page-link[_ngcontent-%COMP%]{font-size:9pt !important}"] });
__decorate([
    Input()
], PaginationComponent.prototype, "totalRecords", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "noPage", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    Output()
], PaginationComponent.prototype, "clickPage", void 0);

let TableBodyComponent = class TableBodyComponent {
    constructor() {
        this.data = [];
        this.dropdownButtons = [];
        this.dropdownButtonsList = false;
        this.columns = [];
        this.rowstyle = {};
        this.alignment = {};
        this.height = '';
        this.width = '';
        this.minwidth = 700;
        this.id = 'sml-datatable';
        this.isLoading = false;
        this.dropdownButtonStyle = {};
        this.actionClick = new EventEmitter;
        this.valueClick = new EventEmitter;
        this.textBoxEvent = new EventEmitter;
        this.dropdownButton = [];
    }
    ngOnInit() { }
    onResize(event) {
        let width = $('.' + this.id).width();
        // if (width > parseInt(this.minwidth)) {
        this.width = width;
        // }
    }
    trackByIndex(index) {
        return index;
    }
    trackByIndex1(index) {
        return index;
    }
    clickMethod(actionType, row) {
        let nType = {
            actionName: actionType,
            item: row
        };
        this.actionClick.emit(nType);
    }
    columnClick(row, col) {
        let nType = {
            row: row,
            column: col
        };
        if (!this.obj[col].isHtml) {
            this.valueClick.emit(nType);
        }
        if (this.obj[col].isHtml && this.obj[col].isCheckbox) {
            this.valueClick.emit(nType);
        }
    }
    textBoxMethod(row, col, type) {
        let nType = {
            row: row,
            type: type,
            column: col,
        };
        this.textBoxEvent.emit(nType);
    }
};
TableBodyComponent.ɵfac = function TableBodyComponent_Factory(t) { return new (t || TableBodyComponent)(); };
TableBodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableBodyComponent, selectors: [["sml-table-body"]], hostBindings: function TableBodyComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function TableBodyComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { data: "data", dropdownButtons: "dropdownButtons", dropdownButtonsList: "dropdownButtonsList", columns: "columns", rowstyle: "rowstyle", alignment: "alignment", height: "height", width: "width", minwidth: "minwidth", id: "id", isLoading: "isLoading", dropdownButtonStyle: "dropdownButtonStyle", obj: "obj" }, outputs: { actionClick: "actionClick", valueClick: "valueClick", textBoxEvent: "textBoxEvent" }, decls: 2, vars: 3, consts: [[3, "id", "background", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "id"], [3, "id", "width", "max-width", "min-width", "text-align", "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "id", "ngClass", "ngStyle", "click"], ["style", "white-space: pre-wrap; word-break: keep-all;", 4, "ngIf"], [2, "white-space", "pre-wrap", "word-break", "keep-all"], ["style", "text-align: center;", 4, "ngIf"], ["class", "btn-group dropdown", 4, "ngIf"], [1, "btn-group", "dropdown"], ["id", "idComponent", 1, "DropdownButton", 3, "click"], ["class", "caret DropdownButtonSpan dropdown-toggle", "data-toggle", "dropdown", 4, "ngIf"], ["class", "dropdown-menu DropdownButtonUl dropdown-menu-right", 3, "ngStyle", 4, "ngIf"], ["data-toggle", "dropdown", 1, "caret", "DropdownButtonSpan", "dropdown-toggle"], [1, "dropdown-menu", "DropdownButtonUl", "dropdown-menu-right", 3, "ngStyle"], [4, "ngFor", "ngForOf"], ["class", "DropdownButtonLi", 3, "click", 4, "ngIf"], [1, "DropdownButtonLi", 3, "click"], ["class", "btn-group dropdown pad-r-2", 4, "ngFor", "ngForOf"], [1, "btn-group", "dropdown", "pad-r-2"], ["type", "checkbox", 1, "pointer-cursor", 3, "name", "id", "ngModel", "ngModelChange"], [2, "width", "15px", "height", "15px", 3, "src"], [2, "text-align", "center"], ["type", "text", 2, "text-align", "right", "width", "80px", "padding-right", "2px", 3, "name", "id", "ngModel", "change", "keydown", "focus", "blur", "ngModelChange"], [1, "text-center", "h-auto"], ["src", "./assets/loading.gif", "width", "100"]], template: function TableBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TableBodyComponent_tr_0_Template, 2, 6, "tr", 0);
        ɵngcc0.ɵɵtemplate(1, TableBodyComponent_tr_1_Template, 3, 5, "tr", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByIndex1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isLoading);
    } }, directives: [ɵngcc3.NgForOf, ɵngcc3.NgIf, ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc6.CheckboxControlValueAccessor, ɵngcc6.NgControlStatus, ɵngcc6.NgModel, ɵngcc6.DefaultValueAccessor], styles: ["td[_ngcontent-%COMP%] {\n    padding-top: 1px;\n    padding-bottom: 1px;\n    vertical-align: middle !important;\n  }\ntr[_ngcontent-%COMP%]:hover{\n  background: #FFFF00;\n}\ntr[_ngcontent-%COMP%]:last-child    > td[_ngcontent-%COMP%] {\n\tborder-bottom: 0 !important;\n}\n.td_over[_ngcontent-%COMP%]{\n  overflow: hidden !important;\n}\n.dis-none[_ngcontent-%COMP%]{\n  display:none !important;\n}\n.pad-r-2[_ngcontent-%COMP%]{\n  padding-right:2px !important;\n}\n.breakWord[_ngcontent-%COMP%]{\n  word-break: break-all !important;\n}\n.text-center[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n    box-shadow: none !important;\n}\n.pointer-cursor[_ngcontent-%COMP%] {\n    cursor: pointer !important;\n}\n.DropdownButtonLi[_ngcontent-%COMP%] {\n    padding: 5px;\n    cursor: pointer;\n}\n.DropdownButtonLi[_ngcontent-%COMP%]:hover {\n    background-color:#e6e6e6;\n}\n.DropdownButton[_ngcontent-%COMP%]  {\n    -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;\n\t-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;\n\tbox-shadow:inset 0px 1px 0px 0px #ffffff;\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9f9f9), color-stop(1, #e9e9e9));\n\tbackground:-moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\n\tbackground:-webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\n\tbackground:-o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\n\tbackground:-ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\n\tbackground:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);\n\tbackground-color:#f9f9f9;\n\t-moz-border-radius:3px;\n\t-webkit-border-radius:3px;\n\tborder-radius:3px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#666666;\n\tfont-family:Arial;\n\tfont-size:0.8em;\n\tpadding:3px 6px;\n\ttext-decoration:none;\n}\n.DropdownButton[_ngcontent-%COMP%]:hover  {\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #e6e6e6), color-stop(1, #d6d6d6));\n\tbackground:-moz-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);\n\tbackground:-webkit-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);\n\tbackground:-o-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);\n\tbackground:-ms-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);\n\tbackground:linear-gradient(to bottom, #e6e6e6 5%, #d6d6d6 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e6e6e6', endColorstr='#d6d6d6',GradientType=0);\n\tbackground-color:#e6e6e6;\n}\n.DropdownButtonUl[_ngcontent-%COMP%] {\n\t  width: 100px;\n    margin-left: -50%;\n}\n.DropdownButtonSpan[_ngcontent-%COMP%] {\n\twidth: 23px;\n    height: 23px;\n    -moz-border-radius:3px;\n\t-webkit-border-radius:3px;\n    border-radius: 3px;\n    border: 1px solid #dcdcdc;\n    background-color: #f9f9f9;\n    padding-left: 1px;\n    margin-left: -2px;\n    padding-top: 2px;\n}\n.DropdownButtonSpan[_ngcontent-%COMP%]:hover, .DropdownButtonSpan[_ngcontent-%COMP%]:active {\n    background-color:#e6e6e6;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n    min-width: 0px;\n    font-size: 12px;\n}\n.h-auto[_ngcontent-%COMP%]{\n  height: auto !important;\n}"] });
__decorate([
    Input()
], TableBodyComponent.prototype, "data", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "dropdownButtons", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "dropdownButtonsList", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "columns", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "rowstyle", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "alignment", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "height", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "width", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "obj", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "id", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "isLoading", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "dropdownButtonStyle", void 0);
__decorate([
    Output()
], TableBodyComponent.prototype, "actionClick", void 0);
__decorate([
    Output()
], TableBodyComponent.prototype, "valueClick", void 0);
__decorate([
    Output()
], TableBodyComponent.prototype, "textBoxEvent", void 0);

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
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SearchComponent, selectors: [["sml-table-header-search"]], inputs: { value: "value", name: "name", placeholder: "placeholder", width: "width" }, outputs: { searchClick: "searchClick" }, decls: 3, vars: 4, consts: [[1, "form-row", "align-items-center"], [1, "col-md-12", "col-12", "mb-1"], ["type", "text", 1, "form-control", "h-39", "smlSearch", 3, "ngModel", "placeholder", "id", "name", "ngModelChange", "keyup"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function SearchComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchText = $event; })("keyup", function SearchComponent_Template_input_keyup_2_listener($event) { return ctx.keyup($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("placeholder", ctx.placeholder);
        ɵngcc0.ɵɵpropertyInterpolate1("id", "txt-", ctx.name, "");
        ɵngcc0.ɵɵpropertyInterpolate1("name", "txt-", ctx.name, "");
        ɵngcc0.ɵɵproperty("ngModel", ctx.searchText);
    } }, directives: [ɵngcc6.DefaultValueAccessor, ɵngcc6.NgControlStatus, ɵngcc6.NgModel], styles: [".h-39[_ngcontent-%COMP%]{height: 39px;}\n  .smlSearch[_ngcontent-%COMP%]{font-size: 9pt !important;border-radius:4px !important;border-color: #ccc !important}\n  .smlSearch[_ngcontent-%COMP%]:focus{outline: none;box-shadow: none;}"] });
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

let CountComponent = class CountComponent {
    constructor() {
        this.changevalue = new EventEmitter;
    }
    ngOnInit() {
    }
    getselectvalue(event) {
        this.changevalue.emit(event.id);
    }
};
CountComponent.ɵfac = function CountComponent_Factory(t) { return new (t || CountComponent)(); };
CountComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CountComponent, selectors: [["sml-table-header-count"]], inputs: { listValue: "listValue", value: "value" }, outputs: { changevalue: "changevalue" }, decls: 3, vars: 4, consts: [[1, "form-row", "align-items-center"], [1, "col-md-12", "col-12", "mb-1", 2, "padding-right", "4px !important"], ["bindLabel", "name", "bindValue", "id", 3, "items", "searchable", "clearable", "ngModel", "change", "ngModelChange"]], template: function CountComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "ng-select", 2);
        ɵngcc0.ɵɵlistener("change", function CountComponent_Template_ng_select_change_2_listener($event) { return ctx.getselectvalue($event); })("ngModelChange", function CountComponent_Template_ng_select_ngModelChange_2_listener($event) { return ctx.value = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("items", ctx.listValue)("searchable", false)("clearable", false)("ngModel", ctx.value);
    } }, directives: [ɵngcc9.NgSelectComponent, ɵngcc6.NgControlStatus, ɵngcc6.NgModel], styles: ["[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container {height: 39px !important;}\n    [_nghost-%COMP%]     .ng-select:focus{outline: none !important;box-shadow: none !important;}\n    [_nghost-%COMP%]     .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{font-size: 9pt !important;}\n    [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value {font-size: 9pt !important;}\n    .labelList[_ngcontent-%COMP%]{font-size:14px !important;position:relative;}\n    .w-100[_ngcontent-%COMP%]{width:100%;}\n    .mb-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}\n    .form-row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px;}\n    .col-12[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%;}\n    .mb-0[_ngcontent-%COMP%]{margin-bottom:0px!important;}\n    .form-row[_ngcontent-%COMP%] > .col[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%]{padding-right:5px;padding-left:5px;}\n    .d-flex[_ngcontent-%COMP%]{display:flex;}\n    .statusIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;}\n    .statusIcon[_ngcontent-%COMP%]{display:none;position:absolute;right:28px;top:0}\n    .invalidStatus[_ngcontent-%COMP%]   .statusIcon[_ngcontent-%COMP%], .validStatus[_ngcontent-%COMP%]   .statusIcon[_ngcontent-%COMP%]{display:block}\n    .floating[_ngcontent-%COMP%]{border:1px solid #d6d6d6;border-radius:2px;position:relative;padding:2px 0 0 0;}\n    .label[_ngcontent-%COMP%]{position:absolute;left:16px;top:50%;margin-bottom:0;transform:translateY(-50%);transition:all 0.1s;font-size:12px;}\n    .showFloat[_ngcontent-%COMP%]:focus    ~ .label[_ngcontent-%COMP%], .select2-container--focus[_ngcontent-%COMP%]    ~ .label[_ngcontent-%COMP%], .select2-container--open[_ngcontent-%COMP%]    + .label[_ngcontent-%COMP%], .float[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{top:3px;-webkit-transform:translateY(0);transform:translateY(0);font-size:9px;left:12px;font-weight:bold;}\n    .pl-0[_ngcontent-%COMP%]{padding-left:0px;}"] });
__decorate([
    Input()
], CountComponent.prototype, "listValue", void 0);
__decorate([
    Input()
], CountComponent.prototype, "value", void 0);
__decorate([
    Output()
], CountComponent.prototype, "changevalue", void 0);

let TableModule = class TableModule {
};
TableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TableModule });
TableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TableModule_Factory(t) { return new (t || TableModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            NgSelectModule
        ]] });

let NavbarComponent = class NavbarComponent {
    constructor() {
        this.iswelcome = 'false';
        this.navStyle = {
            logo: '/assets/logo.png'
        };
    }
    ngOnInit() {
    }
};
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["sml-navbar"]], inputs: { iswelcome: "iswelcome", navStyle: "navStyle" }, ngContentSelectors: _c23, decls: 7, vars: 3, consts: [[1, "navbar", "navbar-expand-sm", "customNavbar", "position-relative", 3, "ngStyle"], ["routerLink", "/dashboard", 1, "nav-link"], ["height", "20", "width", "40", "alt", "", 1, "logo", 3, "src"], [1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["class", "positionRight nav-item dropdown profileUser", 4, "ngIf"], [1, "positionRight", "nav-item", "dropdown", "profileUser"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c22);
        ɵngcc0.ɵɵelementStart(0, "nav", 0);
        ɵngcc0.ɵɵelementStart(1, "a", 1);
        ɵngcc0.ɵɵelement(2, "img", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 3);
        ɵngcc0.ɵɵelement(4, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵtemplate(6, NavbarComponent_li_6_Template, 2, 0, "li", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.navStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("src", (ctx.navStyle == null ? null : ctx.navStyle.logo) ? ctx.navStyle == null ? null : ctx.navStyle.logo : "/assets/logo.png", ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.iswelcome == "true");
    } }, directives: [ɵngcc3.NgStyle, ɵngcc10.RouterLinkWithHref, ɵngcc3.NgIf], styles: [".positionRight[_ngcontent-%COMP%]{position: absolute; right:10px; list-style: none}\n.customNavbar[_ngcontent-%COMP%] { background-color: #2d353c; }\n.navbar[_ngcontent-%COMP%]{padding: 2px 1rem !important}\n.nav-link[_ngcontent-%COMP%] { color: #ffffff; }\n.logo[_ngcontent-%COMP%] { width: 40px }"] });
__decorate([
    Input()
], NavbarComponent.prototype, "iswelcome", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "navStyle", void 0);

let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() { }
};
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MenuComponent, selectors: [["sml-navbar-menu"]], inputs: { label: "label", link: "link", menuStyle: "menuStyle" }, ngContentSelectors: _c18, decls: 4, vars: 2, consts: [["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item active", 4, "ngIf"], ["class", "nav-item dropdown position-relative", 4, "ngIf"], [1, "nav-item", "active"], [1, "nav-link", 3, "ngStyle", "routerLink"], [1, "nav-item", "dropdown", "position-relative"], ["href", "javascript:void()", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", 3, "ngStyle"], [1, "caret"], [1, "dropdown-menu"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1);
        ɵngcc0.ɵɵtemplate(2, MenuComponent_li_2_Template, 3, 3, "li", 2);
        ɵngcc0.ɵɵtemplate(3, MenuComponent_li_3_Template, 6, 2, "li", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.link);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.link == undefined);
    } }, directives: [ɵngcc3.NgIf, ɵngcc10.RouterLinkWithHref, ɵngcc3.NgStyle], styles: [".nav-link[_ngcontent-%COMP%] {\n\t\tcolor: #ffffff;\n\t}\n\t\n\t.positionRight[_ngcontent-%COMP%] {\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\tlist-style: none\n\t}\n\t.nav-link[_ngcontent-%COMP%]{font-size: 13px;}\n\t\n\t.dropdown-toggle[_ngcontent-%COMP%]{font-size: 13px;}\n\t\n\t.overlaybtn[_ngcontent-%COMP%] {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 9;\n\t\tdisplay: none;\n\t}\n\t\n\t.dropdown-menu[_ngcontent-%COMP%] {\n\t\tz-index: 9999;\n\t\tleft: 0;\n\t\tleft: unset;\n\t}\n\t\n\t.nav-link[_ngcontent-%COMP%] {\n\t\tcolor: #ffffff;\n\t}\n\t\n\t.userIcon[_ngcontent-%COMP%] {\n\t\tmargin-right: 12px\n\t}\n\t\n\t.userIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\t\twidth: 24px\n\t}\n\t\n\t.dropdown-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%]{font-size: 13px;}\n\t.dropdown-toggle[_ngcontent-%COMP%]::after{    top: 3px;\n\t\tposition: relative;}"] });
__decorate([
    Input()
], MenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "link", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "menuStyle", void 0);

let SubmenuComponent = class SubmenuComponent {
    constructor() {
        this.actionClick = new EventEmitter;
    }
    ngOnInit() { }
    menuClick() {
        this.actionClick.emit();
    }
};
SubmenuComponent.ɵfac = function SubmenuComponent_Factory(t) { return new (t || SubmenuComponent)(); };
SubmenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SubmenuComponent, selectors: [["sml-navbar-menu-submenu"]], inputs: { label: "label", link: "link", param: "param", submenuStyle: "submenuStyle" }, outputs: { actionClick: "actionClick" }, decls: 3, vars: 3, consts: [["class", "dropdown-item", 3, "routerLink", 4, "ngIf"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 3, "click"]], template: function SubmenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SubmenuComponent_a_0_Template, 2, 5, "a", 0);
        ɵngcc0.ɵɵtemplate(1, SubmenuComponent_a_1_Template, 2, 2, "a", 0);
        ɵngcc0.ɵɵtemplate(2, SubmenuComponent_a_2_Template, 2, 1, "a", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.link && ctx.param);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.link && ctx.param == undefined);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.link == undefined);
    } }, directives: [ɵngcc3.NgIf, ɵngcc10.RouterLinkWithHref], styles: [".overlaybtn[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9;\n    display: none;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n    z-index: 9999;\n    right: 0;\n    left: unset;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n    color: #ffffff;\n}\n\n.userIcon[_ngcontent-%COMP%] {\n    margin-right: 12px\n}\n\n.userIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 24px\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%]{font-size: 13px;}\n.dropdown-toggle[_ngcontent-%COMP%]::after{    top: 3px;\n    position: relative;}"] });
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

let ProfileMenuComponent = class ProfileMenuComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileMenuComponent.ɵfac = function ProfileMenuComponent_Factory(t) { return new (t || ProfileMenuComponent)(); };
ProfileMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProfileMenuComponent, selectors: [["sml-navbar-menu-profilemenu"]], inputs: { label: "label", imagepath: "imagepath", menuStyle: "menuStyle" }, ngContentSelectors: _c18, decls: 8, vars: 3, consts: [[1, "dropdown", "position-relative"], ["data-toggle", "dropdown", "href", "javascript:void", 1, "nav-link", "dropdown-toggle", 3, "ngStyle"], [1, "userIcon"], [3, "src"], [1, "dropdown-menu"]], template: function ProfileMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "a", 1);
        ɵngcc0.ɵɵelementStart(2, "span", 2);
        ɵngcc0.ɵɵelement(3, "img", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "span");
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 4);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.menuStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("src", ctx.imagepath, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, directives: [ɵngcc3.NgStyle], styles: [".overlaybtn[_ngcontent-%COMP%] {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 9;\n\t\tdisplay: none;\n\t}\n\t.dropdown-menu[_ngcontent-%COMP%] {\n\t\tz-index: 9999;\n\t\tright: 0;\n\t\tleft: unset;\n\t}\n\t.userIcon[_ngcontent-%COMP%] {\n\t\tmargin-right: 12px\n\t}\n\t.userIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\t\twidth: 24px\n\t}\n\t.dropdown-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%]{\n\t\tfont-size: 13px;\n\t}\n\t.dropdown-toggle[_ngcontent-%COMP%]::after{    \n\t\ttop: 3px;\n\t\tposition: relative;\n\t}\n\ta[_ngcontent-%COMP%] {\n\t\tcolor: white;\n\t}"] });
__decorate([
    Input()
], ProfileMenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], ProfileMenuComponent.prototype, "imagepath", void 0);
__decorate([
    Input()
], ProfileMenuComponent.prototype, "menuStyle", void 0);

let ProfileSubMenuComponent = class ProfileSubMenuComponent {
    constructor() {
        this.menuClick = new EventEmitter;
    }
    ngOnInit() { }
    clickMenu() {
        this.menuClick.emit();
    }
};
ProfileSubMenuComponent.ɵfac = function ProfileSubMenuComponent_Factory(t) { return new (t || ProfileSubMenuComponent)(); };
ProfileSubMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProfileSubMenuComponent, selectors: [["sml-navbar-menu-profilemenu-profilesubmenu"]], inputs: { label: "label", link: "link", submenuStyle: "submenuStyle" }, outputs: { menuClick: "menuClick" }, decls: 2, vars: 2, consts: [["class", "dropdown-item", "href", "#", 3, "ngStyle", "routerLink", 4, "ngIf"], ["class", "dropdown-item", "style", "cursor: pointer;", 3, "ngStyle", "click", 4, "ngIf"], ["href", "#", 1, "dropdown-item", 3, "ngStyle", "routerLink"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "ngStyle", "click"]], template: function ProfileSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ProfileSubMenuComponent_a_0_Template, 2, 3, "a", 0);
        ɵngcc0.ɵɵtemplate(1, ProfileSubMenuComponent_a_1_Template, 2, 2, "a", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.link);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.link);
    } }, directives: [ɵngcc3.NgIf, ɵngcc10.RouterLinkWithHref, ɵngcc3.NgStyle], styles: [".overlaybtn[_ngcontent-%COMP%] {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 9;\n\t\tdisplay: none;\n\t}\n\t.dropdown-menu[_ngcontent-%COMP%] {\n\t\tz-index: 9999;\n\t\tright: 0;\n\t\tleft: unset;\n\t}\n\t.userIcon[_ngcontent-%COMP%] {\n\t\tmargin-right: 12px\n\t}\n\t.userIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\t\twidth: 24px\n\t}\n\t.dropdown-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%]{\n\t\tfont-size: 13px;\n\t}\n\t.dropdown-toggle[_ngcontent-%COMP%]::after{    \n\t\ttop: 3px;\n\t\tposition: relative;\n\t}"] });
__decorate([
    Input()
], ProfileSubMenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], ProfileSubMenuComponent.prototype, "link", void 0);
__decorate([
    Input()
], ProfileSubMenuComponent.prototype, "submenuStyle", void 0);
__decorate([
    Output()
], ProfileSubMenuComponent.prototype, "menuClick", void 0);

let NavbarModule = class NavbarModule {
};
NavbarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NavbarModule });
NavbarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NavbarModule_Factory(t) { return new (t || NavbarModule)(); }, imports: [[
            CommonModule,
            RouterModule
        ]] });

let MultifileuploadComponent = class MultifileuploadComponent {
    constructor(http) {
        this.http = http;
        this.idInputFile = 'other';
        this.nameFiles = '';
        this.global_url = '';
        this.url = 'http://apinext.aaadev.info/apinext/';
        this.fileurl = 'http://apinext.aaadev.info/';
        this.dataBase = 'APPS';
        this.moreData = false;
        this.fileResponse = new EventEmitter;
        this.afterEdit = new EventEmitter;
        this.editContent = false;
        this.datas = [];
        this.description = '';
        this.textdata = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    upload(files) {
        this.uploadAndProgress(files);
    }
    DeleteFIles(value) {
        this.http.delete(this.url + "Models/files/" + value + "?api_key=" + this.GenericToken)
            .subscribe(res => {
            const body = {
                FilesGroupId: this.FilesGroupIdvalue
            };
            const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                this.datas = [];
                this.datas = res;
                for (let i = 0; i < this.datas.length; i++) {
                    let file_url = this.global_url + this.datas[i].FileUrl;
                    this.datas[i].FileUrl = file_url;
                }
                this.UploadedFileli = true;
            });
        });
    }
    ngOnInit() {
        this.getListdata();
    }
    getListdata() {
        this.http.get(this.url + "GetSystemInfo?passcode=flipper613")
            .subscribe(res => {
            this.GenericToken = res["GenericToken"];
            if (this.FilesGroupIdvalue) {
                const body = {
                    FilesGroupId: this.FilesGroupIdvalue
                };
                const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
                this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                    this.datas = res;
                    for (let i = 0; i < this.datas.length; i++) {
                        let file_url = this.global_url + this.datas[i].FileUrl;
                        this.datas[i].FileUrl = file_url;
                    }
                    this.UploadedFileli = true;
                });
            }
        });
    }
    uploadAndProgress(files) {
        var formData = new FormData();
        formData.append('file', files[0], files[0].name);
        formData.append('id', '0');
        formData.append('filegroupid', this.FilesGroupIdvalue);
        formData.append('mediaType', 'example');
        if (this.nameFiles != '') {
            formData.append('description', this.nameFiles);
        }
        else {
            formData.append('description', files[0].name);
        }
        this.http.post(this.url + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                this.uploadSuccess = true;
                this.UploadedFileli = true;
                this.filename = event.body["Description"];
                this.filelink = this.fileurl + event.body["FileUrl"];
                this.fileResponse.emit(event.body);
                this.getListdata();
                setTimeout(() => {
                    this.uploadSuccess = false;
                    this.percentDone = 0;
                }, 3000);
            }
        });
    }
    edit(data, i) {
        this.textdata = data.Description;
        this.contentIndex = i;
        this.editContent = true;
    }
    updateName(id) {
        var url = this.url + "Models/Files?api_key=" + this.GenericToken;
        var body = {
            FilesId: id,
            Description: this.textdata
        };
        this.http.post(url, body).subscribe(res => {
            this.afterEdit.emit(res);
            this.getListdata();
            this.esc();
        });
    }
    esc() {
        this.editContent = false;
        this.contentIndex = null;
    }
};
MultifileuploadComponent.ɵfac = function MultifileuploadComponent_Factory(t) { return new (t || MultifileuploadComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient)); };
MultifileuploadComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultifileuploadComponent, selectors: [["sml-multifileupload"]], inputs: { idInputFile: "idInputFile", nameFiles: "nameFiles", global_url: "global_url", url: "url", fileurl: "fileurl", dataBase: "dataBase", moreData: "moreData", label: "label", FilesGroupIdvalue: "FilesGroupIdvalue", styleZIndex: "styleZIndex" }, outputs: { fileResponse: "fileResponse", afterEdit: "afterEdit" }, decls: 22, vars: 13, consts: [[1, "w-100"], [1, "form-row", "align-items-center"], [1, "col-md-12", "col-12", "mb-0"], [1, "col-md-12", "col-10", "mb-0", "floating-border", 3, "ngStyle"], [1, "col-md-12", "dropdownarea", 3, "for"], [1, "d-flex", "w-100", "flex-column"], ["type", "file", 1, "drag", 3, "id", "ngStyle", "change"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100", "flex-column"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "uploadicon"], ["src", "./assets/upload.png"], [1, "d-flex", "flex-column", "position-relative", "w79"], [1, "fz14"], [4, "ngIf"], [1, "progressContainer"], [1, "procesbar"], ["class", "w-100 z9", 4, "ngIf"], ["class", "successmsg", 4, "ngIf"], [1, "listdata", "mt-1"], ["class", "w-100 fileuploadlist", 4, "ngIf"], [1, "w-100", "z9"], [1, "progressbar", 3, "ngStyle"], [1, "successmsg"], [1, "w-100", "fileuploadlist"], ["class", "w-100 d-flex justify-content-between align-content-around", 4, "ngFor", "ngForOf"], [1, "w-100", "d-flex", "justify-content-between", "align-content-around"], ["class", "w-100", 4, "ngIf"], ["class", "w-100 d-flex justify-content-between align-items-center", 4, "ngIf"], ["target", "_blank", 1, "float-left", 2, "width", "30%", 3, "href"], ["class", "float-left", "style", "width: 20%;", 4, "ngIf"], ["class", "float-left", "style", "width: 30%;", 4, "ngIf"], [1, "float-right", "d-flex", "justify-content-between", "align-content-around", "settingoption"], [1, "cross", "icons", "bg-success", "pointer", "d-flex", "justify-content-center", "align-items-center", 3, "click"], ["src", "./assets/pencil-edit-button.svg"], [1, "cross", "icons", "bg-danger", "pointer", "d-flex", "justify-content-center", "align-items-center", 3, "click"], ["src", "./assets/cross.svg"], [1, "float-left", 2, "width", "20%"], [1, "float-left", 2, "width", "30%"], [1, "w-100", "d-flex", "justify-content-between", "align-items-center"], ["type", "text", "name", "textdata", 1, "form-control", "w-75", 3, "value", "ngModel", "ngModelChange"], ["ctrl", "ngModel"], ["src", "./assets/checked.svg"], [1, "cross", "icons", "bg-dark", "pointer", "d-flex", "justify-content-center", "align-items-center", 3, "click"]], template: function MultifileuploadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "label", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "input", 6);
        ɵngcc0.ɵɵlistener("change", function MultifileuploadComponent_Template_input_change_6_listener($event) { return ctx.upload($event.target.files); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 7);
        ɵngcc0.ɵɵelementStart(8, "div", 8);
        ɵngcc0.ɵɵelementStart(9, "span", 9);
        ɵngcc0.ɵɵelement(10, "img", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 11);
        ɵngcc0.ɵɵelementStart(12, "div", 12);
        ɵngcc0.ɵɵtext(13, "Choose a file or drag it here. ");
        ɵngcc0.ɵɵelement(14, "br");
        ɵngcc0.ɵɵtemplate(15, MultifileuploadComponent_span_15_Template, 2, 1, "span", 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "div", 14);
        ɵngcc0.ɵɵelement(17, "div", 15);
        ɵngcc0.ɵɵtemplate(18, MultifileuploadComponent_div_18_Template, 2, 3, "div", 16);
        ɵngcc0.ɵɵtemplate(19, MultifileuploadComponent_div_19_Template, 2, 0, "div", 17);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "div", 18);
        ɵngcc0.ɵɵtemplate(21, MultifileuploadComponent_ul_21_Template, 2, 1, "ul", 19);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(8, _c25, ctx.styleZIndex));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.idInputFile);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.idInputFile);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(10, _c6, ctx.height, ctx.width));
        ɵngcc0.ɵɵadvance(9);
        ɵngcc0.ɵɵproperty("ngIf", ctx.percentDone);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.percentDone);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.uploadSuccess);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.UploadedFileli);
    } }, directives: [ɵngcc3.NgStyle, ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc6.DefaultValueAccessor, ɵngcc6.NgControlStatus, ɵngcc6.NgModel], styles: [".cursor-pointer[_ngcontent-%COMP%] {\n\t\tcursor: pointer;\n\t  }\n\t  \n\t  .node-content-wrapper[_ngcontent-%COMP%], .tree-children[_ngcontent-%COMP%] {\n\t\tposition: relative;\n\t  }\n\t  \n\t  .cr-slider-wrap[_ngcontent-%COMP%] {\n\t\tmargin: 8px auto !important\n\t  }\n\t  \n\t  .drag[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\topacity: 0;\n\t\tz-index:999999;\n\t  }\n\t  \n\t  .dropdownarea[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t\tborder: 2px dashed #ccc;\n\t\tpadding: 50px 15px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 65px;\n\t\ttext-align: center;\n\t\talign-items: center;\n\t\tposition: relative;\n\t  }\n\t  \n\t  .dropdownarea[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n\t\tcolor: #7d7c7c;\n\t\tfont-size: 17px;\n\t  }\n\t  \n\t  .pd5[_ngcontent-%COMP%] {\n\t\tpadding: 89px 9px 76px 0px;\n\t\tfloat: left;\n\t\twidth: 100%;\n\t  }\n\t  \n\t  .table-headed[_ngcontent-%COMP%] {\n\t\tpadding: 15px;\n\t\tdisplay: block;\n\t  }\n\t  \n\t  .mgt50[_ngcontent-%COMP%] {\n\t\tmargin-top: 50px;\n\t  }\n\t  \n\t  .btndefault[_ngcontent-%COMP%] {\n\t\tbackground-color: #f3f3f3;\n\t\tborder-color: #e6e6e6;\n\t\tcolor: #333;\n\t  }\n\t  \n\t  .cross[_ngcontent-%COMP%] {\n\t\tdisplay: inline-block;\n\t\tfont-size: 12px;\n\t\tpadding: 5px;\n\t\tcolor: red;\n\t\tfont-weight: bold;\n\t\twidth: 10px;\n\t\theight: 10px;\n\t\tmargin-left: 10px;\n\t  }\n\t  \n\t  .progressbar[_ngcontent-%COMP%] {\n\t\theight: 2px;\n\t\tbackground: green;\n\t\tfloat: left;\n\t  }\n\t  \n\t  .fz14[_ngcontent-%COMP%] {\n\t\tfont-size: 14px;\n\t  }\n\t  \n\t  .top50[_ngcontent-%COMP%] {\n\t\ttop: 31px;\n\t\tleft: -19px;\n\t  }\n\t  \n\t  .successmsg[_ngcontent-%COMP%] {\n\t\tfont-size: 14px;\n\t\tpadding: 10px;\n\t\tcolor: green;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\ttop: -82px;\n\t  }\n\t  \n\t  .fileuploadlist[_ngcontent-%COMP%] {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t  }\n\t  \n\t  .fileuploadlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tmargin-bottom: 10px;\n\t  }\n\t  \n\t  .fileuploadlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-size: 14px;\n\t\tcolor: #333;\n\t  }\n\t  \n\t  .pointer[_ngcontent-%COMP%] {\n\t\tcursor: pointer;\n\t  }\n\t  \n\t  .cross[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\t\theight: 10px;\n\t  }\n\t  \n\t  .listdata[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t\tmax-width: 463px\n\t  }\n\t  \n\t  .settingoption[_ngcontent-%COMP%] {\n\t\twidth: 66px;\n\t  }\n\t  \n\t  .icons[_ngcontent-%COMP%] {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tborder-radius: 3px;\n\t  }\n\t  \n\t  .checkbox[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin: 10px 0;\n\t  }\n\t  \n\t  .styled-checkbox[_ngcontent-%COMP%] {\n\t\tposition: absolute;\n\t\topacity: 0;\n\t  }\n\t  \n\t  .styled-checkbox[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tpadding: 0;\n\t  }\n\t  \n\t  .styled-checkbox[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]:before {\n\t\tcontent: \"\";\n\t\tmargin-right: 10px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: text-top;\n\t\twidth: 15px;\n\t\theight: 15px;\n\t\tborder: 1px solid #ccc;\n\t  }\n\t  \n\t  .styled-checkbox[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]:after {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tleft: 5px;\n\t\ttop: 2px;\n\t\theight: 9px;\n\t\twidth: 5px;\n\t\tborder: solid #09b4bd;\n\t\tborder-width: 0 2px 2px 0;\n\t\t-webkit-transform: rotate(45deg);\n\t\ttransform: rotate(45deg);\n\t  }\n\t  \n\t  .procesbar[_ngcontent-%COMP%] {\n\t\tbackground: #ccc;\n\t\theight: 2px;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t  }\n\t  \n\t  .progressContainer[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\ttop: 10px;\n\t  }\n\t  \n\t  .z9[_ngcontent-%COMP%] {\n\t\tz-index: 99;\n\t\tposition: relative;\n\t  }\n\t  \n\t  .w79[_ngcontent-%COMP%] {\n\t\twidth: 82%;\n\t  }\n\t  \n\t  .uploadicon[_ngcontent-%COMP%] {\n\t\tpadding: 10px;\n\t  }\n\t  \n\t  .w-100[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t  }\n\t  \n\t  .mb-5[_ngcontent-%COMP%] {\n\t\tmargin-bottom: 3rem!important\n\t  }\n\t  \n\t  .form-row[_ngcontent-%COMP%] {\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n\t\t-ms-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\tmargin-right: -5px;\n\t\tmargin-left: -5px;\n\t  }\n\t  \n\t  .col-12[_ngcontent-%COMP%] {\n\t\tflex: 0 0 100%;\n\t\tmax-width: 100%;\n\t  }\n\t  \n\t  .mb-0[_ngcontent-%COMP%] {\n\t\tmargin-bottom: 0px!important;\n\t  }\n\t  \n\t  .form-row[_ngcontent-%COMP%] > .col[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%] {\n\t\tpadding-right: 5px;\n\t\tpadding-left: 5px;\n\t  }\n\t  \n\t  .d-flex[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t  }\n\t  \n\t  .position-relative[_ngcontent-%COMP%] {\n\t\tposition: relative;\n\t  }\n\t  \n\t  .border[_ngcontent-%COMP%] {\n\t\tborder: 1px solid #dee2e6!important\n\t  }\n\t  \n\t  .flex-column[_ngcontent-%COMP%] {\n\t\tflex-direction: column\n\t  }\n\t  \n\t  .align-content-around[_ngcontent-%COMP%] {\n\t\talign-content: space-around\n\t  }\n\t  \n\t  .bg-success[_ngcontent-%COMP%] {\n\t\tbackground-color: #28a745!important;\n\t  }\n\t  \n\t  .bg-danger[_ngcontent-%COMP%] {\n\t\tbackground-color: #dc3545!important;\n\t  }\n\t  \n\t  .justify-content-center[_ngcontent-%COMP%] {\n\t\t-webkit-box-pack: center!important;\n\t\t-ms-flex-pack: center!important;\n\t\tjustify-content: center!important;\n\t  }\n\t  \n\t  .float-right[_ngcontent-%COMP%] {\n\t\tfloat: right!important;\n\t  }\n\t  \n\t  .justify-content-between[_ngcontent-%COMP%] {\n\t\t-webkit-box-pack: justify!important;\n\t\t-ms-flex-pack: justify!important;\n\t\tjustify-content: space-between!important;\n\t  }\n\t  .floating-border[_ngcontent-%COMP%]{\n\t\tborder:1px solid #ccc;\n\t\tpadding: 15px !important;\n\t  }"] });
MultifileuploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], MultifileuploadComponent.prototype, "idInputFile", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "label", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "nameFiles", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "global_url", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "dataBase", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "FilesGroupIdvalue", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "moreData", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "styleZIndex", void 0);
__decorate([
    Output()
], MultifileuploadComponent.prototype, "fileResponse", void 0);
__decorate([
    Output()
], MultifileuploadComponent.prototype, "afterEdit", void 0);

let MultifileuploadModule = class MultifileuploadModule {
};
MultifileuploadModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MultifileuploadModule });
MultifileuploadModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MultifileuploadModule_Factory(t) { return new (t || MultifileuploadModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });

let ImagesLightBoxComponent = class ImagesLightBoxComponent {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://apinext.aaadev.info/apinext/';
        this.fileurl = 'http://preview.abacuscrm.net/media/';
        this.database = 'APPS';
        this.FilesGroupId = "0";
        this.fileResponse = new EventEmitter;
        this.body = {};
        this.allowFiles = ['image/jpeg', 'image/png', 'application/pdf', 'audio/mp3', 'video/mp4', 'text/plain'];
        this.GenericToken = "";
        this.imagesData = [];
        this.error_message = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.slideIndex = 1;
        this.slideDescription = '';
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
                this.getListdata();
            });
        }
        else {
            this.getListdata();
        }
    }
    getListdata() {
        if (this.FilesGroupId) {
            this.body['FilesGroupId'] = this.FilesGroupId;
            const url = this.apiURL + "Data/Exec/" + this.database + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, this.body, this.httpOptionJSON).subscribe(res => {
                let temp = [];
                this.imagesData = [];
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    let nType = {
                        path: this.fileurl + temp[i].FileUrl,
                        description: temp[i].Description,
                        FilesId: temp[i].FilesId,
                        type: this.getFileType(temp[i].FileUrl)
                    };
                    this.imagesData.push(nType);
                }
            });
        }
    }
    getFileType(url) {
        let arr = url.split(".");
        if (arr && arr.length == 2) {
            if (arr[1] == 'jpg' || arr[1] == 'JPG' || arr[1] == 'jpeg' || arr[1] == 'JPEG' || arr[1] == 'png' || arr[1] == 'PNG' || arr[1] == 'gif' || arr[1] == 'GIF' || arr[1] == 'svg' || arr[1] == 'SVG') {
                return 'Image';
            }
            if (arr[1] == 'txt' || arr[1] == 'TXT') {
                return 'Text';
            }
            if (arr[1] == 'mp3' || arr[1] == 'MP3') {
                return 'Audio';
            }
            if (arr[1] == 'mp4' || arr[1] == 'MP4') {
                return 'Video';
            }
            if (arr[1] == 'pdf' || arr[1] == 'PDF') {
                return 'Pdf';
            }
            if (arr[1] == 'csv' || arr[1] == 'CSV') {
                return 'Csv';
            }
            if (arr[1] == 'doc' || arr[1] == 'DOC') {
                return 'Doc';
            }
            if (arr[1] == 'ppt' || arr[1] == 'PPT') {
                return 'Ppt';
            }
            if (arr[1] == 'xls' || arr[1] == 'XLS') {
                return 'Xls';
            }
        }
        else {
            return 'File';
        }
    }
    uploadAndProgress(files) {
        console.log(files);
        let flag = false;
        for (let j = 0; j < files.length; j++) {
            let sel = this.allowFiles.filter(d => d == files[j].type);
            if (sel.length == 0) {
                flag = true;
                break;
            }
        }
        if (flag) {
            this.error_message = "Invalid File Format. Allow Only This Format " + this.allowFiles.toString() + ".";
        }
        else {
            this.error_message = "";
            for (let i = 0; i < files.length; i++) {
                var formData = new FormData();
                formData.append('file', files[i], files[i].name);
                formData.append('id', '0');
                formData.append('filegroupid', this.FilesGroupId);
                formData.append('mediaType', 'example');
                formData.append('description', files[i].name);
                this.http.post(this.apiURL + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
                    .subscribe(event => {
                    if (event.type === HttpEventType.UploadProgress) {
                        this.percentDone = Math.round(100 * event.loaded / event.total);
                    }
                    else if (event instanceof HttpResponse) {
                        this.uploadSuccess = true;
                        this.fileResponse.emit(event.body);
                        this.FilesGroupId = event.body['FilesGroupId'];
                        this.getListdata();
                        setTimeout(() => {
                            this.uploadSuccess = false;
                            this.percentDone = 0;
                        }, 3000);
                    }
                });
            }
        }
    }
    deleteFIles(value, index) {
        this.http.delete(this.apiURL + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(res => {
            if (res) {
                this.imagesData.splice(index, 1);
            }
        });
    }
    openModal() {
        document.getElementById("myModallightbox").style.display = "block";
    }
    closeModal() {
        document.getElementById("myModallightbox").style.display = "none";
    }
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }
    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i]['style'].display = "none";
        }
        slides[this.slideIndex - 1]['style'].display = "block";
        this.slideDescription = this.imagesData[this.slideIndex - 1].description;
    }
};
ImagesLightBoxComponent.ɵfac = function ImagesLightBoxComponent_Factory(t) { return new (t || ImagesLightBoxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient)); };
ImagesLightBoxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ImagesLightBoxComponent, selectors: [["sml-images-light-box"]], inputs: { apiURL: "apiURL", fileurl: "fileurl", database: "database", FilesGroupId: "FilesGroupId", body: "body", allowFiles: "allowFiles", GenericToken: "GenericToken" }, outputs: { fileResponse: "fileResponse" }, decls: 34, vars: 7, consts: [[1, "w-100"], ["class", "error-msg", 4, "ngIf"], [1, "dropdownarea", "mar-b-0"], [1, "d-flex", "w-100", "flex-column"], ["type", "file", "multiple", "", "id", "other", 1, "drag", 3, "change"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100", "flex-column"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "uploadicon"], ["src", "./assets/upload.png"], [1, "d-flex", "flex-column", "position-relative", "w79"], [1, "fz14"], [4, "ngIf"], [1, "progressContainer"], [1, "procesbar"], ["class", "w-100 z9", 4, "ngIf"], ["class", "successmsg", 4, "ngIf"], [1, "col-md-12", "mt-2", "sml-light-box-scroll-y", 2, "padding-right", "8px"], [1, "row"], ["class", "column position-relative", 4, "ngFor", "ngForOf"], ["id", "myModallightbox", 1, "modal"], [1, "close", "cursor", 3, "click"], [1, "modal-content"], [2, "margin", "auto", "width", "80%"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [1, "prev", 3, "click"], [1, "next", 3, "click"], [1, "caption-container"], ["id", "caption", 2, "margin-bottom", "0px"], [1, "error-msg"], [1, "w-100", "z9"], [1, "progressbar", 3, "ngStyle"], [1, "successmsg"], [1, "column", "position-relative"], [1, "remove_icon"], [1, "fa", "fa-times", 3, "click"], ["height", "96", "width", "100%", "onerror", "this.onerror=null; this.src='assets/404_images.png'", 1, "hover-shadow", "cursor", 3, "src", "click"], ["target", "_blank", 3, "href"], ["src", "assets/txt_icon.png", "height", "96", "width", "100%", 1, "hover-shadow", "cursor"], ["src", "assets/pdf_icon.png", "height", "96", "width", "100%", 1, "hover-shadow", "cursor"], ["src", "assets/audio_icon.png", "height", "96", "width", "100%", 1, "hover-shadow", "cursor"], ["src", "assets/video_icon.png", "height", "96", "width", "100%", 1, "hover-shadow", "cursor"], ["src", "assets/doc_icon.png", "height", "96", "width", "100%", 1, "hover-shadow", "cursor"], ["src", "assets/csv_icon.png", "height", "96", "width", "100%", 1, "hover-shadow", "cursor"], ["src", "assets/ppt_icon.png", "height", "96", "width", "100%", 1, "hover-shadow", "cursor"], ["src", "assets/xls_icon.png", "height", "96", "width", "100%", 1, "hover-shadow", "cursor"], [1, "mySlides"], [1, "numbertext"], ["onerror", "this.onerror=null; this.src='assets/404_images.png'", "height", "450", 2, "width", "100%", 3, "src"]], template: function ImagesLightBoxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ImagesLightBoxComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "label", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "input", 4);
        ɵngcc0.ɵɵlistener("change", function ImagesLightBoxComponent_Template_input_change_4_listener($event) { return ctx.uploadAndProgress($event.target.files); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵelementStart(7, "span", 7);
        ɵngcc0.ɵɵelement(8, "img", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelementStart(10, "div", 10);
        ɵngcc0.ɵɵtext(11, "Choose a file or drag it here. ");
        ɵngcc0.ɵɵelement(12, "br");
        ɵngcc0.ɵɵtemplate(13, ImagesLightBoxComponent_span_13_Template, 2, 1, "span", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 12);
        ɵngcc0.ɵɵelement(15, "div", 13);
        ɵngcc0.ɵɵtemplate(16, ImagesLightBoxComponent_div_16_Template, 2, 3, "div", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(17, ImagesLightBoxComponent_div_17_Template, 2, 0, "div", 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "div", 16);
        ɵngcc0.ɵɵelementStart(19, "div", 17);
        ɵngcc0.ɵɵtemplate(20, ImagesLightBoxComponent_div_20_Template, 12, 9, "div", 18);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "div", 19);
        ɵngcc0.ɵɵelementStart(22, "span", 20);
        ɵngcc0.ɵɵlistener("click", function ImagesLightBoxComponent_Template_span_click_22_listener() { return ctx.closeModal(); });
        ɵngcc0.ɵɵtext(23, "\u00D7");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(24, "div", 21);
        ɵngcc0.ɵɵelementStart(25, "div", 22);
        ɵngcc0.ɵɵtemplate(26, ImagesLightBoxComponent_div_26_Template, 4, 3, "div", 23);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(27, "a", 24);
        ɵngcc0.ɵɵlistener("click", function ImagesLightBoxComponent_Template_a_click_27_listener() { return ctx.plusSlides(-1); });
        ɵngcc0.ɵɵtext(28, "\u276E");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(29, "a", 25);
        ɵngcc0.ɵɵlistener("click", function ImagesLightBoxComponent_Template_a_click_29_listener() { return ctx.plusSlides(1); });
        ɵngcc0.ɵɵtext(30, "\u276F");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(31, "div", 26);
        ɵngcc0.ɵɵelementStart(32, "p", 27);
        ɵngcc0.ɵɵtext(33);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.error_message != "");
        ɵngcc0.ɵɵadvance(12);
        ɵngcc0.ɵɵproperty("ngIf", ctx.percentDone);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.percentDone);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.uploadSuccess);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.imagesData);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.imagesData);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵtextInterpolate(ctx.slideDescription);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc3.NgStyle], styles: [".mar-b-0[_ngcontent-%COMP%]{\n    margin-bottom: 0px !important;\n}\n.dropdownarea[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px dashed #ccc;\n    padding: 35px 0px;\n    display: flex;\n    align-items: center;\n    height: 65px;\n    text-align: center;\n    align-items: center;\n    position: relative;\n}\n.progressContainer[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    top: 2px;\n}\n.drag[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    z-index:999999;\n}   \n.progressbar[_ngcontent-%COMP%] {\n    height: 2px;\n    background: green;\n    float: left;\n}\n.fz14[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n.successmsg[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: green;\n    width: 25%;\n    text-align: right;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 10px;\n}\n.procesbar[_ngcontent-%COMP%] {\n    background: #ccc;\n    height: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.z9[_ngcontent-%COMP%] {\n    z-index: 99;\n    position: relative;\n}\n.w79[_ngcontent-%COMP%] {\n    width: 82%;\n}\n.uploadicon[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n.w-100[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.d-flex[_ngcontent-%COMP%] {\n    display: flex;\n}\n.position-relative[_ngcontent-%COMP%] {\n    position: relative;\n}\n.flex-column[_ngcontent-%COMP%] {\n    flex-direction: column\n}  \n.justify-content-between[_ngcontent-%COMP%] {\n    -webkit-box-pack: justify!important;\n    -ms-flex-pack: justify!important;\n    justify-content: space-between!important;\n}\n.row[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%] {\n    padding-right: 8px;\n    padding-bottom: 8px;\n}\n.row[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.column[_ngcontent-%COMP%] {\n    float: left;\n    width: 25%;\n}\n.modal[_ngcontent-%COMP%] {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: black;\n  }\n.modal-content[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: black;\n    margin: auto;\n    padding: 0;\n    width: 100%;\n    max-width: 1200px;\n}\n.close[_ngcontent-%COMP%] {\n    color: white;\n    position: absolute;\n    top: 10px;\n    right: 25px;\n    font-size: 35px;\n    font-weight: bold;\n}\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n    color: #999;\n    text-decoration: none;\n    cursor: pointer;\n}\n.mySlides[_ngcontent-%COMP%] {\n    display: none;\n}\n.cursor[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: auto;\n    padding: 16px;\n    color: white !important;\n    font-weight: bold;\n    font-size: 20px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    user-select: none;\n    -webkit-user-select: none;\n}\n.next[_ngcontent-%COMP%] {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\n    background-color: rgba(243, 167, 167, 0.8);\n}\n.numbertext[_ngcontent-%COMP%] {\n    color: #f2f2f2;\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n.caption-container[_ngcontent-%COMP%] {\n    text-align: center;\n    background-color: black;\n    padding: 16px 16px;\n    color: white;\n}\n.demo[_ngcontent-%COMP%] {\n    opacity: 0.6;\n}\n.active[_ngcontent-%COMP%], .demo[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n}\nimg.hover-shadow[_ngcontent-%COMP%] {\n    transition: 0.3s;\n}\n.hover-shadow[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.sml-light-box-scroll-y[_ngcontent-%COMP%] {\n    height: auto;\n    max-height:315px;\n    overflow-y: hidden;\n    overflow-x: hidden;\n}\n.sml-light-box-scroll-y[_ngcontent-%COMP%]:hover {\n    overflow-y: overlay;\n}\n.sml-light-box-scroll-y[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 8px;\n    background-color: #fbfbfb;\n}\n.sml-light-box-scroll-y[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    width: 3px;\n    background: rgba(222, 222, 222, .75);\n}\n.sml-light-box-scroll-y[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, .5);\n    border-radius: 4px;\n}\n.remove_icon[_ngcontent-%COMP%]{\n  position: absolute;\n  right: 13px;\n  top: -2px;\n  cursor: pointer;\n}\n.error-msg[_ngcontent-%COMP%]{\n  font-size: 13px;\n  text-align: center;\n  color: red\n}"] });
ImagesLightBoxComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "database", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "FilesGroupId", void 0);
__decorate([
    Output()
], ImagesLightBoxComponent.prototype, "fileResponse", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "body", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "allowFiles", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "GenericToken", void 0);

let ImagesLightBoxModule = class ImagesLightBoxModule {
};
ImagesLightBoxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ImagesLightBoxModule });
ImagesLightBoxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ImagesLightBoxModule_Factory(t) { return new (t || ImagesLightBoxModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });

let ImageUploadBoxComponent = class ImageUploadBoxComponent {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.fileurl = 'http://assist.aaadev.info/media/';
        this.database = 'ASSIST';
        this.FilesGroupId = "0";
        this.FileId = "0";
        this.fileResponse = new EventEmitter;
        this.allowFiles = ['image/jpeg', 'image/png'];
        this.GenericToken = "";
        this.imagesData = {};
        this.isLoading = false;
        this.error_message = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
                this.getListdata();
            });
        }
        else {
            this.getListdata();
        }
    }
    getListdata() {
        if (this.FilesGroupId) {
            const body = {
                FilesGroupId: this.FilesGroupId
            };
            const url = this.apiURL + "Data/Exec/" + this.database + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                let temp = [];
                this.imagesData = {};
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    if (this.FileId == temp[i].FilesId) {
                        let nType = {
                            path: this.fileurl + temp[i].FileUrl,
                            description: temp[i].Description,
                            FilesId: temp[i].FilesId,
                            type: "Image"
                        };
                        this.imagesData = nType;
                    }
                }
                this.isLoading = true;
            }, erorr => {
                this.isLoading = true;
            });
        }
        else {
            this.isLoading = true;
        }
    }
    uploadAndProgress(files) {
        console.log(files);
        let flag = false;
        for (let j = 0; j < files.length; j++) {
            let sel = this.allowFiles.filter(d => d == files[j].type);
            if (sel.length == 0) {
                flag = true;
                break;
            }
        }
        if (flag) {
            this.error_message = "Invalid File Format. Allow Only This Format " + this.allowFiles.toString() + ".";
        }
        else {
            this.error_message = "";
            for (let i = 0; i < files.length; i++) {
                var formData = new FormData();
                formData.append('file', files[i], files[i].name);
                formData.append('id', '0');
                formData.append('filegroupid', this.FilesGroupId);
                formData.append('mediaType', 'example');
                formData.append('description', files[i].name);
                this.http.post(this.apiURL + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
                    .subscribe(event => {
                    if (event.type === HttpEventType.UploadProgress) {
                        this.percentDone = Math.round(100 * event.loaded / event.total);
                    }
                    else if (event instanceof HttpResponse) {
                        this.fileResponse.emit(event.body);
                        this.FilesGroupId = event.body['FilesGroupId'];
                        setTimeout(() => {
                            this.percentDone = 0;
                            let nType = {
                                path: this.fileurl + event.body['FileUrl'],
                                description: event.body['Description'],
                                FilesId: event.body['FilesId'],
                                type: "Image"
                            };
                            this.imagesData = nType;
                        }, 3000);
                    }
                });
            }
        }
    }
    deleteFIles(value) {
        this.http.delete(this.apiURL + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(res => {
            if (res) {
                this.imagesData = {};
            }
        });
    }
};
ImageUploadBoxComponent.ɵfac = function ImageUploadBoxComponent_Factory(t) { return new (t || ImageUploadBoxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient)); };
ImageUploadBoxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ImageUploadBoxComponent, selectors: [["sml-image-upload-box"]], inputs: { apiURL: "apiURL", fileurl: "fileurl", database: "database", FilesGroupId: "FilesGroupId", FileId: "FileId", allowFiles: "allowFiles", GenericToken: "GenericToken" }, outputs: { fileResponse: "fileResponse" }, decls: 3, vars: 3, consts: [["class", "error-msg", 4, "ngIf"], ["class", "uploadImage d-flex align-items-center flex-column", 4, "ngIf"], ["class", "preview-img", 4, "ngIf"], [1, "error-msg"], [1, "uploadImage", "d-flex", "align-items-center", "flex-column"], [1, "fa", "fa-camera", "fz24"], ["type", "file", "id", "fileinput", 1, "drag", 3, "change"], [1, "fz24"], [4, "ngIf"], ["class", "progressContainer", 4, "ngIf"], [1, "progressContainer"], [1, "procesbar"], [1, "w-100", "z9"], [1, "progressbar", 3, "ngStyle"], [1, "preview-img"], ["height", "147", "width", "100%", "onerror", "this.onerror=null; this.src='assets/404_images.png'", 1, "hover-shadow", "cursor", 3, "src"], [1, "remove_icon"], [1, "fa", "fa-times", 3, "click"]], template: function ImageUploadBoxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ImageUploadBoxComponent_div_0_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ImageUploadBoxComponent_div_1_Template, 8, 2, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ImageUploadBoxComponent_div_2_Template, 4, 1, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.error_message != "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.imagesData.path && ctx.isLoading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.imagesData.path && ctx.isLoading);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgStyle], styles: [".uploadImage[_ngcontent-%COMP%]{background-color:#777777;border-radius:3px;padding:40px 20px;width:100%;font-size:14px;color:#cccccc;}\n  .uploadImage[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:30px;}\n  .remove_icon[_ngcontent-%COMP%]{position:absolute;right:13px;top:-2px;cursor:pointer;}\n  .drag[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;z-index:999999;}\n  img.hover-shadow[_ngcontent-%COMP%]{transition:0.3s;}\n  .hover-shadow[_ngcontent-%COMP%]:hover{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}\n  .cursor[_ngcontent-%COMP%]{cursor:pointer;}\n  .preview-img[_ngcontent-%COMP%]{position:relative;width:100%;}\n  .progressContainer[_ngcontent-%COMP%]{width:100%;position:relative;top:2px;}\n  .progressbar[_ngcontent-%COMP%]{height:2px;background:green;float:left;}\n  .procesbar[_ngcontent-%COMP%]{background:#ccc;height:2px;position:absolute;top:0;left:0;width:100%;}\n  .z9[_ngcontent-%COMP%]{z-index:99;position:relative;}\n  .error-msg[_ngcontent-%COMP%]{font-size:13px;text-align:center;color:red}"] });
ImageUploadBoxComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "database", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "FilesGroupId", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "FileId", void 0);
__decorate([
    Output()
], ImageUploadBoxComponent.prototype, "fileResponse", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "allowFiles", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "GenericToken", void 0);

let ImageUplaodBoxModule = class ImageUplaodBoxModule {
};
ImageUplaodBoxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ImageUplaodBoxModule });
ImageUplaodBoxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ImageUplaodBoxModule_Factory(t) { return new (t || ImageUplaodBoxModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });

let InputTagComponent = class InputTagComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.label = 'Label Name';
        this.name = 'sml-tag-input';
        this.items = [];
        this.getvalue = new EventEmitter();
        this.switchStyle = true;
        this.signalStyle = false;
        this.staticStyle = true;
    }
    ngOnInit() {
    }
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
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            let css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    }
    onItemAdded(event) {
        this.getvalue.emit(this.items);
    }
    onItemRemove(event) {
        this.getvalue.emit(this.items);
    }
};
InputTagComponent.ɵfac = function InputTagComponent_Factory(t) { return new (t || InputTagComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
InputTagComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputTagComponent, selectors: [["sml-tag-input"]], inputs: { label: "label", name: "name", items: "items", switchStyle: "switchStyle", signalStyle: "signalStyle", staticStyle: "staticStyle", style: "style", borderStyle: "borderStyle", valueStyle: "valueStyle" }, outputs: { getvalue: "getvalue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 12, consts: [[1, "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], ["theme", "bootstrap3-info", 3, "ngModel", "modelAsStrings", "ngModelChange", "onAdd", "onRemove"], [1, "label", 3, "for", "ngStyle"]], template: function InputTagComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "tag-input", 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function InputTagComponent_Template_tag_input_ngModelChange_2_listener($event) { return ctx.items = $event; })("onAdd", function InputTagComponent_Template_tag_input_onAdd_2_listener($event) { return ctx.onItemAdded($event); })("onRemove", function InputTagComponent_Template_tag_input_onRemove_2_listener($event) { return ctx.onItemRemove($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "label", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(7, _c26, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.items)("modelAsStrings", true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.name);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label, " ");
    } }, directives: [ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc11.TagInputComponent, ɵngcc6.NgControlStatus, ɵngcc6.NgModel], styles: ["[_nghost-%COMP%]{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n\t.position-relative[_ngcontent-%COMP%]{position:relative;}\n\t.input-field[_ngcontent-%COMP%]{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.signal-line[_ngcontent-%COMP%]{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label[_ngcontent-%COMP%]{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;}\n\t.float-group[_ngcontent-%COMP%]{position:relative;padding:1px 1px 1px 1px;}\n\t.float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t[_nghost-%COMP%]     tag-input .ng2-tag-input.bootstrap3-info{height:auto !important;line-height:33px !important;}\n\t[_nghost-%COMP%]     tag-input tag{line-height:20px !important;height:27px !important;}\n\t[_nghost-%COMP%]     delete-icon svg{height:22px !important;}\n\t[_nghost-%COMP%]     tag-input .bootstrap3-info.ng2-tag-input{background: var(--back-color);padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}\n\t[_nghost-%COMP%]     tag-input .ng2-tag-input{border:none !important;box-shadow:none !important;}\n\t[_nghost-%COMP%]     .ng2-tag-input__text-input{padding:0px !important;height:32px !important;background: var(--back-color);}"] });
InputTagComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], InputTagComponent.prototype, "label", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "name", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "items", void 0);
__decorate([
    Output()
], InputTagComponent.prototype, "getvalue", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "style", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "valueStyle", void 0);

let InputTagModule = class InputTagModule {
};
InputTagModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputTagModule });
InputTagModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputTagModule_Factory(t) { return new (t || InputTagModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule,
            TagInputModule
        ]] });

let ListSearchComponent = class ListSearchComponent {
    constructor(http, elementRef) {
        this.http = http;
        this.elementRef = elementRef;
        this.id = 'sml-list-search';
        this.name = 'sml-list-search';
        this.label = 'Label Name';
        this.value = 'Los';
        this.listData = [];
        this.getvalue = new EventEmitter();
        this.GenericToken = "";
        this.database = "ASSIST";
        this.schema = "dbo";
        this.procedure = "ZIPCODE_ListCities";
        this.fieldName = "City";
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.switchStyle = true;
        this.signalStyle = false;
        this.staticStyle = true;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.keyword = 'name';
    }
    ngOnInit() {
        this.getToken();
    }
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
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            let css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
            });
        }
    }
    setSelectedData(event) {
        this.getvalue.emit(event);
    }
    onChangeSearch(search) {
        const body = {
            SearchString: search
        };
        const url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
            if (res) {
                this.listData = [];
                let temp = [];
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    let nType = {
                        id: i + 1,
                        name: temp[i][this.fieldName]
                    };
                    this.listData.push(nType);
                }
            }
            else {
                this.listData = [];
            }
        }, error => {
            this.listData = [];
        });
    }
    onFocused(e) {
        // do something
    }
};
ListSearchComponent.ɵfac = function ListSearchComponent_Factory(t) { return new (t || ListSearchComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ListSearchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ListSearchComponent, selectors: [["sml-list-search"]], inputs: { id: "id", name: "name", label: "label", value: "value", listData: "listData", GenericToken: "GenericToken", database: "database", schema: "schema", procedure: "procedure", fieldName: "fieldName", apiURL: "apiURL", switchStyle: "switchStyle", signalStyle: "signalStyle", staticStyle: "staticStyle", style: "style", borderStyle: "borderStyle", valueStyle: "valueStyle" }, outputs: { getvalue: "getvalue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 10, vars: 15, consts: [[1, "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], [1, "ng-autocomplete"], [3, "data", "initialValue", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "label", 3, "for", "ngStyle"], [3, "innerHTML"]], template: function ListSearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "ng-autocomplete", 3);
        ɵngcc0.ɵɵlistener("selected", function ListSearchComponent_Template_ng_autocomplete_selected_3_listener($event) { return ctx.setSelectedData($event); })("inputChanged", function ListSearchComponent_Template_ng_autocomplete_inputChanged_3_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function ListSearchComponent_Template_ng_autocomplete_inputFocused_3_listener($event) { return ctx.onFocused($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, ListSearchComponent_ng_template_4_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, ListSearchComponent_ng_template_6_Template, 1, 1, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "label", 6);
        ɵngcc0.ɵɵtext(9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(5);
        const _r2 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(10, _c26, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("data", ctx.listData)("initialValue", ctx.value)("searchKeyword", ctx.keyword)("itemTemplate", _r0)("notFoundTemplate", _r2);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.name);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label, " ");
    } }, directives: [ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc12.AutocompleteComponent], styles: ["[_nghost-%COMP%]{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n\t[_nghost-%COMP%]     ng-autocomplete .autocomplete-container{height:auto;border:none !important;box-shadow:none !important;}\n\t[_nghost-%COMP%]     ng-autocomplete .autocomplete-container .input-container .x{display:none !important;}\n\t.ng-autocomplete[_ngcontent-%COMP%]{width:100% !important;}\n\t[_nghost-%COMP%]     ng-autocomplete .autocomplete-container .input-container input{font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;line-height:1.5 !important;min-height:var(--c-height) !important;height:auto;}\n\t.position-relative[_ngcontent-%COMP%]{position:relative;}\n\t.input-field[_ngcontent-%COMP%]{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.signal-line[_ngcontent-%COMP%]{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label[_ngcontent-%COMP%]{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;z-index:999;}\n\t.float-group[_ngcontent-%COMP%]{position:relative;padding:1px 1px 1px 1px;}\n\t.float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}"] });
ListSearchComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ElementRef }
];
__decorate([
    Input()
], ListSearchComponent.prototype, "id", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "name", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "label", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "value", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "listData", void 0);
__decorate([
    Output()
], ListSearchComponent.prototype, "getvalue", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "database", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "schema", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "procedure", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "fieldName", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "style", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "valueStyle", void 0);

let ListSearchModule = class ListSearchModule {
};
ListSearchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ListSearchModule });
ListSearchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ListSearchModule_Factory(t) { return new (t || ListSearchModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule,
            AutocompleteLibModule
        ]] });

let MultiSelectComponent = class MultiSelectComponent {
    constructor(http, elementRef) {
        this.http = http;
        this.elementRef = elementRef;
        this.dropdownList = [];
        this.selectedItems = [];
        this.label = 'Label Name';
        this.searchString = '';
        this.getvalue = new EventEmitter();
        this.GenericToken = "";
        this.database = "ASSIST";
        this.schema = "keys";
        this.procedure = "SKILLS_List";
        this.body = {};
        this.fieldName = "Description";
        this.fieldId = "SkillsId";
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.signalStyle = false;
        this.staticStyle = true;
        this.switchStyle = true;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.isOpen = false;
    }
    ngOnInit() {
        this.getToken();
    }
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
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            let css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
                this.getDrpData();
            });
        }
        else {
            this.getDrpData();
        }
    }
    getDrpData() {
        const url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, this.body, this.httpOptionJSON).subscribe(res => {
            if (res) {
                this.dropdownList = [];
                let temp = [];
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    let nType = {
                        "id": temp[i][this.fieldId],
                        "name": temp[i][this.fieldName]
                    };
                    this.dropdownList.push(nType);
                }
            }
            else {
                this.dropdownList = [];
            }
        }, error => {
            this.dropdownList = [];
        });
    }
    onItemSelect(item) {
        this.getvalue.emit(this.selectedItems);
    }
    OnItemDeSelect(item) {
        this.getvalue.emit(this.selectedItems);
    }
    onSelectAll(items) {
        this.getvalue.emit(this.selectedItems);
    }
    onDeSelectAll(items) {
        this.getvalue.emit(this.selectedItems);
    }
    onOpen() {
        this.isOpen = true;
    }
    onClose() {
        this.isOpen = false;
    }
};
MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) { return new (t || MultiSelectComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MultiSelectComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultiSelectComponent, selectors: [["sml-multi-select"]], inputs: { dropdownList: "dropdownList", selectedItems: "selectedItems", label: "label", searchString: "searchString", GenericToken: "GenericToken", database: "database", schema: "schema", procedure: "procedure", body: "body", fieldName: "fieldName", fieldId: "fieldId", apiURL: "apiURL", signalStyle: "signalStyle", staticStyle: "staticStyle", switchStyle: "switchStyle", style: "style", borderStyle: "borderStyle", valueStyle: "valueStyle" }, outputs: { getvalue: "getvalue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 11, consts: [[1, "position-relative"], [1, "input-field", 3, "ngStyle", "ngClass"], ["bindLabel", "name", "appendTo", "body", "multiple", "true", 3, "items", "ngModel", "open", "close", "change", "ngModelChange"], ["class", "label", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "label", 3, "ngStyle", 4, "ngIf"], [1, "label", 3, "ngClass", "ngStyle"], [1, "label", 3, "ngStyle"]], template: function MultiSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "ng-select", 2);
        ɵngcc0.ɵɵlistener("open", function MultiSelectComponent_Template_ng_select_open_2_listener() { return ctx.onOpen(); })("close", function MultiSelectComponent_Template_ng_select_close_2_listener() { return ctx.onClose(); })("change", function MultiSelectComponent_Template_ng_select_change_2_listener($event) { return ctx.onItemSelect($event); })("ngModelChange", function MultiSelectComponent_Template_ng_select_ngModelChange_2_listener($event) { return ctx.selectedItems = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, MultiSelectComponent_label_3_Template, 2, 5, "label", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, MultiSelectComponent_label_4_Template, 2, 2, "label", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.borderStyle)("ngClass", ɵngcc0.ɵɵpureFunction4(6, _c26, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("items", ctx.dropdownList)("ngModel", ctx.selectedItems);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.switchStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.switchStyle);
    } }, directives: [ɵngcc3.NgStyle, ɵngcc3.NgClass, ɵngcc9.NgSelectComponent, ɵngcc6.NgControlStatus, ɵngcc6.NgModel, ɵngcc3.NgIf], styles: ["[_nghost-%COMP%]{--c-width:645px;--c-height:44px;--label-left:4px;--label-top:2px;--value-left:4px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n\t.position-relative[_ngcontent-%COMP%]{position:relative;}\n\t.input-field[_ngcontent-%COMP%]{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.float-groupdd[_ngcontent-%COMP%]{position:relative;padding:0px;}\n\t.signal-line[_ngcontent-%COMP%]{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label[_ngcontent-%COMP%]{position:absolute;top:-24px;left:0px;font-size:12px;}\n\t.z-9999[_ngcontent-%COMP%]{z-index:9999;}\n\t.float-groupdd[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;top:-24px;left:0px;font-size:12px;}\n\t.float-group[_ngcontent-%COMP%]{position:relative;padding:14px 2px 0px 0px;}\n\t.float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}\n\t.float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t[_nghost-%COMP%]     .ng-select .ng-select-container{border:none !important;background: var(--back-color);}\n\t[_nghost-%COMP%]     .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}\n\t[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}\n\t[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}"] });
MultiSelectComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ElementRef }
];
__decorate([
    Input()
], MultiSelectComponent.prototype, "dropdownList", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "selectedItems", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "label", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "searchString", void 0);
__decorate([
    Output()
], MultiSelectComponent.prototype, "getvalue", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "database", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "schema", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "procedure", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "body", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "fieldName", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "fieldId", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "style", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "switchStyle", void 0);

let MultiSelectModule = class MultiSelectModule {
};
MultiSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MultiSelectModule });
MultiSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MultiSelectModule_Factory(t) { return new (t || MultiSelectModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule,
            NgSelectModule
        ]] });

let ProgressbarComponent = class ProgressbarComponent {
    constructor() {
        this.id = 'sml-progress-bar';
        this.value = 0;
        this.type = '';
        this.color = '';
        this.classes = 'progress-bar-info progress-bar-striped  active';
        // progress-bar-warning progress-bar-striped  active
        // progress-bar-danger
        // progress-bar-info progress-bar-striped
        this.interval = 100;
        this.completed = new EventEmitter();
    }
    ngOnInit() {
        var width = 1;
        this.identity = setInterval(() => {
            this.scene();
        }, this.interval);
    }
    scene() {
        if (this.value >= 100) {
            clearInterval(this.identity);
        }
        else {
            this.value = this.value + 1;
        }
    }
};
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(); };
ProgressbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["sml-progress-bar"]], inputs: { id: "id", value: "value", type: "type", color: "color", classes: "classes", interval: "interval" }, outputs: { completed: "completed" }, decls: 4, vars: 7, consts: [[1, "w-100"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("progress-bar ", ctx.classes, "");
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(5, _c28, ctx.value + "%"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.value, "% ");
    } }, directives: [ɵngcc3.NgStyle], styles: [".progress-bar-success[_ngcontent-%COMP%] {\n\t\tbackground-color: #5cb85c;\n\t}\n\t.progress-bar-info[_ngcontent-%COMP%] {\n\t\tbackground-color: #5bc0de;\n\t}\n\t.progress-bar-warning[_ngcontent-%COMP%] {\n\t\tbackground-color: #f0ad4e;\n\t}\n\t.progress-bar-danger[_ngcontent-%COMP%] {\n\t\tbackground-color: #d9534f;\n\t}\n\t.progress-bar.active[_ngcontent-%COMP%], .progress.active[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n\t\t-webkit-animation: progress-bar-stripes 2s linear infinite;\n\t\t-o-animation: progress-bar-stripes 2s linear infinite;\n\t\tanimation: progress-bar-stripes 2s linear infinite;\n\t}"] });
__decorate([
    Input()
], ProgressbarComponent.prototype, "id", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "value", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "type", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "color", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "classes", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "interval", void 0);
__decorate([
    Output()
], ProgressbarComponent.prototype, "completed", void 0);

let ProgressBarModule = class ProgressBarModule {
};
ProgressBarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ProgressBarModule });
ProgressBarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });

let RadioCheckBoxListComponent = class RadioCheckBoxListComponent {
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
    constructor() {
        this.id = 'sml-radio-check-box-list';
        this.name = 'sml-radio-check-box-list-name';
        this.jsonData = [];
        this.type = 'radio';
        this.selectedValue = '';
        this.radioChange = new EventEmitter();
        this.checkboxChange = new EventEmitter();
    }
    ngOnInit() { }
    changeEvent(event) {
        if (event == 'radio') {
            this.radioChange.emit(this.selectedValue);
        }
        else {
            this.checkboxChange.emit(this.jsonData);
        }
    }
};
RadioCheckBoxListComponent.ɵfac = function RadioCheckBoxListComponent_Factory(t) { return new (t || RadioCheckBoxListComponent)(); };
RadioCheckBoxListComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RadioCheckBoxListComponent, selectors: [["sml-radio-check-box-list"]], inputs: { id: "id", name: "name", jsonData: "jsonData", type: "type", selectedValue: "selectedValue" }, outputs: { radioChange: "radioChange", checkboxChange: "checkboxChange" }, decls: 3, vars: 2, consts: [[1, "formRadioCheck"], [4, "ngIf"], ["class", "inputGroupRadioCheck", 4, "ngFor", "ngForOf"], [1, "inputGroupRadioCheck"], ["type", "checkbox", 3, "id", "name", "value", "ngModel", "ngModelChange", "change"], [3, "for"], ["type", "radio", 3, "id", "name", "value", "ngModel", "ngModelChange", "change"]], template: function RadioCheckBoxListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "form", 0);
        ɵngcc0.ɵɵtemplate(1, RadioCheckBoxListComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, RadioCheckBoxListComponent_div_2_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type == "checkbox");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type == "radio");
    } }, directives: [ɵngcc6.ɵangular_packages_forms_forms_y, ɵngcc6.NgControlStatusGroup, ɵngcc6.NgForm, ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc6.CheckboxControlValueAccessor, ɵngcc6.NgControlStatus, ɵngcc6.NgModel, ɵngcc6.RadioControlValueAccessor, ɵngcc6.DefaultValueAccessor], styles: [".inputGroupRadioCheck[_ngcontent-%COMP%] {\n    background-color: #fff;\n    display: block;\n    margin: 10px 0;\n    position: relative;\n  }\n  .inputGroupRadioCheck[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n      color: #fff;\n  }\n  .inputGroupRadioCheck[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:before {\n      transform: translate(-50%, -50%) scale3d(56, 56, 1);\n      opacity: 1;\n  }\n  .inputGroupRadioCheck[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:after {\n      background-color: #54E0C7;\n      border-color: #54E0C7;\n  }\n  .inputGroupRadioCheck[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      width: 32px;\n      height: 32px;\n      order: 1;\n      z-index: 2;\n      position: absolute;\n      right: 30px;\n      top: 50%;\n      transform: translateY(-50%);\n      cursor: pointer;\n      visibility: hidden;\n  }\n  .inputGroupRadioCheck[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n      padding: 12px 30px;\n      width: 100%;\n      display: block;\n      text-align: left;\n      color: #3C454C;\n      cursor: pointer;\n      position: relative;\n      z-index: 2;\n      transition: color 200ms ease-in;\n      overflow: hidden;\n  }\n  .inputGroupRadioCheck[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      content: '';\n      background-color: #5562eb;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%) scale3d(1, 1, 1);\n      transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);\n      opacity: 0;\n      z-index: -1;\n  }\n  .inputGroupRadioCheck[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\n      width: 32px;\n      height: 32px;\n      content: '';\n      border: 2px solid #D1D7DC;\n      background-color: #fff;\n      background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E \");\n      background-repeat: no-repeat;\n      background-position: 2px 3px;\n      border-radius: 50%;\n      z-index: 2;\n      position: absolute;\n      right: 30px;\n      top: 50%;\n      transform: translateY(-50%);\n      cursor: pointer;\n      transition: all 200ms ease-in;\n  }\n  .formRadioCheck[_ngcontent-%COMP%] {\n    padding: 0 16px;\n    max-width: 550px;\n    font-size: 18px;\n    font-weight: 600;\n  }"] });
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

let RadioCheckBoxListModule = class RadioCheckBoxListModule {
};
RadioCheckBoxListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RadioCheckBoxListModule });
RadioCheckBoxListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RadioCheckBoxListModule_Factory(t) { return new (t || RadioCheckBoxListModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });

let CropImageUploadComponent = class CropImageUploadComponent {
    constructor(http) {
        this.http = http;
        this.height = 150;
        this.width = 150;
        this.type = 'circle';
        this.value = '0';
        this.ratio = '1:1';
        this.aspectRatio = 1 / 1;
        this.url = 'https://mobilfy.aaadev.info/api/';
        this.path = 'http://mobilfy.aaadev.info/media/';
        this.genericToken = "bfb8831504564861a864275d85f848f8bfb8831504564861a864275d85f848f8";
        this.database = "MOBILFY";
        this.schema = "core";
        this.OnSaveFile = new EventEmitter;
        this.capWidth = 50;
        this.capHeight = 50;
        this.imageName = 'crop_picture';
        this.imagePath = '';
        this.isHtmlbind = false;
        this.isUploadArea = true;
        this.isUploadStart = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.scale = 1;
        this.transform = {};
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.ratioCal();
        if (this.value != '0' && this.value != 0) {
            const body = { FilesId: this.value };
            const url = this.url + "Data/Exec/" + this.database + "/" + this.schema + "/FILES_Retrieve?api_key=" + this.genericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(files => {
                if (files != undefined && files != null && files != '') {
                    this.imagePath = this.path + files[0].FileUrl;
                }
            });
        }
    }
    ratioCal() {
        if (this.type == 'square' && this.ratio != '') {
            let total = parseInt(this.width) + parseInt(this.height);
            let arr = this.ratio.split(":");
            if (arr.length == 2) {
                let ratioTotal = parseInt(arr[0]) + parseInt(arr[1]);
                let w = ((total * parseInt(arr[0])) / ratioTotal).toFixed(0);
                let h = ((total * parseInt(arr[1])) / ratioTotal).toFixed(0);
                this.width = w;
                this.height = h;
                this.capWidth = ((100 * parseInt(arr[0])) / ratioTotal).toFixed(0);
                this.capHeight = ((100 * parseInt(arr[1])) / ratioTotal).toFixed(0);
            }
        }
    }
    fileChangeEvent(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            this.imageName = fileInput.target.files["0"].name;
            $("#openModalBtn").click();
            this.imageChangedEvent = fileInput;
            this.isUploadArea = false;
        }
    }
    cancleClick() {
        this.croppedImage = "";
        this.isHtmlbind = false;
        this.isUploadArea = true;
        this.percentDone = 0;
    }
    upload() {
        this.imagePath = "";
        this.isUploadStart = true;
        this.isHtmlbind = false;
        this.isUploadArea = true;
        let block = this.croppedImage.split(";");
        let contentType = block[0].split(":")[1];
        let realData = block[1].split(",")[1];
        let blob = b64toBlob(realData, contentType);
        let formData = new FormData();
        formData.append('file', blob, this.imageName);
        formData.append('id', this.value);
        formData.append('filegroupid', this.value);
        formData.append('mediaType', 'profilepic');
        formData.append('description', this.imageName);
        this.http.post(this.url + "uploader/uploadnew", formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                this.imagePath = this.path + event.body['FileUrl'];
                this.isUploadStart = false;
                this.percentDone = 0;
                this.OnSaveFile.emit({ event });
                this.croppedImage = "";
            }
        });
        function b64toBlob(b64Data, contentType) {
            contentType = contentType || '';
            var sliceSize = sliceSize || 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        }
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    zoomOut() {
        this.scale -= .1;
        this.transform = Object.assign(Object.assign({}, this.transform), { scale: this.scale });
    }
    zoomIn() {
        this.scale += .1;
        this.transform = Object.assign(Object.assign({}, this.transform), { scale: this.scale });
    }
};
CropImageUploadComponent.ɵfac = function CropImageUploadComponent_Factory(t) { return new (t || CropImageUploadComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient)); };
CropImageUploadComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CropImageUploadComponent, selectors: [["sml-crop-image-upload"]], inputs: { height: "height", width: "width", type: "type", value: "value", ratio: "ratio", aspectRatio: "aspectRatio", url: "url", path: "path", genericToken: "genericToken", database: "database", schema: "schema" }, outputs: { OnSaveFile: "OnSaveFile" }, decls: 26, vars: 18, consts: [[1, "homewrap"], ["class", "imgd_area d_flex", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "w-100 text-center", 4, "ngIf"], ["class", "text-center mt-2", 4, "ngIf"], ["type", "button", "id", "openModalBtn", "data-toggle", "modal", "data-target", "#cropModal", 2, "opacity", "0"], ["id", "cropModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "mt-0"], [2, "position", "absolute", "right", "128px", "top", "11px"], [3, "src", "ngClass", "width", "height"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-search-plus"], [1, "fa", "fa-search-minus"], [1, "modal-body", 2, "position", "relative", "flex", "1 1 auto", "padding", "1rem"], ["format", "png,jpeg", 3, "imageChangedEvent", "transform", "maintainAspectRatio", "aspectRatio", "cropperMinWidth", "resizeToWidth", "roundCropper", "imageCropped"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 3, "click"], [1, "imgd_area", "d_flex", 3, "ngClass", "ngStyle"], [1, "d_flex", "w-100", "position-relative", "flex-column", "justify-content-center", "align-items-center"], [4, "ngIf"], ["class", "percentage-div", 4, "ngIf"], ["type", "file", "id", "upload", "accept", "image/*", 1, "file_input", 3, "change"], ["name", "profile_images", "id", "profile_images", 3, "src"], ["src", "assets/cloud-upload-arrow.svg"], [1, "text-black-50", "fz11", "mb-1"], [1, "percentage-div"], [1, "w-100", "text-center"], ["id", "htmlbinds", 3, "ngClass", "src", "width", "height"], [1, "text-center", "mt-2"], [1, "mr-4", "btn_link", 3, "click"], [1, "btn_link", 3, "click"]], template: function CropImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, CropImageUploadComponent_div_1_Template, 6, 11, "div", 1);
        ɵngcc0.ɵɵtemplate(2, CropImageUploadComponent_div_2_Template, 2, 6, "div", 2);
        ɵngcc0.ɵɵtemplate(3, CropImageUploadComponent_div_3_Template, 5, 0, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "button", 4);
        ɵngcc0.ɵɵtext(5, "Open");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 6);
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵelementStart(9, "div", 8);
        ɵngcc0.ɵɵelementStart(10, "h4", 9);
        ɵngcc0.ɵɵtext(11, "Crop Image");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 10);
        ɵngcc0.ɵɵelement(13, "img", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 12);
        ɵngcc0.ɵɵelementStart(15, "button", 13);
        ɵngcc0.ɵɵlistener("click", function CropImageUploadComponent_Template_button_click_15_listener() { return ctx.zoomIn(); });
        ɵngcc0.ɵɵelement(16, "span", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(17, "button", 13);
        ɵngcc0.ɵɵlistener("click", function CropImageUploadComponent_Template_button_click_17_listener() { return ctx.zoomOut(); });
        ɵngcc0.ɵɵelement(18, "span", 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "div", 16);
        ɵngcc0.ɵɵelementStart(20, "image-cropper", 17);
        ɵngcc0.ɵɵlistener("imageCropped", function CropImageUploadComponent_Template_image_cropper_imageCropped_20_listener($event) { return ctx.imageCropped($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "div", 18);
        ɵngcc0.ɵɵelementStart(22, "button", 19);
        ɵngcc0.ɵɵlistener("click", function CropImageUploadComponent_Template_button_click_22_listener() { return ctx.isHtmlbind = true; });
        ɵngcc0.ɵɵtext(23, "Apply");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(24, "button", 20);
        ɵngcc0.ɵɵlistener("click", function CropImageUploadComponent_Template_button_click_24_listener() { return ctx.cancleClick(); });
        ɵngcc0.ɵɵtext(25, "Close");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isUploadArea);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isHtmlbind);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isHtmlbind);
        ɵngcc0.ɵɵadvance(10);
        ɵngcc0.ɵɵstyleProp("border", ctx.croppedImage ? "1px solid black" : "none");
        ɵngcc0.ɵɵproperty("src", ctx.croppedImage, ɵngcc0.ɵɵsanitizeUrl)("ngClass", ɵngcc0.ɵɵpureFunction1(16, _c30, ctx.type == "circle"))("width", ctx.capWidth)("height", ctx.capHeight);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("imageChangedEvent", ctx.imageChangedEvent)("transform", ctx.transform)("maintainAspectRatio", true)("aspectRatio", ctx.aspectRatio)("cropperMinWidth", ctx.width)("resizeToWidth", ctx.width)("roundCropper", ctx.type == "circle" ? true : false);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgClass, ɵngcc13.ImageCropperComponent, ɵngcc3.NgStyle], styles: [".homewrap[_ngcontent-%COMP%] {height: auto;width: 100%}\n  .imgd_area[_ngcontent-%COMP%] {height: 150px;width: 150px;overflow: hidden;margin: 0 auto;}\n  .percentage-div[_ngcontent-%COMP%]{font-size: 25px;font-weight: 700;color: #00ACAC;}\n  .b-2[_ngcontent-%COMP%]{border: 2px dashed #ccc;}\n  .b-r[_ngcontent-%COMP%]{border-radius: 100%;}\n  .text-black-50[_ngcontent-%COMP%] {color: #a6a9ab;}\n  .file_input[_ngcontent-%COMP%] {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}\n  .fz11[_ngcontent-%COMP%] {font-size: 11px;}\n  .d_flex[_ngcontent-%COMP%] {display: flex;}\n  .htmlbinds[_ngcontent-%COMP%]:nth-child(2) {display: none;}\n  .htmlbinds[_ngcontent-%COMP%] {height: 100%;width: 100%;object-fit: cover;}\n  .flex-column[_ngcontent-%COMP%] {-webkit-box-orient: vertical!important;-webkit-box-direction: normal!important;-ms-flex-direction: column!important;flex-direction: column!important;}\n  .position-relative[_ngcontent-%COMP%] {position: relative!important;}\n  .w-100[_ngcontent-%COMP%] {width: 100%;}\n  .justify-content-center[_ngcontent-%COMP%] {-webkit-box-pack: center!important;-ms-flex-pack: center!important;justify-content: center!important;}\n  .btn_link[_ngcontent-%COMP%]{font-size: 18px;font-weight: 600;cursor: pointer;}"] });
CropImageUploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], CropImageUploadComponent.prototype, "height", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "width", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "type", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "value", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "ratio", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "aspectRatio", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "path", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "genericToken", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "database", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "schema", void 0);
__decorate([
    Output()
], CropImageUploadComponent.prototype, "OnSaveFile", void 0);

let CropImageUploadModule = class CropImageUploadModule {
};
CropImageUploadModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CropImageUploadModule });
CropImageUploadModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CropImageUploadModule_Factory(t) { return new (t || CropImageUploadModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule,
            ImageCropperModule
        ]] });

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
TilesRadioComponent.ɵfac = function TilesRadioComponent_Factory(t) { return new (t || TilesRadioComponent)(); };
TilesRadioComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TilesRadioComponent, selectors: [["sml-tiles-radio"]], inputs: { id: "id", name: "name", jsonData: "jsonData", width: "width", img_height: "img_height", background: "background", selectedValue: "selectedValue" }, outputs: { radioChange: "radioChange" }, decls: 1, vars: 1, consts: [["class", "form", 3, "background-color", 4, "ngIf"], [1, "form"], ["class", "form__answer", 3, "width", 4, "ngFor", "ngForOf"], [1, "form__answer"], ["type", "radio", 3, "id", "name", "value", "ngModel", "ngModelChange", "change"], [3, "for"], [2, "width", "100%", 3, "src", "id", "name"]], template: function TilesRadioComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TilesRadioComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.jsonData.length > 0);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc6.RadioControlValueAccessor, ɵngcc6.DefaultValueAccessor, ɵngcc6.NgControlStatus, ɵngcc6.NgModel], styles: [".form[_ngcontent-%COMP%] {width: 100%;margin: auto;background: #00171F;padding: 5px 0px 0px 5px;color: #FAFAFA;}\n  .form__answer[_ngcontent-%COMP%] {display: inline-block;box-sizing: border-box;width: 24%;margin: 0px 1% 1% 0px;height: auto;vertical-align: top;font-size: 22px;text-align: center;}\n  label[_ngcontent-%COMP%] {border: 1px solid rgba(250, 250, 250, 0.15);box-sizing: border-box;display: block;height: 100%;width: 100%;padding: 10px 10px 30px 10px;cursor: pointer;opacity: .5;transition: all .5s ease-in-out;margin-bottom: 0px;}\n  label[_ngcontent-%COMP%]:hover, label[_ngcontent-%COMP%]:focus, label[_ngcontent-%COMP%]:active {border: 1px solid rgba(250, 250, 250, 0.5);}\n  input[type=\"radio\"][_ngcontent-%COMP%] {opacity: 0;width: 0;height: 0;position: absolute;}\n  input[type=\"radio\"][_ngcontent-%COMP%]:active    ~ label[_ngcontent-%COMP%] {opacity: 1;}\n  input[type=\"radio\"][_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {opacity: 1;border: 1px solid #FAFAFA;}"] });
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

let TilesRadioModule = class TilesRadioModule {
};
TilesRadioModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TilesRadioModule });
TilesRadioModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TilesRadioModule_Factory(t) { return new (t || TilesRadioModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });

let CreditCardComponent = class CreditCardComponent {
    constructor() {
        this.onSubmit = new EventEmitter();
    }
    ngOnInit() { }
    processPayment(event) { this.onSubmit.emit(event); }
};
CreditCardComponent.ɵfac = function CreditCardComponent_Factory(t) { return new (t || CreditCardComponent)(); };
CreditCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CreditCardComponent, selectors: [["sml-credit-card"]], outputs: { onSubmit: "onSubmit" }, decls: 2, vars: 0, consts: [[1, "w-100"], [3, "formSaved"]], template: function CreditCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ng-payment-card", 1);
        ɵngcc0.ɵɵlistener("formSaved", function CreditCardComponent_Template_ng_payment_card_formSaved_1_listener($event) { return ctx.processPayment($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, directives: [ɵngcc14.PaymentCardComponent], styles: ["[_nghost-%COMP%]     ng-payment-card .cc-wrapper .cc-box{margin-top: 90px !important;}\n  .w-100[_ngcontent-%COMP%]{width: 100%;}"] });
__decorate([
    Output()
], CreditCardComponent.prototype, "onSubmit", void 0);

let CreditCardModule = class CreditCardModule {
};
CreditCardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CreditCardModule });
CreditCardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CreditCardModule_Factory(t) { return new (t || CreditCardModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            NgPaymentCardModule,
            HttpClientModule
        ]] });

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
CreditCardNewComponent.ɵfac = function CreditCardNewComponent_Factory(t) { return new (t || CreditCardNewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CreditCardNewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CreditCardNewComponent, selectors: [["sml-credit-card-new"]], inputs: { cardObject: "cardObject", labelStyle: "labelStyle", borderStyle: "borderStyle", valueStyle: "valueStyle", buttonStyle: "buttonStyle" }, outputs: { submitValue: "submitValue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 34, vars: 17, consts: [[1, "mainCardBack"], [1, "card-wrapper"], [1, "formCardMain"], ["id", "newcreditcard"], [1, "main-row"], [1, "w-50s"], [1, "position-relative"], [1, "input-field", "float-group", "float-group-static", 3, "ngStyle"], ["type", "text", "id", "number", "name", "number", "required", "", 1, "form-control", 3, "ngModel", "ngStyle", "ngModelChange"], ["for", "number", 1, "label", 3, "ngStyle"], [1, "main-row", "mt-1"], ["type", "text", "id", "name", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngStyle", "ngModelChange"], ["for", "first-name", 1, "label", 3, "ngStyle"], [1, "w-25s"], ["type", "text", "id", "expiry", "name", "expiry", "required", "", 1, "form-control", 3, "ngModel", "ngStyle", "ngModelChange"], ["for", "expiry", 1, "label", 3, "ngStyle"], ["type", "text", "id", "cvc", "name", "cvc", "required", "", 1, "form-control", 3, "ngModel", "ngStyle", "ngModelChange"], ["for", "cvc", 1, "label", 3, "ngStyle"], [1, "w-50sb"], ["name", "cardsubmit", 1, "btn", "btn-primary", 3, "ngStyle", "click"]], template: function CreditCardNewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "form", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵelementStart(7, "div", 7);
        ɵngcc0.ɵɵelementStart(8, "input", 8);
        ɵngcc0.ɵɵlistener("ngModelChange", function CreditCardNewComponent_Template_input_ngModelChange_8_listener($event) { return ctx.cardObject.cardNumber = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "label", 9);
        ɵngcc0.ɵɵtext(10, " Card Number ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 10);
        ɵngcc0.ɵɵelementStart(12, "div", 5);
        ɵngcc0.ɵɵelementStart(13, "div", 6);
        ɵngcc0.ɵɵelementStart(14, "div", 7);
        ɵngcc0.ɵɵelementStart(15, "input", 11);
        ɵngcc0.ɵɵlistener("ngModelChange", function CreditCardNewComponent_Template_input_ngModelChange_15_listener($event) { return ctx.cardObject.cardHolder = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "label", 12);
        ɵngcc0.ɵɵtext(17, " Card Holder ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "div", 10);
        ɵngcc0.ɵɵelementStart(19, "div", 13);
        ɵngcc0.ɵɵelementStart(20, "div", 6);
        ɵngcc0.ɵɵelementStart(21, "div", 7);
        ɵngcc0.ɵɵelementStart(22, "input", 14);
        ɵngcc0.ɵɵlistener("ngModelChange", function CreditCardNewComponent_Template_input_ngModelChange_22_listener($event) { return ctx.cardObject.expiryDate = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(23, "label", 15);
        ɵngcc0.ɵɵtext(24, " Expiry Date ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(25, "div", 13);
        ɵngcc0.ɵɵelementStart(26, "div", 6);
        ɵngcc0.ɵɵelementStart(27, "div", 7);
        ɵngcc0.ɵɵelementStart(28, "input", 16);
        ɵngcc0.ɵɵlistener("ngModelChange", function CreditCardNewComponent_Template_input_ngModelChange_28_listener($event) { return ctx.cardObject.cvc = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(29, "label", 17);
        ɵngcc0.ɵɵtext(30, " CVC ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(31, "div", 18);
        ɵngcc0.ɵɵelementStart(32, "button", 19);
        ɵngcc0.ɵɵlistener("click", function CreditCardNewComponent_Template_button_click_32_listener() { return ctx.submitClick(); });
        ɵngcc0.ɵɵtext(33, "Submit");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.cardObject.cardNumber)("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.labelStyle);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.cardObject.cardHolder)("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.labelStyle);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.cardObject.expiryDate)("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.labelStyle);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.cardObject.cvc)("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.labelStyle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.buttonStyle);
    } }, directives: [ɵngcc6.ɵangular_packages_forms_forms_y, ɵngcc6.NgControlStatusGroup, ɵngcc6.NgForm, ɵngcc3.NgStyle, ɵngcc6.DefaultValueAccessor, ɵngcc6.RequiredValidator, ɵngcc6.NgControlStatus, ɵngcc6.NgModel], styles: ["[_nghost-%COMP%]{--c-width:100%;--c-height:25px;--label-left:7px;--label-top:2px;--value-left:8px;--value-top:0px;}\n  .btn[_ngcontent-%COMP%]:focus{outline:0;box-shadow:var(--focus-x) var(--focus-y) var(--focus-blur) var(--focus-spread) var(--focus-color);}\n  .position-relative[_ngcontent-%COMP%]{position:relative;}\n  .input-field[_ngcontent-%COMP%]{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n  .form-control[_ngcontent-%COMP%]{display:block;padding-top:0.375rem;padding-right:0.75rem;padding-bottom:0.375rem;padding-left:var(--value-left);font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;min-height:var(--c-height) !important;transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;}\n  .form-control[_ngcontent-%COMP%]{background-color:inherit;}\n  .label[_ngcontent-%COMP%]{position:absolute;top:-24px;left:0px;font-size:12px;}\n  .float-group[_ngcontent-%COMP%]{position:relative;padding:14px 24px 2px 0px;}\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-top:var(--value-top);padding-right:0px;padding-bottom:0px;padding-left:var(--value-left);}\n  .float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{outline:none !important;box-shadow:none;}\n  .mainCardBack[_ngcontent-%COMP%]{background:#ECEBEC;width: 300px;}\n  .formCardMain[_ngcontent-%COMP%]{margin:auto;width:90%;padding-bottom:15px;}\n  .main-row[_ngcontent-%COMP%]{width:100%;}\n  .w-50s[_ngcontent-%COMP%]{width:100%;display:inline-block;padding-left:5px;padding-right:5px;}\n  .w-50sb[_ngcontent-%COMP%]{width:100%;display:inline-block;padding-left:5px;padding-right:5px;position:relative;top:5px;text-align:right;}\n  .w-25s[_ngcontent-%COMP%]{width:50%;display:inline-block;padding-left:5px;padding-right:5px;}\n  [_nghost-%COMP%]     .card-wrapper .jp-card-container{margin-left: -6px !important;}"] });
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

let CreditCardNewModule = class CreditCardNewModule {
};
CreditCardNewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CreditCardNewModule });
CreditCardNewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CreditCardNewModule_Factory(t) { return new (t || CreditCardNewModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });

let VideoUploadComponent = class VideoUploadComponent {
    constructor(http) {
        this.http = http;
        this.url = 'http://assist.aaadev.info/api/';
        this.path = 'http://assist.aaadev.info/media/';
        this.database = 'ASSIST';
        this.schema = "core";
        this.fileResponse = new EventEmitter;
        this.deletefileResponse = new EventEmitter;
        this.fileId = '0';
        this.fileGroupId = '0';
        this.GenericToken = "12fc01a7eea74138b9e7a35c90dadf7412fc01a7eea74138b9e7a35c90dadf74";
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        if (this.fileGroupId != '0' && this.fileGroupId != 0) {
            const body = {
                FilesGroupId: this.fileGroupId,
                ImageVideo: 'VIDEO'
            };
            const url = this.url + "Data/Exec/" + this.database + "/" + this.schema + "/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(files => {
                if (files != undefined && files != null && files != '') {
                    this.videoLink = this.path + files[0].FileUrl;
                    let arr = files[0].FileUrl.split(".");
                    this.thumbUrl = this.path + arr[0] + '.jpg';
                    this.fileId = files[0].FilesId;
                    console.log(this.fileId);
                }
            });
        }
    }
    uploadAndProgress(files) {
        for (let i = 0; i < files.length; i++) {
            var formData = new FormData();
            formData.append('file', files[i], files[i].name);
            formData.append('id', this.fileId);
            formData.append('filegroupid', this.fileGroupId);
            formData.append('mediaType', 'video');
            formData.append('description', files[i].name);
            this.http.post(this.url + 'VideoUploader/UploadNew', formData, { reportProgress: true, observe: 'events' })
                .subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {
                    this.percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof HttpResponse) {
                    this.uploadSuccess = true;
                    setTimeout(() => {
                        this.uploadSuccess = false;
                        this.percentDone = 0;
                        this.fileResponse.emit(event.body);
                        this.videoLink = this.path + event.body['FileUrl'];
                        let arr = event.body['FileUrl'].split(".");
                        this.thumbUrl = this.path + arr[0] + '.jpg';
                    }, 3000);
                }
            });
        }
    }
    deleteFIles(fileId) {
        this.http.delete(this.url + "Models/files/" + fileId + "?api_key=" + this.GenericToken).subscribe(res => {
            if (res) {
                this.thumbUrl = '';
                this.videoLink = '';
                this.deletefileResponse.emit(res);
            }
        });
    }
};
VideoUploadComponent.ɵfac = function VideoUploadComponent_Factory(t) { return new (t || VideoUploadComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient)); };
VideoUploadComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: VideoUploadComponent, selectors: [["sml-video-upload"]], inputs: { url: "url", path: "path", database: "database", schema: "schema", fileId: "fileId", fileGroupId: "fileGroupId", GenericToken: "GenericToken" }, outputs: { fileResponse: "fileResponse", deletefileResponse: "deletefileResponse" }, decls: 7, vars: 6, consts: [[1, "upload-area"], ["class", "uploadvideo", 4, "ngIf"], ["src", "assets/video_upload.png", "class", "img-video-icon", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["type", "file", "multiple", "", "class", "file_input", "id", "upload", "accept", "video/*", 3, "change", 4, "ngIf"], ["class", "progress-div", 4, "ngIf"], ["class", "remove_icon", 4, "ngIf"], [1, "uploadvideo"], ["src", "assets/video_upload.png", 1, "img-video-icon"], ["target", "_blank", 3, "href"], ["width", "248", "height", "150", 3, "src"], ["type", "file", "multiple", "", "id", "upload", "accept", "video/*", 1, "file_input", 3, "change"], [1, "progress-div"], ["class", "fz14", 4, "ngIf"], [1, "fz14"], [1, "progressContainer"], [1, "procesbar"], [1, "w-100", "z9"], [1, "progressbar", 3, "ngStyle"], [1, "remove_icon"], [1, "fa", "fa-times", 3, "click"]], template: function VideoUploadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, VideoUploadComponent_span_1_Template, 2, 0, "span", 1);
        ɵngcc0.ɵɵtemplate(2, VideoUploadComponent_img_2_Template, 1, 0, "img", 2);
        ɵngcc0.ɵɵtemplate(3, VideoUploadComponent_a_3_Template, 2, 2, "a", 3);
        ɵngcc0.ɵɵtemplate(4, VideoUploadComponent_input_4_Template, 1, 0, "input", 4);
        ɵngcc0.ɵɵtemplate(5, VideoUploadComponent_div_5_Template, 9, 5, "div", 5);
        ɵngcc0.ɵɵtemplate(6, VideoUploadComponent_span_6_Template, 2, 0, "span", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.percentDone && !ctx.thumbUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.percentDone && !ctx.thumbUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.thumbUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.thumbUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.percentDone);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.thumbUrl);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgStyle], styles: [".upload-area[_ngcontent-%COMP%]{border: 1px solid gray;max-width: 250px;min-height: 150px;position:relative}\n  .img-video-icon[_ngcontent-%COMP%]{width: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}\n  .file_input[_ngcontent-%COMP%] {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}\n  .progressContainer[_ngcontent-%COMP%] {width: 100%;padding-left: 5px;padding-right: 5px;}\n  .progressbar[_ngcontent-%COMP%] {height: 9px;background: green;float: left;border-radius: 4px;}\n  .fz14[_ngcontent-%COMP%] {font-size: 20px;text-align: center;font-weight: 400;margin-bottom: 7px;}\n  .progress-div[_ngcontent-%COMP%]{top: 45%;transform: translate(-50%,-50%);position: absolute;left: 50%;width: 250px;}\n  .remove_icon[_ngcontent-%COMP%]{position: absolute;right: 8px;cursor: pointer;width: 20px;height: 20px;background: #db3a26;border-radius: 100%;text-align: center;-webkit-box-align: center;align-items: center;color: #fff;font-size: 12px;top: 5px;}\n  .uploadvideo[_ngcontent-%COMP%]{position: relative;  top: 27px; cursor: pointer; left: 43px; background: green; padding: 8px 30px; color: #fff;  border-radius: 3px;}"] });
VideoUploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], VideoUploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "path", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "database", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "schema", void 0);
__decorate([
    Output()
], VideoUploadComponent.prototype, "fileResponse", void 0);
__decorate([
    Output()
], VideoUploadComponent.prototype, "deletefileResponse", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "fileId", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "fileGroupId", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "GenericToken", void 0);

let VideoUploadModule = class VideoUploadModule {
};
VideoUploadModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: VideoUploadModule });
VideoUploadModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function VideoUploadModule_Factory(t) { return new (t || VideoUploadModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });

let ContactUsComponent = class ContactUsComponent {
    constructor(http) {
        this.http = http;
        this.itemObject = {
            id: 5,
            emailTo: "",
            myObject: {}
        };
        this.GenericToken = "";
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.responseCall = new EventEmitter;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
            });
        }
    }
    sendMail() {
        let url = this.apiURL + "Email/SendTemplateWIthSMTP/" + this.itemObject.id + "?emailTo=" + this.itemObject.emailTo;
        let body = this.itemObject.myObject;
        this.http.post(url, body).subscribe(res => {
            this.responseCall.emit(res);
        }, error => {
            alert(error);
        });
    }
};
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient)); };
ContactUsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContactUsComponent, selectors: [["sml-contact-us"]], inputs: { itemObject: "itemObject", GenericToken: "GenericToken", apiURL: "apiURL", labelStyle: "labelStyle", borderStyle: "borderStyle", valueStyle: "valueStyle", buttonStyle: "buttonStyle" }, outputs: { responseCall: "responseCall" }, decls: 4, vars: 13, consts: [[1, "main-row"], [3, "label", "name", "value", "maskType", "switchStyle", "staticStyle", "borderStyle", "valueStyle", "getvalue"], [1, "main-row", 2, "text-align", "center"], [3, "label", "btnCl", "buttonStyle", "buttonClick"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "sml-input-text", 1);
        ɵngcc0.ɵɵlistener("getvalue", function ContactUsComponent_Template_sml_input_text_getvalue_1_listener($event) { return ctx.itemObject.emailTo = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "sml-button", 3);
        ɵngcc0.ɵɵlistener("buttonClick", function ContactUsComponent_Template_sml_button_buttonClick_3_listener() { return ctx.sendMail(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleMap(ctx.labelStyle);
        ɵngcc0.ɵɵproperty("label", "Email To")("name", "emailTo")("value", ctx.itemObject.emailTo)("maskType", "")("switchStyle", "true")("staticStyle", "true")("borderStyle", ctx.borderStyle)("valueStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("label", "Send Email")("btnCl", "btn-primary")("buttonStyle", ctx.buttonStyle);
    } }, directives: [ɵngcc4.TextComponent, ButtonComponent], styles: [".main-row[_ngcontent-%COMP%]{width: 100%;margin-bottom: 7px;"] });
ContactUsComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], ContactUsComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "buttonStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "itemObject", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "apiURL", void 0);
__decorate([
    Output()
], ContactUsComponent.prototype, "responseCall", void 0);

let ContactUsModule = class ContactUsModule {
};
ContactUsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ContactUsModule });
ContactUsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ContactUsModule_Factory(t) { return new (t || ContactUsModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule,
            TextModule,
            ButtonModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AddressComponent, [{
        type: Component,
        args: [{
                selector: 'sml-address',
                template: `
  <div class="row">
	<div class="col-md-6" [ngClass]="{'hide-div': isGoogleOpen}">
		<sml-input-text [label]="'Address'" [name]="'address'" [value]="itemObject.address" (getvalue)="itemObject.address = $event;"
		 [maskType]="''" [switchStyle]="switchStyle" [staticStyle]="'true'" [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
		</sml-input-text>
	</div>
	<div class="col-md-4 pl-0 pr-0" [ngClass]="{'hide-div': isGoogleOpen}">
		<sml-input-text [label]="'Address (2nd line)'" [name]="'address2'" [value]="itemObject.address2" (getvalue)="itemObject.address2 = $event;"
		 [maskType]="''" [switchStyle]="switchStyle" [staticStyle]="'true'" [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
		</sml-input-text>
	</div>
	<div class="col-md-2 pl-0 text-right" [ngClass]="{'hide-div': isGoogleOpen}">
    <img src="assets/images/goole_map.png" id="googleMapImages" name="googlemapimages" style="cursor: pointer;" width="90%" height="44" (click)="openGoogle()" />
	</div>
	<div class="col-md-8 pr-0" [ngClass]="{'hide-div': !isGoogleOpen}">
		<input type="text" id="autocomplete" class="form-control" placeholder="Search address" name="autocomplete"
		 #search>
	</div>
	<div class="col-md-2 text-right pr-0" [ngClass]="{'hide-div': !isGoogleOpen}">
		<sml-button [label]="'Apply'" [btnCl]="'btn-primary'" (buttonClick)="apply($event)" [buttonStyle]="buttonStyle">
		</sml-button>
  </div>
  <div class="col-md-2 text-right" [ngClass]="{'hide-div': !isGoogleOpen}">
		<sml-button [label]="'Close'" [btnCl]="'btn-primary'" (buttonClick)="closeGoogle($event)" [buttonStyle]="buttonStyle">
		</sml-button>
	</div>
</div>
<div class="row mt-2" [ngClass]="{'hide-div': isGoogleOpen}">
	<div class="col-md-3">
		<sml-input-text [label]="'Zip Code'" [name]="'zipcode'" [value]="itemObject.zipcode" (getvalue)="itemObject.zipcode = $event;"
		 [maskType]="''" [switchStyle]="switchStyle" [staticStyle]="'true'" [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
		</sml-input-text>
	</div>
	<div class="col-md-5 pl-0">
		<sml-input-text [label]="'City'" [name]="'city'" [value]="itemObject.city" (getvalue)="itemObject.city = $event;" [maskType]="''"
		 [switchStyle]="switchStyle" [staticStyle]="'true'" [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
		</sml-input-text>
	</div>
	<div class="col-md-4 pl-0">
  <sml-input-select [label]="'State'" [listValue]="dropdownList" [value]="itemObject.state" (selectvalue)="itemObject.state = $event"
  [style]="labelStyle" [staticStyle]="'true'" [borderStyle]="borderStyle" [valueStyle]="selectValueStyle" [switchStyle]="switchStyle">
  </sml-input-select>
	</div>
</div>
<div *ngIf="object?.isShowAddressBox" class="addressField mt-2" [ngStyle]="borderBoxStyle">
	<div class="row">
		<div class="col-md-12 pl-4">
			<label class="mb-0" [ngStyle]="lableBoxStyle">{{itemObject.address}}</label>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 pl-4">
			<label class="mb-0" [ngStyle]="lableBoxStyle">{{itemObject.address2}}</label>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 pl-4">
			<label class="pr-1 mb-0" [ngStyle]="lableBoxStyle">{{itemObject.city}}</label>
			<label class="pr-1 mb-0" [ngStyle]="lableBoxStyle">{{itemObject.state}}</label>
			<label class="pr-1 mb-0" [ngStyle]="lableBoxStyle">{{itemObject.zipcode}}</label>
		</div>
	</div>
</div>
<div *ngIf="object?.isShowMapBox" class="mapField" [ngStyle]="mapBoxStyle">
	<agm-map [style.height]="mapBoxStyle?.height" [latitude]="latitude" [longitude]="longitude">
		<agm-marker [latitude]="latitude" [longitude]="longitude"></agm-marker>
	</agm-map>
</div>
  `,
                styles: [`
  .addressField{width:100%;min-height:85px;height:auto;border:1px solid lightgray;padding-top:5px;}
  .mapField{width:100%;min-height:370px;border:1px solid lightgray;margin-top:14px;overflow:hidden;}
  .pad-l-12{padding-left:12px !important;}
  .pad-l-0{padding-left:0px !important;}
   agm-map{height:370px;}
  .hide-div{display:none;}
   #autocomplete{height: 45px !important;border-radius: 4px;}
   .col-md-2{padding-left: 3px !important;}
   .col-md-6 {padding-right: 7px !important;}
   .col-md-3 {padding-right: 7px !important;}
   .col-md-5 {padding-right: 7px !important;}
   #autocomplete:focus{outline: none;box-shadow: none;border-color: lightgray; }
  `]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: ɵngcc2.MapsAPILoader }, { type: ɵngcc0.NgZone }]; }, { object: [{
            type: Input
        }], itemObject: [{
            type: Input
        }], addressStr: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], GenericToken: [{
            type: Input
        }], database: [{
            type: Input
        }], schema: [{
            type: Input
        }], procedure: [{
            type: Input
        }], apiURL: [{
            type: Input
        }], body: [{
            type: Input
        }], searchElementRef: [{
            type: ViewChild,
            args: ['search']
        }], switchStyle: [{
            type: Input
        }], labelStyle: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], selectValueStyle: [{
            type: Input
        }], buttonStyle: [{
            type: Input
        }], lableBoxStyle: [{
            type: Input
        }], borderBoxStyle: [{
            type: Input
        }], mapBoxStyle: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'sml-button',
                template: `
  <button type="button" class="btn" [ngClass]="btnCl" [ngStyle]="buttonStyle" (click)="clickEvent()">
  <i *ngIf="icon" class="fas" [ngClass]="iconCl"></i>
  <span *ngIf="!icon">{{label}}</span>
  </button>
  `,
                styles: [`
  /* css variable */
  :host {
          --focus-color: #82B056;
      --focus-spread: 0px;
      --focus-blur: 0px;
      --focus-x: 0px;
      --focus-y: 0px;
  }
  
  .btn.btn-sm{
      width: 90% !important;
      padding: 8px 20px !important;
      font-size: 14px; margin: 0 5px;
  }
  .btn:focus {
      outline: 0;
      box-shadow: var(--focus-x) var(--focus-y) var(--focus-blur) var(--focus-spread) var(--focus-color) !important;
  }
  `]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { buttonClick: [{
            type: Output
        }], icon: [{
            type: Input
        }], label: [{
            type: Input
        }], btnCl: [{
            type: Input
        }], iconCl: [{
            type: Input
        }], buttonStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: function () { return [ButtonComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ButtonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonComponent],
                imports: [
                    CommonModule
                ],
                exports: [ButtonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AddressModule, { declarations: function () { return [AddressComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        NgSelectModule, ButtonModule, TextModule,
        SelectModule, ɵngcc2.AgmCoreModule]; }, exports: function () { return [AddressComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AddressModule, [{
        type: NgModule,
        args: [{
                declarations: [AddressComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    NgSelectModule,
                    ButtonModule,
                    TextModule,
                    SelectModule,
                    AgmCoreModule.forRoot({
                        apiKey: "AIzaSyAqOJ907gt1wO7d96gBY3rXhXpK-gi4oPw",
                        libraries: ["places"]
                    }),
                ],
                exports: [AddressComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'sml-alert',
                template: `
  <div class="d-flex justify-content-between">
<button (click)="success()" class="btn btn-success btn-sm w-100 mx-1">
  Success
</button>
<button  (click)="error()" class="btn btn-danger btn-sm w-100 mx-1">
  Error
</button>
<button  (click)="info()" class="btn btn-primary btn-sm w-100 mx-1">
Info
</button>
<button  (click)="doubt()" class="btn btn-info btn-sm w-100 mx-1">
  Doubt
</button>
<button  (click)="warning()" class="btn btn-warning btn-sm w-100 mx-1">
  Warning
</button> 
<button class="btn btn-primary btn-sm" (click)="delete()">Delete File</button>
</div>
  `,
                styles: [`
  
  `]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AlertModule, { declarations: function () { return [AlertComponent]; }, imports: function () { return [CommonModule, ɵngcc5.SweetAlert2Module]; }, exports: function () { return [AlertComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertModule, [{
        type: NgModule,
        args: [{
                declarations: [AlertComponent],
                imports: [
                    CommonModule,
                    SweetAlert2Module.forRoot(),
                ],
                exports: [AlertComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NotesComponent, [{
        type: Component,
        args: [{
                selector: 'sml-notes',
                template: `

  <div class="notesWrapper">
    <h4 class="head">Notes</h4>
    <div class="notesLayout">
        <div class="notesTextType">
            <div class="noteTextContainer">
                <textarea rows="3" class="noteTexarea" #textarea [(ngModel)]="myInput.value" (keyup)="onInput($event)" name="chat">
                </textarea>
                    <label class="label" [ngClass]="{'op':myInput.value != ''}" >Enter your note here</label>
                <a (click)="this.onInput1(textarea.value)" class="postBtn">
                    <span class="divider">|</span>
                    <img src="assets/send.png" class="sendimg">
                </a>
            </div>
            <div class="hr"></div>
        </div>
        <div class="noteContainer">
            <div class="notesHistory">
              <div *ngFor="let dateGroup of noteData">
                <div class="date">
                    {{ isToday(dateGroup.date)}}
                </div>
                <ul class="notesList">
                    <li *ngFor="let data of dateGroup.noteData" class="{{data.read}}">
                        <div class="userImg">
                        <span>
                            <img  src="{{data?.userUrl}}" class="avatar"  onerror="this.onerror=null; this.src='assets/usericon.png'">
                        </span>
                        </div>
                        <div class="notesInfo">
                            <div class="noteinfohead">
                                <div class="notesNameTiming">
                                    <span>{{data.user}} &nbsp;</span>
                                    <span class="noteTime"> /&nbsp; {{data.time}}</span>
                                </div>
                                <div class="hrpoint"></div>
                                <div class="status">
                                    <span class="notesStatus"></span>
                                </div>
                            </div>
                            <p class="notesMessage">{{data.note}}</p>
                        </div>
                    </li>
                </ul>
              </div>  
            </div>
        </div>
    </div>
</div>

  `,
                styles: [`

ul { margin: 0; padding: 0 }
li { list-style: none; }
.mylist{width: 100%; display: inline-block;}
.fz12 { font-size: 12px;  }
.fz14 { font-size: 14px;  }
.fz16 { font-size: 16px;  }
.mgb5{margin-bottom: 5px;}
.mgt5{margin-top: 5px;}
.mgt10{margin-top: 10px;}
.containerComponent{width: 100%; float: left;  padding: 15px; border:1px solid #f5f5f5;}
.full-w{width: 100%; display: inline-block;}
.mychatsystem{margin: 0; padding: 0; width: 100%; float: left;}
.noteInput{resize: none; outline: none; }
.mychatsystem li{list-style: none;}
.noteInput{outline: none !important; box-shadow: none;}
.d-flex{display: flex;}
.justify-content-between{justify-content: space-between;}
.uv_dp { height: 50px; width: 55px; background-color: #f7f7f7; display: inline-block; }
.bg_list { background-color: #ffd5d5; border-radius: 7px; padding: 7px; font-size: 13px; border-top-left-radius: 0; float: left;}.dp_wrapper { width:100%; display: flex; }
.uv_details { width: 90%; float: right;  position: relative; top: -27px;}
.chat_name{font-size: 14px; font-weight: normal; color: #a0a0a0; font-family: sans-serif;}
.chat_date{font-size: 12px; color: #9e9e9e; margin-left:0; margin-top: 2px; display: inline-block; font-family: sans-serif;}
.adddata{width: 100%; display: inline-block; padding: 3px; resize: none; border-radius: 3px; border: 1px solid #e6e6e6; font-size: 13px; overflow: hidden; height: 60px;}
.mylist{float: left; width: 100%;}
.username{margin-left: 11px; width: 100%; justify-content: flex-end; align-items: flex-end; flex-direction: column;}
.rightside .uv_details{width: 90%; float: left;  position: relative; top: -27px; text-align: right; align-items: flex-end}
.secondPersion{display: flex; align-items: flex-end; width: 100%;}
.fright{display: flex;   width: 100%;   justify-content: flex-end;}
.meui{margin-right: 13px;}
.contenttype{margin-right: 18px;}
.topright{ border-radius: 7px; border-top-right-radius: 0; background-color: #d9fbda;}
.usernameFirst{margin-left: 14px;}
.d_line{ position: absolute; width: 100%; height: 1px; background-color: #e6e6e6; top: 56%;   z-index: -1; transform: translateY(-50%);} 
.d_text{ font-weight: 400 !important;  color: #000;} 
.usericon{width: 50px;}
.notesHistory::-webkit-scrollbar {
    width: 8px;
    background-color: #fbfbfb;
}
.notesHistory::-webkit-scrollbar-track {
    width: 3px;
    background-color: #f0f0f0;
    border-left: 3px solid #fbfbfb;
    border-right: 3px solid #fbfbfb
}

.notesHistory::-webkit-scrollbar-thumb {
    background-color: #e1e2e2;
    border-radius: 30px;
}

body {
    font-family: Arial, Helvetica, sans-serif
}

.notesWrapper {
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
}

.head {
    background-color: #f3f3f3;
    color: #777;
    padding: 8px 15px;
    border-radius: 3px;
}

.notesLayout {
    background-color: #fbfbfb;
}

.notesTextType {
    padding: 12px 30px;
}

.noteTexarea {
    width: 100%;
    border-radius: 0.25em;
    resize: none;
    border-color: #d6d6d6;
    padding: 18px 45px 15px 12px;
    font-size: 14px
}

.noteTexarea:focus {
    border-color: #8e8e8e;
    outline: none;
}
.noteTexarea:focus + .label{
    top:7px; font-size: 11px;
    opacity: 0;
}
.op{
    opacity: 0;
}

.noteTextContainer {
    position: relative;
    width: 100%;
    margin-bottom: 8px
}

.label {
    position: absolute;
    top: 12px;
    left: 13px;
    margin-bottom: 0;
    font-size: 14px;
    color: #9d9d9dbd;
    transition: ease-in-out 0.2s;
}

.postBtn {
    display: inline-flex;
    position: absolute;
    bottom: 15px;
    right: 12px;
    text-decoration: none;
    align-items: center;
}

.divider {
    font-size: 20px;
    color: #d6d6d6;
}

.hr {
    width: 100%;
    height: 1px;
    background-color: #cddfbd;
}

.date {
    text-align: center;
    color: #abc98e;
    font-size: 12px;
    padding: 8px 0
}

.noteContainer {
    padding: 0 10px;
}

.notesHistory {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: 400px;
    padding: 0 20px;
}

.notesList {
    padding: 0;
    margin: 0;
    list-style-type: none;
}

.notesList li {
    display: flex;
    padding: 8px 12px;
    border-radius: 4px;
}

.notesList li:not(:last-child) {
    margin-bottom: 12px;
}

.notesList li.unread {
    background-color: #fdeaeb;
}

.notesList li.read {
    background-color: #fbfbfb;
}

.userImg {
    width: 40px;
}

.avatar {
    width: 34px;
    height: 34px;
    border-radius: 100%;
    display: inline-block;
    overflow: hidden;
    background-color: #fff;
}

.notesNameTiming {
    font-size: 11px;
    width: 370px;
}

.noteTime {
    color: #90b264;
}

.notesInfo {
    width: calc(100% - 40px);
    padding: 4px 0 4px 4px;
}

.noteinfohead {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom:3px
}

.hrpoint {
    width: 100%;
    height: 1px;
    background-color: #c5ced5;
    display: inline-block
}

.status {
    width: 50px;
    text-align: right;
}

.unread .notesStatus {
    width: 10px;
    height: 10px;
    background-color: #6da23a;
    display: inline-block;
    border-radius: 100%;
}

.read .notesStatus {
    width: 10px;
    height: 10px;
    background-color: #c5ced5;
    display: inline-block;
    border-radius: 100%;
}

.notesMessage {
    font-size: 14px;
    margin: 0;
}

.sendimg {
    width: 20px;
    margin-left: 4px;
    position: relative;
    top: 3px;
}
  `]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, { noteId: [{
            type: Input
        }], noteData: [{
            type: Input
        }], apiURL: [{
            type: Input
        }], fileurl: [{
            type: Input
        }], GenericToken: [{
            type: Input
        }], dataBase: [{
            type: Input
        }], spList: [{
            type: Input
        }], clickMethod: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NotesModule, { declarations: function () { return [NotesComponent]; }, imports: function () { return [CommonModule,
        FormsModule]; }, exports: function () { return [NotesComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NotesModule, [{
        type: NgModule,
        args: [{
                declarations: [NotesComponent],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [NotesComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return []; }, { StatusNotes: [{
            type: Input
        }], buttons: [{
            type: Input
        }], disable: [{
            type: Input
        }], actionClick: [{
            type: Output
        }], statusClick: [{
            type: Output
        }], componentRef: [{
            type: ViewChild,
            args: [SwiperComponent]
        }], directiveRef: [{
            type: ViewChild,
            args: [SwiperDirective]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BreadcrumbModule, { declarations: function () { return [BreadcrumbComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        SwiperModule]; }, exports: function () { return [BreadcrumbComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BreadcrumbModule, [{
        type: NgModule,
        args: [{
                declarations: [BreadcrumbComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    SwiperModule
                ],
                exports: [BreadcrumbComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtongroupComponent, [{
        type: Component,
        args: [{
                selector: 'sml-buttongroup',
                template: `
	<div class="w-100 mb-5">
	<div class="form-row align-items-center mb-5">
		<div class="col-md-12 col-12 mb-0">
			<div class="btn-group">
				<button type="button" [ngStyle]="buttonGroupLabelStyle" [style.background]="buttonGroupStyle?.backgroundcolor" [style.width]="buttonGroupStyle?.width"
				 [style.height]="buttonGroupStyle?.height" class="btn btn-default  dropdown-toggle" data-toggle="dropdown">
					{{ obj.label }}
					<span [style.background]="buttonGroupStyle?.togglebackgroundcolor" class="dropdown-toggle-after" [style.height]="buttonGroupStyle?.height">
						<img src="./assets/Arrowcombobox.png">
					</span>
				</button>
				<div [style.width]="buttonGroupStyle?.width" class="dropdown-menu">
					<a *ngFor="let button of obj.dropdownButtons;let i = index;" class="dropdown-item" (mouseover)="hoverAnchor[i] = true" (click)="clickMethod(button.action)"
					 (mouseleave)="hoverAnchor[i]=false" [ngStyle]="hoverAnchor[i]?getHoverStyle(): buttonGroupValueStyle">
						{{button.title}}
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
	`,
                styles: [`
		
.dropdown-toggle-after{
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
 width: 175px;
 background-color: #8ec63f;
 border-radius: 6px;
 color: #fff;
 display: inline-flex;
 white-space: unset !important;
 text-align: left;
 align-items: center;
 font-size: 14px;
 padding:9px 6px;
 line-height: 1.4;
 position: relative;
}

.dropdown-toggle:focus {
 box-shadow: none;
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

.dropdown-toggle::after {
    display:none;
}

.updrop{position: absolute; top: -19px; right: 18px;}

	`]
            }]
    }], function () { return []; }, { obj: [{
            type: Input
        }], actionClick: [{
            type: Output
        }], buttonGroupStyle: [{
            type: Input
        }], buttonGroupLabelStyle: [{
            type: Input
        }], buttonGroupValueStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonGroupModule, { declarations: function () { return [ButtongroupComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ButtongroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonGroupModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtongroupComponent],
                imports: [
                    CommonModule
                ],
                exports: [ButtongroupComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SinglefileuploadComponent, [{
        type: Component,
        args: [{
                selector: 'sml-singlefileupload',
                template: `
	<div class="w-100">
	<div class="form-row align-items-center">
		<div class="col-12 mb-0">
			<label class="col-md-12 dropdownarea" for="{{idInputFile}}">
				<div class="d-flex w-100 flex-column">
					<input type="file" id="{{idInputFile}}" (change)="upload($event.target.files)" class="drag"
						[ngStyle]="{'height.px': height,'width.px': width}" />
					<div class="d-flex align-content-start align-items-start w-100 flex-column">
						<div class="d-flex align-content-start align-items-start">
							<span class="uploadicon"><img src="./assets/upload.png" /></span>
							<div class="d-flex flex-column position-relative w79">
								<div class="fz14 top5" [ngClass]="{'getData':isFiles}">Choose a file or drag it here. 
									<span *ngIf="percentDone"> {{percentDone}}%</span></div>
								<div class="progressContainer">
									<div class="procesbar"></div> 
									<div class="w-100 z9" *ngIf="percentDone">
										<div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</label>

			<div class="listdata mt-5" *ngIf="UploadedFileli">
				<ul class="w-100 fileuploadlist">
					<li *ngFor="let data of datas; let i = index"
						class="w-100 d-flex justify-content-between align-content-around">
						<div class="w-100 mflex" *ngIf="contentIndex != i">
							<a href="{{data.FileUrl}}" target="_blank">{{data.Description}}</a>
							<div class="float-right d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="edit(data,i)">
									<img src="./assets/pencil-edit-button.svg">
								</div>
								<div class="cross icons bg-danger pointer d-flex justify-content-center align-items-center"
									(click)="DeleteFIles(data.FilesId)">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
						<div *ngIf="editContent && contentIndex == i"
							class="w-100 d-flex align-items-center">
							<input type="text" class="form-control w-75" name="textdata" [value]="data.Description"
								[(ngModel)]="textdata" #ctrl="ngModel">
							<div class="d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="updateName(data.FilesId)">
									<img src="./assets/checked.svg">
								</div>
								<div class="cross icons bg-dark pointer d-flex justify-content-center align-items-center"
									(click)="esc()">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
	`,
                styles: [`
	.cursor-pointer {
		cursor: pointer;
	  }
	  .node-content-wrapper, .tree-children {
		position: relative;
	  }  
	  .cr-slider-wrap {
		margin: 8px auto !important
	  }
	  .drag {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		z-index:999999;
	  }
	  .dropdownarea {
		width: 100%;
		border: 1px dashed #ccc;
		padding:10px 15px;
		display: flex;
		align-items: center;
		height: 65px;
		text-align: center;
		align-items: center;
		position: relative;
	  }
	  .dropdownarea h1 {
		color: #7d7c7c;
		font-size: 17px;
	  }
	  .pd5 {
		padding: 89px 9px 76px 0px;
		float: left;
		width: 100%;
	  }
	  .table-headed {
		padding: 15px;
		display: block;
	  }
	  .mgt50 {
		margin-top: 50px;
	  }
	  .btndefault {
		background-color: #f3f3f3;
		border-color: #e6e6e6;
		color: #333;
	  }
	  .cross {
		display: inline-block;
		font-size: 12px;
		padding: 5px;
		color: red;
		font-weight: bold;
		width: 10px;
		height: 10px;
		margin-left: 10px;
	  }
	  .progressbar {
		height: 2px;
		background: green;
		float: left;
	  }
	  .fz14 {
		font-size: 14px;
	  }
	  .top50 {
		top: 31px;
		left: -19px;
	  }
	  .successmsg {
		font-size: 14px;
		padding: 10px;
		color: green;
		width: 100%;
		text-align: center;
		position: absolute;
		top: -82px;
	  }
	  .fileuploadlist {
		margin: 0;
		padding: 0;
	  }
	  .fileuploadlist li {
		margin: 0;
		padding: 0;
		width: 100%;
		list-style: none;
		margin-bottom: 10px;
	  }
	  .fileuploadlist li a {
		margin: 0;
		padding: 0;
		font-size: 14px;
		color: #333;
		text-transform: capitalize;
	  }
	  .pointer {
		cursor: pointer;
	  }
	  .cross img {
		height: 10px;
	  }
	  .listdata {
		width: 100%;
		max-width: calc(100% - 100px);
		position: absolute;
		bottom:12px;
		left:77px;
		background-color: #fff;;
		z-index: 9999999;
	  }
	  .mflex{
		display: flex;
		background: #fff;
		align-items: center;
		max-width: calc(100% - 100px);
	  }
	  .top5{
		top:12px;
		position: relative;
	  }
	  .getData{
		top:5px;
	  }
	  .settingoption {
		width: 50px;
	  }
	  .icons {
		width: 20px;
		height: 20px;
		border-radius: 3px;
	  }
	  .checkbox {
		display: flex;
		align-items: center;
		margin: 10px 0;
	  }
	  .styled-checkbox {
		position: absolute;
		opacity: 0;
	  }
	  .styled-checkbox+span {
		position: relative;
		cursor: pointer;
		padding: 0;
	  }
	  .styled-checkbox+span:before {
		content: "";
		margin-right: 10px;
		display: inline-block;
		vertical-align: text-top;
		width: 15px;
		height: 15px;
		border: 1px solid #ccc;
	  }
	  .styled-checkbox:checked+span:after {
		content: "";
		position: absolute;
		left: 5px;
		top: 2px;
		height: 9px;
		width: 5px;
		border: solid #09b4bd;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	  }
	  .procesbar {
		background: #ccc;
		height: 2px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	  }
	  .progressContainer {
		width: 100%;
		position: relative;
		top:16px;
	  }
	  .z9 {
		z-index: 99;
		position: relative;
	  }
	  .w79 {
		width: 82%;
	  }
	  .uploadicon {
		padding: 10px;
	  }
	  .w-100 {
		width: 100%;
	  }
	  .mb-5 {
		margin-bottom: 3rem!important
	  }
	  .form-row {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: -5px;
		margin-left: -5px;
	  }
	  .col-12 {
		flex: 0 0 100%;
		max-width: 100%;
	  }
	  .mb-0 {
		margin-bottom: 0px!important;
	  }
	  .form-row>.col, .form-row>[class*=col-] {
		padding-right: 5px;
		padding-left: 5px;
	  }
	  .d-flex {
		display: flex;
	  }
	  .position-relative {
		position: relative;
	  }
	  .border {
		border: 1px solid #dee2e6!important
	  }
	  .flex-column {
		flex-direction: column
	  }
	  .align-content-around {
		align-content: space-around
	  }
	  .bg-success {
		background-color: #28a745!important;
	  }
	  .bg-danger {
		background-color: #dc3545!important;
	  }
	  .justify-content-center {
		-webkit-box-pack: center!important;
		-ms-flex-pack: center!important;
		justify-content: center!important;
	  }
	  .float-right {
		float: right!important;
	  }
	  .justify-content-between {
		-webkit-box-pack: justify!important;
		-ms-flex-pack: justify!important;
		justify-content: space-between!important;
	  }
	  .floating-border{
		border:1px solid #ccc;
		padding: 15px !important;
		position: relative;
	  }
	`]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, { idInputFile: [{
            type: Input
        }], global_url: [{
            type: Input
        }], url: [{
            type: Input
        }], fileurl: [{
            type: Input
        }], FilesGroupIdvalue: [{
            type: Input
        }], FileId: [{
            type: Input
        }], nameFile: [{
            type: Input
        }], dataBase: [{
            type: Input
        }], fileResponse: [{
            type: Output
        }], label: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SinglefileuploadModule, { declarations: function () { return [SinglefileuploadComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule]; }, exports: function () { return [SinglefileuploadComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SinglefileuploadModule, [{
        type: NgModule,
        args: [{
                declarations: [SinglefileuploadComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                exports: [SinglefileuploadComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ImagecropComponent, [{
        type: Component,
        args: [{
                selector: 'sml-imagecrop',
                template: `
  <div class="homewrap">
  <div class="head_sec">
    <div class="relativeLeft">{{ title }}</div>
    <div class="relativeUser">
      <div class="user_DP  d-flex justify-content-center align-items-center" [ngStyle]="{'height.px': height,'width.px': width}">
        <img src="{{ imagePath }}" [ngClass]="{'avatar1': imagePath != '' && imagePath != 'assets/img/cropimage/avatar.png'}" onerror="this.onerror=null; this.src='assets/img/cropimage/avatar.png'" class="avatar" *ngIf="!avtarImage">
        <img class="htmlbinds" src="">
        <div class="camera_w" (click)="modelBox()">
          <img src="./assets/whitecamara.png">
        </div>
      </div>
    </div>
  </div>
  <div [class.showModel]="showModel" class="model_wrap position-fixed w-100 h-100">
    <div class="overlay"></div>
    <div class="model_content bg-white position-relative">
      <div (click)="closeModel()" class="position-absolute times">&times;</div>
      <div class="dandd_wrap d-flex flex-column ">
        <div class="model_header text-center mb-4">
          <span class="d-inline-block hea
            d_text">Change Profile Pic</span>
        </div>
        <div class="imgdar mb-2">
          <div class="imgd_area ddswhd text-center d_flex flex-column align-items-center justify-content-center" id="camswhi">
            <div class="d_flex w-100 position-relative flex-column justify-content-center align-items-center mb-1">
              <img src="./assets/cloud-upload-arrow.svg">
              <span class="text-black-50 fz11 mb-1">Drag & Drop</span>
              <input type="file" class="file_input" id="upload" (change)="fileChangeEvent($event)" accept="image/*">
              <span class="text-black-50 fz11 mb-1">or</span>
              <button class="btn btn-sm cst_btn ins_md_btn mbtn">Upload Photo</button>
            </div>
            <span class="text-black-50 fz11 mb-1">or</span>
            <div class="d_flex w-100 position-relative flex-column justify-content-center align-items-center cursor-pointer" (click)="snapPhotoEvt()">
              <img src="./assets/photo-camera.svg">
              <span class="text-black-50 fz11">Snap Photo</span>
            </div>
          </div>
          <div class="text-center w-100 float-left">
            <img id="preview" src="" class="w-100">
          </div>
          <div class="w-100 text-center">
            <img class="htmlbinds1 crophide" src="">
          </div>
          <!-- camera -->
          <div class="w-100">
            <video #video id="video" width="100%" height="200" autoplay></video>
          </div>
          <div class="w-100">
            <canvas #canvas id="canvas" width="640" height="480" style="display:none"></canvas>
          </div>
          <div id="cimgdiv" class="w-100"></div>
          <div id="htmlbind" class="saved_img text-center"></div>
          <!-- camera -->
        </div>
        <div *ngIf="snapPhoto" class="text-center mb-2">
          <button class="btn px-4 btn-sm cst_btn mbtn" (click)="capture()">Snap photo</button>
        </div>
        <div *ngIf="cropBtn" class="text-center mb-2 mt-2" id="cropbtn">
          <button (click)="crop()" class="btn px-4 btn-sm cst_btn">Crop</button>
        </div>
        <div *ngIf="camcropBtn" class="text-center mb-2">
          <button (click)="cropcam()" class="btn px-4 btn-sm cst_btn mbtn mt-2">Crop</button>
        </div>
        <div class="d-flex justify-content-center" [ngClass]="{'justify-content-between': showUplaod}">
          <button (click)="closeModel()" style="background: gainsboro;" class="btn btn-sm mbtn px-4">Cancel</button>
          &nbsp;
          <button *ngIf="showUplaod" class="btn btn-sm btn-info bgc_blue px-4 mbtn" (click)="upload()">Upload</button>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
                styles: [`
  .homewrap {
    height: auto;
    width: 100%
}
.head_sec {
    background-color: #fff;
    width: 100%;
    min-height: auto;
}
.camera_w {
    position: absolute;
    height: 100%;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s
}
.camera_w img {
    width: 26px;
}
.user_DP {
    width: 100px;
    height: 100px;
    border: 1px solid #d6d6d6;
    border-radius: 100%;
    background-color: #f8f8f8;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    overflow: hidden;
}
.user_DP:hover .camera_w {
    visibility: visible;
    opacity: 1;
    top: 0
}
.avatar {
    width: 60px;
}
.avatar1 {
  width: 120px !important;
}
.overlay {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.times {
    color: lightgray;
    font-size: 30px;
    right: 10px;
    top: 0;
    line-height: 30px;
    cursor: pointer;
}
.ins_md_btn {
    width: 86px;
    padding: 4px 0;
    font-size: 11px
}
.text-black-50 {
    color: #a6a9ab;
}
.btn_select_group .btn {
    padding: 8px 16px
}
.model_wrap {
    display: none;
    top: 0;
    left: 0;
    z-index: 9;
}
.model_content {
    width: 320px;
    min-height: 400px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    border-radius: 4px;
    padding: 30px;
    box-shadow: 0 3px 6px #464545
}
.head_text {
    color: #038888;
    position: relative;
    font-size: 18px;
    padding: 6px 0
}
.head_text::after {
    content: '';
    display: block;
    width: 40%;
    height: 1px;
    background-color: #038888;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%)
}
.imgd_area {
    height: 200px;
    width: 200px;
    border: 2px dashed #ccc;
    margin: 0 auto;
    border-radius: 100%;
    overflow: hidden;
}
.imgd_area img {
    width: 27px;
}
.file_input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0
}
.cst_btn {
    background-color: #00acac;
    color: #fff;
}
.bgc_blue {
    background-color: #6ba3e2
}
.fz13 {
    font-size: 13px;
}
.fz11 {
    font-size: 11px;
}
.showModel {
    display: block;
}
.d_flex {
    display: flex;
}
.camera_H {
    display: none
}
.camera_D {
    display: block
}
.imgdar {
    height: 247px;
}
.hide {
    display: none;
}
.htmlbinds:nth-child(2) {
    display: none;
}
.htmlbinds {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.relativeLeft {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
}
.relativeUser {
    display: block;
    padding-top: 15px;
    padding-bottom: 15px;
}
.mbtn {
    font-size: 12px;
}
.d-flex {
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
}
.flex-column {
    -webkit-box-orient: vertical!important;
    -webkit-box-direction: normal!important;
    -ms-flex-direction: column!important;
    flex-direction: column!important;
}
.position-relative {
    position: relative!important;
}
.w-100 {
    width: 100%;
}
.h-100 {
    height: 100%!important;
}
.position-fixed {
    position: fixed!important;
}
.bg-white {
    background-color: #fff!important;
}
.position-absolute {
    position: absolute!important;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    font-size: 12px !important;
}
.btn-sm {
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
}
.justify-content-center {
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
}
  `]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: ɵngcc8.Http }]; }, { url: [{
            type: Input
        }], path: [{
            type: Input
        }], OnSaveFile: [{
            type: Output
        }], video: [{
            type: ViewChild,
            args: ['video']
        }], canvas: [{
            type: ViewChild,
            args: ['canvas']
        }], title: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ImagecropModule, { declarations: function () { return [ImagecropComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule]; }, exports: function () { return [ImagecropComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ImagecropModule, [{
        type: NgModule,
        args: [{
                declarations: [ImagecropComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                exports: [ImagecropComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{
                selector: 'sml-table',
                template: `
  <div class="table-100 {{id}}">
	<div>
		<ng-content select="sml-table-header"></ng-content>
  </div>
  <div id="x-{{id}}" [ngStyle]="{'width': screenWidth + 'px', 'overflow-x' : scrollX ? 'auto' : 'none' }" >
	<table class="table table-bordered h-auto" [ngClass]="{'over-flow': !isfixedheight}"
		[style.width]="width + 'px'" [style.max-height]="height + 'px'" border="{{obj?.border}}">
		<thead>
			<tr>
				<ng-content select="sml-table-column"></ng-content>
			</tr>
		</thead>
		<tbody id="y-{{id}}"  class="h-auto sml-table-scroll-y" [style.max-height]="height + 'px'">
			<ng-content select="sml-table-body"></ng-content>
		</tbody>
  </table>
  </div>
	<div>
		<ng-content select="sml-table-footer"></ng-content>
	</div>
</div>
  `,
                host: {
                    '(window:resize)': 'onResize($event)'
                },
                styles: [`
  :host{--c-scroll-value-nonhideen:'hidden';--c-scroll-value-hideen:'overlay';}
  :host /deep/ sml-table-column{display:contents;}
  :host /deep/ sml-table-body{display:contents;}
  :host /deep/ sml-table-footer-pagination{float:right;}
  .over-flow{overflow:hidden !important;}
  .table-bordered{border-bottom:1px solid #dee2e6 !important;border-top:none !important;border-left:none !important;border-right:none !important;}
   thead{display:block;}
   tbody{display:block;}
  .table-100{width:100%;}
  .h-auto{height:auto !important;}
  .sml-table-scroll-y{overflow-y:var(--c-scroll-value-nonhideen);overflow-x:var(--c-scroll-value-nonhideen);}
  .sml-table-scroll-y:hover{overflow-y:var(--c-scroll-value-hideen);}
  .sml-table-scroll-y::-webkit-scrollbar{width:8px;background-color:#fbfbfb;}
  .sml-table-scroll-y::-webkit-scrollbar-track{width:3px;background:rgba(222, 222, 222, .75);}
  .sml-table-scroll-y::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, .5);border-radius:4px;}
  `]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { obj: [{
            type: Input
        }], id: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], minwidth: [{
            type: Input
        }], isfixedheight: [{
            type: Input
        }], scrollX: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColumnComponent, [{
        type: Component,
        args: [{
                selector: 'sml-table-column',
                template: `
  <th *ngIf="obj[name].isDisplay" [style.width]="obj[name].width + 'px'"  [style.max-width]="obj[name].width + 'px'"  [style.min-width]="obj[name].width + 'px'"    [style.text-align]="obj[name].columnDefinatinAlignment" (click)="sort()"
	[ngStyle]="headerStyle">
	{{obj[name].title}}
	<div [ngClass]="{'sort_icon_divl': obj[name].columnDefinatinAlignment != 'right','sort_icon_divr': obj[name].columnDefinatinAlignment == 'right' }"
		class="sort_icon_div">
		<div class="hi-0">
			<i class="fa fa-sort-asc sort_icon_asc cog-lightblue"
				*ngIf="obj[name].orderBy == 'ASC' && obj[name].isCurrent"></i>
		</div>
		<div>
			<i class="fa fa-sort-desc cog-lightblue" *ngIf="obj[name].orderBy == 'DESC' && obj[name].isCurrent"></i>
		</div>
	</div>
</th>
  `,
                host: {
                    '(window:resize)': 'onResize($event)'
                },
                styles: [`
  th{padding-top: 1px;padding-bottom: 1px;vertical-align: middle !important;cursor: pointer;overflow: hidden !important;}
  .hi-0{height: 0px;}
  .sort_icon_divl {display: inline-block;float: right;}
  .sort_icon_divr {display: inline-block;float: left;}
  .cog-lightblue{color:lightblue;}
  `]
            }]
    }], function () { return []; }, { name: [{
            type: Input
        }], width: [{
            type: Input
        }], minwidth: [{
            type: Input
        }], id: [{
            type: Input
        }], headerStyle: [{
            type: Input
        }], alignment: [{
            type: Input
        }], sortClick: [{
            type: Output
        }], obj: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 'sml-table-header',
                template: `
  <div>
    <div class="row" *ngIf="display">
        <div class="col-md-12" *ngIf="alignment.searchposition != 'right' ||  alignment.show25 != 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}">
                <sml-table-header-search *ngIf="includesearch" [name]="textObj.name" [value]="textObj.value"
                    [placeholder]="textObj.placeholder" (searchClick)="searchClick($event)">
                </sml-table-header-search>
            </div>
            <div class="dis-block">
                <ng-container *ngTemplateOutlet="headerReamaingContent"></ng-container>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}">
                <sml-table-header-count *ngIf="includecount" [listValue]="drpObj.drpDataList" [value]="drpObj.selectedValue"
                    (changevalue)="changeRowDisplayCount($event)"></sml-table-header-count>
            </div>
        </div>
        <div class="col-md-12" *ngIf="alignment.searchposition == 'right' &&  alignment.show25 == 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}">
                <sml-table-header-count *ngIf="includecount" [listValue]="drpObj.drpDataList" [value]="drpObj.selectedValue"
                    (changevalue)="changeRowDisplayCount($event)"></sml-table-header-count>
            </div>
            <div class="dis-block">
                <ng-container *ngTemplateOutlet="headerReamaingContent"></ng-container>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}">
                <sml-table-header-search *ngIf="includesearch" [name]="textObj.name" [value]="textObj.value"
                    [placeholder]="textObj.placeholder" (searchClick)="searchClick($event)">
                </sml-table-header-search>
            </div>
        </div>
    </div>
</div>
<ng-template #headerReamaingContent>
    <ng-content></ng-content>
</ng-template>
  `,
                styles: [`
    .dis-block{display: inline-block;min-width: 200px;}
    .f-l{float: left;}
    .f-r{float: right;}
    .pl-5{padding-left: 5px !important;}
    .pr-5{padding-right: 5px !important;}
  `]
            }]
    }], function () { return []; }, { width: [{
            type: Input
        }], minwidth: [{
            type: Input
        }], maxwidth: [{
            type: Input
        }], includesearch: [{
            type: Input
        }], includecount: [{
            type: Input
        }], display: [{
            type: Input
        }], alignment: [{
            type: Input
        }], changerowcount: [{
            type: Output
        }], searchRecord: [{
            type: Output
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{
                selector: 'sml-table-footer',
                template: `
  <div>
    <div class="row" *ngIf="display">
        <div class="col-md-12"
            *ngIf="alignment.showposition != 'right' ||  alignment.showpaginationposition != 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}">
                <div *ngIf="includepagecount" class="pt-8" style="font-size:9pt;">
                    Showing {{recordcount}} of {{totalcount}}
                </div>
            </div>
            <div class="dis-block">
                <ng-content></ng-content>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}">
                <sml-table-footer-pagination *ngIf="includepagination && totalcount > recordcount && totalcount > 0"
                    [noPage]="page" [totalRecords]="totalcount" [pageSize]="pagesize"
                    (clickPage)="pageNumberUpdate($event)">
                </sml-table-footer-pagination>
            </div>
        </div>
        <div class="col-md-12"
            *ngIf="alignment.showposition == 'right' &&  alignment.showpaginationposition == 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}">
                <sml-table-footer-pagination *ngIf="includepagination && totalcount > recordcount && totalcount > 0"
                    [noPage]="page" [totalRecords]="totalcount" [pageSize]="pagesize"
                    (clickPage)="pageNumberUpdate($event)">
                </sml-table-footer-pagination>
            </div>
            <div class="dis-block">
                <ng-content></ng-content>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}">
                <div *ngIf="includepagecount" class="pt-8">
                    Showing {{recordcount}} of {{totalcount}}
                </div>
            </div>
        </div>
    </div>
</div>
  `,
                styles: [`
  .dis-block{
    display: inline-block;
}
.f-l{
    float: left;
}
.f-r{
    float: right;
}
.pt-8{
    padding-top: 8px;
}
.pl-5{
    padding-left: 5px !important;
}
.pr-5{
    padding-right: 5px !important;
}
  `]
            }]
    }], function () { return []; }, { width: [{
            type: Input
        }], minwidth: [{
            type: Input
        }], maxwidth: [{
            type: Input
        }], includepagecount: [{
            type: Input
        }], includepagination: [{
            type: Input
        }], display: [{
            type: Input
        }], totalcount: [{
            type: Input
        }], recordcount: [{
            type: Input
        }], pagesize: [{
            type: Input
        }], page: [{
            type: Input
        }], alignment: [{
            type: Input
        }], changepage: [{
            type: Output
        }], obj: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                selector: 'sml-table-footer-pagination',
                template: `
	<ul class="pagination">
  <li class="page-item" [ngClass]="{ 'disabled' : noPage == 1 }">
    <a class="page-link" style="cursor: pointer" (click)="changePage(1);">«</a>
  </li>
  <li *ngFor="let item of noItems" class="page-item"
    [ngClass]="{ 'active' : item == noPage, 'disabled' : item == noPage }">
    <a class="page-link" style="cursor: pointer" (click)="changePage(item);">{{ item }}</a>
  </li>
  <li class="page-item" [ngClass]="{ 'disabled' : noPage == nItem }">
    <a class="page-link" style="cursor: pointer" (click)="changePage(nItem);">»</a>
  </li>
</ul>
	`,
                styles: [`.page-link{font-size:9pt !important}`]
            }]
    }], function () { return []; }, { clickPage: [{
            type: Output
        }], noPage: [{
            type: Input
        }], totalRecords: [{
            type: Input
        }], pageSize: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableBodyComponent, [{
        type: Component,
        args: [{
                selector: 'sml-table-body',
                template: `
  <tr *ngFor="let row of data;let index = index; trackBy: trackByIndex1" id="tr-{{id}}-{{index}}" [style.background]="index % 2 == 0 ? rowstyle.bgEven : rowstyle.bgOdd">
  <td *ngFor="let col of columns;let cindex = index; trackBy: trackByIndex" id="td-{{id}}-{{index}}-{{cindex}}"  (click)="columnClick(row,col)"  [style.width]="obj[col].width + 'px'"  [style.max-width]="obj[col].width + 'px'"  [style.min-width]="obj[col].width + 'px'"  [style.text-align]="alignment[col].columnDefinatinAlignment" [ngClass]="{'breakWord': obj[col].isFixedWidth , 'td_over': !obj[col].isHtml , 'pointer-cursor': obj[col]?.isColumnClick ,'dis-none': !obj[col].isDisplay }"  [ngStyle]="rowstyle">
    <span *ngIf="!obj[col].isHtml" style="white-space: pre-wrap; word-break: keep-all;">{{row[col]}}</span>
    <span *ngIf="obj[col].isHtml">
      <div *ngIf="!obj[col].isCheckbox && !obj[col].isImage && !obj[col].isTextbox">
        <div class="btn-group dropdown" *ngIf="dropdownButtonsList == false && dropdownButtons.length > 0 && !obj[col].isSingleButton">
            <div id="idComponent" class="DropdownButton" (click)="clickMethod(dropdownButtons[0].Action,row);">
                {{ dropdownButtons[0].Title }}
            </div>
            <span *ngIf="dropdownButtons.length > 1" class="caret DropdownButtonSpan dropdown-toggle" data-toggle="dropdown"></span>
            <ul *ngIf="dropdownButtons.length > 1" class="dropdown-menu DropdownButtonUl dropdown-menu-right" [ngStyle]="dropdownButtonStyle">
              <span *ngFor="let button of dropdownButtons;let i=index;" >
                <li *ngIf="i != 0" class="DropdownButtonLi" (click)="clickMethod(button.Action,row);">
                    {{ button.Title }}
                </li>
              </span>   
            </ul>
        </div>
        <div *ngIf="dropdownButtonsList == false && dropdownButtons.length > 0 && obj[col].isSingleButton">
          <div class="btn-group dropdown pad-r-2" *ngFor="let button of dropdownButtons;let i=index;">
              <div id="idComponent" class="DropdownButton" (click)="clickMethod(button.Action,row);">
                  {{ button.Title }}
              </div>
          </div>
        </div>

        <div class="btn-group dropdown" *ngIf="dropdownButtonsList == true && !obj[col].isSingleButton && row.dropdownButtons.length > 0">
            <div id="idComponent" class="DropdownButton" (click)="clickMethod(row.dropdownButtons[0].Action,row);">
                {{ row.dropdownButtons[0].Title }}
            </div>
            <span *ngIf="row.dropdownButtons.length > 1" class="caret DropdownButtonSpan dropdown-toggle" data-toggle="dropdown"></span>
            <ul *ngIf="row.dropdownButtons.length > 1" class="dropdown-menu DropdownButtonUl dropdown-menu-right" [ngStyle]="dropdownButtonStyle">
              <span *ngFor="let button of row.dropdownButtons;let i=index;" >
                <li *ngIf="i != 0" class="DropdownButtonLi" (click)="clickMethod(button.Action,row);">
                    {{ button.Title }}
                </li>
              </span>   
            </ul>
        </div>
        <div *ngIf="dropdownButtonsList == true && obj[col].isSingleButton">
            <div class="btn-group dropdown pad-r-2" *ngFor="let button of row.dropdownButtons;let i=index;">
                <div id="idComponent" class="DropdownButton" (click)="clickMethod(button.Action,row);">
                    {{ button.Title }}
                </div>
            </div>
        </div>
      </div>
      <div *ngIf="obj[col].isCheckbox">
            <input type="checkbox" class="pointer-cursor" name="{{index}}" id="{{index}}" [(ngModel)]="row[col]" />
      </div>
      <div *ngIf="obj[col].isImage">
          <img src="{{row[col]}}" style="width: 15px; height: 15px;" />
      </div>
      <div *ngIf="obj[col].isTextbox" style="text-align: center;">
          <input type="text" style="text-align: right;width: 80px;padding-right: 2px;"  (change)="textBoxMethod(row,col,'change')" (keydown)="textBoxMethod(row,$event,'keydown')"  (focus)="textBoxMethod(row,col,'focus')" (blur)="textBoxMethod(row,col,'blur')" name="{{index}}" id="{{index}}" [(ngModel)]="row[col]" />
      </div>
    </span>
  </td>
</tr>
<tr *ngIf="isLoading">
  <td [attr.colspan]="columns.length" [style.width]="width + 'px'"  [style.max-height]="height + 'px'" class="text-center h-auto" >
      <img src="./assets/loading.gif" width="100" />
  </td>
</tr>
  `,
                host: {
                    '(window:resize)': 'onResize($event)'
                },
                styles: [`
  td {
    padding-top: 1px;
    padding-bottom: 1px;
    vertical-align: middle !important;
  }
tr:hover{
  background: #FFFF00;
}
tr:last-child > td {
	border-bottom: 0 !important;
}
.td_over{
  overflow: hidden !important;
}
.dis-none{
  display:none !important;
}
.pad-r-2{
  padding-right:2px !important;
}
.breakWord{
  word-break: break-all !important;
}
.text-center{
    text-align: center;
}
.btn:focus {
    box-shadow: none !important;
}
.pointer-cursor {
    cursor: pointer !important;
}
.DropdownButtonLi {
    padding: 5px;
    cursor: pointer;
}
.DropdownButtonLi:hover {
    background-color:#e6e6e6;
}
.DropdownButton  {
    -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
	-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9f9f9), color-stop(1, #e9e9e9));
	background:-moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);
	background-color:#f9f9f9;
	-moz-border-radius:3px;
	-webkit-border-radius:3px;
	border-radius:3px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:0.8em;
	padding:3px 6px;
	text-decoration:none;
}
.DropdownButton:hover  {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #e6e6e6), color-stop(1, #d6d6d6));
	background:-moz-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:-webkit-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:-o-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:-ms-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:linear-gradient(to bottom, #e6e6e6 5%, #d6d6d6 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e6e6e6', endColorstr='#d6d6d6',GradientType=0);
	background-color:#e6e6e6;
}
.DropdownButtonUl {
	  width: 100px;
    margin-left: -50%;
}
.DropdownButtonSpan {
	width: 23px;
    height: 23px;
    -moz-border-radius:3px;
	-webkit-border-radius:3px;
    border-radius: 3px;
    border: 1px solid #dcdcdc;
    background-color: #f9f9f9;
    padding-left: 1px;
    margin-left: -2px;
    padding-top: 2px;
}
.DropdownButtonSpan:hover, .DropdownButtonSpan:active {
    background-color:#e6e6e6;
}
.dropdown-menu {
    min-width: 0px;
    font-size: 12px;
}
.h-auto{
  height: auto !important;
}
  `]
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], dropdownButtons: [{
            type: Input
        }], dropdownButtonsList: [{
            type: Input
        }], columns: [{
            type: Input
        }], rowstyle: [{
            type: Input
        }], alignment: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], minwidth: [{
            type: Input
        }], id: [{
            type: Input
        }], isLoading: [{
            type: Input
        }], dropdownButtonStyle: [{
            type: Input
        }], actionClick: [{
            type: Output
        }], valueClick: [{
            type: Output
        }], textBoxEvent: [{
            type: Output
        }], obj: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SearchComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], searchClick: [{
            type: Output
        }], name: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CountComponent, [{
        type: Component,
        args: [{
                selector: 'sml-table-header-count',
                template: `
  <div class="form-row align-items-center">
    <div class="col-md-12 col-12 mb-1" style="padding-right:4px !important;">
    <ng-select [items]="listValue" [searchable]="false" [clearable]="false" bindLabel="name" bindValue="id" (change)="getselectvalue($event)" [(ngModel)]="value">
    </ng-select>
    </div>
   </div>`,
                styles: [`
    :host /deep/ .ng-select.ng-select-single .ng-select-container {height: 39px !important;}
    :host /deep/ .ng-select:focus{outline: none !important;box-shadow: none !important;}
    :host /deep/ .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{font-size: 9pt !important;}
    :host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value {font-size: 9pt !important;}
    .labelList{font-size:14px !important;position:relative;}
    .w-100{width:100%;}
    .mb-5{margin-bottom:3rem!important}
    .form-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px;}
    .col-12{flex:0 0 100%;max-width:100%;}
    .mb-0{margin-bottom:0px!important;}
    .form-row>.col, .form-row>[class*=col-]{padding-right:5px;padding-left:5px;}
    .d-flex{display:flex;}
    .statusIcon img{width:16px;}
    .statusIcon{display:none;position:absolute;right:28px;top:0}
    .invalidStatus .statusIcon, .validStatus .statusIcon{display:block}
    .floating{border:1px solid #d6d6d6;border-radius:2px;position:relative;padding:2px 0 0 0;}
    .label{position:absolute;left:16px;top:50%;margin-bottom:0;transform:translateY(-50%);transition:all 0.1s;font-size:12px;}
    .showFloat:focus ~ .label, .select2-container--focus ~ .label, .select2-container--open + .label, .float .label{top:3px;-webkit-transform:translateY(0);transform:translateY(0);font-size:9px;left:12px;font-weight:bold;}
    .pl-0{padding-left:0px;}    
  `]
            }]
    }], function () { return []; }, { changevalue: [{
            type: Output
        }], listValue: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TableModule, { declarations: function () { return [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        NgSelectModule]; }, exports: function () { return [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableModule, [{
        type: NgModule,
        args: [{
                declarations: [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    NgSelectModule
                ],
                exports: [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{
                selector: 'sml-navbar',
                template: `
  <nav class="navbar navbar-expand-sm customNavbar position-relative"  [ngStyle]="navStyle">
  <a class="nav-link" routerLink="/dashboard">
    <img src="{{navStyle?.logo ? navStyle?.logo : '/assets/logo.png'}}" height="20" width="40"  alt="" class="logo">
  </a>
  <button class="navbar-toggler">
    <span class="navbar-toggler-icon"></span>
  </button>
  <ng-content select="sml-navbar-menu"></ng-content>  
  <li class="positionRight nav-item dropdown profileUser" *ngIf="iswelcome == 'true'">
    <ng-content  select="sml-navbar-menu-profilemenu"></ng-content>
  </li>
</nav>
  `,
                styles: [`
  .positionRight{position: absolute; right:10px; list-style: none}
.customNavbar { background-color: #2d353c; }
.navbar{padding: 2px 1rem !important}
.nav-link { color: #ffffff; }
.logo { width: 40px }
  `]
            }]
    }], function () { return []; }, { iswelcome: [{
            type: Input
        }], navStyle: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{
                selector: 'sml-navbar-menu',
                template: `
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li *ngIf="link" class="nav-item active">
      <a class="nav-link" [ngStyle]="menuStyle" [routerLink]="link">{{label}}</a>
    </li>
    <li class="nav-item dropdown position-relative" *ngIf="link == undefined">
      <a href="javascript:void()" [ngStyle]="menuStyle" class="nav-link dropdown-toggle" data-toggle="dropdown">
        {{label}}
        <b class="caret"></b>
      </a>
      <ul class="dropdown-menu">
        <ng-content></ng-content>
      </ul>
    </li>
  </ul>
</div>
	`,
                styles: [`
	.nav-link {
		color: #ffffff;
	}
	
	.positionRight {
		position: absolute;
		right: 10px;
		list-style: none
	}
	.nav-link{font-size: 13px;}
	
	.dropdown-toggle{font-size: 13px;}
	
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
		left: 0;
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
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], link: [{
            type: Input
        }], menuStyle: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SubmenuComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return []; }, { actionClick: [{
            type: Output
        }], label: [{
            type: Input
        }], link: [{
            type: Input
        }], param: [{
            type: Input
        }], submenuStyle: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProfileMenuComponent, [{
        type: Component,
        args: [{
                selector: 'sml-navbar-menu-profilemenu',
                template: `
	<div class="dropdown position-relative">
  <a class="nav-link dropdown-toggle" [ngStyle]="menuStyle" data-toggle="dropdown" href="javascript:void">
    <span class="userIcon">
      <img src="{{imagepath}}">
    </span>
    <span>{{label}}</span>
  </a>
  <div class="dropdown-menu">
    <ng-content></ng-content>
  </div>
</div>
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
	.userIcon {
		margin-right: 12px
	}
	.userIcon img {
		width: 24px
	}
	.dropdown-toggle span,.dropdown-menu{
		font-size: 13px;
	}
	.dropdown-toggle::after{    
		top: 3px;
		position: relative;
	}
	a {
		color: white;
	}
	`]
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], imagepath: [{
            type: Input
        }], menuStyle: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProfileSubMenuComponent, [{
        type: Component,
        args: [{
                selector: 'sml-navbar-menu-profilemenu-profilesubmenu',
                template: `
	<a *ngIf="link" class="dropdown-item" href="#" [ngStyle]="submenuStyle" [routerLink]="link">{{label}}</a>
	<a *ngIf="!link" class="dropdown-item" style="cursor: pointer;" [ngStyle]="submenuStyle" (click)="clickMenu()">{{label}}</a>
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
	.userIcon {
		margin-right: 12px
	}
	.userIcon img {
		width: 24px
	}
	.dropdown-toggle span,.dropdown-menu{
		font-size: 13px;
	}
	.dropdown-toggle::after{    
		top: 3px;
		position: relative;
	}
	`]
            }]
    }], function () { return []; }, { menuClick: [{
            type: Output
        }], label: [{
            type: Input
        }], link: [{
            type: Input
        }], submenuStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NavbarModule, { declarations: function () { return [NavbarComponent, SubmenuComponent, MenuComponent, ProfileMenuComponent, ProfileSubMenuComponent]; }, imports: function () { return [CommonModule,
        RouterModule]; }, exports: function () { return [NavbarComponent, SubmenuComponent, MenuComponent, ProfileMenuComponent, ProfileSubMenuComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NavbarModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NavbarComponent,
                    SubmenuComponent,
                    MenuComponent,
                    ProfileMenuComponent,
                    ProfileSubMenuComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [
                    NavbarComponent,
                    SubmenuComponent,
                    MenuComponent,
                    ProfileMenuComponent,
                    ProfileSubMenuComponent,
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultifileuploadComponent, [{
        type: Component,
        args: [{
                selector: 'sml-multifileupload',
                template: `
	<div class="w-100">
	<div class="form-row align-items-center">
		<label class="col-md-12 col-12 mb-0"></label>
		<div class="col-md-12 col-10 mb-0 floating-border" [ngStyle]="{'z-index': styleZIndex}">
			<label class="col-md-12 dropdownarea" for="{{idInputFile}}">
				<div class="d-flex w-100 flex-column">
					<input type="file" id="{{idInputFile}}" (change)="upload($event.target.files)" class="drag"
						[ngStyle]="{'height.px': height,'width.px': width}" />
					<div class="d-flex justify-content-between align-items-center w-100 flex-column">
						<div class="d-flex justify-content-between align-items-center">
							<span class="uploadicon"><img src="./assets/upload.png" /></span>
							<div class="d-flex flex-column position-relative w79">
								<div class="fz14">Choose a file or drag it here. <br /><span *ngIf="percentDone"> Upload
										Percent: {{percentDone}}%</span></div>
								<div class="progressContainer">
									<div class="procesbar"></div>
									<div class="w-100 z9" *ngIf="percentDone">
										<div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
									</div>
									<div *ngIf="uploadSuccess" class="successmsg">Upload Successful</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</label>
			<div class="listdata mt-1">
				<ul class="w-100 fileuploadlist" *ngIf="UploadedFileli">
					<li *ngFor="let data of datas; let i = index"
						class="w-100 d-flex justify-content-between align-content-around">
						<div class="w-100" *ngIf="contentIndex != i">
                            <a href="{{data.FileUrl}}" target="_blank" class="float-left" style="width: 30%;">{{data.Description}}</a>
                            <a *ngIf="moreData == true" class="float-left" style="width: 20%;">{{data.ChangedBy}}</a>
                            <a *ngIf="moreData == true" class="float-left" style="width: 30%;">{{data.ChangedOn}}</a>
							<div class="float-right d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="edit(data,i)">
									<img src="./assets/pencil-edit-button.svg">
								</div>
								<div class="cross icons bg-danger pointer d-flex justify-content-center align-items-center"
									(click)="DeleteFIles(data.FilesId)">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
						<div *ngIf="editContent && contentIndex == i"
							class="w-100 d-flex justify-content-between align-items-center">
							<input type="text" class="form-control w-75" name="textdata" [value]="data.Description"
								[(ngModel)]="textdata" #ctrl="ngModel">
							<div class="float-right d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="updateName(data.FilesId)">
									<img src="./assets/checked.svg">
								</div>
								<div class="cross icons bg-dark pointer d-flex justify-content-center align-items-center"
									(click)="esc()">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
	`,
                styles: [`
	.cursor-pointer {
		cursor: pointer;
	  }
	  
	  .node-content-wrapper, .tree-children {
		position: relative;
	  }
	  
	  .cr-slider-wrap {
		margin: 8px auto !important
	  }
	  
	  .drag {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		z-index:999999;
	  }
	  
	  .dropdownarea {
		width: 100%;
		border: 2px dashed #ccc;
		padding: 50px 15px;
		display: flex;
		align-items: center;
		height: 65px;
		text-align: center;
		align-items: center;
		position: relative;
	  }
	  
	  .dropdownarea h1 {
		color: #7d7c7c;
		font-size: 17px;
	  }
	  
	  .pd5 {
		padding: 89px 9px 76px 0px;
		float: left;
		width: 100%;
	  }
	  
	  .table-headed {
		padding: 15px;
		display: block;
	  }
	  
	  .mgt50 {
		margin-top: 50px;
	  }
	  
	  .btndefault {
		background-color: #f3f3f3;
		border-color: #e6e6e6;
		color: #333;
	  }
	  
	  .cross {
		display: inline-block;
		font-size: 12px;
		padding: 5px;
		color: red;
		font-weight: bold;
		width: 10px;
		height: 10px;
		margin-left: 10px;
	  }
	  
	  .progressbar {
		height: 2px;
		background: green;
		float: left;
	  }
	  
	  .fz14 {
		font-size: 14px;
	  }
	  
	  .top50 {
		top: 31px;
		left: -19px;
	  }
	  
	  .successmsg {
		font-size: 14px;
		padding: 10px;
		color: green;
		width: 100%;
		text-align: center;
		position: absolute;
		top: -82px;
	  }
	  
	  .fileuploadlist {
		margin: 0;
		padding: 0;
	  }
	  
	  .fileuploadlist li {
		margin: 0;
		padding: 0;
		width: 100%;
		list-style: none;
		margin-bottom: 10px;
	  }
	  
	  .fileuploadlist li a {
		margin: 0;
		padding: 0;
		font-size: 14px;
		color: #333;
	  }
	  
	  .pointer {
		cursor: pointer;
	  }
	  
	  .cross img {
		height: 10px;
	  }
	  
	  .listdata {
		width: 100%;
		max-width: 463px
	  }
	  
	  .settingoption {
		width: 66px;
	  }
	  
	  .icons {
		width: 20px;
		height: 20px;
		border-radius: 3px;
	  }
	  
	  .checkbox {
		display: flex;
		align-items: center;
		margin: 10px 0;
	  }
	  
	  .styled-checkbox {
		position: absolute;
		opacity: 0;
	  }
	  
	  .styled-checkbox+span {
		position: relative;
		cursor: pointer;
		padding: 0;
	  }
	  
	  .styled-checkbox+span:before {
		content: "";
		margin-right: 10px;
		display: inline-block;
		vertical-align: text-top;
		width: 15px;
		height: 15px;
		border: 1px solid #ccc;
	  }
	  
	  .styled-checkbox:checked+span:after {
		content: "";
		position: absolute;
		left: 5px;
		top: 2px;
		height: 9px;
		width: 5px;
		border: solid #09b4bd;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	  }
	  
	  .procesbar {
		background: #ccc;
		height: 2px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	  }
	  
	  .progressContainer {
		width: 100%;
		position: relative;
		top: 10px;
	  }
	  
	  .z9 {
		z-index: 99;
		position: relative;
	  }
	  
	  .w79 {
		width: 82%;
	  }
	  
	  .uploadicon {
		padding: 10px;
	  }
	  
	  .w-100 {
		width: 100%;
	  }
	  
	  .mb-5 {
		margin-bottom: 3rem!important
	  }
	  
	  .form-row {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: -5px;
		margin-left: -5px;
	  }
	  
	  .col-12 {
		flex: 0 0 100%;
		max-width: 100%;
	  }
	  
	  .mb-0 {
		margin-bottom: 0px!important;
	  }
	  
	  .form-row>.col, .form-row>[class*=col-] {
		padding-right: 5px;
		padding-left: 5px;
	  }
	  
	  .d-flex {
		display: flex;
	  }
	  
	  .position-relative {
		position: relative;
	  }
	  
	  .border {
		border: 1px solid #dee2e6!important
	  }
	  
	  .flex-column {
		flex-direction: column
	  }
	  
	  .align-content-around {
		align-content: space-around
	  }
	  
	  .bg-success {
		background-color: #28a745!important;
	  }
	  
	  .bg-danger {
		background-color: #dc3545!important;
	  }
	  
	  .justify-content-center {
		-webkit-box-pack: center!important;
		-ms-flex-pack: center!important;
		justify-content: center!important;
	  }
	  
	  .float-right {
		float: right!important;
	  }
	  
	  .justify-content-between {
		-webkit-box-pack: justify!important;
		-ms-flex-pack: justify!important;
		justify-content: space-between!important;
	  }
	  .floating-border{
		border:1px solid #ccc;
		padding: 15px !important;
	  }
	`]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, { idInputFile: [{
            type: Input
        }], nameFiles: [{
            type: Input
        }], global_url: [{
            type: Input
        }], url: [{
            type: Input
        }], fileurl: [{
            type: Input
        }], dataBase: [{
            type: Input
        }], moreData: [{
            type: Input
        }], fileResponse: [{
            type: Output
        }], afterEdit: [{
            type: Output
        }], label: [{
            type: Input
        }], FilesGroupIdvalue: [{
            type: Input
        }], styleZIndex: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MultifileuploadModule, { declarations: function () { return [MultifileuploadComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule]; }, exports: function () { return [MultifileuploadComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultifileuploadModule, [{
        type: NgModule,
        args: [{
                declarations: [MultifileuploadComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                exports: [MultifileuploadComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ImagesLightBoxComponent, [{
        type: Component,
        args: [{
                selector: 'sml-images-light-box',
                template: `
  <div class="w-100">
  <div class="error-msg" *ngIf="error_message != ''">{{error_message}}</div>
  <label class="dropdownarea mar-b-0">
    <div class="d-flex w-100 flex-column">
      <input type="file" multiple id="other" (change)="uploadAndProgress($event.target.files)" class="drag" />
      <div class="d-flex justify-content-between align-items-center w-100 flex-column">
        <div class="d-flex justify-content-between align-items-center">
          <span class="uploadicon">
            <img src="./assets/upload.png" />
          </span>
          <div class="d-flex flex-column position-relative w79">
            <div class="fz14">Choose a file or drag it here.
              <br />
              <span *ngIf="percentDone"> Upload Percent: {{percentDone}}%</span>
            </div>
            <div class="progressContainer">
              <div class="procesbar"></div>
              <div class="w-100 z9" *ngIf="percentDone">
                <div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
              </div>
            </div>
          </div>
          <div *ngIf="uploadSuccess" class="successmsg">Upload Successful</div>
        </div>
      </div>
    </div>
  </label>
  <div class="col-md-12 mt-2 sml-light-box-scroll-y" style="padding-right: 8px;">
    <div class="row">
    <div class="column position-relative" *ngFor="let img of imagesData;let i=index">
    <span *ngIf="img.type == 'Image'">
      <img [src]="img.path" height="96" width="100%" onerror="this.onerror=null; this.src='assets/404_images.png'" (click)="openModal();currentSlide(i+1)"
        class="hover-shadow cursor">
    </span>
    <span *ngIf="img.type == 'Text'">
      <a [href]="img.path" target="_blank">
        <img src="assets/txt_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Pdf'">
      <a [href]="img.path" target="_blank">
        <img src="assets/pdf_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Audio'">
      <a [href]="img.path" target="_blank">
        <img src="assets/audio_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Video'">
      <a [href]="img.path" target="_blank">
        <img src="assets/video_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Doc'">
      <a [href]="img.path" target="_blank">
        <img src="assets/doc_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Csv'">
      <a [href]="img.path" target="_blank">
        <img src="assets/csv_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Ppt'">
      <a [href]="img.path" target="_blank">
        <img src="assets/ppt_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Xls'">
      <a [href]="img.path" target="_blank">
        <img src="assets/xls_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span class="remove_icon">
      <i class="fa fa-times" (click)="deleteFIles(img.FilesId,i)"></i>
    </span>
  </div>
    </div>
  </div>
</div>
<div id="myModallightbox" class="modal">
  <span class="close cursor" (click)="closeModal()">&times;</span>
  <div class="modal-content">
    <div style="margin: auto;width: 80%;">
      <div class="mySlides" *ngFor="let img of imagesData;let i=index">
        <div class="numbertext">{{i + 1}}&nbsp;/&nbsp;{{imagesData.length}}</div>
        <img [src]="img.path" onerror="this.onerror=null; this.src='assets/404_images.png'"   height="450" style="width:100%">
      </div>
    </div>
    <a class="prev" (click)="plusSlides(-1)">&#10094;</a>
    <a class="next" (click)="plusSlides(1)">&#10095;</a>
  </div>
  <div class="caption-container">
    <p id="caption" style="margin-bottom:0px">{{slideDescription}}</p>
  </div>
</div>
	`,
                styles: [`
	.mar-b-0{
    margin-bottom: 0px !important;
}
.dropdownarea {
    width: 100%;
    border: 1px dashed #ccc;
    padding: 35px 0px;
    display: flex;
    align-items: center;
    height: 65px;
    text-align: center;
    align-items: center;
    position: relative;
}
.progressContainer {
    width: 100%;
    position: relative;
    top: 2px;
}
.drag {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index:999999;
}   
.progressbar {
    height: 2px;
    background: green;
    float: left;
}
.fz14 {
    font-size: 14px;
}
.successmsg {
    font-size: 14px;
    color: green;
    width: 25%;
    text-align: right;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
}
.procesbar {
    background: #ccc;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.z9 {
    z-index: 99;
    position: relative;
}
.w79 {
    width: 82%;
}
.uploadicon {
    padding: 10px;
}
.w-100 {
    width: 100%;
}
.d-flex {
    display: flex;
}
.position-relative {
    position: relative;
}
.flex-column {
    flex-direction: column
}  
.justify-content-between {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
}
.row > .column {
    padding-right: 8px;
    padding-bottom: 8px;
}
.row:after {
    content: "";
    display: table;
    clear: both;
}
.column {
    float: left;
    width: 25%;
}
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
  }
.modal-content {
    position: relative;
    background-color: black;
    margin: auto;
    padding: 0;
    width: 100%;
    max-width: 1200px;
}
.close {
    color: white;
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
}
.close:hover,
.close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
}
.mySlides {
    display: none;
}
.cursor {
    cursor: pointer;
}
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    padding: 16px;
    color: white !important;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
}
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}
.prev:hover,
.next:hover {
    background-color: rgba(243, 167, 167, 0.8);
}
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}
.caption-container {
    text-align: center;
    background-color: black;
    padding: 16px 16px;
    color: white;
}
.demo {
    opacity: 0.6;
}
.active,
.demo:hover {
    opacity: 1;
}
img.hover-shadow {
    transition: 0.3s;
}
.hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.sml-light-box-scroll-y {
    height: auto;
    max-height:315px;
    overflow-y: hidden;
    overflow-x: hidden;
}
.sml-light-box-scroll-y:hover {
    overflow-y: overlay;
}
.sml-light-box-scroll-y::-webkit-scrollbar {
    width: 8px;
    background-color: #fbfbfb;
}
.sml-light-box-scroll-y::-webkit-scrollbar-track {
    width: 3px;
    background: rgba(222, 222, 222, .75);
}
.sml-light-box-scroll-y::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .5);
    border-radius: 4px;
}
.remove_icon{
  position: absolute;
  right: 13px;
  top: -2px;
  cursor: pointer;
}
.error-msg{
  font-size: 13px;
  text-align: center;
  color: red
}
	`]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, { apiURL: [{
            type: Input
        }], fileurl: [{
            type: Input
        }], database: [{
            type: Input
        }], FilesGroupId: [{
            type: Input
        }], fileResponse: [{
            type: Output
        }], body: [{
            type: Input
        }], allowFiles: [{
            type: Input
        }], GenericToken: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ImagesLightBoxModule, { declarations: function () { return [ImagesLightBoxComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule]; }, exports: function () { return [ImagesLightBoxComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ImagesLightBoxModule, [{
        type: NgModule,
        args: [{
                declarations: [ImagesLightBoxComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                exports: [ImagesLightBoxComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ImageUploadBoxComponent, [{
        type: Component,
        args: [{
                selector: 'sml-image-upload-box',
                template: `
  <div class="error-msg" *ngIf="error_message != ''">{{error_message}}</div>
<div *ngIf="!imagesData.path && isLoading" class="uploadImage d-flex align-items-center flex-column">
  <i class="fa fa-camera fz24"></i>
  <p>Upload Image</p>
  <input type="file" id="fileinput" (change)="uploadAndProgress($event.target.files)" class="drag" />
  <div class="fz24">
    <span *ngIf="percentDone"> Upload Percent: {{percentDone}}%</span>
  </div>
  <div class="progressContainer" *ngIf="percentDone">
    <div class="procesbar"></div>
    <div class="w-100 z9">
      <div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
    </div>
  </div>
  </div>
  <div *ngIf="imagesData.path && isLoading" class="preview-img">
    <img [src]="imagesData.path" height="147" width="100%" onerror="this.onerror=null; this.src='assets/404_images.png'" class="hover-shadow cursor">
    <span class="remove_icon">
      <i class="fa fa-times" (click)="deleteFIles(imagesData.FilesId)"></i>
    </span>
  </div>
  `,
                styles: [`
  .uploadImage{background-color:#777777;border-radius:3px;padding:40px 20px;width:100%;font-size:14px;color:#cccccc;}
  .uploadImage .fa{font-size:30px;}
  .remove_icon{position:absolute;right:13px;top:-2px;cursor:pointer;}
  .drag{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;z-index:999999;}
  img.hover-shadow{transition:0.3s;}
  .hover-shadow:hover{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
  .cursor{cursor:pointer;}
  .preview-img{position:relative;width:100%;}
  .progressContainer{width:100%;position:relative;top:2px;}
  .progressbar{height:2px;background:green;float:left;}
  .procesbar{background:#ccc;height:2px;position:absolute;top:0;left:0;width:100%;}
  .z9{z-index:99;position:relative;}
  .error-msg{font-size:13px;text-align:center;color:red}
  `]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, { apiURL: [{
            type: Input
        }], fileurl: [{
            type: Input
        }], database: [{
            type: Input
        }], FilesGroupId: [{
            type: Input
        }], FileId: [{
            type: Input
        }], fileResponse: [{
            type: Output
        }], allowFiles: [{
            type: Input
        }], GenericToken: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ImageUplaodBoxModule, { declarations: function () { return [ImageUploadBoxComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule]; }, exports: function () { return [ImageUploadBoxComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ImageUplaodBoxModule, [{
        type: NgModule,
        args: [{
                declarations: [ImageUploadBoxComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                exports: [ImageUploadBoxComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTagComponent, [{
        type: Component,
        args: [{
                selector: 'sml-tag-input',
                template: `
    <div class="position-relative">
        <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
            [ngStyle]="borderStyle">
            <tag-input [(ngModel)]='items'  [modelAsStrings]="true" (onAdd)="onItemAdded($event)" (onRemove)="onItemRemove($event)" theme='bootstrap3-info'>
            </tag-input>
            <label for="{{name}}" class="label" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
    </div>
	`,
                styles: [`
	:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
	.position-relative{position:relative;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;}
	.float-group{position:relative;padding:1px 1px 1px 1px;}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	:host /deep/ tag-input .ng2-tag-input.bootstrap3-info{height:auto !important;line-height:33px !important;}
	:host /deep/ tag-input tag{line-height:20px !important;height:27px !important;}
	:host /deep/ delete-icon svg{height:22px !important;}
	:host /deep/ tag-input .bootstrap3-info.ng2-tag-input{background: var(--back-color);padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}
	:host /deep/ tag-input .ng2-tag-input{border:none !important;box-shadow:none !important;}
	:host /deep/ .ng2-tag-input__text-input{padding:0px !important;height:32px !important;background: var(--back-color);}
	`]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { label: [{
            type: Input
        }], name: [{
            type: Input
        }], items: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], switchStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], style: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputTagModule, { declarations: function () { return [InputTagComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule,
        TagInputModule]; }, exports: function () { return [InputTagComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTagModule, [{
        type: NgModule,
        args: [{
                declarations: [InputTagComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    TagInputModule
                ],
                exports: [InputTagComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListSearchComponent, [{
        type: Component,
        args: [{
                selector: 'sml-list-search',
                template: `
    <div class="position-relative">
        <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
            [ngStyle]="borderStyle">
            <div class="ng-autocomplete">
                <ng-autocomplete [data]="listData" [initialValue]="value" [searchKeyword]="keyword" (selected)='setSelectedData($event)'
                    (inputChanged)='onChangeSearch($event)' (inputFocused)='onFocused($event)' [itemTemplate]="itemTemplate"
                    [notFoundTemplate]="notFoundTemplate">
                </ng-autocomplete>
                <ng-template #itemTemplate let-item>
                    <a [innerHTML]="item.name"></a>
                </ng-template>
                <ng-template #notFoundTemplate let-notFound>
                    <div [innerHTML]="notFound"></div>
                </ng-template>
            </div>
            <label for="{{name}}" class="label" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
    </div>
	`,
                styles: [`
	:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
	:host /deep/ ng-autocomplete .autocomplete-container{height:auto;border:none !important;box-shadow:none !important;}
	:host /deep/ ng-autocomplete .autocomplete-container .input-container .x{display:none !important;}
	.ng-autocomplete{width:100% !important;}
	:host /deep/ ng-autocomplete .autocomplete-container .input-container input{font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;line-height:1.5 !important;min-height:var(--c-height) !important;height:auto;}
	.position-relative{position:relative;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;z-index:999;}
	.float-group{position:relative;padding:1px 1px 1px 1px;}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	`]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: ɵngcc0.ElementRef }]; }, { id: [{
            type: Input
        }], name: [{
            type: Input
        }], label: [{
            type: Input
        }], value: [{
            type: Input
        }], listData: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], GenericToken: [{
            type: Input
        }], database: [{
            type: Input
        }], schema: [{
            type: Input
        }], procedure: [{
            type: Input
        }], fieldName: [{
            type: Input
        }], apiURL: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], style: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ListSearchModule, { declarations: function () { return [ListSearchComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule,
        AutocompleteLibModule]; }, exports: function () { return [ListSearchComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListSearchModule, [{
        type: NgModule,
        args: [{
                declarations: [ListSearchComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    AutocompleteLibModule
                ],
                exports: [ListSearchComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectComponent, [{
        type: Component,
        args: [{
                selector: 'sml-multi-select',
                template: `
	<div class="position-relative">
        <div class="input-field" [ngStyle]="borderStyle" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}">
            <ng-select [items]="dropdownList" bindLabel="name" appendTo="body" multiple="true" (open)="onOpen()" (close)="onClose()" (change)="onItemSelect($event)" [(ngModel)]="selectedItems">
            </ng-select>
            <label *ngIf="switchStyle" class="label" [ngClass]="{'z-9999': isOpen}" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
        <label *ngIf="!switchStyle" class="label"  [ngStyle]="style">
            {{ label }}
        </label>
    </div>
	`,
                styles: [`
	:host{--c-width:645px;--c-height:44px;--label-left:4px;--label-top:2px;--value-left:4px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
	.position-relative{position:relative;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.float-groupdd{position:relative;padding:0px;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;}
	.z-9999{z-index:9999;}
	.float-groupdd .label{position:absolute;top:-24px;left:0px;font-size:12px;}
	.float-group{position:relative;padding:14px 2px 0px 0px;}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	:host /deep/ .ng-select .ng-select-container{border:none !important;background: var(--back-color);}
	:host /deep/ .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}
	:host /deep/ .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}
	:host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}	
	`]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: ɵngcc0.ElementRef }]; }, { dropdownList: [{
            type: Input
        }], selectedItems: [{
            type: Input
        }], label: [{
            type: Input
        }], searchString: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], GenericToken: [{
            type: Input
        }], database: [{
            type: Input
        }], schema: [{
            type: Input
        }], procedure: [{
            type: Input
        }], body: [{
            type: Input
        }], fieldName: [{
            type: Input
        }], fieldId: [{
            type: Input
        }], apiURL: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], style: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MultiSelectModule, { declarations: function () { return [MultiSelectComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule,
        NgSelectModule]; }, exports: function () { return [MultiSelectComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectModule, [{
        type: NgModule,
        args: [{
                declarations: [MultiSelectComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    NgSelectModule
                ],
                exports: [MultiSelectComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'sml-progress-bar',
                template: `
	<div class="w-100">
    <div class="progress">
        <div class="progress-bar {{classes}}" role="progressbar" [ngStyle]="{'width': value + '%' }" aria-valuemin="0" aria-valuemax="100">
            {{value}}%
        </div>
    </div>
</div>
	`,
                styles: [`
	.progress-bar-success {
		background-color: #5cb85c;
	}
	.progress-bar-info {
		background-color: #5bc0de;
	}
	.progress-bar-warning {
		background-color: #f0ad4e;
	}
	.progress-bar-danger {
		background-color: #d9534f;
	}
	.progress-bar.active, .progress.active .progress-bar {
		-webkit-animation: progress-bar-stripes 2s linear infinite;
		-o-animation: progress-bar-stripes 2s linear infinite;
		animation: progress-bar-stripes 2s linear infinite;
	}
	`]
            }]
    }], function () { return []; }, { id: [{
            type: Input
        }], value: [{
            type: Input
        }], type: [{
            type: Input
        }], color: [{
            type: Input
        }], classes: [{
            type: Input
        }], interval: [{
            type: Input
        }], completed: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressBarModule, { declarations: function () { return [ProgressbarComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule]; }, exports: function () { return [ProgressbarComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressBarModule, [{
        type: NgModule,
        args: [{
                declarations: [ProgressbarComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                exports: [ProgressbarComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioCheckBoxListComponent, [{
        type: Component,
        args: [{
                selector: 'sml-radio-check-box-list',
                template: `
  <form class="formRadioCheck">
    <div *ngIf="type == 'checkbox'">
      <div class="inputGroupRadioCheck" *ngFor="let chk of jsonData;let i=index;">
        <input id="{{id}}-{{i}}" name="{{id}}-{{i}}" [value]="chk.isChecked" [(ngModel)]="chk.isChecked" (change)="changeEvent('checkbox')" type="checkbox" />
        <label for="{{id}}-{{i}}">{{chk.name}}</label>
      </div>
    </div>
    <div *ngIf="type == 'radio'">
      <div class="inputGroupRadioCheck" *ngFor="let rad of jsonData;let i=index;">
        <input id="{{id}}-{{i}}" name="{{name}}" [value]="rad.value" [(ngModel)]="selectedValue" (change)="changeEvent('radio')" type="radio" />
        <label for="{{id}}-{{i}}">{{rad.name}}</label>
      </div>
    </div>
  </form>
  `,
                styles: [`
  .inputGroupRadioCheck {
    background-color: #fff;
    display: block;
    margin: 10px 0;
    position: relative;
  }
  .inputGroupRadioCheck  input:checked ~ label {
      color: #fff;
  }
  .inputGroupRadioCheck  input:checked ~ label:before {
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
  }
  .inputGroupRadioCheck  input:checked ~ label:after {
      background-color: #54E0C7;
      border-color: #54E0C7;
  }
  .inputGroupRadioCheck  input {
      width: 32px;
      height: 32px;
      order: 1;
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      visibility: hidden;
  }
  .inputGroupRadioCheck label {
      padding: 12px 30px;
      width: 100%;
      display: block;
      text-align: left;
      color: #3C454C;
      cursor: pointer;
      position: relative;
      z-index: 2;
      transition: color 200ms ease-in;
      overflow: hidden;
  }
  .inputGroupRadioCheck label:before {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      content: '';
      background-color: #5562eb;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale3d(1, 1, 1);
      transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
      opacity: 0;
      z-index: -1;
  }
  .inputGroupRadioCheck label:after {
      width: 32px;
      height: 32px;
      content: '';
      border: 2px solid #D1D7DC;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
      background-repeat: no-repeat;
      background-position: 2px 3px;
      border-radius: 50%;
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 200ms ease-in;
  }
  .formRadioCheck {
    padding: 0 16px;
    max-width: 550px;
    font-size: 18px;
    font-weight: 600;
  }  
  `]
            }]
    }], function () { return []; }, { id: [{
            type: Input
        }], name: [{
            type: Input
        }], jsonData: [{
            type: Input
        }], type: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], radioChange: [{
            type: Output
        }], checkboxChange: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RadioCheckBoxListModule, { declarations: function () { return [RadioCheckBoxListComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule]; }, exports: function () { return [RadioCheckBoxListComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioCheckBoxListModule, [{
        type: NgModule,
        args: [{
                declarations: [RadioCheckBoxListComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                exports: [RadioCheckBoxListComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CropImageUploadComponent, [{
        type: Component,
        args: [{
                selector: 'sml-crop-image-upload',
                template: `
    <div class="homewrap">
        <div class="imgd_area d_flex" *ngIf="isUploadArea" [ngClass]="{'b-2': imagePath == '' ,'b-r': type == 'circle'}" [ngStyle]="{'height.px': height,'width.px': width}">
            <div class="d_flex w-100 position-relative flex-column justify-content-center align-items-center">
                <div *ngIf="imagePath != '' && !isUploadStart">
                    <img [src]="imagePath" name="profile_images" id="profile_images" />
                </div>
                <div *ngIf="imagePath == '' && !isUploadStart">
                    <img src="assets/cloud-upload-arrow.svg">
                    <span class="text-black-50 fz11 mb-1">Drag & Drop</span>
                </div>
                <div class="percentage-div" *ngIf="isUploadStart">
                    {{percentDone}}%
                </div>
                <input type="file" class="file_input" id="upload" (change)="fileChangeEvent($event)" accept="image/*">
            </div>
        </div>
        <div *ngIf="isHtmlbind" class="w-100 text-center">
            <img id="htmlbinds" [ngClass]="{'b-r': type == 'circle'}" [src]="croppedImage" [width]="width" [height]="height">
        </div>
        <div class="text-center mt-2" *ngIf="isHtmlbind">
            <a (click)="upload()" class="mr-4 btn_link">Upload</a>
            <a (click)="cancleClick()" class="btn_link">Cancel</a>
        </div>
    </div>
<button type="button" style="opacity: 0;" id="openModalBtn" data-toggle="modal" data-target="#cropModal">Open</button>
<div id="cropModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title mt-0">Crop Image</h4>
                <div style="position: absolute;right: 128px;top: 11px;">
                    <img [src]="croppedImage" [ngClass]="{'b-r': type == 'circle'}" [width]="capWidth" [height]="capHeight" [style.border]="croppedImage ? '1px solid black' : 'none'" />
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" (click)="zoomIn()">
                        <span class="fa fa-search-plus"></span>
                    </button>
                    <button type="button" class="btn btn-primary" (click)="zoomOut()">
                        <span class="fa fa-search-minus"></span>
                    </button>
                </div>
            </div>
            <div class="modal-body" style="position: relative;flex: 1 1 auto;padding: 1rem;" >
                <image-cropper [imageChangedEvent]="imageChangedEvent" [transform]="transform" [maintainAspectRatio]="true" [aspectRatio]="aspectRatio"
                    [cropperMinWidth]="width" [resizeToWidth]="width" format="png,jpeg" [roundCropper]="type == 'circle'? true:false"
                    (imageCropped)="imageCropped($event)">
                </image-cropper>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="isHtmlbind = true;" data-dismiss="modal">Apply</button>
                <button type="button" class="btn btn-default" (click)="cancleClick()" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
  `,
                styles: [`
  .homewrap {height: auto;width: 100%}
  .imgd_area {height: 150px;width: 150px;overflow: hidden;margin: 0 auto;}
  .percentage-div{font-size: 25px;font-weight: 700;color: #00ACAC;}
  .b-2{border: 2px dashed #ccc;}
  .b-r{border-radius: 100%;}
  .text-black-50 {color: #a6a9ab;}
  .file_input {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}
  .fz11 {font-size: 11px;}
  .d_flex {display: flex;}
  .htmlbinds:nth-child(2) {display: none;}
  .htmlbinds {height: 100%;width: 100%;object-fit: cover;}
  .flex-column {-webkit-box-orient: vertical!important;-webkit-box-direction: normal!important;-ms-flex-direction: column!important;flex-direction: column!important;}
  .position-relative {position: relative!important;}
  .w-100 {width: 100%;}
  .justify-content-center {-webkit-box-pack: center!important;-ms-flex-pack: center!important;justify-content: center!important;}
  .btn_link{font-size: 18px;font-weight: 600;cursor: pointer;}
  `]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, { height: [{
            type: Input
        }], width: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }], ratio: [{
            type: Input
        }], aspectRatio: [{
            type: Input
        }], url: [{
            type: Input
        }], path: [{
            type: Input
        }], genericToken: [{
            type: Input
        }], database: [{
            type: Input
        }], schema: [{
            type: Input
        }], OnSaveFile: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CropImageUploadModule, { declarations: function () { return [CropImageUploadComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule,
        ImageCropperModule]; }, exports: function () { return [CropImageUploadComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CropImageUploadModule, [{
        type: NgModule,
        args: [{
                declarations: [CropImageUploadComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    ImageCropperModule
                ],
                exports: [CropImageUploadComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TilesRadioComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return []; }, { id: [{
            type: Input
        }], name: [{
            type: Input
        }], jsonData: [{
            type: Input
        }], width: [{
            type: Input
        }], img_height: [{
            type: Input
        }], background: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], radioChange: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TilesRadioModule, { declarations: function () { return [TilesRadioComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule]; }, exports: function () { return [TilesRadioComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TilesRadioModule, [{
        type: NgModule,
        args: [{
                declarations: [TilesRadioComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                exports: [TilesRadioComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CreditCardComponent, [{
        type: Component,
        args: [{
                selector: 'sml-credit-card',
                template: `
  <div class="w-100">
    <ng-payment-card (formSaved)="processPayment($event)"></ng-payment-card>
  </div>
  `,
                styles: [`
  :host /deep/ ng-payment-card .cc-wrapper .cc-box{margin-top: 90px !important;}
  .w-100{width: 100%;}
  `]
            }]
    }], function () { return []; }, { onSubmit: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CreditCardModule, { declarations: function () { return [CreditCardComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        NgPaymentCardModule,
        HttpClientModule]; }, exports: function () { return [CreditCardComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CreditCardModule, [{
        type: NgModule,
        args: [{
                declarations: [CreditCardComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    NgPaymentCardModule,
                    HttpClientModule
                ],
                exports: [CreditCardComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CreditCardNewComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { cardObject: [{
            type: Input
        }], submitValue: [{
            type: Output
        }], labelStyle: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], buttonStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CreditCardNewModule, { declarations: function () { return [CreditCardNewComponent]; }, imports: function () { return [CommonModule,
        FormsModule]; }, exports: function () { return [CreditCardNewComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CreditCardNewModule, [{
        type: NgModule,
        args: [{
                declarations: [CreditCardNewComponent],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [CreditCardNewComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VideoUploadComponent, [{
        type: Component,
        args: [{
                selector: 'sml-video-upload',
                template: `
  <div class="upload-area">
  <span class="uploadvideo" *ngIf="!percentDone && !thumbUrl">Upload Video </span>
  <img *ngIf="!percentDone && !thumbUrl" src="assets/video_upload.png" class="img-video-icon" />
  <a *ngIf="thumbUrl" target="_blank" [href]="videoLink"> <img  [src]="thumbUrl" width="248" height="150"/> </a>
  <input type="file" *ngIf="!thumbUrl" multiple class="file_input" id="upload" (change)="uploadAndProgress($event.target.files)" accept="video/*">
  <div class="progress-div" *ngIf="percentDone">
    <div class="fz14" *ngIf="uploadSuccess">
      <span>Uplaod Done</span>
    </div>
    <div class="fz14">
      <span>{{percentDone}}%</span>
    </div>
    <div class="progressContainer">
      <div class="procesbar"></div>
      <div class="w-100 z9">
        <div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
      </div>
    </div>
    </div>
    <span class="remove_icon" *ngIf="thumbUrl">
      <i class="fa fa-times" (click)="deleteFIles(fileId)"></i>
    </span>
  </div>
  `,
                styles: [`
  .upload-area{border: 1px solid gray;max-width: 250px;min-height: 150px;position:relative}
  .img-video-icon{width: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}
  .file_input {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}
  .progressContainer {width: 100%;padding-left: 5px;padding-right: 5px;}
  .progressbar {height: 9px;background: green;float: left;border-radius: 4px;}
  .fz14 {font-size: 20px;text-align: center;font-weight: 400;margin-bottom: 7px;}
  .progress-div{top: 45%;transform: translate(-50%,-50%);position: absolute;left: 50%;width: 250px;}
  .remove_icon{position: absolute;right: 8px;cursor: pointer;width: 20px;height: 20px;background: #db3a26;border-radius: 100%;text-align: center;-webkit-box-align: center;align-items: center;color: #fff;font-size: 12px;top: 5px;}
  .uploadvideo{position: relative;  top: 27px; cursor: pointer; left: 43px; background: green; padding: 8px 30px; color: #fff;  border-radius: 3px;}
  `]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, { url: [{
            type: Input
        }], path: [{
            type: Input
        }], database: [{
            type: Input
        }], schema: [{
            type: Input
        }], fileResponse: [{
            type: Output
        }], deletefileResponse: [{
            type: Output
        }], fileId: [{
            type: Input
        }], fileGroupId: [{
            type: Input
        }], GenericToken: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(VideoUploadModule, { declarations: function () { return [VideoUploadComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule]; }, exports: function () { return [VideoUploadComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VideoUploadModule, [{
        type: NgModule,
        args: [{
                declarations: [VideoUploadComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                exports: [VideoUploadComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContactUsComponent, [{
        type: Component,
        args: [{
                selector: 'sml-contact-us',
                template: `
  <div class="main-row">
  <sml-input-text [label]="'Email To'" [name]="'emailTo'" [value]="itemObject.emailTo" (getvalue)="itemObject.emailTo = $event;" [maskType]="''"
    [switchStyle]="'true'" [style]="labelStyle" [staticStyle]="'true'" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
  </sml-input-text>
  </div>
  <div class="main-row" style="text-align: center;">
    <sml-button [label]="'Send Email'" [btnCl]="'btn-primary'" (buttonClick)="sendMail()" [buttonStyle]="buttonStyle">
    </sml-button>
  </div>
  `,
                styles: [`.main-row{width: 100%;margin-bottom: 7px;`]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, { itemObject: [{
            type: Input
        }], GenericToken: [{
            type: Input
        }], apiURL: [{
            type: Input
        }], responseCall: [{
            type: Output
        }], labelStyle: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], buttonStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ContactUsModule, { declarations: function () { return [ContactUsComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule,
        TextModule, ButtonModule]; }, exports: function () { return [ContactUsComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContactUsModule, [{
        type: NgModule,
        args: [{
                declarations: [ContactUsComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    TextModule,
                    ButtonModule
                ],
                exports: [ContactUsComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AddressComponent, AddressModule, AlertComponent, AlertModule, BreadcrumbComponent, BreadcrumbModule, ButtonComponent, ButtonGroupModule, ButtonModule, ButtongroupComponent, ContactUsComponent, ContactUsModule, CreditCardComponent, CreditCardModule, CreditCardNewComponent, CreditCardNewModule, CropImageUploadComponent, CropImageUploadModule, ImageUplaodBoxModule, ImageUploadBoxComponent, ImagecropComponent, ImagecropModule, ImagesLightBoxComponent, ImagesLightBoxModule, InputTagComponent, InputTagModule, ListSearchComponent, ListSearchModule, MultiSelectComponent, MultiSelectModule, MultifileuploadComponent, MultifileuploadModule, NavbarComponent, NavbarModule, NotesComponent, NotesModule, ProgressBarModule, ProgressbarComponent, RadioCheckBoxListComponent, RadioCheckBoxListModule, SinglefileuploadComponent, SinglefileuploadModule, TableComponent, TableModule, TilesRadioComponent, TilesRadioModule, VideoUploadComponent, VideoUploadModule, ColumnComponent as ɵa, HeaderComponent as ɵb, FooterComponent as ɵc, PaginationComponent as ɵd, TableBodyComponent as ɵe, SearchComponent as ɵf, CountComponent as ɵg, SubmenuComponent as ɵh, MenuComponent as ɵi, ProfileMenuComponent as ɵj, ProfileSubMenuComponent as ɵk };

//# sourceMappingURL=sml-comp-nine.js.map