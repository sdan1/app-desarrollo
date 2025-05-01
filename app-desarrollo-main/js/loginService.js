/* Usando EVENTOS para el formulario */

document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password)
    

})

function login(email, password) {
    let message = ''
    let alertType = ''
    localStorage.removeItem ('token')

    fetch("https://reqres.in/api/login" , {
        method: "POST" , 
        headers: {
            "Content-Type": "application/json",
            'x-api-key' : 'reqres-free-v1'
        },
        body: JSON.stringify({email,password})
    })

    .then((response)=> {
        if (response.status === 200) {
            alertType ="success"
            message = 'Inicio de sesion exitoso.'
            console.log('Responde bien' + response)
            alertBuilder(alertType , message)
            //llave (API):
            localStorage.setItem ('token' , 'abcd4321')
            /*REDIRECCION */
            setTimeout(()=> {
                location.href = 'admin/dashboard.html'
            },2000 ) //2000 son 2 segundos
            
        }else{
            alertType = 'danger'
            message = 'Correo electronio o contraseña incorrectos'
            alertBuilder(alertType , message)
        }
        
    })
    .catch((error)=> {
        alertType = 'danger'
        message = 'Correo electronio o contraseña incorrectos'
        console.error('Error', error)
        alertBuilder(alertType , message)
    })
}

 /* Creacion de la ventana de alerta*/
function alertBuilder(alertType , message) {
    let alert= `
     <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
         ${message}
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
 `;
 document.getElementById('alert').innerHTML = alert;
}