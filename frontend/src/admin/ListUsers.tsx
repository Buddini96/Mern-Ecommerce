import Sidebar from "./Sidebar";
import NavbarAdmin from "./NavbarAdmin";
import { useEffect, useState } from "react";
import Product from "../pages/Product";
import { TbTrash } from "react-icons/tb";

interface Product {
  name: string;
  email: string;
  date: string; 
}

const ListUsers = () => {
  const [allUsers, setAllUsers] = useState<Product[]>([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allusers");
      const data = await response.json();
      const formattedUsers = data.map((user: Product) => ({
        ...user,
        date: new Date(user.date).toISOString().split("T")[0],
      }));
      setAllUsers(formattedUsers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (username: string) => {
    await fetch("http://localhost:4000/deleteUser", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username }),
    });
    await fetchInfo();
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="flex flex-col lg:flex-row overflow-hidden">
        <Sidebar />
        <div className=" box-border bg-white w-full rounded-sm mt-4  flex-grow ">
          <div className=" box-border bg-white rounded-md w-full ">
            <h4 className="bold-22 p-5 uppercase">User List</h4>
            <div className="max-h-[70vh] overflow-auto px-12 text-center">
              <table className="w-full mx-auto">
                <thead>
                  <tr className="bg-primary bold-14 sm:regular-22 text-start ">
                    <th className="p-2">Name</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user, i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-900/20 text-gray-20 p-6 medium-14"
                    >
                      <td className="p-5">
                        <div className="line-clamp-3">{user.name}</div>
                      </td>
                      <td className="">{user.email}</td>
                      
                      <td className="">{user.date}</td>
                      <td>
                        <div className="bold-22 pl-8 sm:pl-14">
                          <TbTrash onClick={() => removeProduct(user.name)} />
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

export default ListUsers;
