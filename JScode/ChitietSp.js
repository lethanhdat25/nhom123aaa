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
    star1_cl.classList.remove('star-box')
    star1_cl.classList.add('star-rate');
}
