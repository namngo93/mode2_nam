let a = [-3,5,1,3,2,10];
let max = a[0];
let index = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
        index = i;
        max =a[i];
    }
}
alert("max" + max + " at position " + index);