require("esbuild")
  .build({
    entryPoints: ["./workers-site/index.mjs"],
    format: "esm",
    bundle: true,
    outfile: "dist/index.mjs",
  })
  .catch(() => process.exit(1));