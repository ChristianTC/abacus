import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
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
CropImageUploadComponent = __decorate([
    Component({
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
    })
], CropImageUploadComponent);
export { CropImageUploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcC1pbWFnZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9jcm9wLWltYWdlLXVwbG9hZC9jcm9wLWltYWdlLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWtGekcsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFnQ25DLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUE5QjNCLFdBQU0sR0FBUSxHQUFHLENBQUM7UUFDbEIsVUFBSyxHQUFRLEdBQUcsQ0FBQztRQUNqQixTQUFJLEdBQVEsUUFBUSxDQUFDO1FBQ3JCLFVBQUssR0FBUSxHQUFHLENBQUM7UUFDakIsVUFBSyxHQUFRLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsUUFBRyxHQUFXLGtDQUFrQyxDQUFDO1FBQ2pELFNBQUksR0FBVyxtQ0FBbUMsQ0FBQztRQUNuRCxpQkFBWSxHQUFRLGtFQUFrRSxDQUFDO1FBQ3ZGLGFBQVEsR0FBUSxTQUFTLENBQUM7UUFDMUIsV0FBTSxHQUFRLE1BQU0sQ0FBQztRQUNwQixlQUFVLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFFeEMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBVyxjQUFjLENBQUM7UUFDbkMsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQVEsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVEsSUFB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Ozs7Ozs7Ozs7O0dBaUJSO0tBQ0YsQ0FBQztHQUNXLHdCQUF3QixDQXlJcEM7U0F6SVksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCwgSHR0cEV2ZW50VHlwZSwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRGltZW5zaW9ucywgSW1hZ2VDcm9wcGVkRXZlbnQsIEltYWdlVHJhbnNmb3JtIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NtbC1jcm9wLWltYWdlLXVwbG9hZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJob21ld3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWdkX2FyZWEgZF9mbGV4XCIgKm5nSWY9XCJpc1VwbG9hZEFyZWFcIiBbbmdDbGFzc109XCJ7J2ItMic6IGltYWdlUGF0aCA9PSAnJyAsJ2Itcic6IHR5cGUgPT0gJ2NpcmNsZSd9XCIgW25nU3R5bGVdPVwieydoZWlnaHQucHgnOiBoZWlnaHQsJ3dpZHRoLnB4Jzogd2lkdGh9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkX2ZsZXggdy0xMDAgcG9zaXRpb24tcmVsYXRpdmUgZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpbWFnZVBhdGggIT0gJycgJiYgIWlzVXBsb2FkU3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiaW1hZ2VQYXRoXCIgbmFtZT1cInByb2ZpbGVfaW1hZ2VzXCIgaWQ9XCJwcm9maWxlX2ltYWdlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpbWFnZVBhdGggPT0gJycgJiYgIWlzVXBsb2FkU3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9jbG91ZC11cGxvYWQtYXJyb3cuc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJsYWNrLTUwIGZ6MTEgbWItMVwiPkRyYWcgJiBEcm9wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVyY2VudGFnZS1kaXZcIiAqbmdJZj1cImlzVXBsb2FkU3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e3BlcmNlbnREb25lfX0lXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiZmlsZV9pbnB1dFwiIGlkPVwidXBsb2FkXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIGFjY2VwdD1cImltYWdlLypcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImlzSHRtbGJpbmRcIiBjbGFzcz1cInctMTAwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgaWQ9XCJodG1sYmluZHNcIiBbbmdDbGFzc109XCJ7J2Itcic6IHR5cGUgPT0gJ2NpcmNsZSd9XCIgW3NyY109XCJjcm9wcGVkSW1hZ2VcIiBbd2lkdGhdPVwid2lkdGhcIiBbaGVpZ2h0XT1cImhlaWdodFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0yXCIgKm5nSWY9XCJpc0h0bWxiaW5kXCI+XHJcbiAgICAgICAgICAgIDxhIChjbGljayk9XCJ1cGxvYWQoKVwiIGNsYXNzPVwibXItNCBidG5fbGlua1wiPlVwbG9hZDwvYT5cclxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cImNhbmNsZUNsaWNrKClcIiBjbGFzcz1cImJ0bl9saW5rXCI+Q2FuY2VsPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwib3BhY2l0eTogMDtcIiBpZD1cIm9wZW5Nb2RhbEJ0blwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNjcm9wTW9kYWxcIj5PcGVuPC9idXR0b24+XHJcbjxkaXYgaWQ9XCJjcm9wTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiByb2xlPVwiZGlhbG9nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGUgbXQtMFwiPkNyb3AgSW1hZ2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMTI4cHg7dG9wOiAxMXB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJjcm9wcGVkSW1hZ2VcIiBbbmdDbGFzc109XCJ7J2Itcic6IHR5cGUgPT0gJ2NpcmNsZSd9XCIgW3dpZHRoXT1cImNhcFdpZHRoXCIgW2hlaWdodF09XCJjYXBIZWlnaHRcIiBbc3R5bGUuYm9yZGVyXT1cImNyb3BwZWRJbWFnZSA/ICcxcHggc29saWQgYmxhY2snIDogJ25vbmUnXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInpvb21JbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc2VhcmNoLXBsdXNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiem9vbU91dCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc2VhcmNoLW1pbnVzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO2ZsZXg6IDEgMSBhdXRvO3BhZGRpbmc6IDFyZW07XCIgPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlLWNyb3BwZXIgW2ltYWdlQ2hhbmdlZEV2ZW50XT1cImltYWdlQ2hhbmdlZEV2ZW50XCIgW3RyYW5zZm9ybV09XCJ0cmFuc2Zvcm1cIiBbbWFpbnRhaW5Bc3BlY3RSYXRpb109XCJ0cnVlXCIgW2FzcGVjdFJhdGlvXT1cImFzcGVjdFJhdGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBbY3JvcHBlck1pbldpZHRoXT1cIndpZHRoXCIgW3Jlc2l6ZVRvV2lkdGhdPVwid2lkdGhcIiBmb3JtYXQ9XCJwbmcsanBlZ1wiIFtyb3VuZENyb3BwZXJdPVwidHlwZSA9PSAnY2lyY2xlJz8gdHJ1ZTpmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGltYWdlQ3JvcHBlZCk9XCJpbWFnZUNyb3BwZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPC9pbWFnZS1jcm9wcGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiaXNIdG1sYmluZCA9IHRydWU7XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5BcHBseTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwiY2FuY2xlQ2xpY2soKVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgLmhvbWV3cmFwIHtoZWlnaHQ6IGF1dG87d2lkdGg6IDEwMCV9XHJcbiAgLmltZ2RfYXJlYSB7aGVpZ2h0OiAxNTBweDt3aWR0aDogMTUwcHg7b3ZlcmZsb3c6IGhpZGRlbjttYXJnaW46IDAgYXV0bzt9XHJcbiAgLnBlcmNlbnRhZ2UtZGl2e2ZvbnQtc2l6ZTogMjVweDtmb250LXdlaWdodDogNzAwO2NvbG9yOiAjMDBBQ0FDO31cclxuICAuYi0ye2JvcmRlcjogMnB4IGRhc2hlZCAjY2NjO31cclxuICAuYi1ye2JvcmRlci1yYWRpdXM6IDEwMCU7fVxyXG4gIC50ZXh0LWJsYWNrLTUwIHtjb2xvcjogI2E2YTlhYjt9XHJcbiAgLmZpbGVfaW5wdXQge3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IDA7b3BhY2l0eTogMH1cclxuICAuZnoxMSB7Zm9udC1zaXplOiAxMXB4O31cclxuICAuZF9mbGV4IHtkaXNwbGF5OiBmbGV4O31cclxuICAuaHRtbGJpbmRzOm50aC1jaGlsZCgyKSB7ZGlzcGxheTogbm9uZTt9XHJcbiAgLmh0bWxiaW5kcyB7aGVpZ2h0OiAxMDAlO3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvdmVyO31cclxuICAuZmxleC1jb2x1bW4gey13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwhaW1wb3J0YW50Oy13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsIWltcG9ydGFudDstbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbiFpbXBvcnRhbnQ7ZmxleC1kaXJlY3Rpb246IGNvbHVtbiFpbXBvcnRhbnQ7fVxyXG4gIC5wb3NpdGlvbi1yZWxhdGl2ZSB7cG9zaXRpb246IHJlbGF0aXZlIWltcG9ydGFudDt9XHJcbiAgLnctMTAwIHt3aWR0aDogMTAwJTt9XHJcbiAgLmp1c3RpZnktY29udGVudC1jZW50ZXIgey13ZWJraXQtYm94LXBhY2s6IGNlbnRlciFpbXBvcnRhbnQ7LW1zLWZsZXgtcGFjazogY2VudGVyIWltcG9ydGFudDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7fVxyXG4gIC5idG5fbGlua3tmb250LXNpemU6IDE4cHg7Zm9udC13ZWlnaHQ6IDYwMDtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcm9wSW1hZ2VVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBoZWlnaHQ6IGFueSA9IDE1MDtcclxuICBASW5wdXQoKSB3aWR0aDogYW55ID0gMTUwO1xyXG4gIEBJbnB1dCgpIHR5cGU6IGFueSA9ICdjaXJjbGUnO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSAnMCc7XHJcbiAgQElucHV0KCkgcmF0aW86IGFueSA9ICcxOjEnO1xyXG4gIEBJbnB1dCgpIGFzcGVjdFJhdGlvOiBhbnkgPSAxIC8gMTtcclxuICBASW5wdXQoKSB1cmw6IHN0cmluZyA9ICdodHRwczovL21vYmlsZnkuYWFhZGV2LmluZm8vYXBpLyc7XHJcbiAgQElucHV0KCkgcGF0aDogc3RyaW5nID0gJ2h0dHA6Ly9tb2JpbGZ5LmFhYWRldi5pbmZvL21lZGlhLyc7XHJcbiAgQElucHV0KCkgZ2VuZXJpY1Rva2VuOiBhbnkgPSBcImJmYjg4MzE1MDQ1NjQ4NjFhODY0Mjc1ZDg1Zjg0OGY4YmZiODgzMTUwNDU2NDg2MWE4NjQyNzVkODVmODQ4ZjhcIjtcclxuICBASW5wdXQoKSBkYXRhYmFzZTogYW55ID0gXCJNT0JJTEZZXCI7XHJcbiAgQElucHV0KCkgc2NoZW1hOiBhbnkgPSBcImNvcmVcIjtcclxuICBAT3V0cHV0KCkgT25TYXZlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gIGNhcFdpZHRoOiBhbnkgPSA1MDtcclxuICBjYXBIZWlnaHQ6IGFueSA9IDUwO1xyXG4gIGltYWdlTmFtZTogc3RyaW5nID0gJ2Nyb3BfcGljdHVyZSc7XHJcbiAgaW1hZ2VQYXRoOiBhbnkgPSAnJztcclxuICBpc0h0bWxiaW5kOiBhbnkgPSBmYWxzZTtcclxuICBpc1VwbG9hZEFyZWE6IGFueSA9IHRydWU7XHJcbiAgaXNVcGxvYWRTdGFydDogYW55ID0gZmFsc2U7XHJcbiAgcGVyY2VudERvbmU6IG51bWJlcjtcclxuICBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gJyc7XHJcbiAgY3JvcHBlZEltYWdlOiBhbnkgPSAnJztcclxuICBzY2FsZSA9IDE7XHJcbiAgdHJhbnNmb3JtOiBJbWFnZVRyYW5zZm9ybSA9IHt9O1xyXG4gIGh0dHBPcHRpb25KU09OID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSlcclxuICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucmF0aW9DYWwoKTtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9ICcwJyAmJiB0aGlzLnZhbHVlICE9IDApIHtcclxuICAgICAgY29uc3QgYm9keSA9IHsgRmlsZXNJZDogdGhpcy52YWx1ZSB9O1xyXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnVybCArIFwiRGF0YS9FeGVjL1wiICsgdGhpcy5kYXRhYmFzZSArIFwiL1wiICsgdGhpcy5zY2hlbWEgKyBcIi9GSUxFU19SZXRyaWV2ZT9hcGlfa2V5PVwiICsgdGhpcy5nZW5lcmljVG9rZW47XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgdGhpcy5odHRwT3B0aW9uSlNPTikuc3Vic2NyaWJlKGZpbGVzID0+IHtcclxuICAgICAgICBpZiAoZmlsZXMgIT0gdW5kZWZpbmVkICYmIGZpbGVzICE9IG51bGwgJiYgZmlsZXMgIT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy5wYXRoICsgZmlsZXNbMF0uRmlsZVVybDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByYXRpb0NhbCgpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT0gJ3NxdWFyZScgJiYgdGhpcy5yYXRpbyAhPSAnJykge1xyXG4gICAgICBsZXQgdG90YWwgPSBwYXJzZUludCh0aGlzLndpZHRoKSArIHBhcnNlSW50KHRoaXMuaGVpZ2h0KTtcclxuICAgICAgbGV0IGFyciA9IHRoaXMucmF0aW8uc3BsaXQoXCI6XCIpO1xyXG4gICAgICBpZiAoYXJyLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgbGV0IHJhdGlvVG90YWwgPSBwYXJzZUludChhcnJbMF0pICsgcGFyc2VJbnQoYXJyWzFdKTtcclxuICAgICAgICBsZXQgdyA9ICgodG90YWwgKiBwYXJzZUludChhcnJbMF0pKSAvIHJhdGlvVG90YWwpLnRvRml4ZWQoMCk7XHJcbiAgICAgICAgbGV0IGggPSAoKHRvdGFsICogcGFyc2VJbnQoYXJyWzFdKSkgLyByYXRpb1RvdGFsKS50b0ZpeGVkKDApO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaDtcclxuICAgICAgICB0aGlzLmNhcFdpZHRoID0gKCgxMDAgKiBwYXJzZUludChhcnJbMF0pKSAvIHJhdGlvVG90YWwpLnRvRml4ZWQoMCk7XHJcbiAgICAgICAgdGhpcy5jYXBIZWlnaHQgPSAoKDEwMCAqIHBhcnNlSW50KGFyclsxXSkpIC8gcmF0aW9Ub3RhbCkudG9GaXhlZCgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpIHtcclxuICAgIGlmIChmaWxlSW5wdXQudGFyZ2V0LmZpbGVzICYmIGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbMF0pIHtcclxuICAgICAgdGhpcy5pbWFnZU5hbWUgPSBmaWxlSW5wdXQudGFyZ2V0LmZpbGVzW1wiMFwiXS5uYW1lO1xyXG4gICAgICAkKFwiI29wZW5Nb2RhbEJ0blwiKS5jbGljaygpO1xyXG4gICAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gZmlsZUlucHV0O1xyXG4gICAgICB0aGlzLmlzVXBsb2FkQXJlYSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBjYW5jbGVDbGljaygpIHtcclxuICAgIHRoaXMuY3JvcHBlZEltYWdlID0gXCJcIjtcclxuICAgIHRoaXMuaXNIdG1sYmluZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1VwbG9hZEFyZWEgPSB0cnVlO1xyXG4gICAgdGhpcy5wZXJjZW50RG9uZSA9IDA7XHJcbiAgfVxyXG4gIHVwbG9hZCgpIHtcclxuICAgIHRoaXMuaW1hZ2VQYXRoID0gXCJcIjtcclxuICAgIHRoaXMuaXNVcGxvYWRTdGFydCA9IHRydWU7XHJcbiAgICB0aGlzLmlzSHRtbGJpbmQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNVcGxvYWRBcmVhID0gdHJ1ZTtcclxuICAgIGxldCBibG9jayA9IHRoaXMuY3JvcHBlZEltYWdlLnNwbGl0KFwiO1wiKTtcclxuICAgIGxldCBjb250ZW50VHlwZSA9IGJsb2NrWzBdLnNwbGl0KFwiOlwiKVsxXTtcclxuICAgIGxldCByZWFsRGF0YSA9IGJsb2NrWzFdLnNwbGl0KFwiLFwiKVsxXTtcclxuICAgIGxldCBibG9iID0gYjY0dG9CbG9iKHJlYWxEYXRhLCBjb250ZW50VHlwZSk7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2IsIHRoaXMuaW1hZ2VOYW1lKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRoaXMudmFsdWUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlZ3JvdXBpZCcsIHRoaXMudmFsdWUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdtZWRpYVR5cGUnLCAncHJvZmlsZXBpYycpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdkZXNjcmlwdGlvbicsIHRoaXMuaW1hZ2VOYW1lKTtcclxuICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsICsgXCJ1cGxvYWRlci91cGxvYWRuZXdcIiwgZm9ybURhdGEsIHsgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsIG9ic2VydmU6ICdldmVudHMnIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnBlcmNlbnREb25lID0gTWF0aC5yb3VuZCgxMDAgKiBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgdGhpcy5pbWFnZVBhdGggPSB0aGlzLnBhdGggKyBldmVudC5ib2R5WydGaWxlVXJsJ107XHJcbiAgICAgICAgICB0aGlzLmlzVXBsb2FkU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMucGVyY2VudERvbmUgPSAwO1xyXG4gICAgICAgICAgdGhpcy5PblNhdmVGaWxlLmVtaXQoeyBldmVudCB9KTtcclxuICAgICAgICAgIHRoaXMuY3JvcHBlZEltYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gYjY0dG9CbG9iKGI2NERhdGEsIGNvbnRlbnRUeXBlKSB7XHJcbiAgICAgIGNvbnRlbnRUeXBlID0gY29udGVudFR5cGUgfHwgJyc7XHJcbiAgICAgIHZhciBzbGljZVNpemUgPSBzbGljZVNpemUgfHwgNTEyO1xyXG4gICAgICB2YXIgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKGI2NERhdGEpO1xyXG4gICAgICB2YXIgYnl0ZUFycmF5cyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IG9mZnNldCArPSBzbGljZVNpemUpIHtcclxuICAgICAgICB2YXIgc2xpY2UgPSBieXRlQ2hhcmFjdGVycy5zbGljZShvZmZzZXQsIG9mZnNldCArIHNsaWNlU2l6ZSk7XHJcbiAgICAgICAgdmFyIGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgYnl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xyXG4gICAgICAgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoYnl0ZUFycmF5cywgeyB0eXBlOiBjb250ZW50VHlwZSB9KTtcclxuICAgICAgcmV0dXJuIGJsb2I7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcclxuICAgIHRoaXMuY3JvcHBlZEltYWdlID0gZXZlbnQuYmFzZTY0O1xyXG4gIH1cclxuICB6b29tT3V0KCkge1xyXG4gICAgdGhpcy5zY2FsZSAtPSAuMTtcclxuICAgIHRoaXMudHJhbnNmb3JtID0ge1xyXG4gICAgICAuLi50aGlzLnRyYW5zZm9ybSxcclxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGVcclxuICAgIH07XHJcbiAgfVxyXG4gIHpvb21JbigpIHtcclxuICAgIHRoaXMuc2NhbGUgKz0gLjE7XHJcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHtcclxuICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=