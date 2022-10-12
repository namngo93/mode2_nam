let diemtongket = prompt("Nhập vào điểm tổng kết: ");
if (diemtongket > 0)
    if (diemtongket >= 9 && diemtongket <=10) {
        alert("Chúc mừng, bạn đã tốt nghiệp loại Xuất sắc.");
    } else if (diemtongket < 9 && diemtongket >= 8) {
        alert("Chúc mừng, bạn đã tốt nghiệp loại Giỏi.");
    } else if (diemtongket < 8 && diemtongket >= 6) {
        alert("Chúc mừng, bạn đã tốt nghiệp loại Khá.");
    } else if (diemtongket < 6 && diemtongket >= 5) {
        alert("Bạn đã tốt nghiệp loại Trung bình.")
    } else if (diemtongket < 5) {
        alert("Rất tiếc, bạn đã không tốt nghiệp.")
    } else {
        alert("Không rõ điểm.")
    }