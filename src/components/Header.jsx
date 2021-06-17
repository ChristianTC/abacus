import React from 'react';

import logo from '../assets/img/logo.png';

import '../styles/components/Header.css';
import { Dropdown } from 'react-bootstrap';


const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="/#" className="nav-a">Dashboard</a>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Finance
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Finance Notice</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Reconcilliation</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Report Recon</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        WC Audits
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Search Audit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Audit Reconcilliation</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Report Audit Reconcilliation</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <a href="/#" className="nav-a">Claims</a>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Admin
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Users</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Roles</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Financy Company</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Insurer</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Firm</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">WorkFlow</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Build</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Lookup Type</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Template Tasks</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Validations</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Email Template</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </div>
    );
}

export default Header;
