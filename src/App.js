import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "pages/signUp";
import SignIn from "pages/signIn";
import { Main } from "components/Layout";
import Home from "pages/Home";
import Tables from "pages/Tables";
import Billing from "pages/Billing";
import Profile from "pages/Profile";
import { Users } from "pages/user/Users";
import { Hotels } from "pages/hotel/Hotels";
import { Destinations } from "pages/destination/Destinations";
import { Restaurants } from "pages/restaurent/Restaurants";
import { Transports } from "pages/transport/Transports";
import { Events } from "pages/event/Events";
import { Attractions } from "pages/attraction/Attractions";
import { Offers } from "pages/offer/Offers";
import { Reviews } from "pages/review/Reviews";

export default function App() {
  return (
    <>


      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/" element={<Main />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="tables" element={<Tables />} />
          <Route path="billing" element={<Billing />} />
          <Route path="rtl" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Users" element={<Users />} />
          <Route path="Hotels" element={<Hotels />} />
          <Route path="destination" element={<Destinations />} />
          <Route path="restaurent" element={<Restaurants />} />
          <Route path="transport" element={<Transports />} />
          <Route path="event" element={<Events />} />
          <Route path="attraction" element={<Attractions />} />
          <Route path="offer" element={<Offers />} />
          <Route path="review" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
}
