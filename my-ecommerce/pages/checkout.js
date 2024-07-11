import Layout from "@/components/Layout";
import { ProductsContext } from "@/components/ProductsContext";
import { useContext, useEffect, useState } from "react";

export default function CheckoutPage() {
  const {selectedProducts, setSelectedProducts} = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  
  useEffect(() => {
    if (selectedProducts.length) {
      const uniqIds = [...new Set(selectedProducts)];
      fetch(`/api/products?ids=${uniqIds.join(',')}`)
        .then(response => response.json())
        .then(json => setProductsInfos(json))
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [selectedProducts]);

  function moreOfThisProduct(id){
    setSelectedProducts(prev => [...prev, id])
  };
  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id);
    if (pos !== -1) {
      setSelectedProducts( prev => {
        return prev.filter((value,index) => index !== pos);
      });
    }
  };

  const deliveryPrice = 20 * selectedProducts.length;
  let subtotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfos.find(p => p._id === id)?.price || 0;
      subtotal += price;
    }
  }
  const total = subtotal + deliveryPrice;
  return (
    <Layout>
      {!selectedProducts.length ? (
        <div className="text-red-600">No items in your shopping cart</div>
      ) : (
        productsInfos.map(productInfo => (

          <div key={productInfo._id} className="flex mb-5">
            <div className="bg-gray-100 p-3 rounded-xl shrink-0 flex justify-center items-center">
              <img src={productInfo.picture} alt="" className="w-24"/>
            </div>
            <div className="pl-4">
              <h3 className="font-bold text-lg">{productInfo.name}</h3>
              <p className="text-sm leading-4 text-gray-600">{productInfo.description}</p>
              <div className="flex">
                <div className="grow">${productInfo.price}</div>
                <div>
                  <button onClick={() => lessOfThisProduct(productInfo._id)} className="bg-red-400 text-white px-2 rounded-xl w-7">-</button>
                  <span className="px-2">
                    {selectedProducts.filter(id => id === productInfo._id).length}
                  </span>
                  <button onClick={() => moreOfThisProduct(productInfo._id)} className="bg-emerald-400 text-white px-2 rounded-xl w-7">+</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <form action="/api/checkout" method="POST">
        <div className="mt-4">
          <input name="address" value={address} onChange={e => setAddress(e.target.value)} class="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Street address, number"/>
          <input name="city" value={city} onChange={e => setCity(e.target.value)} class="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="City and postal code"/>
          <input name="name" value={name} onChange={e => setName(e.target.value)} class="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Your Name"/>
          <input name="email" value={email} onChange={e => setEmail(e.target.value)} class="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="email" placeholder="Email Address"/>
        </div>
        <div className="mt-4">
          <div className="flex my-3">
            <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
            <h3 className="font-bold">${subtotal}</h3>
          </div>
          <div className="flex my-3">
            <h3 className="grow font-bold text-gray-400">Delivery:</h3>
            <h3 className="font-bold">${deliveryPrice}</h3>
          </div>
          <div className="flex my-3 border-t border-dashed border-red-600 pt-3">
            <h3 className="grow font-bold text-gray-400">Total:</h3>
            <h3 className="font-bold">${total}</h3>
          </div>
        </div>
          <input type="hidden" name="products" value={selectedProducts.join(',')}/>
          <button type="submit" className="bg-red-600 p-5 text-white px-5 w-full rounded-xl font-bold my-4 shadow-xl shadow-red-950 hover:shadow-red-500 transition-all">Pay ${total}</button>
      </form>
      
    </Layout>    
  );
}
