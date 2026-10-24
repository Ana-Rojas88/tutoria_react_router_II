import { createContext, useContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const ApiProvider = ({children}) =>{
      const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=12"
      );

      const data = await response.json();

      setProductos(data.products);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);


 return(
    <ApiContext.Provider value={{productos, setProductos}}>
            {children}
    </ApiContext.Provider>
 )
}

export const useApiContext = () => {
  return useContext(ApiContext);
}

export default ApiProvider;