import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import "config.js"
import qs from 'qs'
import {
  Button,
  Form,
  Input,
  Container,
  Row,
  Col,
  ButtonGroup,
  FormGroup,
  Label,
  Alert
} from "reactstrap";
import Timer from 'react-compound-timer'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Masuk() {
  const [driver_phone, setdriver_phone] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [classAlert, setClassAlert] = useState('');
  const [messageAlert, setMessageAlert] = useState(null);
  const dismissAlert = () => setShowAlert(false);
  const [waitingTime, setWaitingTime] = useState(null);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register");
    return function cleanup() {
      document.body.classList.remove("register");
    };
  });

  if (cookies.get("codeverification") && ((new Date(cookies.get("codeverification")) - new Date()) / 1000) > 0) {
    window.location.assign("/verifikasikode");
  }

  if (cookies.get("isAuth")) {
  window.location.assign("/dashboard");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const requestBody = {
      driver_phone: driver_phone,
    }

    fetch(global.app_url + '/v1/fo/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'service': 'api-fo',
        'client_key': 'JoynFOWEB@2020'
      },
      body: qs.stringify({
        data: JSON.stringify(requestBody)
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      var result = responseData.joyn_response;
      if (!result.success) {
        if(result.result.detail.waiting_time) {
          setWaitingTime(result.result.detail.waiting_time)
          setMessageAlert(null)
          setShowAlert(true)
          setClassAlert("danger")
        }
        else {
          setWaitingTime(null)
          setMessageAlert(result.message)
          setShowAlert(true)
          setClassAlert("danger")
        }
      }
      else {
        let d = new Date();
        d.setTime(d.getTime() + (15 * 60 * 1000));
        cookies.set('codeverification', d, { path: '/', expires: d });
        cookies.set("driver_phone", driver_phone, {path: "/", expires: d})
        window.location.assign("/verifikasikode");
      }
    })
    .catch((error) => {
      console.log('error: ' + error);
      setMessageAlert("Something wrong happened!!! Please try again a few minute later...")
      setShowAlert("true")
      setClassAlert("danger")
    });
  }
  return (
    <>
    <IndexNavbar />
    <div
      className="page-header section-dark"
      style={{
        backgroundImage:
        "url(" + require("assets/img/login-image.jpg") + ")"
      }}
      >
      <div className="filter" />
      <div className="content-center">
        <Container>
          <div className="title-brand">
            <h1 className="presentation-title">Joyn-FO</h1>
            <div className="fog-low">
              <img alt="..." src={require("assets/img/fog-low.png")} />
            </div>
            <div className="fog-low right">
              <img alt="..." src={require("assets/img/fog-low.png")} />
            </div>
          </div>
        </Container>
      </div>
      <div
        className="moving-clouds"
        style={{
          backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
        }}
        />
    </div>
    <div className="section section-dark" style={{backgroundColor: "#f8f8f8"}}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <ButtonGroup size="lg">
              <Button color="info">Masuk</Button>
              <Button color="secondary" href="/daftar">Daftar</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="main">
      <div className="section text-center" style={{"backgroundColor": "#f8f8f8", "paddingTop": "0px"}}>
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                {
                  showAlert && messageAlert &&
                  <Alert isOpen={showAlert} color={classAlert} className="col-12 mt-4 text-center" toggle={dismissAlert}>
                    <b>{messageAlert}</b>
                  </Alert>
                }
                {
                  showAlert && waitingTime &&
                  <Alert isOpen={showAlert} color={classAlert} className="col-12 mt-4 text-center" toggle={dismissAlert}>
                    <b>
                      <Timer
                        initialTime={waitingTime * 1000}
                        direction="backward"
                        checkpoints={[
                          {
                            time: 0,
                            callback: () => {
                              setShowAlert(false)
                            }
                          },
                        ]}
                        >
                        {() => (
                          <React.Fragment>
                            Mohon tunggu <Timer.Minutes /> menit <Timer.Seconds /> detik
                          </React.Fragment>
                        )}
                      </Timer>
                    </b>
                  </Alert>
                }
              </Col>
            </Row>
            <br />
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Form onSubmit={e => {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label><h3>NOMOR HP YANG TERDAFTAR</h3></Label>
                      <Input type="number" placeholder="Contoh: 081xxxxxxxxx" id="driver_phone" name="driver_phone" onChange={e => setdriver_phone(e.target.value)} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Col className="text-center mt-4">
                  <Button color="info" type="submit" size="lg" className="pl-4 pr-4">
                    MASUK
                  </Button>
                </Col>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </div>
  </>);
}

export default Masuk;
