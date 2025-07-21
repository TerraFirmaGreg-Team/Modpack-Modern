import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin'


export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    plugins: { 
      "js": js, 
      "@stylistic": stylistic
    }, 

    extends: ["js/recommended"], 
    languageOptions: { globals: globals.node, ecmaVersion: "ES2015" },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "@stylistic/comma-style": [1, "last"],
      "@stylistic/brace-style": [1, "1tbs"],
      "@stylistic/function-call-spacing": [1, "never"],
      "@stylistic/no-floating-decimal": "error",
      "@stylistic/arrow-spacing": [1, { "before": true, "after": true }],
      "@stylistic/block-spacing": [1, "always"],
      "@stylistic/keyword-spacing": [1, { "before": true, "after": true }],
      "@stylistic/dot-location": [1, "property"]
    }
  },
]);
