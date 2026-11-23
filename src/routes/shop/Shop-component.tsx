import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/Product-card.component";

const Shop = () => {

  const { products } = useContext(ProductsContext);

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </main>
  );
};

export default Shop;
