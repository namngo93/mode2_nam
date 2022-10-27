let tensp = ["Nguyễn Văn Nam", 'Mai Bá Tùng', 'Nguyễn Tiến Đạt', 'Đặng Thế Trung', 'Đào Thế Linh', 'Nguyễn Văn Long', 'Nguyễn Tiến Lâm', 'Ngô Văn Tiến'];
let sout;
let yearBirth = [1990,1991,1992,1993,1994,1995,1996,1997];
let gentle = ['Nam','Nam','Nam','Nam','Nam','Nam','Nam','Nam'];
let number = ['210','209','203','201','202','212','213','216',];
let time = ['22.9.22-22.10.22','22.3.22-22.6.22','22.3.22-22.8.22','22.1.22-22.6.22','22.2.22-22.7.22','22.4.22-22.11.22','22.4.22-22.10.22','22.5.22-22.10.22',]
function showContent(i){
    sout = "<table border='1' width='700' cellspacing='0' cellpadding='3' style='margin-left: 50px; margin-top: 30px; '>"
    sout += "<tr class='a'>" +
        "<td>" + tensp[i] + "</td>" +
        "<td>" + yearBirth[i] + "</td>" +
        "<td>" + gentle[i] + "</td>" +
        "<td>" + number[i] + "</td>" +
        "<td>" + time[i] + "</td>" +
        "<td><button onclick='suasp("+ i +")'>edit</button></td>" +
        "<td><button onclick='xoasp(" + i + ")'>Delete</button></td>" + "</tr>" + "</table>";
    document.getElementById('hienthi').innerHTML = sout;
}

function search(){
    let searchName = document.getElementById('timkiem').value;
    for (let i = 0 ; i < tensp.length; i++){
        if (searchName === tensp[i]){
            showContent(i);
            break;
        }
    }
}
function xoasp(i) {
    tensp.splice(i, 1);
    document.getElementById('hienthi').innerHTML = ``;
}

function suasp(i) {
    document.getElementById('showFormEdit').innerHTML = `
      <div id="div2">
      <h3>Sửa Thông Tin</h3>
      <input type="text"  id="name-edit">
      <input type="text"  id="sn-edit">
      <input type="text"  id="gt-edit">
      <input type="text"  id="sop-edit">
      <input type="text"  id="tg-edit">
      <br>
          <button onclick = "edit(${i})">Save</button>
      </div>`;
    let name = tensp[i]
    let sn = yearBirth[i]
    let gt = gentle[i]
    let sop = number[i]
    let tg = time[i]
    document.getElementById('name-edit').value = name;
    document.getElementById('sn-edit').value = sn;
    document.getElementById('gt-edit').value = gt;
    document.getElementById('sop-edit').value = sop;
    document.getElementById('tg-edit').value = tg;
}

function edit(i) {
    let nameEdit = document.getElementById('name-edit').value;
    let snEdit = document.getElementById('sn-edit').value;
    let gtEdit = document.getElementById('gt-edit').value;
    let sopEdit = document.getElementById('sop-edit').value;
    let tgEdit = document.getElementById('tg-edit').value;
    tensp[i] = nameEdit;
    yearBirth[i] = snEdit;
    gentle[i] = gtEdit;
    number[i] = sopEdit;
    time[i] = tgEdit;
    document.getElementById('showFormEdit').innerHTML = ``;
}