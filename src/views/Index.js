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

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import {
  Row,
  Container,
  Col,
  Button
} from "reactstrap"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import 'react-web-tabs/dist/react-web-tabs.css';
import { Style } from 'radium';
import DemoFooter from "components/Footers/DemoFooter.js";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'assets/css/accordion.css';

// index sections
// import SectionButtons from "views/index-sections/SectionButtons.js";
// import SectionNavbars from "views/index-sections/SectionNavbars.js";
// import SectionNavigation from "views/index-sections/SectionNavigation.js";
// import SectionProgress from "views/index-sections/SectionProgress.js";
// import SectionNotifications from "views/index-sections/SectionNotifications.js";
// import SectionTypography from "views/index-sections/SectionTypography.js";
// import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
// import SectionCarousel from "views/index-sections/SectionCarousel.js";
// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
// import SectionDark from "views/index-sections/SectionDark.js";
// import SectionLogin from "views/index-sections/SectionLogin.js";
// import SectionExamples from "views/index-sections/SectionExamples.js";
// import SectionDownload from "views/index-sections/SectionDownload.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  })
  return (
    <>
    <Style
      scopeSelector=".rwt__tab[aria-selected='true']"
      rules={{
        background: "#1DA92F",
        padding: "1rem 2rem",
        transition: "background 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)",
        p: {
          color: "#FFFFFF",
          fontFamily: "inherit",
          fontWeight: "500",
        },
      }}
      />
    <IndexNavbar />
    <IndexHeader />
    <div className="main">
      <div className="section pb-0">
        <Container>
          <Row>
            <div className="clearfix">
              <Col lg="6" md="12" className="pull-left d-none d-lg-block">
                <img alt="" src={require('assets/img/smartphone-location-lg-navigation-preview.jpg')} className="img-rounded img-responsive mx-auto"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-right">
                <h2 style={{"fontWeight" : "500"}}>A better way to move</h2>
                <img alt="" src={require('assets/img/smartphone-location-lg-navigation-preview.jpg')} className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                <h5 className="text-justify mt-3" style={{"fontWeight": "500"}}>Whether you’re looking to get across town, or earning on the road, we’ve got you.</h5>
                <Col className="mt-3">
                  <Row>
                    <Col md="12" lg="6">
                      <Button outline color="info" className="btn-round col-12" size="lg">Ride with Joyn-FO</Button>
                    </Col>
                    <Col md="12 mt-3 mt-lg-0" lg="6 d-block">
                      <Button outline color="info" className="btn-round col-12" size="lg">Drive with Joyn-FO</Button>
                    </Col>
                  </Row>
                </Col>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <div className="section pb-0">
        <Container>
          <Col lg="12 text-center"><h1 style={{"fontWeight": "500"}}>How to Use Joyn-FO</h1></Col>
          <Row className="mt-3 d-lg-none">
            <Accordion className="col-12" preExpanded={[0]} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Select your destination
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p style={{"fontWeight": "500"}} className="text-center">
                    Tell us where you’re going, and where to pick you up
                  </p>
                  <Container className="text-center">
                    <img alt="" src="https://lelogama.go-jek.com/cache/05/1e/051e6e8790a5aa17fa1ef65c2b8a1ff0.webp" className="img-fluid"/>
                  </Container>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Book a ride
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p style={{"fontWeight": "500"}} className="text-center">
                    See your cost up-front and order a GoCar when you’re ready
                  </p>
                  <Container className="text-center">
                    <img alt="" src="https://lelogama.go-jek.com/cache/18/f2/18f2617f93a748d5661f4686d85d0da7.webp" className="img-fluid"/>
                  </Container>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Pay in app
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p style={{"fontWeight": "500"}} className="text-center">
                    Choose to pay via card, cash, and even DBS PayLah!
                  </p>
                  <Container className="text-center">
                    <img alt="" src="https://lelogama.go-jek.com/cache/9e/0a/9e0a839ccbabaaa88c1e1b2df73f94fa.webp" className="img-fluid"/>
                  </Container>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Enjoy the ride
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p style={{"fontWeight": "500"}} className="text-center">
                    Get ready as our driver-partner makes their way to you
                  </p>
                  <Container className="text-center">
                    <img alt="" src="https://lelogama.go-jek.com/cache/73/c3/73c31b4751f48d56d913aac241aeb860.webp" className="img-fluid"/>
                  </Container>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            </Row>
            <Row className="mt-3 d-none d-lg-block" style={{"overflowX": "auto"}}>
              <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs col-12">
                <Col lg="6" md="12">
                  <TabList>
                    <Tab tabFor="vertical-tab-one">
                      <Row>
                        <div className="col-lg-1 col-md-12 my-auto"><p>1</p></div>
                        <div className="col-lg-11 col-md-12 text-left my-auto">
                          <div lg="12"><p style={{fontSize: "20px"}}>Select your destination</p></div>
                          <div lg="12"><p>Tell us where you’re going, and where to pick you up</p></div>
                        </div>
                      </Row>
                    </Tab>
                    <Tab tabFor="vertical-tab-two">
                      <Row>
                        <div className="col-lg-1 col-md-12 my-auto"><p>2</p></div>
                        <div className="col-lg-11 col-md-12 text-left my-auto">
                          <div lg="12"><p style={{fontSize: "20px"}}>Book a ride</p></div>
                          <div lg="12"><p>See your cost up-front and order a GoCar when you’re ready</p></div>
                        </div>
                      </Row>
                    </Tab>
                    <Tab tabFor="vertical-tab-three">
                      <Row>
                        <div className="col-lg-1 col-md-12 my-auto"><p>3</p></div>
                        <div className="col-lg-11 col-md-12 text-left my-auto">
                          <div lg="12"><p style={{fontSize: "20px"}}>Pay in app</p></div>
                          <div lg="12"><p>Choose to pay via card, cash, and even DBS PayLah!</p></div>
                        </div>
                      </Row>
                    </Tab>
                    <Tab tabFor="vertical-tab-four">
                      <Row>
                        <div className="col-lg-1 col-md-12 my-auto"><p>4</p></div>
                        <div className="col-lg-11 col-md-12 text-left my-auto">
                          <div lg="12"><p style={{fontSize: "20px"}}>Enjoy the ride</p></div>
                          <div lg="12"><p>Get ready as our driver-partner makes their way to you</p></div>
                        </div>
                      </Row>
                    </Tab>
                  </TabList>
                </Col>
                <Col lg="6" md="12">
                  <TabPanel tabId="vertical-tab-one">
                    <Container className="text-center">
                      <img alt="" src="https://lelogama.go-jek.com/cache/05/1e/051e6e8790a5aa17fa1ef65c2b8a1ff0.webp" style={{"borderRadius": "12px", "transition": "opacity 0.5s ease 0s", "height" : "450px"}}/>
                    </Container>
                  </TabPanel>
                  <TabPanel tabId="vertical-tab-two">
                    <Container className="text-center">
                      <img alt="" src="https://lelogama.go-jek.com/cache/18/f2/18f2617f93a748d5661f4686d85d0da7.webp" style={{"borderRadius": "12px", "transition": "opacity 0.5s ease 0s", "height" : "450px"}}/>
                    </Container>
                  </TabPanel>
                  <TabPanel tabId="vertical-tab-three">
                    <Container className="text-center">
                      <img alt="" src="https://lelogama.go-jek.com/cache/9e/0a/9e0a839ccbabaaa88c1e1b2df73f94fa.webp" style={{"borderRadius": "12px", "transition": "opacity 0.5s ease 0s", "height" : "450px"}}/>
                    </Container>
                  </TabPanel>
                  <TabPanel tabId="vertical-tab-four">
                    <Container className="text-center">
                      <img alt="" src="https://lelogama.go-jek.com/cache/73/c3/73c31b4751f48d56d913aac241aeb860.webp" style={{"borderRadius": "12px", "transition": "opacity 0.5s ease 0s", "height" : "450px"}}/>
                    </Container>
                  </TabPanel>
                </Col>
              </Tabs>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row>
              <div className="clearfix">
                <Col lg="6" md="12" className="pull-left d-none d-lg-block">
                  <img alt="" src="https://lelogama.go-jek.com/cache/f3/f4/f3f4486db03c2659c45116e6915073d5.webp" className="img-rounded img-responsive mx-auto"/>
                </Col>
                <Col lg="6 mx-auto" md="12" className="pull-right">
                  <h2 style={{"fontWeight" : "500"}}>We’re not just a tech company</h2>
                    <img alt="" src="https://lelogama.go-jek.com/cache/f3/f4/f3f4486db03c2659c45116e6915073d5.webp" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                  <h5 className="text-justify mt-3" style={{"fontWeight": "500"}}>We’re also a nifty not-so-little Super App that offers over 20 on-demand services across more than 200 cities in Southeast Asia. Gojek has come a long way, but we’re just getting started here in Singapore.</h5>
                  <h5 className="text-justify" style={{"fontWeight": "500"}}>Now that you know a little about us, and now that we’re here, how about experiencing it for yourself?</h5>
                  <div className="text-center">
                    <Button outline color="info" className="btn-round mt-2" size="lg">Find out more</Button>
                  </div>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
        <DemoFooter />
        {/*<SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />*/}
      </div>
      </>
  );
}

export default Index;
