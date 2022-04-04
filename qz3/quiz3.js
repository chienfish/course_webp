document.addEventListener('keydown', logkey);
function logkey()
{
    var e = window.event;
    // var str = String.fromCharCode(e.keyCode);
    // var inputValue = document.getElementById("input").value;
    var outputValue = document.getElementById("output");

    if (e.key === "ArrowDown") {}
    else if (e.key === "ArrowUp") {}
    else if (e.key === "ArrowLeft") {}
    else if (e.key === "ArrowRight") {}
    else    
        outputValue.innerText += e.key;
    // inputValue.innerText += `${e.key}`;
    // outputValue.innerText = inputValue;
}