var res = "";
var total = 1;
for (var i = 0; i < message.length - 1; i++){
    if (message.charAt(i) === message.charAt(i+1)){
        total++;
    } else if(total === 1){
        res.concat(message.charAt(i));    
    }
    else {
        res.concat(message.charAt(i)).concat(total);
        total = 1;
    }
    }
if(message.charAt(message.length -2)) != message.charAt(message.length -1)
    res.concat(message.charAt(message.length()-1));

    res.concat(message.charAt(message.length()-1)).append(total);
    
return res;
}