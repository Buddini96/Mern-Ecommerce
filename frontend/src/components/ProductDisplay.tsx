import { MdStar } from "react-icons/md";
import product_rt_1 from "../assets/products/m-2.png";
import product_rt_2 from "../assets/products/m-3.png";
import product_rt_3 from "../assets/products/m-4.png";
import product_rt_4 from "../assets/products/m-5.png";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

//@ts-ignore
const ProductDisplay = (props) => {
  const { product } = props;
  //@ts-ignore
  const {addToCart} =  useContext(ShopContext);
  return (
    <section>
      <div className="flex flex-col gap-14 xl:flex-row">
        <div className="flex gap-x-2 xl:flex-1">
          <div className="flex flex-col gap-[7px] flex-wrap ">
            <img src={product_rt_1} alt="productImg" className="max-h-[99px] shadow-lg rounded-md" />
            <img src={product_rt_2} alt="productImg" className="max-h-[99px] shadow-lg rounded-md" />
            <img src={product_rt_3} alt="productImg" className="max-h-[99px] shadow-lg rounded-md" />
            <img src={product_rt_4} alt="productImg" className="max-h-[99px] shadow-lg rounded-md" />
          </div>
          <div className="shadow-lg rounded-md">
            <img src={product.image} alt="" height={450} width={330}/>
          </div>
        </div>
        <div className="flex-col flex xl:flex-[1.7]">
          <h3 className="h3">{product.name}</h3>
          <div className="flex gap-x-2 text-[#feaf00] medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>(111)</p>
          </div>
          <div className="flex gap-x-6 medium-20 my-4">
            <div className="line-through">${product.old_price}.00</div>
            <div className="text-[#ff813f]">${product.new_price}.00</div>
          </div>
            <div className="mb-4">
                <h4 className="bold-16">Select Size:</h4>
                <div className="flex gap-3 my-3">
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">S</div>
                <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">M</div>
                <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">L</div>
                <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">XL</div></div> 
            </div>
            <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
                <button className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest" onClick={() => {addToCart(product.id)}}>Add to cart</button>
                <button className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest">Buy it now</button>
            </div>
            <p><span className="medium-16 text-tertiary">Category :</span> {product.category} | Shoe | Sustainable Materials</p>
            <p><span className="medium-16 text-tertiary">Tags :</span>Modern | Latest</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
