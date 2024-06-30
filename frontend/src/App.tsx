import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import bannermens from "./assets/background/banner9.jpg";
import bannerwomens from "./assets/background/banner7.jpeg";
import bannerkids from "./assets/background/banner8.png";
import AdminLayout from "./admin/AdminLayout";
import HideNavAndFooter from "./admin/HideNavAndFooter";
import AddProduct from "./admin/AddProduct";
import ListProduct from "./admin/ListProduct";
import Dashboard from "./admin/Dashboard";
import ListUsers from "./admin/ListUsers";
import EditProduct from "./admin/EditProduct";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <HideNavAndFooter>
          <Header />
        </HideNavAndFooter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<Category category="men" banner={bannermens} />}
          />
          <Route
            path="/womens"
            element={<Category category="women" banner={bannerwomens} />}
          />
          <Route
            path="/kids"
            element={<Category category="kid" banner={bannerkids} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<AdminLayout />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path={"/editProduct/:id"} element={<EditProduct />} />
          <Route path="/listProduct" element={<ListProduct />} />
          <Route path="/listUsers" element={<ListUsers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <HideNavAndFooter>
          <Footer />
        </HideNavAndFooter>
      </BrowserRouter>
    </main>
  );
}
