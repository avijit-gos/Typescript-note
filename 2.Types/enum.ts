/** @format */

// ******** ENUM ******** //
enum directions {
  North = 1,
  East,
  West,
  South,
}

let NorthDir = directions.North;
console.log(NorthDir); // 1
let EastDir = directions.East;
console.log(EastDir); // 2
let WestDir = directions.West;
console.log(WestDir); // 3
let SouthDir = directions.South;
console.log(SouthDir); // 4

enum result {
  subjectOne = "Math",
  numberOne = 40,
  subjectTwo = "English",
  numberTwo = 60,
}
console.log(result.numberOne, result.subjectOne);
