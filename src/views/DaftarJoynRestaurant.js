import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/JoynRestaurantHeader.js";
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
import LocationPicker from 'react-location-picker';

const cookies = new Cookies();

const options = [
  { value: '1', label: 'Yogyakarta' },
  { value: '2', label: 'Surabaya' },
  { value: '3', label: 'Jakarta' }
]

const defaultPosition = {
  lat: -7.777231291054027,
  lng: 112.19357614517212
};

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

function DaftarJoynRestaurant() {
  const [restaurant_owner_name, setrestaurant_owner_name] = useState('');
  const [restaurant_name, setrestaurant_name] = useState('');
  const [restaurant_email, setrestaurant_email] = useState('');
  const [restaurant_phone, setrestaurant_phone] = useState('');
  const [restaurant_city, setrestaurant_city] = useState('');
  const [restaurant_address, setrestaurant_address] = useState('');
  const [restaurant_lat, setrestaurant_lat] = useState('');
  const [restaurant_lng, setrestaurant_lng] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [classAlert, setClassAlert] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const dismissAlert = () => setShowAlert(false);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.title = "Daftar Joyn Restaurant"
    document.body.classList.add("register");
    return function cleanup() {
      document.body.classList.remove("register");
    };
  });

  if (cookies.get("isAuth")) {
    window.location.assign("/dashboard");
  }

  function handleLocationChange ({ position, address, places }) {
    setrestaurant_lat(position.lat)
    setrestaurant_lng(position.lng)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const requestBody = {
      restaurant_owner_name: restaurant_owner_name,
      restaurant_name: restaurant_name,
      restaurant_email: restaurant_email,
      restaurant_phone: restaurant_phone,
      restaurant_city: restaurant_city,
      restaurant_address: restaurant_address,
      restaurant_lat: "" + restaurant_lat,
      restaurant_lng: "" + restaurant_lng,
    }
    fetch(global.app_url + '/v1/fo/register_restaurant', {
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
                <img alt="..." src={require('assets/svg/logo_resto_app.svg')} height="100"/>
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
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Nama Pemilik Restoran*</b></Label>
                        <Input type="text" placeholder="Contoh: andreasxxxxx" id="restaurant_owner_name" name="restaurant_owner_name" onChange={e => setrestaurant_owner_name(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Nama Restoran*</b></Label>
                        <Input type="text" placeholder="Masukkan nama lengkap" id="restaurant_name" name="restaurant_name" onChange={e => setrestaurant_name(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Alamat Email Restoran (GMAIL)*</b></Label>
                        <Input type="email" placeholder="Contoh: xxxxx@gmail.com" id="restaurant_email" name="restaurant_email" onChange={e => setrestaurant_email(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>No. Handphone Restoran*</b></Label>
                        <Input type="number" placeholder="Contoh: 081xxxxxxxxx" id="restaurant_phone" name="restaurant_phone" onChange={e => setrestaurant_phone(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Alamat Lengkap Restoran</b></Label>
                        <Input type="textarea" name="restaurant_address" id="restaurant_address" placeholder="Contoh: Jl. Pemuda No. xxx" onChange={e => setrestaurant_address(e.target.value)} required/>
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <FormGroup>
                        <Label style={{"fontWeight": "500", "fontSize": "16px"}}><b>Pilih Kota Tempat Restoran</b></Label>
                        <Select options={options} placeholder="Pilih Kota*" id="restaurant_city" name="restaurant_city" onChange={e => setrestaurant_city(e.value)} required/>
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
                    <Col lg="12">
                      <LocationPicker
                        containerElement={ <div style={ {height: '100%'} } /> }
                        mapElement={ <div style={ {height: '400px'} } /> }
                        defaultPosition={defaultPosition}
                        onChange={handleLocationChange}
                        />
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
    </div>
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
    <DemoFooter />
  </div>
  </>);
}

export default DaftarJoynRestaurant;
