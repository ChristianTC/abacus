import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
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
MultifileuploadComponent = __decorate([
    Component({
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
    })
], MultifileuploadComponent);
export { MultifileuploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlmaWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbXVsdGlmaWxldXBsb2FkL211bHRpZmlsZXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBMFczRixJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQThCcEMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTdCM0IsZ0JBQVcsR0FBWSxPQUFPLENBQUM7UUFFL0IsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLFFBQUcsR0FBUSxxQ0FBcUMsQ0FBQztRQUNqRCxZQUFPLEdBQVEsNkJBQTZCLENBQUM7UUFDN0MsYUFBUSxHQUFRLE1BQU0sQ0FBQztRQUd2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDaEMsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFDO1FBU3ZDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXBCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUE7UUFDaEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQTJCZixtQkFBYyxHQUFHO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDeEIsY0FBYyxFQUFFLGtCQUFrQjthQUNsQyxDQUFDO1NBQ0YsQ0FBQztJQTFCRixDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLGlCQUFp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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErUlI7S0FDRCxDQUFDO0dBRVcsd0JBQXdCLENBbUlwQztTQW5JWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc21sLW11bHRpZmlsZXVwbG9hZCcsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzPVwidy0xMDBcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMTIgY29sLTEyIG1iLTBcIj48L2xhYmVsPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtMTAgbWItMCBmbG9hdGluZy1ib3JkZXJcIiBbbmdTdHlsZV09XCJ7J3otaW5kZXgnOiBzdHlsZVpJbmRleH1cIj5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwiY29sLW1kLTEyIGRyb3Bkb3duYXJlYVwiIGZvcj1cInt7aWRJbnB1dEZpbGV9fVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJkLWZsZXggdy0xMDAgZmxleC1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwie3tpZElucHV0RmlsZX19XCIgKGNoYW5nZSk9XCJ1cGxvYWQoJGV2ZW50LnRhcmdldC5maWxlcylcIiBjbGFzcz1cImRyYWdcIlxyXG5cdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2hlaWdodC5weCc6IGhlaWdodCwnd2lkdGgucHgnOiB3aWR0aH1cIiAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgZmxleC1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInVwbG9hZGljb25cIj48aW1nIHNyYz1cIi4vYXNzZXRzL3VwbG9hZC5wbmdcIiAvPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHBvc2l0aW9uLXJlbGF0aXZlIHc3OVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZ6MTRcIj5DaG9vc2UgYSBmaWxlIG9yIGRyYWcgaXQgaGVyZS4gPGJyIC8+PHNwYW4gKm5nSWY9XCJwZXJjZW50RG9uZVwiPiBVcGxvYWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQZXJjZW50OiB7e3BlcmNlbnREb25lfX0lPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb2dyZXNzQ29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm9jZXNiYXJcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMTAwIHo5XCIgKm5nSWY9XCJwZXJjZW50RG9uZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm9ncmVzc2JhclwiIFtuZ1N0eWxlXT1cInsnd2lkdGguJSc6cGVyY2VudERvbmV9XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwidXBsb2FkU3VjY2Vzc1wiIGNsYXNzPVwic3VjY2Vzc21zZ1wiPlVwbG9hZCBTdWNjZXNzZnVsPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImxpc3RkYXRhIG10LTFcIj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJ3LTEwMCBmaWxldXBsb2FkbGlzdFwiICpuZ0lmPVwiVXBsb2FkZWRGaWxlbGlcIj5cclxuXHRcdFx0XHRcdDxsaSAqbmdGb3I9XCJsZXQgZGF0YSBvZiBkYXRhczsgbGV0IGkgPSBpbmRleFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWNvbnRlbnQtYXJvdW5kXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTEwMFwiICpuZ0lmPVwiY29udGVudEluZGV4ICE9IGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7e2RhdGEuRmlsZVVybH19XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmbG9hdC1sZWZ0XCIgc3R5bGU9XCJ3aWR0aDogMzAlO1wiPnt7ZGF0YS5EZXNjcmlwdGlvbn19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJtb3JlRGF0YSA9PSB0cnVlXCIgY2xhc3M9XCJmbG9hdC1sZWZ0XCIgc3R5bGU9XCJ3aWR0aDogMjAlO1wiPnt7ZGF0YS5DaGFuZ2VkQnl9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwibW9yZURhdGEgPT0gdHJ1ZVwiIGNsYXNzPVwiZmxvYXQtbGVmdFwiIHN0eWxlPVwid2lkdGg6IDMwJTtcIj57e2RhdGEuQ2hhbmdlZE9ufX08L2E+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1jb250ZW50LWFyb3VuZCBzZXR0aW5nb3B0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3Jvc3MgaWNvbnMgYmctc3VjY2VzcyBwb2ludGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJlZGl0KGRhdGEsaSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuL2Fzc2V0cy9wZW5jaWwtZWRpdC1idXR0b24uc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjcm9zcyBpY29ucyBiZy1kYW5nZXIgcG9pbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoY2xpY2spPVwiRGVsZXRlRklsZXMoZGF0YS5GaWxlc0lkKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vYXNzZXRzL2Nyb3NzLnN2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiZWRpdENvbnRlbnQgJiYgY29udGVudEluZGV4ID09IGlcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHctNzVcIiBuYW1lPVwidGV4dGRhdGFcIiBbdmFsdWVdPVwiZGF0YS5EZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cInRleHRkYXRhXCIgI2N0cmw9XCJuZ01vZGVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1jb250ZW50LWFyb3VuZCBzZXR0aW5nb3B0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3Jvc3MgaWNvbnMgYmctc3VjY2VzcyBwb2ludGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJ1cGRhdGVOYW1lKGRhdGEuRmlsZXNJZClcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuL2Fzc2V0cy9jaGVja2VkLnN2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3Jvc3MgaWNvbnMgYmctZGFyayBwb2ludGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJlc2MoKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vYXNzZXRzL2Nyb3NzLnN2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHQuY3Vyc29yLXBvaW50ZXIge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAubm9kZS1jb250ZW50LXdyYXBwZXIsIC50cmVlLWNoaWxkcmVuIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmNyLXNsaWRlci13cmFwIHtcclxuXHRcdG1hcmdpbjogOHB4IGF1dG8gIWltcG9ydGFudFxyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuZHJhZyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0ei1pbmRleDo5OTk5OTk7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5kcm9wZG93bmFyZWEge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcclxuXHRcdHBhZGRpbmc6IDUwcHggMTVweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiA2NXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmRyb3Bkb3duYXJlYSBoMSB7XHJcblx0XHRjb2xvcjogIzdkN2M3YztcclxuXHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLnBkNSB7XHJcblx0XHRwYWRkaW5nOiA4OXB4IDlweCA3NnB4IDBweDtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC50YWJsZS1oZWFkZWQge1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAubWd0NTAge1xyXG5cdFx0bWFyZ2luLXRvcDogNTBweDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmJ0bmRlZmF1bHQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuXHRcdGJvcmRlci1jb2xvcjogI2U2ZTZlNjtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuY3Jvc3Mge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0Y29sb3I6IHJlZDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLnByb2dyZXNzYmFyIHtcclxuXHRcdGhlaWdodDogMnB4O1xyXG5cdFx0YmFja2dyb3VuZDogZ3JlZW47XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmZ6MTQge1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAudG9wNTAge1xyXG5cdFx0dG9wOiAzMXB4O1xyXG5cdFx0bGVmdDogLTE5cHg7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5zdWNjZXNzbXNnIHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRjb2xvcjogZ3JlZW47XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTgycHg7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5maWxldXBsb2FkbGlzdCB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuZmlsZXVwbG9hZGxpc3QgbGkge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5maWxldXBsb2FkbGlzdCBsaSBhIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLnBvaW50ZXIge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuY3Jvc3MgaW1nIHtcclxuXHRcdGhlaWdodDogMTBweDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmxpc3RkYXRhIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWF4LXdpZHRoOiA0NjNweFxyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuc2V0dGluZ29wdGlvbiB7XHJcblx0XHR3aWR0aDogNjZweDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmljb25zIHtcclxuXHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuY2hlY2tib3gge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW46IDEwcHggMDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLnN0eWxlZC1jaGVja2JveCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuc3R5bGVkLWNoZWNrYm94K3NwYW4ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLnN0eWxlZC1jaGVja2JveCtzcGFuOmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG5cdFx0d2lkdGg6IDE1cHg7XHJcblx0XHRoZWlnaHQ6IDE1cHg7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuc3R5bGVkLWNoZWNrYm94OmNoZWNrZWQrc3BhbjphZnRlciB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogNXB4O1xyXG5cdFx0dG9wOiAycHg7XHJcblx0XHRoZWlnaHQ6IDlweDtcclxuXHRcdHdpZHRoOiA1cHg7XHJcblx0XHRib3JkZXI6IHNvbGlkICMwOWI0YmQ7XHJcblx0XHRib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5wcm9jZXNiYXIge1xyXG5cdFx0YmFja2dyb3VuZDogI2NjYztcclxuXHRcdGhlaWdodDogMnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAucHJvZ3Jlc3NDb250YWluZXIge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0b3A6IDEwcHg7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC56OSB7XHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLnc3OSB7XHJcblx0XHR3aWR0aDogODIlO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAudXBsb2FkaWNvbiB7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAudy0xMDAge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5tYi01IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDNyZW0haW1wb3J0YW50XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5mb3JtLXJvdyB7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IC01cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogLTVweDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmNvbC0xMiB7XHJcblx0XHRmbGV4OiAwIDAgMTAwJTtcclxuXHRcdG1heC13aWR0aDogMTAwJTtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLm1iLTAge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmZvcm0tcm93Pi5jb2wsIC5mb3JtLXJvdz5bY2xhc3MqPWNvbC1dIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHRcdHBhZGRpbmctbGVmdDogNXB4O1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuZC1mbGV4IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5ib3JkZXIge1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnRcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmZsZXgtY29sdW1uIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmFsaWduLWNvbnRlbnQtYXJvdW5kIHtcclxuXHRcdGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFxyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuYmctc3VjY2VzcyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1IWltcG9ydGFudDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmJnLWRhbmdlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1IWltcG9ydGFudDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG5cdFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyIWltcG9ydGFudDtcclxuXHRcdC1tcy1mbGV4LXBhY2s6IGNlbnRlciFpbXBvcnRhbnQ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5mbG9hdC1yaWdodCB7XHJcblx0XHRmbG9hdDogcmlnaHQhaW1wb3J0YW50O1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xyXG5cdFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcblx0XHQtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcblx0ICB9XHJcblx0ICAuZmxvYXRpbmctYm9yZGVye1xyXG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG5cdFx0cGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG5cdCAgfVxyXG5cdGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlmaWxldXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBpZElucHV0RmlsZSA6IHN0cmluZyA9ICdvdGhlcic7XHJcblx0QElucHV0KCkgbGFiZWw7XHJcblx0QElucHV0KCkgbmFtZUZpbGVzOiBhbnkgPSAnJztcclxuXHRASW5wdXQoKSBnbG9iYWxfdXJsOiBhbnkgPSAnJztcclxuXHRASW5wdXQoKSB1cmw6IGFueSA9ICdodHRwOi8vYXBpbmV4dC5hYWFkZXYuaW5mby9hcGluZXh0Lyc7XHJcblx0QElucHV0KCkgZmlsZXVybDogYW55ID0gJ2h0dHA6Ly9hcGluZXh0LmFhYWRldi5pbmZvLyc7XHJcblx0QElucHV0KCkgZGF0YUJhc2U6IGFueSA9ICdBUFBTJztcclxuXHRpbWFnZVNyYzogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIEZpbGVzR3JvdXBJZHZhbHVlOiBhbnk7XHJcblx0QElucHV0KCkgbW9yZURhdGE6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoKSBzdHlsZVpJbmRleDogbnVtYmVyO1xyXG5cdEBPdXRwdXQoKSBmaWxlUmVzcG9uc2UgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cdEBPdXRwdXQoKSBhZnRlckVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cdEdlbmVyaWNUb2tlbjogYW55O1xyXG5cdC8vIGZpbGV1cmw6IHN0cmluZyA9ICdodHRwOi8vYXBpbmV4dC5hYWFkZXYuaW5mby8nO1xyXG5cdGZpbGVuYW1lOiBzdHJpbmc7XHJcblx0aGVpZ2h0OiBhbnk7XHJcblx0d2lkdGg6IGFueTtcclxuXHRmaWxlbGluazogc3RyaW5nO1xyXG5cdFVwbG9hZGVkRmlsZWxpOiBib29sZWFuO1xyXG5cdEZpbGVzR3JvdXBJZDogc3RyaW5nO1xyXG5cdGVkaXRDb250ZW50ID0gZmFsc2U7XHJcblx0Y29udGVudEluZGV4OiBhbnk7XHJcblx0ZGF0YXM6IGFueSA9IFtdO1xyXG5cdGRlc2NyaXB0aW9uID0gJydcclxuXHR0ZXh0ZGF0YTogc3RyaW5nID0gJyc7XHJcblx0cGVyY2VudERvbmU6IG51bWJlcjtcclxuXHR1cGxvYWRTdWNjZXNzOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHR9XHJcblx0dXBsb2FkKGZpbGVzOiBGaWxlW10pIHtcclxuXHRcdHRoaXMudXBsb2FkQW5kUHJvZ3Jlc3MoZmlsZXMpO1xyXG5cdH1cclxuXHRwdWJsaWMgRGVsZXRlRklsZXModmFsdWU6IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5odHRwLmRlbGV0ZSh0aGlzLnVybCArIFwiTW9kZWxzL2ZpbGVzL1wiICsgdmFsdWUgKyBcIj9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW4pXHJcblx0XHRcdC5zdWJzY3JpYmUocmVzID0+IHtcclxuXHRcdFx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRcdFx0RmlsZXNHcm91cElkOiB0aGlzLkZpbGVzR3JvdXBJZHZhbHVlXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLnVybCArIFwiRGF0YS9FeGVjL1wiICsgdGhpcy5kYXRhQmFzZSArIFwiL2NvcmUvRklMRVNfTGlzdD9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW47XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB0aGlzLmh0dHBPcHRpb25KU09OKS5zdWJzY3JpYmUocmVzID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YXMgPSBbXTtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YXMgPSByZXM7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IGZpbGVfdXJsID0gdGhpcy5nbG9iYWxfdXJsICsgdGhpcy5kYXRhc1tpXS5GaWxlVXJsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFzW2ldLkZpbGVVcmwgPSBmaWxlX3VybDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuVXBsb2FkZWRGaWxlbGkgPSB0cnVlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdH1cclxuXHRwdWJsaWMgaHR0cE9wdGlvbkpTT04gPSB7XHJcblx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHR9KVxyXG5cdH07XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmdldExpc3RkYXRhKClcclxuXHR9XHJcblx0Z2V0TGlzdGRhdGEoKSB7XHJcblx0XHR0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCJHZXRTeXN0ZW1JbmZvP3Bhc3Njb2RlPWZsaXBwZXI2MTNcIilcclxuXHRcdFx0LnN1YnNjcmliZShyZXMgPT4ge1xyXG5cdFx0XHRcdHRoaXMuR2VuZXJpY1Rva2VuID0gcmVzW1wiR2VuZXJpY1Rva2VuXCJdO1xyXG5cdFx0XHRcdGlmICh0aGlzLkZpbGVzR3JvdXBJZHZhbHVlKSB7XHJcblx0XHRcdFx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRcdFx0XHRGaWxlc0dyb3VwSWQ6IHRoaXMuRmlsZXNHcm91cElkdmFsdWVcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLnVybCArIFwiRGF0YS9FeGVjL1wiICsgdGhpcy5kYXRhQmFzZSArIFwiL2NvcmUvRklMRVNfTGlzdD9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW47XHJcblx0XHRcdFx0XHR0aGlzLmh0dHAucG9zdCh1cmwsIGJvZHksIHRoaXMuaHR0cE9wdGlvbkpTT04pLnN1YnNjcmliZShyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFzID0gcmVzO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgZmlsZV91cmwgPSB0aGlzLmdsb2JhbF91cmwgKyB0aGlzLmRhdGFzW2ldLkZpbGVVcmw7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhc1tpXS5GaWxlVXJsID0gZmlsZV91cmw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5VcGxvYWRlZEZpbGVsaSA9IHRydWU7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0fVxyXG5cdHVwbG9hZEFuZFByb2dyZXNzKGZpbGVzOiBGaWxlW10pIHtcclxuXHRcdHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbMF0sIGZpbGVzWzBdLm5hbWUpXHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ2lkJywgJzAnKTtcclxuXHRcdGZvcm1EYXRhLmFwcGVuZCgnZmlsZWdyb3VwaWQnLCB0aGlzLkZpbGVzR3JvdXBJZHZhbHVlKTtcclxuXHRcdGZvcm1EYXRhLmFwcGVuZCgnbWVkaWFUeXBlJywgJ2V4YW1wbGUnKTtcclxuXHRcdGlmKHRoaXMubmFtZUZpbGVzICE9ICcnKXtcclxuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdkZXNjcmlwdGlvbicsIHRoaXMubmFtZUZpbGVzKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZmlsZXNbMF0ubmFtZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmh0dHAucG9zdCh0aGlzLnVybCArICd1cGxvYWRlci91cGxvYWRuZXcnLCBmb3JtRGF0YSwgeyByZXBvcnRQcm9ncmVzczogdHJ1ZSwgb2JzZXJ2ZTogJ2V2ZW50cycgfSlcclxuXHRcdFx0LnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdFx0aWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuXHRcdFx0XHRcdHRoaXMucGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnVwbG9hZFN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5VcGxvYWRlZEZpbGVsaSA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmZpbGVuYW1lID0gZXZlbnQuYm9keVtcIkRlc2NyaXB0aW9uXCJdXHJcblx0XHRcdFx0XHR0aGlzLmZpbGVsaW5rID0gdGhpcy5maWxldXJsICsgZXZlbnQuYm9keVtcIkZpbGVVcmxcIl1cclxuXHRcdFx0XHRcdHRoaXMuZmlsZVJlc3BvbnNlLmVtaXQoZXZlbnQuYm9keSk7XHJcblx0XHRcdFx0XHR0aGlzLmdldExpc3RkYXRhKClcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVwbG9hZFN1Y2Nlc3MgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBlcmNlbnREb25lID0gMFxyXG5cdFx0XHRcdFx0fSwgMzAwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRlZGl0KGRhdGEsIGkpIHtcclxuXHRcdHRoaXMudGV4dGRhdGEgPSBkYXRhLkRlc2NyaXB0aW9uXHJcblx0XHR0aGlzLmNvbnRlbnRJbmRleCA9IGk7XHJcblx0XHR0aGlzLmVkaXRDb250ZW50ID0gdHJ1ZVxyXG5cdH1cclxuXHR1cGRhdGVOYW1lKGlkKSB7XHJcblx0XHR2YXIgdXJsID0gdGhpcy51cmwgKyBcIk1vZGVscy9GaWxlcz9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW5cclxuXHRcdHZhciBib2R5ID0ge1xyXG5cdFx0XHRGaWxlc0lkOiBpZCxcclxuXHRcdFx0RGVzY3JpcHRpb246IHRoaXMudGV4dGRhdGFcclxuXHRcdH1cclxuXHRcdHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcblx0XHRcdHRoaXMuYWZ0ZXJFZGl0LmVtaXQocmVzKTtcclxuXHRcdFx0dGhpcy5nZXRMaXN0ZGF0YSgpXHJcblx0XHRcdHRoaXMuZXNjKClcclxuXHRcdH0pXHJcblx0fVxyXG5cdGVzYygpIHtcclxuXHRcdHRoaXMuZWRpdENvbnRlbnQgPSBmYWxzZVxyXG5cdFx0dGhpcy5jb250ZW50SW5kZXggPSBudWxsXHJcblx0fVxyXG59XHJcbiJdfQ==