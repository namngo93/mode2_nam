arr =["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
arr2 =["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]
let b = prompt('Nhập tên ngôi sao: ');
function add(b){
    for (let i = 0; i < arr.length;i++){
        if (arr[i] === b){
            alert(b + 'thuộc chòm sao' + arr2[i]);
            return;
        }
    }
    return alert('Không tìm thấy chòm sao nào');
}
add(b);