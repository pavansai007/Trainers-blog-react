import React, { Component } from 'react';
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { FaWalking } from "@react-icons/all-files/fa/FaWalking";
import { FaChartLine } from "@react-icons/all-files/fa/FaChartLine";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaCaretSquareDown } from "@react-icons/all-files/fa/FaCaretSquareDown";
import { FaQuestionCircle } from "@react-icons/all-files/fa/FaQuestionCircle";
import { FaTable } from "@react-icons/all-files/fa/FaTable";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { FaPenSquare } from "@react-icons/all-files/fa/FaPenSquare";


export class Navb extends Component {
  render() {
    return (
      <div>
        <Navbar id="full" collapseOnSelect expand="lg" >
        <Navbar.Brand id="brand" href="#"><img src="images\logo.png" alt="log"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#"><i className="fa fa-home"></i> Home</Nav.Link>
            <Nav.Link className="active" href="#"><FaWalking/> Traines</Nav.Link>
            <Nav.Link href="#"><i className="fa fa-users"></i> Boot Camp</Nav.Link>
            <Nav.Link href="#"><FaChartLine/> Fitness-Tools</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item  href="#"><FaUserAlt/> My Account</NavDropdown.Item>
                <NavDropdown.Item  href="#"><i class="fa fa-money" aria-hidden="true"></i> My Purchases</NavDropdown.Item>
                <NavDropdown.Item  href="#"><FaCaretSquareDown/> About Yoboshu</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  href="#"><FaQuestionCircle/> Frequently Asked Questions</NavDropdown.Item>
                <NavDropdown.Item  href="#"><FaTable/> Privacy Policy</NavDropdown.Item>
                <NavDropdown.Item  href="#"><FaPhoneSquareAlt/> Contact Us</NavDropdown.Item>
                <NavDropdown.Item  href="#"><FaPenSquare/> Rate Yoboshu On Google Play</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav id="side">
           
            <Nav.Link eventKey={2} href="#"><i class="fa fa-sign-in" aria-hidden="true"></i> login
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navb
