#!/usr/bin/env node
const { execSync } = require("child_process");

// Provide a valid fallback connection string if DATABASE_URL is not set during container build
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "postgresql://placeholder:placeholder@localhost:5432/placeholder";
}

try {
  execSync("npx prisma generate", { stdio: "inherit", env: process.env });
} catch (err) {
  console.error("Safe prisma generate failed:", err);
  process.exit(1);
}
