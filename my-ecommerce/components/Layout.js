import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { ProductsContext } from "./ProductsContext";

export default function Layout({children}) {
  const {setSelectedProducts} = useContext(ProductsContext);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <div className="main"></div>
      <div className="p-5 grow">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg rounded-lg">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>     
      <Footer/> 
    </div>

  )
}