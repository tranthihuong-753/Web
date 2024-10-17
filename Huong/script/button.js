// Gán sự kiện onclick cho button
document.getElementById("buttontracuudatphong").onclick = function() {
    window.location.href = 't.html';
};

function toggleMenu(e) {
    var menuList = document.getElementById(e);
    // Kiểm tra thuộc tính display để hiển thị hoặc ẩn danh sách
    if (menuList.style.display === "none" || menuList.style.display === "") {
        menuList.style.display = "block"; // Hiện danh sách
    } else {
        menuList.style.display = "none";  // Ẩn danh sách
    }
}
// Hàm để thay đổi nội dung của nút button khi chọn mục 
function chonPhong(phong) {
    var button = document.getElementById('chonPhongBtn');
    button.innerHTML = phong + '   ▼';  // Thay đổi nội dung nút
    toggleMenu('listphong'); // Ẩn danh sách sau khi chọn
}


