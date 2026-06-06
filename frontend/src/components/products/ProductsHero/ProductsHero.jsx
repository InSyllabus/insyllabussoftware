import { motion } from "framer-motion";
import "./ProductsHero.css";

const ProductsHero = () => {
  return (
    <section className="products-hero">
      <div className="container text-center">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          OUR PRODUCTS
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Building Products That Solve Real-World Problems
        </motion.h1>

        <p className="hero-description">
          From education technology to smart safety solutions, our products are designed to create measurable impact, improve experiences, and drive innovation.
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;
