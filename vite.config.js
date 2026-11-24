import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// base: "./" makes every asset URL relative, so the built site works from any
// GitHub Pages address (https://<user>.github.io/<repo>/) without editing this file.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
