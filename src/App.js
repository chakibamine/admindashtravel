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
import { AddUserForm } from "pages/user/AddUserForm";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/" element={<Main />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="tables" element={<Tables />} />
          <Route path="billing" element={<Billing />} />
          <Route path="rtl" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Users" element={<Users />} />
          <Route path="adduser" element={<AddUserForm />} />
        </Route>
      </Routes>
    </>
  );
}
