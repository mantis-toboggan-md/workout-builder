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
      '<input type="button" class="btn btn-danger" value = "x"></input>' +
      exerciseSelect +
      " " +
      sets +
      " x " +
      reps +
      '</li>'
    );
    console.log("add button pressed")

    // when delete button pressed
    $(".btn-danger").on("click", function() {
      //remove exercise
      $(this).parent().remove();
      console.log("delete button pressed")
      });
  };



});
