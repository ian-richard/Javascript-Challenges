function squareSum_og(numbers){
    var total = 0;
    numbers.forEach(e => total += (e * e))
    return total;  
  }

// reduce alt

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

  console.log(squareSum([1,2]) === 5)
  console.log(squareSum([0, 3, 4, 5]) === 50)
  console.log(squareSum([])=== 0)
  console.log(squareSum([-1,-2]) === 5)
  console.log(squareSum([-1,0,1]) === 2)