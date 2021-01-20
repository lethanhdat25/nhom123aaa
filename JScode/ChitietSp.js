


var sizeS=document.getElementById("sizeS");
var sizeM=document.getElementById("sizeM");
var sizeL=document.getElementById("sizeL");
function clicksizeS(e){
    sizeS.classList.add('thaydoimau');
    sizeS.classList.remove('button_backgroundcolor');
    sizeM.classList.remove('thaydoimau');
    sizeM.classList.add('button_backgroundcolor');
    sizeL.classList.remove('thaydoimau');
    sizeL.classList.add('button_backgroundcolor');


};
function clicksizeM(e){
    sizeS.classList.remove('thaydoimau');
    sizeS.classList.add('button_backgroundcolor');
    sizeM.classList.add('thaydoimau');
    sizeM.classList.remove('button_backgroundcolor');
    sizeL.classList.remove('thaydoimau');
    sizeL.classList.add('button_backgroundcolor');

};
function clicksizeL(e){
    sizeS.classList.remove('thaydoimau');
    sizeS.classList.add('button_backgroundcolor');
    sizeM.classList.remove('thaydoimau');
    sizeM.classList.add('button_backgroundcolor');
    sizeL.classList.add('thaydoimau');
    sizeL.classList.remove('button_backgroundcolor');

}

var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var color3=document.getElementById("color3");
function clickcolor1(e){
    color1.classList.add('thaydoimau');
    color2.classList.remove('thaydoimau');
    color3.classList.remove('thaydoimau');
};
function clickcolor2(e){
    color1.classList.remove('thaydoimau');
    color2.classList.add('thaydoimau');
    color3.classList.remove('thaydoimau');
};
function clickcolor3(e){
    color1.classList.remove('thaydoimau');
    color2.classList.remove('thaydoimau');
    color3.classList.add('thaydoimau');
}
/*----Soluong---*/
var i=1;
function giamSoluong(e){
    if (i>1) i--;
    console.log(i);
    Soluong.innerHTML=i;
}
function tangSoluong(e){
    i++;
    console.log(i);
    Soluong.innerHTML=i;
}
var Soluong=document.getElementById("Soluong");
Soluong.innerHTML=i;
/*--------Button_rv-------*/
var hienra_rv=document.getElementById("box_rv");
function  hien_write(e){
    hienra_rv.classList.remove('andi_rv');
    hienra_rv.classList.add('hienra_rv');
}
var hienra_sm=document.getElementById("Content_rv");
var dulieuText=document.getElementsByTagName('input');
function button_rv(){
    hienra_rv.classList.remove('hienra_rv')
    hienra_rv.classList.add('andi_rv');
    hienra_sm.classList.remove('andi_rv');
    hienra_sm.classList.add('hienra_rv');
}
/*---------Onclick_Vote------*/
var star1_cl=document.getElementById('star1');
function  cl_votesao1(){
    star5_cl.classList.remove('star-rate')
    star5_cl.classList.add('star-box')
    star4_cl.classList.remove('star-rate')
    star4_cl.classList.add('star-box')
    star3_cl.classList.remove('star-rate')
    star3_cl.classList.add('star-box')
    star2_cl.classList.remove('star-rate')
    star2_cl.classList.add('star-box')
    star1_cl.classList.remove('star-box')
    star1_cl.classList.add('star-rate');
}
/*-----------------*/
var star2_cl=document.getElementById('star2');
function  cl_votesao2(){
    star5_cl.classList.remove('star-rate')
    star5_cl.classList.add('star-box')
    star4_cl.classList.remove('star-rate')
    star4_cl.classList.add('star-box')
    star3_cl.classList.remove('star-rate')
    star3_cl.classList.add('star-box')
    star2_cl.classList.remove('star-box')
    star2_cl.classList.add('star-rate');
    star1_cl.classList.remove('star-box')
    star1_cl.classList.add('star-rate');
}
/*-----------------*/
var star3_cl=document.getElementById('star3');
function  cl_votesao3(){
    star5_cl.classList.remove('star-rate')
    star5_cl.classList.add('star-box')
    star4_cl.classList.remove('star-rate')
    star4_cl.classList.add('star-box')
    star3_cl.classList.remove('star-box')
    star3_cl.classList.add('star-rate');
    star2_cl.classList.remove('star-box')
    star2_cl.classList.add('star-rate');
    star1_cl.classList.remove('star-box')
    star1_cl.classList.add('star-rate');
}
/*-----------------*/
var star4_cl=document.getElementById('star4');
function  cl_votesao4(){
    star5_cl.classList.remove('star-rate')
    star5_cl.classList.add('star-box')
    star4_cl.classList.remove('star-box')
    star4_cl.classList.add('star-rate');
    star3_cl.classList.remove('star-box')
    star3_cl.classList.add('star-rate');
    star2_cl.classList.remove('star-box')
    star2_cl.classList.add('star-rate');
    star1_cl.classList.remove('star-box')
    star1_cl.classList.add('star-rate');
}
var star5_cl=document.getElementById('star5');
function  cl_votesao5(){
    star5_cl.classList.remove('star-box')
    star5_cl.classList.add('star-rate');
    star4_cl.classList.remove('star-box')
    star4_cl.classList.add('star-rate');
    star3_cl.classList.remove('star-box')
    star3_cl.classList.add('star-rate');
    star2_cl.classList.remove('star-box')
    star2_cl.classList.add('star-rate');
    star1_cl.classList.remove('star-box');
    star1_cl.classList.add('star-rate');
}


/*-------------------------*/
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const p = urlParams.get('id')
console.log(p);

function DulieuchitietSp(products){
    var dulieu_chitiet;
    if (products.length>0) {
        dulieu_chitiet =  "        <div class=\"col-md-6\">\n" +
            "            <img src=\"" + products[0].AnhSP + "\" width=\"100%\"/>\n" +
            "        </div>\n" +
            "        <div class=\"col-md-6\">\n" +
            "            <h1>" + products[0].TenSP + "</h1>\n" +
            "            <h3 class=\"Price\">" + products[0].GiaSP_HT + ".000đ</h3>\n" +
            "            <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui...</span>\n" +
            "            <div class=\"Size col-md-12\" style=\"padding-left: 0\">\n" +
            "                <h4 class=\"col-md-3 \" style=\"margin-top: 20px; padding-left: 0\">Size</h4>\n" +
            "                <div class=\"col-md-9\" style=\"float: right\">\n" +
            "                    <button type=\"button\" style=\"width: 50px\" class=\"button_backgroundcolor\" id=\"sizeS\" onclick=\"clicksizeS(this)\"><h3>S</h3></button>\n" +
            "                    <button type=\"button\" style=\"width: 50px\" class=\"button_backgroundcolor\" id=\"sizeM\" onclick=\"clicksizeM(this)\"><h3>M</h3></button>\n" +
            "                    <button type=\"button\" style=\"width: 50px\" class=\"button_backgroundcolor\" id=\"sizeL\" onclick=\"clicksizeL(this)\"><h3>L</h3></button>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"Color col-md-12\" style=\"padding-left: 0\">\n" +
            "                <h4 class=\"col-md-3\" style=\"margin-top: 30px;padding-left: 0\">Color</h4>\n" +
            "                <div class=\"col-md-9\" style=\"margin-top: 30px\">\n" +
            "                    <button type=\"button\" style=\"width: 50px;background-color: white\" id=\"color1\" onclick=\"clickcolor1(this)\"><h3></h3></button>\n" +
            "                    <button type=\"button\" style=\"width: 50px;background-color: brown\" id=\"color2\" onclick=\"clickcolor2(this)\"><h3></h3></button>\n" +
            "                    <button type=\"button\" style=\"width: 50px;background-color: purple\" id=\"color3\" onclick=\"clickcolor3(this)\"><h3></h3></button>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"Subtotal col-md-12\" style=\"padding-left: 0\">\n" +
            "                <h4 class=\"col-md-3\" style=\"margin-top: 30px; padding-left: 0\">Subtotal</h4>\n" +
            "                <h2 class=\"col-md-9\" style=\"color: #ff5050\">" + products[0].GiaSP_HT + ".000đ</h2>\n" +
            "            </div>\n" +
            "            <div class=\"Product Type col-md-12\" style=\"padding-left: 0\">\n" +
            "                <h4 class=\"col-md-5\" style=\"margin-top: 30px;padding-left: 0\">Product Type</h4>\n" +
            "                <span class=\"col-md-7\" style=\"margin-top: 30px\">Light</span>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-12\" style=\"text-align: center;margin-top: 30px\">\n" +
            "                <a href=\"HoaDon.html?id="+products[0].ID_Sp+"\" style=\"text-decoration: none\"><button class=\"Buy_it\" type=\"button\" style=\"color: black\">Buy it now</button></a>\n" +
            "            </div>\n" +
            "        </div>"
    }
    else {
        dulieu_chitiet =""
    }
    return dulieu_chitiet
}


function loadData(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState==4 && this.status==200){
            var rs=this.responseText;
            var products = JSON.parse(rs)
        }
        var grid=document.getElementById("Details_ChitietSp");
        grid.innerHTML=DulieuchitietSp(products);
    }
    xhttp.open("GET","http://localhost:5000/timkiemSp?id="+p+"");
    xhttp.send();
}
loadData();

