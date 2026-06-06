import { products } from "../../../data/products";

import ProductCard from "../ProductCard/ProductCard";

import "./ProductGrid.css";

const ProductGrid = () => {
  return (
    <section>
      <div className="container">
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-lg-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
