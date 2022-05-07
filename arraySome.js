function getArraySum(numbers){
    var sum = 0;
    for (var i = 0; i <numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
 
}
var numbers = [47, 59, 39, 62, 39, 13, 85, 65, 24, 28];
var result = getArraySum(numbers);
console.log("Total of the numbers :",result);

var total = getArraySum([43,50,39,98,89]);
console.log("Total Number is:",total);



/** 
var numbers = [47, 59, 39, 62, 39, 13, 85, 65, 24, 28];
var sum = 0;
for (var i = 0; i <numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log("Total sum of numbers is:",sum);
*/


