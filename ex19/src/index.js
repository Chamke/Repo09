function myDoWhile(){

    var myNumbers = "";
    var i = 0;

    do{
    myNumbers += i + ", ";
    i++;
    }
    while(i < 9){
        (i === 9)? myNumbers += i : myNumbers += i + ", ";
        i++;
    }
    return myNumbers;
}

console.log(myDoWhile());

module.exports = myDoWhile;