// I needed to call in moment to use in multiple places
const m = moment();

var words;
var hourInfo;

console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));

//Adding to the hour block to the html

var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var hourBlocks = $('#hour-blocks');

function addHourBlocks() {
    for (var i = 0; i < hours.length; i++) {
        console.log(hours[i]);
        rowDiv = $('<div>').addClass('row').attr('id', 'block' + [i]).appendTo(hourBlocks);
        timeDiv = $('<div>').text(hours[i]).addClass('col-2 hour time-block');
        textArea = $('<textarea>').attr("id", [i]).addClass('col-8 input');
        saveBtn = $('<button>').addClass('col-2 saveBtn saveIcon' + [i]);
        saveIcon = $('<i>').addClass('far fa-save');
        $('#block' + [i]).append(timeDiv, textArea, saveBtn);
        $('.saveIcon' + [i]).append(saveIcon);
    }
}
addHourBlocks();

$(document).ready(function () {
    colorChange();
    renderText();
});

//Adding the color change option to the rows based on the time of day
function colorChange() {

    var realTime = parseInt(moment().hours()) - 9;
    console.log("Current Time ID: " + realTime);

    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);

        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
};

//Rendering the saved text
function renderText() {
    console.log("Rendering function is running");
    for (var j = 0; j < hours.length; j++) {
        hourInfo = $(this).siblings(".hour").text();
        console.log("Hours: " + hours[j]);
        var saveWords = JSON.parse(localStorage.getItem(hours[j]));
        console.log(saveWords);
        console.log("#text" + [j]);
        console.log("------------------")
        $("#" + [j]).val(saveWords || "");
    }
};

//Adding the save Button
$(".saveBtn").click(function () {
    var realTime = parseInt(moment().hours()) - 9;
    console.log("Current Time ID: " + realTime);
    words = $(this).siblings(".input").val();
    console.log("words: " + words);
    hourInfo = $(this).siblings(".hour").text();
    console.log("hour info: " + hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));

    colorChange();
    renderText();
});

