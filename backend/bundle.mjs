import { buildSync } from "esbuild";

buildSync({
  entryPoints: ["./src/index.ts"],
  tsconfig: "./tsconfig.json",
  format: "esm",
  bundle: true,
  minify: false,
  platform: "node",
  outfile: "dist/index.mjs",
  alias: {
    stream: "node:stream",
    fs: "node:fs",
    crypto: "node:crypto",
    util: "node:util",
    process: "node:process",
    buffer: "node:buffer",
    events: "tseep",
    "node:events": "tseep",
    timers: "node:timers",
  },
  charset: "utf8",
  ignoreAnnotations: false,
  resolveExtensions: [".mts", ".ts", ".js", ".mjs", ".cts", ".cjs"],
  external: [
    "uWebSockets.js",
    "@sinclair/typebox",
    "mrmime",
    "yaml"
  ],
  target: "node22",
});
