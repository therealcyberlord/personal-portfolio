import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/personal-portfolio/", // For GitHub Pages subdirectory
  };

  if (command === "serve") {
    config.base = "/"; // For local development (custom domain)
  }

  return config;
});
