import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  base: "./",
  resolve: { alias: { "@": fileURLToPath(new URL(".", import.meta.url)) } },
  build: {
    outDir: "assets/react",
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: "frontend/about.tsx",
      output: { entryFileNames: "about.js", chunkFileNames: "[name]-[hash].js", assetFileNames: "about.[ext]" },
    },
  },
});
