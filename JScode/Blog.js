function DulieuBlog(products){
    var dulieuBlog="";
    for( var i=0;i<products.length;i++){
        dulieuBlog +="        <div class=\"anh2 col-md-6\">\n" +
            "            <div class=\"img_thinh\" ><img style=\"max-width: 100%\" src=\""+products[i].Anh_Blog+"\"/></div>\n" +
            "            <div class=\"thongtin\">\n" +
            "                <div class=\"thongtin_1\">\n" +
            "                    <a href=\"\"><h4>"+products[i].Tieude+"</h4></a>\n" +
            "                    </br>\n" +
            "                    <div class=\"thongtin2\">\n" +
            "                        <p>\n" +
            "                            "+products[i].Noidung_Phu+"" +
            "                        </p>\n" +
            "                    </div>\n" +
            "                        <div class=\"thongtin3\">\n" +
            "                            <a href=\"chitiet_blog.html?id="+products[i].ID_Blog+"\"><p>Read more</p></a>\n" +
            "                        </div>\n" +
            "                    <p></p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n"
    }
    return dulieuBlog;
}


function loadData(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){
            var rs=this.responseText;
            var products=JSON.parse(rs);
        }
        var blog=document.getElementById("Detail_Blog");
        blog.innerHTML=DulieuBlog(products);
    }
    xhttp.open("GET","http://localhost:5000/Blog");
    xhttp.send();
}
loadData();