   // Jquery to hover the panel/jumbotron and display slogan.
   $(".panel").hover(function () {
    $(this).append($("<span class='hid'> Just Buy It! </span>"));
},function () {
    $(this).find('span').slideUp('fast');
});

// Display more btn.
$(document).ready(function () {

$("#p10").hide();    
$("#p9").hide();    
$("#p8").hide();
$("#p7").hide();
$("#p6").hide();        
$("#p5").hide();
$("#p4").hide();
$("#p3").hide();
$("#p2").hide();
$("#p1").hide();
$("#showNumbTen").show();
$("#showNumbNine").show();
$("#showNumbEight").show();
$("#showNumbSeven").show();
$("#showNumbSix").show();
$("#showNumbFive").show();
$("#showNumbFour").show();
$("showNumbThree").show();
$("showNumbTwo").show();
$("showNumbOne").show();

$("#showNumbTen").click(function(){
    $("#p10").toggle();
    $("#showNumbTen").html() === 'Visa mer' ? $("#showNumbTen").html('Visa mindre') : $("#showNumbTen").html('Visa mer');
});

$("#showNumbNine").click(function(){
    $("#p9").toggle();
    $("#showNumbNine").html() === 'Visa mer' ? $("#showNumbNine").html('Visa mindre') : $("#showNumbNine").html('Visa mer');
});

$("#showNumbEight").click(function(){
    $("#p8").toggle();
    $("#showNumbEight").html() === 'Visa mer' ? $("#showNumbEight").html('Visa mindre') : $("#showNumbEight").html('Visa mer');
});

$("#showNumbSeven").click(function(){
    $("#p7").toggle();
    $("#showNumbSeven").html() === 'Visa mer' ? $("#showNumbSeven").html('Visa mindre') : $("#showNumbSeven").html('Visa mer');
});

$("#showNumbSix").click(function(){
    $("#p6").toggle();
    $("#showNumbSix").html() === 'Visa mer' ? $("#showNumbSix").html('Visa mindre') : $("#showNumbSix").html('Visa mer');
});

$("#showNumbFive").click(function(){
     $("#p5").toggle();
     $("#showNumbFive").html() === 'Visa mer' ? $("#showNumbFive").html('Visa mindre') : $("#showNumbFive").html('Visa mer');
});

$("#showNumbFour").click(function(){
     $("#p4").toggle();
     $("#showNumbFour").html() === 'Visa mer' ? $("#showNumbFour").html('Visa mindre') : $("#showNumbFour").html('Visa mer');
});

$("#showNumbThree").click(function(){
     $("#p3").toggle();
    //  $("#showNumbFive").html("Visa mindre").toggle();
     $("#showNumbThree").html() === 'Visa mer' ? $("#showNumbThree").html('Visa mindre') : $("#showNumbThree").html('Visa mer');
});

$("#showNumbTwo").click(function(){
     $("#p2").toggle();
    //  $("#showNumbFive").html("Visa mindre").toggle();
     $("#showNumbTwo").html() === 'Visa mer' ? $("#showNumbTwo").html('Visa mindre') : $("#showNumbTwo").html('Visa mer');
});

$("#showNumbOne").click(function(){
     $("#p1").toggle();
    //  $("#showNumbFive").html("Visa mindre").toggle();
     $("#showNumbOne").html() === 'Visa mer' ? $("#showNumbOne").html('Visa mindre') : $("#showNumbOne").html('Visa mer');
});
});