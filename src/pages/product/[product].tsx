import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "../DetailProduct/DetailProduct";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

type ProductsType = {
  name: string;
  price: number;
  category: string;
  image: string;
  id: string;
};
const DataProductPage = ({ product }: { product: ProductsType }) => {
  const { query } = useRouter();
    [/* Client Side */]
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher)
  return (
    <div className="flex  min-h-screen flex-col items-center justify-evenly  text-3xl text-white">
      <h1>Product Page</h1>

      {/* Client Side */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}
      {/* Server Side */}
      <DetailProduct product={product} />
    </div>
  );
};

export default DataProductPage;

export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  const res = await fetch(
    `http://localhost:3000/api/product/${params.product}`
  );
  const response = await res.json();
  return {
    props: {
      product: response.data,
    },
  };
}



