var imgArr1 = [], imgArr2 = [], imgArr3 = [], imgArr4 = [], imgArr5 = [], imgArr6 = [];
var jsImg = new Array("./A.jpg", "./B.jpg", "C.jpg", "./D.jpg", "./E.jpg",
            "./F.jpg", "./G.jpg", "./H.jpg", "./I.jpg", "./J.jpg", "./K.jpg", "./L.jpg",  
            "./M.jpg", "./N.jpg", "./O.jpg", "./P.jpg", "./Q.jpg", "./R.jpg", "./S.jpg", 
            "./T.jpg", "./U.jpg", "./V.jpg", "./W.jpg", "./X.jpg", "./Y.jpg", "./Z.jpg");

function splitPart(index){
    var splitIndex = index.split(/[./.jpg]/);
    var joinIndex = splitIndex.join(' ');
    var result = String(joinIndex).trim()

    return result;
}

var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
function randomImg(){
    var index1 = Math.floor(Math.random()*jsImg.length);
    var index2 = Math.floor(Math.random()*jsImg.length);
    var index3 = Math.floor(Math.random()*jsImg.length);
    var index4 = Math.floor(Math.random()*jsImg.length);
    var index5 = Math.floor(Math.random()*jsImg.length);
    var index6 = Math.floor(Math.random()*jsImg.length);

    $("#create1").prepend("<img src='" +jsImg[index1]+"' width = 60>");
        imgArr1.push(splitPart(jsImg[index1]));
        i1++;
    $("#create2").prepend("<img src='" +jsImg[index2]+"' width = 60>");
        imgArr2.push(splitPart(jsImg[index2]));
        i2++;
    $("#create3").prepend("<img src='" +jsImg[index3]+"' width = 60>");
        imgArr3.push(splitPart(jsImg[index3]));
        i3++;
    $("#create4").prepend("<img src='" +jsImg[index4]+"' width = 60>");
        imgArr4.push(splitPart(jsImg[index4]));
        i4++;
    $("#create5").prepend("<img src='" +jsImg[index5]+"' width = 60>");
        imgArr5.push(splitPart(jsImg[index5]));
        i5++;
    $("#create6").prepend("<img src='" +jsImg[index6]+"' width = 60>");
        imgArr6.push(splitPart(jsImg[index6]));
        i6++;
} 

$(document).ready(function(){
    $(document).keydown(function(){
        var e = window.event;
        var str = String.fromCharCode(e.keyCode);
        $("#input").append(str);
        if (e.keyCode == 32) randomImg();
 
        if (str === imgArr1[0]){
            imgArr1.shift();
            i1--;
            $("#create1").remove();
        } else if (str === imgArr2[0]){
            imgArr2.shift();
            i2--;
            $("#create2").remove();
        } else if (str === imgArr3[0]){
            imgArr3.shift();
            i3--;
            $("#create3").remove();
        } else if (str === imgArr4[0]){
            imgArr4.shift();
            i4--;
            $("#create4").remove();
        } else if (str === imgArr5[0]){
            imgArr5.shift();
            i5--;
            $("#create5").remove();
        } else if (str === imgArr6[0]){
            imgArr6.shift();
            i6--;
            $("#create6").remove();
        }
    
        console.log("1", imgArr1);
        console.log("2", imgArr2);
        console.log("3", imgArr3);
        console.log("4", imgArr4);
        console.log("5", imgArr5);
        console.log("6", imgArr6);
    });
});