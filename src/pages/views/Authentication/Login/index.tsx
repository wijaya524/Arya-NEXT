import * as React from "react";
import TextView from "../Register/text";
import PasswordView from "../Register/Password";
import BasicButtons from "../Register/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();
  const [error, setError] = useState("");
  const callbackUrl: any = query.callbackUrl && "/";

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or Password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or Password is incorrect");
    }
  };
  return (
    
      <form
        onSubmit={handleSubmit}
        className=" flex w-full h-96 items-center justify-center  flex-col"
      >
        <div className=" mt-72  border-2 rounded-3xl bg-zinc-950 border-blue-700 p-5 py-14 shadow-lg shadow-blue-800">
          <h1 className=" text-3xl font-bold py-0 mb-10 text-center">Login</h1>
          {error && <p className=" text-red-500 text-center">{error}</p>}
          <TextView label="Email" maxLength={30} type="email" name="email" />
          <PasswordView name="password" />
          <BasicButtons>{isLoading ? "Loading..." : "Login"}</BasicButtons>
          <p className=" mt-7 text-center ">
            Don{"'"}t have an account?{" "}
            <Link href="/auth/register" className=" text-blue-500">
              Register
            </Link>
          </p>
          <button
            onClick={() => signIn("google", { callbackUrl, redirect: true })}
            className=" bg-slate-700 "
          >
            google
          </button>
        </div>
       
      </form>
  );
};

export default LoginView;
