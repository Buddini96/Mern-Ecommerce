import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import favourite from "../assets/background/love.svg";

interface ItemProps {
  id: string;
  name: string;
  image: string;
  category: string;
  old_price: number;
  new_price: number;
}

const Item: React.FC<ItemProps> = ({
  id,
  name,
  image,
  category,
  old_price,
  new_price,
}) => {
  return (
    <div className=" rounded-xl overflow-hidden bg-[#e5e5e5]" style={{ boxShadow: '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
      <div className="relative flexCenter group overflow-hidden transition-all duration-100 h-[60%]">
        <Link
          to={`/product/${id}`}
          className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 transition-all duration-700 scale-0 group-hover:scale-100"
        >
          <FaSearch className="scale-125 hover:rotate-90 hover:scale-125 transition-all duration-200" />
        </Link>

        <img
          //@ts-ignore
          onClick={window.scrollTo(0, 0)}
          src={image}
          alt="productImage"
          className="w-full block object-cover group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <div className="p-4 overflow-hidden">
        <div className="flex justify-between items-center py-3">
          <h2
            className={
              "font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap"
            }
          >
            {name}
          </h2>
          <span
            className={"bold-16 bg-[#facc15] ml-1 px-4  rounded-lg py-1"}
          >
            <small className={"bold-18 pl-1"}> $ </small>
            {new_price}.00
          </span>
        </div>
        <div className={"flex items-center gap-2 mt-1 py-2"}>
          <span className={"text-sm line-through opacity-50"}>
            $ {old_price}.00
          </span>
          <span
            className={
              "bg-[#fb7185] px-1.5 py-0.5 rounded-md text-xs text-white"
            }
          >
            save 20%
          </span>
          <span>
            {category}'s Shoes
          </span>
        </div>
        <div>
          <span className={"flex items-center mt-1 p-1 rounded py-2"}>
            <FaStar className="text-yellow-500 text-lg mr-1" />
            <FaStar className="text-yellow-500 text-lg mr-1" />
            <FaStar className="text-yellow-500 text-lg mr-1" />
            <FaStarHalfStroke className="text-yellow-500 text-lg mr-1" />
            <FaRegStar className="text-yellow-500 text-lg mr-1" />
            <span className={"text-xs ml-2 text-gray-500"}>20k reviews</span>
          </span>
        </div>
        <div className={"mt-5 flex gap-2 justify-center "}>
          <button
            className={
              "w-full bg-[#0f172a] hover:bg-secondary px-6 py-2 rounded-md text-white font-medium tracking-wide transition"
            }
          >
            Add to Cart
          </button>

          <div className="relative">
            {/* Link wrapping the button */}
            <Link to={`/product/${id}`}>
              <button
                className={
                  "flex p-3 justify-center bg-gray-300 hover:bg-gray-400 transition rounded-md"
                }
              >
                <img
                  className="opacity-50 "
                  src={favourite}
                  alt="add to favourites"
                />
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
