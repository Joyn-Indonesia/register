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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/paper-kit.css";
// pages
import Index from "views/Index.js";

import JoynRide from "views/JoynRide";
import JoynCar from "views/JoynCar";
import JoynRestaurant from "views/JoynRestaurant";
import DaftarJoynRide from "views/DaftarJoynRide";
import DaftarJoynCar from "views/DaftarJoynCar";
import DaftarJoynRestaurant from "views/DaftarJoynRestaurant";
// import NucleoIcons from "views/NucleoIcons.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// import Masuk from "views/Masuk.js";
// import Daftar from "views/Daftar.js";
// import VerifikasiKode from "views/VerifikasiKode.js";
// import Dashboard from "views/Dashboard.js";
// others

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route
        path="/joyncar/daftar"
        exact
        render={props => <DaftarJoynCar {...props} />}
      />
      <Route
        path="/joynride/daftar"
        exact
        render={props => <DaftarJoynRide {...props} />}
      />
      <Route
        path="/joynrestaurant/daftar"
        exact
        render={props => <DaftarJoynRestaurant {...props} />}
      />
      <Route
        path="/joyncar"
        exact
        render={props => <JoynCar {...props} />}
      />
      <Route
        path="/joynride"
        exact
        render={props => <JoynRide {...props} />}
      />
      <Route
        path="/joynrestaurant"
        exact
        render={props => <JoynRestaurant {...props} />}
      />
      <Route path="/" exact render={props => <Index {...props} />} />
      <Redirect to="/" />
      {/*<Route
        path="/masuk"
        render={props => <Masuk {...props} />}
      />
      <Route
        path="/daftar"
        render={props => <Daftar {...props} />}
      />
      <Route
        path="/verifikasikode"
        render={props => <VerifikasiKode {...props} />}
      />
      <Route
        path="/dashboard"
        render={props => <Dashboard {...props} />}
      />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
