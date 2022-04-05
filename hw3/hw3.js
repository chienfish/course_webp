var contestArr = [];
var i = 0;
var contest = document.getElementById("random");
var athlete = document.getElementById("input"); 
var correct = document.getElementById("correct");
var time = document.getElementById("time");
var word = document.getElementById("word");

function getRandomChar()    //隨機產生字母
{   
    var r = Math.floor(Math.random() * 26);
    var str = String.fromCharCode(65 + r);
    contest.innerText = str + contest.innerText;    //打字機
    contestArr[i] = str;
    i++;

    return str;
}

document.addEventListener('keydown', create);
function create()
{
    for (var k = 0; k < 3; k++)      //按下按鍵開始時，打字機產生三個隨機字母
        getRandomChar();
}

var press = true;
var time1 = 0;
var time2 = 0;
var totalTime = 0;
var correctRes = 0;
var timeRes = 0;

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

        correctRes++;
        correct.innerText = correctRes;
    }

    if (press == true)
    {
        time1 = new Date().getTime();
        press = !press;
    }
    else
    {
        time2 = new Date().getTime();
        press = !press;
    }

    var spendTime = Math.abs(time2 - time1);
    if (time1 == 0 || time2 == 0)
        spendTime = 0;
    totalTime += spendTime;

    
    timeRes += spendTime;
    time.innerText = timeRes/1000;

    while (totalTime >= 400)     //1秒2.5個字 => 0.4秒1個字
    {
        getRandomChar();
        totalTime -= 400;


        word.innerText = i;
        if (i >= 50)
        {
            alert(" !! Competition is Over !! ");
            break;
        }
        
    }
}