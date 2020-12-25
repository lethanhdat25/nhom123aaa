var slide_img=document.querySelector('.img_change');
var images_banner=["img_doinen1.jpg","img_doinen2.jpg","img_doinen3.jpg"]
var images_luachon=["img_luachon1.jpg","img_luachon2.jpg","img_luachon3.jpg","img_luachon4.jpg","img_luachon5.jpg","img_luachon6.jpg","img_luachon7.jpg","img_luachon8.jpg"]
var img_list1=["img_luachon1.jpg","img_luachon1.jpg","img_luachon1.jpg","img_luachon1.jpg","img_luachon1.jpg","img_luachon1.jpg"]
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
    images_luachon=["img_luachon1.jpg","img_luachon2.jpg","img_luachon3.jpg","img_luachon4.jpg","img_luachon5.jpg","img_luachon6.jpg","img_luachon7.jpg","img_luachon8.jpg"]

}
function click_list_2(){
    txt2.classList.add('thaydoimau');
    txt1.classList.remove('thaydoimau');
    txt3.classList.remove('thaydoimau');
    images_luachon=["img_luachon2.jpg","img_luachon2.jpg","img_luachon3.jpg","img_luachon4.jpg","img_luachon5.jpg","img_luachon6.jpg","img_luachon7.jpg","img_luachon8.jpg"]
}
function click_list_3(){
    txt3.classList.add('thaydoimau');
    txt1.classList.remove('thaydoimau');
    txt2.classList.remove('thaydoimau');
    images_luachon=["img_luachon3.jpg","img_luachon3.jpg","img_luachon3.jpg","img_luachon4.jpg","img_luachon5.jpg","img_luachon6.jpg","img_luachon7.jpg","img_luachon8.jpg"]

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
var gan=document.getElementById("image_luachon");
gan.innerHTML=luachon();
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
