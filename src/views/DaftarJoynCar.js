import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/JoynCarHeader.js";
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
  FormGroup,
  Label,
  Alert
} from "reactstrap";
import Cookies from 'universal-cookie';
import DemoFooter from "components/Footers/DemoFooter.js";

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

const imageBranding = {
  backgroundColor: "#15a430",
  backgroundSize: "cover",
  color: "#fff",
  width: "20%"
}

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

function DaftarJoynCar() {
  const [driver_username, setdriver_username] = useState('');
  const [driver_fullname, setdriver_fullname] = useState('');
  const [driver_email, setdriver_email] = useState('');
  const [driver_phone, setdriver_phone] = useState('');
  const [driver_city, setdriver_city] = useState('');
  const [driver_car, setdriver_car] = useState('');
  const [driver_car_year, setdriver_car_year] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [classAlert, setClassAlert] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const dismissAlert = () => setShowAlert(false);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.title = "Daftar Joyn Car"
    document.body.classList.add("register");
    return function cleanup() {
      document.body.classList.remove("register");
    };
  });

  if (cookies.get("isAuth")) {
    window.location.assign("/dashboard");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const requestBody = {
      driver_username: driver_username,
      driver_fullname: driver_fullname,
      driver_email: driver_email,
      driver_phone: driver_phone,
      driver_city: driver_city,
      driver_car: driver_car,
      driver_car_year: driver_car_year
    }

    fetch(global.app_url + '/v1/fo/register_car', {
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
        setClassAlert("danger")
      }
      else {
        // alert("Pendaftaran berhasil")
        // window.location.assign("/masuk");
        setClassAlert("success")
      }
      setShowAlert(true)
      setMessageAlert(result.message)
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
    <IndexNavbar />
    <IndexHeader />
    <div className="main">
      <div className="section py-0 mt-5">
        <Container>
          <Row>
            <div className="container d-none d-lg-flex" style={imageBranding}>
              <div className="justify-content-center align-self-center mx-auto">
                <img alt="..." src={require('assets/svg/logo_drv_car_app.svg')} height="100"/>
              </div>
            </div>
            <Col className="ml-3 py-4">
              <Row>
                <Col className="mx-auto text-center">
                  <h2 className="title" style={{"fontWeight": "500"}}>BERGABUNG DENGAN KAMI SEKARANG!</h2>
                </Col>
              </Row>
              <Row>
                <Col className="mx-auto">
                  <Alert isOpen={showAlert} color={classAlert} className="col-12 text-center py-4" toggle={dismissAlert}>
                    <b style={{"fontWeight": "600"}}>{messageAlert}</b>
                  </Alert>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form onSubmit={e => {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }>
                  <Row>
                    <Col lg="6" md="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>USERNAME*</b></Label>
                        <Input type="text" placeholder="Contoh: andreasxxxxx" id="driver_username" name="driver_username" onChange={e => setdriver_username(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Nama Lengkap*</b></Label>
                        <Input type="text" placeholder="Masukkan nama lengkap" id="driver_fullname" name="driver_fullname" onChange={e => setdriver_fullname(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Alamat Email (GMAIL)*</b></Label>
                        <Input type="email" placeholder="Contoh: xxxxx@gmail.com" id="driver_email" name="driver_email" onChange={e => setdriver_email(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>No. Handphone*</b></Label>
                        <Input type="number" placeholder="Contoh: 081xxxxxxxxx" id="driver_phone" name="driver_phone" onChange={e => setdriver_phone(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Jenis Kendaraan*</b></Label>
                        <Input type="text" placeholder="Contoh: Toyota Kijang Innova" id="driver_car" name="driver_car" onChange={e => setdriver_car(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Tahun Kendaraan*</b></Label>
                        <Input type="number" placeholder="Contoh: 2020" id="driver_car_year" name="driver_car_year" onChange={e => setdriver_car_year(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Pilih Kota</b></Label>
                        <Select options={options} placeholder="Pilih Kota*" id="driver_city" name="driver_city" onChange={e => setdriver_city(e.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <FormGroup>
                        <Label check>
                          <Input required type="checkbox" id="checkbox" className="ml-0"/>
                          <span className="ml-3"><b>Saya setuju dengan</b> <a href="#syarat-dan-ketentuan" className="ml-1" style={{color: "#1DA92F"}}><b>Syarat dan Ketentuan</b></a></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col className="text-center mt-4">
                      <Button color="info" type="submit" size="lg" className="px-5">
                        DAFTAR
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="section pb-0">
        <Container>
          <Row>
            <div className="clearfix">
              <Col lg="6" md="12" className="pull-right d-none d-lg-block">
                <img alt="" src="https://daftar.go-ride.co.id/assets/go_ride/goride_article_1-ab1e1e35e8e62b28dedba0b739638b9f27759beb5372aebe2dd85317a0fd370d.jpg" className="img-rounded img-responsive"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-left">
                <h2 style={{"fontWeight": "bold", "fontSize": "xx-large"}}>Bergabunglah Dengan Gerakan Karya Anak Bangsa</h2>
                <img alt="" src="https://daftar.go-ride.co.id/assets/go_ride/goride_article_1-ab1e1e35e8e62b28dedba0b739638b9f27759beb5372aebe2dd85317a0fd370d.jpg" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                <h5 style={{"fontWeight": "500"}} className="mt-2 text-justify mt-3">Jadilah bagian dari revolusi Karya Anak Bangsa, dengan menjadi mitra dalam salah satu era perubahan yang paling membanggakan untuk mencapai Indonesia yang lebih baik.</h5>
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
                <img alt="" src="https://daftar.go-ride.co.id/assets/go_ride/goride_article_2-0ed5947fb105f3ff6508eb83e7c61479116dc6a639ddacaae57eba5f18552575.jpg" className="img-rounded img-responsive mx-auto"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-right">
                <h2 style={{"fontWeight": "bold", "fontSize": "xx-large"}}>Bebas Mengatur Waktu dan Tingkat Pendapatan</h2>
                <img alt="" src="https://daftar.go-ride.co.id/assets/go_ride/goride_article_2-0ed5947fb105f3ff6508eb83e7c61479116dc6a639ddacaae57eba5f18552575.jpg" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                <h5 style={{"fontWeight": "500"}} className="mt-2 text-justify mt-3">Waktu kerja yang fleksibel memberikan Anda kebebasan untuk menentukan jam kerja, sesuai dengan keinginan Anda. Dapatkan penghasilan hingga jutaan rupiah per bulan.</h5>
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
                <img alt="" src="https://daftar.go-ride.co.id/assets/go_ride/goride_article_3-a3f6b0bb7957d6278685c0990486db0ddaa93af2e782df4e7d88b4b15387bb66.jpg" className="img-rounded img-responsive mx-auto"/>
              </Col>
              <Col lg="6 mx-auto" md="12" className="pull-left">
                <h2 style={{"fontWeight": "bold", "fontSize": "xx-large"}}>Peluang yang lebih beragam</h2>
                <img alt="" src="https://daftar.go-ride.co.id/assets/go_ride/goride_article_3-a3f6b0bb7957d6278685c0990486db0ddaa93af2e782df4e7d88b4b15387bb66.jpg" className="img-rounded img-responsive mx-auto d-lg-none mt-3"/>
                <h5 style={{"fontWeight": "500"}} className="mt-2 text-justify mt-3">Selain menjadi mitra GO-RIDE, Anda juga bisa memperoleh order dari berbagai jenis layanan GO-JEK sepanjang hari, antara lain GO-FOOD, GO-MART, GO-SEND.</h5>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </div>
    <DemoFooter />
  </div>
  </>);
}

export default DaftarJoynCar;
