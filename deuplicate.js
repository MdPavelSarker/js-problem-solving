var name = [3, 6, 2, 13, 11, 15, 9, 3, 2, 11, 19, 39, 79, 13];
var uniqueName = [];

for ( var i = 0;  i<name.length; i ++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if( index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);


