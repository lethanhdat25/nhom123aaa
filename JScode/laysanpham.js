function gridProductNewArrival() {
    var g_html = "";
    for (var i=0;i<products.length;i++){
        g_html += "<div class=\"col-md-4\">\n" +
            "                    <div class=\"item text-center\">\n" +
            "                        <img class=\"product-image\" src=\""+products[i].AnhSP+"\"/>\n" +
            "                        <h2 class=\"product-name\">"+products[i].TenSP+"</h2>\n" +
            "                        <p class=\"price\">$"+products[i].GiaSP_HT+"</p>\n" +
            "                        <a href=\"#\" class=\"add-to-cart text-uppercase\">Add To Cart</a>\n" +
            "                    </div>\n" +
            "                </div>";
    }

    return g_html;
}
var xhr = new XMLHttpRequest();
function loadData() {
    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // nhan text/json tu api
            products = JSON.parse(rs);// chuyen thanh object json
            var grid = document.getElementById("sanphamden_nhom");
            grid.innerHTML = gridProductNewArrival();
        }
    }
    xhttp.open("GET","http://localhost:5000/sanpham");
    xhttp.send();
}
loadData();
