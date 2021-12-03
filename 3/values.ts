import * as fs from "fs";

export const values = fs
  .readFileSync(`${__dirname}/input.txt`, "utf8")
  .split("\n")
  .map((value) => value.split("").map((value) => Number(value)));
