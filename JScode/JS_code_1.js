var slide_img=document.querySelector('.img_change');
var images_banner=["img_doinen1.jpg","img_doinen2.jpg","img_doinen3.jpg"]
var i=0;
/*-------banner-----*/
var chu_chayy=document.getElementById('chu_chay');
function click_prev_banner(e){
    if(i<=0) i=images_banner.length;
    i--;
    chu_chayy.classList.remove('chu_chay');
    chu_chayy.classList.add('chu_chayyya');
    return change_banner();
}
function click_next_banner(e){
    if(i>=images_banner.length-1) i=-1;
    i++;
    chu_chayy.classList.remove('chu_chay');
    chu_chayy.classList.add('chu_chayyya');
    return change_banner();
}
function change_banner(){
    return slide_img.setAttribute("src","img/"+images_banner[i]);
}
