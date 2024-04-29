
type ProductsType = {
  name: string;
  price: number;
  category: string;
  image: string;
  id: string;
};

const DetailProduct = ({ product }: { product: ProductsType }) => {
  return (
    <div  className=" bg-slate-800 ">
      <div  className="">
        <img className=" w-60" src={product.image} alt={product.name} />
      </div>
      <h4 className=" text-2xl">{product.name}</h4>
      <p className=" text-lg">{product.category}</p>
      <p className=" text-xl">
        {product.price &&
        product.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </p>
    </div>
  );
};

export default DetailProduct;
