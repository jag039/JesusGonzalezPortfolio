import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Product from "@/components/product";
import { initMongoose } from "@/lib/mongoose";
import { useEffect, useState } from "react";
import { findAllProducts } from "./api/products";


export default function Home({products}) {
  const [productsInfo, setProductsInfo] = useState([]);
  const [phrase, setPhrase] = useState('');

  const categoriesNames = [...new Set(products.map(p => p.category))]

  if (phrase) {
    products = products.filter(p => p.name.toLowerCase().includes(phrase.toLowerCase()));
  }

  return (
    <Layout>
      <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products" className="bg-gray-100 w-full py-2 px-4 rounded-xl"/>
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            {products.find(p => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5">{categoryName}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products.filter(p => p.category == categoryName).map(productInfo =>(
                    <div key={productInfo._id} className="px-5 snap-start">
                      <Product {...productInfo} />
                    </div>
                  ))}
                </div>                
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  };
};
