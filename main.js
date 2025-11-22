function calculatebmi() {

  let weightInput = prompt("Enter your weight in kg ");
  let heightInput = prompt("Enter your height in cms");

  let weight = parseFloat(weightInput);
  let heightCm = parseFloat(heightInput);
    
  let height = heightCm / 100;

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("result").innerHTML = "⚠️ Please enter valid values!";
    return;
  }

  let bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  document.getElementById("result").innerHTML = 
    `Your BMI is <strong>${bmi.toFixed(2)}</strong> (${category})`;
}
