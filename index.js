const multiplesOfSixAndNine = () => {
  for (let n = 1; n <= 100; n++) {
    if (n % 6 === 0 && n % 9 === 0) {
      console.log(n);
    }
  }
};

// multiplesOfSixAndNine();

const greaterNum = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 === num2) {
      return "both integers are equal";
    } else if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    return null;
  }
};

console.log(greaterNum(10, 7)); //10
console.log(greaterNum("10", 7)); //null
console.log(greaterNum(1.14, 1.14)); //"both equal"
console.log(greaterNum("21", "21")); //null
