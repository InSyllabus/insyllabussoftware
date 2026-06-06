import { motion } from "framer-motion";

import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="product-card"
      whileHover={{
        y: -10,
      }}
    >
      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <ul>

          {product.features.map(
            (feature, index) => (
              <li key={index}>
                ✓ {feature}
              </li>
            )
          )}

        </ul>

        <a
          href={product.website}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Visit Product
        </a>

      </div>
    </motion.div>
  );
};

export default ProductCard;