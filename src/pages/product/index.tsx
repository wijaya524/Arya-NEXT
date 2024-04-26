
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
    const { push } = useRouter()
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        if (!isLogin) {
         push("/auth/login")   
        } 
    },[])
  return (
    <div className="flex  min-h-screen flex-col items-center justify-between p-24 text-3xl text-blue-500">Product Page</div>
  ) 
};

export default ProductPage;
