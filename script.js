// Setting current date through Moment API
$("#currentDay").text(moment().format("LL"));

// Identify current hour
const currentHour = +moment().format("H");

// Color code scheduler for past, current, and future
$(".time-block").each(function () {
  const hour = +$(this).attr("id").split("-").pop();

  if (currentHour === hour) {
    $(this).addClass("present");
  } else if (currentHour < hour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
  console.log("Time Block", hour);
});

// Get saved tasks from local storage and load on page refresh
for (i = 9; i < 18; i++) {
  $("#hour-" + i)
    .find("textarea")
    .val(localStorage.getItem("hour-" + i));
}

// Saving tasks in local storage
$(".saveBtn").on("click", function () {
  var dutyTime = $(this).parent().attr("id");
  var dutyText = $(this).siblings(".description").val().trim();
  localStorage.setItem(dutyTime, dutyText);
});
