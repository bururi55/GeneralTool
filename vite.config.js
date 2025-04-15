import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/S4SInstrument/", // Укажите ваш базовый путь здесь
});
