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
      input: {
        about: "frontend/about.tsx",
        "site-effects": "frontend/site-effects.tsx",
      },
      output: { entryFileNames: "[name].js", chunkFileNames: "[name]-[hash].js", assetFileNames: "about.[ext]" },
    },
  },
});
