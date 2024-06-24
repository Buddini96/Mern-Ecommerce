import Sidebar from "./Sidebar";
import NavbarAdmin from "./NavbarAdmin";
import { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { RiEdit2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  old_price: number;
  new_price: number;
  category: string;
  remove: string;
  image?: string;
}

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allProducts");
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (productId: number) => {
    await fetch("http://localhost:4000/deleteProduct", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: productId }),
    });
    await fetchInfo();
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="flex flex-col lg:flex-row overflow-hidden">
        <Sidebar />
        <div className="box-border bg-white w-full rounded-sm mt-4 flex-grow">
          <div className="box-border bg-white rounded-md w-full">
            <h4 className="bold-22 p-5 uppercase">Product List</h4>
            <div className="max-h-[74vh] overflow-auto max-w-[81vw] text-center shadow-lg">
              <table className="w-full mx-auto">
                <thead className="sticky top-0 bg-white z-10">
                  <tr className="bg-primary bold-14 sm:regular-22 text-start shadow-lg">
                    <th className="p-2">Products</th>
                    <th className="p-2">Title</th>
                    <th className="p-2">Old Price</th>
                    <th className="p-2">New Price</th>
                    <th className="p-2">Category</th>
                    <th className="p-2"></th>
                    <th className="p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {allProducts.map((product, i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-900/20 text-gray-20 p-6 medium-14"
                    >
                      <td className="flexStart sm:flexCenter">
                        <img
                          src={product.image}
                          alt=""
                          height={43}
                          width={43}
                          className="rounded-lg ring-1 ring-slate-900/5 my-1"
                        />
                      </td>
                      <td>
                        <div className="line-clamp-3">{product.name}</div>
                      </td>
                      <td className="">${product.old_price}</td>
                      <td className="">${product.new_price}</td>
                      <td className="">{product.category}</td>
                      <td>
                        <Link
                          to={`/editProduct/${product.id}`}
                          className="hover:no-underline"
                        >
                          <div className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded flex items-center cursor-pointer"
                          style={{ width: "100px" }}
                          >
                            <RiEdit2Line className="mr-2" />
                            Edit
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div
                          className="bg-red-600 hover:bg-red-600 text-black font-bold py-2 px-4 rounded flex items-center cursor-pointer"
                          style={{ width: "100px" }}
                          onClick={() => removeProduct(product.id)}
                        >
                          <TbTrash className=" mr-2" />
                          Delete
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
