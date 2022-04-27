setInterval(function(){
    var today = new Date();
    $("#clock").text(today.getHours()+':'+today.getMinutes()+':'+today.getSeconds());
},100);