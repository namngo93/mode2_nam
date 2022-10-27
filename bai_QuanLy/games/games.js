let arr = [];
let flag = 1;

class Board {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }

    draw() {
        let str = ``;
        for (let i = 0; i < this.row; i++) {
            arr[i] = [];
            str += `<tr>`;
            for (let j = 0; j < this.column; j++) {
                str += `<td><button style="background: white" id="${i}${j}" onclick="tick(${i},${j})" ></button></td>`;
                arr[i].push('');
            }
            str += `</tr><br>`;
        }
        document.getElementById('show').innerHTML = str;
    }

}

function tick(i, j) {
    if (flag === 0) {
        if (arr[i][j] !== 'X' && arr[i][j] !== 'O') {
            document.getElementById(`${i}${j}`).innerHTML = 'X';
            arr[i][j] = 'X'
            flag = 1
        } else alert('Choose another');


    } else {
        if (arr[i][j] !== 'X' && arr[i][j] !== 'O') {
            document.getElementById(`${i}${j}`).innerHTML = 'O';
            arr[i][j] = 'O';
            flag = 0
        } else alert('Choose another');
    }
    check(row, column);
    // console.log(arr)
}

function check(row, column) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (arr[i][j] === 'X') {
                if ((arr[i][j] === arr[i][j + 1] && arr[i][j + 1] === arr[i][j + 2] && arr[i][j + 2] === arr[i][j + 3] && arr[i][j + 3] === arr[i][j + 4])
                    || (arr[i][j] === arr[i + 1][j] && arr[i + 1][j] === arr[i + 2][j] && arr[i + 2][j] === arr[i + 3][j] && arr[i + 3][j] === arr[i + 4][j])
                    || (arr[i][j] === arr[i + 1][j + 1] && arr[i + 1][j + 1] === arr[i + 2][j + 2] && arr[i + 2][j + 2] === arr[i + 3][j + 3] && arr[i + 3][j + 3] === arr[i + 4][j + 4])
                    || (arr[i][j] === arr[i + 1][j - 1] && arr[i + 1][j - 1] === arr[i + 2][j - 2] && arr[i + 2][j - 2] === arr[i + 3][j - 3] && arr[i + 3][j - 3] === arr[i + 4][j - 4])) {
                    alert('X wins!');
                }
            }
            if (arr[i][j] === 'O') {
                if ((arr[i][j] === arr[i][j + 1] && arr[i][j + 1] === arr[i][j + 2] && arr[i][j + 2] === arr[i][j + 3] && arr[i][j + 3] === arr[i][j + 4])
                    || (arr[i][j] === arr[i + 1][j] && arr[i + 1][j] === arr[i + 2][j] && arr[i + 2][j] === arr[i + 3][j] && arr[i + 3][j] === arr[i + 4][j])
                    || (arr[i][j] === arr[i + 1][j + 1] && arr[i + 1][j + 1] === arr[i + 2][j + 2] && arr[i + 2][j + 2] === arr[i + 3][j + 3] && arr[i + 3][j + 3] === arr[i + 4][j + 4])
                    || (arr[i][j] === arr[i + 1][j - 1] && arr[i + 1][j - 1] === arr[i + 2][j - 2] && arr[i + 2][j - 2] === arr[i + 3][j - 3] && arr[i + 3][j - 3] === arr[i + 4][j - 4])) {
                    alert('O wins!');
                }
            }
        }
    }
}

function start() {
    row = +document.getElementById("row").value;
    column = +document.getElementById("column").value;
    let board = new Board(row, column);
    board.draw();
}

let row;
let column;