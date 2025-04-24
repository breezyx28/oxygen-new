import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "new-oxygen", // Change 'dist' to 'new-oxygen'
    emptyOutDir: true, // Clears the directory before build
  },
  optimizeDeps: {
    include: ["swiper/react", "swiper"],
  },
});
