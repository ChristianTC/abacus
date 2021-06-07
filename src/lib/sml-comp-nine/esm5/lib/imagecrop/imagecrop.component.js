import { __decorate } from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
var ImagecropComponent = /** @class */ (function () {
    function ImagecropComponent(http, _http) {
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
    ImagecropComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataApi = JSON.parse(localStorage.getItem('Session.DataApi'));
        $('#cropbtn_cam').hide();
        $('#video').hide();
        $('#preview').show();
        if (this.value == '0') {
            this.imagePath = 'assets/img/cropimage/avatar.png';
        }
        else {
            this.DataDB(this.dataApi.DataFiles.DataBase, this.dataApi.DataFiles.Schema, 'FILES_Retrieve', { FilesId: this.value }).subscribe((function (files) {
                if (!(files == undefined || files == null || files == '') && files.length > 0) {
                    var urlImages = files[0].FileUrl.split('\\');
                    _this.imagePath = _this.path + files[0].FileUrl;
                }
            }), (function (error) {
                alert(error);
                console.log(error);
            }));
        }
        this.videos = this.video == undefined || this.video == null ? null : this.video.nativeElement;
    };
    ImagecropComponent.prototype.ngAfterViewInit = function () {
        // const _video = this.video.nativeElement;
        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        //   navigator.mediaDevices.getUserMedia({ video: true })
        //     .then(stream => {
        //       _video.srcObject = stream;
        //       _video.play();
        //     });
        // }
    };
    ImagecropComponent.prototype.start = function () {
        this.initCamera({ video: true, audio: false });
    };
    ImagecropComponent.prototype.sound = function () {
        this.initCamera({ video: true, audio: true });
    };
    ImagecropComponent.prototype.initCamera = function (config) {
        var _this = this;
        var browser = navigator;
        browser.getUserMedia = (browser.getUserMedia ||
            browser.webkitGetUserMedia ||
            browser.mozGetUserMedia ||
            browser.msGetUserMedia);
        browser.mediaDevices.getUserMedia(config).then(function (stream) {
            //this.videos.src = window.URL.createObjectURL(stream);
            //this.video.play();
            _this.videos.srcObject = stream;
            _this.videos.play();
        }, function (error) {
            alert(error.message);
        });
    };
    ImagecropComponent.prototype.modelBox = function () {
        this.showModel = true;
        this.showUplaod = false;
        $('.crophide').hide();
    };
    ImagecropComponent.prototype.closeModel = function () {
        document.getElementById("upload").value = '';
        var crimg = $('#cimgdiv').croppie('destroy');
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
    };
    ImagecropComponent.prototype.capture = function () {
        $('#cimgdiv').croppie('destroy');
        $('#video').croppie('destroy');
        this.captures = [];
        this.camcropBtn = true;
        this.snapPhoto = false;
        var context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
        $('#video').hide();
        $('#cimgdiv').show();
        $('.savebtn').show();
        $('.snapPic').hide();
        $('#cropbtn').hide();
        this.imageName = "Capture.png";
        var crimg = $('#cimgdiv').croppie({
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
    };
    ImagecropComponent.prototype.cropcam = function () {
        var _this = this;
        $('.htmlbinds1').attr('src', '');
        $('.crophide').show();
        this.camcropBtn = false;
        $('#cimgdiv').croppie('result', { circle: true, }, 'html').then(function (html) {
            $('.htmlbinds1').attr('src', html);
            return html;
        })
            .then(function (res) {
            _this.captureImage = res;
        });
        $('#cimgdiv').hide();
        this.showUplaod = true;
    };
    ImagecropComponent.prototype.snapPhotoEvt = function () {
        this.start();
        $('#video').show();
        this.snapPhoto = true;
        $('#camswhi').hide();
        $('#htmlbinds, #preview').hide();
    };
    ImagecropComponent.prototype.fileChangeEvent = function (fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            this.imageName = fileInput.target.files["0"].name;
            $('#cropbtn').show();
            $('.ddswhd').hide();
            this.cropBtn = true;
            var reader = new FileReader();
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
    };
    ImagecropComponent.prototype.crop = function () {
        var _this = this;
        $('.crophide').show();
        $('.htmlbinds1').attr('src', '');
        $('#preview').croppie('result', { circle: true }, 'html')
            .then(function (html) {
            $('.htmlbinds1').attr('src', html);
            return html;
        })
            .then(function (res) {
            _this.captureImage = res;
        });
        $('#preview').croppie('destroy');
        $('#preview').hide();
        $('#cropbtn').hide();
        this.showUplaod = true;
    };
    ImagecropComponent.prototype.upload = function () {
        var _this = this;
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
            .subscribe(function (event) {
            if (event.type === HttpEventType.UploadProgress) {
                //this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                document.getElementById("upload").value = '';
                $('.htmlbinds').attr('src', '');
                _this.avtarImage = true;
                $('#cimgdiv').hide();
                $('#cimgdiv').hide();
                $('.ddswhd').show();
                $('#cropbtn').show();
                $('#camswhi,.hide').show();
                $('#cropbtn').hide();
                $('#preview').hide();
                $('#video').hide();
                _this.cropBtn = false;
                _this.camcropBtn = false;
                _this.snapPhoto = false;
                _this.showModel = false;
                _this.showUplaod = false;
                $('.htmlbinds').attr('src', _this.captureImage);
                _this.OnSaveFile.emit({ event: event });
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
    ImagecropComponent.prototype.DataDB = function (database, schema, procedureName, params) {
        if (params === void 0) { params = {}; }
        var sqlInit = this.dataApi.ApiUrl + 'Data/Exec/';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var urlQuery = sqlInit + database + '/' + schema + '/' + procedureName + '?api_key=' + this.dataApi.AccessToken;
        return this._http.post(urlQuery, params, { headers: headers }).map((function (response) { return response.json(); })).catch(this.errorHandler);
    };
    ImagecropComponent.prototype.errorHandler = function (error) {
        return Observable.throw(error || 'SERVER ERROR');
    };
    ImagecropComponent.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Http }
    ]; };
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
            template: "\n  <div class=\"homewrap\">\n  <div class=\"head_sec\">\n    <div class=\"relativeLeft\">{{ title }}</div>\n    <div class=\"relativeUser\">\n      <div class=\"user_DP  d-flex justify-content-center align-items-center\" [ngStyle]=\"{'height.px': height,'width.px': width}\">\n        <img src=\"{{ imagePath }}\" [ngClass]=\"{'avatar1': imagePath != '' && imagePath != 'assets/img/cropimage/avatar.png'}\" onerror=\"this.onerror=null; this.src='assets/img/cropimage/avatar.png'\" class=\"avatar\" *ngIf=\"!avtarImage\">\n        <img class=\"htmlbinds\" src=\"\">\n        <div class=\"camera_w\" (click)=\"modelBox()\">\n          <img src=\"./assets/whitecamara.png\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div [class.showModel]=\"showModel\" class=\"model_wrap position-fixed w-100 h-100\">\n    <div class=\"overlay\"></div>\n    <div class=\"model_content bg-white position-relative\">\n      <div (click)=\"closeModel()\" class=\"position-absolute times\">&times;</div>\n      <div class=\"dandd_wrap d-flex flex-column \">\n        <div class=\"model_header text-center mb-4\">\n          <span class=\"d-inline-block hea\n            d_text\">Change Profile Pic</span>\n        </div>\n        <div class=\"imgdar mb-2\">\n          <div class=\"imgd_area ddswhd text-center d_flex flex-column align-items-center justify-content-center\" id=\"camswhi\">\n            <div class=\"d_flex w-100 position-relative flex-column justify-content-center align-items-center mb-1\">\n              <img src=\"./assets/cloud-upload-arrow.svg\">\n              <span class=\"text-black-50 fz11 mb-1\">Drag & Drop</span>\n              <input type=\"file\" class=\"file_input\" id=\"upload\" (change)=\"fileChangeEvent($event)\" accept=\"image/*\">\n              <span class=\"text-black-50 fz11 mb-1\">or</span>\n              <button class=\"btn btn-sm cst_btn ins_md_btn mbtn\">Upload Photo</button>\n            </div>\n            <span class=\"text-black-50 fz11 mb-1\">or</span>\n            <div class=\"d_flex w-100 position-relative flex-column justify-content-center align-items-center cursor-pointer\" (click)=\"snapPhotoEvt()\">\n              <img src=\"./assets/photo-camera.svg\">\n              <span class=\"text-black-50 fz11\">Snap Photo</span>\n            </div>\n          </div>\n          <div class=\"text-center w-100 float-left\">\n            <img id=\"preview\" src=\"\" class=\"w-100\">\n          </div>\n          <div class=\"w-100 text-center\">\n            <img class=\"htmlbinds1 crophide\" src=\"\">\n          </div>\n          <!-- camera -->\n          <div class=\"w-100\">\n            <video #video id=\"video\" width=\"100%\" height=\"200\" autoplay></video>\n          </div>\n          <div class=\"w-100\">\n            <canvas #canvas id=\"canvas\" width=\"640\" height=\"480\" style=\"display:none\"></canvas>\n          </div>\n          <div id=\"cimgdiv\" class=\"w-100\"></div>\n          <div id=\"htmlbind\" class=\"saved_img text-center\"></div>\n          <!-- camera -->\n        </div>\n        <div *ngIf=\"snapPhoto\" class=\"text-center mb-2\">\n          <button class=\"btn px-4 btn-sm cst_btn mbtn\" (click)=\"capture()\">Snap photo</button>\n        </div>\n        <div *ngIf=\"cropBtn\" class=\"text-center mb-2 mt-2\" id=\"cropbtn\">\n          <button (click)=\"crop()\" class=\"btn px-4 btn-sm cst_btn\">Crop</button>\n        </div>\n        <div *ngIf=\"camcropBtn\" class=\"text-center mb-2\">\n          <button (click)=\"cropcam()\" class=\"btn px-4 btn-sm cst_btn mbtn mt-2\">Crop</button>\n        </div>\n        <div class=\"d-flex justify-content-center\" [ngClass]=\"{'justify-content-between': showUplaod}\">\n          <button (click)=\"closeModel()\" style=\"background: gainsboro;\" class=\"btn btn-sm mbtn px-4\">Cancel</button>\n          &nbsp;\n          <button *ngIf=\"showUplaod\" class=\"btn btn-sm btn-info bgc_blue px-4 mbtn\" (click)=\"upload()\">Upload</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n  ",
            styles: ["\n  .homewrap {\n    height: auto;\n    width: 100%\n}\n.head_sec {\n    background-color: #fff;\n    width: 100%;\n    min-height: auto;\n}\n.camera_w {\n    position: absolute;\n    height: 100%;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.4s\n}\n.camera_w img {\n    width: 26px;\n}\n.user_DP {\n    width: 100px;\n    height: 100px;\n    border: 1px solid #d6d6d6;\n    border-radius: 100%;\n    background-color: #f8f8f8;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    cursor: pointer;\n    overflow: hidden;\n}\n.user_DP:hover .camera_w {\n    visibility: visible;\n    opacity: 1;\n    top: 0\n}\n.avatar {\n    width: 60px;\n}\n.avatar1 {\n  width: 120px !important;\n}\n.overlay {\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.times {\n    color: lightgray;\n    font-size: 30px;\n    right: 10px;\n    top: 0;\n    line-height: 30px;\n    cursor: pointer;\n}\n.ins_md_btn {\n    width: 86px;\n    padding: 4px 0;\n    font-size: 11px\n}\n.text-black-50 {\n    color: #a6a9ab;\n}\n.btn_select_group .btn {\n    padding: 8px 16px\n}\n.model_wrap {\n    display: none;\n    top: 0;\n    left: 0;\n    z-index: 9;\n}\n.model_content {\n    width: 320px;\n    min-height: 400px;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n    border-radius: 4px;\n    padding: 30px;\n    box-shadow: 0 3px 6px #464545\n}\n.head_text {\n    color: #038888;\n    position: relative;\n    font-size: 18px;\n    padding: 6px 0\n}\n.head_text::after {\n    content: '';\n    display: block;\n    width: 40%;\n    height: 1px;\n    background-color: #038888;\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translate(-50%, -50%)\n}\n.imgd_area {\n    height: 200px;\n    width: 200px;\n    border: 2px dashed #ccc;\n    margin: 0 auto;\n    border-radius: 100%;\n    overflow: hidden;\n}\n.imgd_area img {\n    width: 27px;\n}\n.file_input {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0\n}\n.cst_btn {\n    background-color: #00acac;\n    color: #fff;\n}\n.bgc_blue {\n    background-color: #6ba3e2\n}\n.fz13 {\n    font-size: 13px;\n}\n.fz11 {\n    font-size: 11px;\n}\n.showModel {\n    display: block;\n}\n.d_flex {\n    display: flex;\n}\n.camera_H {\n    display: none\n}\n.camera_D {\n    display: block\n}\n.imgdar {\n    height: 247px;\n}\n.hide {\n    display: none;\n}\n.htmlbinds:nth-child(2) {\n    display: none;\n}\n.htmlbinds {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n.relativeLeft {\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    display: inline-block;\n}\n.relativeUser {\n    display: block;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n.mbtn {\n    font-size: 12px;\n}\n.d-flex {\n    display: -webkit-box!important;\n    display: -ms-flexbox!important;\n    display: flex!important;\n}\n.flex-column {\n    -webkit-box-orient: vertical!important;\n    -webkit-box-direction: normal!important;\n    -ms-flex-direction: column!important;\n    flex-direction: column!important;\n}\n.position-relative {\n    position: relative!important;\n}\n.w-100 {\n    width: 100%;\n}\n.h-100 {\n    height: 100%!important;\n}\n.position-fixed {\n    position: fixed!important;\n}\n.bg-white {\n    background-color: #fff!important;\n}\n.position-absolute {\n    position: absolute!important;\n}\n.btn {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    font-size: 12px !important;\n}\n.btn-sm {\n    padding: .25rem .5rem;\n    font-size: .875rem;\n    line-height: 1.5;\n    border-radius: .2rem;\n}\n.justify-content-center {\n    -webkit-box-pack: center!important;\n    -ms-flex-pack: center!important;\n    justify-content: center!important;\n}\n  "]
        })
    ], ImagecropComponent);
    return ImagecropComponent;
}());
export { ImagecropComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Vjcm9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvaW1hZ2Vjcm9wL2ltYWdlY3JvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekcsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLFNBQVMsQ0FBQztBQWtVakI7SUEyQkUsNEJBQW9CLElBQWdCLEVBQVUsS0FBVztRQUFyQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQW5CaEQsUUFBRyxHQUFXLG1EQUFtRCxDQUFDO1FBQ2xFLFNBQUksR0FBVyxtQ0FBbUMsQ0FBQztRQUNsRCxlQUFVLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFHakMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixjQUFTLEdBQVEsbUJBQW1CLENBQUM7UUFLMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELHFDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkMsSUFB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UUFBUSxDQUFDO3NEQUFvQjtJQUMvQjtRQUFSLEtBQUssRUFBRTtxREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFO3NEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFO3FEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7cURBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTttREFBbUU7SUFDbEU7UUFBUixLQUFLLEVBQUU7b0RBQW9EO0lBQ2xEO1FBQVQsTUFBTSxFQUFFOzBEQUErQjtJQVY3QixrQkFBa0I7UUEvVDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSwyOEhBeUVUO3FCQUNRLHM3SUFpUFI7U0FDRixDQUFDO09BQ1csa0JBQWtCLENBK1I5QjtJQUFELHlCQUFDO0NBQUEsQUEvUkQsSUErUkM7U0EvUlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwRXZlbnRUeXBlLCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtaW1hZ2Vjcm9wJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJob21ld3JhcFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJoZWFkX3NlY1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlTGVmdFwiPnt7IHRpdGxlIH19PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVVc2VyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyX0RQICBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBbbmdTdHlsZV09XCJ7J2hlaWdodC5weCc6IGhlaWdodCwnd2lkdGgucHgnOiB3aWR0aH1cIj5cclxuICAgICAgICA8aW1nIHNyYz1cInt7IGltYWdlUGF0aCB9fVwiIFtuZ0NsYXNzXT1cInsnYXZhdGFyMSc6IGltYWdlUGF0aCAhPSAnJyAmJiBpbWFnZVBhdGggIT0gJ2Fzc2V0cy9pbWcvY3JvcGltYWdlL2F2YXRhci5wbmcnfVwiIG9uZXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDsgdGhpcy5zcmM9J2Fzc2V0cy9pbWcvY3JvcGltYWdlL2F2YXRhci5wbmcnXCIgY2xhc3M9XCJhdmF0YXJcIiAqbmdJZj1cIiFhdnRhckltYWdlXCI+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cImh0bWxiaW5kc1wiIHNyYz1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmFfd1wiIChjbGljayk9XCJtb2RlbEJveCgpXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3doaXRlY2FtYXJhLnBuZ1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgW2NsYXNzLnNob3dNb2RlbF09XCJzaG93TW9kZWxcIiBjbGFzcz1cIm1vZGVsX3dyYXAgcG9zaXRpb24tZml4ZWQgdy0xMDAgaC0xMDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kZWxfY29udGVudCBiZy13aGl0ZSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJjbG9zZU1vZGVsKClcIiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRpbWVzXCI+JnRpbWVzOzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGFuZGRfd3JhcCBkLWZsZXggZmxleC1jb2x1bW4gXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGVsX2hlYWRlciB0ZXh0LWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImQtaW5saW5lLWJsb2NrIGhlYVxyXG4gICAgICAgICAgICBkX3RleHRcIj5DaGFuZ2UgUHJvZmlsZSBQaWM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImltZ2RhciBtYi0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nZF9hcmVhIGRkc3doZCB0ZXh0LWNlbnRlciBkX2ZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBpZD1cImNhbXN3aGlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRfZmxleCB3LTEwMCBwb3NpdGlvbi1yZWxhdGl2ZSBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9jbG91ZC11cGxvYWQtYXJyb3cuc3ZnXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJsYWNrLTUwIGZ6MTEgbWItMVwiPkRyYWcgJiBEcm9wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiZmlsZV9pbnB1dFwiIGlkPVwidXBsb2FkXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIGFjY2VwdD1cImltYWdlLypcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtYmxhY2stNTAgZnoxMSBtYi0xXCI+b3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gY3N0X2J0biBpbnNfbWRfYnRuIG1idG5cIj5VcGxvYWQgUGhvdG88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ibGFjay01MCBmejExIG1iLTFcIj5vcjwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRfZmxleCB3LTEwMCBwb3NpdGlvbi1yZWxhdGl2ZSBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiIChjbGljayk9XCJzbmFwUGhvdG9FdnQoKVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvcGhvdG8tY2FtZXJhLnN2Z1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ibGFjay01MCBmejExXCI+U25hcCBQaG90bzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB3LTEwMCBmbG9hdC1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgaWQ9XCJwcmV2aWV3XCIgc3JjPVwiXCIgY2xhc3M9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImh0bWxiaW5kczEgY3JvcGhpZGVcIiBzcmM9XCJcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSBjYW1lcmEgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgPHZpZGVvICN2aWRlbyBpZD1cInZpZGVvXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMjAwXCIgYXV0b3BsYXk+PC92aWRlbz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICAgICAgICAgIDxjYW52YXMgI2NhbnZhcyBpZD1cImNhbnZhc1wiIHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiNDgwXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj48L2NhbnZhcz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cImNpbWdkaXZcIiBjbGFzcz1cInctMTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaHRtbGJpbmRcIiBjbGFzcz1cInNhdmVkX2ltZyB0ZXh0LWNlbnRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPCEtLSBjYW1lcmEgLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInNuYXBQaG90b1wiIGNsYXNzPVwidGV4dC1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBweC00IGJ0bi1zbSBjc3RfYnRuIG1idG5cIiAoY2xpY2spPVwiY2FwdHVyZSgpXCI+U25hcCBwaG90bzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJjcm9wQnRuXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtYi0yIG10LTJcIiBpZD1cImNyb3BidG5cIj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNyb3AoKVwiIGNsYXNzPVwiYnRuIHB4LTQgYnRuLXNtIGNzdF9idG5cIj5Dcm9wPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImNhbWNyb3BCdG5cIiBjbGFzcz1cInRleHQtY2VudGVyIG1iLTJcIj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNyb3BjYW0oKVwiIGNsYXNzPVwiYnRuIHB4LTQgYnRuLXNtIGNzdF9idG4gbWJ0biBtdC0yXCI+Q3JvcDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIFtuZ0NsYXNzXT1cInsnanVzdGlmeS1jb250ZW50LWJldHdlZW4nOiBzaG93VXBsYW9kfVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2xvc2VNb2RlbCgpXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XCIgY2xhc3M9XCJidG4gYnRuLXNtIG1idG4gcHgtNFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd1VwbGFvZFwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4taW5mbyBiZ2NfYmx1ZSBweC00IG1idG5cIiAoY2xpY2spPVwidXBsb2FkKClcIj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgLmhvbWV3cmFwIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuLmhlYWRfc2VjIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNhbWVyYV93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHNcclxufVxyXG4uY2FtZXJhX3cgaW1nIHtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG59XHJcbi51c2VyX0RQIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi51c2VyX0RQOmhvdmVyIC5jYW1lcmFfdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRvcDogMFxyXG59XHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLmF2YXRhcjEge1xyXG4gIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG4udGltZXMge1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmluc19tZF9idG4ge1xyXG4gICAgd2lkdGg6IDg2cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweFxyXG59XHJcbi50ZXh0LWJsYWNrLTUwIHtcclxuICAgIGNvbG9yOiAjYTZhOWFiO1xyXG59XHJcbi5idG5fc2VsZWN0X2dyb3VwIC5idG4ge1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHhcclxufVxyXG4ubW9kZWxfd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuLm1vZGVsX2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjNDY0NTQ1XHJcbn1cclxuLmhlYWRfdGV4dCB7XHJcbiAgICBjb2xvcjogIzAzODg4ODtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDZweCAwXHJcbn1cclxuLmhlYWRfdGV4dDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzg4ODg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxyXG59XHJcbi5pbWdkX2FyZWEge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW1nZF9hcmVhIGltZyB7XHJcbiAgICB3aWR0aDogMjdweDtcclxufVxyXG4uZmlsZV9pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwXHJcbn1cclxuLmNzdF9idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNhYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5iZ2NfYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmJhM2UyXHJcbn1cclxuLmZ6MTMge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5mejExIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4uc2hvd01vZGVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5kX2ZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2FtZXJhX0gge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcbi5jYW1lcmFfRCB7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG59XHJcbi5pbWdkYXIge1xyXG4gICAgaGVpZ2h0OiAyNDdweDtcclxufVxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5odG1sYmluZHM6bnRoLWNoaWxkKDIpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmh0bWxiaW5kcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5yZWxhdGl2ZUxlZnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5yZWxhdGl2ZVVzZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi5tYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG59XHJcbi5mbGV4LWNvbHVtbiB7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4haW1wb3J0YW50O1xyXG59XHJcbi5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUhaW1wb3J0YW50O1xyXG59XHJcbi53LTEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaC0xMDAge1xyXG4gICAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcclxufVxyXG4ucG9zaXRpb24tZml4ZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkIWltcG9ydGFudDtcclxufVxyXG4uYmctd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLnBvc2l0aW9uLWFic29sdXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG4uYnRuLXNtIHtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxufVxyXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZWNyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCd2aWRlbycpIHZpZGVvOiBhbnk7XHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzJykgY2FudmFzOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nID0gJ2h0dHA6Ly9hcGkuYWFhZGV2LmluZm8vYXBpbmV4dC91cGxvYWRlci91cGxvYWRuZXcnO1xyXG4gIEBJbnB1dCgpIHBhdGg6IHN0cmluZyA9ICdodHRwOi8vYXBpbmV4dC5hYWFkZXYuaW5mby9tZWRpYS8nO1xyXG4gIEBPdXRwdXQoKSBPblNhdmVGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgcHVibGljIG1vZGVsQ29uZGl0aW9uOiBzdHJpbmc7XHJcbiAgcHVibGljIHNob3dNb2RlbCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG93SW1nID0gZmFsc2U7XHJcbiAgcHVibGljIGNyb3BCdG4gPSBmYWxzZTtcclxuICBwdWJsaWMgY2FtY3JvcEJ0biA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzbmFwUGhvdG8gPSBmYWxzZTtcclxuICBwdWJsaWMgc2hvd1VwbGFvZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBhdnRhckltYWdlID0gZmFsc2U7XHJcbiAgcHVibGljIGNhcHR1cmVJbWFnZTogYW55XHJcbiAgcHVibGljIGNhcHR1cmVzOiBBcnJheTxhbnk+O1xyXG4gIHB1YmxpYyBpbWFnZU5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgaW1hZ2VQYXRoOiBhbnkgPSAnYXNzZXRzL2F2YXRhci5wbmcnO1xyXG4gIHB1YmxpYyBkYXRhQXBpO1xyXG4gIHB1YmxpYyB2aWRlb3M6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICB0aGlzLmNhcHR1cmVzID0gW107XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRhQXBpID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU2Vzc2lvbi5EYXRhQXBpJykpO1xyXG4gICAgJCgnI2Nyb3BidG5fY2FtJykuaGlkZSgpO1xyXG4gICAgJCgnI3ZpZGVvJykuaGlkZSgpO1xyXG4gICAgJCgnI3ByZXZpZXcnKS5zaG93KCk7XHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAnMCcpIHtcclxuICAgICAgdGhpcy5pbWFnZVBhdGggPSAnYXNzZXRzL2ltZy9jcm9waW1hZ2UvYXZhdGFyLnBuZyc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5EYXRhREIodGhpcy5kYXRhQXBpLkRhdGFGaWxlcy5EYXRhQmFzZSwgdGhpcy5kYXRhQXBpLkRhdGFGaWxlcy5TY2hlbWEsICdGSUxFU19SZXRyaWV2ZScsIHsgRmlsZXNJZDogdGhpcy52YWx1ZSB9KS5zdWJzY3JpYmUoKChmaWxlcykgPT4ge1xyXG4gICAgICAgIGlmICghKGZpbGVzID09IHVuZGVmaW5lZCB8fCBmaWxlcyA9PSBudWxsIHx8IGZpbGVzID09ICcnKSAmJiBmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB2YXIgdXJsSW1hZ2VzID0gZmlsZXNbMF0uRmlsZVVybC5zcGxpdCgnXFxcXCcpO1xyXG4gICAgICAgICAgdGhpcy5pbWFnZVBhdGggPSB0aGlzLnBhdGggKyBmaWxlc1swXS5GaWxlVXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSksIChcclxuICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIHRoaXMudmlkZW9zID0gdGhpcy52aWRlbyA9PSB1bmRlZmluZWQgfHwgdGhpcy52aWRlbyA9PSBudWxsID8gbnVsbCA6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudDtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gY29uc3QgX3ZpZGVvID0gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcclxuICAgIC8vICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSB9KVxyXG4gICAgLy8gICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAvLyAgICAgICBfdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgLy8gICAgICAgX3ZpZGVvLnBsYXkoKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5pbml0Q2FtZXJhKHsgdmlkZW86IHRydWUsIGF1ZGlvOiBmYWxzZSB9KTtcclxuICB9XHJcbiAgcHVibGljIHNvdW5kKCkge1xyXG4gICAgdGhpcy5pbml0Q2FtZXJhKHsgdmlkZW86IHRydWUsIGF1ZGlvOiB0cnVlIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgaW5pdENhbWVyYShjb25maWc6IGFueSkge1xyXG4gICAgdmFyIGJyb3dzZXIgPSA8YW55Pm5hdmlnYXRvcjtcclxuICAgIGJyb3dzZXIuZ2V0VXNlck1lZGlhID0gKGJyb3dzZXIuZ2V0VXNlck1lZGlhIHx8XHJcbiAgICAgIGJyb3dzZXIud2Via2l0R2V0VXNlck1lZGlhIHx8XHJcbiAgICAgIGJyb3dzZXIubW96R2V0VXNlck1lZGlhIHx8XHJcbiAgICAgIGJyb3dzZXIubXNHZXRVc2VyTWVkaWEpO1xyXG4gICAgYnJvd3Nlci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbmZpZykudGhlbihzdHJlYW0gPT4ge1xyXG4gICAgICAvL3RoaXMudmlkZW9zLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XHJcbiAgICAgIC8vdGhpcy52aWRlby5wbGF5KCk7XHJcbiAgICAgIHRoaXMudmlkZW9zLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgdGhpcy52aWRlb3MucGxheSgpO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgbW9kZWxCb3goKSB7XHJcbiAgICB0aGlzLnNob3dNb2RlbCA9IHRydWU7XHJcbiAgICB0aGlzLnNob3dVcGxhb2QgPSBmYWxzZTtcclxuICAgICQoJy5jcm9waGlkZScpLmhpZGUoKVxyXG4gIH1cclxuICBwdWJsaWMgY2xvc2VNb2RlbCgpIHtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZFwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9ICcnO1xyXG4gICAgbGV0IGNyaW1nID0gJCgnI2NpbWdkaXYnKS5jcm9wcGllKCdkZXN0cm95Jyk7XHJcbiAgICAkKCcjcHJldmlldycpLmNyb3BwaWUoJ2Rlc3Ryb3knKTtcclxuICAgICQoJyNjaW1nZGl2JykuaGlkZSgpO1xyXG4gICAgJCgnLmRkc3doZCcpLnNob3coKTtcclxuICAgICQoJyNjcm9wYnRuJykuc2hvdygpO1xyXG4gICAgJCgnI2NhbXN3aGknKS5zaG93KCk7XHJcbiAgICAkKCcjY3JvcGJ0bicpLmhpZGUoKTtcclxuICAgICQoJyNwcmV2aWV3JykuaGlkZSgpO1xyXG4gICAgJCgnI3ZpZGVvJykuaGlkZSgpO1xyXG4gICAgdGhpcy5jcm9wQnRuID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhbWNyb3BCdG4gPSBmYWxzZTtcclxuICAgIHRoaXMuc25hcFBob3RvID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dNb2RlbCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93VXBsYW9kID0gZmFsc2U7XHJcbiAgfVxyXG4gIHB1YmxpYyBjYXB0dXJlKCkge1xyXG4gICAgJCgnI2NpbWdkaXYnKS5jcm9wcGllKCdkZXN0cm95Jyk7XHJcbiAgICAkKCcjdmlkZW8nKS5jcm9wcGllKCdkZXN0cm95Jyk7XHJcbiAgICB0aGlzLmNhcHR1cmVzID0gW11cclxuICAgIHRoaXMuY2FtY3JvcEJ0biA9IHRydWU7XHJcbiAgICB0aGlzLnNuYXBQaG90byA9IGZhbHNlO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCAwLCAwLCA2NDAsIDQ4MCk7XHJcbiAgICB0aGlzLmNhcHR1cmVzLnB1c2godGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKTtcclxuICAgICQoJyN2aWRlbycpLmhpZGUoKTtcclxuICAgICQoJyNjaW1nZGl2Jykuc2hvdygpO1xyXG4gICAgJCgnLnNhdmVidG4nKS5zaG93KCk7XHJcbiAgICAkKCcuc25hcFBpYycpLmhpZGUoKTtcclxuICAgICQoJyNjcm9wYnRuJykuaGlkZSgpO1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBcIkNhcHR1cmUucG5nXCI7XHJcbiAgICBjb25zdCBjcmltZyA9ICQoJyNjaW1nZGl2JykuY3JvcHBpZVxyXG4gICAgICAoe1xyXG4gICAgICAgIGVuYWJsZUV4aWY6IHRydWUsXHJcbiAgICAgICAgdmlld3BvcnQ6IHsgd2lkdGg6IDE2MCwgaGVpZ2h0OiAxNjAsIHR5cGU6ICdjaXJjbGUnIH0sXHJcbiAgICAgICAgYm91bmRhcnk6XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgY3JpbWcuY3JvcHBpZSgnYmluZCcsXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSxcclxuICAgICAgICBjaXJjbGU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgY3JvcGNhbSgpIHtcclxuICAgICQoJy5odG1sYmluZHMxJykuYXR0cignc3JjJywgJycpO1xyXG4gICAgJCgnLmNyb3BoaWRlJykuc2hvdygpO1xyXG4gICAgdGhpcy5jYW1jcm9wQnRuID0gZmFsc2U7XHJcbiAgICAkKCcjY2ltZ2RpdicpLmNyb3BwaWUoJ3Jlc3VsdCcsIHsgY2lyY2xlOiB0cnVlLCB9LCAnaHRtbCcpLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgJCgnLmh0bWxiaW5kczEnKS5hdHRyKCdzcmMnLCBodG1sKTtcclxuICAgICAgcmV0dXJuIGh0bWxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlSW1hZ2UgPSByZXM7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgJCgnI2NpbWdkaXYnKS5oaWRlKCk7XHJcbiAgICB0aGlzLnNob3dVcGxhb2QgPSB0cnVlO1xyXG4gIH1cclxuICBwdWJsaWMgc25hcFBob3RvRXZ0KCkge1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gICAgJCgnI3ZpZGVvJykuc2hvdygpO1xyXG4gICAgdGhpcy5zbmFwUGhvdG8gPSB0cnVlO1xyXG4gICAgJCgnI2NhbXN3aGknKS5oaWRlKCk7XHJcbiAgICAkKCcjaHRtbGJpbmRzLCAjcHJldmlldycpLmhpZGUoKTtcclxuICB9XHJcbiAgcHVibGljIGZpbGVDaGFuZ2VFdmVudChmaWxlSW5wdXQ6IGFueSkge1xyXG4gICAgaWYgKGZpbGVJbnB1dC50YXJnZXQuZmlsZXMgJiYgZmlsZUlucHV0LnRhcmdldC5maWxlc1swXSkge1xyXG4gICAgICB0aGlzLmltYWdlTmFtZSA9IGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbXCIwXCJdLm5hbWU7XHJcbiAgICAgICQoJyNjcm9wYnRuJykuc2hvdygpO1xyXG4gICAgICAkKCcuZGRzd2hkJykuaGlkZSgpO1xyXG4gICAgICB0aGlzLmNyb3BCdG4gPSB0cnVlO1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAkKCcjcHJldmlldycpLmF0dHIoJ3NyYycsICcnKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAkKCcjcHJldmlldycpLmF0dHIoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgdmFyIGNyb3AgPSAkKCcjcHJldmlldycpLmNyb3BwaWVcclxuICAgICAgICAgICh7XHJcbiAgICAgICAgICAgIGVuYWJsZUV4aWY6IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdwb3J0OlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaXJjbGUnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm91bmRhcnk6XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY3JvcC5jcm9wcGllKCdiaW5kJywge1xyXG4gICAgICAgICAgdXJsOiBlLnRhcmdldC5yZXN1bHRcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZUlucHV0LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBjcm9wKCkge1xyXG4gICAgJCgnLmNyb3BoaWRlJykuc2hvdygpXHJcbiAgICAkKCcuaHRtbGJpbmRzMScpLmF0dHIoJ3NyYycsICcnKTtcclxuICAgICQoJyNwcmV2aWV3JykuY3JvcHBpZSgncmVzdWx0JywgeyBjaXJjbGU6IHRydWUgfSwgJ2h0bWwnKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoJy5odG1sYmluZHMxJykuYXR0cignc3JjJywgaHRtbCk7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLmNhcHR1cmVJbWFnZSA9IHJlcztcclxuICAgICAgfSlcclxuICAgICQoJyNwcmV2aWV3JykuY3JvcHBpZSgnZGVzdHJveScpO1xyXG4gICAgJCgnI3ByZXZpZXcnKS5oaWRlKCk7XHJcbiAgICAkKCcjY3JvcGJ0bicpLmhpZGUoKTtcclxuICAgIHRoaXMuc2hvd1VwbGFvZCA9IHRydWU7XHJcbiAgfVxyXG4gIHB1YmxpYyB1cGxvYWQoKSB7XHJcbiAgICB2YXIgYmxvY2sgPSB0aGlzLmNhcHR1cmVJbWFnZS5zcGxpdChcIjtcIik7XHJcbiAgICB2YXIgY29udGVudFR5cGUgPSBibG9ja1swXS5zcGxpdChcIjpcIilbMV07Ly8gSW4gdGhpcyBjYXNlIFwiaW1hZ2UvZ2lmXCJcclxuICAgIHZhciByZWFsRGF0YSA9IGJsb2NrWzFdLnNwbGl0KFwiLFwiKVsxXTsvLyBJbiB0aGlzIGNhc2UgXCJSMGxHT0RsaFBRQkVBUGVvQUpvc00uLi4uXCJcclxuICAgIHZhciBibG9iID0gYjY0dG9CbG9iKHJlYWxEYXRhLCBjb250ZW50VHlwZSk7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2IsIHRoaXMuaW1hZ2VOYW1lKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRoaXMudmFsdWUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlZ3JvdXBpZCcsIHRoaXMudmFsdWUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdtZWRpYVR5cGUnLCAncHJvZmlsZXBpYycpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdkZXNjcmlwdGlvbicsIHRoaXMuaW1hZ2VOYW1lKTtcclxuXHJcbiAgICAvLyAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRcIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSAnJztcclxuICAgIC8vICQoJy5odG1sYmluZHMnKS5hdHRyKCdzcmMnLCAnJylcclxuICAgIC8vIHRoaXMuYXZ0YXJJbWFnZSA9IHRydWVcclxuICAgIC8vICQoJyNjaW1nZGl2JykuaGlkZSgpO1xyXG4gICAgLy8gJCgnI2NpbWdkaXYnKS5oaWRlKCk7XHJcbiAgICAvLyAkKCcuZGRzd2hkJykuc2hvdygpO1xyXG4gICAgLy8gJCgnI2Nyb3BidG4nKS5zaG93KCk7XHJcbiAgICAvLyAkKCcjY2Ftc3doaSwuaGlkZScpLnNob3coKTtcclxuICAgIC8vICQoJyNjcm9wYnRuJykuaGlkZSgpO1xyXG4gICAgLy8gJCgnI3ByZXZpZXcnKS5oaWRlKCk7XHJcbiAgICAvLyAkKCcjdmlkZW8nKS5oaWRlKCk7XHJcbiAgICAvLyB0aGlzLmNyb3BCdG4gPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuY2FtY3JvcEJ0biA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5zbmFwUGhvdG8gPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuc2hvd01vZGVsID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLnNob3dVcGxhb2QgPSBmYWxzZTtcclxuICAgIC8vICQoJy5odG1sYmluZHMnKS5hdHRyKCdzcmMnLCB0aGlzLmNhcHR1cmVJbWFnZSlcclxuXHJcbiAgICB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCwgZm9ybURhdGEsIHsgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsIG9ic2VydmU6ICdldmVudHMnIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAvL3RoaXMucGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRcIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSAnJztcclxuICAgICAgICAgICQoJy5odG1sYmluZHMnKS5hdHRyKCdzcmMnLCAnJylcclxuICAgICAgICAgIHRoaXMuYXZ0YXJJbWFnZSA9IHRydWVcclxuICAgICAgICAgICQoJyNjaW1nZGl2JykuaGlkZSgpO1xyXG4gICAgICAgICAgJCgnI2NpbWdkaXYnKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKCcuZGRzd2hkJykuc2hvdygpO1xyXG4gICAgICAgICAgJCgnI2Nyb3BidG4nKS5zaG93KCk7XHJcbiAgICAgICAgICAkKCcjY2Ftc3doaSwuaGlkZScpLnNob3coKTtcclxuICAgICAgICAgICQoJyNjcm9wYnRuJykuaGlkZSgpO1xyXG4gICAgICAgICAgJCgnI3ByZXZpZXcnKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKCcjdmlkZW8nKS5oaWRlKCk7XHJcbiAgICAgICAgICB0aGlzLmNyb3BCdG4gPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuY2FtY3JvcEJ0biA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zbmFwUGhvdG8gPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc2hvd01vZGVsID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dVcGxhb2QgPSBmYWxzZTtcclxuICAgICAgICAgICQoJy5odG1sYmluZHMnKS5hdHRyKCdzcmMnLCB0aGlzLmNhcHR1cmVJbWFnZSk7XHJcbiAgICAgICAgICB0aGlzLk9uU2F2ZUZpbGUuZW1pdCh7IGV2ZW50IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBmdW5jdGlvbiBiNjR0b0Jsb2IoYjY0RGF0YSwgY29udGVudFR5cGUpIHtcclxuICAgICAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnJztcclxuICAgICAgdmFyIHNsaWNlU2l6ZSA9IHNsaWNlU2l6ZSB8fCA1MTI7XHJcbiAgICAgIHZhciBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYjY0RGF0YSk7XHJcbiAgICAgIHZhciBieXRlQXJyYXlzID0gW107XHJcbiAgICAgIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xyXG4gICAgICAgIHZhciBzbGljZSA9IGJ5dGVDaGFyYWN0ZXJzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2xpY2VTaXplKTtcclxuICAgICAgICB2YXIgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoc2xpY2UubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XHJcbiAgICAgICAgYnl0ZUFycmF5cy5wdXNoKGJ5dGVBcnJheSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihieXRlQXJyYXlzLCB7IHR5cGU6IGNvbnRlbnRUeXBlIH0pO1xyXG4gICAgICByZXR1cm4gYmxvYjtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIERhdGFEQihkYXRhYmFzZSwgc2NoZW1hLCBwcm9jZWR1cmVOYW1lLCBwYXJhbXMgPSB7fSkge1xyXG4gICAgdmFyIHNxbEluaXQgPSB0aGlzLmRhdGFBcGkuQXBpVXJsICsgJ0RhdGEvRXhlYy8nO1xyXG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICB2YXIgdXJsUXVlcnkgPSBzcWxJbml0ICsgZGF0YWJhc2UgKyAnLycgKyBzY2hlbWEgKyAnLycgKyBwcm9jZWR1cmVOYW1lICsgJz9hcGlfa2V5PScgKyB0aGlzLmRhdGFBcGkuQWNjZXNzVG9rZW47XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHVybFF1ZXJ5LCBwYXJhbXMsIHsgaGVhZGVyczogaGVhZGVycyB9KS5tYXAoKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSkuY2F0Y2godGhpcy5lcnJvckhhbmRsZXIpO1xyXG4gIH1cclxuICBwdWJsaWMgZXJyb3JIYW5kbGVyKGVycm9yKSB7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvciB8fCAnU0VSVkVSIEVSUk9SJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==