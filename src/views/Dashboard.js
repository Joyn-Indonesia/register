import React, { useState, useEffect } from "react";
import DashboardNavbar from "components/Navbars/DashboardNavbar.js";
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
  Input,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Cookies from 'universal-cookie';
import BaseSelect from 'react-select'
import FixRequiredSelect from "assets/js/FixRequiredSelect"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import "assets/css/react-web-tabs.css"
import ImageUploader from 'react-images-upload';

const axios = require("axios");

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

function Dashboard() {
  const [user, setUser] = useState('');
  const [driver_username, setdriver_username] = useState('');
  const [driver_fullname, setdriver_fullname] = useState('');
  const [driver_email, setdriver_email] = useState('');
  const [driver_phone, setdriver_phone] = useState('');
  const [driver_city, setdriver_city] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [classAlert, setClassAlert] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const dismissAlert = () => setShowAlert(false);
  const [showAlertUpload, setShowAlertUpload] = useState(false);
  const [classAlertUpload, setClassAlertUpload] = useState('');
  const [messageAlertUpload, setMessageAlertUpload] = useState('');
  const dismissAlertUpload = () => setShowAlertUpload(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [img, setImg] = useState(null)
  const [SKCK, setSKCK] = useState(null)
  const [KTP, setKTP] = useState(null)
  const [SIM, setSIM] = useState(null)
  const [STNK, setSTNK] = useState(null)
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [type, setType] = useState("")

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register");
    return function cleanup() {
      document.body.classList.remove("register");
    };
  });

  cookies.remove('codeverification', { path: '/'})
  cookies.remove("driver_phone", {path: "/"})
  if (!cookies.get("isAuth")) {
    window.location.assign("/masuk");
  }

  async function fetchMyAPI() {
    const settings = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'service': 'api-fo',
        'client_key': 'JoynFOWEB@2020',
        'Authorization': 'Bearer ' + cookies.get("access_token")
      },
    };
    const fetchResponse = await fetch(global.app_url + '/v1/fo_auth/get_profile', settings)
    const data = await fetchResponse.json()
    setUser(data.joyn_response.result)
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  function imgUpload(pictureFiles, pictureDataURLs){
    setImg(pictureFiles[0])
  }

  function submitDataDiri(event) {
    event.preventDefault();
    const requestBody = {
      driver_username: driver_username,
      driver_fullname: driver_fullname,
      driver_email: driver_email,
      driver_phone: driver_phone,
      driver_city: driver_city,
    }
    {/*fetch(global.app_url + '/v1/fo/code_verification', {
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
      setMessageAlert(result.message)
      if (!result.success) {
      setClassAlert("danger")
      }
      else {
      setClassAlert("success")
      window.location.assign("/dashboard");
      }
      setShowAlert(true)
      })
      .catch((error) => {
      console.log('error: ' + error);
      setShowAlert(true)
      setClassAlert("danger")
      setMessageAlert("Something wrong happened!!! Please try again a few minute later...")
      });*/}
    }

    function updateDokumen(){
      if (SKCK == null || KTP == null || SIM == null || STNK == null) {
        setMessageAlert("Lengkapi semua dokumen untuk melanjutkan")
        setClassAlert("danger")
        setShowAlert(true)
      }
      else {
        const requestBody = {
          skck: SKCK,
          ktp: KTP,
          sim: SIM,
          stnk: STNK,
        }
        fetch(global.app_url + '/v1/fo_auth/update_file_data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'service': 'api-fo',
            'client_key': 'JoynFOWEB@2020',
            'Authorization': 'Bearer ' + cookies.get("access_token")
          },
          body: qs.stringify({
            data: JSON.stringify(requestBody)
          })
        })
        .then((response) => response.json())
        .then((responseData) => {
          var result = responseData.joyn_response;
          setMessageAlert(result.message)
          if (!result.success) {
            setClassAlert("danger")
          }
          else {
            setClassAlert("success")
          }
          setShowAlert(true)
        })
        .catch((error) => {
          console.log('error: ' + error);
          setShowAlert(true)
          setClassAlert("danger")
          setMessageAlert("Something wrong happened!!! Please try again a few minute later...")
        });
      }
    }

    function submitDokumen() {
      const data = new FormData()
      data.append("file_name", img)
      var config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'service': 'api-fo',
          'client_key': 'JoynFOWEB@2020',
          'Authorization': 'Bearer ' + cookies.get("access_token")
        },
      }
      axios.post(global.app_url + '/v1/fo_auth/upload_file',data, config)
      .then((response) => {
        var img_url = response.data.joyn_response.result;
        switch (type) {
          case "skck":
          setSKCK(img_url)
          break;
          case "ktp":
          setKTP(img_url)
          break;
          case "sim":
          setSIM(img_url)
          break;
          case "stnk":
          setSTNK(img_url)
          break;
          default:
        }
        toggle()
      }).catch((error) => {
        console.log(error)
        setShowAlertUpload(true)
        setClassAlertUpload("danger")
        setMessageAlertUpload("Something wrong happened!!! Please try again a few minute later...")
      });
    }

    const openModal = (title, body, type) => {
      setType(type)
      setModalTitle(title)
      setModalBody(body)
      setModal(!modal)
    }
    return (
      <>
      <DashboardNavbar />
      <div className="main mt-5">
        <div className="section" style={{"backgroundColor": "#f8f8f8", "paddingTop": "0px"}}>
          <div className="section">
            <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
              <TabList>
                <Tab tabFor="vertical-tab-one">
                  Data Diri
                </Tab>
                <Tab tabFor="vertical-tab-two">
                  Unggah dokumen
                </Tab>
                <Tab tabFor="vertical-tab-three">
                  Video Pelatihan
                </Tab>
                <Tab tabFor="vertical-tab-four">
                  Unduh Aplikasi
                </Tab>
              </TabList>
              <div className="col-10">
                <Container>
                  <Row>
                    <Col className="col-12">
                      <Alert isOpen={showAlert} color={classAlert} className="text-center" toggle={dismissAlert}>
                        <b>{messageAlert}</b>
                      </Alert>
                    </Col>
                  </Row>
                </Container>
                <TabPanel tabId="vertical-tab-one">
                  <Container>
                    <Row>
                      <Col className="ml-auto mr-auto" md="8">
                        <Form onSubmit={e => {
                            e.preventDefault();
                            submitDataDiri(e);
                          }
                        }>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label>Username*</Label>
                              <Input type="text" placeholder="Contoh: andreasxxxxx" id="driver_username" name="driver_username" onChange={(e) => setdriver_username(e.target.value)} value={user.driver_nickname || ''} required/>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <Label>Nama Lengkap*</Label>
                              <Input type="text" placeholder="Masukkan nama lengkap" id="driver_fullname" name="driver_fullname" onChange={e => setdriver_fullname(e.target.value)} value={user.driver_name || ''} required/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label>Alamat Email (GMAIL)*</Label>
                              <Input type="email" placeholder="Contoh: xxxxx@gmail.com" id="driver_email" name="driver_email" onChange={e => setdriver_email(e.target.value)} value={user.driver_email || ''} required readOnly/>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <Label>No. Handphone*</Label>
                              <Input type="number" placeholder="Contoh: 081xxxxxxxxx" id="driver_phone" name="driver_phone" onChange={e => setdriver_phone(e.target.value)} value={user.driver_phone || ''} required/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label>Pilih Kota</Label>
                              <Select options={options} isClearable placeholder="Pilih Kota*" id="driver_city" name="driver_city" onChange={e => setdriver_city(e.value || '')} required/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Col className="text-center mt-4">
                          <Button color="info" type="submit" size="lg" className="px-5">
                            LANJUTKAN
                          </Button>
                        </Col>
                      </Form>
                    </Col>
                  </Row>
                </Container>
              </TabPanel>

              <TabPanel tabId="vertical-tab-two">
                <Container>
                  <Col className="text-center col-12">
                    <h2><b>SKCK</b></h2>
                    <div style={{"height" : 200, display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                      <div className="col-6">
                        <img src={SKCK ? SKCK.file_url : "https://daftar.go-ride.co.id/assets/icons/grey_upload_document-e5c9d742a0de997b1608845626e3e3414a03b7b154932e20bc9faf8acce50710.png"} alt="" className="float-right"/>
                      </div>
                      <div className="col-6">
                        <Button color="info" onClick={(e) => openModal("Unggah SKCK", "Pastikan Unggah SKCK Anda terlihat di bagian depan, jelas, tidak buram, dan pencahayaan yang cukup. Ukuran file tidak boleh lebih dari 10MB. Unggah file dengan format .jpg .jpeg .gif .png .tiff .bmp", "skck")} className="float-left">{SKCK ? "Ubah Dokumen" : "Unggah Dokumen"}</Button>
                      </div>
                    </div>
                  </Col>
                  <Col className="text-center col-12">
                    <h2><b>KTP</b></h2>
                    <div style={{"height" : 200, display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                      <div className="col-6">
                        <img src={KTP ? KTP.file_url : "https://daftar.go-ride.co.id/assets/icons/grey_upload_document-e5c9d742a0de997b1608845626e3e3414a03b7b154932e20bc9faf8acce50710.png"} alt="" className="float-right"/>
                      </div>
                      <div className="col-6">
                        <Button color="info" onClick={(e) => openModal("Unggah KTP", "Pastikan Unggah KTP Anda terlihat di bagian depan, jelas, tidak buram, dan pencahayaan yang cukup. Ukuran file tidak boleh lebih dari 10MB. Unggah file dengan format .jpg .jpeg .gif .png .tiff .bmp", "ktp")} className="float-left">{KTP ? "Ubah Dokumen" : "Unggah Dokumen"}</Button>
                      </div>
                    </div>
                  </Col>
                  <Col className="text-center col-12">
                    <h2><b>SIM</b></h2>
                    <div style={{"height" : 200, display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                      <div className="col-6">
                        <img src={SIM ? SIM.file_url : "https://daftar.go-ride.co.id/assets/icons/grey_upload_document-e5c9d742a0de997b1608845626e3e3414a03b7b154932e20bc9faf8acce50710.png"} alt="" className="float-right"/>
                      </div>
                      <div className="col-6">
                        <Button color="info" onClick={(e) => openModal("Unggah SIM", "Pastikan Unggah SIM Anda terlihat di bagian depan, jelas, tidak buram, dan pencahayaan yang cukup. Ukuran file tidak boleh lebih dari 10MB. Unggah file dengan format .jpg .jpeg .gif .png .tiff .bmp", "sim")} className="float-left">{SIM ? "Ubah Dokumen" : "Unggah Dokumen"}</Button>
                      </div>
                    </div>
                  </Col>
                  <Col className="text-center col-12">
                    <h2><b>STNK</b></h2>
                    <div style={{"height" : 200, display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                      <div className="col-6">
                        <img src={STNK ? STNK.file_url : "https://daftar.go-ride.co.id/assets/icons/grey_upload_document-e5c9d742a0de997b1608845626e3e3414a03b7b154932e20bc9faf8acce50710.png"} alt="" className="float-right"/>
                      </div>
                      <div className="col-6">
                        <Button color="info" onClick={(e) => openModal("Unggah STNK", "Pastikan Unggah STNK Anda terlihat di bagian depan, jelas, tidak buram, dan pencahayaan yang cukup. Ukuran file tidak boleh lebih dari 10MB. Unggah file dengan format .jpg .jpeg .gif .png .tiff .bmp", "stnk")} className="float-left">{STNK ? "Ubah Dokumen" : "Unggah Dokumen"}</Button>
                      </div>
                    </div>
                  </Col>
                </Container>
                <Container className="text-center mt-5">
                  <Col>
                    <Button color="info" type="submit" onClick={(e) => {
                        e.preventDefault();
                        updateDokumen();
                      }} size="lg" className="px-5" disabled={!(SKCK && KTP && SIM && STNK)}>
                      Kirim Dokumen
                    </Button>
                  </Col>
                </Container>
                <Modal isOpen={modal} toggle={toggle}>
                  <Form>
                    <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
                    <ModalBody>
                      <Alert isOpen={showAlertUpload} color={classAlertUpload} className="text-center" toggle={dismissAlertUpload}>
                        <b>{messageAlertUpload}</b>
                      </Alert>
                      <ImageUploader
                        withIcon={true}
                        withPreview={true}
                        withLabel={false}
                        buttonText='Pilih Dokumen'
                        onChange={imgUpload}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        singleImage={true}
                        fileSizeError="Dokumen yang dipilih terlalu besar"
                        fileTypeError="Tipe Dokumen yang dipilih tidak didukung oleh sistem"
                        />
                      {modalBody}
                    </ModalBody>
                    <ModalFooter>
                      <div className="col-12 text-center py-3">
                        <Button color="primary" type="submit" className="mr-2" onClick={(e) => {
                            e.preventDefault();
                            submitDokumen()
                          }}>Simpan</Button>
                        </div>
                      </ModalFooter>
                    </Form>
                  </Modal>
                </TabPanel>

                <TabPanel tabId="vertical-tab-three">
                  <p>Tab 3 content</p>
                </TabPanel>

                <TabPanel tabId="vertical-tab-four">
                  <p>Tab 4 content</p>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      </>);
    }

    export default Dashboard;
