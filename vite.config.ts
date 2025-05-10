import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

process.env.VITE_PLUGIN_STATIC_COPY_FORCE = "true";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: ".htaccess", // relative path works too
          dest: ".",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "new-oxygen",
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: ["swiper/react", "swiper"],
  },
});
