var slide_img=document.querySelector('.img_change');
var images_banner=["img_doinen1.jpg","img_doinen2.jpg","img_doinen3.jpg"]
var i=0;
/*-------banner-----*/
var chu_chayy=document.getElementById('chu_chay');
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
var txt11=document.getElementById("list_1");
var txt22=document.getElementById("list_2");
var txt33=document.getElementById("list_3");


function click_list_11(){
    txt11.classList.add('thaydoimau');
    txt22.classList.remove('thaydoimau');
    txt33.classList.remove('thaydoimau');

}
function click_list_22(){
    txt22.classList.add('thaydoimau');
    txt11.classList.remove('thaydoimau');
    txt33.classList.remove('thaydoimau');
}
function click_list_33(){
    txt33.classList.add('thaydoimau');
    txt11.classList.remove('thaydoimau');
    txt22.classList.remove('thaydoimau');

}
