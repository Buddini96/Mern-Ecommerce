import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Product = {
  id: number;
  name: string;
  old_price: number;
  new_price: number;
  image: string;
};

type Cart = {
  [key: number]: number;
};

interface ShopContextValue {
  all_products: Product[];
  cartItems: Cart;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextValue | undefined>(
  undefined
);

const getDefaultCart = (): Cart => {
  let cart: Cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Cart>(getDefaultCart());
  const [all_products, setAll_products] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allProducts")
      .then((response) => response.json())
      .then((data) => setAll_products(data));
      if(localStorage.getItem('auth-token')) {
        fetch('http://localhost:4000/getcart',{
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('auth-token')}`
          },
          body: "",
         
        }).then((response) => response.json().then()).then((data) => setCartItems(data))
      }
  }, []);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        //@ts-ignore
        let itemInfo = all_products.find(
          //@ts-ignore
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          //@ts-ignore
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue: ShopContextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
