fetch('http://localhost:3000/contactos')
  .then(response => {

        return response.text();
        
    })        // Obtiene una promesa de que obtendrá el texto
    .then(data => {
        const datos = JSON.parse(data);

        document.getElementById("contactos").innerText = datos[0].empresa;

    })     // Recibe el texto y lo procesa
    
let url = 'http://localhost:3000/contactos/';
  let data = {
    nombre: 'Borja',
    apellidos: 'Lucio'
    };

  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    res.json()
   })
  .catch(error => console.error('Error:', error))
  .then(
    response => console.log('Success:', response)
    );