function RomanStringForMagnitude(number,magnitude,romanSigns){
    let romanString = "";
    //if 9,90, or 900
    if(number>=9*magnitude){
        romanString+=romanSigns[0]+romanSigns[2];
        number-=9*magnitude;
    }
    else{
        //if 4,40, or 400
        if(Math.floor(number/magnitude)===4){
            romanString+=romanSigns[0]+romanSigns[1];
            number-=magnitude*4;
        }
        //covers all other options
        else{
            if(number>=magnitude*5){
                romanString+=romanSigns[1];
                number-=5*magnitude;
            }
            while(number>=magnitude){
                romanString+=romanSigns[0];
                number-=magnitude;
            }
        }
    }
    return {number,romanString}
}
/**
 * Returns number transformed into roman numeral
 * @param {number} number Number to be transformed
 * @return {string} R
 */
const toRoman = function(number){

    if(typeof(number)!==typeof(0))
        throw new TypeError("Parameter is not a number");
    if(!Number.isInteger(number))
        throw new TypeError("Parameter is not an integer");
    if(number<1||number>3999)
        throw new RangeError("Value out of range - should be between 1 and 3999 inclusively");

    let romanString = "";

    while(number>=1000){
        romanString+="M";
        number-=1000;
    }

    const listOfRomans = ["I", "V", "X", "L", "C", "D", "M"];
    let q = 100;
    for(let i=4; i>=0; i-=2){
        if(number===0) break;
        const result = RomanStringForMagnitude(number, q, listOfRomans.slice(i,i+3));
        q/=10;
        number=result.number;
        romanString+=result.romanString;
    }

    return romanString;
};

module.exports=toRoman;