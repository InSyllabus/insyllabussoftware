import React from "react";

import educationTechnologyImg from "../../../assets/images/Product categories/education_technology.png";
import safetySolutionsImg from "../../../assets/images/Product categories/safety_solutions.png";
import aiSolutionsImg from "../../../assets/images/Product categories/ai_solutions.png";

import "./ProductCategories.css";

const categories = [
  {
    image: educationTechnologyImg,
    title: "Education Technology",
    description:
      "Digital learning platforms, skill development solutions, and educational ecosystems.",
  },
  {
    image: safetySolutionsImg,
    title: "Safety Solutions",
    description:
      "Smart security products, emergency communication, and public safety systems.",
  },
  {
    image: aiSolutionsImg,
    title: "AI Solutions",
    description:
      "AI-powered automation, intelligent workflows, and future-ready platforms.",
  },
];

const ProductCategories = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Product Categories</h2>

          <p className="section-subtitle">
            Innovative technology solutions designed to solve real-world
            challenges and create meaningful impact.
          </p>
        </div>

        <div className="row g-4">
          {categories.map((category, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="category-card">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />

                <h4>{category.title}</h4>

                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;