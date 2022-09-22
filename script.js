var timeDisplayEl = $('#time-display');
var userInputEl = $('input[name=9:00]');
var formEl = $('event-form');
//var rightNow = moment();
//$('time-display').text(rightNow)


// Adds date to the top of the page
function displayTime() {
    var rightNow = moment().format("MMM Do YYYY"); 
    timeDisplayEl.text(rightNow);
}

function handleScheduleData (event){
event.preventDefault();

console.log("9:00", userInputEl.val())
}

function addColor (event){
    if (rightNow() === isFuture) {
       element.classList.add('.future')
    } else if (rightNow() === isPast) {
            element.classList.add('.past');
        } else if (rightNow() === rightNow()) {
                element.classList.add('.present')
            }
        }


var isFuture = rightNow > rightNow

var isPast = rightNow < rightNow

formEl.on('submit', handleScheduleData)



