import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';

import { Link } from 'react-router-dom';

import '../styles/components/Home.css';
import '../styles/components/modal.css';


const Home = () => {

    const [modalShow, setModalShow] = useState(false);

    const [finnote, setFinnote] = useState([]);

    useEffect(() => {
        fetch(`https://apps.abacuscrm.net/api/Models/FINNOTE/1444?api_key=c606995afe964a17bc298eda26badc40c606995afe964a17bc298eda26badc40`)
        .then(response => response.json())
        .then(data => setFinnote(data))
    }, []);

    console.log('====================================');
    console.log(finnote);
    console.log('====================================');

    return (
        <div className="body-content">
            <div className="row">
                <div className="col-md-12 pad-r-0">
                    <div className="full-w d-flex align-items-center">
                        <b className="mainHeadingh">Notice</b>
                        <span className="line"></span>
                        <div className="buttonGroup">
                            <div className="col-lg-12 d-flex justify-content-between pr-0">
                                <button className="btn btn-sm btn-success" onClick={() => setModalShow(true)}>Add Contract</button>
                                <AddContractModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row row-space-10">
                        <div className="col-md-12 my-4">
                            <div className="noticetable table-100">
                                <div className="row">
                                    <div className="col-md-12">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="x-noticetable" style={{width: "100%"}}>
                    <table className="table table-bordered h-auto over-flow" style={{width: "100%", maxHeight: "3000px"}}>
                        <thead>
                            <tr>
                                <th className="table-th"> Finnote ID </th>
                                <th className="table-th"> Created </th>
                                <th className="table-th"> Quote No </th>
                                <th className="table-th"> Insured Name </th>
                                <th className="table-th"> Firm </th>
                                <th className="table-th"> Finance Company </th>
                                <th className="table-th"> Contract No </th>
                                <th className="table-th"> Status </th>
                                <th className="table-th"> Follow up date </th>
                                <th className="table-th"> Assigned To </th>
                                <th className="table-th"> Action </th>
                            </tr>
                        </thead>
                        <tbody className="h-auto sml-table-scroll-y" id="y-noticetable" style={{maxHeight: "3000px"}}>
                            <tr id="tr-noticetable-0">
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">{finnote.FinnoteId}</span>
                                </td>
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">{finnote.CreatedDate}</span>
                                </td>
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">{finnote.QuoteNo}</span>
                                </td>
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">{finnote.InsuredName}</span>
                                </td>
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">{finnote.BrokerName}</span>
                                </td>
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">{finnote.FinancialName}</span>
                                </td>
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">{finnote.FinanceContractNo}</span>
                                </td>
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">{finnote.LastNotes} from Finance Company</span>
                                </td>
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">{finnote.FollowUpDate}</span>
                                </td>
                                <td className="breakWord td_over table-td">
                                    <span className="table-td__span">Darren Lewin</span>
                                </td>
                                <td className="breakWord table-td">
                                    <span>
                                        <Link to="/build/6192/finnote/details/1444" className="btn-group dropdown">
                                            <div id="idComponent" className="DropdownButton"> View </div>
                                            <span className="caret DropdownButtonSpan dropdown-toggle"></span>
                                        </Link>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );



    function AddContractModal(props) {
        
        return (
            <Modal
                {...props}
                size="600px"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className="showPopup">
                    <div className="myContainer">
                        <div className="centerData">
                            <div className="wizard my-4">
                                <div className="sliderarea">
                                    <ul className="slide">
                                        <li className="slideList slideBg">
                                            <span className="RoundCircle">
                                                Step 1
                                            </span>
                                            <span className="contentLabel">
                                                Client/Quote
                                            </span>
                                        </li>
                                        <li className="slideList">
                                            <span className="RoundCircle">
                                                Step 2
                                            </span>
                                            <span className="contentLabel">
                                                Premium
                                            </span>
                                        </li>
                                        <li className="slideList">
                                            <span className="RoundCircle">
                                                Step 3
                                            </span>
                                            <span className="contentLabel">
                                                Documents
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="auditContent">
                                    Financial Details
                                    <span>Step 1/3</span>
                                </div>
                                <div className="componentArea pt-0">
                                    <div className="w-100 heightBody">
                                        <div className="row">
                                            <div className="col-md-4 myCol">
                                                <input type="text" className="sml-input" />
                                                <div className="position-relative">
                                                    <div className="input-field float-group">
                                                        <div className="checkbox">
                                                            <input type="text" className="ng-untouched ng-pristine ng-valid" />
                                                            <label htmlFor="" className="label1"></label>
                                                            <div className="vlabel" style={{ fontFamily: "Verdana", fontSize: "13px", fontWeight: "normal", color: "rgb(51, 51, 51)", margin: "-3px 0px 0px -2px", background: "transparent" }}>
                                                                Trade & Industries
                                                            </div>
                                                        </div>
                                                        <label htmlFor="" className="label" style={{fontFamily: "sans-serif", fontSize: "10px", fontWeight: "bold", color: "rgb(106, 161, 56)", marginLeft: "4px" }}></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Home;
