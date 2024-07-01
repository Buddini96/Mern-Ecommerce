import Sidebar from "./Sidebar";
import NavbarAdmin from "./NavbarAdmin";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//@ts-ignore
import { Product } from "../types";
import { RiEdit2Line } from "react-icons/ri";

const EditProduct = () => {
  const { id } = useParams<{ id: string }>(); 
  //@ts-ignore
  const productId = parseInt(id, 10); 

  const [productDetails, setProductDetails] = useState<Product>({
    id: productId,
    name: "",
    image: "", 
    category: "women",
    new_price: "",
    old_price: "",
  });

  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/getProduct/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProductDetails(data); 
        } else {
          console.error(`Failed to fetch product details for id ${productId}`);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails(); 
  }, [productId]);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const updateProduct = async () => {
    try {
      console.log("Updating product:", productDetails);

      let imageUrl = productDetails.image; 
      if (image) {
        const formData = new FormData();
        formData.append("product", image);

        const response = await fetch("http://localhost:4000/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Failed to upload image: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        imageUrl = data.image_url; 
      }

      const updatedProduct = {
        ...productDetails,
        image: imageUrl,
      };

      const updateResponse = await fetch(`http://localhost:4000/editProduct/${updatedProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!updateResponse.ok) {
        throw new Error(`Failed to update product: ${updateResponse.status} ${updateResponse.statusText}`);
      }

      const responseData = await updateResponse.json();
      console.log("Product updated successfully. Response:", responseData);
      alert("Product Updated Successfully");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
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
                src={
                  image ? URL.createObjectURL(image) : productDetails.image || ""
                }
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
          <button
            onClick={updateProduct}
            className="btn_dark_rounded mt-4 flexCenter gap-x-1"
          >
            <RiEdit2Line className="w-6 h-6 mr-2"/> Edit Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
