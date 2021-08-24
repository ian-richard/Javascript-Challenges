const findSmallestInt = args =>{
      args.sort((a, b) => a - b  )
        return args[0]
      }  

//or use Math.min

const mathMinSol = (args) =>{
    return Math.min(...args)
  }
    
const test = [34, 15, 88, 2];

const test1 = [34, -345, -1, 100]

console.log(mathMinSol(test1))