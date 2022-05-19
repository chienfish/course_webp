var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
var imgArr1 = [], imgArr2 = [], imgArr3 = [], imgArr4 = [], imgArr5 = [], imgArr6 = [];
var space = new Array("./space.jpg");
var jsImg = new Array("./A.jpg", "./B.jpg", "C.jpg", "./D.jpg", "./E.jpg",
            "./F.jpg", "./G.jpg", "./H.jpg", "./I.jpg", "./J.jpg", "./K.jpg", "./L.jpg",  
            "./M.jpg", "./N.jpg", "./O.jpg", "./P.jpg", "./Q.jpg", "./R.jpg", "./S.jpg", 
            "./T.jpg", "./U.jpg", "./V.jpg", "./W.jpg", "./X.jpg", "./Y.jpg", "./Z.jpg");

function splitPart(index){
    var splitIndex = index.split(/[./.jpg]/);
    var joinIndex = splitIndex.join(' ');
    var result = String(joinIndex).trim();
    return result;
}

function randomImg(){
    var index1 = Math.floor(Math.random()*jsImg.length);
    var index2 = Math.floor(Math.random()*jsImg.length);
    var index3 = Math.floor(Math.random()*jsImg.length);
    var index4 = Math.floor(Math.random()*jsImg.length);
    var index5 = Math.floor(Math.random()*jsImg.length);
    var index6 = Math.floor(Math.random()*jsImg.length);

    var r = Math.floor(Math.random() * 6 + 1);
    if (r == 1) {
    $("#create1").prepend("<img src='" +jsImg[index1]+"' width = 55>");
        imgArr1.push(splitPart(jsImg[index1]));
        i1++;
    } else if (r == 2) {
    $("#create2").prepend("<img src='" +jsImg[index2]+"' width = 55>");
        imgArr2.push(splitPart(jsImg[index2]));
        i2++;
    } else if (r == 3) {
    $("#create3").prepend("<img src='" +jsImg[index3]+"' width = 55>");
        imgArr3.push(splitPart(jsImg[index3]));
        i3++;
    } else if (r == 4) {
    $("#create4").prepend("<img src='" +jsImg[index4]+"' width = 55>");
        imgArr4.push(splitPart(jsImg[index4]));
        i4++;
    } else if (r == 5) {
    $("#create5").prepend("<img src='" +jsImg[index5]+"' width = 55>");
        imgArr5.push(splitPart(jsImg[index5]));
        i5++;
    } else if (r == 6) {
    $("#create6").prepend("<img src='" +jsImg[index6]+"' width = 55>");
        imgArr6.push(splitPart(jsImg[index6]));
        i6++;
    }
}

var list1 = document.getElementById("create1");
var list2 = document.getElementById("create2");
var list3 = document.getElementById("create3");
var list4 = document.getElementById("create4");
var list5 = document.getElementById("create5");
var list6 = document.getElementById("create6");

function cmpNdel(str){
    if (str === imgArr1[0]){
        list1.removeChild(list1.lastElementChild);
        while (list1.firstChild && list1.lastElementChild.className === 'space')
            list1.removeChild(list1.lastElementChild);
        imgArr1.shift();
        i1--;
    } else if (str === imgArr2[0]){
        list2.removeChild(list2.lastElementChild);
        while (list2.firstChild && list2.lastElementChild.className === 'space')
            list2.removeChild(list2.lastElementChild);
        imgArr2.shift();
        i2--;
    } else if (str === imgArr3[0]){
        list3.removeChild(list3.lastElementChild);
        while (list3.firstChild && list3.lastElementChild.className === 'space')
            list3.removeChild(list3.lastElementChild);
        imgArr3.shift();
        i3--;
    } else if (str === imgArr4[0]){
        list4.removeChild(list4.lastElementChild);
        while (list4.firstChild && list4.lastElementChild.className === 'space')
            list4.removeChild(list4.lastElementChild);
        imgArr4.shift();
        i4--;
    } else if (str === imgArr5[0]){
        list5.removeChild(list5.lastElementChild);
        while (list5.firstChild && list5.lastElementChild.className === 'space')
            list5.removeChild(list5.lastElementChild);
        imgArr5.shift();
        i5--;
    } else if (str === imgArr6[0]){
        list6.removeChild(list6.lastElementChild);
        while (list6.firstChild && list6.lastElementChild.className === 'space')
            list6.removeChild(list6.lastElementChild);
        imgArr6.shift();
        i6--;
    }
}

var press = true;
var preSpace = false;
var time1 = 0;
var time2 = 0;
var totalTime = 0;

$(document).ready(function(){
    $(document).keydown(function(){
        var e = window.event;
        var str = String.fromCharCode(e.keyCode);
        $("#input").append(str);
        if (e.keyCode == 32) preSpace = true;
        cmpNdel(str); 
        
        if (press == true){
            time1 = new Date().getTime();
            press = !press;
        } else{
            time2 = new Date().getTime();
            press = !press;
        }

        var spendTime = Math.abs(time2 - time1);
        if (time1 == 0 || time2 == 0)
            spendTime = 0;
        totalTime += spendTime;
            
        while (totalTime >= 670){    //1秒1.5個字 => 0.67秒1個字
            randomImg();
            totalTime -= 670;
        }   
    });
});

$(document).ready(function(){
    setInterval(function(){
        move();
        addSpace();
        if (preSpace == true) {
            randomImg();
            var rect1 = list1.lastChild.getBoundingClientRect();
            var rect2 = list2.lastChild.getBoundingClientRect();
            var rect3 = list3.lastChild.getBoundingClientRect();
            var rect4 = list4.lastChild.getBoundingClientRect();
            var rect5 = list5.lastChild.getBoundingClientRect();
            var rect6 = list6.lastChild.getBoundingClientRect();
            if (((rect1.right >= 1265 || rect2.right >= 1265) || (rect3.right >= 1265 
                || rect4.right >= 1265)) || (rect5.right >= 1265 || rect6.right >= 1265)){
                alert("!! Game Over !!");
                window.location.reload();
                preSpace = false;
            }
        }
    }, 1500);
});

function addSpace(){
    if(list1.firstChild) $("#create1").prepend("<img class='space' src='" +space[0]+"' width = 55>");
    if(list2.firstChild) $("#create2").prepend("<img class='space' src='" +space[0]+"' width = 55>");
    if(list3.firstChild) $("#create3").prepend("<img class='space' src='" +space[0]+"' width = 55>");
    if(list4.firstChild) $("#create4").prepend("<img class='space' src='" +space[0]+"' width = 55>");
    if(list5.firstChild) $("#create5").prepend("<img class='space' src='" +space[0]+"' width = 55>");
    if(list6.firstChild) $("#create6").prepend("<img class='space' src='" +space[0]+"' width = 55>");
}

function move(){
    $("#create1").animate({left: "+=10px"});
    $("#create2").animate({left: "+=10px"});
    $("#create3").animate({left: "+=10px"});
    $("#create4").animate({left: "+=10px"});
    $("#create5").animate({left: "+=10px"});
    $("#create6").animate({left: "+=10px"});
}