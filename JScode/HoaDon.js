var i=1;
var tongtien=250;
var luutien=0;
function tangSp(e){
    i++;
    tongtien=250;
    tongtien=tongtien*i;
    gan.innerHTML=dulieu();
    console.log(i);
    tien.innerHTML=Tongtien();
    thanhtien.innerHTML=ThanhTien();
    luutien=tongtien;
    tongtien=250;
}

function giamSp(e){
    if(i>1) i--;
    tongtien=luutien-250;
    luutien=luutien-250;
    if (luutien<250) tongtien=250;
    gan.innerHTML=dulieu();
    console.log(luutien);
    console.log(i);
    tien.innerHTML=Tongtien();
    thanhtien.innerHTML=ThanhTien();

}
function Tongtien(){
    return"    <div class=\"TongTien col-md-3\">Tong Tien:"+tongtien+".000d</div>\n"
};
function ThanhTien(){
    return "<span>"+tongtien+".000d</span>\n";
}
var tien=document.getElementById("Tinhtien");
tien.innerHTML=Tongtien();
var thanhtien=document.getElementById('Thanhtien_SP');
thanhtien.innerHTML=ThanhTien();
function dulieu(){
    return"            <button id=\"giamSp\" onclick=\"giamSp(this)\">-</button>\n" +
        "            <button class=\"soluong_giohang\" id=\"SoluongSp\">"+i+"</button>\n" +
        "            <button id=\"tangSp\" onclick=\"tangSp(this)\">+</button>"
};
var gan=document.getElementById("ListSp");
gan.innerHTML=dulieu();
/*---------XoaSp---------*/
function XoaSp(e){
    xoaSp.innerHTML=Trong();
}
function Trong(){
    return"";
}
var xoaSp=document.getElementById("sanphamI");

/*-------------------------*/

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const p = urlParams.get('id')
console.log(p);

function Dulieuhoadon(products){
    var dulieu_chitiet;
        dulieu_chitiet ="<div class=\"Image_giohang col-md-4\">\n" +
            "                <img src=\""+products[0].AnhSP+"\" width=\"100%\">\n" +
            "            </div>\n" +
            "            <div class=\"Tensp_giohang col-md-8\" i>\n" +
            "                <span>"+products[0].TenSP+"</span>\n" +
            "            </div>"
    return dulieu_chitiet;
}
function Giasp(products){
    var giasp;
    giasp="<span>"+products[0].GiaSP_HT+".000d</span>\n"
    return giasp;
}

function loadData(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState==4 && this.status==200){
            var rs=this.responseText;
            var products = JSON.parse(rs)
        }
        var grid=document.getElementById("Detail_hoadon");
        grid.innerHTML=Dulieuhoadon(products);
        var giaSp=document.getElementById("giasp_hoadon");
        giaSp.innerHTML=Giasp(products);
    }
    xhttp.open("GET","https://t2008m-mdht-brightworld.herokuapp.com/timkiemSp?id="+p+"");
    xhttp.send();
}
loadData();

