const repeatString = function(string,num) {
    let text=''
    if(num>=0){
        for(let i=1;i<=num;i++){
            text=text+string;
        }
        return text;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
