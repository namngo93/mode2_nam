function processConfirm(answer){
    let a = "";
    if (answer){
        a = "Hien cai gi cung duoc.";
    } else {
        a = "Maybe";
    }
    return a;
}
let b = confirm("Co the choi game?");
let c = processConfirm(b);
alert(c);