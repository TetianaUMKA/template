// розгалуження/умови
const value = 5;

if (value === 1) {
  console.log("one");
} else if (value === 2) {
  console.log("two");
} else if (value === 5) {
  console.log("good result");
} else {
  console.log("default");
}

switch (value) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 5:
    console.log("good result");
    break;
  default:
    console.log("default");
}

const dictationResult = 2;
const speakingTestResult = 5;
let examResult = dictationResult + speakingTestResult;

switch (true) {
  case examResult <= 6:
    console.log("bad result");
    break;
  case examResult === 7:
    console.log("not bad result");
    break;
  case examResult >= 8:
    console.log("good result");
    break;
  default:
    console.log("default");
}

// Області видимості

let a = 15;

if (true) {
  a = 25;
}
console.log(a);

let b = 15;

if (true) {
  let b = 1;
  b = 25;
}
console.log(b);

let c = 10;

if (true) {
  let c = 15;
  if (true) {
    c = 25;
  }
}
console.log(c);

let d = 10;

if (true) {
  let d = 15;
  if (true) {
    d = 25;
  }
  console.log(d);
}

let g = 10;

if (true) {
  g = 15;
  if (true) {
    g = 25;
  }
}
console.log(g);
