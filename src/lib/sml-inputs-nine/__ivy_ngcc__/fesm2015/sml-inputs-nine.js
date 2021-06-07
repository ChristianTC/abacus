import { __decorate } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgSelectModule } from '@ng-select/ng-select';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';
import * as ɵngcc3 from 'ngx-mask';
import * as ɵngcc4 from '@ng-bootstrap/ng-bootstrap';
import * as ɵngcc5 from 'ng-pick-datetime';
import * as ɵngcc6 from 'ngx-currency';
import * as ɵngcc7 from '@ng-select/ng-select';
import * as ɵngcc8 from 'ngx-material-timepicker';

const _c0 = function (a0, a1, a2) { return { "float-group": a0, "float-groupdd": a1, "signal-line": a2 }; };
function RadioComponent_div_3_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 10);
    ɵngcc0.ɵɵlistener("ngModelChange", function RadioComponent_div_3_input_1_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.value = $event; })("change", function RadioComponent_div_3_input_1_Template_input_change_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.changeevt1(ctx_r7.value); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    const i_r2 = ctx_r8.index;
    const data_r1 = ctx_r8.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate2("id", "", ctx_r3.id, "-", i_r2, "");
    ɵngcc0.ɵɵpropertyInterpolate2("name", "", ctx_r3.id, "-", i_r2, "");
    ɵngcc0.ɵɵproperty("value", data_r1.value)("ngModel", ctx_r3.value);
} }
function RadioComponent_div_3_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 11);
    ɵngcc0.ɵɵlistener("ngModelChange", function RadioComponent_div_3_input_2_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.value = $event; })("change", function RadioComponent_div_3_input_2_Template_input_change_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.changeevt1(ctx_r11.value); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext();
    const i_r2 = ctx_r12.index;
    const data_r1 = ctx_r12.$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate2("id", "", ctx_r4.id, "-", i_r2, "");
    ɵngcc0.ɵɵpropertyInterpolate2("name", "", ctx_r4.id, "-", i_r2, "");
    ɵngcc0.ɵɵproperty("value", data_r1.value)("ngModel", ctx_r4.value);
} }
const _c1 = function (a0, a1) { return { "dis-inline": a0, "dis-block": a1 }; };
function RadioComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, RadioComponent_div_3_input_1_Template, 1, 6, "input", 6);
    ɵngcc0.ɵɵtemplate(2, RadioComponent_div_3_input_2_Template, 1, 6, "input", 7);
    ɵngcc0.ɵɵelement(3, "label", 8);
    ɵngcc0.ɵɵelementStart(4, "label", 9);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c1, ctx_r0.radioStyle == null ? null : ctx_r0.radioStyle.isInline, !(ctx_r0.radioStyle == null ? null : ctx_r0.radioStyle.isInline)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", data_r1.disabled == undefined || data_r1.disabled == null || data_r1.disabled == "" || data_r1.disabled == false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", data_r1.disabled != undefined || data_r1.disabled != null || data_r1.disabled != "" || data_r1.disabled == true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate2("for", "", ctx_r0.id, "-", i_r2, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate2("for", "", ctx_r0.id, "-", i_r2, "");
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.valueStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(data_r1.name);
} }
function TextComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 5);
    ɵngcc0.ɵɵlistener("ngModelChange", function TextComponent_input_2_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.value = $event; })("focus", function TextComponent_input_2_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onEndfocus($event); })("blur", function TextComponent_input_2_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onBlur($event); })("keyup", function TextComponent_input_2_Template_input_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.getValue($event); })("keypress", function TextComponent_input_2_Template_input_keypress_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.keyPress($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("id", ctx_r0.name);
    ɵngcc0.ɵɵpropertyInterpolate("name", ctx_r0.name);
    ɵngcc0.ɵɵproperty("type", ctx_r0.type)("patterns", ctx_r0.patterns)("shownMaskExpression", ctx_r0.expression)("mask", ctx_r0.maskType)("showMaskTyped", ctx_r0.showMask)("ngModel", ctx_r0.value)("ngStyle", ctx_r0.valueStyle);
    ɵngcc0.ɵɵattribute("maxlength", ctx_r0.maxlength);
} }
function TextComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 6);
    ɵngcc0.ɵɵlistener("ngModelChange", function TextComponent_input_3_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.value = $event; })("focus", function TextComponent_input_3_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onEndfocus($event); })("blur", function TextComponent_input_3_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onBlur($event); })("keyup", function TextComponent_input_3_Template_input_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.getValue($event); })("keypress", function TextComponent_input_3_Template_input_keypress_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.keyPress($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("id", ctx_r1.name);
    ɵngcc0.ɵɵpropertyInterpolate("name", ctx_r1.name);
    ɵngcc0.ɵɵproperty("type", ctx_r1.type)("patterns", ctx_r1.patterns)("shownMaskExpression", ctx_r1.expression)("mask", ctx_r1.maskType)("showMaskTyped", ctx_r1.showMask)("ngModel", ctx_r1.value)("ngStyle", ctx_r1.valueStyle);
    ɵngcc0.ɵɵattribute("maxlength", ctx_r1.maxlength);
} }
const _c2 = function (a0, a1, a2, a3) { return { "float-group": a0, "float-groupdd": a1, "signal-line": a2, "float-group-static": a3 }; };
function TextareaComponent_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "textarea", 6);
    ɵngcc0.ɵɵlistener("keyup", function TextareaComponent_textarea_2_Template_textarea_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.getValue($event); })("blur", function TextareaComponent_textarea_2_Template_textarea_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onBlur($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r0.value)("rows", ctx_r0.row)("cols", ctx_r0.column)("ngStyle", ctx_r0.valueStyle);
} }
function TextareaComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "textarea", 7);
    ɵngcc0.ɵɵlistener("keyup", function TextareaComponent_textarea_3_Template_textarea_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.getValue($event); })("blur", function TextareaComponent_textarea_3_Template_textarea_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onBlur($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r1.value)("rows", ctx_r1.row)("cols", ctx_r1.column)("ngStyle", ctx_r1.valueStyle);
} }
function TextareaComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(": ", ctx_r2.maxLenght, "");
} }
function UpdownComponent_label_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function ColorPickerComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
} }
const _c3 = function (a0) { return { "background": a0 }; };
function ColorPickerComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("click", function ColorPickerComponent_div_5_div_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const paint_r3 = ctx.$implicit; const ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.changeColor(paint_r3); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const paint_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c3, paint_r3));
} }
function ColorPickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "div", 8);
    ɵngcc0.ɵɵtemplate(2, ColorPickerComponent_div_5_div_2_Template, 1, 3, "div", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.defaultColors);
} }
const _c4 = function (a0) { return { "valid": a0 }; };
function DatepickerComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 10);
    ɵngcc0.ɵɵlistener("ngModelChange", function DatepickerComponent_input_2_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.value = $event; })("dateTimeInput", function DatepickerComponent_input_2_Template_input_dateTimeInput_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.getValue($event); })("blur", function DatepickerComponent_input_2_Template_input_blur_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onBlurMethod(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r0.value)("id", ctx_r0.name)("name", ctx_r0.name)("owlDateTime", _r2)("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c4, ctx_r0.value))("ngStyle", ctx_r0.valueStyle);
} }
function DatepickerComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 11);
    ɵngcc0.ɵɵlistener("ngModelChange", function DatepickerComponent_input_3_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.value = $event; })("dateTimeInput", function DatepickerComponent_input_3_Template_input_dateTimeInput_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.getValue($event); })("blur", function DatepickerComponent_input_3_Template_input_blur_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onBlurMethod(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(9);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r1.value)("id", ctx_r1.name)("name", ctx_r1.name)("owlDateTime", _r3)("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c4, ctx_r1.value))("ngStyle", ctx_r1.valueStyle);
} }
function DatepickerComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 12);
    ɵngcc0.ɵɵlistener("click", function DatepickerComponent_button_10_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.clk(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵproperty("owlDateTimeTrigger", _r2);
} }
function DatepickerComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 13);
    ɵngcc0.ɵɵlistener("click", function DatepickerComponent_button_11_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.clk(); });
    ɵngcc0.ɵɵelementEnd();
} }
function SelectComponent_ng_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ng-select", 6);
    ɵngcc0.ɵɵlistener("change", function SelectComponent_ng_select_2_Template_ng_select_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.getselectvalue($event); })("ngModelChange", function SelectComponent_ng_select_2_Template_ng_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.value = $event; })("open", function SelectComponent_ng_select_2_Template_ng_select_open_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onOpen(); })("close", function SelectComponent_ng_select_2_Template_ng_select_close_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onClose(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("items", ctx_r0.listValue)("clearable", ctx_r0.clearable)("disabled", ctx_r0.disabled)("ngModel", ctx_r0.value)("multiple", ctx_r0.multiple);
} }
function SelectComponent_ng_select_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const item_r10 = ctx.item;
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r10.group, " ");
} }
function SelectComponent_ng_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ng-select", 7);
    ɵngcc0.ɵɵlistener("change", function SelectComponent_ng_select_3_Template_ng_select_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.getselectvalue($event); })("ngModelChange", function SelectComponent_ng_select_3_Template_ng_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.value = $event; })("open", function SelectComponent_ng_select_3_Template_ng_select_open_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onOpen(); })("close", function SelectComponent_ng_select_3_Template_ng_select_close_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onClose(); });
    ɵngcc0.ɵɵtemplate(1, SelectComponent_ng_select_3_ng_template_1_Template, 1, 1, "ng-template", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("items", ctx_r1.listValue)("clearable", ctx_r1.clearable)("disabled", ctx_r1.disabled)("ngModel", ctx_r1.value)("multiple", ctx_r1.multiple);
} }
const _c5 = function (a0) { return { "z-9999": a0 }; };
function SelectComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c5, ctx_r2.isOpen))("ngStyle", ctx_r2.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.label, " ");
} }
function SelectComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r3.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.label, " ");
} }
let CheckboxComponent = class CheckboxComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.value = false;
        this.getvalue = new EventEmitter;
    }
    ngOnInit() { }
    ngOnChanges(event) {
        if (event.checkboxStyle != undefined && event.checkboxStyle.currentValue != undefined) {
            let css = event.checkboxStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--checkbox-width', css['width-height']);
            this.elementRef.nativeElement.style.setProperty('--checkbox-height', css['width-height']);
            this.elementRef.nativeElement.style.setProperty('--checkbox-border-width', css.borderwidth);
            this.elementRef.nativeElement.style.setProperty('--checkbox-border-radius', css.borderradius);
            this.elementRef.nativeElement.style.setProperty('--checkbox-border-color', css.bordercolor);
            this.elementRef.nativeElement.style.setProperty('--checkbox-background-checked', css.background);
            this.elementRef.nativeElement.style.setProperty('--checkbox-background-unchecked', css['background-unchecked']);
            this.elementRef.nativeElement.style.setProperty('--check-color', css.colorcheck);
            this.elementRef.nativeElement.style.setProperty('--checkbox-tick-size', this.getTicFontSize(css));
        }
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
    getTicFontSize(css) {
        let h = css['width-height'].replace('px', '');
        return (parseInt(h) / 2) + 'px';
    }
    onChange(event) {
        this.getvalue.emit(event.target.checked);
    }
};
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["sml-input-checkbox"]], inputs: { value: "value", name: "name", label: "label", labeltext: "labeltext", style: "style", switchStyle: "switchStyle", borderStyle: "borderStyle", signalStyle: "signalStyle", valueStyle: "valueStyle", checkboxStyle: "checkboxStyle" }, outputs: { getvalue: "getvalue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 14, consts: [[1, "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "name", "id", "ngModelChange", "change"], [1, "label1", 3, "for"], [1, "vlabel", 3, "ngStyle"], [1, "label", 3, "ngStyle"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3);
        ɵngcc0.ɵɵlistener("ngModelChange", function CheckboxComponent_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; })("change", function CheckboxComponent_Template_input_change_3_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "label", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "label", 6);
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(10, _c0, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngModel", ctx.value)("name", ctx.name)("id", ctx.name);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("for", ctx.name);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.labeltext);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.CheckboxControlValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: ["[_nghost-%COMP%] {\n    --c-width: 645px;\n    --c-height: 25px;\n    --checkbox-width: 20px;\n    --checkbox-height: 20px;\n    --checkbox-tick-size: 10px;\n    --checkbox-border-width: 1px;\n    --checkbox-border-radius: 4px;\n    --checkbox-border-color: #D5DBE0;\n    --checkbox-background-checked: #348fe2;\n    --checkbox-background-unchecked:#D5DBE0;\n    --check-color: #ffffff;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n  }\n  \n  .position-relative[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .input-field[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    width: var(--c-width) !important;\n    min-height: var(--c-height) !important;\n    height: auto;\n  }\n  .vlabel[_ngcontent-%COMP%]{\n    line-height: var(--checkbox-height);\n    vertical-align: top;\n    margin-left: 5px;\n    margin-right: 10px;\n    display: inline-block;\n  }\n  .checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    opacity: 0;\n    position: absolute;\n    left: -9999px;\n  }\n  .checkbox[_ngcontent-%COMP%]{\n    display: block;\n    padding-top: 8px;\n    padding-right: 0.75rem;\n    padding-bottom: 4px;\n    padding-left: var(--value-left);\n    min-height: var(--c-height) !important;\n  }\n  .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: var(--checkbox-width);\n    height: var(--checkbox-height);\n  }\n  .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before, .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n    position: absolute;\n    content: \"\";\n    display: inline-block;\n  }\n  .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before{\n      height: var(--checkbox-height);\n      width: var(--checkbox-width);\n      border: 1px solid #D5DBE0;\n      border-radius: var(--checkbox-border-radius);\n      border-width: var(--checkbox-border-width)  !important;\n      border-color: var(--checkbox-border-color) !important;\n      left: 0px;\n      background: var(--checkbox-background-unchecked);\n  }\n  input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n    \n    content: \"\u2713\";\n    font-size: 24px;\n    line-height: 0.6;\n    color: #6ba238;\n    transition: all .2s;\n    font-family: Arial;\n    font-weight: bolder;\n  }\n  .checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n      transform: translate(-50%,-50%);\n      left: 50%;\n      top: 50%;\n      color: var( --check-color);\n      position: absolute;\n      content: \"\f00c\" !important;\n      -moz-osx-font-smoothing: grayscale;\n      -webkit-font-smoothing: antialiased;\n      display: inline-block;\n      font-size: var(--checkbox-tick-size);\n      font-style: normal;\n      font-variant: normal;\n      text-rendering: auto;\n      line-height: 1;\n      font-family: \"Font Awesome 5 Free\";\n      font-weight: 900;\n  }\n  .checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::after {\n    content: none;\n  }\n  .checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n    content: \"\";\n  }\n  .signal-line[_ngcontent-%COMP%]{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n  }\n  .label1[_ngcontent-%COMP%]{\n    margin-bottom: 0px !important;\n  }\n  .label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    transition: all 0.1s;\n  }\n  .float-group[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 14px 24px 0px 0px;\n  }\n  .float-group[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n      padding-top: var(--value-top);\n      padding-right: 0px;\n      padding-bottom: 0px;\n      padding-left: var(--value-left);\n  }\n  .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 9px;\n    font-weight: bold !important;  \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }"] });
CheckboxComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], CheckboxComponent.prototype, "value", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "name", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "label", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "labeltext", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "style", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "checkboxStyle", void 0);
__decorate([
    Output()
], CheckboxComponent.prototype, "getvalue", void 0);

let CheckboxModule = class CheckboxModule {
};
CheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CheckboxModule });
CheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[
            CommonModule, FormsModule
        ]] });

let SwitchComponent = class SwitchComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isChecked = false;
        this.isBorderStyle = false;
        this.toggleStyle = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges(event) {
        if (event.switchStyles != undefined && event.switchStyles.currentValue != undefined) {
            let css = event.switchStyles.currentValue;
            this.elementRef.nativeElement.style.setProperty('--switch-width', css.width);
            this.elementRef.nativeElement.style.setProperty('--switch-height', css.height);
            this.elementRef.nativeElement.style.setProperty('--switch-ball-size', this.getBallSize(css));
            this.elementRef.nativeElement.style.setProperty('--switch-border-width', css.borderwidth);
            this.elementRef.nativeElement.style.setProperty('--switch-border-radius', css.borderradius);
            this.elementRef.nativeElement.style.setProperty('--switch-border-color', css.bordercolor);
            this.elementRef.nativeElement.style.setProperty('--switch-background-checked', css.background);
            this.elementRef.nativeElement.style.setProperty('--switch-background-unchecked', css['background-unchecked']);
            this.elementRef.nativeElement.style.setProperty('--switch-color', css.colorcheck);
            this.elementRef.nativeElement.style.setProperty('--switch-radius', css.ballradius);
            this.elementRef.nativeElement.style.setProperty('--switch-transformx', this.getTransformx(css));
        }
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
    }
    getTransformx(css) {
        let w = css.width.replace('px', '');
        let h = css.height.replace('px', '');
        let trx = ((w - (h - 8)) - 8);
        return trx + 'px';
    }
    getBallSize(css) {
        let h = css.height.replace('px', '');
        let bw = css.borderwidth.replace('px', '');
        return (h - 8 - (bw * 2)) + 'px';
    }
    onChange(event) {
        this.toggleStyle.emit(this.isChecked);
    }
};
SwitchComponent.ɵfac = function SwitchComponent_Factory(t) { return new (t || SwitchComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SwitchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SwitchComponent, selectors: [["sml-input-switch"]], inputs: { isChecked: "isChecked", isBorderStyle: "isBorderStyle", labelText: "labelText", label: "label", switchStyles: "switchStyles", switchStyle: "switchStyle", valueStyle: "valueStyle", labelStyle: "labelStyle", borderStyle: "borderStyle", signalStyle: "signalStyle" }, outputs: { toggleStyle: "toggleStyle" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 12, vars: 13, consts: [[1, "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], [1, "form-ctr"], [1, "switch"], ["type", "checkbox", "id", "togBtn", 3, "ngModel", "ngModelChange", "change"], [1, "slider", "round"], [1, "on", 3, "ngStyle"], [1, "off", 3, "ngStyle"], [1, "label", 3, "ngStyle"]], template: function SwitchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "label", 3);
        ɵngcc0.ɵɵelementStart(4, "input", 4);
        ɵngcc0.ɵɵlistener("ngModelChange", function SwitchComponent_Template_input_ngModelChange_4_listener($event) { return ctx.isChecked = $event; })("change", function SwitchComponent_Template_input_change_4_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "span", 6);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "span", 7);
        ɵngcc0.ɵɵtext(9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "label", 8);
        ɵngcc0.ɵɵtext(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(9, _c0, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngModel", ctx.isChecked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.switchStyles == null ? null : ctx.switchStyles.labelChekecd);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.switchStyles == null ? null : ctx.switchStyles.labelUnChekecd);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.labelStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.CheckboxControlValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: ["[_nghost-%COMP%] {\n    --c-width: 645px;\n    --c-height: 25px;\n    --switch-width: 70px;\n    --switch-height: 34px;\n    --switch-height: 34px;\n    --switch-ball-size: 26px;\n    --switch-border-width: 0px;\n    --switch-border-radius: 34px;\n    --switch-border-color: #D5DBE0;\n    --switch-background-checked: #348fe2;\n    --switch-background-unchecked:#D5DBE0;\n    --switch-color: #ffffff;\n    --switch-radius: 34px;\n    --switch-transformx: 35px;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n}\n\n.position-relative[_ngcontent-%COMP%] {\n    position: relative;\n}\n.input-field[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    width: var(--c-width) !important;\n    min-height: var(--c-height) !important;\n    height: auto;\n}\n.switch[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: var(--switch-width);\n    height: var(--switch-height);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    display:none;\n}\n.slider[_ngcontent-%COMP%] {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--switch-background-unchecked);\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n.slider[_ngcontent-%COMP%]:before {\n    position: absolute;\n    content: \"\";\n    height: var(--switch-ball-size);\n    width: var(--switch-ball-size);\n    left: 4px;\n    bottom: 4px;\n    background-color: var(--switch-color);\n    -webkit-transition: .4s;\n    transition: .4s;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n    background-color: var(--switch-background-checked);\n}\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n    box-shadow: 0 0 1px var(--switch-background-checked);\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n    -webkit-transform: translateX(var(--switch-transformx));\n    -ms-transform: translateX(var(--switch-transformx));    \n    transform: translateX(var(--switch-transformx));\n}  \n.on[_ngcontent-%COMP%]{\n    display: none;\n}\n.on[_ngcontent-%COMP%]{\n    color: var(--switch-color);\n    position: absolute;\n    transform: translate(-60%,-50%);\n    top: 50%;\n    left: 40%;\n    font-size: 10px;\n    font-family: Verdana, sans-serif;\n}\n.off[_ngcontent-%COMP%]{\n    color: var(--switch-color);\n    position: absolute;\n    transform: translate(-40%,-50%);\n    top: 50%;\n    left: 60%;\n    font-size: 10px;\n    font-family: Verdana, sans-serif;\n}\ninput[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%]{\n    display: block;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]   .off[_ngcontent-%COMP%]{\n    display: none;\n}\n.slider.round[_ngcontent-%COMP%] {\n    border-radius: var(--switch-border-radius);\n    border-width: var(--switch-border-width) !important;\n    border-color: var(--switch-border-color) !important;\n    border: 1px solid;\n}\n.slider.round[_ngcontent-%COMP%]:before {\n    border-radius: var(--switch-radius);\n}\n.form-ctr[_ngcontent-%COMP%]{\n    display: block;\n    padding-top: 8px;\n    padding-right: 0.75rem;\n    padding-bottom: 3px;\n    padding-left: var(--value-left);\n    min-height: var(--c-height) !important;\n}\n.signal-line[_ngcontent-%COMP%]{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n}\nlabel[_ngcontent-%COMP%]{\n    margin-bottom: 0px !important;\n}\n.label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    transition: all 0.1s;\n}\n.float-group[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 14px 24px 0px 0px;\n}\n.float-group[_ngcontent-%COMP%]   .form-ctr[_ngcontent-%COMP%] {\n    padding-top: var(--value-top);\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: var(--value-left);\n}\n.float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: bold !important;  \n  position: absolute;\n  top: var(--label-top);\n  left: var(--label-left);\n  transform: translateY(0px);\n  transition: all 200ms;\n  opacity: 1;\n  margin: 0;\n  width: 87%;\n  height: auto;\n}"] });
SwitchComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], SwitchComponent.prototype, "labelText", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "label", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "isChecked", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "switchStyles", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "isBorderStyle", void 0);
__decorate([
    Output()
], SwitchComponent.prototype, "toggleStyle", void 0);

let SwitchModule = class SwitchModule {
};
SwitchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SwitchModule });
SwitchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SwitchModule_Factory(t) { return new (t || SwitchModule)(); }, imports: [[
            CommonModule,
            NgbModule,
            FormsModule
        ]] });

let RadioComponent = class RadioComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.radioChangeHandler = new EventEmitter();
        this.changeevt1 = (event) => {
            this.radioChangeHandler.emit(event);
        };
    }
    ngOnInit() { }
    ngOnChanges(event) {
        if (event.radioStyle != undefined && event.radioStyle.currentValue != undefined) {
            let css = event.radioStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--radio-width', css['width-height']);
            this.elementRef.nativeElement.style.setProperty('--radio-height', css['width-height']);
            this.elementRef.nativeElement.style.setProperty('--radio-border-width', css.borderwidth);
            this.elementRef.nativeElement.style.setProperty('--radio-border-color', css.bordercolor);
            this.elementRef.nativeElement.style.setProperty('--radio-background', css.background);
            this.elementRef.nativeElement.style.setProperty('--radio-background-unchecked', css['background-unchecked']);
        }
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
    }
};
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
RadioComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RadioComponent, selectors: [["sml-input-radio"]], inputs: { id: "id", jsonData: "jsonData", value: "value", label: "label", switchStyle: "switchStyle", labelStyle: "labelStyle", borderStyle: "borderStyle", valueStyle: "valueStyle", radioStyle: "radioStyle", signalStyle: "signalStyle" }, outputs: { radioChangeHandler: "radioChangeHandler" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 9, consts: [[1, "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], [1, "radio"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "label", 3, "ngStyle"], [3, "ngClass"], ["type", "radio", 3, "id", "name", "value", "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "radio", "disabled", "", 3, "id", "name", "value", "ngModel", "ngModelChange", "change", 4, "ngIf"], [1, "clabel", 3, "for"], [1, "vlabel", 3, "for", "ngStyle"], ["type", "radio", 3, "id", "name", "value", "ngModel", "ngModelChange", "change"], ["type", "radio", "disabled", "", 3, "id", "name", "value", "ngModel", "ngModelChange", "change"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, RadioComponent_div_3_Template, 6, 12, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(5, _c0, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.jsonData);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.labelStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label ? ctx.label : "Label Name");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.RadioControlValueAccessor, ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: ["[_nghost-%COMP%] {\n        --c-width: 645px;\n        --c-height: 25px;\n        --radio-width: 20px;\n        --radio-height: 20px;\n        --radio-border-width: 1px;\n        --radio-border-color: #D5DBE0;\n        --radio-background: #348fe2;\n        --radio-background-unchecked: #D5DBE0;\n        --label-left: 10px;\n        --label-top: 0px;\n        --value-left: 10px;\n        --value-top: 0px;\n    }\n    \n    .clabel[_ngcontent-%COMP%] {\n        position: relative;\n        cursor: pointer;\n        width: var(--radio-width);\n        height: var(--radio-height);\n        line-height: 20px;\n        display: inline-block;\n        color: #666;\n        margin-bottom: 0px;\n    }\n    .vlabel[_ngcontent-%COMP%]{\n        line-height: var(--radio-height);\n        vertical-align: top;\n        margin-left: 5px;\n        margin-right: 10px;\n        margin-bottom: 0px;\n    }\n    .dis-inline[_ngcontent-%COMP%]{\n        display: inline-block;\n    }\n    .dis-block[_ngcontent-%COMP%]{\n        display: block;\n    }\n    .radio[_ngcontent-%COMP%]{\n        display: block;\n        padding-top: 8px;\n        padding-right: 0.75rem;\n        padding-bottom: 4px;\n        padding-left: var(--value-left);\n        min-height: var(--c-height) !important;\n    }\n    [type=\"radio\"][_ngcontent-%COMP%]:checked, [type=\"radio\"][_ngcontent-%COMP%]:not(:checked) {\n        position: absolute;\n        left: -9999px;\n    }\n    [type=\"radio\"][_ngcontent-%COMP%]:checked + label.clabel[_ngcontent-%COMP%]:before, [type=\"radio\"][_ngcontent-%COMP%]:not(:checked) + label.clabel[_ngcontent-%COMP%]:before {\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 1px;\n        width: var(--radio-width);\n        height: var(--radio-height);\n        border-width: var(--radio-border-width) !important;\n        border-color: var(--radio-border-color) !important;\n        border:1px solid;\n        border-radius: 100%;\n        background: var(--radio-background-unchecked);\n    }\n    [type=\"radio\"][_ngcontent-%COMP%]:checked + label.clabel[_ngcontent-%COMP%]:after, [type=\"radio\"][_ngcontent-%COMP%]:not(:checked) + label.clabel[_ngcontent-%COMP%]:after {\n        content: '';\n        font-family: \"Font Awesome 5 Free\";\n        font-weight: 900;\n        line-height: 1;\n        position: absolute;\n        top: 5px;\n        left: 4px;\n        -webkit-transition: all 0.2s ease;\n        transition: all 0.2s ease;\n        font-size: 10px;\n        color: #fff\n    }\n    [type=\"radio\"][_ngcontent-%COMP%]:not(:checked) + label.clabel[_ngcontent-%COMP%]:after {\n        opacity: 0;\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    [type=\"radio\"][_ngcontent-%COMP%]:checked + label.clabel[_ngcontent-%COMP%]:after {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n    [type=\"radio\"][_ngcontent-%COMP%]:checked + label.clabel[_ngcontent-%COMP%]::before {\n        background-color: var(--radio-background);\n        border-width: var(--radio-border-width) !important;\n        border-color: var(--radio-border-color) !important;\n        border:1px solid;\n        border-radius: 100%;\n    }\n    \n    .position-relative[_ngcontent-%COMP%] {\n        position: relative;\n    }\n    .input-field[_ngcontent-%COMP%] {\n        border: 1px solid #dee2e6;\n        border-radius: 2px;\n        width: var(--c-width) !important;\n        min-height: var(--c-height) !important;\n        height: auto;\n    }\n    .signal-line[_ngcontent-%COMP%]{\n        border-top: none !important;\n        border-left: none !important;\n        border-right: none !important;\n        border-radius: 0px !important;\n    }\n    \n    \n    .label[_ngcontent-%COMP%] {\n        position: absolute;\n        top: -24px;\n        left: 0px; \n        font-size: 12px;\n        transition: all 0.1s;\n    } \n    .float-group[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 14px 24px 0px 0px;\n    } \n    .float-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n        padding-top: var(--value-top);\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: var(--value-left);\n    }\n    .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n        font-size: 9px;\n        font-weight: bold !important;  \n        position: absolute;\n        top: var(--label-top);\n        left: var(--label-left);\n        transform: translateY(0px);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }"] });
RadioComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], RadioComponent.prototype, "id", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "jsonData", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "value", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "label", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "radioStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "signalStyle", void 0);
__decorate([
    Output()
], RadioComponent.prototype, "radioChangeHandler", void 0);

let RadioModule = class RadioModule {
};
RadioModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RadioModule });
RadioModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RadioModule_Factory(t) { return new (t || RadioModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });

let TextComponent = class TextComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.type = 'text';
        this.maxlength = 255;
        this.showMask = false;
        this.value = "";
        this.staticStyle = false;
        this.readOnly = false;
        this.onlyText = false;
        this.noPutCharacter = 0;
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
        var getVal = event.target.value;
        this.getvalue.emit(event.target.value);
    }
    onBlur(event) {
        this.onblur.emit(event.target.value);
    }
    onEndfocus(event) {
        if (this.maskType != '' && this.maskType != null && this.maskType != undefined) {
            setTimeout(() => {
                event.target.selectionStart = this.noPutCharacter == 0 ? event.target.value.length : this.noPutCharacter;
                event.target.selectionEnd = this.noPutCharacter == 0 ? event.target.value.length : this.noPutCharacter;
            }, 500);
        }
    }
    keyPress(e) {
        //e.target.selectionStart++;
        //e.target.selectionEnd++;
        if (this.onlyText == false) {
            e.target.selectionStart++;
        }
        e.target.selectionEnd++;
    }
};
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TextComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TextComponent, selectors: [["sml-input-text"]], inputs: { type: "type", maxlength: "maxlength", showMask: "showMask", value: "value", staticStyle: "staticStyle", readOnly: "readOnly", onlyText: "onlyText", noPutCharacter: "noPutCharacter", name: "name", maskType: "maskType", patterns: "patterns", expression: "expression", label: "label", fixValue: "fixValue", switchStyle: "switchStyle", signalStyle: "signalStyle", style: "style", borderStyle: "borderStyle", valueStyle: "valueStyle", inputStyle: "inputStyle" }, outputs: { getvalue: "getvalue", onblur: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 12, consts: [[1, "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], ["class", "form-control", "required", "", 3, "id", "name", "type", "patterns", "shownMaskExpression", "mask", "showMaskTyped", "ngModel", "ngStyle", "ngModelChange", "focus", "blur", "keyup", "keypress", 4, "ngIf"], ["class", "form-control", "required", "", "readonly", "", 3, "id", "name", "type", "patterns", "shownMaskExpression", "mask", "showMaskTyped", "ngModel", "ngStyle", "ngModelChange", "focus", "blur", "keyup", "keypress", 4, "ngIf"], [1, "label", 3, "for", "ngStyle"], ["required", "", 1, "form-control", 3, "id", "name", "type", "patterns", "shownMaskExpression", "mask", "showMaskTyped", "ngModel", "ngStyle", "ngModelChange", "focus", "blur", "keyup", "keypress"], ["required", "", "readonly", "", 1, "form-control", 3, "id", "name", "type", "patterns", "shownMaskExpression", "mask", "showMaskTyped", "ngModel", "ngStyle", "ngModelChange", "focus", "blur", "keyup", "keypress"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, TextComponent_input_2_Template, 1, 10, "input", 2);
        ɵngcc0.ɵɵtemplate(3, TextComponent_input_3_Template, 1, 10, "input", 3);
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(7, _c2, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.readOnly);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.readOnly);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.name);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label, " ");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc2.DefaultValueAccessor, ɵngcc2.RequiredValidator, ɵngcc2.MaxLengthValidator, ɵngcc3.MaskDirective, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: ["[_nghost-%COMP%] {\n        --c-width: 645px;\n        --c-height: 25px;\n        --label-left: 10px;\n        --label-top: 0px;\n        --value-left: 10px;\n        --value-top: 0px;\n    }\n    \n    \n    .position-relative[_ngcontent-%COMP%] {\n        position: relative;\n    }\n    .input-field[_ngcontent-%COMP%] {\n        border: 1px solid #dee2e6;\n        border-radius: 2px;\n        width: var(--c-width) !important;\n        min-height: var(--c-height) !important;\n        height: auto;\n    }\n    \n    .form-control[_ngcontent-%COMP%] {\n        display: block;\n        padding-top: 0.375rem;\n        padding-right: 0.75rem;\n        padding-bottom: 0.375rem;\n        padding-left: var(--value-left);\n        font-size: 1rem;\n        line-height: 1.5;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: none;\n        min-height: var(--c-height) !important;\n        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    }\n    .form-control[_ngcontent-%COMP%] {\n        background-color: inherit;\n        box-shadow: none !important;\n    }\n    .signal-line[_ngcontent-%COMP%]{\n        border-top: none !important;\n        border-left: none !important;\n        border-right: none !important;\n        border-radius: 0px !important;\n    }\n    \n    .label[_ngcontent-%COMP%]{\n        position: absolute; \n        top: -24px;\n        left: 0px; \n        font-size: 12px;\n        padding: 0px !important;\n        text-align: left;\n    }\n    .float-group[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 14px 24px 2px 0px;\n    }\n    .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n        padding-top: var(--value-top);\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: var(--value-left);\n    }\n    .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n        font-size: 12px;\n        font-weight: normal;\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        left: var(--label-left);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }\n\n    @media all and (-ms-high-contrast:none) {\n        *[_ngcontent-%COMP%]::-ms-backdrop, .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n    }\n\n\n\n    .float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n        font-size: 9px;\n        font-weight: bold !important;\n        position: absolute;\n        top: var(--label-top);\n        left: var(--label-left);\n        transform: translateY(0px);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }\n    .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n        outline: none !important;\n        box-shadow: none;\n    }\n    \n    .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%] {\n        font-size: 9px;\n        font-weight: bold !important;  \n        position: absolute;\n        top: var(--label-top);\n        left: var(--label-left);\n        transform: translateY(0px);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }"] });
TextComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TextComponent.prototype, "type", void 0);
__decorate([
    Input()
], TextComponent.prototype, "maxlength", void 0);
__decorate([
    Input()
], TextComponent.prototype, "showMask", void 0);
__decorate([
    Input()
], TextComponent.prototype, "value", void 0);
__decorate([
    Input()
], TextComponent.prototype, "name", void 0);
__decorate([
    Input()
], TextComponent.prototype, "maskType", void 0);
__decorate([
    Input()
], TextComponent.prototype, "patterns", void 0);
__decorate([
    Input()
], TextComponent.prototype, "expression", void 0);
__decorate([
    Input()
], TextComponent.prototype, "label", void 0);
__decorate([
    Input()
], TextComponent.prototype, "fixValue", void 0);
__decorate([
    Input()
], TextComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "style", void 0);
__decorate([
    Input()
], TextComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "inputStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "readOnly", void 0);
__decorate([
    Input()
], TextComponent.prototype, "onlyText", void 0);
__decorate([
    Input()
], TextComponent.prototype, "noPutCharacter", void 0);
__decorate([
    Output()
], TextComponent.prototype, "getvalue", void 0);
__decorate([
    Output()
], TextComponent.prototype, "onblur", void 0);

let TextModule = class TextModule {
};
TextModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TextModule });
TextModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TextModule_Factory(t) { return new (t || TextModule)(); }, imports: [[
            CommonModule,
            NgbModule,
            NgxMaskModule.forRoot(),
            FormsModule
        ]] });

let TagInputComponent = class TagInputComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.value = "";
        this.name = "sml-input-type";
        this.onEnter = new EventEmitter;
    }
    ngOnInit() { }
    ngOnChanges(event) { }
    onEnterClick() {
        if (this.value != "") {
            let array = this.value.split(",");
            this.onEnter.emit(array);
            this.value = "";
        }
    }
};
TagInputComponent.ɵfac = function TagInputComponent_Factory(t) { return new (t || TagInputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TagInputComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TagInputComponent, selectors: [["sml-input-tag"]], inputs: { value: "value", name: "name" }, outputs: { onEnter: "onEnter" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 3, consts: [[1, "position-relative"], ["row", "3", "placeholder", "Type and press enter", 1, "cus-textarea", 3, "id", "name", "ngModel", "keyup.enter", "ngModelChange"]], template: function TagInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "textarea", 1);
        ɵngcc0.ɵɵlistener("keyup.enter", function TagInputComponent_Template_textarea_keyup_enter_1_listener() { return ctx.onEnterClick(); })("ngModelChange", function TagInputComponent_Template_textarea_ngModelChange_1_listener($event) { return ctx.value = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.name);
        ɵngcc0.ɵɵpropertyInterpolate("name", ctx.name);
        ɵngcc0.ɵɵproperty("ngModel", ctx.value);
    } }, directives: [ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: [".position-relative[_ngcontent-%COMP%] {\n            position: relative;\n        }\n        .cus-textarea[_ngcontent-%COMP%] {\n            width: 100% !important;\n            padding-left: 7px;\n        }"] });
TagInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TagInputComponent.prototype, "value", void 0);
__decorate([
    Input()
], TagInputComponent.prototype, "name", void 0);
__decorate([
    Output()
], TagInputComponent.prototype, "onEnter", void 0);

let TagInputModule = class TagInputModule {
};
TagInputModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TagInputModule });
TagInputModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TagInputModule_Factory(t) { return new (t || TagInputModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });

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
TextareaComponent.ɵfac = function TextareaComponent_Factory(t) { return new (t || TextareaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TextareaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TextareaComponent, selectors: [["sml-input-textarea"]], inputs: { staticStyle: "staticStyle", readOnly: "readOnly", value: "value", name: "name", row: "row", column: "column", label: "label", maxLenght: "maxLenght", switchStyle: "switchStyle", style: "style", borderStyle: "borderStyle", signalStyle: "signalStyle", valueStyle: "valueStyle", inputStyle: "inputStyle" }, outputs: { getvalue: "getvalue", onblur: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 7, vars: 12, consts: [[1, "position-relative"], [1, "input-field", 3, "ngStyle", "ngClass"], ["type", "text", "class", "form-control", "required", "", 3, "value", "rows", "cols", "ngStyle", "keyup", "blur", 4, "ngIf"], ["type", "text", "class", "form-control", "required", "", "readOnly", "", 3, "value", "rows", "cols", "ngStyle", "keyup", "blur", 4, "ngIf"], [1, "label", 3, "ngStyle"], [4, "ngIf"], ["type", "text", "required", "", 1, "form-control", 3, "value", "rows", "cols", "ngStyle", "keyup", "blur"], ["type", "text", "required", "", "readOnly", "", 1, "form-control", 3, "value", "rows", "cols", "ngStyle", "keyup", "blur"]], template: function TextareaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, TextareaComponent_textarea_2_Template, 1, 4, "textarea", 2);
        ɵngcc0.ɵɵtemplate(3, TextareaComponent_textarea_3_Template, 1, 4, "textarea", 3);
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵtemplate(6, TextareaComponent_span_6_Template, 2, 1, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.borderStyle)("ngClass", ɵngcc0.ɵɵpureFunction4(7, _c2, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.readOnly);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.readOnly);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.maxLenght);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: ["[_nghost-%COMP%] {\n      --c-width: 645px;\n      --label-left: 10px;\n      --label-top: 0px;\n      --value-left: 10px;\n      --value-top: 0px;\n  }\n  \n  .position-relative[_ngcontent-%COMP%] {\n      position: relative;\n  }\n  .input-field[_ngcontent-%COMP%] {\n      border: 1px solid rgb(222, 226, 230);\n      border-radius: 2px;\n      width: var(--c-width) !important;\n  }\n  \n  .form-control[_ngcontent-%COMP%] {\n      display: block;\n      padding-top: 0.375rem;\n      padding-right: 0.75rem;\n      padding-bottom: 0.375rem;\n      padding-left: var(--value-left);\n      font-size: 1rem;\n      line-height: 1.5;\n      color: #495057;\n      background-color: #fff;\n      background-clip: padding-box;\n      border: none;\n      resize: none;\n      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control[_ngcontent-%COMP%] {\n      background-color: inherit;\n      box-shadow: none !important;\n  }\n  .signal-line[_ngcontent-%COMP%]{\n      border-top: none !important;\n      border-left: none !important;\n      border-right: none !important;\n      border-radius: 0px !important;\n  }\n  \n  .label[_ngcontent-%COMP%] {\n      position: absolute;\n      top: -24px;\n      left: 0px; \n      font-size: 12px;\n      padding: 0px !important;\n        text-align: left;\n  }\n  .float-group[_ngcontent-%COMP%] {\n      position: relative;\n      padding: 14px 24px 2px 0px;\n  }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n      padding-top: var(--value-top);\n      padding-right: 0px;\n      padding-bottom: 0px;\n      padding-left: var(--value-left);\n  }\n  .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: normal;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: var(--label-left);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n\n  @media all and (-ms-high-contrast:none) {\n      *[_ngcontent-%COMP%]::-ms-backdrop, .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n          top: 0%!important;\n          transform: translateY(50%);\n      }\n  }\n  \n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n      box-shadow: none;\n      border: none\n  }\n  .float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n      font-size: 9px;\n      font-weight: bold !important;  \n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n   }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-within    ~ .label[_ngcontent-%COMP%], .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    ~ .label[_ngcontent-%COMP%] {\n      font-size: 9px;\n      font-weight: bold !important;  \n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }"] });
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

let TextareaModule = class TextareaModule {
};
TextareaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TextareaModule });
TextareaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TextareaModule_Factory(t) { return new (t || TextareaModule)(); }, imports: [[
            CommonModule
        ]] });

let UpdownComponent = class UpdownComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.initialValue = 0;
        this.isNagative = false;
        this.textAlign = 'right';
        this.isLabel = false;
        this.staticStyle = false;
        this.valueChange = new EventEmitter();
    }
    ngOnInit() {
        if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
            this.initialValue = 0;
        }
        else {
            this.initialValue = parseInt(this.initialValue);
        }
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
        }
    }
    styleObject() {
        let nType = {};
        Object.assign(nType, this.valueStyle);
        Object.assign(nType, this.borderStyle);
        return nType;
    }
    increaseValue() {
        if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
            this.initialValue = 0;
        }
        this.initialValue += 1;
        this.valueChange.emit(this.initialValue);
    }
    decreaseValue() {
        if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
            this.initialValue = 0;
        }
        if (this.initialValue > 0) {
            this.initialValue -= 1;
            this.valueChange.emit(this.initialValue);
        }
        if (this.isNagative) {
            this.initialValue -= 1;
            this.valueChange.emit(this.initialValue);
        }
        return false;
    }
    onBlurMethod() {
        this.valueChange.emit(this.initialValue);
    }
};
UpdownComponent.ɵfac = function UpdownComponent_Factory(t) { return new (t || UpdownComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
UpdownComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UpdownComponent, selectors: [["sml-input-updown"]], inputs: { initialValue: "initialValue", isNagative: "isNagative", textAlign: "textAlign", isLabel: "isLabel", staticStyle: "staticStyle", switchStyle: "switchStyle", label: "label", style: "style", valueStyle: "valueStyle", borderStyle: "borderStyle", signalStyle: "signalStyle" }, outputs: { valueChange: "valueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 12, consts: [[1, "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], ["type", "number", "required", "", 1, "form-control", 3, "ngModel", "ngStyle", "ngModelChange", "blur"], [1, "numberSpinner"], ["href", "javascript:void(0)", 1, "spinnerBtn", 3, "click"], [1, "fa", "fa-caret-up"], [1, "fa", "fa-caret-down"], ["class", "label", 3, "ngStyle", 4, "ngIf"], [1, "label", 3, "ngStyle"]], template: function UpdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function UpdownComponent_Template_input_ngModelChange_2_listener($event) { return ctx.initialValue = $event; })("blur", function UpdownComponent_Template_input_blur_2_listener() { return ctx.onBlurMethod(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "a", 4);
        ɵngcc0.ɵɵlistener("click", function UpdownComponent_Template_a_click_4_listener() { return ctx.increaseValue(); });
        ɵngcc0.ɵɵelement(5, "i", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "a", 4);
        ɵngcc0.ɵɵlistener("click", function UpdownComponent_Template_a_click_6_listener() { return ctx.decreaseValue(); });
        ɵngcc0.ɵɵelement(7, "i", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, UpdownComponent_label_8_Template, 2, 2, "label", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(7, _c2, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("text-align", ctx.textAlign);
        ɵngcc0.ɵɵproperty("ngModel", ctx.initialValue)("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isLabel);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.NumberValueAccessor, ɵngcc2.DefaultValueAccessor, ɵngcc2.RequiredValidator, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc1.NgIf], styles: ["[_nghost-%COMP%] {\n      --c-width: 100%;\n      --c-height: 25px;\n      --label-left: 10px;\n      --label-top: 0px;\n      --value-left: 10px;\n      --value-top: 0px;\n  }\n  \n  .position-relative[_ngcontent-%COMP%] {\n      position: relative;\n      width: var(--c-width) !important;\n  }\n  .input-field[_ngcontent-%COMP%] {\n      border: 1px solid #dee2e6;\n      border-radius: 2px;\n      min-height: var(--c-height) !important;\n      height: auto;\n  }\n  \n  .form-control[_ngcontent-%COMP%] {\n      display: block;\n      padding-top: 0.375rem;\n      padding-right: var(--value-left);\n      padding-bottom: 0.375rem;\n      padding-left: 0.75rem;\n      font-size: 1rem;\n      line-height: 1.5;\n      color: #495057;\n      background-color: #fff;\n      background-clip: padding-box;\n      border: none;\n      text-align: right;\n      min-height: var(--c-height) !important;\n      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control[_ngcontent-%COMP%] {\n      background-color: inherit;\n      box-shadow: none !important;\n  }\n  .signal-line[_ngcontent-%COMP%]{\n      border-top: none !important;\n      border-left: none !important;\n      border-right: none !important;\n      border-radius: 0px !important;\n  }\n  \n  .label[_ngcontent-%COMP%]{\n      position: absolute; \n      top: -24px;\n      left: 0px; \n      font-size: 12px;\n      padding: 0px !important;\n        text-align: left;\n  }\n  .float-group[_ngcontent-%COMP%] {\n      position: relative;\n      padding: 14px 7px 2px 0px;\n  }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n      padding-top: var(--value-top);\n      padding-right: var(--value-left);\n      padding-bottom: 0px;\n      padding-left: var(--value-left);\n  }\n  .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n      font-size: 12px;\n      font-weight: normal;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      left: var(--label-left);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n      outline: none !important;\n      box-shadow: none;\n  }\n  .float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 9px;\n      font-weight: bold !important;  \n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-within    ~ .label[_ngcontent-%COMP%], .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    ~ .label[_ngcontent-%COMP%] {\n      font-size: 9px;\n      font-weight: bold !important;  \n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }\n  \n  .numberSpinner[_ngcontent-%COMP%] {\n      display: inline-flex;\n      flex-direction: column;\n      position: absolute;\n      right: 0px;\n      top: 0px;\n      bottom: 0px;\n      border-top-right-radius: 2px;\n      border-bottom-right-radius: 2px;\n      overflow: hidden;\n      z-index: 1;\n  }\n  .spinnerBtn[_ngcontent-%COMP%] {\n      background: #f1f1f1;\n      border: none;\n      font-size: 14px;\n      color: initial;\n      padding: 0 7px;\n      display: flex;\n      height: 50%;\n      align-items: center;\n      justify-content: center;\n  }\n  .spinnerBtn[_ngcontent-%COMP%]:active {\n      color: #fff;\n      background: #666666!important;\n  }\n  .spinnerBtn[_ngcontent-%COMP%]:hover {\n      background: #d1d1d1;\n      text-decoration: none;\n  }\n  input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{\n      opacity: 0;\n      font-size: 14px\n  }"] });
UpdownComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], UpdownComponent.prototype, "initialValue", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "isNagative", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "textAlign", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "label", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "isLabel", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "style", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "staticStyle", void 0);
__decorate([
    Output()
], UpdownComponent.prototype, "valueChange", void 0);

let UpdownModule = class UpdownModule {
};
UpdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: UpdownModule });
UpdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function UpdownModule_Factory(t) { return new (t || UpdownModule)(); }, imports: [[
            CommonModule,
            NgbModule,
            FormsModule
        ]] });

let ColorPickerComponent = class ColorPickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.color = '#d6d6d6';
        this.isLabel = false;
        this.staticStyle = false;
        this.event = new EventEmitter();
        this.selectedColor = new EventEmitter();
        this.show = false;
        this.defaultColors = [
            '#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF',
            '#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF',
            '#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE',
            '#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD',
            '#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5',
            '#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B',
            '#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842',
            '#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031'
        ];
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
        }
    }
    styleObject() {
        let nType = {};
        Object.assign(nType, this.valueStyle);
        Object.assign(nType, this.borderStyle);
        return nType;
    }
    changeColor(color) {
        this.color = color;
        this.event.emit(this.color);
        this.selectedColor.emit(this.color);
        this.show = false;
    }
    changeColorManual(color) {
        const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
        if (isValid) {
            this.color = color;
            this.event.emit(this.color);
            this.selectedColor.emit(this.color);
        }
    }
    toggleColors() {
        this.show = !this.show;
    }
};
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ColorPickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ColorPickerComponent, selectors: [["sml-input-colorpicker"]], inputs: { color: "color", isLabel: "isLabel", staticStyle: "staticStyle", heading: "heading", switchStyle: "switchStyle", label: "label", style: "style", valueStyle: "valueStyle", signalStyle: "signalStyle", borderStyle: "borderStyle" }, outputs: { event: "event", selectedColor: "selectedColor" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 13, consts: [[1, "color-picker", "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], ["type", "text", "name", "color", "required", "", 1, "form-control", 3, "ngStyle", "value"], [1, "icon", 3, "click"], ["class", "label", 3, "ngStyle", 4, "ngIf"], ["class", "opened", 4, "ngIf"], [1, "label", 3, "ngStyle"], [1, "opened"], [1, "colors"], ["class", "circle", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "circle", 3, "ngStyle", "click"]], template: function ColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "input", 2);
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵlistener("click", function ColorPickerComponent_Template_span_click_3_listener() { return ctx.toggleColors(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, ColorPickerComponent_label_4_Template, 2, 2, "label", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, ColorPickerComponent_div_5_Template, 3, 1, "div", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(8, _c2, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.valueStyle)("value", ctx.color);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background", ctx.color);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.show);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf], styles: ["[_nghost-%COMP%] {\n    --c-width: 100%;\n    --c-height: 25px;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n}\n.color-picker[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    height: 19px;\n    width: 19px;\n    box-sizing: border-box;\n    border-radius: 4px;\n    border: 1px solid #fff;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}\n.color-picker[_ngcontent-%COMP%]   .opened[_ngcontent-%COMP%] {\n    box-shadow: 0 7px 13px 0 rgba(86, 95, 102, 0.07);\n    background: #fff;\n    max-width: 164px;\n    padding: 1px;\n    z-index: 99;\n    border-radius: 5px;\n    position: absolute;\n    margin-top: 5px;\n    right: 0px;\n}\n.color-picker[_ngcontent-%COMP%]   .opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n}\n.color-picker[_ngcontent-%COMP%]   .opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    flex: 20px 0 0;\n}\n.color-picker[_ngcontent-%COMP%]   .opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(5n) {\n    margin-right: 0;\n}\n.color-picker[_ngcontent-%COMP%]   .opened[_ngcontent-%COMP%]   .hex-code[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n}\n.color-picker[_ngcontent-%COMP%]   .opened[_ngcontent-%COMP%]   .hex-code[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 50%;\n    text-align: center;\n    font-size: 10px;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    line-height: 45px;\n}\n.color-picker[_ngcontent-%COMP%]   .opened[_ngcontent-%COMP%]   .hex-code[_ngcontent-%COMP%]   .g-input[_ngcontent-%COMP%] {\n    border: 1px solid #e8ebed;\n    height: 45px;\n    border-radius: 5px;\n    width: 120px;\n}\n.color-picker[_ngcontent-%COMP%]   .opened[_ngcontent-%COMP%]   .hex-code[_ngcontent-%COMP%]   .g-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: none;\n    width: 100%;\n    text-transform: uppercase;\n    outline: none;\n    text-align: center;\n    letter-spacing: 1.5px;\n    color: #595b65;\n    height: 100%;\n    border-radius: 2px;\n    margin: 0;\n    padding: 0;\n}\n.color-picker[_ngcontent-%COMP%]   .colorpicker[_ngcontent-%COMP%] {\n    position: relative;\n    border-radius: 3px;\n    width: 100%;\n    border: 1px solid #c3c0c0;\n}\n.color-picker[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    position: absolute;\n    background: #ccc;\n    width: 20px;\n    height: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 9px;\n    border-radius: 3px;\n}\n.color-picker[_ngcontent-%COMP%]   .text-black-lighter[_ngcontent-%COMP%] {\n    color: #404040 !important;\n}\n\n.position-relative[_ngcontent-%COMP%] {\n    position: relative;\n    width: var(--c-width) !important;\n}\n.input-field[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    min-height: var(--c-height) !important;\n    height: auto;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    display: block;\n    padding-top: 0.375rem;\n    padding-right: 0.75rem;\n    padding-bottom: 0.375rem;\n    padding-left: var(--value-left);\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: none;\n    min-height: var(--c-height) !important;\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%] {\n    background-color: inherit;\n    box-shadow: none !important;\n}\n.signal-line[_ngcontent-%COMP%]{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n}\n\n.label[_ngcontent-%COMP%]{\n    position: absolute; \n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    padding: 0px !important;\n    text-align: left;\n}\n.float-group[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 14px 24px 2px 0px;\n}\n.float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding-top: var(--value-top);\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: var(--value-left);\n}\n.float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: normal;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: var(--label-left);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n}\n.float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 9px;\n    font-weight: bold !important;  \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n}\n.float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    outline: none !important;\n    box-shadow: none;\n}\n.float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-within    ~ .label[_ngcontent-%COMP%], .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    ~ .label[_ngcontent-%COMP%] {\n    font-size: 9px;\n    font-weight: bold !important;  \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n}"] });
ColorPickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ColorPickerComponent.prototype, "heading", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "color", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "isLabel", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "label", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "style", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "borderStyle", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "event", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "selectedColor", void 0);

let ColorPickersModule = class ColorPickersModule {
};
ColorPickersModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ColorPickersModule });
ColorPickersModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ColorPickersModule_Factory(t) { return new (t || ColorPickersModule)(); }, imports: [[
            CommonModule, FormsModule, ColorPickerModule
        ]] });

let DatepickerComponent = class DatepickerComponent {
    constructor(calendar, elementRef) {
        this.calendar = calendar;
        this.elementRef = elementRef;
        this.staticStyle = false;
        this.readOnly = false;
        this.getvalue = new EventEmitter;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('input[id$=' + this.name + ']')['inputmask']("mm/dd/yyyy", {
            mask: "1/2/y",
            placeholder: "__/__/____",
            insertMode: false,
            clearMaskOnLostFocus: false,
            showMaskOnHover: false,
            hourFormat: 12
        });
    }
    ngOnChanges(event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            let css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.width = css['c-width'];
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
        this.getvalue.emit(event.value);
    }
    onBlurMethod() {
        let date = $('#' + this.name).val();
        this.value = new Date(date.toString());
        this.getvalue.emit(this.value);
    }
    clk() {
        var w = this.width;
        if (w == '100%') {
            w = $('#topdiv-' + this.name).width();
        }
        var sd = parseInt(w) - 296;
        $('owl-date-time-container').css({ left: sd });
    }
};
DatepickerComponent.ɵfac = function DatepickerComponent_Factory(t) { return new (t || DatepickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NgbCalendar), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DatepickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DatepickerComponent, selectors: [["sml-input-datepicker"]], inputs: { staticStyle: "staticStyle", readOnly: "readOnly", width: "width", value: "value", format: "format", name: "name", label: "label", switchStyle: "switchStyle", style: "style", borderStyle: "borderStyle", signalStyle: "signalStyle", fieldStyle: "fieldStyle", valueStyle: "valueStyle", isChecked: "isChecked" }, outputs: { getvalue: "getvalue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 12, vars: 19, consts: [[1, "position-relative", 3, "id"], [1, "input-field", 3, "ngClass", "ngStyle"], ["class", "form-control", "required", "", 3, "ngModel", "id", "name", "owlDateTime", "ngClass", "ngStyle", "ngModelChange", "dateTimeInput", "blur", 4, "ngIf"], ["class", "form-control", "required", "", "readOnly", "", 3, "ngModel", "id", "name", "owlDateTime", "ngClass", "ngStyle", "ngModelChange", "dateTimeInput", "blur", 4, "ngIf"], [1, "label", 3, "for", "ngStyle"], [3, "pickerType", "startAt"], ["dt3", ""], ["dt4", ""], ["class", "btn btn-link icon", "type", "button", 3, "owlDateTimeTrigger", "click", 4, "ngIf"], ["class", "btn btn-link icon", "type", "button", "disabled", "", 3, "click", 4, "ngIf"], ["required", "", 1, "form-control", 3, "ngModel", "id", "name", "owlDateTime", "ngClass", "ngStyle", "ngModelChange", "dateTimeInput", "blur"], ["required", "", "readOnly", "", 1, "form-control", 3, "ngModel", "id", "name", "owlDateTime", "ngClass", "ngStyle", "ngModelChange", "dateTimeInput", "blur"], ["type", "button", 1, "btn", "btn-link", "icon", 3, "owlDateTimeTrigger", "click"], ["type", "button", "disabled", "", 1, "btn", "btn-link", "icon", 3, "click"]], template: function DatepickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, DatepickerComponent_input_2_Template, 1, 8, "input", 2);
        ɵngcc0.ɵɵtemplate(3, DatepickerComponent_input_3_Template, 1, 8, "input", 3);
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(6, "owl-date-time", 5, 6);
        ɵngcc0.ɵɵelement(8, "owl-date-time", 5, 7);
        ɵngcc0.ɵɵtemplate(10, DatepickerComponent_button_10_Template, 1, 1, "button", 8);
        ɵngcc0.ɵɵtemplate(11, DatepickerComponent_button_11_Template, 1, 0, "button", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵpropertyInterpolate1("id", "topdiv-", ctx.name, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(14, _c2, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.readOnly);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.readOnly);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("for", ctx.name)("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("pickerType", "calendar")("startAt", ctx.value);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("pickerType", "calendar")("startAt", ctx.value);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.readOnly);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.readOnly);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc5.OwlDateTimeComponent, ɵngcc2.DefaultValueAccessor, ɵngcc5.OwlDateTimeInputDirective, ɵngcc2.RequiredValidator, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc5.OwlDateTimeTriggerDirective], styles: ["[_nghost-%COMP%] {\n    --c-width: 645px;\n    --c-height: 25px;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n  }\n  \n  .position-relative[_ngcontent-%COMP%] {\n    position: relative;\n    width: var(--c-width) !important;\n  }\n  .input-field[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    min-height: var(--c-height) !important;\n    height: auto;\n  }\n  \n  .form-control[_ngcontent-%COMP%] {\n    display: block;\n    padding-top: 0.375rem;\n    padding-right: 0.75rem;\n    padding-bottom: 0.375rem;\n    padding-left: var(--value-left);\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: none;\n    min-height: var(--c-height) !important;\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    background-color: inherit;\n    box-shadow: none !important;\n  }\n  .signal-line[_ngcontent-%COMP%]{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n  }\n  \n  \n  .label[_ngcontent-%COMP%] {\n    position: absolute; \n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    padding: 0px !important;\n        text-align: left;\n  }\n  .float-group[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 14px 24px 2px 0px;\n  }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding-top: var(--value-top);\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: var(--value-left);\n  }\n  .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: normal;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: var(--label-left);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  \n    @media all and (-ms-high-contrast:none) {\n        *[_ngcontent-%COMP%]::-ms-backdrop, .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n    }\n    \n  .float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 9px;\n    font-weight: bold !important;  \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%], .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    + .label[_ngcontent-%COMP%]{\n    font-size: 9px;\n    font-weight: bold !important;  \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  \n  button.icon[_ngcontent-%COMP%], button.icon[_ngcontent-%COMP%]:active {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;\n    width: 25px;\n    height: 23px;\n    background-repeat: no-repeat;\n    background-size: 20px;\n    background-position: center;\n    position: absolute;\n    right: 7px;\n    top: 8px;\n  }\n  .float-group[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%], .float-group[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%]:active { \n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .btn-link[_ngcontent-%COMP%] {\n    font-weight: 400;\n    color: #007bff;\n    background-color: transparent;\n  }\n  .btn[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out\n    ,box-shadow .15s ease-in-out;\n  }\n  .btn.btn-link[_ngcontent-%COMP%]:hover, .btn.btn-link[_ngcontent-%COMP%]:focus {background-size: cover !important;background-position: center !important;}"] });
DatepickerComponent.ctorParameters = () => [
    { type: NgbCalendar },
    { type: ElementRef }
];
__decorate([
    Input()
], DatepickerComponent.prototype, "value", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "format", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "name", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "label", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "width", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "style", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "fieldStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "isChecked", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "readOnly", void 0);
__decorate([
    Output()
], DatepickerComponent.prototype, "getvalue", void 0);

let DatepickerModule = class DatepickerModule {
};
DatepickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DatepickerModule });
DatepickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DatepickerModule_Factory(t) { return new (t || DatepickerModule)(); }, imports: [[
            CommonModule,
            NgbModule,
            FormsModule,
            NgxMaskModule,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
            NgxMaterialTimepickerModule
        ]] });

let DaterangepickerComponent = class DaterangepickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.staticStyle = false;
        this.getvalue = new EventEmitter;
    }
    ngOnInit() {
        if (this.value) {
            this.value = this.value.toLocaleDateString();
        }
        if (this.fromValue) {
            this.fromValue = this.fromValue.toLocaleDateString();
        }
    }
    ngOnChanges(event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            let css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.width = css['c-width'];
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
    emitValue(val) {
        this.value = val.value.split(",")[0];
        this.fromValue = val.value.split(",")[1];
        this.getvalue.emit({ to: this.value, from: this.fromValue });
    }
    clk() {
        var w = this.width;
        if (w == '100%') {
            w = $('#topdiv-' + this.name).width();
        }
        var sd = parseInt(w) - 296;
        $('owl-date-time-container').css({ left: sd });
    }
};
DaterangepickerComponent.ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DaterangepickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DaterangepickerComponent, selectors: [["sml-input-daterangepicker"]], inputs: { staticStyle: "staticStyle", value: "value", fromValue: "fromValue", width: "width", format: "format", name: "name", label: "label", switchStyle: "switchStyle", style: "style", signalStyle: "signalStyle", borderStyle: "borderStyle", valueStyle: "valueStyle" }, outputs: { getvalue: "getvalue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 13, vars: 24, consts: [[1, "position-relative", 3, "id"], [1, "input-field", 3, "ngClass", "ngStyle"], ["required", "", 1, "form-control", "ctrtext", 3, "value", "name", "owlDateTime", "selectMode", "rangeSeparator", "dateTimeInput"], ["getRangeVal", ""], ["type", "text", 1, "form-control", 3, "value", "name", "ngStyle"], [1, "dateSeprator"], [3, "pickerType", "startAt"], ["dtRange1", ""], ["type", "button", 1, "btn", "btn-link", "icon", 3, "owlDateTimeTrigger", "click"], [1, "label", 3, "ngStyle"]], template: function DaterangepickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("dateTimeInput", function DaterangepickerComponent_Template_input_dateTimeInput_2_listener() { ɵngcc0.ɵɵrestoreView(_r2); const _r0 = ɵngcc0.ɵɵreference(3); return ctx.emitValue(_r0); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "input", 4);
        ɵngcc0.ɵɵelementStart(5, "span", 5);
        ɵngcc0.ɵɵtext(6, "to");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(7, "input", 4);
        ɵngcc0.ɵɵelement(8, "owl-date-time", 6, 7);
        ɵngcc0.ɵɵelementStart(10, "button", 8);
        ɵngcc0.ɵɵlistener("click", function DaterangepickerComponent_Template_button_click_10_listener() { return ctx.clk(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "label", 9);
        ɵngcc0.ɵɵtext(12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(9);
        ɵngcc0.ɵɵpropertyInterpolate1("id", "topdiv-", ctx.name, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(19, _c2, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("value", ctx.value)("name", ctx.name)("owlDateTime", _r1)("selectMode", "range")("rangeSeparator", ",");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("value", ctx.value)("name", ctx.name)("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("value", ctx.fromValue)("name", ctx.name)("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("pickerType", "calendar")("startAt", ctx.value);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("owlDateTimeTrigger", _r1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc5.OwlDateTimeInputDirective, ɵngcc5.OwlDateTimeComponent, ɵngcc5.OwlDateTimeTriggerDirective], styles: ["[_nghost-%COMP%] {\n    --c-width: 645px;\n    --c-height: 25px;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n  }\n  \n  .position-relative[_ngcontent-%COMP%] {\n    position: relative;\n    width: var(--c-width) !important;\n  }\n  .input-field[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    min-height: var(--c-height) !important;\n    height: auto;\n    display: flex;\n  }\n  .ctrtext[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: -1;\n    opacity: 0\n  }\n  \n  .form-control[_ngcontent-%COMP%] {\n    display: block;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: none;\n    width: 13%;\n    min-height: var(--c-height) !important;\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    background-color: inherit;\n    box-shadow: none !important;\n  }\n  .signal-line[_ngcontent-%COMP%]{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n  }\n  \n  .label[_ngcontent-%COMP%] {\n    position: absolute; \n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    padding: 0px !important;\n        text-align: left;\n  }\n  .float-group[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 14px 24px 2px 0px;\n  }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding-top: var(--value-top);\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: var(--value-left);\n  }\n  .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 9px;\n    font-weight: bold !important;  \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  .float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 9px;\n    font-weight: bold !important; \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  \n  .dateSeprator[_ngcontent-%COMP%] {\n    display: inline-flex;\n    min-width: 30px;\n    color: #2d353c;\n    font-weight: 400;\n    font-size: 14;\n    line-height: 1;\n    justify-content: center;\n    align-items: center\n  }\n  \n  .float-group[_ngcontent-%COMP%]   .dateSeprator[_ngcontent-%COMP%] {\n    display: block;\n    min-width: 30px;\n    color: #2d353c;\n    font-weight: 400;\n    font-size: 14;\n    line-height: 1.5;\n    justify-content: center;\n    text-align: center;\n    padding-top: var(--value-top);\n  }\n  \n  \n  \n  button.icon[_ngcontent-%COMP%], button.icon[_ngcontent-%COMP%]:active {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;\n    width: 25px;\n    height: 23px;\n    background-repeat: no-repeat;\n    background-size: 20px;\n    background-position: center;\n    position: absolute;\n    right: 7px;\n    top: 8px;\n  }\n  .float-group[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%], button.icon[_ngcontent-%COMP%]:active {\n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .btn-link[_ngcontent-%COMP%] {\n    font-weight: 400;\n    color: #007bff;\n    background-color: transparent;\n  }\n  .btn[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .btn.btn-link[_ngcontent-%COMP%]:hover, .btn.btn-link[_ngcontent-%COMP%]:focus {background-size: cover !important;background-position: center !important;}"] });
DaterangepickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], DaterangepickerComponent.prototype, "value", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "fromValue", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "format", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "name", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "label", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "width", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "style", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], DaterangepickerComponent.prototype, "valueStyle", void 0);
__decorate([
    Output()
], DaterangepickerComponent.prototype, "getvalue", void 0);

let DaterangepickerModule = class DaterangepickerModule {
};
DaterangepickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DaterangepickerModule });
DaterangepickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DaterangepickerModule_Factory(t) { return new (t || DaterangepickerModule)(); }, imports: [[
            CommonModule,
            NgbModule,
            FormsModule,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
            NgxMaterialTimepickerModule,
        ]] });

let NumericComponent = class NumericComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.name = 'sml-input-numberic';
        this.value = null;
        this.label = 'Label Name';
        this.readOnly = false;
        this.switchStyle = true;
        this.signalStyle = false;
        this.staticStyle = true;
        this.getvalue = new EventEmitter;
        this.onblur = new EventEmitter;
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
        }
    }
    clickEvent(data) {
        if (data != undefined) {
            this.getvalue.emit(data.replace(/[,$]/g, ''));
        }
    }
    getValue(event) {
        if (event.target.value != undefined) {
            this.getvalue.emit(event.target.value.replace(/[,$]/g, ''));
        }
    }
    onBlur(event) {
        if (event.target.value != undefined) {
            this.onblur.emit(event.target.value.replace(/[,$]/g, ''));
        }
    }
};
NumericComponent.ɵfac = function NumericComponent_Factory(t) { return new (t || NumericComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NumericComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NumericComponent, selectors: [["sml-input-numeric"]], inputs: { name: "name", value: "value", label: "label", readOnly: "readOnly", switchStyle: "switchStyle", signalStyle: "signalStyle", staticStyle: "staticStyle", jsonData: "jsonData", options: "options", style: "style", borderStyle: "borderStyle", valueStyle: "valueStyle" }, outputs: { getvalue: "getvalue", onblur: "onblur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 16, consts: [[1, "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], ["currencyMask", "", "required", "", 1, "form-control", 3, "ngModel", "options", "ngStyle", "disabled", "id", "name", "ngModelChange", "click", "keyup", "blur"], [1, "label", 3, "for", "ngStyle"]], template: function NumericComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function NumericComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; })("click", function NumericComponent_Template_input_click_2_listener() { return ctx.clickEvent(ctx.value); })("keyup", function NumericComponent_Template_input_keyup_2_listener($event) { return ctx.getValue($event); })("blur", function NumericComponent_Template_input_blur_2_listener($event) { return ctx.onBlur($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "label", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(11, _c2, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.name);
        ɵngcc0.ɵɵpropertyInterpolate("name", ctx.name);
        ɵngcc0.ɵɵproperty("ngModel", ctx.value)("options", ctx.options)("ngStyle", ctx.valueStyle)("disabled", ctx.readOnly);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.name);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label, " ");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.DefaultValueAccessor, ɵngcc6.CurrencyMaskDirective, ɵngcc2.RequiredValidator, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: ["[_nghost-%COMP%]{--c-width:645px;--c-height:25px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:0px;}\n\t.input-field[_ngcontent-%COMP%]{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.form-control[_ngcontent-%COMP%]{display:block;padding-top:0.375rem;padding-right:var(--value-left);padding-bottom:0.375rem;padding-left:0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;text-align:right;min-height:var(--c-height) !important;transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;}\n\t.form-control[_ngcontent-%COMP%]{background-color:inherit;box-shadow:none !important;}\n\t.signal-line[_ngcontent-%COMP%]{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label[_ngcontent-%COMP%]{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;text-align: left;}\n\t.float-group[_ngcontent-%COMP%]{position:relative;padding:14px 0px 2px 24px;}\n\t.float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-top:var(--value-top);padding-right:var(--value-left);padding-bottom:0px;padding-left:var(--value-left);}\n\t.float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t\n    @media all and (-ms-high-contrast:none) {\n        *[_ngcontent-%COMP%]::-ms-backdrop, .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n\t}\n\t\n\t.float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{outline:none !important;box-shadow:none;}\n\t.float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%]{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.readOnly[_ngcontent-%COMP%]{pointer-events:none;opacity:0.7;}"] });
NumericComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], NumericComponent.prototype, "jsonData", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "name", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "value", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "options", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "label", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "readOnly", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "style", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], NumericComponent.prototype, "valueStyle", void 0);
__decorate([
    Output()
], NumericComponent.prototype, "getvalue", void 0);
__decorate([
    Output()
], NumericComponent.prototype, "onblur", void 0);

let NumericModule = class NumericModule {
};
NumericModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NumericModule });
NumericModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NumericModule_Factory(t) { return new (t || NumericModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            NgxCurrencyModule
        ]] });

let SelectComponent = class SelectComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.id = 'sml-input-select';
        this.label = "Label Name";
        this.disabled = false;
        this.clearable = false;
        this.listValue = [];
        this.value = "";
        this.signalStyle = false;
        this.staticStyle = true;
        this.switchStyle = true;
        this.swGroupBy = false;
        this.multiple = false;
        this.selectvalue = new EventEmitter;
        this.isOpen = false;
    }
    ngOnInit() {
        if (this.value == "") {
            this.value = null;
        }
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
    getselectvalue(event) {
        if (event) {
            this.selectvalue.emit(event.id);
        }
        else {
            this.value = null;
            this.selectvalue.emit("");
        }
    }
    onOpen() {
        this.isOpen = true;
    }
    onClose() {
        this.isOpen = false;
    }
};
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SelectComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["sml-input-select"]], inputs: { id: "id", label: "label", disabled: "disabled", clearable: "clearable", listValue: "listValue", value: "value", signalStyle: "signalStyle", staticStyle: "staticStyle", switchStyle: "switchStyle", swGroupBy: "swGroupBy", multiple: "multiple", style: "style", borderStyle: "borderStyle", valueStyle: "valueStyle" }, outputs: { selectvalue: "selectvalue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 11, consts: [[1, "position-relative"], [1, "input-field", 3, "ngStyle", "ngClass"], ["bindLabel", "name", "bindValue", "id", 3, "items", "clearable", "disabled", "ngModel", "multiple", "change", "ngModelChange", "open", "close", 4, "ngIf"], ["bindLabel", "name", "bindValue", "id", "groupBy", "group", 3, "items", "clearable", "disabled", "ngModel", "multiple", "change", "ngModelChange", "open", "close", 4, "ngIf"], ["class", "label", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "label", 3, "ngStyle", 4, "ngIf"], ["bindLabel", "name", "bindValue", "id", 3, "items", "clearable", "disabled", "ngModel", "multiple", "change", "ngModelChange", "open", "close"], ["bindLabel", "name", "bindValue", "id", "groupBy", "group", 3, "items", "clearable", "disabled", "ngModel", "multiple", "change", "ngModelChange", "open", "close"], ["ng-optgroup-tmp", ""], [1, "label", 3, "ngClass", "ngStyle"], [1, "label", 3, "ngStyle"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, SelectComponent_ng_select_2_Template, 1, 5, "ng-select", 2);
        ɵngcc0.ɵɵtemplate(3, SelectComponent_ng_select_3_Template, 2, 5, "ng-select", 3);
        ɵngcc0.ɵɵtemplate(4, SelectComponent_label_4_Template, 2, 5, "label", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, SelectComponent_label_5_Template, 2, 2, "label", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.borderStyle)("ngClass", ɵngcc0.ɵɵpureFunction4(6, _c2, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.swGroupBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.swGroupBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.switchStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.switchStyle);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc7.NgSelectComponent, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc7.ɵg], styles: ["[_nghost-%COMP%]{--c-width:645px;--c-height:44px;--label-left:4px;--label-top:2px;--value-left:4px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n    .position-relative[_ngcontent-%COMP%]{position:relative;}\n    .input-field[_ngcontent-%COMP%]{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n    .float-groupdd[_ngcontent-%COMP%]{position:relative;padding:0px;}\n    .signal-line[_ngcontent-%COMP%]{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n    .label[_ngcontent-%COMP%]{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;\n        text-align: left;}\n    .z-9999[_ngcontent-%COMP%]{z-index:9999;}\n    .float-groupdd[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;top:-24px;left:0px;font-size:12px;}\n    .float-group[_ngcontent-%COMP%]{position:relative;padding:14px 2px 0px 0px;}\n    .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}\n    \n\n    @media all and (-ms-high-contrast:none) {\n        *[_ngcontent-%COMP%]::-ms-backdrop, .float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n    }\n    \n    .float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n    [_nghost-%COMP%]     .ng-select .ng-select-container{border:none !important;}\n    [_nghost-%COMP%]     .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}\n    [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}\n    [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}"] });
SelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], SelectComponent.prototype, "id", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "label", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "clearable", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "listValue", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "value", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "style", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "swGroupBy", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "multiple", void 0);
__decorate([
    Output()
], SelectComponent.prototype, "selectvalue", void 0);

let SelectModule = class SelectModule {
};
SelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SelectModule });
SelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SelectModule_Factory(t) { return new (t || SelectModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            NgSelectModule
        ]] });

let DatetimepickerComponent = class DatetimepickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.name = 'sml-timepicker';
        this.staticStyle = false;
        this.getvalue = new EventEmitter;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('input[id$=' + this.name + ']')['inputmask']("hh:mm:ss", {
            mask: "h:s t\m",
            placeholder: "HH:MM:SS",
            insertMode: false,
            clearMaskOnLostFocus: false,
            showMaskOnHover: false,
            hourFormat: 12
        });
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
        }
    }
    selectChanged(event) {
        this.getvalue.emit(event);
    }
    onBlurMethod() {
        this.time = $('#' + this.name).val();
        this.getvalue.emit(this.time);
    }
};
DatetimepickerComponent.ɵfac = function DatetimepickerComponent_Factory(t) { return new (t || DatetimepickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DatetimepickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DatetimepickerComponent, selectors: [["sml-input-timepicker"]], inputs: { name: "name", staticStyle: "staticStyle", time: "time", width: "width", label: "label", switchStyle: "switchStyle", style: "style", borderStyle: "borderStyle", valueStyle: "valueStyle", signalStyle: "signalStyle" }, outputs: { getvalue: "getvalue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 16, consts: [[1, "position-relative"], [1, "input-field", 3, "ngClass", "ngStyle"], ["required", "", 1, "form-control", 2, "text-transform", "uppercase", 3, "id", "name", "ngxTimepicker", "disableClick", "ngModel", "ngStyle", "ngModelChange", "blur"], [1, "label", 3, "ngStyle"], ["picker", ""], [3, "for"]], template: function DatetimepickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_2_listener($event) { return ctx.time = $event; })("ngModelChange", function DatetimepickerComponent_Template_input_ngModelChange_2_listener($event) { return ctx.selectChanged($event); })("blur", function DatetimepickerComponent_Template_input_blur_2_listener() { return ctx.onBlurMethod(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "label", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(5, "ngx-material-timepicker", null, 4);
        ɵngcc0.ɵɵelement(7, "ngx-material-timepicker-toggle", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(11, _c2, ctx.switchStyle, !ctx.switchStyle, ctx.signalStyle, ctx.staticStyle))("ngStyle", ctx.borderStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.name)("name", ctx.name)("ngxTimepicker", _r0)("disableClick", true)("ngModel", ctx.time)("ngStyle", ctx.valueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("for", _r0);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.DefaultValueAccessor, ɵngcc2.RequiredValidator, ɵngcc8.TimepickerDirective, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc8.NgxMaterialTimepickerComponent, ɵngcc8.ɵc], styles: ["[_nghost-%COMP%] {\n\t\t--c-width: 645px;\n\t\t--c-height: 25px;\n\t\t--label-left: 10px;\n\t\t--label-top: 0px;\n\t\t--value-left: 10px;\n\t\t--value-top: 0px;\n\t}\n\t\n\t\n\t.position-relative[_ngcontent-%COMP%] {\n\t\tposition: relative;\n\t\twidth: var(--c-width) !important;\n\t}\n\t.input-field[_ngcontent-%COMP%] {\n\t\tborder: 1px solid #dee2e6;\n\t\tborder-radius: 2px;\n\t\tmin-height: var(--c-height) !important;\n\t\theight: auto;\n\t}\n\t\n\t.form-control[_ngcontent-%COMP%] {\n\t\tdisplay: block;\n\t\tpadding-top: 0.375rem;\n\t\tpadding-right: 0.75rem;\n\t\tpadding-bottom: 0.375rem;\n\t\tpadding-left: var(--value-left);\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5;\n\t\tcolor: #495057;\n\t\tbackground-color: #fff;\n\t\tbackground-clip: padding-box;\n\t\tborder: none;\n\t\tmin-height: var(--c-height) !important;\n\t\ttransition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n\t}\n\t.form-control[_ngcontent-%COMP%] {\n\t\tbackground-color: inherit;\n\t\tbox-shadow: none !important;\n\t}\n\t.signal-line[_ngcontent-%COMP%]{\n\t\tborder-top: none !important;\n\t\tborder-left: none !important;\n\t\tborder-right: none !important;\n\t\tborder-radius: 0px !important;\n\t}\n\t\n\t.label[_ngcontent-%COMP%]{\n\t\tposition: absolute; \n\t\ttop: -24px;\n\t\tleft: 0px; \n\t\tfont-size: 12px;\n\t\tpadding: 0px !important;\n        text-align: left;\n\t}\n\t.float-group[_ngcontent-%COMP%] {\n\t\tposition: relative;\n\t\tpadding: 14px 24px 2px 0px;\n\t}\n\t.float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n\t\tpadding-top: var(--value-top);\n\t\tpadding-right: 0px;\n\t\tpadding-bottom: 0px;\n\t\tpadding-left: var(--value-left);\n\t}\n\t.float-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n\t\tfont-size: 12px;\n\t\tfont-weight: normal;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tleft: var(--label-left);\n\t\ttransition: all 200ms;\n\t\topacity: 1;\n\t\tmargin: 0;\n\t\twidth: 87%;\n\t\theight: auto;\n\t}\n\t.float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n\t\toutline: none !important;\n\t\tbox-shadow: none;\n\t}\n\t.float-group-static[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n\t\tfont-size: 9px;\n\t\tfont-weight: bold !important;  \n\t\tposition: absolute;\n\t\ttop: var(--label-top);\n\t\tleft: var(--label-left);\n\t\ttransform: translateY(0px);\n\t\ttransition: all 200ms;\n\t\topacity: 1;\n\t\tmargin: 0;\n\t\twidth: 87%;\n\t\theight: auto;\n\t}\n\t\n\t.float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .float-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%] {\n\t\tfont-size: 9px;\n\t\tfont-weight: bold !important;  \n\t\tposition: absolute;\n\t\ttop: var(--label-top);\n\t\tleft: var(--label-left);\n\t\ttransform: translateY(0px);\n\t\ttransition: all 200ms;\n\t\topacity: 1;\n\t\tmargin: 0;\n\t\twidth: 87%;\n\t\theight: auto;\n\t}\n\tngx-material-timepicker-toggle[_ngcontent-%COMP%] {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tright: 2px;\n\t\ttransform: translateY(-50%)\n\t}"] });
DatetimepickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], DatetimepickerComponent.prototype, "time", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "name", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "width", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "label", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "style", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "staticStyle", void 0);
__decorate([
    Output()
], DatetimepickerComponent.prototype, "getvalue", void 0);

let TimepickerModule = class TimepickerModule {
};
TimepickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TimepickerModule });
TimepickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); }, imports: [[
            CommonModule,
            NgbModule.forRoot(),
            FormsModule,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
            NgxMaterialTimepickerModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-checkbox',
                template: `
  <div class="position-relative">
	<div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle}"
	 [ngStyle]="borderStyle">
		<div class="checkbox">
			<input type="checkbox" [(ngModel)]="value" [name]="name" (change)="onChange($event)" [id]="name">
			<label class="label1" [for]="name"></label>
			<div class="vlabel" [ngStyle]="valueStyle">{{label}}</div>
		</div>
		<label class="label" [ngStyle]="style">{{labeltext}}</label>
	</div>
  </div>
  `,
                styles: [`
  :host {
    --c-width: 645px;
    --c-height: 25px;
    --checkbox-width: 20px;
    --checkbox-height: 20px;
    --checkbox-tick-size: 10px;
    --checkbox-border-width: 1px;
    --checkbox-border-radius: 4px;
    --checkbox-border-color: #D5DBE0;
    --checkbox-background-checked: #348fe2;
    --checkbox-background-unchecked:#D5DBE0;
    --check-color: #ffffff;
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
    border: 1px solid #dee2e6;
    border-radius: 2px;
    width: var(--c-width) !important;
    min-height: var(--c-height) !important;
    height: auto;
  }
  .vlabel{
    line-height: var(--checkbox-height);
    vertical-align: top;
    margin-left: 5px;
    margin-right: 10px;
    display: inline-block;
  }
  .checkbox input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    left: -9999px;
  }
  .checkbox{
    display: block;
    padding-top: 8px;
    padding-right: 0.75rem;
    padding-bottom: 4px;
    padding-left: var(--value-left);
    min-height: var(--c-height) !important;
  }
  .checkbox label {
    position: relative;
    display: inline-block;
    width: var(--checkbox-width);
    height: var(--checkbox-height);
  }
  .checkbox label::before,
  .checkbox label::after {
    position: absolute;
    content: "";
    display: inline-block;
  }
  .checkbox label::before{
      height: var(--checkbox-height);
      width: var(--checkbox-width);
      border: 1px solid #D5DBE0;
      border-radius: var(--checkbox-border-radius);
      border-width: var(--checkbox-border-width)  !important;
      border-color: var(--checkbox-border-color) !important;
      left: 0px;
      background: var(--checkbox-background-unchecked);
  }
  input[type="checkbox"]:checked + label:before {
    /*background: var(--checkbox-background-checked);
    border: 1px solid;
    border-radius: var(--checkbox-border-radius);
    border-width: var(--checkbox-border-width)  !important;
    border-color: var(--checkbox-border-color) !important;
    text-align: center;*/
    content: "✓";
    font-size: 24px;
    line-height: 0.6;
    color: #6ba238;
    transition: all .2s;
    font-family: Arial;
    font-weight: bolder;
  }
  .checkbox input[type="checkbox"]:checked + label::after {
      transform: translate(-50%,-50%);
      left: 50%;
      top: 50%;
      color: var( --check-color);
      position: absolute;
      content: "\f00c" !important;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      display: inline-block;
      font-size: var(--checkbox-tick-size);
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
  }
  .checkbox input[type="checkbox"] + label::after {
    content: none;
  }
  .checkbox input[type="checkbox"]:checked + label::after {
    content: "";
  }
  .signal-line{
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0px !important;
  }
  .label1{
    margin-bottom: 0px !important;
  }
  .label {
    position: absolute;
    top: -24px;
    left: 0px; 
    font-size: 12px;
    transition: all 0.1s;
  }
  .float-group {
    position: relative;
    padding: 14px 24px 0px 0px;
  }
  .float-group .checkbox {
      padding-top: var(--value-top);
      padding-right: 0px;
      padding-bottom: 0px;
      padding-left: var(--value-left);
  }
  .float-group .label {
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { value: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], name: [{
            type: Input
        }], label: [{
            type: Input
        }], labeltext: [{
            type: Input
        }], style: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], checkboxStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CheckboxModule, { declarations: function () { return [CheckboxComponent]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [CheckboxComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CheckboxModule, [{
        type: NgModule,
        args: [{
                declarations: [CheckboxComponent],
                imports: [
                    CommonModule, FormsModule
                ],
                exports: [CheckboxComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SwitchComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-switch',
                template: `
  <div class="position-relative">
  <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle}"
    [ngStyle]="borderStyle">
    <div class="form-ctr">
      <label class="switch">
        <input type="checkbox" [(ngModel)]="isChecked" 
        (change)="onChange($event)" id="togBtn">
        <div class="slider round">
          <span class="on" [ngStyle]="valueStyle">{{switchStyles?.labelChekecd}}</span>
          <span class="off" [ngStyle]="valueStyle">{{switchStyles?.labelUnChekecd}}</span>
        </div>
      </label>
      <label class="label" [ngStyle]="labelStyle">{{label}}</label>
    </div>
  </div>
  </div>
  `,
                styles: [`
  :host {
    --c-width: 645px;
    --c-height: 25px;
    --switch-width: 70px;
    --switch-height: 34px;
    --switch-height: 34px;
    --switch-ball-size: 26px;
    --switch-border-width: 0px;
    --switch-border-radius: 34px;
    --switch-border-color: #D5DBE0;
    --switch-background-checked: #348fe2;
    --switch-background-unchecked:#D5DBE0;
    --switch-color: #ffffff;
    --switch-radius: 34px;
    --switch-transformx: 35px;
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
    border: 1px solid #dee2e6;
    border-radius: 2px;
    width: var(--c-width) !important;
    min-height: var(--c-height) !important;
    height: auto;
}
.switch {
    position: relative;
    display: inline-block;
    width: var(--switch-width);
    height: var(--switch-height);
}
.switch input {
    display:none;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--switch-background-unchecked);
    -webkit-transition: .4s;
    transition: .4s;
}
.slider:before {
    position: absolute;
    content: "";
    height: var(--switch-ball-size);
    width: var(--switch-ball-size);
    left: 4px;
    bottom: 4px;
    background-color: var(--switch-color);
    -webkit-transition: .4s;
    transition: .4s;
}
input:checked + .slider {
    background-color: var(--switch-background-checked);
}
input:focus + .slider {
    box-shadow: 0 0 1px var(--switch-background-checked);
}
input:checked + .slider:before {
    -webkit-transform: translateX(var(--switch-transformx));
    -ms-transform: translateX(var(--switch-transformx));    
    transform: translateX(var(--switch-transformx));
}  
.on{
    display: none;
}
.on{
    color: var(--switch-color);
    position: absolute;
    transform: translate(-60%,-50%);
    top: 50%;
    left: 40%;
    font-size: 10px;
    font-family: Verdana, sans-serif;
}
.off{
    color: var(--switch-color);
    position: absolute;
    transform: translate(-40%,-50%);
    top: 50%;
    left: 60%;
    font-size: 10px;
    font-family: Verdana, sans-serif;
}
input:checked+ .slider .on{
    display: block;
}
input:checked + .slider .off{
    display: none;
}
.slider.round {
    border-radius: var(--switch-border-radius);
    border-width: var(--switch-border-width) !important;
    border-color: var(--switch-border-color) !important;
    border: 1px solid;
}
.slider.round:before {
    border-radius: var(--switch-radius);
}
.form-ctr{
    display: block;
    padding-top: 8px;
    padding-right: 0.75rem;
    padding-bottom: 3px;
    padding-left: var(--value-left);
    min-height: var(--c-height) !important;
}
.signal-line{
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0px !important;
}
label{
    margin-bottom: 0px !important;
}
.label {
    position: absolute;
    top: -24px;
    left: 0px; 
    font-size: 12px;
    transition: all 0.1s;
}
.float-group {
    position: relative;
    padding: 14px 24px 0px 0px;
}
.float-group .form-ctr {
    padding-top: var(--value-top);
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: var(--value-left);
}
.float-group .label {
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { isChecked: [{
            type: Input
        }], isBorderStyle: [{
            type: Input
        }], toggleStyle: [{
            type: Output
        }], labelText: [{
            type: Input
        }], label: [{
            type: Input
        }], switchStyles: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], labelStyle: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SwitchModule, { declarations: function () { return [SwitchComponent]; }, imports: function () { return [CommonModule,
        NgbModule,
        FormsModule]; }, exports: function () { return [SwitchComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SwitchModule, [{
        type: NgModule,
        args: [{
                declarations: [SwitchComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    FormsModule
                ],
                exports: [SwitchComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-radio',
                template: `
    <div class="position-relative">
    <div class="input-field"  
      [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle}"
      [ngStyle]="borderStyle" >
      <div class="radio">
        <div *ngFor="let data of jsonData;let i=index" [ngClass]="{'dis-inline': radioStyle?.isInline , 'dis-block': !radioStyle?.isInline}">
          <input *ngIf="data.disabled == undefined || data.disabled == null || data.disabled == '' || data.disabled == false" type="radio" id="{{id}}-{{i}}" name="{{id}}-{{i}}"  [value]="data.value" [(ngModel)]="value" (change)="changeevt1(value)">
          <input *ngIf="data.disabled != undefined || data.disabled != null || data.disabled != '' || data.disabled == true" type="radio" id="{{id}}-{{i}}" name="{{id}}-{{i}}"  [value]="data.value" [(ngModel)]="value" (change)="changeevt1(value)" disabled>
          <label for="{{id}}-{{i}}" class="clabel"></label>
          <label for="{{id}}-{{i}}" [ngStyle]="valueStyle" class="vlabel">{{data.name}}</label>
        </div>
      </div>
      <label class="label" [ngStyle]="labelStyle">{{label?label:'Label Name'}}</label>
    </div>
    </div>
    `,
                styles: [`
    /* css variable */
    :host {
        --c-width: 645px;
        --c-height: 25px;
        --radio-width: 20px;
        --radio-height: 20px;
        --radio-border-width: 1px;
        --radio-border-color: #D5DBE0;
        --radio-background: #348fe2;
        --radio-background-unchecked: #D5DBE0;
        --label-left: 10px;
        --label-top: 0px;
        --value-left: 10px;
        --value-top: 0px;
    }
    /* radio css */
    .clabel {
        position: relative;
        cursor: pointer;
        width: var(--radio-width);
        height: var(--radio-height);
        line-height: 20px;
        display: inline-block;
        color: #666;
        margin-bottom: 0px;
    }
    .vlabel{
        line-height: var(--radio-height);
        vertical-align: top;
        margin-left: 5px;
        margin-right: 10px;
        margin-bottom: 0px;
    }
    .dis-inline{
        display: inline-block;
    }
    .dis-block{
        display: block;
    }
    .radio{
        display: block;
        padding-top: 8px;
        padding-right: 0.75rem;
        padding-bottom: 4px;
        padding-left: var(--value-left);
        min-height: var(--c-height) !important;
    }
    [type="radio"]:checked, [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }
    [type="radio"]:checked+label.clabel:before, [type="radio"]:not(:checked)+label.clabel:before {
        content: '';
        position: absolute;
        left: 0;
        top: 1px;
        width: var(--radio-width);
        height: var(--radio-height);
        border-width: var(--radio-border-width) !important;
        border-color: var(--radio-border-color) !important;
        border:1px solid;
        border-radius: 100%;
        background: var(--radio-background-unchecked);
    }
    [type="radio"]:checked+label.clabel:after, [type="radio"]:not(:checked)+label.clabel:after {
        content: '';
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        position: absolute;
        top: 5px;
        left: 4px;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        font-size: 10px;
        color: #fff
    }
    [type="radio"]:not(:checked)+label.clabel:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    [type="radio"]:checked+label.clabel:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    [type="radio"]:checked+label.clabel::before {
        background-color: var(--radio-background);
        border-width: var(--radio-border-width) !important;
        border-color: var(--radio-border-color) !important;
        border:1px solid;
        border-radius: 100%;
    }
    /* box css */
    .position-relative {
        position: relative;
    }
    .input-field {
        border: 1px solid #dee2e6;
        border-radius: 2px;
        width: var(--c-width) !important;
        min-height: var(--c-height) !important;
        height: auto;
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
        transition: all 0.1s;
    } 
    .float-group {
        position: relative;
        padding: 14px 24px 0px 0px;
    } 
    .float-group .radio {
        padding-top: var(--value-top);
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: var(--value-left);
    }
    .float-group .label {
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { radioChangeHandler: [{
            type: Output
        }], id: [{
            type: Input
        }], jsonData: [{
            type: Input
        }], value: [{
            type: Input
        }], label: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], labelStyle: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], radioStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RadioModule, { declarations: function () { return [RadioComponent]; }, imports: function () { return [CommonModule,
        FormsModule]; }, exports: function () { return [RadioComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioModule, [{
        type: NgModule,
        args: [{
                declarations: [RadioComponent],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [RadioComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-text',
                template: `
    <div class="position-relative">
    <div class="input-field" 
        [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
        [ngStyle]="borderStyle">
        <input *ngIf="!readOnly" id="{{name}}" 
               name="{{name}}" 
               class="form-control" 
               [type]="type"
               [attr.maxlength]="maxlength"
               [patterns]="patterns" 
               [shownMaskExpression]="expression"
               [mask]="maskType" 
               [showMaskTyped]="showMask"
               [(ngModel)]="value"
               (focus)= "onEndfocus($event)"
               [ngStyle]="valueStyle"
               (blur)="onBlur($event)" 
               (keyup)="getValue($event)"
               (keypress)="keyPress($event)" required>
        <input *ngIf="readOnly" id="{{name}}" 
               name="{{name}}" 
               class="form-control" 
               [type]="type"
               [attr.maxlength]="maxlength"
               [patterns]="patterns" 
               [shownMaskExpression]="expression"
               [mask]="maskType" 
               [showMaskTyped]="showMask"
               [(ngModel)]="value"
               (focus)= "onEndfocus($event)"
               [ngStyle]="valueStyle"
               (blur)="onBlur($event)" 
               (keyup)="getValue($event)"
               (keypress)="keyPress($event)" required readonly>
        <label for="{{name}}" 
               class="label" 
               [ngStyle]="style">
               {{ label }}
        </label>
    </div>
</div>
    `,
                styles: [`
    /* css variable */
    :host {
        --c-width: 645px;
        --c-height: 25px;
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
        border: 1px solid #dee2e6;
        border-radius: 2px;
        width: var(--c-width) !important;
        min-height: var(--c-height) !important;
        height: auto;
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
        min-height: var(--c-height) !important;
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
    .label{
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



    .float-group-static .label {
        font-size: 9px;
        font-weight: bold !important;
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
    .float-group .form-control:focus {
        outline: none !important;
        box-shadow: none;
    }
    
    .float-group .form-control:focus + label,
    .float-group .form-control:valid + label {
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { type: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], showMask: [{
            type: Input
        }], value: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], onlyText: [{
            type: Input
        }], noPutCharacter: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], onblur: [{
            type: Output
        }], name: [{
            type: Input
        }], maskType: [{
            type: Input
        }], patterns: [{
            type: Input
        }], expression: [{
            type: Input
        }], label: [{
            type: Input
        }], fixValue: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], style: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], inputStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TextModule, { declarations: function () { return [TextComponent]; }, imports: function () { return [CommonModule,
        NgbModule, ɵngcc3.NgxMaskModule, FormsModule]; }, exports: function () { return [TextComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextModule, [{
        type: NgModule,
        args: [{
                declarations: [TextComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    NgxMaskModule.forRoot(),
                    FormsModule
                ],
                exports: [TextComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TagInputComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-tag',
                template: `
    <div class="position-relative">
        <textarea row="3"  id="{{name}}" class="cus-textarea" placeholder="Type and press enter" name="{{name}}" (keyup.enter)="onEnterClick()"  [(ngModel)]="value" ></textarea>
    </div>
    `,
                styles: [`
        .position-relative {
            position: relative;
        }
        .cus-textarea {
            width: 100% !important;
            padding-left: 7px;
        }
    `]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { value: [{
            type: Input
        }], name: [{
            type: Input
        }], onEnter: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TagInputModule, { declarations: function () { return [TagInputComponent]; }, imports: function () { return [CommonModule,
        FormsModule]; }, exports: function () { return [TagInputComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TagInputModule, [{
        type: NgModule,
        args: [{
                declarations: [TagInputComponent],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [TagInputComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextareaComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { staticStyle: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], onblur: [{
            type: Output
        }], value: [{
            type: Input
        }], name: [{
            type: Input
        }], row: [{
            type: Input
        }], column: [{
            type: Input
        }], label: [{
            type: Input
        }], maxLenght: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], style: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], inputStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TextareaModule, { declarations: function () { return [TextareaComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TextareaComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextareaModule, [{
        type: NgModule,
        args: [{
                declarations: [TextareaComponent],
                imports: [
                    CommonModule
                ],
                exports: [TextareaComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UpdownComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-updown',
                template: `
  <div class="position-relative">
  <div class="input-field" 
    [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
    [ngStyle]="borderStyle">
    <input 
        type="number" 
        [(ngModel)]="initialValue" 
        [ngStyle]="valueStyle"
        (blur)="onBlurMethod()"
        [style.text-align]="textAlign"
        class="form-control" required>
    <div class="numberSpinner">
      <a href="javascript:void(0)" (click)="increaseValue()" class="spinnerBtn">
        <i class="fa fa-caret-up"></i>
      </a>
      <a href="javascript:void(0)" (click)="decreaseValue()" class="spinnerBtn">
        <i class="fa fa-caret-down"></i>
      </a>
    </div>
    <label *ngIf="isLabel" [ngStyle]="style" class="label">{{label}}</label>
  </div>
</div>
  `,
                styles: [`
  /* css variable */
  :host {
      --c-width: 100%;
      --c-height: 25px;
      --label-left: 10px;
      --label-top: 0px;
      --value-left: 10px;
      --value-top: 0px;
  }
  /* box css */
  .position-relative {
      position: relative;
      width: var(--c-width) !important;
  }
  .input-field {
      border: 1px solid #dee2e6;
      border-radius: 2px;
      min-height: var(--c-height) !important;
      height: auto;
  }
  /* control css */
  .form-control {
      display: block;
      padding-top: 0.375rem;
      padding-right: var(--value-left);
      padding-bottom: 0.375rem;
      padding-left: 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: none;
      text-align: right;
      min-height: var(--c-height) !important;
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
  .label{
      position: absolute; 
      top: -24px;
      left: 0px; 
      font-size: 12px;
      padding: 0px !important;
        text-align: left;
  }
  .float-group {
      position: relative;
      padding: 14px 7px 2px 0px;
  }
  .float-group .form-control {
      padding-top: var(--value-top);
      padding-right: var(--value-left);
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
  .float-group .form-control:focus {
      outline: none !important;
      box-shadow: none;
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
  .float-group .form-control:focus-within ~ .label,.float-group .form-control:valid ~ .label {
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
  
  .numberSpinner {
      display: inline-flex;
      flex-direction: column;
      position: absolute;
      right: 0px;
      top: 0px;
      bottom: 0px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      overflow: hidden;
      z-index: 1;
  }
  .spinnerBtn {
      background: #f1f1f1;
      border: none;
      font-size: 14px;
      color: initial;
      padding: 0 7px;
      display: flex;
      height: 50%;
      align-items: center;
      justify-content: center;
  }
  .spinnerBtn:active {
      color: #fff;
      background: #666666!important;
  }
  .spinnerBtn:hover {
      background: #d1d1d1;
      text-decoration: none;
  }
  input[type=number]::-webkit-inner-spin-button{
      opacity: 0;
      font-size: 14px
  } 
  `]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { initialValue: [{
            type: Input
        }], isNagative: [{
            type: Input
        }], textAlign: [{
            type: Input
        }], isLabel: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], switchStyle: [{
            type: Input
        }], label: [{
            type: Input
        }], style: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(UpdownModule, { declarations: function () { return [UpdownComponent]; }, imports: function () { return [CommonModule,
        NgbModule,
        FormsModule]; }, exports: function () { return [UpdownComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UpdownModule, [{
        type: NgModule,
        args: [{
                declarations: [UpdownComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    FormsModule
                ],
                exports: [UpdownComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColorPickerComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-colorpicker',
                template: `
  <div class="color-picker position-relative">
  <div class="input-field" 
       [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle ,'float-group-static': staticStyle}"
       [ngStyle]="borderStyle"
       >
    <input 
        type="text" 
        name="color" 
        class="form-control"
        [ngStyle]="valueStyle"
        [value]="color"
        required>
        <span (click)="toggleColors()" class="icon"  [style.background]="color"></span>
    <label *ngIf="isLabel" 
          [ngStyle]="style" 
          class="label">
          {{label}}
    </label>
  </div>
  <div *ngIf="show" class="opened">
    <div class="colors">
      <div (click)="changeColor(paint)" *ngFor="let paint of defaultColors" class="circle"
      [ngStyle]="{'background': paint}"></div>
    </div> 
  </div>
  </div>
  `,
                styles: [`
  :host {
    --c-width: 100%;
    --c-height: 25px;
    --label-left: 10px;
    --label-top: 0px;
    --value-left: 10px;
    --value-top: 0px;
}
.color-picker .circle {
    height: 19px;
    width: 19px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #fff;
    margin: 0;
    padding: 0;
    cursor: pointer;
}
.color-picker .opened {
    box-shadow: 0 7px 13px 0 rgba(86, 95, 102, 0.07);
    background: #fff;
    max-width: 164px;
    padding: 1px;
    z-index: 99;
    border-radius: 5px;
    position: absolute;
    margin-top: 5px;
    right: 0px;
}
.color-picker .opened .colors {
    display: flex;
    flex-wrap: wrap;
}
.color-picker .opened .colors .circle {
    flex: 20px 0 0;
}
.color-picker .opened .colors .circle:nth-child(5n) {
    margin-right: 0;
}
.color-picker .opened .hex-code {
    display: flex;
    margin-top: 20px;
}
.color-picker .opened .hex-code p {
    width: 50%;
    text-align: center;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    line-height: 45px;
}
.color-picker .opened .hex-code .g-input {
    border: 1px solid #e8ebed;
    height: 45px;
    border-radius: 5px;
    width: 120px;
}
.color-picker .opened .hex-code .g-input input {
    border: none;
    width: 100%;
    text-transform: uppercase;
    outline: none;
    text-align: center;
    letter-spacing: 1.5px;
    color: #595b65;
    height: 100%;
    border-radius: 2px;
    margin: 0;
    padding: 0;
}
.color-picker .colorpicker {
    position: relative;
    border-radius: 3px;
    width: 100%;
    border: 1px solid #c3c0c0;
}
.color-picker .icon {
    position: absolute;
    background: #ccc;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    right: 9px;
    border-radius: 3px;
}
.color-picker .text-black-lighter {
    color: #404040 !important;
}
/* box css */
.position-relative {
    position: relative;
    width: var(--c-width) !important;
}
.input-field {
    border: 1px solid #dee2e6;
    border-radius: 2px;
    min-height: var(--c-height) !important;
    height: auto;
}
/* Control Css */
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
    min-height: var(--c-height) !important;
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
/* label css */
.label{
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
.float-group .form-control:focus {
    outline: none !important;
    box-shadow: none;
}
.float-group .form-control:focus-within ~ .label,.float-group .form-control:valid ~ .label {
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { color: [{
            type: Input
        }], isLabel: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], event: [{
            type: Output
        }], selectedColor: [{
            type: Output
        }], heading: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], label: [{
            type: Input
        }], style: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ColorPickersModule, { declarations: function () { return [ColorPickerComponent]; }, imports: function () { return [CommonModule, FormsModule, ColorPickerModule]; }, exports: function () { return [ColorPickerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColorPickersModule, [{
        type: NgModule,
        args: [{
                declarations: [ColorPickerComponent],
                imports: [
                    CommonModule, FormsModule, ColorPickerModule
                ],
                exports: [ColorPickerComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatepickerComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-datepicker',
                template: `
  <div class="position-relative" id="topdiv-{{name}}">
  <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
    [ngStyle]="borderStyle">
    <input *ngIf="!readOnly"
      [(ngModel)]="value"  
      [id]="name" 
      [name]="name"
      [owlDateTime]="dt3" 
      class="form-control"
      (dateTimeInput)="getValue($event)"
      (blur)="onBlurMethod()"
      [ngClass]="{'valid':value}" 
      [ngStyle]="valueStyle"
      required>
    <input *ngIf="readOnly"
      [(ngModel)]="value"  
      [id]="name" 
      [name]="name"
      [owlDateTime]="dt4" 
      class="form-control"
      (dateTimeInput)="getValue($event)"
      (blur)="onBlurMethod()"
      [ngClass]="{'valid':value}" 
      [ngStyle]="valueStyle"
      required readOnly>
    <label class="label" [for]="name" [ngStyle]="style">{{ label }}</label>
    <owl-date-time [pickerType]="'calendar'" [startAt]="value" #dt3></owl-date-time>
    <owl-date-time [pickerType]="'calendar'" [startAt]="value" #dt4></owl-date-time>
    <button *ngIf="!readOnly" [owlDateTimeTrigger]="dt3" (click)="clk()" class="btn btn-link icon" type="button"></button>
    <button *ngIf="readOnly" (click)="clk()" class="btn btn-link icon" type="button" disabled></button>
  </div>
  </div>
  `,
                styles: [`
  /* Css Variable */
  :host {
    --c-width: 645px;
    --c-height: 25px;
    --label-left: 10px;
    --label-top: 0px;
    --value-left: 10px;
    --value-top: 0px;
  }
  /* box css */
  .position-relative {
    position: relative;
    width: var(--c-width) !important;
  }
  .input-field {
    border: 1px solid #dee2e6;
    border-radius: 2px;
    min-height: var(--c-height) !important;
    height: auto;
  }
  /* Control Css */
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
    min-height: var(--c-height) !important;
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
  
  /* Label Css */
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
  .float-group .form-control:focus {
    outline: none;
    box-shadow: none;
  }
  .float-group .form-control:focus + .label,
  .float-group .form-control:valid + .label{
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
  /* Button Css */
  button.icon,button.icon:active {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;
    width: 25px;
    height: 23px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
    position: absolute;
    right: 7px;
    top: 8px;
  }
  .float-group button.icon,.float-group button.icon:active { 
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .btn-link {
    font-weight: 400;
    color: #007bff;
    background-color: transparent;
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
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out
    ,box-shadow .15s ease-in-out;
  }
  .btn.btn-link:hover, .btn.btn-link:focus {background-size: cover !important;background-position: center !important;}  
  `]
            }]
    }], function () { return [{ type: ɵngcc4.NgbCalendar }, { type: ɵngcc0.ElementRef }]; }, { staticStyle: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], width: [{
            type: Input
        }], value: [{
            type: Input
        }], format: [{
            type: Input
        }], name: [{
            type: Input
        }], label: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], style: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], fieldStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], isChecked: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DatepickerModule, { declarations: function () { return [DatepickerComponent]; }, imports: function () { return [CommonModule,
        NgbModule,
        FormsModule,
        NgxMaskModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        NgxMaterialTimepickerModule]; }, exports: function () { return [DatepickerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatepickerModule, [{
        type: NgModule,
        args: [{
                declarations: [DatepickerComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    FormsModule,
                    NgxMaskModule,
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule,
                    NgxMaterialTimepickerModule
                ],
                exports: [DatepickerComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DaterangepickerComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-daterangepicker',
                template: `
  <div class="position-relative" id="topdiv-{{name}}">
  <div class="input-field"
  [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}" 
  [ngStyle]="borderStyle">
      <input 
        [value]="value" 
        [name]="name" 
        [owlDateTime]="dtRange1" 
        [selectMode]="'range'" 
        [rangeSeparator]="','"
        (dateTimeInput)="emitValue(getRangeVal)" 
        class="form-control ctrtext" #getRangeVal required>
      <input type="text"
        [value]="value" 
        [name]="name" 
        class="form-control" 
        [ngStyle]="valueStyle">
      <span class="dateSeprator">to</span>
      <input 
        type="text" 
        [value]="fromValue"
        [name]="name" 
        class="form-control"
        [ngStyle]="valueStyle">
      <owl-date-time [pickerType]="'calendar'" #dtRange1 [startAt]="value"></owl-date-time>
      <button [owlDateTimeTrigger]="dtRange1" (click)="clk()" class="btn btn-link icon" type="button"></button>
      <label class="label" [ngStyle]="style">{{ label }}</label>
    </div>
  </div>
  `,
                styles: [`
  /* css variable */
  :host {
    --c-width: 645px;
    --c-height: 25px;
    --label-left: 10px;
    --label-top: 0px;
    --value-left: 10px;
    --value-top: 0px;
  }
  /* box css */
  .position-relative {
    position: relative;
    width: var(--c-width) !important;
  }
  .input-field {
    border: 1px solid #dee2e6;
    border-radius: 2px;
    min-height: var(--c-height) !important;
    height: auto;
    display: flex;
  }
  .ctrtext {
    position: absolute;
    z-index: -1;
    opacity: 0
  }
  /* control css */
  .form-control {
    display: block;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: none;
    width: 13%;
    min-height: var(--c-height) !important;
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
  /* label css */
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
  .float-group .form-control:focus {
    outline: none;
    box-shadow: none;
  }
  .float-group-static .label {
    font-size: 9px;
    font-weight: bold !important; 
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
  
  .dateSeprator {
    display: inline-flex;
    min-width: 30px;
    color: #2d353c;
    font-weight: 400;
    font-size: 14;
    line-height: 1;
    justify-content: center;
    align-items: center
  }
  
  .float-group .dateSeprator {
    display: block;
    min-width: 30px;
    color: #2d353c;
    font-weight: 400;
    font-size: 14;
    line-height: 1.5;
    justify-content: center;
    text-align: center;
    padding-top: var(--value-top);
  }
  
  /* .calenderContainer .form-control:focus + .label,
  .calenderContainer .form-control:valid + .label,
  .calenderContainer .form-control[ng-reflect-model] +  .label,
  .calenderContainer .form-control[aria-owns] +  .label{
    font-size: 9px;
    font-weight: bold !important; 
    position: absolute;
    top: var(--label-top);
    left: var(--label-left);
    transform: translateY(0px);
    transition: all 200ms;
    opacity: 1;
    margin: 0;
    width: 87%;
    height: auto;
  } */
  /* button css */
  button.icon, button.icon:active {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;
    width: 25px;
    height: 23px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
    position: absolute;
    right: 7px;
    top: 8px;
  }
  .float-group button.icon, button.icon:active {
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .btn-link {
    font-weight: 400;
    color: #007bff;
    background-color: transparent;
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
  }
  .btn.btn-link:hover, .btn.btn-link:focus {background-size: cover !important;background-position: center !important;}
  `]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { staticStyle: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], value: [{
            type: Input
        }], fromValue: [{
            type: Input
        }], width: [{
            type: Input
        }], format: [{
            type: Input
        }], name: [{
            type: Input
        }], label: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], style: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DaterangepickerModule, { declarations: function () { return [DaterangepickerComponent]; }, imports: function () { return [CommonModule,
        NgbModule,
        FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        NgxMaterialTimepickerModule]; }, exports: function () { return [DaterangepickerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DaterangepickerModule, [{
        type: NgModule,
        args: [{
                declarations: [DaterangepickerComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    FormsModule,
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule,
                    NgxMaterialTimepickerModule,
                ],
                exports: [DaterangepickerComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NumericComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-numeric',
                template: `<div class="position-relative">
    <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': 

signalStyle,'float-group-static': staticStyle}"
        [ngStyle]="borderStyle">
        <input class="form-control" currencyMask 
            [(ngModel)]="value" 
            [options]="options" 
            [ngStyle]="valueStyle" 
            [disabled]="readOnly"
            (click)="clickEvent(value)" 
            (keyup)="getValue($event)" 
            (blur)="onBlur($event)" 
            id="{{name}}" 
            name="{{name}}" required>
        <label for="{{name}}" class="label" [ngStyle]="style">
            {{ label }}
        </label>
    </div>
	</div>
	`,
                styles: [`
	:host{--c-width:645px;--c-height:25px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:0px;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.form-control{display:block;padding-top:0.375rem;padding-right:var(--value-left);padding-bottom:0.375rem;padding-left:0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;text-align:right;min-height:var(--c-height) !important;transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;}
	.form-control{background-color:inherit;box-shadow:none !important;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;text-align: left;}
	.float-group{position:relative;padding:14px 0px 2px 24px;}
	.float-group .form-control{padding-top:var(--value-top);padding-right:var(--value-left);padding-bottom:0px;padding-left:var(--value-left);}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, .float-group .label {
            top: 0%!important;
            transform: translateY(50%);
        }
	}
	
	.float-group .form-control:focus{outline:none !important;box-shadow:none;}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.float-group .form-control:focus + label,.float-group .form-control:valid + label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.readOnly{pointer-events:none;opacity:0.7;}	
	`]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { name: [{
            type: Input
        }], value: [{
            type: Input
        }], label: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], onblur: [{
            type: Output
        }], jsonData: [{
            type: Input
        }], options: [{
            type: Input
        }], style: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NumericModule, { declarations: function () { return [NumericComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        NgxCurrencyModule]; }, exports: function () { return [NumericComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NumericModule, [{
        type: NgModule,
        args: [{
                declarations: [NumericComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    NgxCurrencyModule
                ],
                exports: [NumericComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-select',
                template: `
    <div class="position-relative">
        <div class="input-field" [ngStyle]="borderStyle" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}">
            <ng-select *ngIf="!swGroupBy" [items]="listValue" bindLabel="name" [clearable]="clearable" [disabled]="disabled" bindValue="id" (change)="getselectvalue($event)"
                [(ngModel)]="value"   (open)="onOpen()" (close)="onClose()" [multiple]="multiple">
            </ng-select>
            <ng-select *ngIf="swGroupBy" [items]="listValue" bindLabel="name" [clearable]="clearable" [disabled]="disabled" bindValue="id" (change)="getselectvalue($event)"
                [(ngModel)]="value"   (open)="onOpen()" (close)="onClose()" groupBy="group" [multiple]="multiple">
                <ng-template ng-optgroup-tmp let-item="item">
                    {{item.group}}
                </ng-template>
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
    .label{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;
        text-align: left;}
    .z-9999{z-index:9999;}
    .float-groupdd .label{position:absolute;top:-24px;left:0px;font-size:12px;}
    .float-group{position:relative;padding:14px 2px 0px 0px;}
    .float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}
    

    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, .float-group .label {
            top: 0%!important;
            transform: translateY(50%);
        }
    }
    
    .float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
    :host /deep/ .ng-select .ng-select-container{border:none !important;}
    :host /deep/ .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}
    :host /deep/ .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}
    :host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}
    `]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { id: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], clearable: [{
            type: Input
        }], listValue: [{
            type: Input
        }], value: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], swGroupBy: [{
            type: Input
        }], multiple: [{
            type: Input
        }], selectvalue: [{
            type: Output
        }], style: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SelectModule, { declarations: function () { return [SelectComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        NgSelectModule]; }, exports: function () { return [SelectComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectModule, [{
        type: NgModule,
        args: [{
                declarations: [SelectComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    NgSelectModule
                ],
                exports: [SelectComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatetimepickerComponent, [{
        type: Component,
        args: [{
                selector: 'sml-input-timepicker',
                template: `
	<div class="position-relative">
	<div class="input-field" 
	  [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
	  [ngStyle]="borderStyle">
	  <input
	  	class="form-control" 	
	  	[id]="name"
      	[name]="name"
		[ngxTimepicker]="picker"
		[disableClick]="true"
		[(ngModel)]="time"
		(ngModelChange)="selectChanged($event)"
		(blur)="onBlurMethod()"
		[ngStyle]="valueStyle"
		style="text-transform: uppercase;"
		required>
	  <label class="label" [ngStyle]="style">{{ label }}</label>
	  <ngx-material-timepicker #picker></ngx-material-timepicker>
	  <ngx-material-timepicker-toggle [for]="picker"></ngx-material-timepicker-toggle>
	</div>
  	</div>
	`,
                styles: [`
	/* css variable */
	:host {
		--c-width: 645px;
		--c-height: 25px;
		--label-left: 10px;
		--label-top: 0px;
		--value-left: 10px;
		--value-top: 0px;
	}
	
	/* box css */
	.position-relative {
		position: relative;
		width: var(--c-width) !important;
	}
	.input-field {
		border: 1px solid #dee2e6;
		border-radius: 2px;
		min-height: var(--c-height) !important;
		height: auto;
	}
	/* Control Css */
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
		min-height: var(--c-height) !important;
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
	.label{
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
	.float-group .form-control:focus {
		outline: none !important;
		box-shadow: none;
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
	
	.float-group .form-control:focus + label,
	.float-group .form-control:valid + label {
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
	ngx-material-timepicker-toggle {
		position: absolute;
		top: 50%;
		right: 2px;
		transform: translateY(-50%)
	}	
	`]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { name: [{
            type: Input
        }], staticStyle: [{
            type: Input
        }], getvalue: [{
            type: Output
        }], time: [{
            type: Input
        }], width: [{
            type: Input
        }], label: [{
            type: Input
        }], switchStyle: [{
            type: Input
        }], style: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], valueStyle: [{
            type: Input
        }], signalStyle: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TimepickerModule, { declarations: function () { return [DatetimepickerComponent]; }, imports: function () { return [CommonModule, ɵngcc4.NgbModule, FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        NgxMaterialTimepickerModule]; }, exports: function () { return [DatetimepickerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimepickerModule, [{
        type: NgModule,
        args: [{
                declarations: [DatetimepickerComponent],
                imports: [
                    CommonModule,
                    NgbModule.forRoot(),
                    FormsModule,
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule,
                    NgxMaterialTimepickerModule
                ],
                exports: [DatetimepickerComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxComponent, CheckboxModule, ColorPickerComponent, ColorPickersModule, DatepickerComponent, DatepickerModule, DaterangepickerComponent, DaterangepickerModule, DatetimepickerComponent, NumericComponent, NumericModule, RadioComponent, RadioModule, SelectComponent, SelectModule, SwitchComponent, SwitchModule, TagInputComponent, TagInputModule, TextComponent, TextModule, TextareaComponent, TextareaModule, TimepickerModule, UpdownComponent, UpdownModule };

//# sourceMappingURL=sml-inputs-nine.js.map