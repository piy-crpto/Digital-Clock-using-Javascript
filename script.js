console.log("This is clock.js");

function updateClock()
{   
    //Get the current date
    let currentTime = new Date();

    //Extract hour,minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
     
//Choose AM/Pm as per the time of the day
let timeofDay = (currentHour<12) ? "AM":"PM";

     //pad 0 if minutes or second is less than 10 (single digit)
    currentMinutes = (currentMinutes<10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds<10 ? "0" : "") + currentSeconds;
   


   //Convert railway clock to AM/PM clock
  currentHour = (currentHour>12)? currentHour-12:currentHour;
  currentHour = (currentHour==0)? 12:currentHour;

  
  currentHour = (currentHour<10 ? "0" : "") + currentHour;



    //Prepare the time string from hours,minutes and seconds
    let currentTimeStr = currentHour + " : " + currentMinutes +  " : " + currentSeconds +  " " + timeofDay;

    //Insert the time string in the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;
}
let currentTym = new Date();
let currentDays = currentTym.getDay();
let day = document.getElementById("day");
if(currentDays==1)
{
    day.innerHTML = 'Monday';
}
else if(currentDays==2)
{
    day.innerHTML = 'Tuesday';
} else if(currentDays==3)
{
    day.innerHTML = 'Wednesday';
}else if(currentDays==4)
{
    day.innerHTML = 'Thursday';
}else if(currentDays==5)
{
    day.innerHTML = 'Friday';
}else if(currentDays==6)
{
    day.innerHTML = 'Saturday';
}
else if(currentDays==7)
{
    day.innerHTML = 'Sunday';
}
