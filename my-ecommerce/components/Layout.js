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
      <div className="text-yellow-500 mt-3">
        <div className="text-yellow-500 flex gap-10 xl:flex-row flex-col justify-center">
          <h1 className="sm:text-8xl text-5xl text-center">Galactic</h1>
          <h1 className="sm:text-8xl text-5xl text-center">Store</h1>
        </div>
        <h1 className="text-xl text-center">For all your galactic needs</h1>        
      </div>

      <div className="p-5 grow">
        {success && (
          <div className="mb-5 bg-red-600 text-white text-lg rounded-lg pl-5">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>     
      <Footer/> 
    </div>

  )
}