const diff = (arr1, arr2) => [
    ...arr1.filter(e => !arr2.includes(e)),
    ...arr2.filter(e => !arr1.includes(e))
  ];
  
  const sym = (...args) => [...new Set(args.reduce(diff))];
  
  
  console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
  
  
  console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // should return [3,4,5]
  console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])) //should return [1, 4, 5]

  /*
  Code Explanation

    The main function sym() reduces given arrays utilising helper function diff() to a single array.
    Also, it temporary converts the result to Set to remove duplicates.

    The function diff() returns the symmetric difference of two arrays by 
    picking out elements in parameterised arrays; arr1 and arr2.
*/

