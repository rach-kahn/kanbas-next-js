"use client"
import React from "react";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function Signup() {
  const {message, currentUser} = useSelector((state: any) => state.accountReducer)
  return (
    <div id="wd-signup-screen">
      {message}
      <h3>Sign up</h3>
     <FormControl id="wd-username"
      value={currentUser.username}
             placeholder="username"
             className="mb-2"/><br />
      <FormControl id="wd-password"
      value={currentUser.password}
             placeholder="password"
             className="mb-2"/><br />
     <FormControl id="wd-password"
             placeholder="verify password" type="password"
             className="mb-2"/><br />
      <Link id="wd-signup-btn" href="Profile" className="btn btn-primary w-100 mb-2"> Sign up </Link><br />
      <Link id="wd-signin-link" href="Signin" > Sign in </Link>
    </div>
);}

