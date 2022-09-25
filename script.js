var timeDisplayEl = $('#time-display');
var formEl = $('#event-form');
var rightNow = moment();
$('time-display').text(rightNow);
var saveButton = document.getElementById("save");
var hourNineInput = $('input[name="nine"]');
var hourTenInput = $('input[name="ten"]');
var hourElevenInput = $('input[name="eleven"]');
var hourTwelveInput = $('input[name="twelve"]');
var hourOneInput = $('input[name="one"]');
var hourTwoInput = $('input[name="two"]');
var hourThreeInput = $('input[name="three"]');
var hourFourInput = $('input[name="four"]');
var hourFiveInput = $('input[name="five"]');

saveButton.addEventListener("click", function(event) {
   event.preventDefault();
    var formInputEl = {
    hourNine: hourNineInput.value.trim(),
    hourTen: hourTenInput.val(),
    hourEleven: hourElevenInput.value.trim(),
    hourTwelve: hourTwelveInput.value.trim(),
    hourOne: hourOneInput.value.trim(),
    hourTwo: hourTwoInput.value.trim(),
    hourThree: hourThreeInput.value.trim(),
    hourFour: hourFourInput.value.trim(),
    hourFive: hourFiveInput.value.trim(),

     
    }
    localStorage.setItem("formInputEl",JSON.stringify(formInputEl));
   
    });

// Adds date to the top of the page
function displayTime() {
    var rightNow = moment().format("MMM Do YYYY"); 
    timeDisplayEl.text(rightNow);
}



function addColor (event){
    $('#event-form').children('ul').children().addClass('input-group input-group-lg').css;

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

//handleScheduleData.on('submit', saveButton)
//timeDisplayEl()

setInterval(displayTime, 1000);
