import ProductsHero from "../components/products/ProductsHero/ProductsHero";
import ProductGrid from "../components/products/ProductGrid/ProductGrid";
import ProductCategories from "../components/products/ProductCategories/ProductCategories";
import ProductRoadmap from "../components/products/ProductRoadmap/ProductRoadmap";
import WhyProducts from "../components/products/WhyProducts/WhyProducts";
import CTASection from "../components/common/CTASection/CTASection";
import analyticsImage from "../assets/images/hero/hero-analytics.jpg";
import "./Pages.css"

const Products = () => {
  return (
    <>
      <ProductsHero />
      <ProductGrid />
      <section className="product-showcase">
        <div className="container">
          <img
            src={analyticsImage}
            alt="Analytics Dashboard"
            className="showcase-image"
          />
        </div>
      </section>

      <ProductCategories />
      {/* <ProductRoadmap /> */}
      <WhyProducts />
      <CTASection />
    </>
  );
};

export default Products;
