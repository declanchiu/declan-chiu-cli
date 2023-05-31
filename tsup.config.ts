import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm"],
  splitting: false,
  
  esbuildOptions: (options) => {
    options.banner = {
      js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);",
    }
  }
})
