var contestArr = [];
var i = 0;
var contest = document.getElementById("random");
var athlete = document.getElementById("input"); 

function getRandomChar()    //隨機產生字母
{   
    var r = Math.floor(Math.random() * 26);
    var str = String.fromCharCode(65 + r);
    contest.innerText = str + contest.innerText;    //打字機
    contestArr[i] = str;
    i++;
    
    return str;
}

for(var k = 0; k < 3; k++)  //開始時，打字機產生三個隨機字母
    getRandomChar();


document.addEventListener('keydown', logkey);
function logkey()   
{
    var e = window.event;
    var str = String.fromCharCode(e.keyCode);
    athlete.innerText += str;       //使用者

    if (str === contestArr[0])
    {
        contestArr.shift();
        i--;

        var s = contestArr.reverse().join('');      //為了innerText
        contestArr.reverse(); 
        contest.innerText = s;
    }

    getRandomChar();
}