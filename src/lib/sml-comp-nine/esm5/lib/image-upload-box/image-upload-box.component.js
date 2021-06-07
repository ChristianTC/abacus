import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
var ImageUploadBoxComponent = /** @class */ (function () {
    function ImageUploadBoxComponent(http) {
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
    ImageUploadBoxComponent.prototype.ngOnInit = function () {
        this.getToken();
    };
    ImageUploadBoxComponent.prototype.getToken = function () {
        var _this = this;
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(function (res) {
                _this.GenericToken = res["GenericToken"];
                _this.getListdata();
            });
        }
        else {
            this.getListdata();
        }
    };
    ImageUploadBoxComponent.prototype.getListdata = function () {
        var _this = this;
        if (this.FilesGroupId) {
            var body = {
                FilesGroupId: this.FilesGroupId
            };
            var url = this.apiURL + "Data/Exec/" + this.database + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(function (res) {
                var temp = [];
                _this.imagesData = {};
                temp = res;
                for (var i = 0; i < temp.length; i++) {
                    if (_this.FileId == temp[i].FilesId) {
                        var nType = {
                            path: _this.fileurl + temp[i].FileUrl,
                            description: temp[i].Description,
                            FilesId: temp[i].FilesId,
                            type: "Image"
                        };
                        _this.imagesData = nType;
                    }
                }
                _this.isLoading = true;
            }, function (erorr) {
                _this.isLoading = true;
            });
        }
        else {
            this.isLoading = true;
        }
    };
    ImageUploadBoxComponent.prototype.uploadAndProgress = function (files) {
        var _this = this;
        console.log(files);
        var flag = false;
        var _loop_1 = function (j) {
            var sel = this_1.allowFiles.filter(function (d) { return d == files[j].type; });
            if (sel.length == 0) {
                flag = true;
                return "break";
            }
        };
        var this_1 = this;
        for (var j = 0; j < files.length; j++) {
            var state_1 = _loop_1(j);
            if (state_1 === "break")
                break;
        }
        if (flag) {
            this.error_message = "Invalid File Format. Allow Only This Format " + this.allowFiles.toString() + ".";
        }
        else {
            this.error_message = "";
            for (var i = 0; i < files.length; i++) {
                var formData = new FormData();
                formData.append('file', files[i], files[i].name);
                formData.append('id', '0');
                formData.append('filegroupid', this.FilesGroupId);
                formData.append('mediaType', 'example');
                formData.append('description', files[i].name);
                this.http.post(this.apiURL + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
                    .subscribe(function (event) {
                    if (event.type === HttpEventType.UploadProgress) {
                        _this.percentDone = Math.round(100 * event.loaded / event.total);
                    }
                    else if (event instanceof HttpResponse) {
                        _this.fileResponse.emit(event.body);
                        _this.FilesGroupId = event.body['FilesGroupId'];
                        setTimeout(function () {
                            _this.percentDone = 0;
                            var nType = {
                                path: _this.fileurl + event.body['FileUrl'],
                                description: event.body['Description'],
                                FilesId: event.body['FilesId'],
                                type: "Image"
                            };
                            _this.imagesData = nType;
                        }, 3000);
                    }
                });
            }
        }
    };
    ImageUploadBoxComponent.prototype.deleteFIles = function (value) {
        var _this = this;
        this.http.delete(this.apiURL + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(function (res) {
            if (res) {
                _this.imagesData = {};
            }
        });
    };
    ImageUploadBoxComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
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
    ImageUploadBoxComponent = __decorate([
        Component({
            selector: 'sml-image-upload-box',
            template: "\n  <div class=\"error-msg\" *ngIf=\"error_message != ''\">{{error_message}}</div>\n<div *ngIf=\"!imagesData.path && isLoading\" class=\"uploadImage d-flex align-items-center flex-column\">\n  <i class=\"fa fa-camera fz24\"></i>\n  <p>Upload Image</p>\n  <input type=\"file\" id=\"fileinput\" (change)=\"uploadAndProgress($event.target.files)\" class=\"drag\" />\n  <div class=\"fz24\">\n    <span *ngIf=\"percentDone\"> Upload Percent: {{percentDone}}%</span>\n  </div>\n  <div class=\"progressContainer\" *ngIf=\"percentDone\">\n    <div class=\"procesbar\"></div>\n    <div class=\"w-100 z9\">\n      <div class=\"progressbar\" [ngStyle]=\"{'width.%':percentDone}\"></div>\n    </div>\n  </div>\n  </div>\n  <div *ngIf=\"imagesData.path && isLoading\" class=\"preview-img\">\n    <img [src]=\"imagesData.path\" height=\"147\" width=\"100%\" onerror=\"this.onerror=null; this.src='assets/404_images.png'\" class=\"hover-shadow cursor\">\n    <span class=\"remove_icon\">\n      <i class=\"fa fa-times\" (click)=\"deleteFIles(imagesData.FilesId)\"></i>\n    </span>\n  </div>\n  ",
            styles: ["\n  .uploadImage{background-color:#777777;border-radius:3px;padding:40px 20px;width:100%;font-size:14px;color:#cccccc;}\n  .uploadImage .fa{font-size:30px;}\n  .remove_icon{position:absolute;right:13px;top:-2px;cursor:pointer;}\n  .drag{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;z-index:999999;}\n  img.hover-shadow{transition:0.3s;}\n  .hover-shadow:hover{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}\n  .cursor{cursor:pointer;}\n  .preview-img{position:relative;width:100%;}\n  .progressContainer{width:100%;position:relative;top:2px;}\n  .progressbar{height:2px;background:green;float:left;}\n  .procesbar{background:#ccc;height:2px;position:absolute;top:0;left:0;width:100%;}\n  .z9{z-index:99;position:relative;}\n  .error-msg{font-size:13px;text-align:center;color:red}\n  "]
        })
    ], ImageUploadBoxComponent);
    return ImageUploadBoxComponent;
}());
export { ImageUploadBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2ltYWdlLXVwbG9hZC1ib3gvaW1hZ2UtdXBsb2FkLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBMkM1RjtJQW1CRSxpQ0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWpCM0IsV0FBTSxHQUFRLGdDQUFnQyxDQUFDO1FBQy9DLFlBQU8sR0FBVyxrQ0FBa0MsQ0FBQztRQUNyRCxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLGlCQUFZLEdBQVEsR0FBRyxDQUFDO1FBQ3hCLFdBQU0sR0FBUSxHQUFHLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztRQUNqQyxlQUFVLEdBQVEsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBRXhCLG1CQUFjLEdBQUc7WUFDZixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUM7SUFDc0MsQ0FBQztJQUN6QywwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCwwQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLElBQUksQ0FBQyxZ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O1FBQVQsTUFBTSxFQUFFO2lFQUFpQztJQUNqQztRQUFSLEtBQUssRUFBRTsrREFBK0M7SUFDOUM7UUFBUixLQUFLLEVBQUU7aUVBQXdCO0lBVHJCLHVCQUF1QjtRQXpDbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsMGpDQXNCVDtxQkFDUSxvMEJBY1I7U0FDRixDQUFDO09BQ1csdUJBQXVCLENBZ0huQztJQUFELDhCQUFDO0NBQUEsQUFoSEQsSUFnSEM7U0FoSFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtaW1hZ2UtdXBsb2FkLWJveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiZXJyb3ItbXNnXCIgKm5nSWY9XCJlcnJvcl9tZXNzYWdlICE9ICcnXCI+e3tlcnJvcl9tZXNzYWdlfX08L2Rpdj5cclxuPGRpdiAqbmdJZj1cIiFpbWFnZXNEYXRhLnBhdGggJiYgaXNMb2FkaW5nXCIgY2xhc3M9XCJ1cGxvYWRJbWFnZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtY29sdW1uXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1jYW1lcmEgZnoyNFwiPjwvaT5cclxuICA8cD5VcGxvYWQgSW1hZ2U8L3A+XHJcbiAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlaW5wdXRcIiAoY2hhbmdlKT1cInVwbG9hZEFuZFByb2dyZXNzKCRldmVudC50YXJnZXQuZmlsZXMpXCIgY2xhc3M9XCJkcmFnXCIgLz5cclxuICA8ZGl2IGNsYXNzPVwiZnoyNFwiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJwZXJjZW50RG9uZVwiPiBVcGxvYWQgUGVyY2VudDoge3twZXJjZW50RG9uZX19JTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NDb250YWluZXJcIiAqbmdJZj1cInBlcmNlbnREb25lXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvY2VzYmFyXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidy0xMDAgejlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzYmFyXCIgW25nU3R5bGVdPVwieyd3aWR0aC4lJzpwZXJjZW50RG9uZX1cIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJpbWFnZXNEYXRhLnBhdGggJiYgaXNMb2FkaW5nXCIgY2xhc3M9XCJwcmV2aWV3LWltZ1wiPlxyXG4gICAgPGltZyBbc3JjXT1cImltYWdlc0RhdGEucGF0aFwiIGhlaWdodD1cIjE0N1wiIHdpZHRoPVwiMTAwJVwiIG9uZXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDsgdGhpcy5zcmM9J2Fzc2V0cy80MDRfaW1hZ2VzLnBuZydcIiBjbGFzcz1cImhvdmVyLXNoYWRvdyBjdXJzb3JcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwicmVtb3ZlX2ljb25cIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIChjbGljayk9XCJkZWxldGVGSWxlcyhpbWFnZXNEYXRhLkZpbGVzSWQpXCI+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC51cGxvYWRJbWFnZXtiYWNrZ3JvdW5kLWNvbG9yOiM3Nzc3Nzc7Ym9yZGVyLXJhZGl1czozcHg7cGFkZGluZzo0MHB4IDIwcHg7d2lkdGg6MTAwJTtmb250LXNpemU6MTRweDtjb2xvcjojY2NjY2NjO31cclxuICAudXBsb2FkSW1hZ2UgLmZhe2ZvbnQtc2l6ZTozMHB4O31cclxuICAucmVtb3ZlX2ljb257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTNweDt0b3A6LTJweDtjdXJzb3I6cG9pbnRlcjt9XHJcbiAgLmRyYWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7b3BhY2l0eTowO3otaW5kZXg6OTk5OTk5O31cclxuICBpbWcuaG92ZXItc2hhZG93e3RyYW5zaXRpb246MC4zczt9XHJcbiAgLmhvdmVyLXNoYWRvdzpob3Zlcntib3gtc2hhZG93OjAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7fVxyXG4gIC5jdXJzb3J7Y3Vyc29yOnBvaW50ZXI7fVxyXG4gIC5wcmV2aWV3LWltZ3twb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO31cclxuICAucHJvZ3Jlc3NDb250YWluZXJ7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MnB4O31cclxuICAucHJvZ3Jlc3NiYXJ7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kOmdyZWVuO2Zsb2F0OmxlZnQ7fVxyXG4gIC5wcm9jZXNiYXJ7YmFja2dyb3VuZDojY2NjO2hlaWdodDoycHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7fVxyXG4gIC56OXt6LWluZGV4Ojk5O3Bvc2l0aW9uOnJlbGF0aXZlO31cclxuICAuZXJyb3ItbXNne2ZvbnQtc2l6ZToxM3B4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOnJlZH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWRCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBhcGlVUkw6IGFueSA9ICdodHRwOi8vYXNzaXN0LmFhYWRldi5pbmZvL2FwaS8nO1xyXG4gIEBJbnB1dCgpIGZpbGV1cmw6IHN0cmluZyA9ICdodHRwOi8vYXNzaXN0LmFhYWRldi5pbmZvL21lZGlhLyc7XHJcbiAgQElucHV0KCkgZGF0YWJhc2U6IHN0cmluZyA9ICdBU1NJU1QnO1xyXG4gIEBJbnB1dCgpIEZpbGVzR3JvdXBJZDogYW55ID0gXCIwXCI7XHJcbiAgQElucHV0KCkgRmlsZUlkOiBhbnkgPSBcIjBcIjtcclxuICBAT3V0cHV0KCkgZmlsZVJlc3BvbnNlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBASW5wdXQoKSBhbGxvd0ZpbGVzOiBhbnkgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgQElucHV0KCkgR2VuZXJpY1Rva2VuOiBhbnkgPSBcIlwiO1xyXG4gIGltYWdlc0RhdGE6IGFueSA9IHt9O1xyXG4gIGlzTG9hZGluZzogYW55ID0gZmFsc2U7XHJcbiAgZXJyb3JfbWVzc2FnZTogYW55ID0gJyc7XHJcbiAgcGVyY2VudERvbmU6IG51bWJlcjtcclxuICBodHRwT3B0aW9uSlNPTiA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0pXHJcbiAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRUb2tlbigpO1xyXG4gIH1cclxuICBnZXRUb2tlbigpIHtcclxuICAgIGlmICh0aGlzLkdlbmVyaWNUb2tlbiA9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlVUkwgKyBcIkdldFN5c3RlbUluZm8/cGFzc2NvZGU9ZmxpcHBlcjYxM1wiKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLkdlbmVyaWNUb2tlbiA9IHJlc1tcIkdlbmVyaWNUb2tlblwiXTtcclxuICAgICAgICB0aGlzLmdldExpc3RkYXRhKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXRMaXN0ZGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRMaXN0ZGF0YSgpIHtcclxuICAgIGlmICh0aGlzLkZpbGVzR3JvdXBJZCkge1xyXG4gICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIEZpbGVzR3JvdXBJZDogdGhpcy5GaWxlc0dyb3VwSWRcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy5hcGlVUkwgKyBcIkRhdGEvRXhlYy9cIiArIHRoaXMuZGF0YWJhc2UgKyBcIi9jb3JlL0ZJTEVTX0xpc3Q/YXBpX2tleT1cIiArIHRoaXMuR2VuZXJpY1Rva2VuO1xyXG4gICAgICB0aGlzLmh0dHAucG9zdCh1cmwsIGJvZHksIHRoaXMuaHR0cE9wdGlvbkpTT04pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wOiBhbnkgPSBbXTtcclxuICAgICAgICB0aGlzLmltYWdlc0RhdGEgPSB7fTtcclxuICAgICAgICB0ZW1wID0gcmVzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuRmlsZUlkID09IHRlbXBbaV0uRmlsZXNJZCkge1xyXG4gICAgICAgICAgICBsZXQgblR5cGUgPSB7XHJcbiAgICAgICAgICAgICAgcGF0aDogdGhpcy5maWxldXJsICsgdGVtcFtpXS5GaWxlVXJsLFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0ZW1wW2ldLkRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgIEZpbGVzSWQ6IHRlbXBbaV0uRmlsZXNJZCxcclxuICAgICAgICAgICAgICB0eXBlOiBcIkltYWdlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmltYWdlc0RhdGEgPSBuVHlwZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9LCBlcm9yciA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgdXBsb2FkQW5kUHJvZ3Jlc3MoZmlsZXM6IEZpbGVbXSkge1xyXG4gICAgY29uc29sZS5sb2coZmlsZXMpO1xyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmlsZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgbGV0IHNlbCA9IHRoaXMuYWxsb3dGaWxlcy5maWx0ZXIoZCA9PiBkID09IGZpbGVzW2pdLnR5cGUpO1xyXG4gICAgICBpZiAoc2VsLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChmbGFnKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JfbWVzc2FnZSA9IFwiSW52YWxpZCBGaWxlIEZvcm1hdC4gQWxsb3cgT25seSBUaGlzIEZvcm1hdCBcIiArIHRoaXMuYWxsb3dGaWxlcy50b1N0cmluZygpICsgXCIuXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9yX21lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbaV0sIGZpbGVzW2ldLm5hbWUpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsICcwJyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlZ3JvdXBpZCcsIHRoaXMuRmlsZXNHcm91cElkKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21lZGlhVHlwZScsICdleGFtcGxlJyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkZXNjcmlwdGlvbicsIGZpbGVzW2ldLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpVVJMICsgJ3VwbG9hZGVyL3VwbG9hZG5ldycsIGZvcm1EYXRhLCB7IHJlcG9ydFByb2dyZXNzOiB0cnVlLCBvYnNlcnZlOiAnZXZlbnRzJyB9KVxyXG4gICAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wZXJjZW50RG9uZSA9IE1hdGgucm91bmQoMTAwICogZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5maWxlUmVzcG9uc2UuZW1pdChldmVudC5ib2R5KTtcclxuICAgICAgICAgICAgICB0aGlzLkZpbGVzR3JvdXBJZCA9IGV2ZW50LmJvZHlbJ0ZpbGVzR3JvdXBJZCddO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50RG9uZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgblR5cGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHBhdGg6IHRoaXMuZmlsZXVybCArIGV2ZW50LmJvZHlbJ0ZpbGVVcmwnXSxcclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmJvZHlbJ0Rlc2NyaXB0aW9uJ10sXHJcbiAgICAgICAgICAgICAgICAgIEZpbGVzSWQ6IGV2ZW50LmJvZHlbJ0ZpbGVzSWQnXSxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlc0RhdGEgPSBuVHlwZTtcclxuICAgICAgICAgICAgICB9LCAzMDAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkZWxldGVGSWxlcyh2YWx1ZSkge1xyXG4gICAgdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFwaVVSTCArIFwiTW9kZWxzL2ZpbGVzL1wiICsgdmFsdWUgKyBcIj9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW4pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZXNEYXRhID0ge307XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=