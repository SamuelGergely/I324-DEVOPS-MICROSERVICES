import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig({
  ...js.configs.recommended,
  rules: {
    ...js.configs.recommended.rules,
    "no-unused-vars": "warn",
    "no-console": "off",
  },
});
