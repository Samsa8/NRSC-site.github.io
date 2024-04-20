document.addEventListener('DOMContentLoaded', function() {
    var hoursList = [
      { day: 'Sun', hours: 'Closed' },
      { day: 'Mon', hours: '8:00 am - 5:00 pm' },
      { day: 'Tue', hours: '8:00 am - 5:00 pm' },
      { day: 'Wed', hours: '8:00 am - 5:00 pm' },
      { day: 'Thu', hours: '8:00 am - 5:00 pm' },
      { day: 'Fri', hours: '8:00 am - 5:00 pm' },
      { day: 'Sat', hours: 'Closed Now' }
    ];
    
    var today = new Date().getDay(); // Sunday - 0, Monday - 1, etc.
    var hoursListDiv = document.getElementById('hours-list');
  
    hoursList.forEach(function(hoursItem, index) {
      var dayRow = document.createElement('div');
      dayRow.className = 'day-row' + (index === today ? ' today' : '');
  
      var dayDiv = document.createElement('div');
      dayDiv.className = 'day';
      dayDiv.textContent = hoursItem.day;
      dayRow.appendChild(dayDiv);
  
      var hoursDiv = document.createElement('div');
      hoursDiv.className = 'hours';
      hoursDiv.textContent = hoursItem.hours;
      dayRow.appendChild(hoursDiv);
  
      hoursListDiv.appendChild(dayRow);
    });
  });
  