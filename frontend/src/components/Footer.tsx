
import logofooter from "../assets/logo/footer-logo.svg"

function Footer() {
  return (
    <footer className="text-white body-font bg-black">
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex flex-col items-start pl-12 py-5">
            <img src={logofooter} height={250} width={140} />
            {/* <span className="ml-3 text-xl">ShopCarts</span> */}
          </div>
          <p className="mt-2 text-sm text-[#fafafa] pl-10">
            Shop the latest trends in tech, fashion, and home decor. Fast
            shipping and great deals every day!
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
              PRODUCTS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                Nike Waffle Racer
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                Air Jordan 4
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                Nike Blazer Mid
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                Nike Air Max
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Shipping Information
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Customer Support
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
              FOLLOW US
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">
                  Pinterest
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-1  flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm mx-auto sm:text-left">
            © 2024 ShopMate. All rights reserved. Terms & Conditions | Privacy
            Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
