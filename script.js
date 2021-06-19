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

$("#hour-9").find("textarea").val(localStorage.getItem("#hour-9"));

// Saving tasks in local storage
// document.querySelector(".saveBtn").addEventListener("click", 
// $(localStorage.setItem("tasks", JSON.stringify(data))));
// $(data) = document.querySelector(".description").nodeValue;
// localStorage.setItem("tasks", JSON.stringify(data));

// Working code for just 9am slot
var taskArray = document.querySelector(".description");
function saveTask() {localStorage.setItem("tasks", JSON.stringify(taskArray.value))};
document.querySelector(".saveBtn").addEventListener("click", saveTask);