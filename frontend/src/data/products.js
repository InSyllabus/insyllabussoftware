import insyllabusImage from "../assets/images/products/InSyllabus.jpeg";
import ridotagImage from "../assets/images/products/RidoTag.jpeg";

import insyllabusSearch from "../assets/images/products/insyllabus-search.png";
import insyllabusUniversities from "../assets/images/products/insyllabus-universities.png";
import insyllabusProfessional from "../assets/images/products/insyllabus-professional.png";

import ridotagProfile from "../assets/images/products/ridotag-profile.png";
import ridotagPayment from "../assets/images/products/ridotag-payment.png";
import ridotagPlan from "../assets/images/products/ridotag-plan.png";

export const products = [
  {
    id: 1,
    name: "InSyllabus",
    category: "Education Technology",
    image: insyllabusImage,
    description: "Learning & Career Development Platform",

    features: [
      "Online Learning",
      "Skill Development",
      "Certification Programs",
    ],

    screens: [insyllabusSearch, insyllabusUniversities, insyllabusProfessional],

    website: "https://insyllabus.com",
  },

  {
    id: 2,
    name: "RidoTag",
    category: "Safety Solutions",
    image: ridotagImage,

    description: "Smart QR-Based Vehicle Safety Solution",

    features: [
      "Emergency Contact Access",
      "Vehicle Identification",
      "Privacy Protection",
    ],

    screens: [ridotagProfile, ridotagPayment, ridotagPlan],

    website: "https://ridotag.com",
  },
];
