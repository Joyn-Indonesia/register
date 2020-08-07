import React, { useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/JoynCarHeader.js";
import {
  Row,
  Container,
  Col,
} from "reactstrap"
import DemoFooter from "components/Footers/DemoFooter.js";
import {
  Link
} from "react-router-dom";

const overlay = {
  background: "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('"  + require('assets/img/kylie-paz-aml-5TDo2_k-unsplash.jpg') +  "')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  color: "#fff",
  height: "450px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
}

function JoynCar() {
  useEffect(() => {
    document.title = "Joyn Car"
  }, []);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  })
  return (
    <>
    <IndexNavbar />
    <IndexHeader />
    <div className="main">
      <div className="section pb-0">
        <Container>
          <Row>
            <div className="clearfix">
              <Col lg="6" md="12" className="pull-left d-none d-lg-block">
                <img alt="" src="https://lelogama.go-jek.com/cache/9f/08/9f083a8486d116fe3e38725adc66b104.webp" className="img-rounded img-responsive mx-auto"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-right">
                <h2 style={{"fontWeight": "bold", "fontSize": "xx-large"}}>From comfort to safety, GoCar got your back</h2>
                <img alt="" src="https://lelogama.go-jek.com/cache/9f/08/9f083a8486d116fe3e38725adc66b104.webp" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                <h5 style={{"fontWeight": "500"}} className="mt-2 text-justify mt-3">Your safety and comfort are of utmost importance to us and our driver-partners. We have in-app features such as Share Trip and Emergency Button to protect you, along with Insurance to guarantee your protection.</h5>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <div className="section pb-0">
        <Container>
          <Row>
            <div className="clearfix">
              <Col lg="6" md="12" className="pull-right d-none d-lg-block">
                <img alt="" src="https://lelogama.go-jek.com/cache/24/07/2407d73241b73df2452b96892922c6c9.webp" className="img-rounded img-responsive"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-left">
                <h2 style={{"fontWeight": "bold", "fontSize": "xx-large"}}>Flexibility</h2>
                <img alt="" src="https://lelogama.go-jek.com/cache/24/07/2407d73241b73df2452b96892922c6c9.webp" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
              <h5 style={{"fontWeight": "500"}} className="mt-2 text-justify mt-3">Sudden change of plans? You can edit your destination during your ride. Traveling in large groups? GoCar L can fit up to 6 people (available in 15 cities).</h5>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <div className="section pb-0">
        <Container>
          <Row>
            <div className="clearfix">
              <Col lg="6" md="12" className="pull-left d-none d-lg-block">
                <img alt="" src="https://lelogama.go-jek.com/cache/0e/fd/0efd9856a258301217e23da48aa1b626.webp" className="img-rounded img-responsive mx-auto"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-right">
                <h2 style={{"fontWeight": "bold", "fontSize": "xx-large"}}>Smooth and easy pickup</h2>
                <img alt="" src="https://lelogama.go-jek.com/cache/0e/fd/0efd9856a258301217e23da48aa1b626.webp" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                <h5 style={{"fontWeight": "500"}} className="mt-2 text-justify mt-3">We have built-in features that allow you to choose your pickup location and chat your driver in-app, to help you meet your driver easily.</h5>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <Row>
              <Col lg="12">
                <div className="text-center">
                  <div style={overlay}>
                    <Container>
                      <h1 style={{"fontWeight": "500"}}>Be a Driver-Partner</h1>
                      <h5>Join us and transform each kilometer into your income.</h5>
                      <Row className="col-lg-6 col-md-12 mx-auto mt-3">
                        <Col>
                          <Link to="/joyncar/daftar" className="btn btn-round px-5 btn-outline-neutral" style={{"borderWidth": "thin"}}>Daftar</Link>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </div>
    </>);
}

export default JoynCar;
