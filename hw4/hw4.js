var jsImg = new Array("./g.jpg", "./u.jpg", "./v.jpg", "./i.jpg", "./x.jpg", "./l.jpg", "./n.jpg", "./w.jpg", "./y.jpg", "./z.jpg");
//設定每x秒執行一次randomImg() ，此行要在 function 之外
setInterval("randomImg()",100);
function randomImg()
{
    //陣列的長度 * 介於0~1間數字 ，然後在取 floor 當照片索引值
    var imgIndex1 = Math.floor(Math.random()*jsImg.length);
    var imgIndex2 = Math.floor(Math.random()*jsImg.length);
    var imgIndex3 = Math.floor(Math.random()*jsImg.length);
    var imgIndex4 = Math.floor(Math.random()*jsImg.length);
    var imgIndex5 = Math.floor(Math.random()*jsImg.length);
    var imgIndex6 = Math.floor(Math.random()*jsImg.length);
    $(document).ready(function(){
        $(document).keydown(function(){
            $("#create1").html("<img src='"+jsImg[imgIndex1]+"' width=60>");
            $("#create2").html("<img src='"+jsImg[imgIndex2]+"' width=60>");
            $("#create3").html("<img src='"+jsImg[imgIndex3]+"' width=60>");
            $("#create4").html("<img src='"+jsImg[imgIndex4]+"' width=60>");
            $("#create5").html("<img src='"+jsImg[imgIndex5]+"' width=60>");
            $("#create6").html("<img src='"+jsImg[imgIndex6]+"' width=60>");
        });
    });
} 