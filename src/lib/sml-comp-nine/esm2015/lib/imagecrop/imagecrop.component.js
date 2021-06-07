import { __decorate } from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
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
ImagecropComponent = __decorate([
    Component({
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
    })
], ImagecropComponent);
export { ImagecropComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Vjcm9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvaW1hZ2Vjcm9wL2ltYWdlY3JvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekcsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLFNBQVMsQ0FBQztBQWtVakIsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUEyQjdCLFlBQW9CLElBQWdCLEVBQVUsS0FBVztRQUFyQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQW5CaEQsUUFBRyxHQUFXLG1EQUFtRCxDQUFDO1FBQ2xFLFNBQUksR0FBVyxtQ0FBbUMsQ0FBQztRQUNsRCxlQUFVLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFHakMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixjQUFTLEdBQVEsbUJBQW1CLENBQUM7UUFLMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELFFB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QUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7aURBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTsrQ0FBbUU7QUFDbEU7SUFBUixLQUFLLEVBQUU7Z0RBQW9EO0FBQ2xEO0lBQVQsTUFBTSxFQUFFO3NEQUErQjtBQVY3QixrQkFBa0I7SUEvVDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlFVDtpQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlQUjtLQUNGLENBQUM7R0FDVyxrQkFBa0IsQ0ErUjlCO1NBL1JZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCwgSHR0cEV2ZW50VHlwZSwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLWltYWdlY3JvcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiaG9tZXdyYXBcIj5cclxuICA8ZGl2IGNsYXNzPVwiaGVhZF9zZWNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZUxlZnRcIj57eyB0aXRsZSB9fTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlVXNlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidXNlcl9EUCAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgW25nU3R5bGVdPVwieydoZWlnaHQucHgnOiBoZWlnaHQsJ3dpZHRoLnB4Jzogd2lkdGh9XCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJ7eyBpbWFnZVBhdGggfX1cIiBbbmdDbGFzc109XCJ7J2F2YXRhcjEnOiBpbWFnZVBhdGggIT0gJycgJiYgaW1hZ2VQYXRoICE9ICdhc3NldHMvaW1nL2Nyb3BpbWFnZS9hdmF0YXIucG5nJ31cIiBvbmVycm9yPVwidGhpcy5vbmVycm9yPW51bGw7IHRoaXMuc3JjPSdhc3NldHMvaW1nL2Nyb3BpbWFnZS9hdmF0YXIucG5nJ1wiIGNsYXNzPVwiYXZhdGFyXCIgKm5nSWY9XCIhYXZ0YXJJbWFnZVwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJodG1sYmluZHNcIiBzcmM9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhX3dcIiAoY2xpY2spPVwibW9kZWxCb3goKVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy93aGl0ZWNhbWFyYS5wbmdcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IFtjbGFzcy5zaG93TW9kZWxdPVwic2hvd01vZGVsXCIgY2xhc3M9XCJtb2RlbF93cmFwIHBvc2l0aW9uLWZpeGVkIHctMTAwIGgtMTAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGVsX2NvbnRlbnQgYmctd2hpdGUgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwiY2xvc2VNb2RlbCgpXCIgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0aW1lc1wiPiZ0aW1lczs8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhbmRkX3dyYXAgZC1mbGV4IGZsZXgtY29sdW1uIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RlbF9oZWFkZXIgdGV4dC1jZW50ZXIgbWItNFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJkLWlubGluZS1ibG9jayBoZWFcclxuICAgICAgICAgICAgZF90ZXh0XCI+Q2hhbmdlIFByb2ZpbGUgUGljPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWdkYXIgbWItMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImltZ2RfYXJlYSBkZHN3aGQgdGV4dC1jZW50ZXIgZF9mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgaWQ9XCJjYW1zd2hpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkX2ZsZXggdy0xMDAgcG9zaXRpb24tcmVsYXRpdmUgZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvY2xvdWQtdXBsb2FkLWFycm93LnN2Z1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ibGFjay01MCBmejExIG1iLTFcIj5EcmFnICYgRHJvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImZpbGVfaW5wdXRcIiBpZD1cInVwbG9hZFwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBhY2NlcHQ9XCJpbWFnZS8qXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJsYWNrLTUwIGZ6MTEgbWItMVwiPm9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGNzdF9idG4gaW5zX21kX2J0biBtYnRuXCI+VXBsb2FkIFBob3RvPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtYmxhY2stNTAgZnoxMSBtYi0xXCI+b3I8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkX2ZsZXggdy0xMDAgcG9zaXRpb24tcmVsYXRpdmUgZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIiAoY2xpY2spPVwic25hcFBob3RvRXZ0KClcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Bob3RvLWNhbWVyYS5zdmdcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtYmxhY2stNTAgZnoxMVwiPlNuYXAgUGhvdG88L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdy0xMDAgZmxvYXQtbGVmdFwiPlxyXG4gICAgICAgICAgICA8aW1nIGlkPVwicHJldmlld1wiIHNyYz1cIlwiIGNsYXNzPVwidy0xMDBcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJodG1sYmluZHMxIGNyb3BoaWRlXCIgc3JjPVwiXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gY2FtZXJhIC0tPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICAgICAgICAgIDx2aWRlbyAjdmlkZW8gaWQ9XCJ2aWRlb1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjIwMFwiIGF1dG9wbGF5PjwvdmlkZW8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICA8Y2FudmFzICNjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjQ4MFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+PC9jYW52YXM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjaW1nZGl2XCIgY2xhc3M9XCJ3LTEwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cImh0bWxiaW5kXCIgY2xhc3M9XCJzYXZlZF9pbWcgdGV4dC1jZW50ZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwhLS0gY2FtZXJhIC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJzbmFwUGhvdG9cIiBjbGFzcz1cInRleHQtY2VudGVyIG1iLTJcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gcHgtNCBidG4tc20gY3N0X2J0biBtYnRuXCIgKGNsaWNrKT1cImNhcHR1cmUoKVwiPlNuYXAgcGhvdG88L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY3JvcEJ0blwiIGNsYXNzPVwidGV4dC1jZW50ZXIgbWItMiBtdC0yXCIgaWQ9XCJjcm9wYnRuXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjcm9wKClcIiBjbGFzcz1cImJ0biBweC00IGJ0bi1zbSBjc3RfYnRuXCI+Q3JvcDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJjYW1jcm9wQnRuXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjcm9wY2FtKClcIiBjbGFzcz1cImJ0biBweC00IGJ0bi1zbSBjc3RfYnRuIG1idG4gbXQtMlwiPkNyb3A8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBbbmdDbGFzc109XCJ7J2p1c3RpZnktY29udGVudC1iZXR3ZWVuJzogc2hvd1VwbGFvZH1cIj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNsb3NlTW9kZWwoKVwiIHN0eWxlPVwiYmFja2dyb3VuZDogZ2FpbnNib3JvO1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBtYnRuIHB4LTRcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dVcGxhb2RcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm8gYmdjX2JsdWUgcHgtNCBtYnRuXCIgKGNsaWNrKT1cInVwbG9hZCgpXCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC5ob21ld3JhcCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcbi5oZWFkX3NlYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5jYW1lcmFfdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzXHJcbn1cclxuLmNhbWVyYV93IGltZyB7XHJcbiAgICB3aWR0aDogMjZweDtcclxufVxyXG4udXNlcl9EUCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udXNlcl9EUDpob3ZlciAuY2FtZXJhX3cge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0b3A6IDBcclxufVxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcbi5hdmF0YXIxIHtcclxuICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxufVxyXG4ub3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLnRpbWVzIHtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbnNfbWRfYnRuIHtcclxuICAgIHdpZHRoOiA4NnB4O1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICBmb250LXNpemU6IDExcHhcclxufVxyXG4udGV4dC1ibGFjay01MCB7XHJcbiAgICBjb2xvcjogI2E2YTlhYjtcclxufVxyXG4uYnRuX3NlbGVjdF9ncm91cCAuYnRuIHtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4XHJcbn1cclxuLm1vZGVsX3dyYXAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcbi5tb2RlbF9jb250ZW50IHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggIzQ2NDU0NVxyXG59XHJcbi5oZWFkX3RleHQge1xyXG4gICAgY29sb3I6ICMwMzg4ODg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMFxyXG59XHJcbi5oZWFkX3RleHQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM4ODg4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcclxufVxyXG4uaW1nZF9hcmVhIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmltZ2RfYXJlYSBpbWcge1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbn1cclxuLmZpbGVfaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMFxyXG59XHJcbi5jc3RfYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFjYWM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYmdjX2JsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiYTNlMlxyXG59XHJcbi5mejEzIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uZnoxMSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLnNob3dNb2RlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZF9mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNhbWVyYV9IIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4uY2FtZXJhX0Qge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG4uaW1nZGFyIHtcclxuICAgIGhlaWdodDogMjQ3cHg7XHJcbn1cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaHRtbGJpbmRzOm50aC1jaGlsZCgyKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5odG1sYmluZHMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ucmVsYXRpdmVMZWZ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ucmVsYXRpdmVVc2VyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG4ubWJ0biB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxufVxyXG4uZmxleC1jb2x1bW4ge1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbCFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbiFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uIWltcG9ydGFudDtcclxufVxyXG4ucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlIWltcG9ydGFudDtcclxufVxyXG4udy0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmgtMTAwIHtcclxuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuLnBvc2l0aW9uLWZpeGVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLXdoaXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbi5wb3NpdGlvbi1hYnNvbHV0ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG59XHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbn1cclxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2Vjcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgndmlkZW8nKSB2aWRlbzogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycpIGNhbnZhczogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSB1cmw6IHN0cmluZyA9ICdodHRwOi8vYXBpLmFhYWRldi5pbmZvL2FwaW5leHQvdXBsb2FkZXIvdXBsb2FkbmV3JztcclxuICBASW5wdXQoKSBwYXRoOiBzdHJpbmcgPSAnaHR0cDovL2FwaW5leHQuYWFhZGV2LmluZm8vbWVkaWEvJztcclxuICBAT3V0cHV0KCkgT25TYXZlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gIHB1YmxpYyBtb2RlbENvbmRpdGlvbjogc3RyaW5nO1xyXG4gIHB1YmxpYyBzaG93TW9kZWwgPSBmYWxzZTtcclxuICBwdWJsaWMgc2hvd0ltZyA9IGZhbHNlO1xyXG4gIHB1YmxpYyBjcm9wQnRuID0gZmFsc2U7XHJcbiAgcHVibGljIGNhbWNyb3BCdG4gPSBmYWxzZTtcclxuICBwdWJsaWMgc25hcFBob3RvID0gZmFsc2U7XHJcbiAgcHVibGljIHNob3dVcGxhb2QgPSBmYWxzZTtcclxuICBwdWJsaWMgYXZ0YXJJbWFnZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBjYXB0dXJlSW1hZ2U6IGFueVxyXG4gIHB1YmxpYyBjYXB0dXJlczogQXJyYXk8YW55PjtcclxuICBwdWJsaWMgaW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIGltYWdlUGF0aDogYW55ID0gJ2Fzc2V0cy9hdmF0YXIucG5nJztcclxuICBwdWJsaWMgZGF0YUFwaTtcclxuICBwdWJsaWMgdmlkZW9zOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgdGhpcy5jYXB0dXJlcyA9IFtdO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZGF0YUFwaSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Nlc3Npb24uRGF0YUFwaScpKTtcclxuICAgICQoJyNjcm9wYnRuX2NhbScpLmhpZGUoKTtcclxuICAgICQoJyN2aWRlbycpLmhpZGUoKTtcclxuICAgICQoJyNwcmV2aWV3Jykuc2hvdygpO1xyXG4gICAgaWYgKHRoaXMudmFsdWUgPT0gJzAnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VQYXRoID0gJ2Fzc2V0cy9pbWcvY3JvcGltYWdlL2F2YXRhci5wbmcnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuRGF0YURCKHRoaXMuZGF0YUFwaS5EYXRhRmlsZXMuRGF0YUJhc2UsIHRoaXMuZGF0YUFwaS5EYXRhRmlsZXMuU2NoZW1hLCAnRklMRVNfUmV0cmlldmUnLCB7IEZpbGVzSWQ6IHRoaXMudmFsdWUgfSkuc3Vic2NyaWJlKCgoZmlsZXMpID0+IHtcclxuICAgICAgICBpZiAoIShmaWxlcyA9PSB1bmRlZmluZWQgfHwgZmlsZXMgPT0gbnVsbCB8fCBmaWxlcyA9PSAnJykgJiYgZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdmFyIHVybEltYWdlcyA9IGZpbGVzWzBdLkZpbGVVcmwuc3BsaXQoJ1xcXFwnKTtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy5wYXRoICsgZmlsZXNbMF0uRmlsZVVybDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLCAoXHJcbiAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpZGVvcyA9IHRoaXMudmlkZW8gPT0gdW5kZWZpbmVkIHx8IHRoaXMudmlkZW8gPT0gbnVsbCA/IG51bGwgOiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIGNvbnN0IF92aWRlbyA9IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudDtcclxuICAgIC8vIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XHJcbiAgICAvLyAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSlcclxuICAgIC8vICAgICAudGhlbihzdHJlYW0gPT4ge1xyXG4gICAgLy8gICAgICAgX3ZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgIC8vICAgICAgIF92aWRlby5wbGF5KCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGFydCgpIHtcclxuICAgIHRoaXMuaW5pdENhbWVyYSh7IHZpZGVvOiB0cnVlLCBhdWRpbzogZmFsc2UgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzb3VuZCgpIHtcclxuICAgIHRoaXMuaW5pdENhbWVyYSh7IHZpZGVvOiB0cnVlLCBhdWRpbzogdHJ1ZSB9KTtcclxuICB9XHJcbiAgcHVibGljIGluaXRDYW1lcmEoY29uZmlnOiBhbnkpIHtcclxuICAgIHZhciBicm93c2VyID0gPGFueT5uYXZpZ2F0b3I7XHJcbiAgICBicm93c2VyLmdldFVzZXJNZWRpYSA9IChicm93c2VyLmdldFVzZXJNZWRpYSB8fFxyXG4gICAgICBicm93c2VyLndlYmtpdEdldFVzZXJNZWRpYSB8fFxyXG4gICAgICBicm93c2VyLm1vekdldFVzZXJNZWRpYSB8fFxyXG4gICAgICBicm93c2VyLm1zR2V0VXNlck1lZGlhKTtcclxuICAgIGJyb3dzZXIubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25maWcpLnRoZW4oc3RyZWFtID0+IHtcclxuICAgICAgLy90aGlzLnZpZGVvcy5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xyXG4gICAgICAvL3RoaXMudmlkZW8ucGxheSgpO1xyXG4gICAgICB0aGlzLnZpZGVvcy5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgIHRoaXMudmlkZW9zLnBsYXkoKTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIG1vZGVsQm94KCkge1xyXG4gICAgdGhpcy5zaG93TW9kZWwgPSB0cnVlO1xyXG4gICAgdGhpcy5zaG93VXBsYW9kID0gZmFsc2U7XHJcbiAgICAkKCcuY3JvcGhpZGUnKS5oaWRlKClcclxuICB9XHJcbiAgcHVibGljIGNsb3NlTW9kZWwoKSB7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRcIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSAnJztcclxuICAgIGxldCBjcmltZyA9ICQoJyNjaW1nZGl2JykuY3JvcHBpZSgnZGVzdHJveScpO1xyXG4gICAgJCgnI3ByZXZpZXcnKS5jcm9wcGllKCdkZXN0cm95Jyk7XHJcbiAgICAkKCcjY2ltZ2RpdicpLmhpZGUoKTtcclxuICAgICQoJy5kZHN3aGQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JvcGJ0bicpLnNob3coKTtcclxuICAgICQoJyNjYW1zd2hpJykuc2hvdygpO1xyXG4gICAgJCgnI2Nyb3BidG4nKS5oaWRlKCk7XHJcbiAgICAkKCcjcHJldmlldycpLmhpZGUoKTtcclxuICAgICQoJyN2aWRlbycpLmhpZGUoKTtcclxuICAgIHRoaXMuY3JvcEJ0biA9IGZhbHNlO1xyXG4gICAgdGhpcy5jYW1jcm9wQnRuID0gZmFsc2U7XHJcbiAgICB0aGlzLnNuYXBQaG90byA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93TW9kZWwgPSBmYWxzZTtcclxuICAgIHRoaXMuc2hvd1VwbGFvZCA9IGZhbHNlO1xyXG4gIH1cclxuICBwdWJsaWMgY2FwdHVyZSgpIHtcclxuICAgICQoJyNjaW1nZGl2JykuY3JvcHBpZSgnZGVzdHJveScpO1xyXG4gICAgJCgnI3ZpZGVvJykuY3JvcHBpZSgnZGVzdHJveScpO1xyXG4gICAgdGhpcy5jYXB0dXJlcyA9IFtdXHJcbiAgICB0aGlzLmNhbWNyb3BCdG4gPSB0cnVlO1xyXG4gICAgdGhpcy5zbmFwUGhvdG8gPSBmYWxzZTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgMCwgMCwgNjQwLCA0ODApO1xyXG4gICAgdGhpcy5jYXB0dXJlcy5wdXNoKHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSk7XHJcbiAgICAkKCcjdmlkZW8nKS5oaWRlKCk7XHJcbiAgICAkKCcjY2ltZ2RpdicpLnNob3coKTtcclxuICAgICQoJy5zYXZlYnRuJykuc2hvdygpO1xyXG4gICAgJCgnLnNuYXBQaWMnKS5oaWRlKCk7XHJcbiAgICAkKCcjY3JvcGJ0bicpLmhpZGUoKTtcclxuICAgIHRoaXMuaW1hZ2VOYW1lID0gXCJDYXB0dXJlLnBuZ1wiO1xyXG4gICAgY29uc3QgY3JpbWcgPSAkKCcjY2ltZ2RpdicpLmNyb3BwaWVcclxuICAgICAgKHtcclxuICAgICAgICBlbmFibGVFeGlmOiB0cnVlLFxyXG4gICAgICAgIHZpZXdwb3J0OiB7IHdpZHRoOiAxNjAsIGhlaWdodDogMTYwLCB0eXBlOiAnY2lyY2xlJyB9LFxyXG4gICAgICAgIGJvdW5kYXJ5OlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIGNyaW1nLmNyb3BwaWUoJ2JpbmQnLFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOiB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyksXHJcbiAgICAgICAgY2lyY2xlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIGNyb3BjYW0oKSB7XHJcbiAgICAkKCcuaHRtbGJpbmRzMScpLmF0dHIoJ3NyYycsICcnKTtcclxuICAgICQoJy5jcm9waGlkZScpLnNob3coKTtcclxuICAgIHRoaXMuY2FtY3JvcEJ0biA9IGZhbHNlO1xyXG4gICAgJCgnI2NpbWdkaXYnKS5jcm9wcGllKCdyZXN1bHQnLCB7IGNpcmNsZTogdHJ1ZSwgfSwgJ2h0bWwnKS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICQoJy5odG1sYmluZHMxJykuYXR0cignc3JjJywgaHRtbCk7XHJcbiAgICAgIHJldHVybiBodG1sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZUltYWdlID0gcmVzO1xyXG4gICAgICB9KVxyXG5cclxuICAgICQoJyNjaW1nZGl2JykuaGlkZSgpO1xyXG4gICAgdGhpcy5zaG93VXBsYW9kID0gdHJ1ZTtcclxuICB9XHJcbiAgcHVibGljIHNuYXBQaG90b0V2dCgpIHtcclxuICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICQoJyN2aWRlbycpLnNob3coKTtcclxuICAgIHRoaXMuc25hcFBob3RvID0gdHJ1ZTtcclxuICAgICQoJyNjYW1zd2hpJykuaGlkZSgpO1xyXG4gICAgJCgnI2h0bWxiaW5kcywgI3ByZXZpZXcnKS5oaWRlKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpIHtcclxuICAgIGlmIChmaWxlSW5wdXQudGFyZ2V0LmZpbGVzICYmIGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbMF0pIHtcclxuICAgICAgdGhpcy5pbWFnZU5hbWUgPSBmaWxlSW5wdXQudGFyZ2V0LmZpbGVzW1wiMFwiXS5uYW1lO1xyXG4gICAgICAkKCcjY3JvcGJ0bicpLnNob3coKTtcclxuICAgICAgJCgnLmRkc3doZCcpLmhpZGUoKTtcclxuICAgICAgdGhpcy5jcm9wQnRuID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgJCgnI3ByZXZpZXcnKS5hdHRyKCdzcmMnLCAnJyk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgJCgnI3ByZXZpZXcnKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgIHZhciBjcm9wID0gJCgnI3ByZXZpZXcnKS5jcm9wcGllXHJcbiAgICAgICAgICAoe1xyXG4gICAgICAgICAgICBlbmFibGVFeGlmOiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3cG9ydDpcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjAsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2lyY2xlJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvdW5kYXJ5OlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNyb3AuY3JvcHBpZSgnYmluZCcsIHtcclxuICAgICAgICAgIHVybDogZS50YXJnZXQucmVzdWx0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgY3JvcCgpIHtcclxuICAgICQoJy5jcm9waGlkZScpLnNob3coKVxyXG4gICAgJCgnLmh0bWxiaW5kczEnKS5hdHRyKCdzcmMnLCAnJyk7XHJcbiAgICAkKCcjcHJldmlldycpLmNyb3BwaWUoJ3Jlc3VsdCcsIHsgY2lyY2xlOiB0cnVlIH0sICdodG1sJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKCcuaHRtbGJpbmRzMScpLmF0dHIoJ3NyYycsIGh0bWwpO1xyXG4gICAgICAgIHJldHVybiBodG1sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlSW1hZ2UgPSByZXM7XHJcbiAgICAgIH0pXHJcbiAgICAkKCcjcHJldmlldycpLmNyb3BwaWUoJ2Rlc3Ryb3knKTtcclxuICAgICQoJyNwcmV2aWV3JykuaGlkZSgpO1xyXG4gICAgJCgnI2Nyb3BidG4nKS5oaWRlKCk7XHJcbiAgICB0aGlzLnNob3dVcGxhb2QgPSB0cnVlO1xyXG4gIH1cclxuICBwdWJsaWMgdXBsb2FkKCkge1xyXG4gICAgdmFyIGJsb2NrID0gdGhpcy5jYXB0dXJlSW1hZ2Uuc3BsaXQoXCI7XCIpO1xyXG4gICAgdmFyIGNvbnRlbnRUeXBlID0gYmxvY2tbMF0uc3BsaXQoXCI6XCIpWzFdOy8vIEluIHRoaXMgY2FzZSBcImltYWdlL2dpZlwiXHJcbiAgICB2YXIgcmVhbERhdGEgPSBibG9ja1sxXS5zcGxpdChcIixcIilbMV07Ly8gSW4gdGhpcyBjYXNlIFwiUjBsR09EbGhQUUJFQVBlb0FKb3NNLi4uLlwiXHJcbiAgICB2YXIgYmxvYiA9IGI2NHRvQmxvYihyZWFsRGF0YSwgY29udGVudFR5cGUpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iLCB0aGlzLmltYWdlTmFtZSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCB0aGlzLnZhbHVlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZWdyb3VwaWQnLCB0aGlzLnZhbHVlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnbWVkaWFUeXBlJywgJ3Byb2ZpbGVwaWMnKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCB0aGlzLmltYWdlTmFtZSk7XHJcblxyXG4gICAgLy8gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkXCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgICAvLyAkKCcuaHRtbGJpbmRzJykuYXR0cignc3JjJywgJycpXHJcbiAgICAvLyB0aGlzLmF2dGFySW1hZ2UgPSB0cnVlXHJcbiAgICAvLyAkKCcjY2ltZ2RpdicpLmhpZGUoKTtcclxuICAgIC8vICQoJyNjaW1nZGl2JykuaGlkZSgpO1xyXG4gICAgLy8gJCgnLmRkc3doZCcpLnNob3coKTtcclxuICAgIC8vICQoJyNjcm9wYnRuJykuc2hvdygpO1xyXG4gICAgLy8gJCgnI2NhbXN3aGksLmhpZGUnKS5zaG93KCk7XHJcbiAgICAvLyAkKCcjY3JvcGJ0bicpLmhpZGUoKTtcclxuICAgIC8vICQoJyNwcmV2aWV3JykuaGlkZSgpO1xyXG4gICAgLy8gJCgnI3ZpZGVvJykuaGlkZSgpO1xyXG4gICAgLy8gdGhpcy5jcm9wQnRuID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLmNhbWNyb3BCdG4gPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuc25hcFBob3RvID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLnNob3dNb2RlbCA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5zaG93VXBsYW9kID0gZmFsc2U7XHJcbiAgICAvLyAkKCcuaHRtbGJpbmRzJykuYXR0cignc3JjJywgdGhpcy5jYXB0dXJlSW1hZ2UpXHJcblxyXG4gICAgdGhpcy5odHRwLnBvc3QodGhpcy51cmwsIGZvcm1EYXRhLCB7IHJlcG9ydFByb2dyZXNzOiB0cnVlLCBvYnNlcnZlOiAnZXZlbnRzJyB9KVxyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgLy90aGlzLnBlcmNlbnREb25lID0gTWF0aC5yb3VuZCgxMDAgKiBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkXCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAkKCcuaHRtbGJpbmRzJykuYXR0cignc3JjJywgJycpXHJcbiAgICAgICAgICB0aGlzLmF2dGFySW1hZ2UgPSB0cnVlXHJcbiAgICAgICAgICAkKCcjY2ltZ2RpdicpLmhpZGUoKTtcclxuICAgICAgICAgICQoJyNjaW1nZGl2JykuaGlkZSgpO1xyXG4gICAgICAgICAgJCgnLmRkc3doZCcpLnNob3coKTtcclxuICAgICAgICAgICQoJyNjcm9wYnRuJykuc2hvdygpO1xyXG4gICAgICAgICAgJCgnI2NhbXN3aGksLmhpZGUnKS5zaG93KCk7XHJcbiAgICAgICAgICAkKCcjY3JvcGJ0bicpLmhpZGUoKTtcclxuICAgICAgICAgICQoJyNwcmV2aWV3JykuaGlkZSgpO1xyXG4gICAgICAgICAgJCgnI3ZpZGVvJykuaGlkZSgpO1xyXG4gICAgICAgICAgdGhpcy5jcm9wQnRuID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNhbWNyb3BCdG4gPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc25hcFBob3RvID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dNb2RlbCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zaG93VXBsYW9kID0gZmFsc2U7XHJcbiAgICAgICAgICAkKCcuaHRtbGJpbmRzJykuYXR0cignc3JjJywgdGhpcy5jYXB0dXJlSW1hZ2UpO1xyXG4gICAgICAgICAgdGhpcy5PblNhdmVGaWxlLmVtaXQoeyBldmVudCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gYjY0dG9CbG9iKGI2NERhdGEsIGNvbnRlbnRUeXBlKSB7XHJcbiAgICAgIGNvbnRlbnRUeXBlID0gY29udGVudFR5cGUgfHwgJyc7XHJcbiAgICAgIHZhciBzbGljZVNpemUgPSBzbGljZVNpemUgfHwgNTEyO1xyXG4gICAgICB2YXIgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKGI2NERhdGEpO1xyXG4gICAgICB2YXIgYnl0ZUFycmF5cyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IG9mZnNldCArPSBzbGljZVNpemUpIHtcclxuICAgICAgICB2YXIgc2xpY2UgPSBieXRlQ2hhcmFjdGVycy5zbGljZShvZmZzZXQsIG9mZnNldCArIHNsaWNlU2l6ZSk7XHJcbiAgICAgICAgdmFyIGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgYnl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xyXG4gICAgICAgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoYnl0ZUFycmF5cywgeyB0eXBlOiBjb250ZW50VHlwZSB9KTtcclxuICAgICAgcmV0dXJuIGJsb2I7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBEYXRhREIoZGF0YWJhc2UsIHNjaGVtYSwgcHJvY2VkdXJlTmFtZSwgcGFyYW1zID0ge30pIHtcclxuICAgIHZhciBzcWxJbml0ID0gdGhpcy5kYXRhQXBpLkFwaVVybCArICdEYXRhL0V4ZWMvJztcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgdmFyIHVybFF1ZXJ5ID0gc3FsSW5pdCArIGRhdGFiYXNlICsgJy8nICsgc2NoZW1hICsgJy8nICsgcHJvY2VkdXJlTmFtZSArICc/YXBpX2tleT0nICsgdGhpcy5kYXRhQXBpLkFjY2Vzc1Rva2VuO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh1cmxRdWVyeSwgcGFyYW1zLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkubWFwKCgocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkpLmNhdGNoKHRoaXMuZXJyb3JIYW5kbGVyKTtcclxuICB9XHJcbiAgcHVibGljIGVycm9ySGFuZGxlcihlcnJvcikge1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IgfHwgJ1NFUlZFUiBFUlJPUicpO1xyXG4gIH1cclxufVxyXG4iXX0=