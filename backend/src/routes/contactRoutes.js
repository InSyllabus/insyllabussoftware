const express = require("express");
const router = express.Router();

const {
  submitForm,
  getAllForms,
  deleteForm,
} = require("../controllers/contactController");

const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");

router.post("/submit", submitForm);
router.get("/all", protect, authorizeRoles("admin"), getAllForms);
router.delete("/:id", protect, authorizeRoles("admin"), deleteForm);

module.exports = router;
