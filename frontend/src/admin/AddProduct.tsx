import Sidebar from "./Sidebar";
import NavbarAdmin from "./NavbarAdmin";
import upload from "../assets/upload_area.svg";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState<File | null>(null);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image as File);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData,
    }).then((resp) => resp.json()).then((data) => {responseData = data});

    //@ts-ignore
    if(responseData.success) {
      //@ts-ignore
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addProduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) => {
        if (data.success) {
          alert('Product Added Successfully');
          setProductDetails({
            name: "",
            image: "",
            category: "women",
            new_price: "",
            old_price: ""
          });
          setImage(null);
        } else {
          alert("Failed to add Product");
        }
      });
    }
  };

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7 flex-grow">
          <div className="mb-3">
            <h4 className="bold-18 pb-2">Product title :</h4>
            <input
              type="text"
              value={productDetails.name}
              onChange={changeHandler}
              name="name"
              placeholder="Type here.."
              className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
            />
          </div>
          <div className="mb-3">
            <h4 className="bold-18 pb-2">Price :</h4>
            <input
              type="number"
              value={productDetails.old_price}
              onChange={changeHandler}
              name="old_price"
              placeholder="Type here.."
              className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
            />
          </div>
          <div className="mb-3">
            <h4 className="bold-18 pb-2">Offer Price :</h4>
            <input
              type="number"
              value={productDetails.new_price}
              onChange={changeHandler}
              name="new_price"
              placeholder="Type here.."
              className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
            />
          </div>
          <div className="mb-3 flex items-center gap-x-4">
            <h4 className="bold-18 pb-2">Product Category : </h4>
            <select
              name="category"
              value={productDetails.category}
              onChange={changeHandler}
              id=""
              className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none"
            >
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kid">Kid</option>
            </select>
          </div>
          <div>
            <label htmlFor="file-input">
              <img
                src={image ? URL.createObjectURL(image) : upload}
                alt=""
                className="w-20 rounded-sm inline-block"
              />
            </label>
            <input
              onChange={imageHandler}
              type="file"
              name="image"
              id="file-input"
              hidden
              className="bg-primary max-w-80 w-full py-3 px-4"
            />
          </div>
          <button onClick={addProduct} className="btn_dark_rounded mt-4 flexCenter gap-x-1">
            <FaPlus /> Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
