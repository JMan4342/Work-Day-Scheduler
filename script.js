// Setting current date through Moment API
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



for ( i =  9; i < 18; i++) {
$("#hour-" + i).find("textarea").val(localStorage.getItem("hour-" + i));
}

// Saving tasks in local storage (PRACTICE CODE)
// document.querySelector(".saveBtn").addEventListener("click", saveTask); 
// var saveTask = localStorage.setItem("tasks", JSON.stringify(dutyText));
// var dutyText = document.querySelector(".descriptor");
// $(data) = document.querySelector(".description").nodeValue;
// localStorage.setItem("tasks", JSON.stringify(data));

// $("button").click(function() {
//     $("textarea").data("task")});

// Working code for just 9am slot
// var dutyText = document.querySelector(".description");
$(".saveBtn").on("click", function() {
    var dutyTime = $(this).parent().attr("id");
    var dutyText = $(this).siblings(".description").val().trim();
    // localStorage.setItem("tasks", JSON.stringify($("textarea")));
    localStorage.setItem(dutyTime, dutyText);
})

