import { useRouter } from "next/router";
const DataProductPage = () => {
    const { query } = useRouter();
    return (
      <div className="flex  min-h-screen flex-col items-center justify-evenly  text-3xl text-blue-500">
    
        <h1>Product Page</h1>
        <h1>Product: {query.id}</h1>
      </div>
    ) 
  };
  
  export default DataProductPage;