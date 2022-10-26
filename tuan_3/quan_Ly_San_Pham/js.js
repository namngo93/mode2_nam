let listProduct = [];
display();

function add() {
    let name = document.getElementById('name').value;
    listProduct.push(name);
    display();
}

function display() {
    let html = ``;
    for (let i = 0; i < listProduct.length; i++) {
        html += `
        <tr>
            <td>${listProduct[i]}</td>
            <td><button onclick="showFormEdit(${i})">Edit</button></td>
            <td><button onclick="deleteProduct(${i})">Delete</button></td>
        </tr>`
    }
    document.getElementById('list').innerHTML = html;
    document.getElementById('quantity').innerHTML = listProduct.length + '';
    document.getElementById('name').value = ``;
}

function deleteProduct(index) {
    listProduct.splice(index,1);
    display();
}

function showFormEdit(index) {
    document.getElementById('form-edit').innerHTML = `
      <h3>Form edit</h3>
      <input type="text" placeholder="Edit Product" id="name-edit">
      <button onclick="edit(${index})">Save</button>`;
    let name = listProduct[index];
    document.getElementById('name-edit').value = name;
}

function edit(index){
    let nameEdit = document.getElementById('name-edit').value;
    listProduct[index] = nameEdit;
    document.getElementById('form-edit').innerHTML = ``;
    display();
}