function startPressed() {
  navigateToCalculator(); // Automatically navigate to the calculator
}

function navigateToCalculator() {
  window.location.href = 'second.html'; // Link to the second screen
}
function infos() {
  aboutAccess(); 
}

function aboutAccess (){
  window.location.href = 'about.html';
}

document.getElementById('water-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  // Calculate daily water intake in liters
  const waterIntake = (weight * 30) / 1000; // 30 ml per kg of body weight
  
  // Display the result
  document.getElementById('result').innerText = `You should drink approximately ${waterIntake.toFixed(2)} liters of water per day.`;
});
