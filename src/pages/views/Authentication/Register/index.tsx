import * as React from "react";
import TextView from "./text";
import PasswordView from "./Password";
import BasicButtons from "./button";
import  Link  from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {push} = useRouter();
  const [error, setError] = useState('');
   const handleSubmit = async (event: any) => {
     event.preventDefault();
     const data = {
       email: event.target.email.value,
       password: event.target.password.value,
       fullname: event.target.fullname.value
     }
     const result = await fetch('/api/register', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
   })
   if(result.status === 200){
    event.target.reset();
    alert('Register success');
    setIsLoading(false)
    push('/auth/login')
   }else{
    setIsLoading(false)
    setError(result.status === 400 ? "Email already exists" : '')
   }
  }
;
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex w-full h-96 items-center justify-center align-center"
    >
      <div className=" mt-72 border-2 rounded-3xl bg-zinc-950 border-blue-700 p-9 shadow-lg shadow-blue-800">
        <h1 className=" text-3xl font-bold py-5 text-center">Register</h1>
        {error && <p className=" text-red-500 text-center">{error}</p>}
        <TextView label="Email" maxLength={30} type="email" name="email"/>
        <TextView label="Fullname" maxLength={30} type="text" name="fullname"/>
        <PasswordView name="password"/>
        <BasicButtons >{isLoading ? 'Loading...' : 'Register'}</BasicButtons>
        <p className=" mt-7 text-center ">Have an account?  <Link href="/auth/login" className=" text-blue-500">Login</Link></p>
      </div>
    </form>
  );
};

export default RegisterView;
