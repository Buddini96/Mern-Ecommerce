import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-no-repeat h-screen w-full">
      <div className="mx-auto max-w-[1540px] px-6 lg:px-40 relative top-32 xs:top-52">
        <h1 className="h1 capitalize max-w-[37rem]">The New Arrival
        <span className="text-secondary"> Nike</span> Shoes</h1>
        <p className="text-gray-50 regular-16 mt-6 max-w-[35rem]">
          Dive into a world of fashion and technology with our exclusive
          collection. From cutting-edge gadgets to trendy apparel, experience
          quality like never before. Shop with confidence and enjoy fast
          shipping on all orders.
        </p>
        <div className="flexStart !items-center gap-x-4 my-5">
          {/* <div className="regular-24 flexCenter gap-x-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div> */}
          {/* <div className="bold-16 sm:bold-20">
            176k{" "}
            <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div> */}
        </div>
        <div className="max-xs:flex-col flex gap-2">
          <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
            Shop now
          </NavLink>
          <NavLink to={""} className={"btn_dark_rounded flexCenter gap-x-2"}>
            <MdOutlineLocalOffer className="text-2xl" />
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
