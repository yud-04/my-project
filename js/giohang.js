var keyLocalStorageItemGioHang = "danhSachItemGioHang";

// tạo ra đối tượng item giỏ hàng
// input idSanPham,soLuong
// ouput đối tượng item giỏ hàng
function taoDoiTuongGioHang(idSanPham, soLuong) {
  var itemGioHang = new Object();
  itemGioHang.idSanPham = idSanPham;
  itemGioHang.soLuong = soLuong;

  return itemGioHang;
}

// lấy ra toàn bộ item giỏ hàng được lưu trữ trong local storage
// output danh sách toàn bộ item lưu trữ trong local storage
function layDanhSachItemGioHang() {
  var danhSachItemGioHang = new Array();
  // b1: Lấy chuỗi json lưu trữ trong local stoage
  var jsonDanhSachItemGioHang = localStorage.getItem(
    keyLocalStorageItemGioHang
  );
  // b2:chuyển từ json qua danh sach item gio hang

  if (jsonDanhSachItemGioHang != null)
    danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);

  return danhSachItemGioHang;
}

// luu tru danhsach item gio hang
// input danh sach titem gio hangs
function luuVaoLocalStorage(danhSachItemGioHang) {
  var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);

  localStorage.setItem("danhSachItemGioHang", jsonDanhSachItemGioHang);
}
