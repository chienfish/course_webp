document.addEventListener('keydown', logkey);

function logkey()
{
    // document.getElementById("word").innerText = "hi";
    var e = e||window.event;
    var str = String.fromCharCode(e.keyCode);
    var header = document.getElementById("word"); 
    header.innerText += str; 
}