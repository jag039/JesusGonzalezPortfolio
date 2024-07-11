import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export default function Product({_id, name, price, description, picture}){
  const {setSelectedProducts} = useContext(ProductsContext);
  function addProduct() {
    setSelectedProducts(prev => [...prev, _id])
  }
  return(
    <div className='w-64 '>
      <div className="bg-neutral-500 p-5 rounded-xl  transition duration-300 ease-in-out hover:bg-opacity-0">
        <img src={picture} alt="" />
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg text-white">{name}</h3>
      </div>
      <p className="text-sm mt-1 leading-4 text-gray-300">{description}</p>
      <div className="flex mt-1">
        <div className="text-2xl font-bold grow">${price}</div>
        <button onClick={() => addProduct()} id="glow" className="mb-4 transition duration-300 ease-in-out hover:bg-blue-950 text-white py-1 px-3 rounded-xl">+</button>
      </div>
    </div>
  );
}