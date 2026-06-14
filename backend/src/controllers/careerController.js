const Job = require("../models/Job");
const Application = require("../models/Application");

// Create Job
exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Jobs (Admin)
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Active Jobs (Public)
exports.getPublicJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      isActive: true,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Job
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Job
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Apply for Job
exports.applyForJob = async (req, res) => {
  try {
    const {
      jobId,
      fullName,
      email,
      phone,
      currentLocation,
      degree,
      college,
      graduationYear,
      cgpaOrPercentage,
      yearsOfExperience,
      currentCompany,
      currentCTC,
      expectedCTC,
      noticePeriod,
      linkedinProfile,
      portfolioOrGithub,
    } = req.body;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required",
      });
    }

    if (
      !jobId ||
      !fullName ||
      !email ||
      !phone ||
      !degree ||
      !college ||
      !graduationYear
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const existingApplication = await Application.findOne({
      job: jobId,
      email: email.toLowerCase(),
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this position",
      });
    }

    if (!job.isActive) {
      return res.status(400).json({
        success: false,
        message: "This position is no longer accepting applications",
      });
    }

    const application = await Application.create({
      job: jobId,

      fullName,
      email,
      phone,
      currentLocation,

      education: {
        degree,
        college,
        graduationYear,
        cgpaOrPercentage,
      },

      yearsOfExperience,
      currentCompany,
      currentCTC,
      expectedCTC,
      noticePeriod,

      linkedinProfile,
      portfolioOrGithub,

      resume: `/uploads/resumes/${req.file.filename}`,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Applications (Admin)
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("job", "title location employmentType")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
