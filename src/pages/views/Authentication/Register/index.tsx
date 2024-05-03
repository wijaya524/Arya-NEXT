import * as React from "react";
import TextView from "./text";
import PasswordView from "./Password";
import BasicButtons from "./button";
import  Link  from "next/link";

const RegisterView = () => {
  return (
    <form
      action=""
      method="post"
      className=" flex w-full h-96 items-center justify-center align-center"
    >
      <div className=" mt-72 border-2 rounded-3xl bg-zinc-950 border-blue-700 p-9 shadow-lg shadow-blue-800">
        <h1 className=" text-3xl font-bold">Register</h1>
        <p className=" py-3">Welcome, please create your account</p>
        <TextView label="Email" maxLength={30} />
        <TextView label="Fullname" maxLength={30} />
        <PasswordView />
        <BasicButtons />
        <p className=" mt-7 text-center ">Have an account?  <Link href="/login">Login</Link></p>
      </div>
    </form>
  );
};

export default RegisterView;
