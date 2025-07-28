import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin'


export default defineConfig([
  { 
    files: ["kubejs/startup_scripts/**/*.js", "kubejs/server_scripts/**/*.js", "kubejs/client_scripts/**/*.js"],
    plugins: { 
      "js": js, 
      "@stylistic": stylistic
    }, 

    extends: ["js/recommended"], 
    languageOptions: { globals: globals.node, ecmaVersion: 2015 },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-unexpected-multiline": "off",
      "no-var": "warn",
      "prefer-template": "warn",
      "no-unreachable-loop": "warn",
      "no-useless-assignment": "warn",
      "no-self-compare": "warn",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "warn",
      "eqeqeq": "warn",
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
