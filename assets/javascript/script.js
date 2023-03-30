


$(function () {
// adding the time and note to local storage when selecting save
  $(".saveBtn").on("click", function(){
    var note = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, note);
  })

  // changing the text area background color based on current hour - red = past, gray = current, blue = future

  function colorUpdate()
  {
    var currentHour = dayjs().hour();

    $(".time-block").each(function(){
      var blockHour = parseInt($(this).attr("id"));

      if(blockHour < currentHour)
      {
        $(this).addClass("past");
      }
      else if(blockHour === currentHour)
      {
        $(this).addClass("present");
        $(this).removeClass("past");
      }
      else{
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    })
  }

  colorUpdate();

  setInterval(colorUpdate, 15000);


//  get back from the local storage and loading back to text areas
  for(var i=9; i<=17;i++)
  {
    $("#"+i+" .description").val(localStorage.getItem(i));
  }

  // Show the date as Day, Month Date, Year
  var today = dayjs().format('dddd, MMMM DD, YYYY');
  $('.dateToday').text(today);
  // 

  // Set time 00:00AM/PM --> NO INTERVAL SET CURRENTLY 
  var dateTime = dayjs().format('hh:mma');
  $('.dateTime').text(dateTime);
  // 


});
