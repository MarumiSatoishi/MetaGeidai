window.onload = function() {
    document.getElementById("map2").style.display ="none";
    document.getElementById("detail1").style.display ="none";
    document.getElementById("detail2").style.display ="none";
    document.getElementById("architecture").style.display ="none";
    document.getElementById("design").style.display ="none";
    document.getElementById("part2").style.display ="none";

    document.getElementById("return1").style.display ="none";
    document.getElementById("return2").style.display ="none";
    document.getElementById("return11").style.display ="none";
    document.getElementById("return22").style.display ="none";

    document.getElementById("caption1").style.display ="none";
    document.getElementById("caption2").style.display ="none";
    document.getElementById("caption3").style.display ="none";
    document.getElementById("caption4").style.display ="none";
    document.getElementById("caption5").style.display ="none";
    document.getElementById("caption6").style.display ="none";
    document.getElementById("caption7").style.display ="none";
    document.getElementById("caption8").style.display ="none";
    document.getElementById("caption9").style.display ="none";
    document.getElementById("caption11").style.display ="none";

    document.getElementById("map-open").style.display ="none";

    document.getElementById("#detail1_contents1").style.display ="none";
    document.getElementById("#detail1_contents2").style.display ="none";
    document.getElementById("#detail1_contents3").style.display ="none";

    document.getElementById("#architecture_contents1").style.display ="none";
    document.getElementById("#architecture_contents2").style.display ="none";

    document.getElementById("#design_contents1").style.display ="none";
    document.getElementById("#design_contents2").style.display ="none";
}

$("#reserve").hide();

let tmp = 1;

function map1()
{
    $("#map1").show();
    $("#map2").hide();
    $("#detail1").hide();
    $("#detail2").hide();
    $("#return1").hide();
    $("#return2").hide();
    // $("#return11").hide();
    $("#return22").hide();
    $("#architecture").hide();
    $("#design").hide();
    $("#part2").hide();
    $("#ueno").show();
    $("#toride").show();

    tmp = 1;
}

function map2(){
    $("#map1").hide();
    $("#map2").show();
    $("#detail1").hide();
    $("#detail2").hide();
    $("#return1").hide();
    $("#return2").hide();
    $("#return11").hide();
    $("#return22").hide();
    $("#architecture").hide();
    $("#part2").hide();

    tmp = 2;
}

function detail1()
{
    $("#map1").hide();
    $("#map2").hide();
    $("#detail1").show();
    $("#return1").show();
    $("#return11").hide();
    $("#architecture").hide();
    $("#design").hide();
    $("#ueno").hide();
    $("#toride").hide();
    $("#detail1_contents1").hide();
    $("#detail1_contents2").hide();
    $("#detail1_contents3").hide();

    tmp = 11;
}

function detail2()
{
    $("#map1").hide();
    $("#map2").hide();
    $("#detail2").show();
    $("#return2").show();
    $("#return22").hide();
    $("#part2").hide();

    tmp = 22;
}

function architecture()
{
    $("#return11").show();
    $("#detail1").hide();
    $("#architecture").show();
    $("#return1").hide();

    tmp = 111;
}

function design()
{
    $("#return11").show();
    $("#detail1").hide();
    $("#design").show();
    $("#return1").hide();

    tmp = 112;
}

function part2()
{
    $("#detail2").hide();
    $("#part2").show();
    $("#return2").hide();
    $("#return22").show();

    tmp = 222;
}

function newURL1()
{
document.cFrame.location.href = "https://my.matterport.com/show/?m=jkDpPMPdUo6&play=1&dh=0&qs=1&help=0&nt=1&brand=0&gt=0&hr=0&mls=2&vr=0";
}

function newURL2()
{
document.cFrame.location.href = "https://my.matterport.com/show/?m=p1ficG993Lk&play=1&dh=0&qs=1&help=0&nt=1&brand=0&gt=0&hr=0&mls=2&vr=0&qs=1";
}

function newURL3()
{
document.cFrame.location.href = "https://my.matterport.com/show/?m=5ihdy2kLvQr&play=1&dh=0&qs=1&help=0&nt=1&brand=0&gt=0&hr=0&mls=2&vr=0&qs=1";
}

function newURL4()
{
$("#reserve").show();
document.cFrame.location.href = "https://my.matterport.com/show/?m=9YWPia6Tced&cloudEdit=1&sr=-3.04,-1.26&ss=34&play=1&dh=0&help=0&nt=1&brand=0&gt=0&hr=0&mls=2&vr=0&qs=1";
}

$(window).on('load',function(){
    $("#splash").delay(1000).fadeOut('slow');
    $("#splash_logo").delay(360).fadeOut('slow');
});

$('#contents1').hover(function() {
    $("#caption1").show();
});

$('#contents1').mouseleave(function() {
    $("#caption1").hide();
});

$('#contents2').hover(function() {
    $("#caption2").show();
});

$('#contents2').mouseleave(function() {
    $("#caption2").hide();
});

$('#contents3').hover(function() {
    $("#caption3").show();
});

$('#contents3').mouseleave(function() {
    $("#caption3").hide();
});

$('#contents4').hover(function() {
    $("#caption4").show();
});

$('#contents4').mouseleave(function() {
    $("#caption4").hide();
});

$('#contents5').hover(function() {
    $("#caption5").show();
});

$('#contents5').mouseleave(function() {
    $("#caption5").hide();
});

$('#contents6').hover(function() {
    $("#caption6").show();
});

$('#contents6').mouseleave(function() {
    $("#caption6").hide();
});

$('#contents7').hover(function() {
    $("#caption7").show();
});

$('#contents7').mouseleave(function() {
    $("#caption7").hide();
});

$('#contents8').hover(function() {
    $("#caption8").show();
});

$('#contents8').mouseleave(function() {
    $("#caption8").hide();
});

$('#contents9').hover(function() {
    $("#caption9").show();
});

$('#contents9').mouseleave(function() {
    $("#caption9").hide();
});

$('#contents11').hover(function() {
    $("#caption11").show();
});

$('#contents11').mouseleave(function() {
    $("#caption11").hide();
});

function mapClose()
{
    $("#locate").hide();
    $("#map1").hide();
    $("#map2").hide();
    $("#detail1").hide();
    $("#detail2").hide();
    $("#return1").hide();
    $("#return2").hide();
    $("#return11").hide();
    $("#return22").hide();
    $("#architecture").hide();
    $("#design").hide();
    $("#part2").hide();
    $("#map-open").show();
    $("#map-close").hide();
}

function mapOpen(){
    $("#map-open").hide();
    $("#map-close").show();

    if(tmp==1){
        $("#locate").show();
        $("#map1").show();
        $("#map2").hide();
        $("#detail1").hide();
        $("#detail2").hide();
        $("#return1").hide();
        $("#return2").hide();
        $("#return11").hide();
        $("#return22").hide();
        $("#part1").hide();
        $("#part2").hide();
    }
    else if(tmp==2){
        $("#locate").show();
        $("#map1").hide();
        $("#map2").show();
        $("#detail1").hide();
        $("#detail2").hide();
        $("#return1").hide();
        $("#return2").hide();
        $("#return11").hide();
        $("#return22").hide();
        $("#part1").hide();
        $("#part2").hide();
    }
    else if(tmp==11){
        $("#locate").show();
        $("#map1").hide();
        $("#map2").hide();
        $("#detail1").show();
        $("#return1").show();
        $("#return11").hide();
        $("#part1").hide();
    }
    else if(tmp==22){
        $("#locate").show();
        $("#map1").hide();
        $("#map2").hide();
        $("#detail2").show();
        $("#return2").show();
        $("#return22").hide();
        $("#part2").hide();
    }
    else if(tmp==111){
        $("#locate").show();
        $("#detail1").hide();
        $("#architecture").show();
        $("#return1").hide();
        $("#return11").show();
    }
    else if(tmp==112){
        $("#locate").show();
        $("#detail1").hide();
        $("#design").show();
        $("#return1").hide();
        $("#return11").show();
    }
    else{
        $("#locate").show();
        $("#detail2").hide();
        $("#part2").show();
        $("#return2").hide();
        $("#return22").show();
    }
}

function mapshow1(){
    $("#detail1_contents1").show();
    $("#detail1_contents2").show();
    $("#detail1_contents3").hide();
}

function mapshow2(){
    $("#detail1_contents3").show();
    $("#detail1_contents1").hide();
    $("#detail1_contents2").hide();
}
