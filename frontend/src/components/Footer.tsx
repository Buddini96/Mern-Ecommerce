import logo from "../assets/logo3.png";

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-[#dae3e9]">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} height={70} width={70} />
            <span className="ml-3 text-xl">ShopCarts</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Shop the latest trends in tech, fashion, and home decor. Fast
            shipping and great deals every day!
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Electronics
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Clothing
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Home Decor
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Books
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Shipping Information
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Customer Support
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              FOLLOW US
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Pinterest
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-green-90">
        <div className="container mx-auto py-4  flex flex-wrap flex-col sm:flex-row">
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
