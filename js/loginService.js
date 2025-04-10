/* Usando EVENTOS para el formulario */

document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let message = ''
    let alertType = ''

    if (email === '' || password === '' ){
        alertType = 'warning'
        message = 'Por favor ingresa toda la informacion requerida.'
    }
    else if (email === 'prueba@gmail.com' && password === '123456') {
        alertType ='success'
        message = 'Inicio de seccion exitoso.'
    }
    else{
        alertType = 'danger'
        message = 'Correo electronio o contraseña incorrectos'
    }
    /* Creacion de la ventana de alerta*/
    let alert= `
        <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    document.getElementById('alert').innerHTML = alert

})

function login(email, password) {
    fetch("https://reqres.in/api/login" , {
        method: "POST" , 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email,password})
    })

    .then((data)>={
        alertType ='success'
        message = 'Inicio de seccion exitoso.'
        console.log('Responde bien' + data)
    })
    .catch((error) >={
        alertType = 'danger'
        message = 'Correo electronio o contraseña incorrectos'
        console.error('Erro')

    })
     /* Creacion de la ventana de alerta*/
     let alert= `
     <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
         ${message}
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
 `;
}