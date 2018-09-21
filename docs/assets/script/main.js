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
  for(var i = 0; i < exercises.length; i++){
    $("#exerciseFormSelect").append("<option>" + exercises[i].name + "</option>");
    console.log(exercises[i].name);
  };
$("#exerciseFormSelect").select2();

  document.getElementById("addExButton").onclick = function(){
    var exerciseSelect = document.getElementById("exerciseFormSelect").value;
    var sets = document.getElementById("setsText").value;
    var reps = document.getElementById("repsText").value;
    $("#exerciseListSun").append(  '<li>' +
      '<input type="button" class="btn btn-danger" value = "x"></input>' +
      exerciseSelect +
      " " +
      sets +
      " x " +
      reps +
      '</li>'
    );
    console.log("button pressed")
  };
  $(".btn btn-danger").onclick = function(){
    $(this).parent().remove();
    console.log("button pressed");
  };

  

});
