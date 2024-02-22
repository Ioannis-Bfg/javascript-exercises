const sumAll = function(a,b) {
    let sum=0;
    if(typeof a==='number'&& typeof b==='number' && Math.sign(a)===1 && Math.sign(b)===1){
        if(a<b){
            for(a;a<=b;a++){
                sum+=a;
            }
        }else {
            for(b;b<=a;b++){
                sum+=b;
            }
        }

        return sum;    
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
