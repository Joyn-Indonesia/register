import React, { useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/JoynRestaurantHeader.js";
import {
  Row,
  Container,
  Col,
} from "reactstrap"
import DemoFooter from "components/Footers/DemoFooter.js";
import Carousel from 'react-multi-carousel';
import 'assets/css/react-multi-carousel.css';
import {
  Link
} from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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

function JoynRestaurant() {
  useEffect(() => {
    document.title = "Joyn Restaurant"
  }, []);
  document.documentElement.classList.remove("nav-open");
  // document.getElementsByClassName("react-multiple-carousel__arrow")
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
            <Col lg={12} className="text-center">
              <h1 style={{"fontWeight": "bold"}}>Why Joyn Restaurant?</h1>
            </Col>
            <div className="mt-5 col-12">
              <Row>
                <Col lg={3} className="text-center mb-5 mb-lg-0">
                  <Col>
                    <img src="https://lelogama.go-jek.com/component/factsheet/icon/PBP_Icon_1_.png" style={{height: "96px", width: "auto"}} alt=""/>
                  </Col>
                  <Col>
                    <h3 className="my-3" style={{"fontWeight": "bold"}}>
                      Reach more customers
                    </h3>
                  </Col>
                  <Col>
                    <p style={{fontWeight: 500}}>Get better visibility on the app. We have >155 million Gojek users!</p>
                  </Col>
                </Col>
                <Col lg={3} className="text-center mb-5 mb-lg-0">
                  <Col>
                    <img src="https://lelogama.go-jek.com/component/factsheet/icon/PBP_Icon_12.png" style={{height: "96px", width: "auto"}} alt=""/>
                  </Col>
                  <Col>
                    <h3 className="my-3" style={{"fontWeight": "bold"}}>
                      Manage your restaurant easily
                    </h3>
                  </Col>
                  <Col>
                    <p style={{fontWeight: 500}}>With GoBiz, you can control your restaurants’ daily operations in real-time, right from your fingertips</p>
                  </Col>
                </Col>
                <Col lg={3} className="text-center mb-5 mb-lg-0">
                  <Col>
                    <img src="https://lelogama.go-jek.com/component/factsheet/icon/PBP_Icon_3.png" style={{height: "96px", width: "auto"}} alt=""/>
                  </Col>
                  <Col>
                    <h3 className="my-3" style={{"fontWeight": "bold"}}>
                      Increase your orders by 3.5x
                    </h3>
                  </Col>
                  <Col>
                    <p style={{fontWeight: 500}}>Make promotions easily and get the chance to join special GoFood promos</p>
                  </Col>
                </Col>
                <Col lg={3} className="text-center mb-5 mb-lg-0">
                  <Col>
                    <img src="https://lelogama.go-jek.com/component/factsheet/icon/PBP_Icon_14.png" style={{height: "96px", width: "auto"}} alt=""/>
                  </Col>
                  <Col>
                    <h3 className="my-3" style={{"fontWeight": "bold"}}>
                      Run your transactions accurately and safely
                    </h3>
                  </Col>
                  <Col>
                    <p style={{fontWeight: 500}}>Say bye to fraud and potential mistakes in your orders with GoPay and GoBiz!</p>
                  </Col>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
      <div className="section pb-0">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 style={{"fontWeight": "bold"}}>What do you need to register?</h1>
            </Col>
            <div className="mt-5 col-12">
              <Row>
                <Col lg={12}>
                  <h5 style={{"fontWeight": "500"}} className="text-center">Ready to sign up? Make sure to prepare these 3 things before you fill in the registration form!</h5>
                </Col>
                <Col lg={12} className="text-center mb-5 mb-lg-0 mt-3">
                  <Carousel responsive={responsive}>
                    <div>
                      <Col>
                        <img src="https://lelogama.go-jek.com/cache/bd/90/bd9042d585f02eff5f78e9906423f2ae.webp" className="img-rounded" alt=""/>
                      </Col>
                      <Col>
                        <h5 className="my-3" style={{"fontWeight": "bold"}}>
                          Outlet owner's ID Card
                        </h5>
                      </Col>
                    </div>
                    <div>
                      <Col>
                        <img src="https://lelogama.go-jek.com/cache/a0/54/a05428f28051929238d7cb7ed84baff7.webp" className="img-rounded" alt=""/>
                      </Col>
                      <Col>
                        <h5 className="my-3" style={{"fontWeight": "bold"}}>
                          Outlet owner's NPWP
                        </h5>
                      </Col>
                    </div>
                    <div>
                      <Col>
                        <img src="https://lelogama.go-jek.com/cache/62/1c/621cb51a97e6b2fddc9a34f5b02d8cd7.webp" className="img-rounded" alt=""/>
                      </Col>
                      <Col>
                        <h5 className="my-3" style={{"fontWeight": "bold"}}>
                          Photocopy of the first page of outle owner's bank passbook
                        </h5>
                      </Col>
                    </div>
                  </Carousel>;
                </Col>
              </Row>
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
                    <h1 style={{"fontWeight": "500"}}>Be a Joyn-Partner</h1>
                    <h5>Join us and transform each kilometer into your income.</h5>
                    <Row className="col-lg-6 col-md-12 mx-auto mt-3">
                      <Col>
                        <Link to="/joynrestaurant/daftar" className="btn btn-round px-5 btn-outline-neutral" style={{"borderWidth": "thin"}}>Daftar</Link>
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

  export default JoynRestaurant;
