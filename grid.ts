//import { promises as fsp } from "fs";

const format = (s: string): number[] => s.split("").map(e => parseInt(e));

const input = [
  "1",
  "56",
  "435",
  "134",
  "315",
  "343",
  "214",
  "302"
].map(e => format(e))

interface Target {
  x: number;
  y: number;
  i: number;
}

const T = input[0][0];
const N = input[1][0];
const M = input[1][1];
const startingTarget = {
  x: input[2][0],
  y: input[2][1],
  i: input[2][2]
}

const targets = input.slice(3).map(e => ({
  x: e[0],
  y: e[1],
  i: e[2]
});

const main = async () => {
  console.log({T,N,M});
  console.log(startingTarget);
  console.log(targets);
}

main();