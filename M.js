window.onload = function() 
{
    document.getElementById("caption1").style.display ="none";
    document.getElementById("caption2").style.display ="none";
    document.getElementById("caption3").style.display ="none";
    document.getElementById("caption4").style.display ="none";
    document.getElementById("caption5").style.display ="none";

    document.getElementById("map-open").style.display ="none";
}

function newURL1()
{
document.cFrame.location.href = "https://my.matterport.com/show/?m=HqknDtE4AEH";
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

$(window).on('load',function(){
    $("#splash_logo").fadeOut(function(){
        $('body').addClass('appear');
    });
});

function mapClose()
{
    $("#map1").hide();
    $("#map-open").show();
    $("#map-close").hide();
}

function mapOpen(){
    $("#map-open").hide();
    $("#map-close").show();
    $("#map1").show();
}

// function faOpen(){
//     window.close();
// }
