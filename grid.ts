// TYPESCRIPT CODE

type _P = {
  x: number;
  y: number;
  i: number;
}

type Target = _P & {
  dist: number;
}

const format = (s: string): number[] => s.split(",").map(e => parseInt(e));

/*const input = [
  "1",
  "8,14",
  "7,4,9",
  "4,7,5",
  "6,4,9",
  "3,0,6",
  "3,2,6",
  "5,5,9",
  "0,5,6",
  "1,4,8",
  "6,0,9",
  "4,0,7",
  "4,5,6",
  "0,4,6",
  "5,1,7",
  "1,5,5"
].map(e => format(e))*/
// 40
const input = [
  "1",
  "5,6",
  "4,0,4",
  "0,2,3",
  "2,1,5",
  "3,2,2",
  "3,0,2",
  "1,1,4"
].map(e => format(e))
// 10
/*const input = [
  "1,",
  "4,4",
  "1,0,1",
  "3,1,1",
  "2,2,2",
  "0,3,1",
].map(e => format(e))*/

const distance = (p: _P, q: _P) => Math.abs(p.x - q.x) + Math.abs(p.y - q.y);

const defineTarget = (p: _P, t: Target): Target => ({
  ...p,
  dist: distance(t, p)
})

const T = input[0][0];
const N = input[1][0];
const M = input[1][1];
const startingTarget: Target = {
  x: input[2][0],
  y: input[2][1],
  i: input[2][2],
  dist: 0
}

let currentTarget = startingTarget;
let targets = [startingTarget, ...input.slice(3).map(e => defineTarget({
  x: e[0],
  y: e[1],
  i: e[2]
}, currentTarget))];

const removeItem = (arr: Target[], item: Target): Target[] => {
  //console.log("--remove item--");
  const e = arr.find(e => e.x === item.x && e.y === item.y && e.i === item.i && e.dist === item.dist)!;
  const temp = arr.slice();
  const i = arr.indexOf(e);
  //console.log(i);
  temp.splice(i, 1);
  //console.log("--end--");
  return temp;
}

const replaceTarget = (): void => {
  const t = currentTarget;
  const target = targets.find(e => e.x === t.x && e.y === t.y)!;
  //console.log(target);
  target.i = t.i;
}

const getMin = (arr: Target[]): Target => {
  //console.log("-----------");
  //console.log(arr);
  let min: number = arr[0].dist;
  for (const e of arr) {
    if (e.dist < min) {
      min = e.dist;
    }
  }
  let filtered: Target[] = arr.filter(e => e.dist === min);
  if (filtered.length === 1) {
    return filtered[0];
  }
  //console.log("comparing x");
  min = filtered[0].x;
  for (const e of filtered) {
    if (e.x < min) {
      min = e.x;
    }
  }
  filtered = filtered.filter(e => e.x === min);
  if (filtered.length === 1) {
    return filtered[0];
  }
  //console.log("comparing y")
  min = filtered[0].y;
  for (const e of filtered) {
    if (e.y < min) {
      min = e.y;
    }
  }
  filtered = filtered.filter(e => e.y === min);
  return filtered[0];
};

let globalDistance: number = 0;

const main = async () => {
  const condition = (): boolean => targets.filter(e => e.i !== 0).length === 1;
  //console.log(targets);
  while (!condition()) {
    //console.log(targets);
    const filteredArray = removeItem(targets, currentTarget).filter(e => e.i > 0);
    console.log(filteredArray);
    currentTarget = getMin(filteredArray);
    console.log(currentTarget);
    //console.log(currentTarget);
    currentTarget.i--;
    globalDistance += currentTarget.dist;
    currentTarget.dist = 0;
    replaceTarget();
    targets = targets.map(e => defineTarget({x:e.x, y:e.y, i:e.i}, currentTarget))
    //console.log(targets);
    console.log(globalDistance);
    console.log("--------")
  }
  //globalDistance++;
  //console.log(targets);
  console.log(`Case #${T}: ${globalDistance}`);
}

main();