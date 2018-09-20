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
    $("#exerciseFormSelect").replace("<option>" + exercises[i].name + "</option>");
    console.log(exercises[i].name);
  };

  // 
  // document.getElementById("exerciseFormSelect").oninput = function(){
  //   var exerciseSelect = document.getElementById("exerciseFormSelect").value;
  //   $("#exerciseListSun").append('<li>' + exerciseSelect + '</li>');
  // }

});
