let tensp = ["Nguyễn Văn Nam", 'Mai Bá Tùng', 'Nguyễn Tiến Đạt', 'Đặng Thế Trung', 'Đào Thế Linh', 'Nguyễn Văn Long', 'Nguyễn Tiến Lâm', 'Ngô Văn Tiến'];
let sout;
let yearBirth = [1990,1991,1992,1993,1994,1995,1996,1997];
let gentle = ['Nam','Nam','Nam','Nam','Nam','Nam','Nam','Nam'];
function vebang() {
    sout = "<table border='1' width='300' cellspacing='0' cellpadding='3' style='margin-left: 50px; margin-top: 30px; '>"
    for (i = 0; i < tensp.length; i++) {
        sout += "<tr class='a'>" +
                "<td>" + tensp[i] + "</td>" +
                "<td>" + yearBirth[i] + "</td>" +
                "<td>" + gentle[i] + "</td>" +
                "<td><button onclick='suasp("+ i +")'>edit</button></td>" +
                "<td><button onclick=" + "xoasp(" + i + " )>Delete</button></td>" + "</tr>";
    }
    sout = sout + "</table>";
    document.getElementById('litsp').innerHTML = sout;
}

vebang()

function themsp() {
    let n = document.getElementById("sp").value;
    let ns = +document.getElementById("ns").value;
    let gt = document.getElementById("gt").value;
    tensp.push(n);
    yearBirth.push(ns);
    gentle.push(gt);
    vebang();
}

function xoasp(i) {
    tensp.splice(i, 1)
    vebang()
}

function suasp(i) {
    document.getElementById('showFormEdit').innerHTML = `
      <h3>Form edit</h3>
      <input type="text" placeholder="Edit Product" id="name-edit">
          <button onclick = "edit(${i})">Save</button>`;
    let name = tensp[i]
    document.getElementById('name-edit').value = name;
}

function edit(i) {
    let nameEdit = document.getElementById('name-edit').value;
    tensp[i] = nameEdit;
    document.getElementById('litsp').innerHTML = ``;
    vebang();
}