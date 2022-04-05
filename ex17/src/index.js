function inverseWhile(){

    var fiveNumbers = "";
    var i = 5;
    
    while( i >= 0){
       
        (i === 0)? fiveNumbers+=i : fiveNumbers += i + ",";
        i--;
     
        }
        return fiveNumbers;
    }
  
 


console.log(inverseWhile());

module.exports = inverseWhile;