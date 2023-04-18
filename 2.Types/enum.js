/** @format */
// ******** ENUM ******** //
var directions;
(function (directions) {
    directions[directions["North"] = 1] = "North";
    directions[directions["East"] = 2] = "East";
    directions[directions["West"] = 3] = "West";
    directions[directions["South"] = 4] = "South";
})(directions || (directions = {}));
var NorthDir = directions.North;
console.log(NorthDir); // 1
var EastDir = directions.East;
console.log(EastDir); // 2
var WestDir = directions.West;
console.log(WestDir); // 3
var SouthDir = directions.South;
console.log(SouthDir); // 4
var result;
(function (result) {
    result["subjectOne"] = "Math";
    result[result["numberOne"] = 40] = "numberOne";
    result["subjectTwo"] = "English";
    result[result["numberTwo"] = 60] = "numberTwo";
})(result || (result = {}));
console.log(result.numberOne, result.subjectOne);
