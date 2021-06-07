import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import * as moment_ from 'moment';
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
NotesComponent = __decorate([
    Component({
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
    })
], NotesComponent);
export { NotesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9ub3Rlcy9ub3Rlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUMzRixPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFxVHZCLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUF1QnZCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFyQjNCLFdBQU0sR0FBUSxHQUFHLENBQUM7UUFDbEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVEscUNBQXFDLENBQUM7UUFDcEQsWUFBTyxHQUFXLHFDQUFxQyxDQUFDO1FBQ3hELGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBUSxNQUFNLENBQUM7UUFDdkIsV0FBTSxHQUFRLG1CQUFtQixDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFN0IsZUFBVSxHQUFRO1lBQ2QsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFDRixtQkFBYyxHQUFHO1lBQ2IsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUUsa0JBQWtCO2FBQ3JDLENBQUM7U0FDTCxDQUFDO1FBR0UsSUFBSSxDQUFDLElB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LENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0osQ0FBQTs7WUF4RzZCLFVBQVU7O0FBckIzQjtJQUFSLEtBQUssRUFBRTs4Q0FBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7Z0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzhDQUFxRDtBQUNwRDtJQUFSLEtBQUssRUFBRTsrQ0FBeUQ7QUFDeEQ7SUFBUixLQUFLLEVBQUU7b0RBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFO2dEQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTs4Q0FBbUM7QUFDakM7SUFBVCxNQUFNLEVBQUU7bURBQWtDO0FBVGxDLGNBQWM7SUFuVDFCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbURYO2lCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJQVjtLQUNGLENBQUM7R0FDVyxjQUFjLENBK0gxQjtTQS9IWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NtbC1ub3RlcycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cclxuICA8ZGl2IGNsYXNzPVwibm90ZXNXcmFwcGVyXCI+XHJcbiAgICA8aDQgY2xhc3M9XCJoZWFkXCI+Tm90ZXM8L2g0PlxyXG4gICAgPGRpdiBjbGFzcz1cIm5vdGVzTGF5b3V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVzVGV4dFR5cGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVUZXh0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjNcIiBjbGFzcz1cIm5vdGVUZXhhcmVhXCIgI3RleHRhcmVhIFsobmdNb2RlbCldPVwibXlJbnB1dC52YWx1ZVwiIChrZXl1cCk9XCJvbklucHV0KCRldmVudClcIiBuYW1lPVwiY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIFtuZ0NsYXNzXT1cInsnb3AnOm15SW5wdXQudmFsdWUgIT0gJyd9XCIgPkVudGVyIHlvdXIgbm90ZSBoZXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJ0aGlzLm9uSW5wdXQxKHRleHRhcmVhLnZhbHVlKVwiIGNsYXNzPVwicG9zdEJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGl2aWRlclwiPnw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvc2VuZC5wbmdcIiBjbGFzcz1cInNlbmRpbWdcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3RlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3Rlc0hpc3RvcnlcIj5cclxuICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkYXRlR3JvdXAgb2Ygbm90ZURhdGFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgaXNUb2RheShkYXRlR3JvdXAuZGF0ZSl9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJub3Rlc0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGRhdGEgb2YgZGF0ZUdyb3VwLm5vdGVEYXRhXCIgY2xhc3M9XCJ7e2RhdGEucmVhZH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VySW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPVwie3tkYXRhPy51c2VyVXJsfX1cIiBjbGFzcz1cImF2YXRhclwiICBvbmVycm9yPVwidGhpcy5vbmVycm9yPW51bGw7IHRoaXMuc3JjPSdhc3NldHMvdXNlcmljb24ucG5nJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZXNJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZWluZm9oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVzTmFtZVRpbWluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2RhdGEudXNlcn19ICZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub3RlVGltZVwiPiAvJm5ic3A7IHt7ZGF0YS50aW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhycG9pbnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibm90ZXNTdGF0dXNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm90ZXNNZXNzYWdlXCI+e3tkYXRhLm5vdGV9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcblxyXG51bCB7IG1hcmdpbjogMDsgcGFkZGluZzogMCB9XHJcbmxpIHsgbGlzdC1zdHlsZTogbm9uZTsgfVxyXG4ubXlsaXN0e3dpZHRoOiAxMDAlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uZnoxMiB7IGZvbnQtc2l6ZTogMTJweDsgIH1cclxuLmZ6MTQgeyBmb250LXNpemU6IDE0cHg7ICB9XHJcbi5mejE2IHsgZm9udC1zaXplOiAxNnB4OyAgfVxyXG4ubWdiNXttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4ubWd0NXttYXJnaW4tdG9wOiA1cHg7fVxyXG4ubWd0MTB7bWFyZ2luLXRvcDogMTBweDt9XHJcbi5jb250YWluZXJDb21wb25lbnR7d2lkdGg6IDEwMCU7IGZsb2F0OiBsZWZ0OyAgcGFkZGluZzogMTVweDsgYm9yZGVyOjFweCBzb2xpZCAjZjVmNWY1O31cclxuLmZ1bGwtd3t3aWR0aDogMTAwJTsgZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLm15Y2hhdHN5c3RlbXttYXJnaW46IDA7IHBhZGRpbmc6IDA7IHdpZHRoOiAxMDAlOyBmbG9hdDogbGVmdDt9XHJcbi5ub3RlSW5wdXR7cmVzaXplOiBub25lOyBvdXRsaW5lOiBub25lOyB9XHJcbi5teWNoYXRzeXN0ZW0gbGl7bGlzdC1zdHlsZTogbm9uZTt9XHJcbi5ub3RlSW5wdXR7b3V0bGluZTogbm9uZSAhaW1wb3J0YW50OyBib3gtc2hhZG93OiBub25lO31cclxuLmQtZmxleHtkaXNwbGF5OiBmbGV4O31cclxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVue2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjt9XHJcbi51dl9kcCB7IGhlaWdodDogNTBweDsgd2lkdGg6IDU1cHg7IGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4uYmdfbGlzdCB7IGJhY2tncm91bmQtY29sb3I6ICNmZmQ1ZDU7IGJvcmRlci1yYWRpdXM6IDdweDsgcGFkZGluZzogN3B4OyBmb250LXNpemU6IDEzcHg7IGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7IGZsb2F0OiBsZWZ0O30uZHBfd3JhcHBlciB7IHdpZHRoOjEwMCU7IGRpc3BsYXk6IGZsZXg7IH1cclxuLnV2X2RldGFpbHMgeyB3aWR0aDogOTAlOyBmbG9hdDogcmlnaHQ7ICBwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLTI3cHg7fVxyXG4uY2hhdF9uYW1le2ZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IG5vcm1hbDsgY29sb3I6ICNhMGEwYTA7IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO31cclxuLmNoYXRfZGF0ZXtmb250LXNpemU6IDEycHg7IGNvbG9yOiAjOWU5ZTllOyBtYXJnaW4tbGVmdDowOyBtYXJnaW4tdG9wOiAycHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7fVxyXG4uYWRkZGF0YXt3aWR0aDogMTAwJTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAzcHg7IHJlc2l6ZTogbm9uZTsgYm9yZGVyLXJhZGl1czogM3B4OyBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2OyBmb250LXNpemU6IDEzcHg7IG92ZXJmbG93OiBoaWRkZW47IGhlaWdodDogNjBweDt9XHJcbi5teWxpc3R7ZmxvYXQ6IGxlZnQ7IHdpZHRoOiAxMDAlO31cclxuLnVzZXJuYW1le21hcmdpbi1sZWZ0OiAxMXB4OyB3aWR0aDogMTAwJTsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cclxuLnJpZ2h0c2lkZSAudXZfZGV0YWlsc3t3aWR0aDogOTAlOyBmbG9hdDogbGVmdDsgIHBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAtMjdweDsgdGV4dC1hbGlnbjogcmlnaHQ7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZH1cclxuLnNlY29uZFBlcnNpb257ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB3aWR0aDogMTAwJTt9XHJcbi5mcmlnaHR7ZGlzcGxheTogZmxleDsgICB3aWR0aDogMTAwJTsgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO31cclxuLm1ldWl7bWFyZ2luLXJpZ2h0OiAxM3B4O31cclxuLmNvbnRlbnR0eXBle21hcmdpbi1yaWdodDogMThweDt9XHJcbi50b3ByaWdodHsgYm9yZGVyLXJhZGl1czogN3B4OyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZmJkYTt9XHJcbi51c2VybmFtZUZpcnN0e21hcmdpbi1sZWZ0OiAxNHB4O31cclxuLmRfbGluZXsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxcHg7IGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7IHRvcDogNTYlOyAgIHotaW5kZXg6IC0xOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7fSBcclxuLmRfdGV4dHsgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50OyAgY29sb3I6ICMwMDA7fSBcclxuLnVzZXJpY29ue3dpZHRoOiA1MHB4O31cclxuLm5vdGVzSGlzdG9yeTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbn1cclxuLm5vdGVzSGlzdG9yeTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmYmZiZmI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmJmYmZiXHJcbn1cclxuXHJcbi5ub3Rlc0hpc3Rvcnk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUyZTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5ub3Rlc1dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ubm90ZXNMYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxufVxyXG5cclxuLm5vdGVzVGV4dFR5cGUge1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xyXG59XHJcblxyXG4ubm90ZVRleGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDQ1cHggMTVweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4XHJcbn1cclxuXHJcbi5ub3RlVGV4YXJlYTpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4ZThlOGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5ub3RlVGV4YXJlYTpmb2N1cyArIC5sYWJlbHtcclxuICAgIHRvcDo3cHg7IGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLm9we1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm5vdGVUZXh0Q29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOWQ5ZDlkYmQ7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjJzO1xyXG59XHJcblxyXG4ucG9zdEJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNkNmQ2ZDY7XHJcbn1cclxuXHJcbi5ociB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZGZiZDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNhYmM5OGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMFxyXG59XHJcblxyXG4ubm90ZUNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5ub3Rlc0hpc3Rvcnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLm5vdGVzTGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4ubm90ZXNMaXN0IGxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLm5vdGVzTGlzdCBsaTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5ub3Rlc0xpc3QgbGkudW5yZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGVhZWI7XHJcbn1cclxuXHJcbi5ub3Rlc0xpc3QgbGkucmVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG59XHJcblxyXG4udXNlckltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5vdGVzTmFtZVRpbWluZyB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB3aWR0aDogMzcwcHg7XHJcbn1cclxuXHJcbi5ub3RlVGltZSB7XHJcbiAgICBjb2xvcjogIzkwYjI2NDtcclxufVxyXG5cclxuLm5vdGVzSW5mbyB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICBwYWRkaW5nOiA0cHggMCA0cHggNHB4O1xyXG59XHJcblxyXG4ubm90ZWluZm9oZWFkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjNweFxyXG59XHJcblxyXG4uaHJwb2ludCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1Y2VkNTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi51bnJlYWQgLm5vdGVzU3RhdHVzIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkYTIzYTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5yZWFkIC5ub3Rlc1N0YXR1cyB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNWNlZDU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4ubm90ZXNNZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNlbmRpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzcHg7XHJcbn1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIG5vdGVJZDogYW55ID0gXCIwXCI7XHJcbiAgICBASW5wdXQoKSBub3RlRGF0YTogYW55ID0gW107XHJcbiAgICBASW5wdXQoKSBhcGlVUkw6IGFueSA9ICdodHRwOi8vYXBpbmV4dC5hYWFkZXYuaW5mby9hcGluZXh0Lyc7XHJcbiAgICBASW5wdXQoKSBmaWxldXJsOiBzdHJpbmcgPSAnaHR0cDovL3ByZXZpZXcuYWJhY3VzY3JtLm5ldC9tZWRpYS8nO1xyXG4gICAgQElucHV0KCkgR2VuZXJpY1Rva2VuOiBhbnkgPSBcIlwiO1xyXG4gICAgQElucHV0KCkgZGF0YUJhc2U6IGFueSA9IFwiQVBQU1wiO1xyXG4gICAgQElucHV0KCkgc3BMaXN0OiBhbnkgPSBcImNvcmUvTk9URV9MaXN0TG9nXCI7XHJcbiAgICBAT3V0cHV0KCkgY2xpY2tNZXRob2QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBteUlucHV0OiBhbnkgPSB7IHZhbHVlOiAnJyB9O1xyXG4gICAgVXNlcjogYW55O1xyXG4gICAgTm90ZU9iamVjdDogYW55ID0ge1xyXG4gICAgICAgIE5vdGVJZDogMCxcclxuICAgICAgICBOb3RlczogXCJcIixcclxuICAgICAgICBDaGFuZ2VkQnk6IFwiXCJcclxuICAgIH07XHJcbiAgICBodHRwT3B0aW9uSlNPTiA9IHtcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5Vc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU2Vzc2lvbi5Vc2VyJykpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0Tm90ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3RlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5ub3RlSWQgPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub3RlRGF0YSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuYXBpVVJMICsgXCJEYXRhL0V4ZWMvXCIgKyB0aGlzLmRhdGFCYXNlICsgXCIvXCIgKyB0aGlzLnNwTGlzdCArIFwiP2FwaV9rZXk9XCIgKyB0aGlzLkdlbmVyaWNUb2tlbjtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBOb3RlSWQ6IHRoaXMubm90ZUlkXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmh0dHAucG9zdCh1cmwsIGJvZHksIHRoaXMuaHR0cE9wdGlvbkpTT04pLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5UeXBlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBkYXRhW2ldLkNoYW5nZWRCeSA9PSAnJyA/ICh0aGlzLlVzZXIuRmlyc3ROYW1lICsgJyAnICsgdGhpcy5Vc2VyLkxhc3ROYW1lKSA6IGRhdGFbaV0uQ2hhbmdlZEJ5Q29tcGxldGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJVcmw6IHRoaXMuZmlsZXVybCArIGRhdGFbaV0uRmlsZVVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZTogZGF0YVtpXS5Ob3RlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGhpcy5mb3JtYXQoZGF0YVtpXS5DaGFuZ2VkT24sICdNTS9ERC9ZWVlZJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHRoaXMuZm9ybWF0KGRhdGFbaV0uQ2hhbmdlZE9uLCAnSEg6TU06U1MgQScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkOiBkYXRhW2ldLklzQWN0aW9uID09IFwiVHJ1ZVwiID8gJ3VucmVhZCcgOiAncmVhZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaChuVHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGVEYXRhID0gdGhpcy5ncm91cEJ5KHRlbXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZU5vdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm90ZUlkICE9IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTm90ZU9iamVjdC5DaGFuZ2VkQnkgPSB0aGlzLlVzZXIuVXNlck5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuTm90ZU9iamVjdC5Ob3RlSWQgPSB0aGlzLm5vdGVJZDtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5hcGlVUkwgKyBcIkRhdGEvRXhlYy9cIiArIHRoaXMuZGF0YUJhc2UgKyBcIi9jb3JlL05PVEVfU2F2ZUxvZz9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW47XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgdGhpcy5Ob3RlT2JqZWN0LCB0aGlzLmh0dHBPcHRpb25KU09OKS5zdWJzY3JpYmUoKG5vdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTm90ZU9iamVjdC5Ob3RlcyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vdGVzKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dChldmVudDogYW55KSB7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG4gICAgICAgIGxldCBub3RlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGlmIChjb2RlID09IDEzICYmIG5vdGUgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5Ob3RlT2JqZWN0Lk5vdGVzID0gbm90ZTtcclxuICAgICAgICAgICAgdGhpcy5jbGlja01ldGhvZC5lbWl0KHsgbm90ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlTm90ZSgpO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dDEoZXZlbnQpIHtcclxuICAgICAgICBsZXQgbm90ZSA9IGV2ZW50O1xyXG4gICAgICAgIHRoaXMuTm90ZU9iamVjdC5Ob3RlcyA9IG5vdGU7XHJcbiAgICAgICAgdGhpcy5jbGlja01ldGhvZC5lbWl0KHsgbm90ZSB9KTtcclxuICAgICAgICB0aGlzLnNhdmVOb3RlKCk7XHJcbiAgICAgICAgdGhpcy5teUlucHV0ID0gJyc7XHJcbiAgICAgICAgZXZlbnQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBpc1RvZGF5KGRhdGUpIHtcclxuICAgICAgICBpZiAobW9tZW50KGRhdGUpLmZvcm1hdCgnTU0vREQvWVlZWScpID09IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ01NL0REL1lZWVknKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1RvZGF5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JvdXBCeShkYXRhKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwQnlEYXRlID0ge307XHJcbiAgICAgICAgbGV0IGdyb3VwQnlhcnJheSA9IFtdO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICBncm91cEJ5RGF0ZVthLmRhdGVdID0gZ3JvdXBCeURhdGVbYS5kYXRlXSB8fCBbXTtcclxuICAgICAgICAgICAgZ3JvdXBCeURhdGVbYS5kYXRlXS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IGEudXNlcixcclxuICAgICAgICAgICAgICAgIHVzZXJVcmw6IGEudXNlclVybCxcclxuICAgICAgICAgICAgICAgIG5vdGU6IGEubm90ZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgIHRpbWU6IGEudGltZSxcclxuICAgICAgICAgICAgICAgIHJlYWQ6IGEucmVhZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZ3JvdXBCeURhdGUpIHtcclxuICAgICAgICAgICAgbGV0IG5UeXBlID0ge1xyXG4gICAgICAgICAgICAgICAgZGF0ZToga2V5LFxyXG4gICAgICAgICAgICAgICAgbm90ZURhdGE6IGdyb3VwQnlEYXRlW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncm91cEJ5YXJyYXkucHVzaChuVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBncm91cEJ5YXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0KGRhdGEsIGZvcm1hdCkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQobmV3IERhdGUoZGF0YSkpLmZvcm1hdChmb3JtYXQpO1xyXG4gICAgfVxyXG59Il19