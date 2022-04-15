alert("Chào mừng bạn đã đến với web!!");
// var chaoHoi = document.getElementById('chaoNguoiXem');
// var hoiTen = prompt('Tên của bạn là gì?');
// if (hoiTen.length != 0) {
//     chaoHoi.innerHTML = 'Chào bạn' + ' ' + hoiTen + ',' + ' ' + ', bạn hãy chọn loại bánh mà mình thích nhé'
// }


function chaoNguoiDangXem() {
    let chaoHoi = document.getElementById('chaoNguoiXem');
    let hoiTen = prompt('Tên của bạn là gì?');
    if (hoiTen.length != 0) {
        chaoHoi.innerHTML = 'Chào bạn' + ' ' + hoiTen + ',' + ' ' + ', bạn hãy chọn loại bánh mà mình thích nhé'
    }
}
chaoNguoiDangXem();