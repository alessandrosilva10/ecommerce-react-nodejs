import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { faTshirt, faRing, faShoePrints, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
        <div style={{borderRadius: "25px", backgroundColor: "white"}}>
      <MDBNavbar color="default-color" dark expand="md">
        {/*<MDBNavbarBrand>
          <strong className="white-text">Ofertas</strong>
        </MDBNavbarBrand>*/}
            
        <MDBDropdown>
        <MDBDropdownToggle nav caret>
            <div style={{color: "#8898aa"}} className="d-none d-md-inline"><FontAwesomeIcon icon={faDollarSign} /> Ofertas</div>
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
        </MDBDropdown>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink style={{color: "#8898aa"}} to="#!"><FontAwesomeIcon icon={faTshirt} /> Roupa Masculina</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink style={{color: "#8898aa"}}  to="#!"><FontAwesomeIcon icon={faTshirt} /> Roupa Feminina</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink style={{color: "#8898aa"}}  to="#!"><FontAwesomeIcon icon={faShoePrints} /> Sapato Masculino</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink style={{color: "#8898aa"}}  to="#!"><FontAwesomeIcon icon={faShoePrints} /> Sapato Feminino</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon style={{color: "darkblue"}} fab icon="facebook" />
              </MDBNavLink>
            </MDBNavItem>
          <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon style={{color: "brown"}} fab icon="instagram" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon style={{color: "#00ffff"}} fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon style={{color: "#ff3333"}} fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar></div>
    </Router>
    );
  }
}

export default NavbarPage;