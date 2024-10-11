let arrays = [
  "2",
  2,
  "a",
  3,
  6,
  true,
  false,
  [1, "2", [1, "a", "b", true, false], "a"],
  false,
  true,
];

var strings = 0;
var numbers = 0;
var booleans = 0;

function array(inputArray) {
  for (var i = 0; i < inputArray.length; i++) {
    var element = inputArray[i];
    if (typeof element === "string") {
      strings++;
    } else if (typeof element === "number") {
      numbers++;
    } else if (typeof element === "boolean") {
      booleans++;
    } else if (Array.isArray(element)) {
      array(element);
    }
  }
}

array(arrays);

alert("Quantity of Numbers in the Array is: " + numbers);
alert("Quantity of Strings in the Array is: " + strings);
alert("Quantity of Booleans in the Array is: " + booleans);