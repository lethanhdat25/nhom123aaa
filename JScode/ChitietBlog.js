






const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const p = urlParams.get('id')
console.log(p);
function Chitietsp(products){
    var chitietBlog="    <div class=\"anh_chitiet_blog\">\n" +
        "        <img src=\""+products[0].Anh_Blog+"\" width=\"100%\">\n" +
        "    </div>\n" +
        "    <div class=\"content_chitiet_blog\">\n" +
        "        <h1>"+products[0].Tieude+"</h1>\n" +
        "        <br>\n" +
        "        <span style=\"font-size:16px \">"+products[0].Noidung_Chinh+"</span>\n" +
        "    </div>"
    return chitietBlog
}

function loadData(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function (){
        if (this.readyState==4 && this.status==200){
            var rs=this.responseText;
            var products=JSON.parse(rs);
        }
        var chitietBlog=document.getElementById("chitiet_blog");
        chitietBlog.innerHTML=Chitietsp(products);
    }
    xhttp.open("GET","http://localhost:5000/ChitietBlog?id="+p+"");
    xhttp.send();
}
loadData();