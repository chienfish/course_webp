// var priceData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24format=JSON";
var price = $.getJSON("./price.json");
var prices = [];
var x = 0;
price.done(function(result){
    $.each(result, function(i, index){
        if (i % 21 == 0){
            prices[x] = index.Fares[0].Price;
            x++;
            // console.log(i);
        }
    });
});

// var stationData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Station/TYMC?%24top=30&%24format=JSON";
var station = $.getJSON("./station.json");
station.done(function(result){
    $.each(result, function(i, index){
        if (i == 20){
            $("#station").append("A" + (i+1) + index.StationName.Zh_tw + "<br/>");
            return false;
        }
        else
            $("#station").append("A" + (i+1) + index.StationName.Zh_tw + "<br/><br/>" + "&emsp;&ensp;&emsp;⇣&emsp;&emsp;$" +prices[i]+ "<br/><br/>");
    });
});