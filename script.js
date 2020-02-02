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
        rowDiv = $('<div>').addClass('row').attr('id', 'block' + [i]).appendTo(hourBlocks);
        timeDiv = $('<div>').text(hours[i]).addClass('col-1 hour time-block');
        textArea = $('<textarea>').attr("id", [i]).addClass('col-9 input');
        saveBtn = $('<button>').addClass('col-2 saveBtn saveIcon' + [i]);
        saveIcon = $('<i>').addClass('far fa-save');
        $('#block' + [i]).append(timeDiv, textArea, saveBtn);
        $('.saveIcon' + [i]).append(saveIcon);
    }
}
addHourBlocks()