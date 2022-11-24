   // Jquery to hover the jumbotron and display Motod.
   $(".panel").hover(function () {
    $(this).append($("<span class='hid'> Just Buy It! </span>"));
},function () {
    $(this).find('span').slideUp('fast');
});

// Show when button is clicked by user.
$(document).ready(function () {

$("#p5").hide();
$("#p4").hide();
$("#p3").hide();
$("#p2").hide();
$("#p1").hide();
$("#showNumbFive").show();
$("#showNumbFour").show();
$("showNumbThree").show();
$("showNumbTwo").show();
$("showNumbOne").show();

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