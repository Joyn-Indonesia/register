import React, { useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/JoynRideHeader.js";
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

function JoynRide() {
  useEffect(() => {
    document.title = "Joyn Ride"
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
                <img alt="" src="https://lelogama.go-jek.com/cache/fd/08/fd08d4917c19cd5130c5f5f523740daf.webp" className="img-rounded img-responsive mx-auto"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-right">
                <h2 style={{"fontWeight": "bold", "fontSize": "xx-large"}}>Your SAFETY with Joyn-Ride is ensured, not to mention your CONVENIENCE</h2>
                <img alt="" src="https://lelogama.go-jek.com/cache/fd/08/fd08d4917c19cd5130c5f5f523740daf.webp" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                <h5 style={{"fontWeight": "500"}} className="mt-2 text-justify mt-3">Your safety and comfort are of utmost importance to us and our driver-partners. We have in-app features such as Share Trip and Emergency Button, along with Insurance to guarantee your protection.</h5>
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
                <img alt="" src="https://lelogama.go-jek.com/cache/1c/8e/1c8e0a81fc28220d0fc6bce538ef44bb.webp" className="img-rounded img-responsive"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-left">
                <h2 style={{"fontWeight": "bold", "fontSize": "xx-large"}}>Worry not; our driver WILL be there for you</h2>
                <img alt="" src="https://lelogama.go-jek.com/cache/1c/8e/1c8e0a81fc28220d0fc6bce538ef44bb.webp" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                <h5 style={{"fontWeight": "500"}} className="mt-2 text-justify mt-3">We have more than 2 million driver-partners in 203 cities and districts in Indonesia. Whenever, wherever, go ahead and order.</h5>
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
                <img alt="" src="https://lelogama.go-jek.com/cache/14/79/1479a04b892354113ea97aff4520f0ff.webp" className="img-rounded img-responsive mx-auto"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-right">
                <h2 style={{"fontWeight": "bold", "fontSize": "xx-large"}}>Smooth and easy pickup experience</h2>
                <img alt="" src="https://lelogama.go-jek.com/cache/14/79/1479a04b892354113ea97aff4520f0ff.webp" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                <h5 style={{"fontWeight": "500"}} className="mt-2 text-justify mt-3">The process made easy from beginning to end. From ordering a ride, in-app chatting, and to finally meeting your driver.</h5>
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
                        <Link to="/joynride/daftar" className="btn btn-round px-5 btn-outline-neutral" style={{"borderWidth": "thin"}}>Daftar</Link>
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

  export default JoynRide;
