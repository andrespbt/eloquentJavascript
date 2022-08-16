/* --------------- Minimun --------------- */

// Write a function min that takes two arguments and returns their minimun

function min(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

// console.log(min(3, 9));

/* --------------- Recursion --------------- */

/* Zero is even. One is odd. For any other number N, its evennes is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a single parameter(a positive, whole number)
 and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? can you think a way to fix this? */

function isEven(num) {
  if (num > 0) {
    if (num - 2 == 0) {
      return true;
    } else if (num - 2 == 1) {
      return false;
    }
    return isEven(num - 2);
  } else {
    if (num + 2 == 0) {
      return true;
    } else if (num + 2 == 1) {
      return false;
    }
    return isEven(num + 2);
  }
  //   if (num - 2 == 0) {
  //     return true;
  //   } else if (num - 2 == 1) {
  //     return false;
  //   }
  //   return isEven(num - 2);
}

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

/* --------------- Bean counting --------------- */

/* Write a function countsBs that takes a string as its only argument and returns a number that
indicates how many uppercase "B" characters there are in the string. 

Next write a function called countChar that behaves like countBs, except it takes a second argument that
indicates the character that is to be counted(rather than counting only uppercase "B" characters) Rewrite
countsBs to make use of this new function. */

function countBs(string, character) {
  let count = 0;
  if (character === undefined) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "B") {
        count++;
      }
    }
    return count;
  } else {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count++;
      }
    }
    return count;
  }
}

function countChar(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

console.log(countBs("Bibliography"));
console.log(countBs("Bibliography", "i"));
