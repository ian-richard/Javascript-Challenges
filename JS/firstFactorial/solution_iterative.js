function FirstFactorial(num) { 

    {
        var rval=1;
        for (var i = 2; i <= num; i++)
            rval = rval * i;
        return rval;
    }
    
    
    }
       
    const num = 4;
    console.log(FirstFactorial(num));