/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser, setMessage } from "../reducer";
import { setWer } from "../qwe";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";


export default function Signin() {
  const {message} = useSelector((state: any) => state.accountReducer);
  const [localMessage, setLocalMessage] = useState(message);
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const saveMessage =() => {
    dispatch(setMessage(localMessage));
  }
  const saveCurrentUser = () => {
    dispatch(setCurrentUser(credentials));
    redirect("/Account/Signup");
  }
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    //dispatch(setWer("hello world!!"))
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      {/* <input value={localMessage} onChange={(e) => setLocalMessage(e.target.value)}/>
      <button onClick={saveMessage}> Save</button> */}
      <h1>Sign in</h1>
      <FormControl defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        id="wd-username"
        placeholder="username"
        className="mb-2" /><br />
      <FormControl defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        id="wd-password"
        placeholder="password" type="password"
        className="mb-2" /><br />
      <Button onClick={signin} id="wd-signin-btn"
        
        className="btn btn-primary w-100 mb-2">
        Sign in </Button><br />
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
      {/* <button onClick={saveCurrentUser}> Save </button> */}
    </div>);
}

