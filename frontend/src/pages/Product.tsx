import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHeader from "../components/ProductHeader";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  // @ts-ignore
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  // @ts-ignore
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHeader product={product} />
        <ProductDisplay product = {product}/>
        <ProductDescription />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
