const convertToCelsius = function(num) {
  if(typeof num=='number'){
    let ctemp=(num-32)*5/9;
    ctemp=Math.round(ctemp*10)/10;
    return ctemp;
  }else {
    return 'ERROR';
  }
};

const convertToFahrenheit = function(n) {
  if(typeof n=='number'){
    let ftemp=(n*9/5)+32;
    ftemp=Math.round(ftemp*10)/10;
    return ftemp;
  }else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
