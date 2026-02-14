const fs = require("fs");
const woff2 = require("woff2");

const inputPath = "./RoyaleMilanoRegular-DYXP3.otf";
const outputPath = "./RoyaleMilano.woff2";

const input = fs.readFileSync(inputPath);
const output = woff2.encode(input);
fs.writeFileSync(outputPath, output);

console.log("Font converted successfully to:", outputPath);