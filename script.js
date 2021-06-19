// var now = moment();
// var currentDay = document.querySelector("#currentDay");
$("#currentDay").text(moment().format("LL"));

const currentHour = +moment().format("H");

$(".time-block").each(function(){
    const hour = +$(this).attr("id").split("-").pop();

    if (currentHour === hour){
        $(this).addClass("present");
    } else if (currentHour < hour) {
        $(this).addClass("future");
    } else {
        $(this).addClass("past");
    }
console.log("Time Block", hour);
});

$(this).find("textarea").val(localStorage.getItem("#hour-9" + [i]));