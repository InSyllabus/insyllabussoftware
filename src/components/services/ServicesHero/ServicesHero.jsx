import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import aiAnimation from "../../../assets/animations/ai-animation.json";

import "./ServicesHero.css";

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="container text-center">
        <span className="section-tag">OUR SERVICES</span>

        <h1 className="hero-title">
          Custom Software Solutions Built For Growth
        </h1>

        <p className="hero-description">
          From websites and mobile apps to enterprise software and AI-powered automation, we build technology that helps businesses scale.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
