 function showDuration(eleSelector, startTime, endTime) {
    document.querySelector(eleSelector).innerText = (endTime - startTime);
  }