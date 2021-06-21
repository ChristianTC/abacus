import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { todayDate } from '../shared/functions';

import '../styles/components/Finnote.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import userIcon from '../assets/img/usericon.png';
import send from '../assets/img/send.png';
import { height } from 'dom7';
import { useParams } from 'react-router-dom';

let tasks = [];
const tasksArray = [];

const Finnote = () => {

    // Data
    const [finnote, setFinnote] = useState([]);
    
    let param = useParams();
    // console.log(id);
    useEffect(() => {
        fetch(`https://apps.abacuscrm.net/api/Models/FINNOTE/${param.id}?api_key=c606995afe964a17bc298eda26badc40c606995afe964a17bc298eda26badc40`)
        .then(response => response.json())
        .then(data => setFinnote(data))
    }, []);

    console.log(finnote);

    // Modal
    const [modalShow, setModalShow] = React.useState(false);

    // Tasks Array
    for (const [index, value] of tasks.entries()) {
        tasksArray.push(<li key={index}>{value}</li>)
    }

    function changeActivedState(actived, index) {
        return actived.map( (a, i) => {
            if (i === index) return 'active';
            return '';
        });
    }
    
    let contentOpenTasks = (<div className="actived tab-pane">
        <div className="container overflow-auto">
            <div className="row taskArea">
                <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 mt-3 px-0">
                    <h5 className="titleGroupTasks" style={{paddingTop: "10px"}}>
                        Financing in Force
                    </h5>
                </div>
                <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 text-right mb-2 px-0 mt-3">
                    <div className="col-xl-4 col-lg-9 col-md-9 col-sm-9 px-2 float-left">
                        <button className="btn btn-secondary btn-sm" onClick={() => setModalShow(true)}>
                            <span style={{fontSize: "24px", marginLeft: "-3px"}}>+</span>
                        </button>
                    </div>
                    <div className="col-xl-8 col-lg-3 col-md-3 col-sm-3 pl-0 float-left">
                        <button className="btn btn-secondary btn-sm ml-2">
                            <span>Cancel</span>
                        </button>
                    </div>
                </div>

            </div>
            <div className="row col-md-12 taskBody py-2 my-2 mx-0 px-0">
                {tasks}
                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 align-self-center">
                </div>
                <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
                    <div className="row col-md-12 ml-2">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 float-left px-0 mt-2" style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>
                            <div className="userImgA">...
                                Assigned By: Lynette Herrera <br />
                                Due On: 05/27/2021
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-11 col-sm-11 float-left px-0 mt-2" style={{whiteSpace: "nowrap"}}>
                            <div className="userImgA">
                                    ...
                                Completed By: <br />
                                Completed On:  
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 float-left" style={{borderBottom: "1px solid #dee2e6"}}>
                        &nbsp;
                    </div>
                    <div className="row col-md-12 ml-2 mt-2 textTasks">
                        Confirm financing is in force
                    </div>
                </div>
            </div>
        </div>
    </div>)

    let contentActions = (<div className="containerActions">
        <ul className="actionsList">
            <li className="liRed">
                <div className="userImgA">
                    <span className="avatarA">
                        <img src={userIcon} alt="" />
                    </span>
                </div>
                <div className="notesInfoA">
                    <div className="notesNameTiming">
                        <p className="userNameA">Theo Smith</p>
                        <p className="noteTimeA">5/25/2021 4:37:46 PM</p>
                    </div>
                </div>
                <div className="notesA">
                    <p className="notesMessageA">Status: "Enter Finance Contract De ..."</p>
                </div>
            </li>
        </ul>
    </div>);
    let contentNotes = (<div className="notesLayout">
        <div className="notesTextType">
            <div className="noteTextContainer">
                <textarea className="noteTexarea" placeholder="Enter your note here" name="" id="" rows="3"></textarea>
                <a href="" className="postBtn">
                    <span className="divider">|</span>
                    <img className="sendimg" src={send} alt="" />
                </a><br />
            </div>
            <div className="hr"></div>
        </div>
    </div>);
    let contentDocument = (
        <div>
            <div className="newGroupAction_row2">
                <div className="assign-data">
                <label>Assigned To</label>
                <select name="assignedTo">
                    <option defaultValue="name">Name #</option>
                    <option defaultValue="name">Name #</option>
                    <option defaultValue="name">Name #</option>
                    <option defaultValue="name">Name #</option>
                </select>
                </div>
            </div>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
                <label class="custom-file-label" for="customFile">Choose a file or drag it here</label>
            </div>
        </div>
    );
    let contentChangesLog = (<div className="container pt-3" style={{height: "400px"}}>
        <div className="table-100 tableChanges">
            <table className="table table-bordered h-auto" style={{width: "510px", maxHeight: "200px"}}>
                <thead>
                    <tr>
                        <th>Changed On</th>
                        <th>Changed By</th>
                        <th>Field Name</th>
                        <th>Old Value (From)</th>
                        <th>New Value (To)</th>
                    </tr>
                </thead>
                <tbody className="h-auto sml-table-scroll-y" style={{maxHeight: "200px"}}>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
    const [navLink, setNavLink] = useState('OpenTask');
    const [containerContent, setContainerContent] = useState(contentOpenTasks);
    const [actived, setActived] = useState(['active', '', '', '', '']);
    // console.log(actived);
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        switch (navLink) {
            case 'OpenTasks':
                setActived(changeActivedState(actived,0));
                setContainerContent(contentOpenTasks);
                break;
            case 'Actions':
                setActived(changeActivedState(actived,1));
                setContainerContent(contentActions)
                break;
            case 'Notes':
                setActived(changeActivedState(actived,2));
                setContainerContent(contentNotes)
                break;
            case 'Document':
                setActived(changeActivedState(actived,3));
                setContainerContent(contentDocument)
                break;
            case 'ChangesLog':
                setActived(changeActivedState(actived,4));
                setContainerContent(contentChangesLog)
                break;
            default:
                break;
        }
        
    }, [navLink]);
    
    // console.log(actived);
    
    return (
        <div className="Finnote">
            <div className="row">
                <div className="col-md-12 d-flex align-items-center mb-3">
                    <b className="mainHeadingh">
                        Notice (ID {finnote.FinnoteId})
                    </b>
                    <div className="line"></div>
                    <div className="buttonGroup">
                        <div className="col-lg-12 d-flex justify-content-between">
                            <div id="buttonGroup_1">
                                <label htmlFor="assignedTo">Assigned To</label>
                                <select name="name" id="cars">
                                    <option value="name" >Name</option>
                                    <option value="name1">Name</option>
                                    <option value="name2">Name</option>
                                    <option value="name3">Name</option>
                                    <option value="name4">Name</option>
                                    <option value="name5">Name</option>
                                    <option value="name6">Name</option>
                                </select>
                            </div>
                            <div id="buttonGroup_2">
                                <label htmlFor="start">Follow Up Date</label>
                                <input type="date" id="start" name="trip-start"
                                    defaultValue={todayDate()}
                                    // min="2018-01-01" max="2018-12-31" 
                                    />
                            </div>
                            <div className="mr-2">
                                {/* <!-- <button *ngIf="Finnote.NoticeNewStatusId == 2056" (click)="newCancellation()" className="btn btn-sm btn-secondary mr-2" style="height: 45px !important;">Cancellation</button> --> */}
                            </div>
                            <div>
                                <button className="btn btn-sm btn-secondary" id="buttonGroup_button">Exit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pr-4 pl-1">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{marginTop: "-20px"}}>
                        <div className="float-left mb-3">
                            <div className="breadcrumps">
                                <ul className="breadcrumb">
                                    <li><a href="/#"><span> Enter Finance Contract De ... </span></a></li>
                                    <li><a href="/#"><span> Pre-Notice Process Initia ... </span></a></li>
                                    <li><a href="/#"><span> Signed Contract Received  ... </span></a></li>
                                    <li><a href="/#"><span> Contract Sent To Finance  ...   ... </span></a></li>
                                    <li className="selected"><a href="/#"><span> Notice of Acceptance Rece ... </span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="float-left col-xl-2 col-lg-6 col-md-6 col-sm-6 mb-3 pl-0">
                            <div className="float-left ml-2 pl-2" style={{borderLeft: "3px solid #2d353c", marginTop:"1em", height: "57px", width: "260px"}}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic-green">
                                        Financing in Force
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item> Tasks Not Completed or Not Marked as Changed! Please see Open Tasks! </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* <sml-buttongroup id="buttonStatus" [obj]="ButtongroupStatus" (actionClick)="clickWorkFlow($event, 1);" [buttonGroupStyle]="buttonGrpObj.buttonGroupStyles" [buttonGroupLabelStyle]="buttonGrpObj.buttonGroupLabelStyle" [buttonGroupValueStyle]="buttonGrpObj.buttonGroupValueStyle"></sml-buttongroup> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container_a col-lg-12 col-md-12 col-sm-12 mb-4 pr-0 pl-0 col-xl-6">
                    <section className="col-lg-12 col-md-12 col-sm-12 mb-4 pr-0 pl-0 col-xl-12">
                        <div className="financeInf-title">
                            Finance Information
                        </div>
                        <div className="px-2 w-100 row mx-0">
                            {/* <div className="position-relative">
                                <div className="input-field float-group float-group-static">
                                    <input type="text" style={{fontFamily: "Verdana", fontSize: "13px", fontWeight: "normal", color: "rgb(51, 51, 51)", margin: "-3px 0px 0px -2px", background: "transparent"}} />
                                    <label className="label" style={{fontFamily: "sans-serif", fontSize: "10px", fontWeight: "bold", color: "rgb(106, 161, 56)", marginLeft: "4px"}}> Quote No. </label>
                                </div>
                            </div> */}
                            
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 myCol mt-2 financeInf-data">
                                <p className="financeInf-label">Quote No.</p>
                                <p className="financeInf-content">{finnote.QuoteNo}</p>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 myCol mt-2 financeInf-data">
                                <p className="financeInf-label">Contract Number</p>
                                <p className="financeInf-content">{finnote.FinanceContractNo}</p>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 myCol mt-2 financeInf-data">
                                <p className="financeInf-label">Program</p>
                                <p className="financeInf-content">{finnote.FinanceContractNo}</p>
                            </div>
                        </div>

                    </section>

                </div>

                <div className="container_b col-lg-12 col-md-12 col-sm-12 mb-4 pr-0 pl-0 col-xl-6">
                    <div className="w-100">
                        <ul className="justify-content-start nav nav-tabs">
                            <li className="nav-item">
                                <div className="button-add">
                                    <div  className={`nav-link ${actived[0]}`} style={{display: "flex", alignItems: "center"}} onClick={() => setNavLink('OpenTasks')}>
                                        <b className="btext">Open Tasks</b>
                                        <span className="green icon-redonded"> 1 </span>
                                            <MyVerticallyCenteredModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        <span className="icon-plus" onClick={() => setModalShow(true)}></span>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div  className={`nav-link ${actived[1]}`} style={{display: "flex", alignItems: "center"}} onClick={() => setNavLink('Actions')}>
                                    <b className="btext">Actions</b>
                                    <span className="green icon-redonded"> 1  </span>
                                    <a href="" className="plusGroup"></a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <div  className={`nav-link ${actived[2]}`} style={{display: "flex", alignItems: "center"}} onClick={() => setNavLink('Notes')}>
                                    <b className="btext">Notes</b>
                                    <div className="icon-redonded">
                                        <span className="green"> 1  </span>
                                    </div>
                                    <a href="" className="plusGroup"></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div  className={`nav-link ${actived[3]}`} style={{display: "flex", alignItems: "center"}} onClick={() => setNavLink('Document')}>
                                    <b className="btext">Document</b>
                                    <span className="green icon-redonded"> 1  </span>
                                    <a href="" className="plusGroup"></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div  className={`nav-link ${actived[4]}`} style={{display: "flex", alignItems: "center"}} onClick={() => setNavLink('ChangesLog')}>
                                    <b className="btext">Changes Log</b>
                                    <span className="green icon-redonded"> 1  </span>
                                    <a href="" className="plusGroup"></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {containerContent}
                </div>
            </div>
        </div>
    );
}

function MyVerticallyCenteredModal(props) {

    let today = '2020-06-02';

    const [data, setData] = useState({
        name: '',
        assignFollowUp: '',
        assignedTo: '',
        task: ''
    })
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault()
        console.log(data);
        tasks.push(data);
        console.log(tasks);
        console.log('send data...' + data.name + ' ' + data.assignFollowUp + ' ' + data.assignedTo + ' ' + data.task)
    }
    return (
        <Modal
            {...props}
            size="600px"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <form onSubmit={sendData}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5>Add New Action Group</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="newGroupAction_row1">
                        <label>New Group Action
                        </label>
                        <input type="text" name="name" onChange={handleInputChange} />
                    </div>
                    <div className="newGroupAction_row2">
                        <div className="date-data">
                            <label>Assign Follow Up</label>
                            <input type="date" id="start" name="assignFollowUp"
                                defaultValue={todayDate()} onChange={handleInputChange}
                                    // min="2018-01-01" max="2018-12-31" 
                            />
                        </div>
                        <div className="assign-data">
                            <label>Assigned To</label>
                            <select name="assignedTo" onChange={handleInputChange}>
                                <option defaultValue="name">Name #</option>
                                <option defaultValue="name">Name #</option>
                                <option defaultValue="name">Name #</option>
                                <option defaultValue="name">Name #</option>
                            </select>
                        </div>
                    </div>
                    <div className="newGroupAction_row3">
                        <label>Task
                        </label>
                        <textarea name="task" rows="4" cols="50" onChange={handleInputChange} />
                      </div>

                    {/* <ul>
                        <li>{data.name}</li>
                        <li>{data.assignFollowUp}</li>
                        <li>{data.assignedTo}</li>
                        <li>{data.task}</li>
                    </ul> */}
                </Modal.Body>
                <Modal.Footer>
                    <button className="button-save" type="submit" onClick={props.onHide}>Save</button>
                    <button className="button-close" onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </form>
        </Modal>
    );
  }

export default Finnote;
