var slide_img=document.querySelector('.img_change');
var luachon_img=document.querySelector('.image_luachon');
var images_banner=["img_doinen1.jpg","img_doinen2.jpg","img_doinen3.jpg"]
var imgaes_luachon=["img_luachon1.jpg","img_luachon2.jpg","img_luachon3.jpg","img_luachon4.jpg","img_luachon5.jpg","img_luachon6.jpg","img_luachon7.jpg","img_luachon8.jpg"]
var i=0;
var j=2;
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
/*-------luachon-----*/

function click_prev_luachon(e){
    if(j>2){
        j--;
        return change_luachon();
    }
}

function click_next_luachon(e){
    j++;
    return change_luachon();
}
function change_luachon(){

}
luachon_img.innerHTML=change_luachon();