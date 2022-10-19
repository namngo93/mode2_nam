
    let mystring = window.prompt();
    let arstring = mystring.toLowerCase();
    let xep = /\s+/;
    let arrayString = arstring.split(xep);
    for (let i =  0; i < arrayString.length; i++){
        arrayString[i] =  arrayString[i][0].toUpperCase() + arrayString[i].slice(1);
    }
    document.write(arrayString.join(" "));
