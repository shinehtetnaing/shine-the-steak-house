import { createContext, useContext, useState } from "react";

const MenuContext = createContext(undefined);

export const MenuProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (menu) => {
    setCart((prevCart) => [...prevCart, menu]);
  };

  const getTotal = () => {
    return cart.reduce((acc, menu) => acc + menu.price, 0);
  };

  const removeFromCart = (menu) => {
    let removed = false;
    const updatedCart = cart.filter((item) => {
      if (item.id === menu.id && !removed) {
        removed = true; // Set the flag to true to indicate that an object has been removed
        return false; // Exclude the first occurrence of the object with the specified ID
      }
      return true; // Include all other objects in the cart array
    });
    setCart(updatedCart);
  };

  const deleteMenu = (menu) => {
    const updatedCart = cart.filter((item) => item.id !== menu.id);
    setCart(updatedCart);
  };

  const uniqueCartItems = cart.filter((item, index, self) => {
    return index === self.findIndex((i) => i.id === item.id);
  });

  const menuCount = uniqueCartItems.length;

  const handleEmptyCart = () => {
    setCart([]);
  };

  return (
    <MenuContext.Provider
      value={{
        cart,
        addToCart,
        getTotal,
        removeFromCart,
        deleteMenu,
        uniqueCartItems,
        menuCount,
        handleEmptyCart,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
