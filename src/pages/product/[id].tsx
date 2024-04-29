import { useRouter } from "next/router";
import useSWR from 'swr'
import DetailProduct from "../DetailProduct/DetailProduct";
const fetcher = (url: string) => fetch(url).then(res => res.json())
const DataProductPage = () => {
    const { query } = useRouter();
    const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher)
    return (
      <div className="flex  min-h-screen flex-col items-center justify-evenly  text-3xl text-blue-500">
        <h1>Product Page</h1>
        <DetailProduct product={isLoading ? [] : data} />
      </div>
    ) 
  };
  
  export default DataProductPage;