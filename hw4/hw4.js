var jsImg = new Array("./G.jpg", "./U.jpg", "./V.jpg", "./I.jpg", "./X.jpg", "./L.jpg", "./N.jpg", "./Y.jpg", "./Z.jpg", "./P.jpg", "./S.jpg");
var imgArr1 = [];
var imgArr2 = [];
var imgArr3 = [];
var imgArr4 = [];
var imgArr5 = [];
var imgArr6 = [];
var index1 = Math.floor(Math.random()*jsImg.length);
var index2 = Math.floor(Math.random()*jsImg.length);
var index3 = Math.floor(Math.random()*jsImg.length);
var index4 = Math.floor(Math.random()*jsImg.length);
var index5 = Math.floor(Math.random()*jsImg.length);
var index6 = Math.floor(Math.random()*jsImg.length);

function splitPart(index)
{
    var splitIndex = index.split(/[./.jpg]/);
    var joinIndex = splitIndex.join(' ');
    var result = String(joinIndex).trim()
    // console.log(result);

    return result;
}

//設定每x秒執行一次randomImg() ，此行要在 function 之外
// setInterval("randomImg()",100);
function randomImg()
{
    $("#create1").html("<img src='"+jsImg[index1]+"' width=60>");
        imgArr1.push(jsImg[index1]);
        splitPart(jsImg[index1]);
    $("#create2").html("<img src='"+jsImg[index2]+"' width=60>");
        imgArr2.push(jsImg[index2]);
        splitPart(jsImg[index2]);
    $("#create3").html("<img src='"+jsImg[index3]+"' width=60>");
        imgArr3.push(jsImg[index3]);
        splitPart(jsImg[index3]);
    $("#create4").html("<img src='"+jsImg[index4]+"' width=60>");
        imgArr4.push(jsImg[index4]);
        splitPart(jsImg[index4]);
    $("#create5").html("<img src='"+jsImg[index5]+"' width=60>");
        imgArr5.push(jsImg[index5]);
        splitPart(jsImg[index5]);
    $("#create6").html("<img src='"+jsImg[index6]+"' width=60>");
        imgArr6.push(jsImg[index6]);
        splitPart(jsImg[index6]);
} 




$(document).ready(function()
{
    $(document).keydown(function()
    {
        randomImg();
    });
}); 