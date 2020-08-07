import React, { useState } from "react";
import IndexNavbarVerification from "components/Navbars/IndexNavbarVerification.js";
import "config.js"
import qs from 'qs'
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Alert
} from "reactstrap";
import Timer from 'react-compound-timer'
import Cookies from 'universal-cookie';
import VerificationInput from 'react-verification-input'
import 'assets/css/codeverification.css';

const cookies = new Cookies();

function VerifikasiKode() {
  const [showAlert, setShowAlert] = useState(false);
  const [classAlert, setClassAlert] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const dismissAlert = () => setShowAlert(false);
  const [codeVerification, setCodeVerification] = useState('');

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register");
    return function cleanup() {
      document.body.classList.remove("register");
    };
  });

  if (cookies.get("codeverification") == null) {
    cookies.remove("codeverification", {path: "/"});
    cookies.remove("driver_phone", {path: "/"});
    window.location.assign("/masuk");
  }

  if (cookies.get("isAuth")) {
  window.location.assign("/dashboard");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const requestBody = {
      code: codeVerification,
      driver_phone: cookies.get("driver_phone"),
    }

    fetch(global.app_url + '/v1/fo/code_verification', {
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
      setMessageAlert(result.message)
        setClassAlert("danger")
        setShowAlert(true)
      }
      else {
        let d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        cookies.set("isAuth", true, {path: "/", expires: d})
        cookies.set("access_token", result.result.access_token, {path: "/", expires: d})
        window.location.assign("/dashboard");
      }
    })
    .catch((error) => {
      console.log('error: ' + error);
      setShowAlert(true)
      setClassAlert("danger")
      setMessageAlert("Something wrong happened!!! Please try again a few minute later...")
    });
  }
  return (
    <>
    <IndexNavbarVerification />
    <div className="main mt-5">
      <div className="section text-center" style={{"backgroundColor": "#f8f8f8", "paddingTop": "0px"}}>
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Alert isOpen={showAlert} color={classAlert} className="col-12 mt-4 text-center" toggle={dismissAlert}>
                  <b>{messageAlert}</b>
                </Alert>
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
                      <Label><h3>Joyn-FO telah mengirimkan kode verifikasi melalui SMS ke <b>{cookies.get("driver_phone")}</b>. Harap masukkan 4 digit angka yang tertera pada sms</h3></Label>
                      <VerificationInput
                        length={4}
                        validChars="0-9"
                        removeDefaultStyles
                        autoFocus={true}
                        container={{
                          className: 'container',
                        }}
                        characters={{
                          className: 'characters',
                        }}
                        character={{
                          className: 'character',
                          classNameInactive: 'character--inactive',
                          classNameSelected: 'character--selected',
                        }}
                        input={{ onChange: (e) => setCodeVerification(e) }}
                        />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center mt-2">
                  <Timer
                    initialTime={new Date(cookies.get("codeverification")) - new Date()}
                    direction="backward"
                    checkpoints={[
                      {
                        time: 0,
                        callback: () => {
                          cookies.remove("codeverification", {path: "/"});
                          cookies.remove("driver_phone", {path: "/"});
                          window.location.assign("/masuk");
                        }
                      },
                    ]}
                    >
                    {() => (
                      <React.Fragment>
                        <b>OTP kadaluarsa dalam <span style={{color: "red"}}><Timer.Minutes />:<Timer.Seconds /></span></b>
                    </React.Fragment>
                  )}
                </Timer>
              </Col>
              </Row>
              <Col className="text-center mt-4">
                <Button color="info" type="submit" size="lg" className="pl-auto pr-auto">
                  KIRIM
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

export default VerifikasiKode;
