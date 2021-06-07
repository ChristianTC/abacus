import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
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
ImagesLightBoxComponent = __decorate([
    Component({
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
    })
], ImagesLightBoxComponent);
export { ImagesLightBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLWxpZ2h0LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2ltYWdlcy1saWdodC1ib3gvaW1hZ2VzLWxpZ2h0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBbVUzRixJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQXFCbEMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQW5CM0IsV0FBTSxHQUFRLHFDQUFxQyxDQUFDO1FBQ3BELFlBQU8sR0FBVyxxQ0FBcUMsQ0FBQztRQUN4RCxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBQzFCLGlCQUFZLEdBQVEsR0FBRyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDakMsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBUSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6RyxpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUNoQyxlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBR3hCLG1CQUFjLEdBQUc7WUFDZixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUM7UUFDRixlQUFVLEdBQVEsQ0FBQyxDQUFDO1FBQ3BCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBQ0QsUUFB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bnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NtbC1pbWFnZXMtbGlnaHQtYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJ3LTEwMFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJlcnJvci1tc2dcIiAqbmdJZj1cImVycm9yX21lc3NhZ2UgIT0gJydcIj57e2Vycm9yX21lc3NhZ2V9fTwvZGl2PlxyXG4gIDxsYWJlbCBjbGFzcz1cImRyb3Bkb3duYXJlYSBtYXItYi0wXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IHctMTAwIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGlkPVwib3RoZXJcIiAoY2hhbmdlKT1cInVwbG9hZEFuZFByb2dyZXNzKCRldmVudC50YXJnZXQuZmlsZXMpXCIgY2xhc3M9XCJkcmFnXCIgLz5cclxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1cGxvYWRpY29uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvdXBsb2FkLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHBvc2l0aW9uLXJlbGF0aXZlIHc3OVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnoxNFwiPkNob29zZSBhIGZpbGUgb3IgZHJhZyBpdCBoZXJlLlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicGVyY2VudERvbmVcIj4gVXBsb2FkIFBlcmNlbnQ6IHt7cGVyY2VudERvbmV9fSU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvY2VzYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHo5XCIgKm5nSWY9XCJwZXJjZW50RG9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzYmFyXCIgW25nU3R5bGVdPVwieyd3aWR0aC4lJzpwZXJjZW50RG9uZX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJ1cGxvYWRTdWNjZXNzXCIgY2xhc3M9XCJzdWNjZXNzbXNnXCI+VXBsb2FkIFN1Y2Nlc3NmdWw8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xhYmVsPlxyXG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbXQtMiBzbWwtbGlnaHQtYm94LXNjcm9sbC15XCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA4cHg7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIHBvc2l0aW9uLXJlbGF0aXZlXCIgKm5nRm9yPVwibGV0IGltZyBvZiBpbWFnZXNEYXRhO2xldCBpPWluZGV4XCI+XHJcbiAgICA8c3BhbiAqbmdJZj1cImltZy50eXBlID09ICdJbWFnZSdcIj5cclxuICAgICAgPGltZyBbc3JjXT1cImltZy5wYXRoXCIgaGVpZ2h0PVwiOTZcIiB3aWR0aD1cIjEwMCVcIiBvbmVycm9yPVwidGhpcy5vbmVycm9yPW51bGw7IHRoaXMuc3JjPSdhc3NldHMvNDA0X2ltYWdlcy5wbmcnXCIgKGNsaWNrKT1cIm9wZW5Nb2RhbCgpO2N1cnJlbnRTbGlkZShpKzEpXCJcclxuICAgICAgICBjbGFzcz1cImhvdmVyLXNoYWRvdyBjdXJzb3JcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwiaW1nLnR5cGUgPT0gJ1RleHQnXCI+XHJcbiAgICAgIDxhIFtocmVmXT1cImltZy5wYXRoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvdHh0X2ljb24ucG5nXCIgaGVpZ2h0PVwiOTZcIiB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImhvdmVyLXNoYWRvdyBjdXJzb3JcIj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJpbWcudHlwZSA9PSAnUGRmJ1wiPlxyXG4gICAgICA8YSBbaHJlZl09XCJpbWcucGF0aFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BkZl9pY29uLnBuZ1wiIGhlaWdodD1cIjk2XCIgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJob3Zlci1zaGFkb3cgY3Vyc29yXCI+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwiaW1nLnR5cGUgPT0gJ0F1ZGlvJ1wiPlxyXG4gICAgICA8YSBbaHJlZl09XCJpbWcucGF0aFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2F1ZGlvX2ljb24ucG5nXCIgaGVpZ2h0PVwiOTZcIiB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImhvdmVyLXNoYWRvdyBjdXJzb3JcIj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJpbWcudHlwZSA9PSAnVmlkZW8nXCI+XHJcbiAgICAgIDxhIFtocmVmXT1cImltZy5wYXRoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvdmlkZW9faWNvbi5wbmdcIiBoZWlnaHQ9XCI5NlwiIHdpZHRoPVwiMTAwJVwiIGNsYXNzPVwiaG92ZXItc2hhZG93IGN1cnNvclwiPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAqbmdJZj1cImltZy50eXBlID09ICdEb2MnXCI+XHJcbiAgICAgIDxhIFtocmVmXT1cImltZy5wYXRoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvZG9jX2ljb24ucG5nXCIgaGVpZ2h0PVwiOTZcIiB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImhvdmVyLXNoYWRvdyBjdXJzb3JcIj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJpbWcudHlwZSA9PSAnQ3N2J1wiPlxyXG4gICAgICA8YSBbaHJlZl09XCJpbWcucGF0aFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2Nzdl9pY29uLnBuZ1wiIGhlaWdodD1cIjk2XCIgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJob3Zlci1zaGFkb3cgY3Vyc29yXCI+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwiaW1nLnR5cGUgPT0gJ1BwdCdcIj5cclxuICAgICAgPGEgW2hyZWZdPVwiaW1nLnBhdGhcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9wcHRfaWNvbi5wbmdcIiBoZWlnaHQ9XCI5NlwiIHdpZHRoPVwiMTAwJVwiIGNsYXNzPVwiaG92ZXItc2hhZG93IGN1cnNvclwiPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAqbmdJZj1cImltZy50eXBlID09ICdYbHMnXCI+XHJcbiAgICAgIDxhIFtocmVmXT1cImltZy5wYXRoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJhc3NldHMveGxzX2ljb24ucG5nXCIgaGVpZ2h0PVwiOTZcIiB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImhvdmVyLXNoYWRvdyBjdXJzb3JcIj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZW1vdmVfaWNvblwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgKGNsaWNrKT1cImRlbGV0ZUZJbGVzKGltZy5GaWxlc0lkLGkpXCI+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGlkPVwibXlNb2RhbGxpZ2h0Ym94XCIgY2xhc3M9XCJtb2RhbFwiPlxyXG4gIDxzcGFuIGNsYXNzPVwiY2xvc2UgY3Vyc29yXCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IGF1dG87d2lkdGg6IDgwJTtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm15U2xpZGVzXCIgKm5nRm9yPVwibGV0IGltZyBvZiBpbWFnZXNEYXRhO2xldCBpPWluZGV4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm51bWJlcnRleHRcIj57e2kgKyAxfX0mbmJzcDsvJm5ic3A7e3tpbWFnZXNEYXRhLmxlbmd0aH19PC9kaXY+XHJcbiAgICAgICAgPGltZyBbc3JjXT1cImltZy5wYXRoXCIgb25lcnJvcj1cInRoaXMub25lcnJvcj1udWxsOyB0aGlzLnNyYz0nYXNzZXRzLzQwNF9pbWFnZXMucG5nJ1wiICAgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YSBjbGFzcz1cInByZXZcIiAoY2xpY2spPVwicGx1c1NsaWRlcygtMSlcIj4mIzEwMDk0OzwvYT5cclxuICAgIDxhIGNsYXNzPVwibmV4dFwiIChjbGljayk9XCJwbHVzU2xpZGVzKDEpXCI+JiMxMDA5NTs8L2E+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNhcHRpb24tY29udGFpbmVyXCI+XHJcbiAgICA8cCBpZD1cImNhcHRpb25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+e3tzbGlkZURlc2NyaXB0aW9ufX08L3A+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cdGAsXHJcbiAgc3R5bGVzOiBbYFxyXG5cdC5tYXItYi0we1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRyb3Bkb3duYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMzVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2dyZXNzQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAycHg7XHJcbn1cclxuLmRyYWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6OTk5OTk5O1xyXG59ICAgXHJcbi5wcm9ncmVzc2JhciB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmZ6MTQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5zdWNjZXNzbXNnIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnByb2Nlc2JhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLno5IHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi53Nzkge1xyXG4gICAgd2lkdGg6IDgyJTtcclxufVxyXG4udXBsb2FkaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi53LTEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZmxleC1jb2x1bW4ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG59ICBcclxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59XHJcbi5yb3cgPiAuY29sdW1uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4uY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxufVxyXG4uY2xvc2Uge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubXlTbGlkZXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY3Vyc29yIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJldixcclxuLm5leHQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLm5leHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxufVxyXG4ucHJldjpob3ZlcixcclxuLm5leHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDE2NywgMTY3LCAwLjgpO1xyXG59XHJcbi5udW1iZXJ0ZXh0IHtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLmNhcHRpb24tY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTZweCAxNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kZW1vIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG4uYWN0aXZlLFxyXG4uZGVtbzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbmltZy5ob3Zlci1zaGFkb3cge1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG4uaG92ZXItc2hhZG93OmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLnNtbC1saWdodC1ib3gtc2Nyb2xsLXkge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDozMTVweDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4uc21sLWxpZ2h0LWJveC1zY3JvbGwteTpob3ZlciB7XHJcbiAgICBvdmVyZmxvdy15OiBvdmVybGF5O1xyXG59XHJcbi5zbWwtbGlnaHQtYm94LXNjcm9sbC15Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxufVxyXG4uc21sLWxpZ2h0LWJveC1zY3JvbGwteTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIyLCAyMjIsIDIyMiwgLjc1KTtcclxufVxyXG4uc21sLWxpZ2h0LWJveC1zY3JvbGwteTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnJlbW92ZV9pY29ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTNweDtcclxuICB0b3A6IC0ycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5lcnJvci1tc2d7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmVkXHJcbn1cclxuXHRgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlc0xpZ2h0Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgYXBpVVJMOiBhbnkgPSAnaHR0cDovL2FwaW5leHQuYWFhZGV2LmluZm8vYXBpbmV4dC8nO1xyXG4gIEBJbnB1dCgpIGZpbGV1cmw6IHN0cmluZyA9ICdodHRwOi8vcHJldmlldy5hYmFjdXNjcm0ubmV0L21lZGlhLyc7XHJcbiAgQElucHV0KCkgZGF0YWJhc2U6IHN0cmluZyA9ICdBUFBTJztcclxuICBASW5wdXQoKSBGaWxlc0dyb3VwSWQ6IGFueSA9IFwiMFwiO1xyXG4gIEBPdXRwdXQoKSBmaWxlUmVzcG9uc2UgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIEBJbnB1dCgpIGJvZHk6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGFsbG93RmlsZXM6IGFueSA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnYXBwbGljYXRpb24vcGRmJywgJ2F1ZGlvL21wMycsICd2aWRlby9tcDQnLCAndGV4dC9wbGFpbiddO1xyXG4gIEBJbnB1dCgpIEdlbmVyaWNUb2tlbjogYW55ID0gXCJcIjtcclxuICBpbWFnZXNEYXRhOiBhbnkgPSBbXTtcclxuICBlcnJvcl9tZXNzYWdlOiBhbnkgPSAnJztcclxuICBwZXJjZW50RG9uZTogbnVtYmVyO1xyXG4gIHVwbG9hZFN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgaHR0cE9wdGlvbkpTT04gPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9KVxyXG4gIH07XHJcbiAgc2xpZGVJbmRleDogYW55ID0gMTtcclxuICBzbGlkZURlc2NyaXB0aW9uOiBhbnkgPSAnJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldFRva2VuKCk7XHJcbiAgfVxyXG4gIGdldFRva2VuKCkge1xyXG4gICAgaWYgKHRoaXMuR2VuZXJpY1Rva2VuID09IFwiXCIpIHtcclxuICAgICAgdGhpcy5odHRwLmdldCh0aGlzLmFwaVVSTCArIFwiR2V0U3lzdGVtSW5mbz9wYXNzY29kZT1mbGlwcGVyNjEzXCIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuR2VuZXJpY1Rva2VuID0gcmVzW1wiR2VuZXJpY1Rva2VuXCJdO1xyXG4gICAgICAgIHRoaXMuZ2V0TGlzdGRhdGEoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldExpc3RkYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldExpc3RkYXRhKCkge1xyXG4gICAgaWYgKHRoaXMuRmlsZXNHcm91cElkKSB7XHJcbiAgICAgIHRoaXMuYm9keVsnRmlsZXNHcm91cElkJ10gPSB0aGlzLkZpbGVzR3JvdXBJZDtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy5hcGlVUkwgKyBcIkRhdGEvRXhlYy9cIiArIHRoaXMuZGF0YWJhc2UgKyBcIi9jb3JlL0ZJTEVTX0xpc3Q/YXBpX2tleT1cIiArIHRoaXMuR2VuZXJpY1Rva2VuO1xyXG4gICAgICB0aGlzLmh0dHAucG9zdCh1cmwsIHRoaXMuYm9keSwgdGhpcy5odHRwT3B0aW9uSlNPTikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXA6IGFueSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzRGF0YSA9IFtdO1xyXG4gICAgICAgIHRlbXAgPSByZXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgblR5cGUgPSB7XHJcbiAgICAgICAgICAgIHBhdGg6IHRoaXMuZmlsZXVybCArIHRlbXBbaV0uRmlsZVVybCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRlbXBbaV0uRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIEZpbGVzSWQ6IHRlbXBbaV0uRmlsZXNJZCxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy5nZXRGaWxlVHlwZSh0ZW1wW2ldLkZpbGVVcmwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmltYWdlc0RhdGEucHVzaChuVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0RmlsZVR5cGUodXJsKSB7XHJcbiAgICBsZXQgYXJyID0gdXJsLnNwbGl0KFwiLlwiKTtcclxuICAgIGlmIChhcnIgJiYgYXJyLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgIGlmIChhcnJbMV0gPT0gJ2pwZycgfHwgYXJyWzFdID09ICdKUEcnIHx8IGFyclsxXSA9PSAnanBlZycgfHwgYXJyWzFdID09ICdKUEVHJyB8fCBhcnJbMV0gPT0gJ3BuZycgfHwgYXJyWzFdID09ICdQTkcnIHx8IGFyclsxXSA9PSAnZ2lmJyB8fCBhcnJbMV0gPT0gJ0dJRicgfHwgYXJyWzFdID09ICdzdmcnIHx8IGFyclsxXSA9PSAnU1ZHJykge1xyXG4gICAgICAgIHJldHVybiAnSW1hZ2UnXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFyclsxXSA9PSAndHh0JyB8fCBhcnJbMV0gPT0gJ1RYVCcpIHtcclxuICAgICAgICByZXR1cm4gJ1RleHQnXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFyclsxXSA9PSAnbXAzJyB8fCBhcnJbMV0gPT0gJ01QMycpIHtcclxuICAgICAgICByZXR1cm4gJ0F1ZGlvJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhcnJbMV0gPT0gJ21wNCcgfHwgYXJyWzFdID09ICdNUDQnKSB7XHJcbiAgICAgICAgcmV0dXJuICdWaWRlbydcclxuICAgICAgfVxyXG4gICAgICBpZiAoYXJyWzFdID09ICdwZGYnIHx8IGFyclsxXSA9PSAnUERGJykge1xyXG4gICAgICAgIHJldHVybiAnUGRmJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhcnJbMV0gPT0gJ2NzdicgfHwgYXJyWzFdID09ICdDU1YnKSB7XHJcbiAgICAgICAgcmV0dXJuICdDc3YnXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFyclsxXSA9PSAnZG9jJyB8fCBhcnJbMV0gPT0gJ0RPQycpIHtcclxuICAgICAgICByZXR1cm4gJ0RvYydcclxuICAgICAgfVxyXG4gICAgICBpZiAoYXJyWzFdID09ICdwcHQnIHx8IGFyclsxXSA9PSAnUFBUJykge1xyXG4gICAgICAgIHJldHVybiAnUHB0J1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhcnJbMV0gPT0gJ3hscycgfHwgYXJyWzFdID09ICdYTFMnKSB7XHJcbiAgICAgICAgcmV0dXJuICdYbHMnXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnRmlsZSc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwbG9hZEFuZFByb2dyZXNzKGZpbGVzOiBGaWxlW10pIHtcclxuICAgIGNvbnNvbGUubG9nKGZpbGVzKTtcclxuICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpbGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGxldCBzZWwgPSB0aGlzLmFsbG93RmlsZXMuZmlsdGVyKGQgPT4gZCA9PSBmaWxlc1tqXS50eXBlKTtcclxuICAgICAgaWYgKHNlbC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZmxhZykge1xyXG4gICAgICB0aGlzLmVycm9yX21lc3NhZ2UgPSBcIkludmFsaWQgRmlsZSBGb3JtYXQuIEFsbG93IE9ubHkgVGhpcyBGb3JtYXQgXCIgKyB0aGlzLmFsbG93RmlsZXMudG9TdHJpbmcoKSArIFwiLlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lcnJvcl9tZXNzYWdlID0gXCJcIjtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVzW2ldLCBmaWxlc1tpXS5uYW1lKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCAnMCcpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZWdyb3VwaWQnLCB0aGlzLkZpbGVzR3JvdXBJZCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdtZWRpYVR5cGUnLCAnZXhhbXBsZScpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBmaWxlc1tpXS5uYW1lKTtcclxuICAgICAgICB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVSTCArICd1cGxvYWRlci91cGxvYWRuZXcnLCBmb3JtRGF0YSwgeyByZXBvcnRQcm9ncmVzczogdHJ1ZSwgb2JzZXJ2ZTogJ2V2ZW50cycgfSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgIHRoaXMucGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMudXBsb2FkU3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5maWxlUmVzcG9uc2UuZW1pdChldmVudC5ib2R5KTtcclxuICAgICAgICAgICAgICB0aGlzLkZpbGVzR3JvdXBJZCA9IGV2ZW50LmJvZHlbJ0ZpbGVzR3JvdXBJZCddO1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2V0TGlzdGRhdGEoKVxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyY2VudERvbmUgPSAwXHJcbiAgICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZGVsZXRlRklsZXModmFsdWUsIGluZGV4KSB7XHJcbiAgICB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYXBpVVJMICsgXCJNb2RlbHMvZmlsZXMvXCIgKyB2YWx1ZSArIFwiP2FwaV9rZXk9XCIgKyB0aGlzLkdlbmVyaWNUb2tlbikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB0aGlzLmltYWdlc0RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbGxpZ2h0Ym94XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfVxyXG4gIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxsaWdodGJveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHBsdXNTbGlkZXMobikge1xyXG4gICAgdGhpcy5zaG93U2xpZGVzKHRoaXMuc2xpZGVJbmRleCArPSBuKTtcclxuICB9XHJcbiAgY3VycmVudFNsaWRlKG4pIHtcclxuICAgIHRoaXMuc2hvd1NsaWRlcyh0aGlzLnNsaWRlSW5kZXggPSBuKTtcclxuICB9XHJcbiAgc2hvd1NsaWRlcyhuKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHsgdGhpcy5zbGlkZUluZGV4ID0gMSB9XHJcbiAgICBpZiAobiA8IDEpIHsgdGhpcy5zbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCB9XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNsaWRlc1tpXVsnc3R5bGUnXS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBzbGlkZXNbdGhpcy5zbGlkZUluZGV4IC0gMV1bJ3N0eWxlJ10uZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHRoaXMuc2xpZGVEZXNjcmlwdGlvbiA9IHRoaXMuaW1hZ2VzRGF0YVt0aGlzLnNsaWRlSW5kZXggLSAxXS5kZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuIl19