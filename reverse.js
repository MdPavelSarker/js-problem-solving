function reverseString(str){
    var reverse = "";
    for(i = 0; i <str.length; i++){
        var char =str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien! Where Are You?";
var forAlien = reverseString(statement);
console.log(forAlien);


