function DulieuSp(){
    var g_html="";
    for (var i=0;i<products.length;i++){
        g_html+= "            <div class=\"item_thinh col-md-4\">\n" +
            "                <div class=\"anh\"  onmouseover=\"dichuotvaoday1()\" onmouseleave=\"dichuotraday1()\" >\n" +
            "                    <img src=\""+products[i].AnhSP+"\"/>\n" +
            "                </div>\n" +
            "                <div class=\"anhan_anh\" id=\"anhan_anh\">\n" +
            "                    <img src=\""+products[i].AnhSP+"\">\n" +
            "                </div>\n" +
            "                <div class=\"div_luachon_an col-md-12\" style=\"margin-bottom:20px\"> \n" +
            "                    <div class=\"col-md-4\">\n" +
            "                        <a href=\"HoaDon.html\" style=\"text-decoration: none;color: black\"><i  class=\"fas fa-shopping-cart\"></i></a>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-4\">\n" +
            "                        <a href=\"ChitietSp.html\" style=\"text-decoration: none;color: black\"><i class=\"fas fa-eye\"></i></a>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-4\">\n" +
            "                        <a href=\"#\" style=\"text-decoration: none;color: black\"><i class=\"fas fa-heart\"></i></a>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"detail\">\n" +
            "                    <a href=\"ChitietSp.html\"><h5>"+products[i].TenSP+"</h5></a>\n" +
            "                    </br>\n" +
            "                    </br>\n" +
            "                </div>\n" +
            "                <div class=\"price\">\n" +
            "                    <span><b>"+products[i].GiaSP_HT+".000đ</b></span>\n" +
            "                </div>\n" +
            "                </br>\n" +
            "                <div class=\"color\">\n" +
            "                    <img src=\"img/mauhong.webp\"/>\n" +
            "                    <img src=\"img/maudo.webp\"/>\n" +
            "                    <img src=\"img/mauden.webp\"/>\n" +
            "                </div>\n" +
            "            </div>\n"
    }
    return g_html;
}
function loadData(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState==4 && this.status==200){
            var rs=this.responseText;
            products = JSON.parse(rs)
        }
        var grid=document.getElementById("items");
        grid.innerHTML=DulieuSp();
    }
    xhttp.open("GET","http://localhost:5000/Demand-product");
    xhttp.send();
}
loadData();

