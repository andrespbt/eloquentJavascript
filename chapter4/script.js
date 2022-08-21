/* 

------------------------- The sum of a range ------------------------- 

Write a range function that takes two arguments, start and end, and returns an array containing 
all the numbers from start up to (and including) end. 

Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.

As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].

*/

function range(num1, num2, num3) {
  let result = [];

  if (num3) {
    if (num1 < num2) {
      for (let i = num1; i <= num2; i += num3) {
        result = [...result, i];
      }
    } else if (num3 > 0) {
      for (let i = num1; i >= num2; i -= num3) {
        result = [...result, i];
      }
    } else {
      for (let i = num1; i >= num2; i += num3) {
        result = [...result, i];
      }
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      result = [...result, i];
    }
  }
  return result;
}

function sum(arrayNumbers) {
  return arrayNumbers.reduce((a, b) => a + b);
}

// console.log(range(10, 2, -2));

/* 

------------------------- Reversing an array ------------------------- 


Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?

*/

// Side effects functions are useful in more situations. Pure functions run faster

function reverseArray(array) {
  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result = [...result, array[i]];
  }
  return result;
}

function reverseArrayInPlace(array) {
  let j = 0;
  let temp;
  for (let i = array.length - 1; i >= 0; i--) {
    if (j < array.length / 2) {
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    j++;
  }
  return array;
}

// let array1 = ["s", "e", "r", "d", "n", "a"];
// let array2 = [4, "a", "a", "m", 4];
// console.log(reverseArrayInPlace(array2));

/*

------------------------- A list ------------------------- 

Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.


*/

function arrayToList(array) {
  result = {};
  last = {};
  temp = 0;

  for (let i = 0; i < array.length; i++) {
    temp = array[i];
    array[i] = {};
    array[i].value = temp;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    array[i + 1] ? (array[i].rest = array[i + 1]) : (array[i].rest = null);
  }
  result = array[0];
  return result;
}
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

/*

------------------------- Deep comparison ------------------------- 

Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties of objects to compare them.



*/

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
