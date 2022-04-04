document.addEventListener('keydown', logkey);
function logkey()
{
    var input = document.getElementById("input").value;
    output.innerText = input;
}