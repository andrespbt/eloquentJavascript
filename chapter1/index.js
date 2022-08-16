/* Looping a triangle: Write a loop that makes seven calls to console.log to output a triangle*/

function triangle() {
  let char = "*";

  for (let i = 0; i < 7; i++) {
    console.log(char);
    char += "*";
  }
}

// triangle();

/* FizzBuzz: write a program that uses console.log to print all numbers from 1 to 100, with two exceptions. For
numbers divisible by 3, print "Fizz" instead of the number, and for number divisible by 5(and not 3), print
buzz instead. When u have that working modify it and print "FizzBuzz" for numbers that are divisible by both 3 and 5*/

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   console.log("FizzBuzz");
    // } else if (i % 3 === 0) {
    //   console.log("Fizz");
    // } else if (i % 5 === 0 && i % 3 !== 0) {
    //   console.log("Buzz");
    // } else {
    //   console.log(i);
    // }

    i % 3 === 0 && i % 5 === 0
      ? console.log("FizzBuzz")
      : i % 3 === 0
      ? console.log("Fizz")
      : i % 5 === 0
      ? console.log("Buzz")
      : console.log(i);
  }
}

// fizzBuzz();

/* Chessboard: Write a program that creates a stirng that represents an 8x8 grid, usin newline characters
to separate lines. At each position of the grid there is either a space or a "#" character when u have this
pattern, define a binding size = 8 and change the program so that it works for any size*/

function chessBoard() {
  let pattern = "";
  let width = 10;
  let height = 10;

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      j % 2 === 0 ? (pattern += "*") : (pattern += " ");
    }
    pattern += "\n";
  }
  console.log(pattern);
}

// chessBoard();

// Uncomment functions names and open console on browser to check results
