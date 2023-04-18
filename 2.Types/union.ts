/** @format */

function addNumber(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" || typeof b === "string") {
    return a + "-" + b;
  } else {
    return "Invalid type";
  }
}

console.log(addNumber(1, 2)); // 3
