/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  // Modal,
  // ModalBody,
  // Card,
  // CardImg,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fade
} from "reactstrap";
import Cookies from 'universal-cookie';
import { Style } from 'radium';
import {
  Link
} from "react-router-dom";

const cookies = new Cookies();

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [fadeIn, setFadeIn] = React.useState(false);
  const toggle = () => setFadeIn(!fadeIn);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  // const [modal, setModal] = useState(false);
  //
  // const toggle = () => setModal(!modal);

  function logout(event) {
    event.preventDefault();
    cookies.remove("isAuth", {path: "/"})
    cookies.remove("user", {path: "/"})
    window.location.assign("/");
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
    <Style
      scopeSelector=".modal-content"
      rules={{
        background: "transparent",
      }}
      />
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
            <Link to="/" className="navbar-brand">Home</Link>
          <button aria-expanded={navbarCollapse} className={classnames("navbar-toggler navbar-toggler", { toggled: navbarCollapse })} onClick={toggleNavbarCollapse}>
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        {
          cookies.get("isAuth") &&
          <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
            <Nav navbar>
              <NavItem>
                <NavLink href="dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="logout" onClick={(e) => logout(e)}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        }
        {
          !cookies.get("isAuth") &&
          <>
          <Collapse className="justify-content-between" navbar isOpen={navbarCollapse}>
            <Nav navbar>
              <NavItem>
                <NavLink onClick={toggle} href="#" className="dropdown-toggle nav-link d-none d-lg-block">Layanan Kami</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="d-lg-none">
                <DropdownToggle nav caret>
                  Layanan Kami
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="pr-lg-3 text-lg-center" header>
                    Transport & Logistics
                  </DropdownItem>
                  <DropdownItem className="pl-4 text-lg-center">
                    <Link to="/joynride" className="p-0 dropdown-menu dropdown-item">Joyn Ride</Link>
                  </DropdownItem>
                  <DropdownItem className="pl-4 text-lg-center">
                    <Link to="/joyncar" className="p-0 dropdown-menu dropdown-item">Joyn Car</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownItem className="pr-lg-3 text-lg-center" header>
                    Food
                  </DropdownItem>
                  <DropdownItem className="pl-4 text-lg-center">
                    <Link to="/joynrestaurant" className="p-0 dropdown-menu dropdown-item">Joyn Restaurant</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Daftar Sekarang
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="pr-lg-3 text-lg-center">
                    <Link to="/joynride/daftar" className="p-0 dropdown-item" style={{color: "unset"}}>Joyn Ride</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="pr-lg-3 text-lg-center">
                    <Link to="/joyncar/daftar" className="p-0 dropdown-item" style={{color: "unset"}}>Joyn Car</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="pr-lg-3 text-lg-center">
                    <Link to="/joynrestaurant/daftar" className="p-0 dropdown-item" style={{color: "unset"}}>Joyn Restaurant</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          </>
      }
    </Container>
    <Fade in={fadeIn} className={ fadeIn ? "w-100 bg-white d-none d-lg-block" : "w-100 bg-white d-none" } style={{ position: 'absolute', top: '90%', height: "80vh", overflowY: "auto"}}>
      <Container className="my-4">
        <Row>
          <Col lg={6}>
            <Col lg={12}>
              <h3 style={{fontWeight: "500"}}>Transport & Logistics</h3>
              <hr style={{borderColor: "#6a655f", borderWidth: "medium"}}/>
              <Col lg={12}>
                <Row className="align-items-center d-flex">
                  <p className="mx-2 my-auto" style={{fontWeight: "500", fontSize: "larger"}}><Link to="/joynride" style={{color: "inherit", fontWeight: "initial"}}>Joyn Ride</Link></p>
                </Row>
              </Col>
              <Col lg={12} className="mt-3">
                <Row className="align-items-center d-flex">
                  <p className="mx-2 my-auto" style={{fontWeight: "500", fontSize: "larger"}}><Link to="/joyncar" style={{color: "inherit", fontWeight: "initial"}}>Joyn Car</Link></p>
                </Row>
              </Col>
            </Col>
          </Col>
          <Col lg={6}>
            <Col lg={12}>
              <h3 style={{fontWeight: "500"}}>Food</h3>
              <hr style={{borderColor: "#6a655f", borderWidth: "medium"}}/>
              <Col lg={12}>
                <Row className="align-items-center d-flex">
                  <p className="mx-2 my-auto" style={{fontWeight: "500", fontSize: "larger"}}><Link to="/joynrestaurant" style={{color: "inherit", fontWeight: "initial"}}>Joyn Restaurant</Link></p>
                </Row>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </Fade>
  </Navbar>
  </>
);
}

export default IndexNavbar;
