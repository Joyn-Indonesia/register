import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import BaseSelect from 'react-select'
import FixRequiredSelect from "assets/js/FixRequiredSelect"
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
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const options = [
  { value: '1', label: 'Yogyakarta' },
  { value: '2', label: 'Surabaya' },
  { value: '3', label: 'Jakarta' }
]

const Select = props => (
  <FixRequiredSelect
    {...props}
    styles={customStyles}
    SelectComponent={BaseSelect}
    options={props.options || options}
    />
);

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px',
    fontWeight: "500",
    backgroundColor: state.isFocused ? '#1DA92F' : 'white',
    color: state.isFocused ? 'white' : '#66615b'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "black"
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "black"
  }),
  control: (base, state) => ({
    ...base,
    '&:hover': { borderColor: 'none' },
    borderColor: state.isFocused ? '#1DA92F' : '#DDDDDD',
    boxShadow: 'none',
  }),
}

function Daftar() {
  const [driver_username, setdriver_username] = useState('');
  const [driver_fullname, setdriver_fullname] = useState('');
  const [driver_email, setdriver_email] = useState('');
  const [driver_phone, setdriver_phone] = useState('');
  const [driver_city, setdriver_city] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [classAlert, setClassAlert] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const dismissAlert = () => setShowAlert(false);
  const [redirectPage, setRedirectPage] = useState('');

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register");
    return function cleanup() {
      document.body.classList.remove("register");
    };
  });

  if (cookies.get("isAuth")) {
    window.location.assign("/dashboard");
  }

  function redirect(){
    if (redirectPage) {
      return <Redirect to={{
          pathname: redirectPage
        }} />
      }
    }

    function handleSubmit(event) {
      event.preventDefault();
      const requestBody = {
        driver_username: driver_username,
        driver_fullname: driver_fullname,
        driver_email: driver_email,
        driver_phone: driver_phone,
        driver_city: driver_city,
      }

      fetch(global.app_url + '/v1/fo/register_bike', {
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
          //Change the state here which will show your Alert
          setShowAlert(true)
          setClassAlert("danger")
          setMessageAlert(result.message)
        }
        else {
          alert("Pendaftaran berhasil")
          window.location.assign("/masuk");
        }
      })
      .catch((error) => {
        console.log('error: ' + error);
        setShowAlert("true")
        setClassAlert("danger")
        setMessageAlert("Something wrong happened!!! Please try again a few minute later...")
      });
    }
    return (
      <>
      {redirect()}
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
                <Button color="secondary" href="/masuk">Masuk</Button>
                <Button color="info">Daftar</Button>
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
                  <h2 className="title">BERGABUNG DENGAN KAMI SEKARANG!</h2>
                </Col>
              </Row>
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
                        <Label><b>Username*</b></Label>
                        <Input type="text" placeholder="Contoh: andreasxxxxx" id="driver_username" name="driver_username" onChange={e => setdriver_username(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label><b>Nama Lengkap*</b></Label>
                        <Input type="text" placeholder="Masukkan nama lengkap" id="driver_fullname" name="driver_fullname" onChange={e => setdriver_fullname(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label><b>Alamat Email (GMAIL)*</b></Label>
                        <Input type="email" placeholder="Contoh: xxxxx@gmail.com" id="driver_email" name="driver_email" onChange={e => setdriver_email(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label><b>No. Handphone*</b></Label>
                        <Input type="number" placeholder="Contoh: 081xxxxxxxxx" id="driver_phone" name="driver_phone" onChange={e => setdriver_phone(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label><b>Pilih Kota</b></Label>
                        <Select options={options} placeholder="Pilih Kota*" id="driver_city" name="driver_city" onChange={e => setdriver_city(e.value)} required/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label check>
                        <Input
                          required
                          type="checkbox"
                          id="checkbox"/>{''}
                          <b>Saya setuju dengan</b> <a href="#" className="ml-1" style={{color: "#1DA92F"}}><b>Syarat dan Ketentuan</b></a>
                        </Label>
                      </Col>
                    </Row>
                    <Col className="text-center mt-4">
                      <Button color="info" type="submit" size="lg" className="pl-4 pr-4">
                        DAFTAR
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

    export default Daftar;
