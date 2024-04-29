import Link from "next/link"
type ProductsType = {
    name: string;
    price: number;
    category: string;
    image: string;
    id: string;
}

const ProductView = ({products} : {products: ProductsType[]}) => {
    return (
        <div className="flex  min-h-screen flex-col items-center  p-14 text-3xl text-blue-500">
        <h1 className=" p-20">Product</h1>
        <div className="  text-white flex gap-5">
          {products.map((product: ProductsType) => (
            <div key={product.id} className=" bg-slate-800 ">
                <Link href={`/product/${product.id}`} className=""> 
                    <img className=" w-60" src={product.image} alt={product.name} />
                </Link>
                <h4 className=" text-2xl">{product.name}</h4>
                <p className=" text-lg">{product.category}</p>
                <p className=" text-xl">{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
            </div>
          ))}
        </div>
      </div>
    )
}

export default ProductView