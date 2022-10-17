let a = prompt("Enter a number: ");
let numbers = [-3,5,1,3,2,10];
for  (let i = 0; i < numbers.length; i++){
    if (a == numbers[i]){
        alert("a " + numbers[i] + " found at " + i);
    }
}
