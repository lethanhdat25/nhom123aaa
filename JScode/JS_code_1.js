var slide_img=document.querySelector('.img_change');
var images_banner=["img_doinen1.jpg","img_doinen2.jpg","img_doinen3.jpg"]
var images_luachon=["img_luachon1.jpg","img_luachon2.jpg","img_luachon3.jpg","img_luachon4.jpg","img_luachon5.jpg","img_luachon6.jpg","img_luachon7.jpg","img_luachon8.jpg"]
var i=0;
var x=0;
var y=1;
var z=2;
/*-------banner-----*/
function click_prev_banner(e){
    if(i<=0) i=images_banner.length;
    i--;
    return change_banner();
}
function click_next_banner(e){
    if(i>=images_banner.length-1) i=-1;
    i++;
    return change_banner();
}
function change_banner(){
    return slide_img.setAttribute("src","img/"+images_banner[i]);
}
/*----listluachon---*/
var txt1=document.getElementById("list_1");
var txt2=document.getElementById("list_2");
var txt3=document.getElementById("list_3");


function click_list_1(){
    txt1.classList.add('thaydoimau');
    txt2.classList.remove('thaydoimau');
    txt3.classList.remove('thaydoimau');

}
function click_list_2(){
    txt2.classList.add('thaydoimau');
    txt1.classList.remove('thaydoimau');
    txt3.classList.remove('thaydoimau');
}
function click_list_3(){
    txt3.classList.add('thaydoimau');
    txt1.classList.remove('thaydoimau');
    txt2.classList.remove('thaydoimau');

}

function luachon(){
    return"<div class=\"col-md-4\">\n" +
        "            <img src=\"img/"+images_luachon[x]+"\" class=\"luachon_left\">\n" +
        "        </div>\n" +
        "        <div class=\"col-md-4\">\n" +
        "            <img src=\"img/"+images_luachon[y]+"\" class=\"luachon_mid\">\n" +
        "        </div>\n" +
        "        <div class=\"col-md-4\">\n" +
        "            <img src=\"img/"+images_luachon[z]+"\" class=\"luachon_right\">\n" +
        "        </div>"
}
var ganzzz=document.getElementById("image_luachon");
ganzzz.innerHTML=luachon();
/*-------luachon-----*/
var luachon_left=document.querySelector('.luachon_left');
var luachon_mid=document.querySelector('.luachon_mid');
var luachon_right=document.querySelector('.luachon_right');
function click_prev_luachon(e){
    if(z>=3){
        z--;
        y--;
        x--;
        return change_luachon();
    }
}

function click_next_luachon(e){
    if(z>=2 && z<images_luachon.length-1){
        z++;
        y++;
        x++;
        return change_luachon();
    }
}
function change_luachon(){
    var dulieu=[luachon_left.setAttribute("src","img/"+images_luachon[x]),
        luachon_mid.setAttribute("src","img/"+images_luachon[y]),
        luachon_right.setAttribute("src","img/"+images_luachon[z]),
]    ;
    return dulieu ;
}
/*--------page--------*/
var img_reviewpage_left=["page2.jpg","page3.jpg","page4.jpg"];
var u=0;
var l=1;
var o=2;

function anhcuapage(){
    return "<i class=\"fas fa-chevron-left slide-left-page col-md-1\" onclick=\"click_prev_page(this)\"></i>\n" +
        "                        <div class=\"image_review col-md-3 page_left\">\n" +
        "                            <img src=\"img/img_doinen1.jpg\" class=\"img_change reviewpage_left\">\n" +
        "                        </div>\n" +
        "                        <div class=\"image_review col-md-3 page_mid\">\n" +
        "                            <img src=\"img/img_doinen1.jpg\" class=\"img_change reviewpage_mid\">\n" +
        "                        </div>\n" +
        "                        <div class=\"image_review col-md-3 page_right\">\n" +
        "                            <img src=\"img/img_doinen1.jpg\" class=\"img_change reviewpage_right\">\n" +
        "                        </div>\n" +
        "\n" +
        "                    <i class=\"fas fa-chevron-right slide-right-page col-md-1\" onclick=\"click_next_page(this)\"></i>"
}
var gan2=document.getElementById("review_page");
gan2.innerHTML=anhcuapage();

