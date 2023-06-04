function updateDateTime() {
    var currentDateElement = document.getElementById("currentdate");
    var currentTimeElement = document.getElementById("currenttime");

    var currentDate = new Date();
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.innerText = currentDate.toLocaleDateString('en-US', dateOptions);

    var currentTime = currentDate.toLocaleTimeString('en-US');
    currentTimeElement.innerText = currentTime;
  }


setInterval(updateDateTime, 1000);