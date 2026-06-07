require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./src/models/auth");

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Admin.deleteMany({});
    console.log("Cleared existing admins");

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    const admin = await Admin.create({
      name: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log(" Admin created successfully:");
    console.log("   Email   :", admin.email);
    console.log("   Password: Admin@123");
    console.log("   ID      :", admin._id);

    process.exit(0);
  } catch (error) {
    console.error(" Seed failed:", error.message);
    process.exit(1);
  }
};

seedAdmin();
