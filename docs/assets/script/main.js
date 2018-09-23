$(document).ready(()=>{
  var exercises = [
      {
        name: "Deadlift",
        primary: ["Hamstrings", "Glutes"],
        secondary: ["Quads", "Hip Flexors"],
        equipment: ["Barbell"]
      },
      {
        name: "Squat",
        primary: ["Quads", "Glutes"],
        secondary: ["Hamstrings"],
        equipment: ["Barbell", "Rack"]
      }
  ];
  var muscleGroups =[/*list muscle groups, subgroups here*/];

  var equpment = [/*list equipment here*/];

  var sunEx = sunEx || [];
  var monEx = monEx || [];
  var tuesEx =tuesEx ||  [];
  var wedEx = wedEx || [];
  var thuEx = thuEx || [];
  var friEx = friEx || [];
  var satEx = satEx || [];

  //generate list of exercise names in dropdown
  for(var i = 0; i < exercises.length; i++){
    $("#exerciseFormSelect").append("<option>" + exercises[i].name + "</option>");
    console.log(exercises[i].name);
  };
  //make drowndown searchable
  $("#exerciseFormSelect").select2();


  //when "add exercise is pressed"
  document.getElementById("addExButton").onclick = function(){
    var exerciseSelect = document.getElementById("exerciseFormSelect").value;
    var sets = document.getElementById("setsText").value;
    var reps = document.getElementById("repsText").value;
    //check which day is active
    var currDay =   $(".tab-pane.active").attr("id");
    console.log(currDay);
    //add exercise, sets, reps to that day's list
    $(".tab-pane.active .exercise-list").append(  '<li>' +
      '<input type="button" class="btn btn-danger" value = "x"></input>' + '<span class = "exName">' +
      exerciseSelect + '</span>' +
      " " +
      sets +
      " x " +
      reps +
      '</li>')
      //add exercise, sets, reps to days'array
      if (currDay == "Sunday"){
        sunEx.push([exerciseSelect,sets,reps]);
      }
      else if(currDay == "Monday"){
        monEx.push([exerciseSelect,sets,reps]);
      }
      else if(currDay == "Tuesday"){
        tuesEx.push([exerciseSelect,sets,reps]);
      }
      else if(currDay == "Wednesday"){
        wedEx.push([exerciseSelect,sets,reps]);
      }
      else if(currDay == "Thursday"){
        thuEx.push([exerciseSelect,sets,reps]);
      }
      else if(currDay == "Friday"){
        friEx.push([exerciseSelect,sets,reps]);
      }
      else if(currDay == "Saturday"){
        satEx.push([exerciseSelect,sets,reps]);
      }


    console.log("add button pressed")
    console.log(typeof exerciseSelect);

    // when delete button pressed
    setTimeout(function(){
    $(".btn-danger").on("click", function() {
      //remove exercise from displayed list
      $(this).parent().remove();

      //grab name of exercise to be deleted
      var exerciseDelete = ($(this).next().text());
      //find exercise in array of day's exercises
      if(currDay == "Sunday"){
        for(var i = 0; i < sunEx.length; i++){
          if(sunEx[i][0]==exerciseDelete && sunEx[i][1]!== 0){
            sunEx[i][1]=0;
            sunEx[i][2]=0;
            i=sunEx.length;
            console.log(sunEx);
          }
        }
      }
      else if(currDay == "Monday"){
        monEx.find(exerciseDelete);
      }
      else if(currDay == "Tuesday"){
        tuesEx.find(exerciseDelete);
      }
      else if(currDay == "Wednesday"){
        wedEx.find(exerciseDelete);
      }
      else if(currDay == "Thursday"){
        thuEx.find(exerciseDelete);
      }
      else if(currDay == "Friday"){
        friEx.find(exerciseDelete);
      }
      else if(currDay == "Saturday"){
        satEx.find(exerciseDelete);
      }

      console.log("delete button pressed")
      });
    },400);
  };



});
