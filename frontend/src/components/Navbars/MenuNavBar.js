import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import { faTshirt, faRing, faShoePrints } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class MenuNavBar extends React.Component {
  render() {
    return (
      <>
        {/* Navbar info */}
        <Navbar
          className="navbar-horizontal"
          expand="lg"
        >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
             
            </NavbarBrand>
            <button
              aria-controls="navbar-info"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-info"
              data-toggle="collapse"
              id="navbar-info"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-info">
              <div className="navbar-collapse-header">
                <Row >
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/blue.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-info"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-info"
                      data-toggle="collapse"
                      id="navbar-info"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <FontAwesomeIcon icon={faTshirt} />
                    <span className="nav-link-inner--text">Roupa Masculina</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                <FontAwesomeIcon icon={faTshirt} />
                    <span className="nav-link-inner--text">Roupa Feminina</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <FontAwesomeIcon icon={faRing} />
                    <span className="nav-link-inner--text">Joia</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <FontAwesomeIcon icon={faShoePrints} />
                    <span className="nav-link-inner--text">Calçado</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default MenuNavBar;