function myForLoop1(){
    var evenNumbers = "" ;
for(i = 0; i <= 8; i++){
    if( i % 2 === 0){
       (i === 8)? evenNumbers += i : evenNumbers += i + ", ";
    }
    
}
return evenNumbers;
}
function myForLoop2(){
    var evenInverseNumbers = "";
    for (i = 8; i >= 0; i--){
        if(i % 2 === 0){
            (i === 0) ? evenInverseNumbers += i : evenInverseNumbers += i + ", "
        }
    }
    return evenInverseNumbers;
}



console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};