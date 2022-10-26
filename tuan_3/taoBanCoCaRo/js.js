let b = document.getElementById('carogame');
let data = '';
let board = [];
var h = 1;
//Add các phần tử vào mảng hai chiều
for (let i = 0; i < 5; i++){
    board[i] = new Array('|_|','|_|','|_|','|_|','|_|');
}

//Xử lý hiển thị ban đầu
for(let i = 0; i<5; i++){
    data += '<br>';
    for (let j = 0; j < 5; j++){
        data += board[i][j] + '&ensp;';
    }
}
b.innerHTML = data;

//Sự kiện khi clink vào button change value

function ChangeValue() {
    data = '';
    let positionX = parseInt(prompt("Enter the position of x"));
    let positionY = parseInt(prompt("Enter the position of y"));
    if(h % 2 == 0){
        board[positionX][positionY] = 'X';
    }else {
        board[positionX][positionY] = 'O';
    }
    h++;
    for (let i = 0; i<5; i++){
        data += '<br>';
        for (let j = 0; j<5; j++){
            data += board[i][j] + '&ensp;' + '&ensp;' + '&ensp;';
        }
    }
    b.innerHTML = data;

    //Xử lý x hay o thắng
    for(let i=0; i<5; i++){
        for (let j=0; j<5; j++){
            if (board[i][j] === 'X' && board[i][j+1] === 'X' && board[i][j+2] === 'X' ||
                board[i][j] === 'X' && board[i+1][j] === 'X' && board[i+2][j] === 'X'){
                alert("X Thắng");
            }else if(board[i][j] === 'O' && board[i][j+1] === 'O' && board[i][j+2] === 'O' ||
                board[i][j] === 'O' && board[i+1][j] === '0' && board[i+2][j] === 'O'){
                alert("O Thắng");
            }
        }
    }
}