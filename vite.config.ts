import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({  mode }) => {
  let base = "/";

  if (mode === "github") {
    base = "/personal-portfolio/";
  }

  return {
    plugins: [react()],
    base,
  };
});
