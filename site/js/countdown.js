var countDownDate = new Date("Jan 28, 2019 00:37:20").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
    document.getElementById("timer").innerHTML = days + "d:" + hours + "h:" + minutes + "m:" + seconds +"s" ;


    if (distance <= 0 ) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "<center>The Revolution Has Begun</center>";
        var element1 = document.getElementById("main");
        element1.parentNode.removeChild(element1);
        var element2 = document.getElementById("titel");
        element2.parentNode.removeChild(element2);
        var element3 = document.getElementById("slogan");
        element3.parentNode.removeChild(element3);
        var element4 = document.getElementById("timertext");
        element4.parentNode.removeChild(element4);
        
    }
}, 1000)

