function TaoDoiTuongSanPham(hinhAnh, Ten, Gia, phanLoai, id) {
  var sanPham = new Object();
  sanPham.hinhAnh = hinhAnh;
  sanPham.Ten = Ten;
  sanPham.Gia = Gia;
  sanPham.phanLoai = phanLoai;

  if (id != null) {
    sanPham.id = id;
  } else {
    sanPham.id = taoID();
  }

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
  var HTMLDanhSachSanPham = '<ul id="products">';
  for (var i = 0; i < danhSachSanPham.length; i++) {
    var sanPham = danhSachSanPham[i];
    var htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanPham);
    HTMLDanhSachSanPham = HTMLDanhSachSanPham + htmlSanPham;
  }
  HTMLDanhSachSanPham = HTMLDanhSachSanPham + "</ul>";
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
  html +=
    '<a href="" class="buy-now" onclick="onClickDuaVaoGioHang(\'' +
    sanPham.id +
    "')\">Mua ngay</a>";
  html += ' <div class="product-info">';
  html += '  <a href="" class="product-cat">' + sanPham.phanLoai + "</a>";
  html += '<a href="" class="product-name" >' + sanPham.Ten + "</a>";
  html += ' <div class="product-price">' + sanPham.Gia + "</div>";
  html += "</div>";
  html += "</div>";
  html += "</li>";
  return html;
}

function truyXuatSanPhamTheoID(idSanPham) {
  var sanPham = new Object();

  var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();

  for (var i = 0; i < danhSachSanPham.length; i++) {
    var sanPhamHienTai = danhSachSanPham[i];
    if (sanPhamHienTai.id == idSanPham) {
      sanPham = sanPhamHienTai;
    }
  }

  sanPham = TaoDoiTuongSanPham(
    sanPham.hinhAnh,
    sanPham.Ten,
    sanPham.Gia,
    sanPham.phanLoai,
    sanPham.id
  );

  return sanPham;
}

function layDanhSachSanPhamDuoiLocalStorage() {
  var jsonDanhSachSanPham = localStorage.getItem("danhSachSanPham");
  var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

  return danhSachSanPham;
}
