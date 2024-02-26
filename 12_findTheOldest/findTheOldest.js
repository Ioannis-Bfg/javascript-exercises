const findTheOldest = function(people) {
    let oldestYear=0;
    let oldest={};

    people.forEach(person => {
        if('yearOfDeath' in person){
            let years=+person['yearOfDeath'] - +person['yearOfBirth'];
            if(years>oldestYear || oldestYear===0){
                oldestYear=years;
                oldest=person;
            }
        }else{ 
            let now=new Date().getFullYear() ;
            let years_d= +now - +person['yearOfBirth'];
            if(years_d>oldestYear || oldestYear===0){
                oldestYear=years_d;
                oldest=person;
            }
        }
        
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
