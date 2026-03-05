/*
 * You have an unsorted array of n + 1 integers, ranging from 1 to n,
 * with an extra number that is a duplicate. Find and return that number.
 * If no duplicates are found, return 0.
 * ex: [1,5,4,3,6,2,4,7] should return 4
 */

// O(n) space complexity
export const duplicateNumber = (array: number[]): number => {
  let start = array[0];
  for (let i = 1; i < array.length; i++) {
    if (start === array[i]) return array[i];
  }
  return 0;
};

/*
 * Extension:
 * You have an unsorted array of n + 1 positive integers, ranging from k to k +
 * (n - 1), with an extra number that is a duplicate.
 * Find and return the duplicate. Do this in O(n) time and O(1) space complexity.
 * If no duplicates are found, return 0.
 * ex: [3, 4, 7, 6, 8, 5, 6] should return 6
 */

// O(1) space complexity
export const duplicateNumberAdvanced = (array: number[]): number => {
  
};
