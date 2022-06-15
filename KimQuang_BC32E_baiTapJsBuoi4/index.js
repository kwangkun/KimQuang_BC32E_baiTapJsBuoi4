// Bài 1:
document.getElementById('btn_b1').onclick = function () {
    // Input: Nhập vào 3 số nguyên a, b, c
    var a = Number(document.getElementById('soThu1').value);
    var b = Number(document.getElementById('soThu2').value);
    var c = Number(document.getElementById('soThu3').value);

    // Output: Hiển thị kết quả (string)
    var ketQua_b1 = '';

    // Process: So sánh điều kiện If Else
    if (a > b && a > c && b > c) {
        ketQua_b1 = c + '<' + b + '<' + a;

    } else if (a > b && c > b && c < a) {
        ketQua_b1 = b + '<' + c + '<' + a;

    } else if (a > b && c > a) {
        ketQua_b1 = b + '<' + a + '<' + c;

    } else if (b > a && b > c && a > c) {
        ketQua_b1 = c + '<' + a + '<' + b;

    } else if (b > c && c > a) {
        ketQua_b1 = a + '<' + c + '<' + b;

    } else {
        ketQua_b1 = a + '<' + b + '<' + c;
    };

    document.getElementById('ketQua_b1').innerHTML = ketQua_b1;
};

// Bài 2:
document.getElementById('btn_b2').onclick = function () {

    // Input: Chọn thành viên trong gia đình
    var thanhVien = document.getElementById('select').value;

    // Output: Hiển thị lời chào (string)
    var loiChao = '';

    // Process: So sánh điều kiện If Else

    if (thanhVien == 'B') {
        loiChao = 'Xin chào Bố!';

    } else if (thanhVien == 'M') {
        loiChao = 'Xin chào Mẹ!';

    } else if (thanhVien == 'AT') {
        loiChao = 'Xin chào Anh Trai!';

    } else if (thanhVien == 'EG') {
        loiChao = 'Xin chào Em Gái!';

    } else {
        loiChao = 'Hãy chọn thành viên để được chào nha ( ͡° ͜ʖ ͡°)';
    };

    document.getElementById('ketQua_b2').innerHTML = loiChao;
};

// Bài 3:
document.getElementById('btn_b3').onclick = function () {

    // Input: Nhập vào 3 số nguyên
    var aa = Number(document.getElementById('soThu1_b3').value);
    var bb = Number(document.getElementById('soThu2_b3').value);
    var cc = Number(document.getElementById('soThu3_b3').value);

    // Output: Hiển thị số lượng số chẵn, số lẻ (string)
    var count = 0;

    // Process: So sánh điều kiện If
    if (aa % 2 == 0) {
        count++;
    };

    if (bb % 2 == 0) {
        count++;
    };

    if (cc % 2 == 0) {
        count++;
    };

    document.getElementById('ketQua_b3').innerHTML = 'Có ' + count + ' số chẵn' + ', ' + (3 - count) + ' số lẻ';
};

// Bài 4:
document.getElementById('btn_b4').onclick = function () {

    // Input: Nhập vào độ dài 3 cạnh tam giác
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var canh3 = Number(document.getElementById('canh3').value);

    // Output: Cho ra kết quả dự đoán (string)
    var ketQua_b4 = '';

    // Process:
    if (canh1 == canh2 && canh1 == canh3 && canh2 == canh3) {
        ketQua_b4 = 'Tam giác đều';

    } else if (
        (canh1 == canh2 && (canh1 && canh2) != canh3) ||
        (canh1 == canh3 && (canh1 && canh3) != canh2) ||
        (canh2 == canh3 && (canh2 && canh3) != canh1)
    ) {
        ketQua_b4 = 'Tam giác cân';

    } else if (
        (canh3 * canh3) == (canh1 * canh1) + (canh2 * canh2) ||
        (canh2 * canh2) == (canh1 * canh1) + (canh3 * canh3) ||
        (canh1 * canh1) == (canh2 * canh2) + (canh3 * canh3)
    ) {
        ketQua_b4 = 'Tam giác vuông';

    } else {
        ketQua_b4 = 'Tam giác khác';
    };

    document.getElementById('ketQua_b4').innerHTML = ketQua_b4;
};