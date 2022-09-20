var timeDisplayEl = $('#time-display');
var userInputEl =('#inputGroup-sizing-lg');
var formEl = ('event-form');
var rightNow = (moment().format());

// Adds date to the top of the page
function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a"); timeDisplayEl.text(rightNow);
}

function handleScheduleData (event){
event.preventDefault();

console.log('Event Data', userInputEl.val())
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



