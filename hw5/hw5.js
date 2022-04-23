// var stationData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Station/TYMC?%24top=30&%24format=JSON";
var station = $.getJSON("./station.json");
station.done(function(result){
    $.each(result, function(i, index){
        if (i == 20)
            $("#station").append("A" + (i+1) + index.StationName.Zh_tw + "<br/>").addClass("box");
        else
            $("#station").append("A" + (i+1) + index.StationName.Zh_tw + "<br/>" + "&emsp;&ensp;&emsp;⇣" + "<br/>");
    });
});

// var priceData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=30&%24format=JSON";
var price = $.getJSON("./price.json");
price.done(function(result){
    $.each(result, function(i, index){
        $("#price").append(index.Fare[0].Price + "<br/>");
    });
});