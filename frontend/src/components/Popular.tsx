// @ts-ignore
import POPULAR from "../assets/popular";
import Item from "./Item";
import React from "react";

interface PopularItem {
    id: string;
    name: string;
    image: string;
    old_price: number;
    new_price: number;
  }
  

const popularItems: PopularItem[] = POPULAR;

const Popular: React.FC = () => {
  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">Popular Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16"/>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularItems.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
