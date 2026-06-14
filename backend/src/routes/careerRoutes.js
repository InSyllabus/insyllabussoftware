const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadResume");
const {
  createJob,
  getAllJobs,
  getPublicJobs,
  getJobById,
  updateJob,
  deleteJob,
  applyForJob,
  getApplications,
} = require("../controllers/careerController");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");

router.post("/admin/jobs", protect, authorizeRoles("admin"), createJob);
router.get("/admin/jobs", protect, authorizeRoles("admin"), getAllJobs);
router.put("/admin/jobs/:id", protect, authorizeRoles("admin"), updateJob);
router.delete("/admin/jobs/:id", protect, authorizeRoles("admin"), deleteJob);
router.get(
  "/admin/applications",
  protect,
  authorizeRoles("admin"),
  getApplications,
);

router.get("/", getPublicJobs);

router.post("/apply", upload.single("resume"), applyForJob);

router.get("/:id", getJobById);

module.exports = router;