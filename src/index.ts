import fs from "fs";

// read csv
const matches = fs
  .readFileSync("original.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((match) => {
    return match.split(",");
  });

// count manUnited wins
let manUnitedWins = 0;
for (const match of matches) {
  if (match[1] === "Man United" && match[5] === "H") manUnitedWins++;
  if (match[2] === "Man United" && match[5] === "A") manUnitedWins++;
}

console.log(manUnitedWins);
