// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.
// Task

// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
// Example

// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    const start = numbers[0]
    const stop = numbers.pop();
    return range(start, stop, 1);
  }

  console.log(pipeFix([1,2,3,5,6,8,9])) //[1,2,3,4,5,6,7,8,9],'You must return an array from 1-9');
  console.log(pipeFix([1,2,3,12])) //,[1,2,3,4,5,6,7,8,9,10,11,12],'You must return an array from 1-12');
  console.log(pipeFix([6,9])) //,[6,7,8,9],'You must return an array from 6-9');
  console.log(pipeFix([-1,4])) //,[-1,0,1,2,3,4],'You must return an array from -1-4');
  console.log(pipeFix([1,2,3])) //,[1,2,3],'You must return an array from 1-3');
  console.log(pipeFix([2])) //,[2]);