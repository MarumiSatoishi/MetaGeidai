window.onload = function() {
    document.getElementById("map2").style.display ="none";
    document.getElementById("detail1").style.display ="none";
    document.getElementById("detail2").style.display ="none";
    document.getElementById("part1").style.display ="none";
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

    document.getElementById("captionA").style.display ="none";
    document.getElementById("captionB").style.display ="none";
    document.getElementById("captionC").style.display ="none";
    document.getElementById("captionD").style.display ="none";

    document.getElementById("map-open").style.display ="none";
}

let tmp = 1;

function map1()
{
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
    $("#part1").hide();
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
    $("#part1").hide();

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

function part1()
{
    $("#detail1").hide();
    $("#part1").show();
    $("#return1").hide();
    $("#return11").show();

    tmp = 111;
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
document.cFrame.location.href = "https://my.matterport.com/show/?m=jkDpPMPdUo6";
}

function newURL2()
{
document.cFrame.location.href = "https://my.matterport.com/show/?m=dRcLDKaeRjL";
}

function newURL3()
{
document.cFrame.location.href = "https://my.matterport.com/show/?m=p1ficG993Lk";
}

function newURL4()
{
document.cFrame.location.href = "https://my.matterport.com/show/?m=w9qpqdrTPhe";
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

$('#detail1_contents1').hover(function() {
    $("#captionA").show();
});

$('#detail1_contents1').mouseleave(function() {
    $("#captionA").hide();
});

$('#detail1_contents2').hover(function() {
    $("#captionB").show();
});

$('#detail1_contents2').mouseleave(function() {
    $("#captionB").hide();
});

$('#detail2_contents1').hover(function() {
    $("#captionC").show();
});

$('#detail2_contents1').mouseleave(function() {
    $("#captionC").hide();
});

$('#detail2_contents2').hover(function() {
    $("#captionD").show();
});

$('#detail2_contents2').mouseleave(function() {
    $("#captionD").hide();
});

$(window).on('load',function(){
    $("#splash_logo").fadeOut(function(){
        $('body').addClass('appear');
    });
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
    $("#part1").hide();
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
        $("#part1").show();
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

// function mOpen(){
//     window.close();
// }
