import ProductView from "../views/Product"


type ProductsType = {
    name: string;
    price: number;
    category: string;
    image: string;
    id: string;
}
const productPage = (props: {products: ProductsType[]}) => {
 const {products} = props
    return (
        <ProductView products={products}/>
    )
}

export default productPage

export async function getServerSideProps() {
   const res = await fetch('http://localhost:3000/api/product');
   const response = await res.json();
    return {
        props: {
            products: response.data
        }
    }
}