import ProductsHero from "../components/products/ProductsHero/ProductsHero";
import ProductGrid from "../components/products/ProductGrid/ProductGrid";
import ProductCategories from "../components/products/ProductCategories/ProductCategories";
import ProductRoadmap from "../components/products/ProductRoadmap/ProductRoadmap";
import WhyProducts from "../components/products/WhyProducts/WhyProducts";
import CTASection from "../components/common/CTASection/CTASection";

const Products = () => {
  return (
    <>
      <ProductsHero />
      <ProductGrid />
      <ProductCategories />
      {/* <ProductRoadmap /> */}
      <WhyProducts />
      <CTASection />
    </>
  );
};

export default Products;