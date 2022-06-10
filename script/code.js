function calculatebmi(h, w, bmi, c) {
    h = document.getElementById("height").value;
    w = document.getElementById("weight").value;
    bmi = w / h / h;
    c = Math.round(bmi);
    document.getElementById("bmi").innerHTML =
     "<br> BMI is: " + c;
    if (c < 18) {
      document.getElementById("result").innerHTML = 
      "<p> underweight </p>";
    } else if (c > 18 && c < 25) {
      document.getElementById("result").innerHTML =
        "<p> healthy </p>";
    } else if (c > 25 && c < 30) {
      document.getElementById("result").innerHTML =
        "<p> overweight </p>";
    } else if (c> 30) {
      document.getElementById("result").innerHTML =
        "<p> obese </p>";
    };
  };
  
  function clear(bmi, result) {
    document.getElementById("bmi").innerHTML = "<br> BMI is:";
    document.getElementById("result").innerHTML = "";
  };