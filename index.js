var fruitPrice = 35;
if(fruitPrice != 37){
    console.log("I will eat the fruits.");
}
else{
    console.log("I will eat others items.")

}

//  Another Example for condition

var gotJob = true;
var savingAmount = 5000;

if(gotJob == true && savingAmount > 50000){
    console.log('Congrts You Are On The Line!')

}
else if(gotJob == true){
    console.log('Wait for some time');

}

else{
    console.log('Sorry Dude Try Again!');

}


// Grade System

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}


var date = new Date();
console.log(date);``