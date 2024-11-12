document.getElementById('calorie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    //Obtener los valores del formulario
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    //Formula de Harris-Benedict
    let bmr;
    if(gender === 'male') {
        //Formula para hombres
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        //Formula para mujeres
        bmr= 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    //Calcular las calorías diarias con el factor de actividad
    const dailyCalories = bmr * activity;

    //Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Tu requerimiento calórico diario  es de <strong>${Math.round(dailyCalories)}</strong> calorías`
    resultDiv.style.display = 'block';

    //Restablecer el formulario
    document.getElementById('calorie-form').reset();
});