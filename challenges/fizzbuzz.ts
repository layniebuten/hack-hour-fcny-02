/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5,
"buzz" in place of numbers divisible by 5 but not by 3,
and "fizzbuzz" in place of numbers divisible by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

import { b } from 'vitest/dist/chunks/suite.d.FvehnV49.js';

const fizzbuzz = (num: number): (number | string)[] => {
  const arr: (number | string)[] = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      arr.push('fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      arr.push('buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push('fizzbuzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
};

/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5 or 7,
"buzz" in place of numbers divisible by 5 but not by 3 or 7,
"bazz" in place of numbers divisible by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisible by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisible by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisible by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisible by 3, 5, and 7.

fizzbuzzbazz(25);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22,
23, 'fizz', 'buzz']

*/

const fizzbuzzbazz = (num: number): (number | string)[] => {
  const arr: (number | string)[] = [];

  const byThree = (num: number): boolean => {
    return num % 3 === 0 ? true : false;
  };
  const byFive = (num: number): boolean => {
    return num % 5 === 0 ? true : false;
  };
  const bySeven = (num: number): boolean => {
    return num % 7 === 0 ? true : false;
  };

  for (let i = 1; i <= num; i++) {
    if (byThree(i) && !byFive(i) && !bySeven(i)) {
      arr.push('fizz');
    } else if (byFive(i) && !byThree(i) && !bySeven(i)) {
      arr.push('buzz');
    } else if (bySeven(i) && !byThree(i) && !byFive(i)) {
      arr.push('bazz');
    } else if (byThree(i) && byFive(i) && !bySeven(i)) {
      arr.push('fizzbuzz');
    } else if (byThree(i) && bySeven(i) && !byFive(i)) {
      arr.push('fizzbazz');
    } else if (byFive(i) && bySeven(i) && !byThree(i)) {
      arr.push('buzzbazz');
    } else if (byThree(i) && byFive(i) && bySeven(i)) {
      arr.push('fizzbuzzbazz');
    } else {
      arr.push(i);
    }
  }

  return arr;
};

export { fizzbuzz, fizzbuzzbazz };
