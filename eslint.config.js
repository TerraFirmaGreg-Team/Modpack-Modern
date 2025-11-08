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
    languageOptions: { globals: globals.node, ecmaVersion: 2020 },
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
      "no-constant-condition": "warn",
      "no-duplicate-case": "error",
      "no-empty": "warn",
      "no-empty-pattern": "warn",
      "no-ex-assign": "error",
      "no-fallthrough": "warn",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-unsafe-negation": "error",
      "no-useless-catch": "warn",
      "no-useless-escape": "warn",
      "use-isnan": "error",
      "valid-typeof": "error",
      "curly": ["warn", "multi-line"],
      "default-case-last": "warn",
      "no-else-return": "warn",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-lone-blocks": "warn",
      "no-multi-spaces": "warn",
      "no-return-assign": "warn",
      "no-useless-return": "warn",
      "no-with": "error",
      "prefer-const": "warn",
      "prefer-arrow-callback": "warn",
      "no-useless-concat": "warn",
      "yoda": ["warn", "never"],
      
      "@stylistic/comma-style": [1, "last"],
      "@stylistic/function-call-spacing": [1, "never"],
      "@stylistic/no-floating-decimal": "error",
      "@stylistic/arrow-spacing": [1, { "before": true, "after": true }],
      "@stylistic/keyword-spacing": [1, { "before": true, "after": true }],
      "@stylistic/dot-location": [1, "property"],
      "@stylistic/comma-dangle": [1, "never"]
    }
  },
]);
