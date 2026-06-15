function TaoDoiTuongSanPham(hinhAnh, Ten, Gia, phanLoai) {
  var sanPham = new Object();
  sanPham.hinhAnh = hinhAnh;
  sanPham.Ten = Ten;
  sanPham.Gia = Gia;
  sanPham.phanLoai = phanLoai;

  sanPham.toJson = function () {
    var json = JSON.stringify(this);
    return json;
  };

  //   chuyen doi thanh doi tuong day du phuong thuc
  sanPham.fromJSON = function (json) {
    var doiTuongDayDu = new Object();
    // chuyen tu json ve object
    var doiTuong = JSON.parse(json);

    var doiTuongDayDu = TaoDoiTuongSanPham(
      doiTuong.hinhAnh,
      doiTuong.Ten,
      doiTuong.Gia,
      doiTuong.phanLoai
    );

    return doiTuongDayDu;
  };

  return sanPham;
  // chuyển danh sách đối tượng thành một đoạn html
}

function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham) {
  var HTMLDanhSachSanPham = "<li>";
  for (var i = 0; i < danhSachSanPham.length; i++) {
    var sanPham = danhSachSanPham[i];
    var htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanPham);
    HTMLDanhSachSanPham = HTMLDanhSachSanPham + htmlSanPham;
  }
  HTMLDanhSachSanPham = HTMLDanhSachSanPham + "</li>";
  return HTMLDanhSachSanPham;
}

function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
  var html = "";
  html += "<li>";
  html += '<div class="product-item">';
  html += '<div class="product-top">';
  html +=
    ' <a href="" class="product-thumb"><img src="' +
    sanPham.hinhAnh +
    '" alt="" /></a>';
  html += ' <a href="" class="buy-now">Mua ngay</a>';
  html += "  </div>";
  html += ' <div class="product-info">';
  html += '  <a href="" class="product-cat">' + sanPham.phanLoai + "</a>";
  html += '<a href="" class="product-name" >' + sanPham.Ten + "</a>";
  html += ' <div class="product-price">' + sanPham.Gia + "</div>";
  html += "</div>";
  html += "</div>";
  html += "</li>";
  return html;
}
