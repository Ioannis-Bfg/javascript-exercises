const reverseString = function(string) {
    let text=string.split('');
    text=text.reverse();
    text=text.join('');
    return text;
};

// Do not edit below this line
module.exports = reverseString;
