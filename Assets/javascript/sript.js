// display the times of the day
// give the option to update memo
// allow a button to save
// option to remove memo
// 
// This sets the Date on header
var today = moment().format('MMMM Do YYYY');
 console.log(today);
 $('#currentDay').text(today);

var form9 = $('').val();
var form10 = $('#10').val();
var form11 = $('#11').val();
var form12 = $('#12').val();
var form1 = $('#1').val();
var form2 = $('#2').val();
var form3 = $('#3').val();
var form4 = $('#4').val();
var form5 = $('#5').val();

var saveBtn = $('.save');
var deleteBtn = $('.delete');

saveBtn.click(function(){
    console.log(form9)
});



