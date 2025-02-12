import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const entry = path.resolve(__dirname, "./src/index.tsx");

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: entry,
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-dom/client", "react/jsx-runtime"],
      output: {
        dir: "./dist",
      },
    },
  },
});