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

const tasks = document.querySelector('#saveBtn');
  // Function to save tasks in local storage
  function saveTasks(tasks) {
    // Convert the tasks array to a JSON string
    var tasksString = JSON.stringify(tasks);
  
    // Save the tasks string to local storage
    localStorage.setItem("tasks", tasksString);
  }

  function loadTasks() {
    // Check if there are saved tasks in local storage
    if (localStorage.getItem("tasks")) {
      // Retrieve the saved tasks from local storage
      var savedTasks = JSON.parse(localStorage.getItem("tasks"));
  
      // Loop through the saved tasks and display them on the page
      for (var i = 0; i < savedTasks.length; i++) {
        var task = savedTasks[i];
  
        // Display the task on the page
        console.log(task);
        // You can modify this code to display the task in your desired format
      }
    }
  };