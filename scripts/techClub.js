

  function getDateOfNextMeeting(){

    var meetingDates = [];
    var feb = new Date("Feb 17 2018");

    var march = new Date("March 17 2018");
    var april = new Date("April 21 2018");
    var may = new Date("May 19 2018");
    var june = new Date("June 16 2018");
    var july = new Date("July 21 2018");
    var aug  = new Date("August 18 2018");
    var sep = new Date("September 15 2018");
    var oct = new Date("October 20 2018");
    var nov = new Date("November 17 2018");

    meetingDates.push(feb, march, april, may, june, july, aug, sep, oct, nov);

    var meetingDate;
    var todaysDate = new Date("June 5 2018");

    for(var i = 0 ; i < meetingDates.length; i++){

      meetingDate = meetingDates[i];
      if(meetingDate > todaysDate){
        break;
      }
    }
    return meetingDate;
  }

  function displayDateOfNextMeeting(){

    console.log("date of next meeting");

    var dateOfNextMeeting = getDateOfNextMeeting();

    var meetingDisplay = document.getElementById('meetingDates');

    meetingDisplay.innerHTML = dateOfNextMeeting;

  }
