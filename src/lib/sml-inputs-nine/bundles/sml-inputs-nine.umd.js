(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('ngx-mask'), require('ngx-color-picker'), require('ngx-material-timepicker'), require('ng-pick-datetime'), require('ngx-currency'), require('@ng-select/ng-select')) :
    typeof define === 'function' && define.amd ? define('sml-inputs-nine', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@ng-bootstrap/ng-bootstrap', 'ngx-mask', 'ngx-color-picker', 'ngx-material-timepicker', 'ng-pick-datetime', 'ngx-currency', '@ng-select/ng-select'], factory) :
    (global = global || self, factory(global['sml-inputs-nine'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.ngBootstrap, global.ngxMask, global.ngxColorPicker, global.ngxMaterialTimepicker, global.ngPickDatetime, global.ngxCurrency, global.ngSelect));
}(this, (function (exports, core, common, forms, ngBootstrap, ngxMask, ngxColorPicker, ngxMaterialTimepicker, ngPickDatetime, ngxCurrency, ngSelect) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent(elementRef) {
            this.elementRef = elementRef;
            this.value = false;
            this.getvalue = new core.EventEmitter;
        }
        CheckboxComponent.prototype.ngOnInit = function () { };
        CheckboxComponent.prototype.ngOnChanges = function (event) {
            if (event.checkboxStyle != undefined && event.checkboxStyle.currentValue != undefined) {
                var css = event.checkboxStyle.currentValue;
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
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        CheckboxComponent.prototype.getTicFontSize = function (css) {
            var h = css['width-height'].replace('px', '');
            return (parseInt(h) / 2) + 'px';
        };
        CheckboxComponent.prototype.onChange = function (event) {
            this.getvalue.emit(event.target.checked);
        };
        CheckboxComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "labeltext", void 0);
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], CheckboxComponent.prototype, "checkboxStyle", void 0);
        __decorate([
            core.Output()
        ], CheckboxComponent.prototype, "getvalue", void 0);
        CheckboxComponent = __decorate([
            core.Component({
                selector: 'sml-input-checkbox',
                template: "\n  <div class=\"position-relative\">\n\t<div class=\"input-field\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle}\"\n\t [ngStyle]=\"borderStyle\">\n\t\t<div class=\"checkbox\">\n\t\t\t<input type=\"checkbox\" [(ngModel)]=\"value\" [name]=\"name\" (change)=\"onChange($event)\" [id]=\"name\">\n\t\t\t<label class=\"label1\" [for]=\"name\"></label>\n\t\t\t<div class=\"vlabel\" [ngStyle]=\"valueStyle\">{{label}}</div>\n\t\t</div>\n\t\t<label class=\"label\" [ngStyle]=\"style\">{{labeltext}}</label>\n\t</div>\n  </div>\n  ",
                styles: ["\n  :host {\n    --c-width: 645px;\n    --c-height: 25px;\n    --checkbox-width: 20px;\n    --checkbox-height: 20px;\n    --checkbox-tick-size: 10px;\n    --checkbox-border-width: 1px;\n    --checkbox-border-radius: 4px;\n    --checkbox-border-color: #D5DBE0;\n    --checkbox-background-checked: #348fe2;\n    --checkbox-background-unchecked:#D5DBE0;\n    --check-color: #ffffff;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n  }\n  /* box css */\n  .position-relative {\n    position: relative;\n  }\n  .input-field {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    width: var(--c-width) !important;\n    min-height: var(--c-height) !important;\n    height: auto;\n  }\n  .vlabel{\n    line-height: var(--checkbox-height);\n    vertical-align: top;\n    margin-left: 5px;\n    margin-right: 10px;\n    display: inline-block;\n  }\n  .checkbox input[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n    left: -9999px;\n  }\n  .checkbox{\n    display: block;\n    padding-top: 8px;\n    padding-right: 0.75rem;\n    padding-bottom: 4px;\n    padding-left: var(--value-left);\n    min-height: var(--c-height) !important;\n  }\n  .checkbox label {\n    position: relative;\n    display: inline-block;\n    width: var(--checkbox-width);\n    height: var(--checkbox-height);\n  }\n  .checkbox label::before,\n  .checkbox label::after {\n    position: absolute;\n    content: \"\";\n    display: inline-block;\n  }\n  .checkbox label::before{\n      height: var(--checkbox-height);\n      width: var(--checkbox-width);\n      border: 1px solid #D5DBE0;\n      border-radius: var(--checkbox-border-radius);\n      border-width: var(--checkbox-border-width)  !important;\n      border-color: var(--checkbox-border-color) !important;\n      left: 0px;\n      background: var(--checkbox-background-unchecked);\n  }\n  input[type=\"checkbox\"]:checked + label:before {\n    /*background: var(--checkbox-background-checked);\n    border: 1px solid;\n    border-radius: var(--checkbox-border-radius);\n    border-width: var(--checkbox-border-width)  !important;\n    border-color: var(--checkbox-border-color) !important;\n    text-align: center;*/\n    content: \"\u2713\";\n    font-size: 24px;\n    line-height: 0.6;\n    color: #6ba238;\n    transition: all .2s;\n    font-family: Arial;\n    font-weight: bolder;\n  }\n  .checkbox input[type=\"checkbox\"]:checked + label::after {\n      transform: translate(-50%,-50%);\n      left: 50%;\n      top: 50%;\n      color: var( --check-color);\n      position: absolute;\n      content: \"\f00c\" !important;\n      -moz-osx-font-smoothing: grayscale;\n      -webkit-font-smoothing: antialiased;\n      display: inline-block;\n      font-size: var(--checkbox-tick-size);\n      font-style: normal;\n      font-variant: normal;\n      text-rendering: auto;\n      line-height: 1;\n      font-family: \"Font Awesome 5 Free\";\n      font-weight: 900;\n  }\n  .checkbox input[type=\"checkbox\"] + label::after {\n    content: none;\n  }\n  .checkbox input[type=\"checkbox\"]:checked + label::after {\n    content: \"\";\n  }\n  .signal-line{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n  }\n  .label1{\n    margin-bottom: 0px !important;\n  }\n  .label {\n    position: absolute;\n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    transition: all 0.1s;\n  }\n  .float-group {\n    position: relative;\n    padding: 14px 24px 0px 0px;\n  }\n  .float-group .checkbox {\n      padding-top: var(--value-top);\n      padding-right: 0px;\n      padding-bottom: 0px;\n      padding-left: var(--value-left);\n  }\n  .float-group .label {\n    font-size: 9px;\n    font-weight: bold !important;  /* floating lable always bold */\n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }    \n  "]
            })
        ], CheckboxComponent);
        return CheckboxComponent;
    }());

    var CheckboxModule = /** @class */ (function () {
        function CheckboxModule() {
        }
        CheckboxModule = __decorate([
            core.NgModule({
                declarations: [CheckboxComponent],
                imports: [
                    common.CommonModule, forms.FormsModule
                ],
                exports: [CheckboxComponent]
            })
        ], CheckboxModule);
        return CheckboxModule;
    }());

    var SwitchComponent = /** @class */ (function () {
        function SwitchComponent(elementRef) {
            this.elementRef = elementRef;
            this.isChecked = false;
            this.isBorderStyle = false;
            this.toggleStyle = new core.EventEmitter();
        }
        SwitchComponent.prototype.ngOnInit = function () {
        };
        SwitchComponent.prototype.ngOnChanges = function (event) {
            if (event.switchStyles != undefined && event.switchStyles.currentValue != undefined) {
                var css = event.switchStyles.currentValue;
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
                var css = event.labelStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        SwitchComponent.prototype.getTransformx = function (css) {
            var w = css.width.replace('px', '');
            var h = css.height.replace('px', '');
            var trx = ((w - (h - 8)) - 8);
            return trx + 'px';
        };
        SwitchComponent.prototype.getBallSize = function (css) {
            var h = css.height.replace('px', '');
            var bw = css.borderwidth.replace('px', '');
            return (h - 8 - (bw * 2)) + 'px';
        };
        SwitchComponent.prototype.onChange = function (event) {
            this.toggleStyle.emit(this.isChecked);
        };
        SwitchComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "labelText", void 0);
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "isChecked", void 0);
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "switchStyles", void 0);
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "labelStyle", void 0);
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], SwitchComponent.prototype, "isBorderStyle", void 0);
        __decorate([
            core.Output()
        ], SwitchComponent.prototype, "toggleStyle", void 0);
        SwitchComponent = __decorate([
            core.Component({
                selector: 'sml-input-switch',
                template: "\n  <div class=\"position-relative\">\n  <div class=\"input-field\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle}\"\n    [ngStyle]=\"borderStyle\">\n    <div class=\"form-ctr\">\n      <label class=\"switch\">\n        <input type=\"checkbox\" [(ngModel)]=\"isChecked\" \n        (change)=\"onChange($event)\" id=\"togBtn\">\n        <div class=\"slider round\">\n          <span class=\"on\" [ngStyle]=\"valueStyle\">{{switchStyles?.labelChekecd}}</span>\n          <span class=\"off\" [ngStyle]=\"valueStyle\">{{switchStyles?.labelUnChekecd}}</span>\n        </div>\n      </label>\n      <label class=\"label\" [ngStyle]=\"labelStyle\">{{label}}</label>\n    </div>\n  </div>\n  </div>\n  ",
                styles: ["\n  :host {\n    --c-width: 645px;\n    --c-height: 25px;\n    --switch-width: 70px;\n    --switch-height: 34px;\n    --switch-height: 34px;\n    --switch-ball-size: 26px;\n    --switch-border-width: 0px;\n    --switch-border-radius: 34px;\n    --switch-border-color: #D5DBE0;\n    --switch-background-checked: #348fe2;\n    --switch-background-unchecked:#D5DBE0;\n    --switch-color: #ffffff;\n    --switch-radius: 34px;\n    --switch-transformx: 35px;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n}\n/* box css */\n.position-relative {\n    position: relative;\n}\n.input-field {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    width: var(--c-width) !important;\n    min-height: var(--c-height) !important;\n    height: auto;\n}\n.switch {\n    position: relative;\n    display: inline-block;\n    width: var(--switch-width);\n    height: var(--switch-height);\n}\n.switch input {\n    display:none;\n}\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--switch-background-unchecked);\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: var(--switch-ball-size);\n    width: var(--switch-ball-size);\n    left: 4px;\n    bottom: 4px;\n    background-color: var(--switch-color);\n    -webkit-transition: .4s;\n    transition: .4s;\n}\ninput:checked + .slider {\n    background-color: var(--switch-background-checked);\n}\ninput:focus + .slider {\n    box-shadow: 0 0 1px var(--switch-background-checked);\n}\ninput:checked + .slider:before {\n    -webkit-transform: translateX(var(--switch-transformx));\n    -ms-transform: translateX(var(--switch-transformx));    \n    transform: translateX(var(--switch-transformx));\n}  \n.on{\n    display: none;\n}\n.on{\n    color: var(--switch-color);\n    position: absolute;\n    transform: translate(-60%,-50%);\n    top: 50%;\n    left: 40%;\n    font-size: 10px;\n    font-family: Verdana, sans-serif;\n}\n.off{\n    color: var(--switch-color);\n    position: absolute;\n    transform: translate(-40%,-50%);\n    top: 50%;\n    left: 60%;\n    font-size: 10px;\n    font-family: Verdana, sans-serif;\n}\ninput:checked+ .slider .on{\n    display: block;\n}\ninput:checked + .slider .off{\n    display: none;\n}\n.slider.round {\n    border-radius: var(--switch-border-radius);\n    border-width: var(--switch-border-width) !important;\n    border-color: var(--switch-border-color) !important;\n    border: 1px solid;\n}\n.slider.round:before {\n    border-radius: var(--switch-radius);\n}\n.form-ctr{\n    display: block;\n    padding-top: 8px;\n    padding-right: 0.75rem;\n    padding-bottom: 3px;\n    padding-left: var(--value-left);\n    min-height: var(--c-height) !important;\n}\n.signal-line{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n}\nlabel{\n    margin-bottom: 0px !important;\n}\n.label {\n    position: absolute;\n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    transition: all 0.1s;\n}\n.float-group {\n    position: relative;\n    padding: 14px 24px 0px 0px;\n}\n.float-group .form-ctr {\n    padding-top: var(--value-top);\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: var(--value-left);\n}\n.float-group .label {\n  font-size: 9px;\n  font-weight: bold !important;  /* floating lable always bold */\n  position: absolute;\n  top: var(--label-top);\n  left: var(--label-left);\n  transform: translateY(0px);\n  transition: all 200ms;\n  opacity: 1;\n  margin: 0;\n  width: 87%;\n  height: auto;\n}\n  "]
            })
        ], SwitchComponent);
        return SwitchComponent;
    }());

    var SwitchModule = /** @class */ (function () {
        function SwitchModule() {
        }
        SwitchModule = __decorate([
            core.NgModule({
                declarations: [SwitchComponent],
                imports: [
                    common.CommonModule,
                    ngBootstrap.NgbModule,
                    forms.FormsModule
                ],
                exports: [SwitchComponent]
            })
        ], SwitchModule);
        return SwitchModule;
    }());

    var RadioComponent = /** @class */ (function () {
        function RadioComponent(elementRef) {
            var _this = this;
            this.elementRef = elementRef;
            this.radioChangeHandler = new core.EventEmitter();
            this.changeevt1 = function (event) {
                _this.radioChangeHandler.emit(event);
            };
        }
        RadioComponent.prototype.ngOnInit = function () { };
        RadioComponent.prototype.ngOnChanges = function (event) {
            if (event.radioStyle != undefined && event.radioStyle.currentValue != undefined) {
                var css = event.radioStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--radio-width', css['width-height']);
                this.elementRef.nativeElement.style.setProperty('--radio-height', css['width-height']);
                this.elementRef.nativeElement.style.setProperty('--radio-border-width', css.borderwidth);
                this.elementRef.nativeElement.style.setProperty('--radio-border-color', css.bordercolor);
                this.elementRef.nativeElement.style.setProperty('--radio-background', css.background);
                this.elementRef.nativeElement.style.setProperty('--radio-background-unchecked', css['background-unchecked']);
            }
            if (event.labelStyle != undefined && event.labelStyle.currentValue != undefined) {
                var css = event.labelStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        RadioComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "jsonData", void 0);
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "labelStyle", void 0);
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "radioStyle", void 0);
        __decorate([
            core.Input()
        ], RadioComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Output()
        ], RadioComponent.prototype, "radioChangeHandler", void 0);
        RadioComponent = __decorate([
            core.Component({
                selector: 'sml-input-radio',
                template: "\n    <div class=\"position-relative\">\n    <div class=\"input-field\"  \n      [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle}\"\n      [ngStyle]=\"borderStyle\" >\n      <div class=\"radio\">\n        <div *ngFor=\"let data of jsonData;let i=index\" [ngClass]=\"{'dis-inline': radioStyle?.isInline , 'dis-block': !radioStyle?.isInline}\">\n          <input *ngIf=\"data.disabled == undefined || data.disabled == null || data.disabled == '' || data.disabled == false\" type=\"radio\" id=\"{{id}}-{{i}}\" name=\"{{id}}-{{i}}\"  [value]=\"data.value\" [(ngModel)]=\"value\" (change)=\"changeevt1(value)\">\n          <input *ngIf=\"data.disabled != undefined || data.disabled != null || data.disabled != '' || data.disabled == true\" type=\"radio\" id=\"{{id}}-{{i}}\" name=\"{{id}}-{{i}}\"  [value]=\"data.value\" [(ngModel)]=\"value\" (change)=\"changeevt1(value)\" disabled>\n          <label for=\"{{id}}-{{i}}\" class=\"clabel\"></label>\n          <label for=\"{{id}}-{{i}}\" [ngStyle]=\"valueStyle\" class=\"vlabel\">{{data.name}}</label>\n        </div>\n      </div>\n      <label class=\"label\" [ngStyle]=\"labelStyle\">{{label?label:'Label Name'}}</label>\n    </div>\n    </div>\n    ",
                styles: ["\n    /* css variable */\n    :host {\n        --c-width: 645px;\n        --c-height: 25px;\n        --radio-width: 20px;\n        --radio-height: 20px;\n        --radio-border-width: 1px;\n        --radio-border-color: #D5DBE0;\n        --radio-background: #348fe2;\n        --radio-background-unchecked: #D5DBE0;\n        --label-left: 10px;\n        --label-top: 0px;\n        --value-left: 10px;\n        --value-top: 0px;\n    }\n    /* radio css */\n    .clabel {\n        position: relative;\n        cursor: pointer;\n        width: var(--radio-width);\n        height: var(--radio-height);\n        line-height: 20px;\n        display: inline-block;\n        color: #666;\n        margin-bottom: 0px;\n    }\n    .vlabel{\n        line-height: var(--radio-height);\n        vertical-align: top;\n        margin-left: 5px;\n        margin-right: 10px;\n        margin-bottom: 0px;\n    }\n    .dis-inline{\n        display: inline-block;\n    }\n    .dis-block{\n        display: block;\n    }\n    .radio{\n        display: block;\n        padding-top: 8px;\n        padding-right: 0.75rem;\n        padding-bottom: 4px;\n        padding-left: var(--value-left);\n        min-height: var(--c-height) !important;\n    }\n    [type=\"radio\"]:checked, [type=\"radio\"]:not(:checked) {\n        position: absolute;\n        left: -9999px;\n    }\n    [type=\"radio\"]:checked+label.clabel:before, [type=\"radio\"]:not(:checked)+label.clabel:before {\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 1px;\n        width: var(--radio-width);\n        height: var(--radio-height);\n        border-width: var(--radio-border-width) !important;\n        border-color: var(--radio-border-color) !important;\n        border:1px solid;\n        border-radius: 100%;\n        background: var(--radio-background-unchecked);\n    }\n    [type=\"radio\"]:checked+label.clabel:after, [type=\"radio\"]:not(:checked)+label.clabel:after {\n        content: '';\n        font-family: \"Font Awesome 5 Free\";\n        font-weight: 900;\n        line-height: 1;\n        position: absolute;\n        top: 5px;\n        left: 4px;\n        -webkit-transition: all 0.2s ease;\n        transition: all 0.2s ease;\n        font-size: 10px;\n        color: #fff\n    }\n    [type=\"radio\"]:not(:checked)+label.clabel:after {\n        opacity: 0;\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    [type=\"radio\"]:checked+label.clabel:after {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n    [type=\"radio\"]:checked+label.clabel::before {\n        background-color: var(--radio-background);\n        border-width: var(--radio-border-width) !important;\n        border-color: var(--radio-border-color) !important;\n        border:1px solid;\n        border-radius: 100%;\n    }\n    /* box css */\n    .position-relative {\n        position: relative;\n    }\n    .input-field {\n        border: 1px solid #dee2e6;\n        border-radius: 2px;\n        width: var(--c-width) !important;\n        min-height: var(--c-height) !important;\n        height: auto;\n    }\n    .signal-line{\n        border-top: none !important;\n        border-left: none !important;\n        border-right: none !important;\n        border-radius: 0px !important;\n    }\n    /* labelcss */\n    \n    .label {\n        position: absolute;\n        top: -24px;\n        left: 0px; \n        font-size: 12px;\n        transition: all 0.1s;\n    } \n    .float-group {\n        position: relative;\n        padding: 14px 24px 0px 0px;\n    } \n    .float-group .radio {\n        padding-top: var(--value-top);\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: var(--value-left);\n    }\n    .float-group .label {\n        font-size: 9px;\n        font-weight: bold !important;  /* floating lable always bold */\n        position: absolute;\n        top: var(--label-top);\n        left: var(--label-left);\n        transform: translateY(0px);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }\n    "]
            })
        ], RadioComponent);
        return RadioComponent;
    }());

    var RadioModule = /** @class */ (function () {
        function RadioModule() {
        }
        RadioModule = __decorate([
            core.NgModule({
                declarations: [RadioComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ],
                exports: [RadioComponent]
            })
        ], RadioModule);
        return RadioModule;
    }());

    var TextComponent = /** @class */ (function () {
        function TextComponent(elementRef) {
            this.elementRef = elementRef;
            this.type = 'text';
            this.maxlength = 255;
            this.showMask = false;
            this.value = "";
            this.staticStyle = false;
            this.readOnly = false;
            this.onlyText = false;
            this.noPutCharacter = 0;
            this.getvalue = new core.EventEmitter;
            this.onblur = new core.EventEmitter;
        }
        TextComponent.prototype.ngOnInit = function () { };
        TextComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        TextComponent.prototype.getValue = function (event) {
            var getVal = event.target.value;
            this.getvalue.emit(event.target.value);
        };
        TextComponent.prototype.onBlur = function (event) {
            this.onblur.emit(event.target.value);
        };
        TextComponent.prototype.onEndfocus = function (event) {
            var _this = this;
            if (this.maskType != '' && this.maskType != null && this.maskType != undefined) {
                setTimeout(function () {
                    event.target.selectionStart = _this.noPutCharacter == 0 ? event.target.value.length : _this.noPutCharacter;
                    event.target.selectionEnd = _this.noPutCharacter == 0 ? event.target.value.length : _this.noPutCharacter;
                }, 500);
            }
        };
        TextComponent.prototype.keyPress = function (e) {
            //e.target.selectionStart++;
            //e.target.selectionEnd++;
            if (this.onlyText == false) {
                e.target.selectionStart++;
            }
            e.target.selectionEnd++;
        };
        TextComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TextComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "maxlength", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "showMask", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "maskType", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "patterns", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "expression", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "fixValue", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "inputStyle", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "readOnly", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "onlyText", void 0);
        __decorate([
            core.Input()
        ], TextComponent.prototype, "noPutCharacter", void 0);
        __decorate([
            core.Output()
        ], TextComponent.prototype, "getvalue", void 0);
        __decorate([
            core.Output()
        ], TextComponent.prototype, "onblur", void 0);
        TextComponent = __decorate([
            core.Component({
                selector: 'sml-input-text',
                template: "\n    <div class=\"position-relative\">\n    <div class=\"input-field\" \n        [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n        [ngStyle]=\"borderStyle\">\n        <input *ngIf=\"!readOnly\" id=\"{{name}}\" \n               name=\"{{name}}\" \n               class=\"form-control\" \n               [type]=\"type\"\n               [attr.maxlength]=\"maxlength\"\n               [patterns]=\"patterns\" \n               [shownMaskExpression]=\"expression\"\n               [mask]=\"maskType\" \n               [showMaskTyped]=\"showMask\"\n               [(ngModel)]=\"value\"\n               (focus)= \"onEndfocus($event)\"\n               [ngStyle]=\"valueStyle\"\n               (blur)=\"onBlur($event)\" \n               (keyup)=\"getValue($event)\"\n               (keypress)=\"keyPress($event)\" required>\n        <input *ngIf=\"readOnly\" id=\"{{name}}\" \n               name=\"{{name}}\" \n               class=\"form-control\" \n               [type]=\"type\"\n               [attr.maxlength]=\"maxlength\"\n               [patterns]=\"patterns\" \n               [shownMaskExpression]=\"expression\"\n               [mask]=\"maskType\" \n               [showMaskTyped]=\"showMask\"\n               [(ngModel)]=\"value\"\n               (focus)= \"onEndfocus($event)\"\n               [ngStyle]=\"valueStyle\"\n               (blur)=\"onBlur($event)\" \n               (keyup)=\"getValue($event)\"\n               (keypress)=\"keyPress($event)\" required readonly>\n        <label for=\"{{name}}\" \n               class=\"label\" \n               [ngStyle]=\"style\">\n               {{ label }}\n        </label>\n    </div>\n</div>\n    ",
                styles: ["\n    /* css variable */\n    :host {\n        --c-width: 645px;\n        --c-height: 25px;\n        --label-left: 10px;\n        --label-top: 0px;\n        --value-left: 10px;\n        --value-top: 0px;\n    }\n    \n    /* box css */\n    .position-relative {\n        position: relative;\n    }\n    .input-field {\n        border: 1px solid #dee2e6;\n        border-radius: 2px;\n        width: var(--c-width) !important;\n        min-height: var(--c-height) !important;\n        height: auto;\n    }\n    /* control css */\n    .form-control {\n        display: block;\n        padding-top: 0.375rem;\n        padding-right: 0.75rem;\n        padding-bottom: 0.375rem;\n        padding-left: var(--value-left);\n        font-size: 1rem;\n        line-height: 1.5;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: none;\n        min-height: var(--c-height) !important;\n        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    }\n    .form-control {\n        background-color: inherit;\n        box-shadow: none !important;\n    }\n    .signal-line{\n        border-top: none !important;\n        border-left: none !important;\n        border-right: none !important;\n        border-radius: 0px !important;\n    }\n    /* labelcss */\n    .label{\n        position: absolute; \n        top: -24px;\n        left: 0px; \n        font-size: 12px;\n        padding: 0px !important;\n        text-align: left;\n    }\n    .float-group {\n        position: relative;\n        padding: 14px 24px 2px 0px;\n    }\n    .float-group .form-control {\n        padding-top: var(--value-top);\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: var(--value-left);\n    }\n    .float-group .label {\n        font-size: 12px;\n        font-weight: normal;\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        left: var(--label-left);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }\n\n    @media all and (-ms-high-contrast:none) {\n        *::-ms-backdrop, .float-group .label {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n    }\n\n\n\n    .float-group-static .label {\n        font-size: 9px;\n        font-weight: bold !important;\n        position: absolute;\n        top: var(--label-top);\n        left: var(--label-left);\n        transform: translateY(0px);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }\n    .float-group .form-control:focus {\n        outline: none !important;\n        box-shadow: none;\n    }\n    \n    .float-group .form-control:focus + label,\n    .float-group .form-control:valid + label {\n        font-size: 9px;\n        font-weight: bold !important;  /* floating lable always bold */\n        position: absolute;\n        top: var(--label-top);\n        left: var(--label-left);\n        transform: translateY(0px);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }    \n    "]
            })
        ], TextComponent);
        return TextComponent;
    }());

    var TextModule = /** @class */ (function () {
        function TextModule() {
        }
        TextModule = __decorate([
            core.NgModule({
                declarations: [TextComponent],
                imports: [
                    common.CommonModule,
                    ngBootstrap.NgbModule,
                    ngxMask.NgxMaskModule.forRoot(),
                    forms.FormsModule
                ],
                exports: [TextComponent]
            })
        ], TextModule);
        return TextModule;
    }());

    var TagInputComponent = /** @class */ (function () {
        function TagInputComponent(elementRef) {
            this.elementRef = elementRef;
            this.value = "";
            this.name = "sml-input-type";
            this.onEnter = new core.EventEmitter;
        }
        TagInputComponent.prototype.ngOnInit = function () { };
        TagInputComponent.prototype.ngOnChanges = function (event) { };
        TagInputComponent.prototype.onEnterClick = function () {
            if (this.value != "") {
                var array = this.value.split(",");
                this.onEnter.emit(array);
                this.value = "";
            }
        };
        TagInputComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TagInputComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], TagInputComponent.prototype, "name", void 0);
        __decorate([
            core.Output()
        ], TagInputComponent.prototype, "onEnter", void 0);
        TagInputComponent = __decorate([
            core.Component({
                selector: 'sml-input-tag',
                template: "\n    <div class=\"position-relative\">\n        <textarea row=\"3\"  id=\"{{name}}\" class=\"cus-textarea\" placeholder=\"Type and press enter\" name=\"{{name}}\" (keyup.enter)=\"onEnterClick()\"  [(ngModel)]=\"value\" ></textarea>\n    </div>\n    ",
                styles: ["\n        .position-relative {\n            position: relative;\n        }\n        .cus-textarea {\n            width: 100% !important;\n            padding-left: 7px;\n        }\n    "]
            })
        ], TagInputComponent);
        return TagInputComponent;
    }());

    var TagInputModule = /** @class */ (function () {
        function TagInputModule() {
        }
        TagInputModule = __decorate([
            core.NgModule({
                declarations: [TagInputComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ],
                exports: [TagInputComponent]
            })
        ], TagInputModule);
        return TagInputModule;
    }());

    var TextareaComponent = /** @class */ (function () {
        function TextareaComponent(elementRef) {
            this.elementRef = elementRef;
            this.staticStyle = false;
            this.readOnly = false;
            this.getvalue = new core.EventEmitter;
            this.onblur = new core.EventEmitter;
        }
        TextareaComponent.prototype.ngOnInit = function () { };
        TextareaComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        TextareaComponent.prototype.getValue = function (event) {
            this.getvalue.emit(event.target.value);
        };
        TextareaComponent.prototype.onBlur = function (event) {
            this.onblur.emit(event.target.value);
        };
        TextareaComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "row", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "column", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "maxLenght", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "inputStyle", void 0);
        __decorate([
            core.Input()
        ], TextareaComponent.prototype, "readOnly", void 0);
        __decorate([
            core.Output()
        ], TextareaComponent.prototype, "getvalue", void 0);
        __decorate([
            core.Output()
        ], TextareaComponent.prototype, "onblur", void 0);
        TextareaComponent = __decorate([
            core.Component({
                selector: 'sml-input-textarea',
                template: "\n  <div class=\"position-relative\">\n  <div class=\"input-field\" \n      [ngStyle]=\"borderStyle\" \n      [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\">\n      <textarea *ngIf=\"!readOnly\"\n      type=\"text\" \n      class=\"form-control\" \n      [value]=\"value\"  \n      [rows]=\"row\" \n      [cols]=\"column\"\n      (keyup)=\"getValue($event)\" \n      (blur)=\"onBlur($event)\"\n      [ngStyle]=\"valueStyle\"\n      required></textarea>\n      <textarea *ngIf=\"readOnly\"\n      type=\"text\" \n      class=\"form-control\" \n      [value]=\"value\"  \n      [rows]=\"row\" \n      [cols]=\"column\"\n      (keyup)=\"getValue($event)\" \n      (blur)=\"onBlur($event)\"\n      [ngStyle]=\"valueStyle\"\n      required readOnly></textarea>\n    <label class=\"label\" \n          [ngStyle]=\"style\">\n          {{ label }} <span *ngIf=\"maxLenght\">: {{ maxLenght }}</span>\n    </label>\n  </div>\n</div>\n  ",
                styles: ["\n  /* css variable */\n  :host {\n      --c-width: 645px;\n      --label-left: 10px;\n      --label-top: 0px;\n      --value-left: 10px;\n      --value-top: 0px;\n  }\n  /* box css */\n  .position-relative {\n      position: relative;\n  }\n  .input-field {\n      border: 1px solid rgb(222, 226, 230);\n      border-radius: 2px;\n      width: var(--c-width) !important;\n  }\n  /* control css */\n  .form-control {\n      display: block;\n      padding-top: 0.375rem;\n      padding-right: 0.75rem;\n      padding-bottom: 0.375rem;\n      padding-left: var(--value-left);\n      font-size: 1rem;\n      line-height: 1.5;\n      color: #495057;\n      background-color: #fff;\n      background-clip: padding-box;\n      border: none;\n      resize: none;\n      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control {\n      background-color: inherit;\n      box-shadow: none !important;\n  }\n  .signal-line{\n      border-top: none !important;\n      border-left: none !important;\n      border-right: none !important;\n      border-radius: 0px !important;\n  }\n  /* labelcss */\n  .label {\n      position: absolute;\n      top: -24px;\n      left: 0px; \n      font-size: 12px;\n      padding: 0px !important;\n        text-align: left;\n  }\n  .float-group {\n      position: relative;\n      padding: 14px 24px 2px 0px;\n  }\n  .float-group .form-control {\n      padding-top: var(--value-top);\n      padding-right: 0px;\n      padding-bottom: 0px;\n      padding-left: var(--value-left);\n  }\n  .float-group .label {\n    font-size: 12px;\n    font-weight: normal;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: var(--label-left);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n\n  @media all and (-ms-high-contrast:none) {\n      *::-ms-backdrop, .float-group .label {\n          top: 0%!important;\n          transform: translateY(50%);\n      }\n  }\n  \n  .float-group .form-control:focus {\n      box-shadow: none;\n      border: none\n  }\n  .float-group-static .label {\n      font-size: 9px;\n      font-weight: bold !important;  /* floating lable always bold */\n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n   }\n  .float-group .form-control:focus-within ~ .label,\n  .float-group .form-control:valid ~ .label {\n      font-size: 9px;\n      font-weight: bold !important;  /* floating lable always bold */\n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }  \n  "]
            })
        ], TextareaComponent);
        return TextareaComponent;
    }());

    var TextareaModule = /** @class */ (function () {
        function TextareaModule() {
        }
        TextareaModule = __decorate([
            core.NgModule({
                declarations: [TextareaComponent],
                imports: [
                    common.CommonModule
                ],
                exports: [TextareaComponent]
            })
        ], TextareaModule);
        return TextareaModule;
    }());

    var UpdownComponent = /** @class */ (function () {
        function UpdownComponent(elementRef) {
            this.elementRef = elementRef;
            this.initialValue = 0;
            this.isNagative = false;
            this.textAlign = 'right';
            this.isLabel = false;
            this.staticStyle = false;
            this.valueChange = new core.EventEmitter();
        }
        UpdownComponent.prototype.ngOnInit = function () {
            if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
                this.initialValue = 0;
            }
            else {
                this.initialValue = parseInt(this.initialValue);
            }
        };
        UpdownComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        UpdownComponent.prototype.styleObject = function () {
            var nType = {};
            Object.assign(nType, this.valueStyle);
            Object.assign(nType, this.borderStyle);
            return nType;
        };
        UpdownComponent.prototype.increaseValue = function () {
            if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
                this.initialValue = 0;
            }
            this.initialValue += 1;
            this.valueChange.emit(this.initialValue);
        };
        UpdownComponent.prototype.decreaseValue = function () {
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
        };
        UpdownComponent.prototype.onBlurMethod = function () {
            this.valueChange.emit(this.initialValue);
        };
        UpdownComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "initialValue", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "isNagative", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "textAlign", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "isLabel", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], UpdownComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Output()
        ], UpdownComponent.prototype, "valueChange", void 0);
        UpdownComponent = __decorate([
            core.Component({
                selector: 'sml-input-updown',
                template: "\n  <div class=\"position-relative\">\n  <div class=\"input-field\" \n    [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n    [ngStyle]=\"borderStyle\">\n    <input \n        type=\"number\" \n        [(ngModel)]=\"initialValue\" \n        [ngStyle]=\"valueStyle\"\n        (blur)=\"onBlurMethod()\"\n        [style.text-align]=\"textAlign\"\n        class=\"form-control\" required>\n    <div class=\"numberSpinner\">\n      <a href=\"javascript:void(0)\" (click)=\"increaseValue()\" class=\"spinnerBtn\">\n        <i class=\"fa fa-caret-up\"></i>\n      </a>\n      <a href=\"javascript:void(0)\" (click)=\"decreaseValue()\" class=\"spinnerBtn\">\n        <i class=\"fa fa-caret-down\"></i>\n      </a>\n    </div>\n    <label *ngIf=\"isLabel\" [ngStyle]=\"style\" class=\"label\">{{label}}</label>\n  </div>\n</div>\n  ",
                styles: ["\n  /* css variable */\n  :host {\n      --c-width: 100%;\n      --c-height: 25px;\n      --label-left: 10px;\n      --label-top: 0px;\n      --value-left: 10px;\n      --value-top: 0px;\n  }\n  /* box css */\n  .position-relative {\n      position: relative;\n      width: var(--c-width) !important;\n  }\n  .input-field {\n      border: 1px solid #dee2e6;\n      border-radius: 2px;\n      min-height: var(--c-height) !important;\n      height: auto;\n  }\n  /* control css */\n  .form-control {\n      display: block;\n      padding-top: 0.375rem;\n      padding-right: var(--value-left);\n      padding-bottom: 0.375rem;\n      padding-left: 0.75rem;\n      font-size: 1rem;\n      line-height: 1.5;\n      color: #495057;\n      background-color: #fff;\n      background-clip: padding-box;\n      border: none;\n      text-align: right;\n      min-height: var(--c-height) !important;\n      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control {\n      background-color: inherit;\n      box-shadow: none !important;\n  }\n  .signal-line{\n      border-top: none !important;\n      border-left: none !important;\n      border-right: none !important;\n      border-radius: 0px !important;\n  }\n  /* labelcss */\n  .label{\n      position: absolute; \n      top: -24px;\n      left: 0px; \n      font-size: 12px;\n      padding: 0px !important;\n        text-align: left;\n  }\n  .float-group {\n      position: relative;\n      padding: 14px 7px 2px 0px;\n  }\n  .float-group .form-control {\n      padding-top: var(--value-top);\n      padding-right: var(--value-left);\n      padding-bottom: 0px;\n      padding-left: var(--value-left);\n  }\n  .float-group .label {\n      font-size: 12px;\n      font-weight: normal;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      left: var(--label-left);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }\n  .float-group .form-control:focus {\n      outline: none !important;\n      box-shadow: none;\n  }\n  .float-group-static .label {\n    font-size: 9px;\n      font-weight: bold !important;  /* floating lable always bold */\n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }\n  .float-group .form-control:focus-within ~ .label,.float-group .form-control:valid ~ .label {\n      font-size: 9px;\n      font-weight: bold !important;  /* floating lable always bold */\n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }\n  \n  .numberSpinner {\n      display: inline-flex;\n      flex-direction: column;\n      position: absolute;\n      right: 0px;\n      top: 0px;\n      bottom: 0px;\n      border-top-right-radius: 2px;\n      border-bottom-right-radius: 2px;\n      overflow: hidden;\n      z-index: 1;\n  }\n  .spinnerBtn {\n      background: #f1f1f1;\n      border: none;\n      font-size: 14px;\n      color: initial;\n      padding: 0 7px;\n      display: flex;\n      height: 50%;\n      align-items: center;\n      justify-content: center;\n  }\n  .spinnerBtn:active {\n      color: #fff;\n      background: #666666!important;\n  }\n  .spinnerBtn:hover {\n      background: #d1d1d1;\n      text-decoration: none;\n  }\n  input[type=number]::-webkit-inner-spin-button{\n      opacity: 0;\n      font-size: 14px\n  } \n  "]
            })
        ], UpdownComponent);
        return UpdownComponent;
    }());

    var UpdownModule = /** @class */ (function () {
        function UpdownModule() {
        }
        UpdownModule = __decorate([
            core.NgModule({
                declarations: [UpdownComponent],
                imports: [
                    common.CommonModule,
                    ngBootstrap.NgbModule,
                    forms.FormsModule
                ],
                exports: [UpdownComponent]
            })
        ], UpdownModule);
        return UpdownModule;
    }());

    var ColorPickerComponent = /** @class */ (function () {
        function ColorPickerComponent(elementRef) {
            this.elementRef = elementRef;
            this.color = '#d6d6d6';
            this.isLabel = false;
            this.staticStyle = false;
            this.event = new core.EventEmitter();
            this.selectedColor = new core.EventEmitter();
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
        ColorPickerComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        ColorPickerComponent.prototype.styleObject = function () {
            var nType = {};
            Object.assign(nType, this.valueStyle);
            Object.assign(nType, this.borderStyle);
            return nType;
        };
        ColorPickerComponent.prototype.changeColor = function (color) {
            this.color = color;
            this.event.emit(this.color);
            this.selectedColor.emit(this.color);
            this.show = false;
        };
        ColorPickerComponent.prototype.changeColorManual = function (color) {
            var isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
            if (isValid) {
                this.color = color;
                this.event.emit(this.color);
                this.selectedColor.emit(this.color);
            }
        };
        ColorPickerComponent.prototype.toggleColors = function () {
            this.show = !this.show;
        };
        ColorPickerComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "heading", void 0);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "isLabel", void 0);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "event", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "selectedColor", void 0);
        ColorPickerComponent = __decorate([
            core.Component({
                selector: 'sml-input-colorpicker',
                template: "\n  <div class=\"color-picker position-relative\">\n  <div class=\"input-field\" \n       [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle ,'float-group-static': staticStyle}\"\n       [ngStyle]=\"borderStyle\"\n       >\n    <input \n        type=\"text\" \n        name=\"color\" \n        class=\"form-control\"\n        [ngStyle]=\"valueStyle\"\n        [value]=\"color\"\n        required>\n        <span (click)=\"toggleColors()\" class=\"icon\"  [style.background]=\"color\"></span>\n    <label *ngIf=\"isLabel\" \n          [ngStyle]=\"style\" \n          class=\"label\">\n          {{label}}\n    </label>\n  </div>\n  <div *ngIf=\"show\" class=\"opened\">\n    <div class=\"colors\">\n      <div (click)=\"changeColor(paint)\" *ngFor=\"let paint of defaultColors\" class=\"circle\"\n      [ngStyle]=\"{'background': paint}\"></div>\n    </div> \n  </div>\n  </div>\n  ",
                styles: ["\n  :host {\n    --c-width: 100%;\n    --c-height: 25px;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n}\n.color-picker .circle {\n    height: 19px;\n    width: 19px;\n    box-sizing: border-box;\n    border-radius: 4px;\n    border: 1px solid #fff;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}\n.color-picker .opened {\n    box-shadow: 0 7px 13px 0 rgba(86, 95, 102, 0.07);\n    background: #fff;\n    max-width: 164px;\n    padding: 1px;\n    z-index: 99;\n    border-radius: 5px;\n    position: absolute;\n    margin-top: 5px;\n    right: 0px;\n}\n.color-picker .opened .colors {\n    display: flex;\n    flex-wrap: wrap;\n}\n.color-picker .opened .colors .circle {\n    flex: 20px 0 0;\n}\n.color-picker .opened .colors .circle:nth-child(5n) {\n    margin-right: 0;\n}\n.color-picker .opened .hex-code {\n    display: flex;\n    margin-top: 20px;\n}\n.color-picker .opened .hex-code p {\n    width: 50%;\n    text-align: center;\n    font-size: 10px;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    line-height: 45px;\n}\n.color-picker .opened .hex-code .g-input {\n    border: 1px solid #e8ebed;\n    height: 45px;\n    border-radius: 5px;\n    width: 120px;\n}\n.color-picker .opened .hex-code .g-input input {\n    border: none;\n    width: 100%;\n    text-transform: uppercase;\n    outline: none;\n    text-align: center;\n    letter-spacing: 1.5px;\n    color: #595b65;\n    height: 100%;\n    border-radius: 2px;\n    margin: 0;\n    padding: 0;\n}\n.color-picker .colorpicker {\n    position: relative;\n    border-radius: 3px;\n    width: 100%;\n    border: 1px solid #c3c0c0;\n}\n.color-picker .icon {\n    position: absolute;\n    background: #ccc;\n    width: 20px;\n    height: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 9px;\n    border-radius: 3px;\n}\n.color-picker .text-black-lighter {\n    color: #404040 !important;\n}\n/* box css */\n.position-relative {\n    position: relative;\n    width: var(--c-width) !important;\n}\n.input-field {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    min-height: var(--c-height) !important;\n    height: auto;\n}\n/* Control Css */\n.form-control {\n    display: block;\n    padding-top: 0.375rem;\n    padding-right: 0.75rem;\n    padding-bottom: 0.375rem;\n    padding-left: var(--value-left);\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: none;\n    min-height: var(--c-height) !important;\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n}\n.form-control {\n    background-color: inherit;\n    box-shadow: none !important;\n}\n.signal-line{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n}\n/* label css */\n.label{\n    position: absolute; \n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    padding: 0px !important;\n    text-align: left;\n}\n.float-group {\n    position: relative;\n    padding: 14px 24px 2px 0px;\n}\n.float-group .form-control {\n    padding-top: var(--value-top);\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: var(--value-left);\n}\n.float-group .label {\n    font-size: 12px;\n    font-weight: normal;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: var(--label-left);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n}\n.float-group-static .label {\n    font-size: 9px;\n    font-weight: bold !important;  /* floating lable always bold */\n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n}\n.float-group .form-control:focus {\n    outline: none !important;\n    box-shadow: none;\n}\n.float-group .form-control:focus-within ~ .label,.float-group .form-control:valid ~ .label {\n    font-size: 9px;\n    font-weight: bold !important;  /* floating lable always bold */\n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n}\n"]
            })
        ], ColorPickerComponent);
        return ColorPickerComponent;
    }());

    var ColorPickersModule = /** @class */ (function () {
        function ColorPickersModule() {
        }
        ColorPickersModule = __decorate([
            core.NgModule({
                declarations: [ColorPickerComponent],
                imports: [
                    common.CommonModule, forms.FormsModule, ngxColorPicker.ColorPickerModule
                ],
                exports: [ColorPickerComponent]
            })
        ], ColorPickersModule);
        return ColorPickersModule;
    }());

    var DatepickerComponent = /** @class */ (function () {
        function DatepickerComponent(calendar, elementRef) {
            this.calendar = calendar;
            this.elementRef = elementRef;
            this.staticStyle = false;
            this.readOnly = false;
            this.getvalue = new core.EventEmitter;
        }
        DatepickerComponent.prototype.ngOnInit = function () {
        };
        DatepickerComponent.prototype.ngAfterViewInit = function () {
            $('input[id$=' + this.name + ']')['inputmask']("mm/dd/yyyy", {
                mask: "1/2/y",
                placeholder: "__/__/____",
                insertMode: false,
                clearMaskOnLostFocus: false,
                showMaskOnHover: false,
                hourFormat: 12
            });
        };
        DatepickerComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.width = css['c-width'];
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        DatepickerComponent.prototype.getValue = function (event) {
            this.getvalue.emit(event.value);
        };
        DatepickerComponent.prototype.onBlurMethod = function () {
            var date = $('#' + this.name).val();
            this.value = new Date(date.toString());
            this.getvalue.emit(this.value);
        };
        DatepickerComponent.prototype.clk = function () {
            var w = this.width;
            if (w == '100%') {
                w = $('#topdiv-' + this.name).width();
            }
            var sd = parseInt(w) - 296;
            $('owl-date-time-container').css({ left: sd });
        };
        DatepickerComponent.ctorParameters = function () { return [
            { type: ngBootstrap.NgbCalendar },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "format", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "fieldStyle", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "isChecked", void 0);
        __decorate([
            core.Input()
        ], DatepickerComponent.prototype, "readOnly", void 0);
        __decorate([
            core.Output()
        ], DatepickerComponent.prototype, "getvalue", void 0);
        DatepickerComponent = __decorate([
            core.Component({
                selector: 'sml-input-datepicker',
                template: "\n  <div class=\"position-relative\" id=\"topdiv-{{name}}\">\n  <div class=\"input-field\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n    [ngStyle]=\"borderStyle\">\n    <input *ngIf=\"!readOnly\"\n      [(ngModel)]=\"value\"  \n      [id]=\"name\" \n      [name]=\"name\"\n      [owlDateTime]=\"dt3\" \n      class=\"form-control\"\n      (dateTimeInput)=\"getValue($event)\"\n      (blur)=\"onBlurMethod()\"\n      [ngClass]=\"{'valid':value}\" \n      [ngStyle]=\"valueStyle\"\n      required>\n    <input *ngIf=\"readOnly\"\n      [(ngModel)]=\"value\"  \n      [id]=\"name\" \n      [name]=\"name\"\n      [owlDateTime]=\"dt4\" \n      class=\"form-control\"\n      (dateTimeInput)=\"getValue($event)\"\n      (blur)=\"onBlurMethod()\"\n      [ngClass]=\"{'valid':value}\" \n      [ngStyle]=\"valueStyle\"\n      required readOnly>\n    <label class=\"label\" [for]=\"name\" [ngStyle]=\"style\">{{ label }}</label>\n    <owl-date-time [pickerType]=\"'calendar'\" [startAt]=\"value\" #dt3></owl-date-time>\n    <owl-date-time [pickerType]=\"'calendar'\" [startAt]=\"value\" #dt4></owl-date-time>\n    <button *ngIf=\"!readOnly\" [owlDateTimeTrigger]=\"dt3\" (click)=\"clk()\" class=\"btn btn-link icon\" type=\"button\"></button>\n    <button *ngIf=\"readOnly\" (click)=\"clk()\" class=\"btn btn-link icon\" type=\"button\" disabled></button>\n  </div>\n  </div>\n  ",
                styles: ["\n  /* Css Variable */\n  :host {\n    --c-width: 645px;\n    --c-height: 25px;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n  }\n  /* box css */\n  .position-relative {\n    position: relative;\n    width: var(--c-width) !important;\n  }\n  .input-field {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    min-height: var(--c-height) !important;\n    height: auto;\n  }\n  /* Control Css */\n  .form-control {\n    display: block;\n    padding-top: 0.375rem;\n    padding-right: 0.75rem;\n    padding-bottom: 0.375rem;\n    padding-left: var(--value-left);\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: none;\n    min-height: var(--c-height) !important;\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control {\n    background-color: inherit;\n    box-shadow: none !important;\n  }\n  .signal-line{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n  }\n  \n  /* Label Css */\n  .label {\n    position: absolute; \n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    padding: 0px !important;\n        text-align: left;\n  }\n  .float-group {\n    position: relative;\n    padding: 14px 24px 2px 0px;\n  }\n  .float-group .form-control {\n    padding-top: var(--value-top);\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: var(--value-left);\n  }\n  .float-group .label {\n    font-size: 12px;\n    font-weight: normal;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: var(--label-left);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  \n    @media all and (-ms-high-contrast:none) {\n        *::-ms-backdrop, .float-group .label {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n    }\n    \n  .float-group-static .label {\n    font-size: 9px;\n    font-weight: bold !important;  /* floating lable always bold */\n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  .float-group .form-control:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  .float-group .form-control:focus + .label,\n  .float-group .form-control:valid + .label{\n    font-size: 9px;\n    font-weight: bold !important;  /* floating lable always bold */\n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  /* Button Css */\n  button.icon,button.icon:active {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;\n    width: 25px;\n    height: 23px;\n    background-repeat: no-repeat;\n    background-size: 20px;\n    background-position: center;\n    position: absolute;\n    right: 7px;\n    top: 8px;\n  }\n  .float-group button.icon,.float-group button.icon:active { \n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .btn-link {\n    font-weight: 400;\n    color: #007bff;\n    background-color: transparent;\n  }\n  .btn {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out\n    ,box-shadow .15s ease-in-out;\n  }\n  .btn.btn-link:hover, .btn.btn-link:focus {background-size: cover !important;background-position: center !important;}  \n  "]
            })
        ], DatepickerComponent);
        return DatepickerComponent;
    }());

    var DatepickerModule = /** @class */ (function () {
        function DatepickerModule() {
        }
        DatepickerModule = __decorate([
            core.NgModule({
                declarations: [DatepickerComponent],
                imports: [
                    common.CommonModule,
                    ngBootstrap.NgbModule,
                    forms.FormsModule,
                    ngxMask.NgxMaskModule,
                    ngPickDatetime.OwlDateTimeModule,
                    ngPickDatetime.OwlNativeDateTimeModule,
                    ngxMaterialTimepicker.NgxMaterialTimepickerModule
                ],
                exports: [DatepickerComponent]
            })
        ], DatepickerModule);
        return DatepickerModule;
    }());

    var DaterangepickerComponent = /** @class */ (function () {
        function DaterangepickerComponent(elementRef) {
            this.elementRef = elementRef;
            this.staticStyle = false;
            this.getvalue = new core.EventEmitter;
        }
        DaterangepickerComponent.prototype.ngOnInit = function () {
            if (this.value) {
                this.value = this.value.toLocaleDateString();
            }
            if (this.fromValue) {
                this.fromValue = this.fromValue.toLocaleDateString();
            }
        };
        DaterangepickerComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.width = css['c-width'];
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        DaterangepickerComponent.prototype.emitValue = function (val) {
            this.value = val.value.split(",")[0];
            this.fromValue = val.value.split(",")[1];
            this.getvalue.emit({ to: this.value, from: this.fromValue });
        };
        DaterangepickerComponent.prototype.clk = function () {
            var w = this.width;
            if (w == '100%') {
                w = $('#topdiv-' + this.name).width();
            }
            var sd = parseInt(w) - 296;
            $('owl-date-time-container').css({ left: sd });
        };
        DaterangepickerComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "fromValue", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "format", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], DaterangepickerComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Output()
        ], DaterangepickerComponent.prototype, "getvalue", void 0);
        DaterangepickerComponent = __decorate([
            core.Component({
                selector: 'sml-input-daterangepicker',
                template: "\n  <div class=\"position-relative\" id=\"topdiv-{{name}}\">\n  <div class=\"input-field\"\n  [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\" \n  [ngStyle]=\"borderStyle\">\n      <input \n        [value]=\"value\" \n        [name]=\"name\" \n        [owlDateTime]=\"dtRange1\" \n        [selectMode]=\"'range'\" \n        [rangeSeparator]=\"','\"\n        (dateTimeInput)=\"emitValue(getRangeVal)\" \n        class=\"form-control ctrtext\" #getRangeVal required>\n      <input type=\"text\"\n        [value]=\"value\" \n        [name]=\"name\" \n        class=\"form-control\" \n        [ngStyle]=\"valueStyle\">\n      <span class=\"dateSeprator\">to</span>\n      <input \n        type=\"text\" \n        [value]=\"fromValue\"\n        [name]=\"name\" \n        class=\"form-control\"\n        [ngStyle]=\"valueStyle\">\n      <owl-date-time [pickerType]=\"'calendar'\" #dtRange1 [startAt]=\"value\"></owl-date-time>\n      <button [owlDateTimeTrigger]=\"dtRange1\" (click)=\"clk()\" class=\"btn btn-link icon\" type=\"button\"></button>\n      <label class=\"label\" [ngStyle]=\"style\">{{ label }}</label>\n    </div>\n  </div>\n  ",
                styles: ["\n  /* css variable */\n  :host {\n    --c-width: 645px;\n    --c-height: 25px;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n  }\n  /* box css */\n  .position-relative {\n    position: relative;\n    width: var(--c-width) !important;\n  }\n  .input-field {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    min-height: var(--c-height) !important;\n    height: auto;\n    display: flex;\n  }\n  .ctrtext {\n    position: absolute;\n    z-index: -1;\n    opacity: 0\n  }\n  /* control css */\n  .form-control {\n    display: block;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: none;\n    width: 13%;\n    min-height: var(--c-height) !important;\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control {\n    background-color: inherit;\n    box-shadow: none !important;\n  }\n  .signal-line{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n  }\n  /* label css */\n  .label {\n    position: absolute; \n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    padding: 0px !important;\n        text-align: left;\n  }\n  .float-group {\n    position: relative;\n    padding: 14px 24px 2px 0px;\n  }\n  .float-group .form-control {\n    padding-top: var(--value-top);\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: var(--value-left);\n  }\n  .float-group .label {\n    font-size: 9px;\n    font-weight: bold !important;  /* floating lable always bold */\n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  .float-group .form-control:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  .float-group-static .label {\n    font-size: 9px;\n    font-weight: bold !important; \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  \n  .dateSeprator {\n    display: inline-flex;\n    min-width: 30px;\n    color: #2d353c;\n    font-weight: 400;\n    font-size: 14;\n    line-height: 1;\n    justify-content: center;\n    align-items: center\n  }\n  \n  .float-group .dateSeprator {\n    display: block;\n    min-width: 30px;\n    color: #2d353c;\n    font-weight: 400;\n    font-size: 14;\n    line-height: 1.5;\n    justify-content: center;\n    text-align: center;\n    padding-top: var(--value-top);\n  }\n  \n  /* .calenderContainer .form-control:focus + .label,\n  .calenderContainer .form-control:valid + .label,\n  .calenderContainer .form-control[ng-reflect-model] +  .label,\n  .calenderContainer .form-control[aria-owns] +  .label{\n    font-size: 9px;\n    font-weight: bold !important; \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  } */\n  /* button css */\n  button.icon, button.icon:active {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;\n    width: 25px;\n    height: 23px;\n    background-repeat: no-repeat;\n    background-size: 20px;\n    background-position: center;\n    position: absolute;\n    right: 7px;\n    top: 8px;\n  }\n  .float-group button.icon, button.icon:active {\n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .btn-link {\n    font-weight: 400;\n    color: #007bff;\n    background-color: transparent;\n  }\n  .btn {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .btn.btn-link:hover, .btn.btn-link:focus {background-size: cover !important;background-position: center !important;}\n  "]
            })
        ], DaterangepickerComponent);
        return DaterangepickerComponent;
    }());

    var DaterangepickerModule = /** @class */ (function () {
        function DaterangepickerModule() {
        }
        DaterangepickerModule = __decorate([
            core.NgModule({
                declarations: [DaterangepickerComponent],
                imports: [
                    common.CommonModule,
                    ngBootstrap.NgbModule,
                    forms.FormsModule,
                    ngPickDatetime.OwlDateTimeModule,
                    ngPickDatetime.OwlNativeDateTimeModule,
                    ngxMaterialTimepicker.NgxMaterialTimepickerModule,
                ],
                exports: [DaterangepickerComponent]
            })
        ], DaterangepickerModule);
        return DaterangepickerModule;
    }());

    var NumericComponent = /** @class */ (function () {
        function NumericComponent(elementRef) {
            this.elementRef = elementRef;
            this.name = 'sml-input-numberic';
            this.value = null;
            this.label = 'Label Name';
            this.readOnly = false;
            this.switchStyle = true;
            this.signalStyle = false;
            this.staticStyle = true;
            this.getvalue = new core.EventEmitter;
            this.onblur = new core.EventEmitter;
        }
        NumericComponent.prototype.ngOnInit = function () {
        };
        NumericComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        NumericComponent.prototype.clickEvent = function (data) {
            if (data != undefined) {
                this.getvalue.emit(data.replace(/[,$]/g, ''));
            }
        };
        NumericComponent.prototype.getValue = function (event) {
            if (event.target.value != undefined) {
                this.getvalue.emit(event.target.value.replace(/[,$]/g, ''));
            }
        };
        NumericComponent.prototype.onBlur = function (event) {
            if (event.target.value != undefined) {
                this.onblur.emit(event.target.value.replace(/[,$]/g, ''));
            }
        };
        NumericComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "jsonData", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "options", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "readOnly", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], NumericComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Output()
        ], NumericComponent.prototype, "getvalue", void 0);
        __decorate([
            core.Output()
        ], NumericComponent.prototype, "onblur", void 0);
        NumericComponent = __decorate([
            core.Component({
                selector: 'sml-input-numeric',
                template: "<div class=\"position-relative\">\n    <div class=\"input-field\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': \n\nsignalStyle,'float-group-static': staticStyle}\"\n        [ngStyle]=\"borderStyle\">\n        <input class=\"form-control\" currencyMask \n            [(ngModel)]=\"value\" \n            [options]=\"options\" \n            [ngStyle]=\"valueStyle\" \n            [disabled]=\"readOnly\"\n            (click)=\"clickEvent(value)\" \n            (keyup)=\"getValue($event)\" \n            (blur)=\"onBlur($event)\" \n            id=\"{{name}}\" \n            name=\"{{name}}\" required>\n        <label for=\"{{name}}\" class=\"label\" [ngStyle]=\"style\">\n            {{ label }}\n        </label>\n    </div>\n\t</div>\n\t",
                styles: ["\n\t:host{--c-width:645px;--c-height:25px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:0px;}\n\t.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.form-control{display:block;padding-top:0.375rem;padding-right:var(--value-left);padding-bottom:0.375rem;padding-left:0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;text-align:right;min-height:var(--c-height) !important;transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;}\n\t.form-control{background-color:inherit;box-shadow:none !important;}\n\t.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;text-align: left;}\n\t.float-group{position:relative;padding:14px 0px 2px 24px;}\n\t.float-group .form-control{padding-top:var(--value-top);padding-right:var(--value-left);padding-bottom:0px;padding-left:var(--value-left);}\n\t.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t\n    @media all and (-ms-high-contrast:none) {\n        *::-ms-backdrop, .float-group .label {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n\t}\n\t\n\t.float-group .form-control:focus{outline:none !important;box-shadow:none;}\n\t.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.float-group .form-control:focus + label,.float-group .form-control:valid + label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.readOnly{pointer-events:none;opacity:0.7;}\t\n\t"]
            })
        ], NumericComponent);
        return NumericComponent;
    }());

    var NumericModule = /** @class */ (function () {
        function NumericModule() {
        }
        NumericModule = __decorate([
            core.NgModule({
                declarations: [NumericComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    ngxCurrency.NgxCurrencyModule
                ],
                exports: [NumericComponent]
            })
        ], NumericModule);
        return NumericModule;
    }());

    var SelectComponent = /** @class */ (function () {
        function SelectComponent(elementRef) {
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
            this.selectvalue = new core.EventEmitter;
            this.isOpen = false;
        }
        SelectComponent.prototype.ngOnInit = function () {
            if (this.value == "") {
                this.value = null;
            }
        };
        SelectComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
                this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
                this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
                this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
                this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
            }
            if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
                var css = event.borderStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
            }
        };
        SelectComponent.prototype.getselectvalue = function (event) {
            if (event) {
                this.selectvalue.emit(event.id);
            }
            else {
                this.value = null;
                this.selectvalue.emit("");
            }
        };
        SelectComponent.prototype.onOpen = function () {
            this.isOpen = true;
        };
        SelectComponent.prototype.onClose = function () {
            this.isOpen = false;
        };
        SelectComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "clearable", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "listValue", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "swGroupBy", void 0);
        __decorate([
            core.Input()
        ], SelectComponent.prototype, "multiple", void 0);
        __decorate([
            core.Output()
        ], SelectComponent.prototype, "selectvalue", void 0);
        SelectComponent = __decorate([
            core.Component({
                selector: 'sml-input-select',
                template: "\n    <div class=\"position-relative\">\n        <div class=\"input-field\" [ngStyle]=\"borderStyle\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\">\n            <ng-select *ngIf=\"!swGroupBy\" [items]=\"listValue\" bindLabel=\"name\" [clearable]=\"clearable\" [disabled]=\"disabled\" bindValue=\"id\" (change)=\"getselectvalue($event)\"\n                [(ngModel)]=\"value\"   (open)=\"onOpen()\" (close)=\"onClose()\" [multiple]=\"multiple\">\n            </ng-select>\n            <ng-select *ngIf=\"swGroupBy\" [items]=\"listValue\" bindLabel=\"name\" [clearable]=\"clearable\" [disabled]=\"disabled\" bindValue=\"id\" (change)=\"getselectvalue($event)\"\n                [(ngModel)]=\"value\"   (open)=\"onOpen()\" (close)=\"onClose()\" groupBy=\"group\" [multiple]=\"multiple\">\n                <ng-template ng-optgroup-tmp let-item=\"item\">\n                    {{item.group}}\n                </ng-template>\n            </ng-select>\n            <label *ngIf=\"switchStyle\" class=\"label\" [ngClass]=\"{'z-9999': isOpen}\" [ngStyle]=\"style\">\n                {{ label }}\n            </label>\n        </div>\n        <label *ngIf=\"!switchStyle\" class=\"label\"  [ngStyle]=\"style\">\n            {{ label }}\n        </label>\n    </div>\n    ",
                styles: ["\n    :host{--c-width:645px;--c-height:44px;--label-left:4px;--label-top:2px;--value-left:4px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n    .position-relative{position:relative;}\n    .input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n    .float-groupdd{position:relative;padding:0px;}\n    .signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n    .label{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;\n        text-align: left;}\n    .z-9999{z-index:9999;}\n    .float-groupdd .label{position:absolute;top:-24px;left:0px;font-size:12px;}\n    .float-group{position:relative;padding:14px 2px 0px 0px;}\n    .float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}\n    \n\n    @media all and (-ms-high-contrast:none) {\n        *::-ms-backdrop, .float-group .label {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n    }\n    \n    .float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n    :host /deep/ .ng-select .ng-select-container{border:none !important;}\n    :host /deep/ .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}\n    :host /deep/ .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}\n    :host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}\n    "]
            })
        ], SelectComponent);
        return SelectComponent;
    }());

    var SelectModule = /** @class */ (function () {
        function SelectModule() {
        }
        SelectModule = __decorate([
            core.NgModule({
                declarations: [SelectComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    ngSelect.NgSelectModule
                ],
                exports: [SelectComponent]
            })
        ], SelectModule);
        return SelectModule;
    }());

    var DatetimepickerComponent = /** @class */ (function () {
        function DatetimepickerComponent(elementRef) {
            this.elementRef = elementRef;
            this.name = 'sml-timepicker';
            this.staticStyle = false;
            this.getvalue = new core.EventEmitter;
        }
        DatetimepickerComponent.prototype.ngOnInit = function () {
        };
        DatetimepickerComponent.prototype.ngAfterViewInit = function () {
            $('input[id$=' + this.name + ']')['inputmask']("hh:mm:ss", {
                mask: "h:s t\m",
                placeholder: "HH:MM:SS",
                insertMode: false,
                clearMaskOnLostFocus: false,
                showMaskOnHover: false,
                hourFormat: 12
            });
        };
        DatetimepickerComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
        };
        DatetimepickerComponent.prototype.selectChanged = function (event) {
            this.getvalue.emit(event);
        };
        DatetimepickerComponent.prototype.onBlurMethod = function () {
            this.time = $('#' + this.name).val();
            this.getvalue.emit(this.time);
        };
        DatetimepickerComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "time", void 0);
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], DatetimepickerComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Output()
        ], DatetimepickerComponent.prototype, "getvalue", void 0);
        DatetimepickerComponent = __decorate([
            core.Component({
                selector: 'sml-input-timepicker',
                template: "\n\t<div class=\"position-relative\">\n\t<div class=\"input-field\" \n\t  [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n\t  [ngStyle]=\"borderStyle\">\n\t  <input\n\t  \tclass=\"form-control\" \t\n\t  \t[id]=\"name\"\n      \t[name]=\"name\"\n\t\t[ngxTimepicker]=\"picker\"\n\t\t[disableClick]=\"true\"\n\t\t[(ngModel)]=\"time\"\n\t\t(ngModelChange)=\"selectChanged($event)\"\n\t\t(blur)=\"onBlurMethod()\"\n\t\t[ngStyle]=\"valueStyle\"\n\t\tstyle=\"text-transform: uppercase;\"\n\t\trequired>\n\t  <label class=\"label\" [ngStyle]=\"style\">{{ label }}</label>\n\t  <ngx-material-timepicker #picker></ngx-material-timepicker>\n\t  <ngx-material-timepicker-toggle [for]=\"picker\"></ngx-material-timepicker-toggle>\n\t</div>\n  \t</div>\n\t",
                styles: ["\n\t/* css variable */\n\t:host {\n\t\t--c-width: 645px;\n\t\t--c-height: 25px;\n\t\t--label-left: 10px;\n\t\t--label-top: 0px;\n\t\t--value-left: 10px;\n\t\t--value-top: 0px;\n\t}\n\t\n\t/* box css */\n\t.position-relative {\n\t\tposition: relative;\n\t\twidth: var(--c-width) !important;\n\t}\n\t.input-field {\n\t\tborder: 1px solid #dee2e6;\n\t\tborder-radius: 2px;\n\t\tmin-height: var(--c-height) !important;\n\t\theight: auto;\n\t}\n\t/* Control Css */\n\t.form-control {\n\t\tdisplay: block;\n\t\tpadding-top: 0.375rem;\n\t\tpadding-right: 0.75rem;\n\t\tpadding-bottom: 0.375rem;\n\t\tpadding-left: var(--value-left);\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5;\n\t\tcolor: #495057;\n\t\tbackground-color: #fff;\n\t\tbackground-clip: padding-box;\n\t\tborder: none;\n\t\tmin-height: var(--c-height) !important;\n\t\ttransition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n\t}\n\t.form-control {\n\t\tbackground-color: inherit;\n\t\tbox-shadow: none !important;\n\t}\n\t.signal-line{\n\t\tborder-top: none !important;\n\t\tborder-left: none !important;\n\t\tborder-right: none !important;\n\t\tborder-radius: 0px !important;\n\t}\n\t/* labelcss */\n\t.label{\n\t\tposition: absolute; \n\t\ttop: -24px;\n\t\tleft: 0px; \n\t\tfont-size: 12px;\n\t\tpadding: 0px !important;\n        text-align: left;\n\t}\n\t.float-group {\n\t\tposition: relative;\n\t\tpadding: 14px 24px 2px 0px;\n\t}\n\t.float-group .form-control {\n\t\tpadding-top: var(--value-top);\n\t\tpadding-right: 0px;\n\t\tpadding-bottom: 0px;\n\t\tpadding-left: var(--value-left);\n\t}\n\t.float-group .label {\n\t\tfont-size: 12px;\n\t\tfont-weight: normal;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tleft: var(--label-left);\n\t\ttransition: all 200ms;\n\t\topacity: 1;\n\t\tmargin: 0;\n\t\twidth: 87%;\n\t\theight: auto;\n\t}\n\t.float-group .form-control:focus {\n\t\toutline: none !important;\n\t\tbox-shadow: none;\n\t}\n\t.float-group-static .label {\n\t\tfont-size: 9px;\n\t\tfont-weight: bold !important;  /* floating lable always bold */\n\t\tposition: absolute;\n\t\ttop: var(--label-top);\n\t\tleft: var(--label-left);\n\t\ttransform: translateY(0px);\n\t\ttransition: all 200ms;\n\t\topacity: 1;\n\t\tmargin: 0;\n\t\twidth: 87%;\n\t\theight: auto;\n\t}\n\t\n\t.float-group .form-control:focus + label,\n\t.float-group .form-control:valid + label {\n\t\tfont-size: 9px;\n\t\tfont-weight: bold !important;  /* floating lable always bold */\n\t\tposition: absolute;\n\t\ttop: var(--label-top);\n\t\tleft: var(--label-left);\n\t\ttransform: translateY(0px);\n\t\ttransition: all 200ms;\n\t\topacity: 1;\n\t\tmargin: 0;\n\t\twidth: 87%;\n\t\theight: auto;\n\t}\n\tngx-material-timepicker-toggle {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tright: 2px;\n\t\ttransform: translateY(-50%)\n\t}\t\n\t"]
            })
        ], DatetimepickerComponent);
        return DatetimepickerComponent;
    }());

    var TimepickerModule = /** @class */ (function () {
        function TimepickerModule() {
        }
        TimepickerModule = __decorate([
            core.NgModule({
                declarations: [DatetimepickerComponent],
                imports: [
                    common.CommonModule,
                    ngBootstrap.NgbModule.forRoot(),
                    forms.FormsModule,
                    ngPickDatetime.OwlDateTimeModule,
                    ngPickDatetime.OwlNativeDateTimeModule,
                    ngxMaterialTimepicker.NgxMaterialTimepickerModule
                ],
                exports: [DatetimepickerComponent]
            })
        ], TimepickerModule);
        return TimepickerModule;
    }());

    exports.CheckboxComponent = CheckboxComponent;
    exports.CheckboxModule = CheckboxModule;
    exports.ColorPickerComponent = ColorPickerComponent;
    exports.ColorPickersModule = ColorPickersModule;
    exports.DatepickerComponent = DatepickerComponent;
    exports.DatepickerModule = DatepickerModule;
    exports.DaterangepickerComponent = DaterangepickerComponent;
    exports.DaterangepickerModule = DaterangepickerModule;
    exports.DatetimepickerComponent = DatetimepickerComponent;
    exports.NumericComponent = NumericComponent;
    exports.NumericModule = NumericModule;
    exports.RadioComponent = RadioComponent;
    exports.RadioModule = RadioModule;
    exports.SelectComponent = SelectComponent;
    exports.SelectModule = SelectModule;
    exports.SwitchComponent = SwitchComponent;
    exports.SwitchModule = SwitchModule;
    exports.TagInputComponent = TagInputComponent;
    exports.TagInputModule = TagInputModule;
    exports.TextComponent = TextComponent;
    exports.TextModule = TextModule;
    exports.TextareaComponent = TextareaComponent;
    exports.TextareaModule = TextareaModule;
    exports.TimepickerModule = TimepickerModule;
    exports.UpdownComponent = UpdownComponent;
    exports.UpdownModule = UpdownModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sml-inputs-nine.umd.js.map
