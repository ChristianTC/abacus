import { __assign, __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
var CropImageUploadComponent = /** @class */ (function () {
    function CropImageUploadComponent(http) {
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
    CropImageUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ratioCal();
        if (this.value != '0' && this.value != 0) {
            var body = { FilesId: this.value };
            var url = this.url + "Data/Exec/" + this.database + "/" + this.schema + "/FILES_Retrieve?api_key=" + this.genericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(function (files) {
                if (files != undefined && files != null && files != '') {
                    _this.imagePath = _this.path + files[0].FileUrl;
                }
            });
        }
    };
    CropImageUploadComponent.prototype.ratioCal = function () {
        if (this.type == 'square' && this.ratio != '') {
            var total = parseInt(this.width) + parseInt(this.height);
            var arr = this.ratio.split(":");
            if (arr.length == 2) {
                var ratioTotal = parseInt(arr[0]) + parseInt(arr[1]);
                var w = ((total * parseInt(arr[0])) / ratioTotal).toFixed(0);
                var h = ((total * parseInt(arr[1])) / ratioTotal).toFixed(0);
                this.width = w;
                this.height = h;
                this.capWidth = ((100 * parseInt(arr[0])) / ratioTotal).toFixed(0);
                this.capHeight = ((100 * parseInt(arr[1])) / ratioTotal).toFixed(0);
            }
        }
    };
    CropImageUploadComponent.prototype.fileChangeEvent = function (fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            this.imageName = fileInput.target.files["0"].name;
            $("#openModalBtn").click();
            this.imageChangedEvent = fileInput;
            this.isUploadArea = false;
        }
    };
    CropImageUploadComponent.prototype.cancleClick = function () {
        this.croppedImage = "";
        this.isHtmlbind = false;
        this.isUploadArea = true;
        this.percentDone = 0;
    };
    CropImageUploadComponent.prototype.upload = function () {
        var _this = this;
        this.imagePath = "";
        this.isUploadStart = true;
        this.isHtmlbind = false;
        this.isUploadArea = true;
        var block = this.croppedImage.split(";");
        var contentType = block[0].split(":")[1];
        var realData = block[1].split(",")[1];
        var blob = b64toBlob(realData, contentType);
        var formData = new FormData();
        formData.append('file', blob, this.imageName);
        formData.append('id', this.value);
        formData.append('filegroupid', this.value);
        formData.append('mediaType', 'profilepic');
        formData.append('description', this.imageName);
        this.http.post(this.url + "uploader/uploadnew", formData, { reportProgress: true, observe: 'events' })
            .subscribe(function (event) {
            if (event.type === HttpEventType.UploadProgress) {
                _this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                _this.imagePath = _this.path + event.body['FileUrl'];
                _this.isUploadStart = false;
                _this.percentDone = 0;
                _this.OnSaveFile.emit({ event: event });
                _this.croppedImage = "";
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
    };
    CropImageUploadComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    CropImageUploadComponent.prototype.zoomOut = function () {
        this.scale -= .1;
        this.transform = __assign(__assign({}, this.transform), { scale: this.scale });
    };
    CropImageUploadComponent.prototype.zoomIn = function () {
        this.scale += .1;
        this.transform = __assign(__assign({}, this.transform), { scale: this.scale });
    };
    CropImageUploadComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
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
    CropImageUploadComponent = __decorate([
        Component({
            selector: 'sml-crop-image-upload',
            template: "\n    <div class=\"homewrap\">\n        <div class=\"imgd_area d_flex\" *ngIf=\"isUploadArea\" [ngClass]=\"{'b-2': imagePath == '' ,'b-r': type == 'circle'}\" [ngStyle]=\"{'height.px': height,'width.px': width}\">\n            <div class=\"d_flex w-100 position-relative flex-column justify-content-center align-items-center\">\n                <div *ngIf=\"imagePath != '' && !isUploadStart\">\n                    <img [src]=\"imagePath\" name=\"profile_images\" id=\"profile_images\" />\n                </div>\n                <div *ngIf=\"imagePath == '' && !isUploadStart\">\n                    <img src=\"assets/cloud-upload-arrow.svg\">\n                    <span class=\"text-black-50 fz11 mb-1\">Drag & Drop</span>\n                </div>\n                <div class=\"percentage-div\" *ngIf=\"isUploadStart\">\n                    {{percentDone}}%\n                </div>\n                <input type=\"file\" class=\"file_input\" id=\"upload\" (change)=\"fileChangeEvent($event)\" accept=\"image/*\">\n            </div>\n        </div>\n        <div *ngIf=\"isHtmlbind\" class=\"w-100 text-center\">\n            <img id=\"htmlbinds\" [ngClass]=\"{'b-r': type == 'circle'}\" [src]=\"croppedImage\" [width]=\"width\" [height]=\"height\">\n        </div>\n        <div class=\"text-center mt-2\" *ngIf=\"isHtmlbind\">\n            <a (click)=\"upload()\" class=\"mr-4 btn_link\">Upload</a>\n            <a (click)=\"cancleClick()\" class=\"btn_link\">Cancel</a>\n        </div>\n    </div>\n<button type=\"button\" style=\"opacity: 0;\" id=\"openModalBtn\" data-toggle=\"modal\" data-target=\"#cropModal\">Open</button>\n<div id=\"cropModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title mt-0\">Crop Image</h4>\n                <div style=\"position: absolute;right: 128px;top: 11px;\">\n                    <img [src]=\"croppedImage\" [ngClass]=\"{'b-r': type == 'circle'}\" [width]=\"capWidth\" [height]=\"capHeight\" [style.border]=\"croppedImage ? '1px solid black' : 'none'\" />\n                </div>\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"zoomIn()\">\n                        <span class=\"fa fa-search-plus\"></span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"zoomOut()\">\n                        <span class=\"fa fa-search-minus\"></span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"modal-body\" style=\"position: relative;flex: 1 1 auto;padding: 1rem;\" >\n                <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [transform]=\"transform\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"aspectRatio\"\n                    [cropperMinWidth]=\"width\" [resizeToWidth]=\"width\" format=\"png,jpeg\" [roundCropper]=\"type == 'circle'? true:false\"\n                    (imageCropped)=\"imageCropped($event)\">\n                </image-cropper>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"isHtmlbind = true;\" data-dismiss=\"modal\">Apply</button>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancleClick()\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n  ",
            styles: ["\n  .homewrap {height: auto;width: 100%}\n  .imgd_area {height: 150px;width: 150px;overflow: hidden;margin: 0 auto;}\n  .percentage-div{font-size: 25px;font-weight: 700;color: #00ACAC;}\n  .b-2{border: 2px dashed #ccc;}\n  .b-r{border-radius: 100%;}\n  .text-black-50 {color: #a6a9ab;}\n  .file_input {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}\n  .fz11 {font-size: 11px;}\n  .d_flex {display: flex;}\n  .htmlbinds:nth-child(2) {display: none;}\n  .htmlbinds {height: 100%;width: 100%;object-fit: cover;}\n  .flex-column {-webkit-box-orient: vertical!important;-webkit-box-direction: normal!important;-ms-flex-direction: column!important;flex-direction: column!important;}\n  .position-relative {position: relative!important;}\n  .w-100 {width: 100%;}\n  .justify-content-center {-webkit-box-pack: center!important;-ms-flex-pack: center!important;justify-content: center!important;}\n  .btn_link{font-size: 18px;font-weight: 600;cursor: pointer;}\n  "]
        })
    ], CropImageUploadComponent);
    return CropImageUploadComponent;
}());
export { CropImageUploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcC1pbWFnZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9jcm9wLWltYWdlLXVwbG9hZC9jcm9wLWltYWdlLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWtGekc7SUFnQ0Usa0NBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUE5QjNCLFdBQU0sR0FBUSxHQUFHLENBQUM7UUFDbEIsVUFBSyxHQUFRLEdBQUcsQ0FBQztRQUNqQixTQUFJLEdBQVEsUUFBUSxDQUFDO1FBQ3JCLFVBQUssR0FBUSxHQUFHLENBQUM7UUFDakIsVUFBSyxHQUFRLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsUUFBRyxHQUFXLGtDQUFrQyxDQUFDO1FBQ2pELFNBQUksR0FBVyxtQ0FBbUMsQ0FBQztRQUNuRCxpQkFBWSxHQUFRLGtFQUFrRSxDQUFDO1FBQ3ZGLGFBQVEsR0FBUSxTQUFTLENBQUM7UUFDMUIsV0FBTSxHQUFRLE1BQU0sQ0FBQztRQUNwQixlQUFVLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFFeEMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBVyxjQUFjLENBQUM7UUFDbkMsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQVEsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLGtCQUFhLEdBQVEsS0FBSyxD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QXlJcEM7SUFBRCwrQkFBQztDQUFBLEFBeklELElBeUlDO1NBeklZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IERpbWVuc2lvbnMsIEltYWdlQ3JvcHBlZEV2ZW50LCBJbWFnZVRyYW5zZm9ybSB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtY3JvcC1pbWFnZS11cGxvYWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaG9tZXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nZF9hcmVhIGRfZmxleFwiICpuZ0lmPVwiaXNVcGxvYWRBcmVhXCIgW25nQ2xhc3NdPVwieydiLTInOiBpbWFnZVBhdGggPT0gJycgLCdiLXInOiB0eXBlID09ICdjaXJjbGUnfVwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0LnB4JzogaGVpZ2h0LCd3aWR0aC5weCc6IHdpZHRofVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZF9mbGV4IHctMTAwIHBvc2l0aW9uLXJlbGF0aXZlIGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW1hZ2VQYXRoICE9ICcnICYmICFpc1VwbG9hZFN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cImltYWdlUGF0aFwiIG5hbWU9XCJwcm9maWxlX2ltYWdlc1wiIGlkPVwicHJvZmlsZV9pbWFnZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW1hZ2VQYXRoID09ICcnICYmICFpc1VwbG9hZFN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvY2xvdWQtdXBsb2FkLWFycm93LnN2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ibGFjay01MCBmejExIG1iLTFcIj5EcmFnICYgRHJvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcmNlbnRhZ2UtZGl2XCIgKm5nSWY9XCJpc1VwbG9hZFN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3twZXJjZW50RG9uZX19JVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImZpbGVfaW5wdXRcIiBpZD1cInVwbG9hZFwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBhY2NlcHQ9XCJpbWFnZS8qXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpc0h0bWxiaW5kXCIgY2xhc3M9XCJ3LTEwMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nIGlkPVwiaHRtbGJpbmRzXCIgW25nQ2xhc3NdPVwieydiLXInOiB0eXBlID09ICdjaXJjbGUnfVwiIFtzcmNdPVwiY3JvcHBlZEltYWdlXCIgW3dpZHRoXT1cIndpZHRoXCIgW2hlaWdodF09XCJoZWlnaHRcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMlwiICpuZ0lmPVwiaXNIdG1sYmluZFwiPlxyXG4gICAgICAgICAgICA8YSAoY2xpY2spPVwidXBsb2FkKClcIiBjbGFzcz1cIm1yLTQgYnRuX2xpbmtcIj5VcGxvYWQ8L2E+XHJcbiAgICAgICAgICAgIDxhIChjbGljayk9XCJjYW5jbGVDbGljaygpXCIgY2xhc3M9XCJidG5fbGlua1wiPkNhbmNlbDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm9wYWNpdHk6IDA7XCIgaWQ9XCJvcGVuTW9kYWxCdG5cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjY3JvcE1vZGFsXCI+T3BlbjwvYnV0dG9uPlxyXG48ZGl2IGlkPVwiY3JvcE1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlIG10LTBcIj5Dcm9wIEltYWdlPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDEyOHB4O3RvcDogMTFweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiY3JvcHBlZEltYWdlXCIgW25nQ2xhc3NdPVwieydiLXInOiB0eXBlID09ICdjaXJjbGUnfVwiIFt3aWR0aF09XCJjYXBXaWR0aFwiIFtoZWlnaHRdPVwiY2FwSGVpZ2h0XCIgW3N0eWxlLmJvcmRlcl09XCJjcm9wcGVkSW1hZ2UgPyAnMXB4IHNvbGlkIGJsYWNrJyA6ICdub25lJ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJ6b29tSW4oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXNlYXJjaC1wbHVzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInpvb21PdXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXNlYXJjaC1taW51c1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtmbGV4OiAxIDEgYXV0bztwYWRkaW5nOiAxcmVtO1wiID5cclxuICAgICAgICAgICAgICAgIDxpbWFnZS1jcm9wcGVyIFtpbWFnZUNoYW5nZWRFdmVudF09XCJpbWFnZUNoYW5nZWRFdmVudFwiIFt0cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCIgW21haW50YWluQXNwZWN0UmF0aW9dPVwidHJ1ZVwiIFthc3BlY3RSYXRpb109XCJhc3BlY3RSYXRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2Nyb3BwZXJNaW5XaWR0aF09XCJ3aWR0aFwiIFtyZXNpemVUb1dpZHRoXT1cIndpZHRoXCIgZm9ybWF0PVwicG5nLGpwZWdcIiBbcm91bmRDcm9wcGVyXT1cInR5cGUgPT0gJ2NpcmNsZSc/IHRydWU6ZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIChpbWFnZUNyb3BwZWQpPVwiaW1hZ2VDcm9wcGVkKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvaW1hZ2UtY3JvcHBlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImlzSHRtbGJpbmQgPSB0cnVlO1wiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+QXBwbHk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cImNhbmNsZUNsaWNrKClcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC5ob21ld3JhcCB7aGVpZ2h0OiBhdXRvO3dpZHRoOiAxMDAlfVxyXG4gIC5pbWdkX2FyZWEge2hlaWdodDogMTUwcHg7d2lkdGg6IDE1MHB4O292ZXJmbG93OiBoaWRkZW47bWFyZ2luOiAwIGF1dG87fVxyXG4gIC5wZXJjZW50YWdlLWRpdntmb250LXNpemU6IDI1cHg7Zm9udC13ZWlnaHQ6IDcwMDtjb2xvcjogIzAwQUNBQzt9XHJcbiAgLmItMntib3JkZXI6IDJweCBkYXNoZWQgI2NjYzt9XHJcbiAgLmItcntib3JkZXItcmFkaXVzOiAxMDAlO31cclxuICAudGV4dC1ibGFjay01MCB7Y29sb3I6ICNhNmE5YWI7fVxyXG4gIC5maWxlX2lucHV0IHt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDtsZWZ0OiAwO29wYWNpdHk6IDB9XHJcbiAgLmZ6MTEge2ZvbnQtc2l6ZTogMTFweDt9XHJcbiAgLmRfZmxleCB7ZGlzcGxheTogZmxleDt9XHJcbiAgLmh0bWxiaW5kczpudGgtY2hpbGQoMikge2Rpc3BsYXk6IG5vbmU7fVxyXG4gIC5odG1sYmluZHMge2hlaWdodDogMTAwJTt3aWR0aDogMTAwJTtvYmplY3QtZml0OiBjb3Zlcjt9XHJcbiAgLmZsZXgtY29sdW1uIHstd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsIWltcG9ydGFudDstd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbCFpbXBvcnRhbnQ7LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4haW1wb3J0YW50O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW4haW1wb3J0YW50O31cclxuICAucG9zaXRpb24tcmVsYXRpdmUge3Bvc2l0aW9uOiByZWxhdGl2ZSFpbXBvcnRhbnQ7fVxyXG4gIC53LTEwMCB7d2lkdGg6IDEwMCU7fVxyXG4gIC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHstd2Via2l0LWJveC1wYWNrOiBjZW50ZXIhaW1wb3J0YW50Oy1tcy1mbGV4LXBhY2s6IGNlbnRlciFpbXBvcnRhbnQ7anVzdGlmeS1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O31cclxuICAuYnRuX2xpbmt7Zm9udC1zaXplOiAxOHB4O2ZvbnQtd2VpZ2h0OiA2MDA7Y3Vyc29yOiBwb2ludGVyO31cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JvcEltYWdlVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgaGVpZ2h0OiBhbnkgPSAxNTA7XHJcbiAgQElucHV0KCkgd2lkdGg6IGFueSA9IDE1MDtcclxuICBASW5wdXQoKSB0eXBlOiBhbnkgPSAnY2lyY2xlJztcclxuICBASW5wdXQoKSB2YWx1ZTogYW55ID0gJzAnO1xyXG4gIEBJbnB1dCgpIHJhdGlvOiBhbnkgPSAnMToxJztcclxuICBASW5wdXQoKSBhc3BlY3RSYXRpbzogYW55ID0gMSAvIDE7XHJcbiAgQElucHV0KCkgdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9tb2JpbGZ5LmFhYWRldi5pbmZvL2FwaS8nO1xyXG4gIEBJbnB1dCgpIHBhdGg6IHN0cmluZyA9ICdodHRwOi8vbW9iaWxmeS5hYWFkZXYuaW5mby9tZWRpYS8nO1xyXG4gIEBJbnB1dCgpIGdlbmVyaWNUb2tlbjogYW55ID0gXCJiZmI4ODMxNTA0NTY0ODYxYTg2NDI3NWQ4NWY4NDhmOGJmYjg4MzE1MDQ1NjQ4NjFhODY0Mjc1ZDg1Zjg0OGY4XCI7XHJcbiAgQElucHV0KCkgZGF0YWJhc2U6IGFueSA9IFwiTU9CSUxGWVwiO1xyXG4gIEBJbnB1dCgpIHNjaGVtYTogYW55ID0gXCJjb3JlXCI7XHJcbiAgQE91dHB1dCgpIE9uU2F2ZUZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICBjYXBXaWR0aDogYW55ID0gNTA7XHJcbiAgY2FwSGVpZ2h0OiBhbnkgPSA1MDtcclxuICBpbWFnZU5hbWU6IHN0cmluZyA9ICdjcm9wX3BpY3R1cmUnO1xyXG4gIGltYWdlUGF0aDogYW55ID0gJyc7XHJcbiAgaXNIdG1sYmluZDogYW55ID0gZmFsc2U7XHJcbiAgaXNVcGxvYWRBcmVhOiBhbnkgPSB0cnVlO1xyXG4gIGlzVXBsb2FkU3RhcnQ6IGFueSA9IGZhbHNlO1xyXG4gIHBlcmNlbnREb25lOiBudW1iZXI7XHJcbiAgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9ICcnO1xyXG4gIGNyb3BwZWRJbWFnZTogYW55ID0gJyc7XHJcbiAgc2NhbGUgPSAxO1xyXG4gIHRyYW5zZm9ybTogSW1hZ2VUcmFuc2Zvcm0gPSB7fTtcclxuICBodHRwT3B0aW9uSlNPTiA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0pXHJcbiAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJhdGlvQ2FsKCk7XHJcbiAgICBpZiAodGhpcy52YWx1ZSAhPSAnMCcgJiYgdGhpcy52YWx1ZSAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IEZpbGVzSWQ6IHRoaXMudmFsdWUgfTtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwgKyBcIkRhdGEvRXhlYy9cIiArIHRoaXMuZGF0YWJhc2UgKyBcIi9cIiArIHRoaXMuc2NoZW1hICsgXCIvRklMRVNfUmV0cmlldmU/YXBpX2tleT1cIiArIHRoaXMuZ2VuZXJpY1Rva2VuO1xyXG4gICAgICB0aGlzLmh0dHAucG9zdCh1cmwsIGJvZHksIHRoaXMuaHR0cE9wdGlvbkpTT04pLnN1YnNjcmliZShmaWxlcyA9PiB7XHJcbiAgICAgICAgaWYgKGZpbGVzICE9IHVuZGVmaW5lZCAmJiBmaWxlcyAhPSBudWxsICYmIGZpbGVzICE9ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLmltYWdlUGF0aCA9IHRoaXMucGF0aCArIGZpbGVzWzBdLkZpbGVVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmF0aW9DYWwoKSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09ICdzcXVhcmUnICYmIHRoaXMucmF0aW8gIT0gJycpIHtcclxuICAgICAgbGV0IHRvdGFsID0gcGFyc2VJbnQodGhpcy53aWR0aCkgKyBwYXJzZUludCh0aGlzLmhlaWdodCk7XHJcbiAgICAgIGxldCBhcnIgPSB0aGlzLnJhdGlvLnNwbGl0KFwiOlwiKTtcclxuICAgICAgaWYgKGFyci5sZW5ndGggPT0gMikge1xyXG4gICAgICAgIGxldCByYXRpb1RvdGFsID0gcGFyc2VJbnQoYXJyWzBdKSArIHBhcnNlSW50KGFyclsxXSk7XHJcbiAgICAgICAgbGV0IHcgPSAoKHRvdGFsICogcGFyc2VJbnQoYXJyWzBdKSkgLyByYXRpb1RvdGFsKS50b0ZpeGVkKDApO1xyXG4gICAgICAgIGxldCBoID0gKCh0b3RhbCAqIHBhcnNlSW50KGFyclsxXSkpIC8gcmF0aW9Ub3RhbCkudG9GaXhlZCgwKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGg7XHJcbiAgICAgICAgdGhpcy5jYXBXaWR0aCA9ICgoMTAwICogcGFyc2VJbnQoYXJyWzBdKSkgLyByYXRpb1RvdGFsKS50b0ZpeGVkKDApO1xyXG4gICAgICAgIHRoaXMuY2FwSGVpZ2h0ID0gKCgxMDAgKiBwYXJzZUludChhcnJbMV0pKSAvIHJhdGlvVG90YWwpLnRvRml4ZWQoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZmlsZUNoYW5nZUV2ZW50KGZpbGVJbnB1dDogYW55KSB7XHJcbiAgICBpZiAoZmlsZUlucHV0LnRhcmdldC5maWxlcyAmJiBmaWxlSW5wdXQudGFyZ2V0LmZpbGVzWzBdKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VOYW1lID0gZmlsZUlucHV0LnRhcmdldC5maWxlc1tcIjBcIl0ubmFtZTtcclxuICAgICAgJChcIiNvcGVuTW9kYWxCdG5cIikuY2xpY2soKTtcclxuICAgICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IGZpbGVJbnB1dDtcclxuICAgICAgdGhpcy5pc1VwbG9hZEFyZWEgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgY2FuY2xlQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNyb3BwZWRJbWFnZSA9IFwiXCI7XHJcbiAgICB0aGlzLmlzSHRtbGJpbmQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNVcGxvYWRBcmVhID0gdHJ1ZTtcclxuICAgIHRoaXMucGVyY2VudERvbmUgPSAwO1xyXG4gIH1cclxuICB1cGxvYWQoKSB7XHJcbiAgICB0aGlzLmltYWdlUGF0aCA9IFwiXCI7XHJcbiAgICB0aGlzLmlzVXBsb2FkU3RhcnQgPSB0cnVlO1xyXG4gICAgdGhpcy5pc0h0bWxiaW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzVXBsb2FkQXJlYSA9IHRydWU7XHJcbiAgICBsZXQgYmxvY2sgPSB0aGlzLmNyb3BwZWRJbWFnZS5zcGxpdChcIjtcIik7XHJcbiAgICBsZXQgY29udGVudFR5cGUgPSBibG9ja1swXS5zcGxpdChcIjpcIilbMV07XHJcbiAgICBsZXQgcmVhbERhdGEgPSBibG9ja1sxXS5zcGxpdChcIixcIilbMV07XHJcbiAgICBsZXQgYmxvYiA9IGI2NHRvQmxvYihyZWFsRGF0YSwgY29udGVudFR5cGUpO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iLCB0aGlzLmltYWdlTmFtZSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCB0aGlzLnZhbHVlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZWdyb3VwaWQnLCB0aGlzLnZhbHVlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnbWVkaWFUeXBlJywgJ3Byb2ZpbGVwaWMnKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCB0aGlzLmltYWdlTmFtZSk7XHJcbiAgICB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCArIFwidXBsb2FkZXIvdXBsb2FkbmV3XCIsIGZvcm1EYXRhLCB7IHJlcG9ydFByb2dyZXNzOiB0cnVlLCBvYnNlcnZlOiAnZXZlbnRzJyB9KVxyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgdGhpcy5wZXJjZW50RG9uZSA9IE1hdGgucm91bmQoMTAwICogZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy5wYXRoICsgZXZlbnQuYm9keVsnRmlsZVVybCddO1xyXG4gICAgICAgICAgdGhpcy5pc1VwbG9hZFN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnBlcmNlbnREb25lID0gMDtcclxuICAgICAgICAgIHRoaXMuT25TYXZlRmlsZS5lbWl0KHsgZXZlbnQgfSk7XHJcbiAgICAgICAgICB0aGlzLmNyb3BwZWRJbWFnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIGZ1bmN0aW9uIGI2NHRvQmxvYihiNjREYXRhLCBjb250ZW50VHlwZSkge1xyXG4gICAgICBjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8ICcnO1xyXG4gICAgICB2YXIgc2xpY2VTaXplID0gc2xpY2VTaXplIHx8IDUxMjtcclxuICAgICAgdmFyIGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcclxuICAgICAgdmFyIGJ5dGVBcnJheXMgPSBbXTtcclxuICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgYnl0ZUNoYXJhY3RlcnMubGVuZ3RoOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XHJcbiAgICAgICAgdmFyIHNsaWNlID0gYnl0ZUNoYXJhY3RlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xyXG4gICAgICAgIHZhciBieXRlTnVtYmVycyA9IG5ldyBBcnJheShzbGljZS5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGJ5dGVOdW1iZXJzW2ldID0gc2xpY2UuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcclxuICAgICAgICBieXRlQXJyYXlzLnB1c2goYnl0ZUFycmF5KTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKGJ5dGVBcnJheXMsIHsgdHlwZTogY29udGVudFR5cGUgfSk7XHJcbiAgICAgIHJldHVybiBibG9iO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50KSB7XHJcbiAgICB0aGlzLmNyb3BwZWRJbWFnZSA9IGV2ZW50LmJhc2U2NDtcclxuICB9XHJcbiAgem9vbU91dCgpIHtcclxuICAgIHRoaXMuc2NhbGUgLT0gLjE7XHJcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHtcclxuICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlXHJcbiAgICB9O1xyXG4gIH1cclxuICB6b29tSW4oKSB7XHJcbiAgICB0aGlzLnNjYWxlICs9IC4xO1xyXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgIC4uLnRoaXMudHJhbnNmb3JtLFxyXG4gICAgICBzY2FsZTogdGhpcy5zY2FsZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19