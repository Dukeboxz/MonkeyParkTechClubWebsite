

  function getDatesOfFutureMeetings(){

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
    var todaysDate = new Date();

      var remainingMeetingDates = [];
    for(var i = 0 ; i < meetingDates.length; i++){


      if(meetingDates[i].getTime() >= todaysDate.getTime()){

        var temp = meetingDates[i];

      remainingMeetingDates.push(temp);

      }
    }
    return remainingMeetingDates;
  }

  function displayDateOfNextMeeting(){

    console.log("date of next meeting");

    var remainingDates = getDatesOfFutureMeetings();
    console.log("mD " + remainingDates.length);
    var dateOfNextMeeting = remainingDates[0].toDateString();

    var meetingDisplay = document.getElementById('meetingDates');
    var futureMeetingDatesDisplay = document.getElementById("futureDates");

    meetingDisplay.innerHTML = "Date Of Next Meeting <br>" + dateOfNextMeeting + " 14:00";
    var htmlFragment = "";
    for(var i = 1 ; i < remainingDates.length; i++){
      var nextDate = remainingDates[i].toDateString();
      htmlFragment += nextDate + " 14:00" + "<br>";

    }
    futureMeetingDatesDisplay.innerHTML = htmlFragment;

  }

  $(document).ready(function(){
    $("#seeFutureDates").click(function(){
        $("#futureDates").slideToggle("slow");
    });
});
