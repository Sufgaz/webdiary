$(document).ready(function() {
  // Function to display current date and time
  function displayDateTime() {
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    var currentTime = dayjs().format('h:mm:ss A');
    
    var dateTimeString = currentDate + ' ' + currentTime;
    $('#currentDay').text(dateTimeString);
  }
  // Initial call to display date and time
  displayDateTime();
  // Update date and time every minute
  setInterval(displayDateTime, 1); // Update every second
});

  // Function to save tasks in local storage
  $('.saveBtn').on('click', function() {
    var hour = $(this).siblings('.hour').text();
    var task = $(this).siblings('.description').val();
    localStorage.setItem(hour, task);
    console.log('.saveBtn');
  });
