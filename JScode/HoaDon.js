var i=1;
var tongtien=200;
var luutien=0;
function tangSp(e){
    i++;
    tongtien=200;
    tongtien=tongtien*i;
    gan.innerHTML=dulieu();
    console.log(i);
    tien.innerHTML=Tongtien();
    luutien=tongtien;
    tongtien=200;
}

function giamSp(e){
    if(i>1) i--;
    tongtien=luutien-200;
    luutien=luutien-200;
    if (luutien<200) tongtien=200;
    gan.innerHTML=dulieu();
    console.log(luutien);
    console.log(i);
    tien.innerHTML=Tongtien();
}
function Tongtien(){
    return"    <div class=\"TongTien col-md-3\">Tong Tien:"+tongtien+".000d</div>\n"
};
var tien=document.getElementById("Tinhtien");
tien.innerHTML=Tongtien();
function dulieu(){
    return"\n" +
        "            <button id=\"giamSp\" onclick=\"giamSp(this)\">-</button>\n" +
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

