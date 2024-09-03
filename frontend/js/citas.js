function mostrarCitas(){
    let request = sendRequest('citas', 'GET', '');
    let tabla = document.getElementById('citas-table');
    tabla.innerHTML="";
    request.onload = function(){
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            tabla.innerHTML += `
            <tr>
            <td>${element.id}</th>
            <td>${element.n_medico}</td>
            <td>${element.especialidad}</td>
            <td>${element.fecha}</td>
            <td>${element.duracion}</td>
            <!--<td>${element.telefono}</td>
            <td>${element.direccion}</td>-->
            <td>
                <button type:"button" class:"boton accion" onclick='window.location="./form_citas.html?id=${element.id}"'>Editar 🖊</button>
                <button type:"button" class:"boton accion" onclick= 'eliminarCita(${element.id})' >Eliminar 🗑</button>
            </td>

            </tr>            
            `
        });      
    }
    request.onerror = function(){
        tabla.innerHTML = `
            <tr>
                <td colspan="">Error al traer los datos</td>
            </tr>
        `
    }
}


    

function eliminarCita(id){
    let request = sendRequest('citas/'+id, 'DELETE', "");
    request.onload = function(){
        mostrarCitas();
    }
}

function guardarCitas(){
    let name = document.getElementById('nombres-n').value
    let esp = document.getElementById('especialidad-e').value
    let fec = document.getElementById('fecha-f').value
    let dur = document.getElementById('duracion-d').value
    let idi = document.getElementById('cita-id').value

    let data = {'id': idi, 'n_medico': name, 'especialidad': esp, 'fecha': fec, 'duracion': dur}

    let request = sendRequest('citas/'+idi, idi ? 'PATCH': 'POST', data)
    request.onload = function (){
        window.location = 'citas.html';
    }
    
    request.onerror = function(){
        alert('Error al guardar los datos')
    }
}

function cargarDatos(id){
    let request = sendRequest('citas/'+id,'GET','');

    let name = document.getElementById('nombres-n')
    let esp = document.getElementById('especialidad-e')
    let fec = document.getElementById('fecha-f')
    let dur = document.getElementById('duracion-d')
    let idi = document.getElementById('cita-id')

    request.onload = function(){
       let data = request.response[0];
        
        idi.value = data.id
        name.value = data.n_medico
        esp.value = data.especialidad
        fec.value = data.fecha
        dur.value = data.duracion

        console.log(data)
    }
    request.onerror = function(){
        alert('Error al cargar los datos')
    }

}