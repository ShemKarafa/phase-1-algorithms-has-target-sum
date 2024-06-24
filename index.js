function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(1n+1) remove constants, Big O time complexity is O(n)
*/

/* 
  Add your pseudocode here
  Calculate complement
  Check if complement exists in the seenNumbers set
  Add current number to seenNumbers set
  If sum is equal to target return true else false
*/

/*
  Add written explanation of your solution here
  Initialize an empty Set called seenNumbers
  Iterate through each number in the array
  For each number:
    -Calculate the complement by subtracting the current number from the target.
    -Check if the complement exists in the seenNumbers Set.
    -If the complement exists, return true.
    -Add the current number to the seenNumbers Set.
  If the loop completes without finding a pair that sums up to the target, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
}

module.exports = hasTargetSum;