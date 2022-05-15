const changeText = (event) =>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了"
}

document.addEventListener("click", function(e){
    if (e.target.id == "btn")
        changeText(e)
});

const MultiButton = (num) =>{
    var output = [];
    for (let i = 1; i < num+1; ++i)
        output.push(<button id = 'btn'>第{i}個按鍵</button>)
    return output;
}

export default MultiButton;
