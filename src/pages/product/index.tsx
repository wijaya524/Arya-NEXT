import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import ProductView from "../views/Product";
import useSWR from 'swr'


const fetcher = (url: string) => fetch(url).then(res => res.json())
const ProductPage = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  const { data, error, isLoading } = useSWR('/api/product', fetcher)
  

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);
  
  
  return (
   <>
    <ProductView products={isLoading ? [] : data.data}/>
   </>
  );
};

export default ProductPage;
