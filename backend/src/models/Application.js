const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    // Personal Details
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    currentLocation: {
      type: String,
      trim: true,
    },

    // Education
    education: {
      degree: {
        type: String,
        required: true,
      },

      college: {
        type: String,
        required: true,
      },

      graduationYear: {
        type: Number,
        required: true,
      },

      cgpaOrPercentage: {
        type: String,
        default: "",
      },
    },

    // Experience
    yearsOfExperience: {
      type: Number,
      default: 0,
    },

    currentCompany: {
      type: String,
      trim: true,
      default: "",
    },

    currentCTC: {
      type: String,
      trim: true,
      default: "",
    },

    expectedCTC: {
      type: String,
      trim: true,
      default: "",
    },

    noticePeriod: {
      type: String,
      trim: true,
      default: "",
    },

    // Profiles
    linkedinProfile: {
      type: String,
      trim: true,
      default: "",
    },

    portfolioOrGithub: {
      type: String,
      trim: true,
      default: "",
    },

    // Resume
    resume: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Application", applicationSchema);