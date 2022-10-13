 let userName = prompt("Who's there?", '');
if (userName === 'Admin'){
    let pass = prompt('enter pass')
    if(pass === '123')
    {
        alert('Welcome')
    }
    else if(pass=== ''){
        alert('Canceled')
    }
}
else if(userName === ''){
    alert('Canceled')

}
else {
    alert('I dont know you')
}
