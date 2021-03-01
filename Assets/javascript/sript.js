// display the times of the day
// give the option to update memo
// allow a button to save
// option to remove memo
// 
// This sets the Date on header
var today = moment().format('MMMM Do, YYYY');
console.log(today);
$('#currentDay').text(today);

// Getting a handle on the forms 
var form9 = $('#9');
var form10 = $('#10');
var form11 = $('#11');
var form12 = $('#12');
var form1 = $('#1');
var form2 = $('#2');
var form3 = $('#3');
var form4 = $('#4');
var form5 = $('#5');

// Getting a handle on the buttons
var saveBtn9 = $('#button9');
var saveBtn10 = $('#button10');
var saveBtn11 = $('#button11');
var saveBtn12 = $('#button12');
var saveBtn1 = $('#button1');
var saveBtn2 = $('#button2');
var saveBtn3 = $('#button3');
var saveBtn4 = $('#button4');
var saveBtn5 = $('#button5');

// Functions for buttons to save and show information
saveBtn9.on('click', function (event) {
    event.preventDefault();
    let saved9 = form9.val().trim();

    localStorage.setItem('9am', (saved9));
});
var loadInput9 = (localStorage.getItem('9am'));
form9.text(loadInput9);

saveBtn10.on('click', function (event) {
    event.preventDefault();
    let saved10 = form10.val().trim();

    localStorage.setItem('10am', (saved10));
});
var loadInput10 = (localStorage.getItem('10am'));
form10.text(loadInput10);

saveBtn11.on('click', function (event) {
    event.preventDefault();
    let saved11 = form11.val().trim();

    localStorage.setItem('11am', (saved11));
});
var loadInput11 = (localStorage.getItem('11am'));
form11.text(loadInput11);

saveBtn12.on('click', function (event) {
    event.preventDefault();
    let saved12 = form12.val().trim();

    localStorage.setItem('12pm', (saved12));
});
var loadInput12 = (localStorage.getItem('12pm'));
form12.text(loadInput12);

saveBtn1.on('click', function (event) {
    event.preventDefault();
    let saved1 = form1.val().trim();

    localStorage.setItem('1pm', (saved1));
});
var loadInput1 = (localStorage.getItem('1pm'));
form1.text(loadInput1);

saveBtn2.on('click', function (event) {
    event.preventDefault();
    let saved2 = form2.val().trim();

    localStorage.setItem('2pm', (saved2));
});
var loadInput2 = (localStorage.getItem('2pm'));
form2.text(loadInput2);

saveBtn3.on('click', function (event) {
    event.preventDefault();
    let saved3 = form3.val().trim();

    localStorage.setItem('3pm', (saved3));
});
var loadInput3 = (localStorage.getItem('3pm'));
form3.text(loadInput3);

saveBtn4.on('click', function (event) {
    event.preventDefault();
    let saved4 = form4.val().trim();

    localStorage.setItem('4pm', (saved4));
});
var loadInput4 = (localStorage.getItem('4pm'));
form4.text(loadInput4);

saveBtn5.on('click', function (event) {
    event.preventDefault();
    let saved5 = form5.val().trim();

    localStorage.setItem('5pm', (saved5));
});
var loadInput5 = (localStorage.getItem('5pm'));
form5.text(loadInput5);