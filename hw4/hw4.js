var jsImg = new Array("./G.jpg", "./U.jpg", "./V.jpg", "./I.jpg", "./X.jpg", "./L.jpg", "./N.jpg", "./Y.jpg", "./Z.jpg", "./P.jpg", "./S.jpg");
var imgArr1 = [], imgArr2 = [], imgArr3 = [], imgArr4 = [], imgArr5 = [], imgArr6 = [];
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
var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
function randomImg()
{
    $("#create1").html("<img src='" +jsImg[index1]+"' width = 60>");
        imgArr1[i1] = splitPart(jsImg[index1]);
        console.log(i1, imgArr1[i1]);
        i1++;
    $("#create2").html("<img src='" +jsImg[index2]+"' width = 60>");
        imgArr2[i2] = splitPart(jsImg[index2]);
        console.log(i2, imgArr2[i2]);
        i2++;
    $("#create3").html("<img src='" +jsImg[index3]+"' width = 60>");
        imgArr3[i3] = splitPart(jsImg[index3]);
        console.log(i3, imgArr3[i3]);
        i3++;
    $("#create4").html("<img src='" +jsImg[index4]+"' width = 60>");
        imgArr4[i4] = splitPart(jsImg[index4]);
        console.log(i4, imgArr4[i4]);
        i4++;
    $("#create5").html("<img src='" +jsImg[index5]+"' width = 60>");
        imgArr5[i5] = splitPart(jsImg[index5]);
        console.log(i5, imgArr5[i5]);
        i5++;
    $("#create6").html("<img src='" +jsImg[index6]+"' width = 60>");
        imgArr6[i6] = splitPart(jsImg[index6]);
        console.log(i6, imgArr6[i6]);
        i6++;
} 

function cmpNdel(str, imgArr, i)
{
    if (str === imgArr[0]){
        imgArr.shift();
        i--;

        switch (imgArr){
            case imgArr1: $("#create1").remove(); break;
            case imgArr2: $("#create2").remove(); break;
            case imgArr3: $("#create3").remove(); break;
            case imgArr4: $("#create4").remove(); break;
            case imgArr5: $("#create5").remove(); break;
            case imgArr6: $("#create6").remove(); break;
            default: break;
        }
    }
}

$(document).ready(function(){
    $(document).keydown(function(){
        var e = window.event;
        var str = String.fromCharCode(e.keyCode);
        $("#input").append(str);

        randomImg();
        cmpNdel(str, imgArr1, i1);
        cmpNdel(str, imgArr2, i2);
        cmpNdel(str, imgArr3, i3);
        cmpNdel(str, imgArr4, i4);
        cmpNdel(str, imgArr5, i5);
        cmpNdel(str, imgArr6, i6);
        
    });
});