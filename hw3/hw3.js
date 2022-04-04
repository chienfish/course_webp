var contestArr = [];
var athleteArr = [];
var i = 0;
var j = 0;

document.addEventListener('keydown', getRandomChar);
function getRandomChar()    //打字機
{
    var contest = document.getElementById("random"); 
    var r = Math.floor(Math.random() * 26);
    var str = String.fromCharCode(65 + r);
    contest.innerText += str;
    
    contestArr[i] = str;
    console.log(i, contestArr[i]);
    i++;
    
}

document.addEventListener('keydown', logkey);
function logkey()   //使用者
{
    
    var e = window.event;
    var str = String.fromCharCode(e.keyCode);
    var header = document.getElementById("input"); 
    header.innerText += str; 
    
    athleteArr[j] = str;
    console.log(j, athleteArr[j]);
    j++;
}

// while (athleteArr[i] === contestArr[100-i])
//     contestArr.pop();
// i++;