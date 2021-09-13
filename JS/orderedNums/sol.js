//recursion 

function getSum( a,b ){

    if(a == b) {
        return a
    }
    else if (a < b) {
        return a + getSum(a+1, b)
    } else {
        return a + getSum(a-1, b)
    };
}

// console.log(getSum(5,-1) === 14);
// console.log(getSum(505,4) ===127759);
// console.log(getSum(321,123) === 44178);



// Consider a simple function that adds the first N natural numbers. (e.g. sum(5) = 0 + 1 + 2 + 3 + 4 + 5 = 15).

// Here is a simple JavaScript implementation that uses recursion:

function recsum(a, b) {
    if (a === b) {
        return a;
    } else if ( a < b ) {
        return a + recsum(a + 1, b);
    }
    else { return b + recsum(a, b + 1)
    }
}

function recsum_og(x) {
    if (x === 0) {
        return 0;
    } else {
        return x + recsum(x - 1);
    }
}

console.log(recsum(5,-1) === 14);
console.log(recsum(505,4) ===127759);
console.log(recsum(321,123) === 44178);

/*
If you called recsum(5), this is what the JavaScript interpreter would evaluate:
https://stackoverflow.com/questions/33923/what-is-tail-recursion#37010

recsum(5)
5 + recsum(4)
5 + (4 + recsum(3))
5 + (4 + (3 + recsum(2)))
5 + (4 + (3 + (2 + recsum(1))))
5 + (4 + (3 + (2 + (1 + recsum(0)))))
5 + (4 + (3 + (2 + (1 + 0))))
5 + (4 + (3 + (2 + 1)))
5 + (4 + (3 + 3))
5 + (4 + 6)
5 + 10
15
 */

