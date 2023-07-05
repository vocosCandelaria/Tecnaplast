import React, {createContext, useState} from 'react';
export const GlobalContext = createContext ('')

const CartContext = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

  return (
    <GlobalContext.Provider value={{
        loading,
        setLoading,
        search,
        setSearch,
        }}>
          {children} 
    </GlobalContext.Provider> 
  )
}

export default CartContext