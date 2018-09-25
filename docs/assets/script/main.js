$(document).ready(()=>{
  var exercises = [
      {
        name: "Deadlift",
        primary: ["Hamstrings", "Gluteus Maximus"],
        secondary: ["Quadriceps"],
        equipment: ["Barbell"]
      },
      {
        name: "Squat",
        primary: ["Quads", "Glutes"],
        secondary: ["Hamstrings"],
        equipment: ["Barbell", "Rack"]
      },
      {
        name: "Bench Press",
        primary: ["Pectoralis Major Sternal"],
        secondary: ["Pectoralis Major Clavicular", "Anterior Deltiod", "Triceps"],
        equipment: ["Barbell", "Flat Bench"]
      },
      {
        name: "",
        primary: [""],
        secondary: [""],
        equipment:[""]
      },
      {
        name: "Overhead Press",
        primary: ["Anterior Deltoid"],
        secondary: ["Pectoralis Major Clavicular","Triceps","Lateral Deltoid","Lower Trapezius", "Middle Trapezius","Serratus Anterior"],
        equipment:["Barbell"]
      },
      {
        name: "Close Grip Bench Press",
        primary: ["Triceps"],
        secondary: ["Anterior Deltiod","Pectoralis Major Sternal","Pectoralis Major Clavicular"],
        equipment:["Barbell", "Flat Bench"]
      },
      {
        name: "Lying Triceps Extension",
        primary: ["Triceps"],
        secondary: [],
        equipment:["Barbell", "Flat Bench"]
      },
      {
        name: "Triceps Extension",
        primary: ["Triceps"],
        secondary: [""],
        equipment:["Barbell", "Seat"]
      },
      {
        name: "Curl",
        primary: ["Biceps"],
        secondary: ["Brachialis", "Brachioradialis"],
        equipment:["Barbell"]
      },
      {
        name: "Reverse Curl",
        primary: ["Brachioradialis"],
        secondary: ["Brachialis", "Biceps"],
        equipment:["Barbell"]
      },
      {
        name: "Preacher Curl",
        primary: ["Brachioradialis"],
        secondary: ["Brachialis", "Biceps"],
        equipment:["Barbell"]
      },
      {
        name: "Wrist Curl",
        primary: ["Wrist Flexors"],
        secondary: [""],
        equipment:["Barbell"]
      },
      {
        name: "Reverse Wrist Curl",
        primary: ["Wrist Extensors"],
        secondary: [""],
        equipment:["Barbell"]
      },
      {
        name: "Pendlay Row",
        primary: ["Lower Trapezius", "Middle Trapezius", "Rhomboids","Latissimus Dorsi", "Teres Major", "Posterior Deltiod", "Infraspinatus", 'Teres Minor', "Brachialis", "Brachioradialis", "Pectoralis Major Sternal"],
        secondary: ["Biceps", "Triceps"],
        equipment:["Barbell"]
      },
      {
        name: "Pullover",
        primary: ["Latissimus Dorsi"],
        secondary: ["Pectoralis Major Sternal", "Triceps", "Teres Major", "Posterior Deltiod", "Rhomboids", "Levator Scapulae", "Pectoralis Minor" ],
        equipment:["Barbell", "Flat Bench"]
      },
      {
        name: "Shrug",
        primary: ["Upper Trapezius"],
        secondary: ["Middle Trapezius", "Levator Scapulae"],
        equipment:["Barbell"]
      },{
        name: "Decline Bench Press",
        primary: ["Pectoralis Major Sternal"],
        secondary: ["Pectoralis Major Clavicular", "Anterior Deltiod", "Triceps"],
        equipment:["Barbell","Decline Bench"]
      },{
        name: "Incline Bench Press",
        primary: ["Pectoralis Major Clavicular"],
        secondary: ["Anterior Deltiod", "Triceps"],
        equipment:["Barbell", "Incline Bench"]
      },{
        name: "Incline Shoulder Raise",
        primary: ["Serratus Anterior"],
        secondary: ["Pectoralis Major Clavicular"],
        equipment:["Barbell", "Incline Bench"]
      },{
        name: "",
        primary: [""],
        secondary: [""],
        equipment:[""]
      },{
        name: "",
        primary: [""],
        secondary: [""],
        equipment:[""]
      },

  ];
  var muscles =
    ["Adductors", "Biceps", "Brachialis", "Brachioradialis", "Anterior Deltiod", "Lateral Deltoid", "Posterior Deltoid", "Erector Spinae", "Gastronemius", "Gluteus Maximus", "Gluteus Medius", "Gluteus Minimus", "Gracilis", "Hamstrings", "Iliopsoas", "Infraspinatus", "Latissimus Dorsi", "Levator Scapulae", "Obliques", "Pectineous", "Pectoralis Major Clavicular", "Pectoralis Major Sternal", "Teres Major", "Teres Minor", "Tibialis Anterior", "Transverse Abdominus", "Lower Trapezius", "Middle Trapezius", "Upper Trapezius", "Triceps", "Wrist Extensors", "Wrist Flexors", "Popliteus", "Quadriceps", "Rectus Abdominus", "Rhomboids", "Sartorius", "Serratus Anterior", "Soleus", "Splenius", "Sternocleidomastoid", "Subscapularis", "Supraspinatus", "Tensor Fasciae Latae"];

  var muscleGroups =
    [{name: "Pectoralis", comp: ["Pectoralis Major Clavicular", "Pectoralis Major Sternal","Serratus Anterior"]},{name: "Deltoid", comp: ["Anterior Deltiod", "Lateral Deltoid", "Posterior Deltoid"]},{name: "Trapezius", comp:["Lower Trapezius", "Middle Trapezius", "Upper Trapezius","Levator Scapulae", "Rhomboids"]},{name: "Latissimus Dorsi", comp:["Teres Major", "Teres Minor","Latissimus Dorsi",]}, {name:"Abdominals", comp: ["Rectus Abdominus","Obliques","Transverse Abdominus"]}, {name: "Quadriceps", comp: ["Quadriceps","Popliteus"]},{name: 'Hamstrings', comp: ["Hamstrings",]},{name: "Glutes", comp:["Gluteus Maximus", "Gluteus Medius", "Gluteus Minimus"]}, {name: "Calves", comp:["Soleus","Gastronemius"]}, {name: "Forearms", comp:["Brachialis", "Brachioradialis","Wrist Extensors", "Wrist Flexors" ]},{name: "Triceps", comp:["Triceps"]},{name: "Biceps", comp: ["Biceps"]},{name: "Inner Thighs", comp:["Pectineous","Iliopsoas","Sartorius"]}];


  var equpment = [/*list equipment here*/];

  var sunEx = sunEx || [];
  var monEx = monEx || [];
  var tueEx = tueEx ||  [];
  var wedEx = wedEx || [];
  var thuEx = thuEx || [];
  var friEx = friEx || [];
  var satEx = satEx || [];

  var setArr = [];

  //generate list of exercise names in dropdown
  for(var i = 0; i < exercises.length; i++){
    $("#exerciseFormSelect").append("<option>" + exercises[i].name + "</option>");
  };
  //make drowndown searchable
  $("#exerciseFormSelect").select2();

  //when "add exercise" is pressed
  $("#addExButton").off("click").on("click", function(){
    console.log(setArr);
    var exerciseSelect = document.getElementById("exerciseFormSelect").value;
    var sets = document.getElementById("setsText").value;
    var reps = document.getElementById("repsText").value;
    //check which day is active
    var currDay =   $(".tab-pane.active").attr("id");
    console.log(currDay);
    //add exercise, sets, reps to that day's list
    $(".tab-pane.active .table").append(
      "<tr><td><input type='button' class='btn btn-danger' value = 'x'></input>" + exerciseSelect + "</td>" + "<td>" + sets + "</td>" + "<td>" + reps + "</td></tr>");


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
    $(".btn-danger").off("click").on("click", function() {
      //grab name of exercise to be deleted
      var exerciseDelete = ($(this).parent().text());

      //find exercise in array of day's exercises
      if(currDay == "Sunday"){
        for(var i = 0; i < sunEx.length; i++){
          if(sunEx[i][0]==exerciseDelete && sunEx[i][1]!== "0"){
            sunEx.splice(i,1);
            i=sunEx.length;
          }
        }
      }
      else if(currDay == "Monday"){
        for(var i = 0; i < monEx.length; i++){
          if(monEx[i][0]==exerciseDelete && monEx[i][1]!== "0"){
            monEx.splice(i,1);
            i=monEx.length;
          }
        }
      }
      else if(currDay == "Tuesday"){
        for(var i = 0; i < tueEx.length; i++){
          if(tueEx[i][0]==exerciseDelete && tueEx[i][1]!== "0"){
            tueEx.splice(i,1);wed
            i=tueEx.length;
          }
        }
      }
      else if(currDay == "Wednesday"){
        for(var i = 0; i < wedEx.length; i++){
          if(wedEx[i][0]==exerciseDelete && wedEx[i][1]!== "0"){
            wedEx.splice(i,1);
            i=wedEx.length;
          }
        }
      }
      else if(currDay == "Thursday"){
        for(var i = 0; i < thuEx.length; i++){
          if(thuEx[i][0]==exerciseDelete && thuEx[i][1]!== "0"){
            thuEx.splice(i,1);
            i=thuEx.length;
          }
        }
      }
      else if(currDay == "Friday"){
        for(var i = 0; i < friEx.length; i++){
          if(friEx[i][0]==exerciseDelete && friEx[i][1]!== "0"){
            friEx.splice(i,1);
            i=friEx.length;
          }
        }
      }
      else if(currDay == "Saturday"){
        for(var i = 0; i < ssatEx.length; i++){
          if(satEx[i][0]==exerciseDelete && satEx[i][1]!== "0"){
            satEx.splice(i,1);
            i=satEx.length;
          }
        }
      }
      //remove exercise from displayed list
      $(this).parent().parent().remove();

      });
    });

  //when visualize button is pressed
  $("#vizButton").off("click").on("click", function(){
    setArr = [];
    //generate turbo array setArr
    if(document.getElementById("turboCheck").checked){
      //make an array to store sets per muscle

      console.log('viz button pressed');

      addDay = function(dayArr){
          //iterate through each exercise in dayArr: [ex, sets, reps]
          for(var i = 0; i < dayArr.length; i++){
            //grab array of muscles used in each exercise
            var musUsed = exercises[(exercises.findIndex((sub)=>{return sub.name ==dayArr[i][0]}))].primary;
            console.log(musUsed);
            //iterate through each muscle used in exercise
            for(var j = 0; j < musUsed.length; j++){
              var found = false;
              //check through all muscles that already have sets
              for(var k = 0; k < setArr.length; k++){
                //if the muscle is already listed, include sets from current exercise
                if(setArr[k].name == musUsed[j]){
                  found = true;
                  setArr[k].sets += Number.parseInt(dayArr[i][1]);
                  break;
                }
              }
              //if the muscle is not listed, add it and associated sets
              if(found == false){
                setArr.push({name:musUsed[j], sets: Number.parseInt(dayArr[i][1]), sets2: 0})
              }
            }

            //grab secondary muscles and repeat process for sets2
            var musUsed = exercises[(exercises.findIndex((sub)=>{return sub.name ==dayArr[i][0]}))].secondary;
            for(var j = 0; j < musUsed.length; j++){
              var found = false;
              for(var k = 0; k < setArr.length; k++){
                if(setArr[k].name == musUsed[j]){
                  found = true;
                  setArr[k].sets2 += Number.parseInt(dayArr[i][1]);
                  break;
                }
              }
              if(found == false){
                setArr.push({name:musUsed[j], sets: 0, sets2: Number.parseInt(dayArr[i][1])})
              }
            }
          }
      }
      addDay(sunEx);
      addDay(monEx);
      addDay(tueEx);
      addDay(wedEx);
      addDay(thuEx);
      addDay(friEx);
      addDay(satEx);
    console.log(setArr);
    console.log(friEx);
    console.log(sunEx);
    }

    //generate simplified array setArrGr
    else{
      //make an array to store sets per musclegroup
      var setArrGr = [];
      console.log('viz button simple pressed');

      addDay = function(dayArr){
          //iterate through each exercise in dayArr: [ex, sets, reps]
          for(var i = 0; i < dayArr.length; i++){
            //grab array of muscles used in each exercise
            var musUsed = exercises[(exercises.findIndex((sub)=>{return sub.name ==dayArr[i][0]}))].primary;
            console.log(musUsed);
            //iterate through each muscle used in exercise
            for(var j = 0; j < musUsed.length; j++){
              var found = false;
              //grab muscle muscle group
              musUsedGr = muscleGroups[muscleGroups.findIndex((sub)=>{return sub.comp.includes(musUsed[j])})].name;
              console.log(musUsedGr);
              //check through all muscles that already have sets
              for(var k = 0; k < setArrGr.length; k++){
                //if the muscle group is already listed, include sets from current exercise
                if(setArrGr[k].name == musUsedGr){
                  found = true;
                  setArrGr[k].sets += Number.parseInt(dayArr[i][1]);
                  break;
                }
              }
              //if the muscle group is not listed, add it and associated sets
              if(found == false){
                setArrGr.push({name:musUsedGr, sets: Number.parseInt(dayArr[i][1]), sets2: 0})
              }
            }

            //grab secondary muscles and repeat process for sets2
            var musUsed = exercises[(exercises.findIndex((sub)=>{return sub.name ==dayArr[i][0]}))].secondary;
            console.log(musUsed);
            //iterate through each muscle used in exercise
            for(var j = 0; j < musUsed.length; j++){
              var found = false;
              //grab muscle muscle group
              musUsedGr = muscleGroups[muscleGroups.findIndex((sub)=>{return sub.comp.includes(musUsed[j])})].name;
              console.log(musUsedGr);
              //check through all muscles that already have sets
              for(var k = 0; k < setArrGr.length; k++){
                //if the muscle group is already listed, include sets from current exercise
                if(setArrGr[k].name == musUsedGr){
                  found = true;
                  setArrGr[k].sets2 += Number.parseInt(dayArr[i][1]);
                  break;
                }
              }
              //if the muscle group is not listed, add it and associated sets
              if(found == false){
                setArrGr.push({name:musUsedGr, sets: 0, sets2: Number.parseInt(dayArr[i][1])})
              }
            }
          }
        }
      addDay(sunEx);
      addDay(monEx);
      addDay(tueEx);
      addDay(wedEx);
      addDay(thuEx);
      addDay(friEx);
      addDay(satEx);
      console.log(setArrGr);
    }

    //clear display table
    $("#setsTable tbody").empty();
    //generate display table
    if(!(document.getElementById("turboCheck").checked)){
      setArr = setArrGr;
    }
    for(var i = 0; i < setArr.length; i++){
      $("#setsTable tbody").append('<tr><td>' + setArr[i].name + '</td>' + '<td>' + setArr[i].sets + '</td><td>' + setArr[i].sets2 + '</td></tr>'
      )
    }
  });


})
