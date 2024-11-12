
//Obtener los elemenos del DOM
const opinionForm = document.getElementById('opinionForm');
const opinionsList = document.getElementById('opinionsList');

//Función para manejar el envío del formulario
opinionForm.addEventListener('submit', function(event) {
    event.preventDefault(); //Evita que la página se recargue

    //Obtener los valores del formulario
    const email = document.getElementById('email').value;
    const opinion = document.getElementById('opinion').value;

    //Crear un nuevo elemento en la lista de opinión
    const newOpinion = document.createElement('li');
    newOpinion.innerHTML = `<strong>${email}:</strong> ${opinion}`;

    //Añadir nueva opinión
    opinionsList.appendChild(newOpinion);

    //Limpiar el formulario
    opinionForm.reset();

});