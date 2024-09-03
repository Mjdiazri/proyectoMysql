//Importar framework express
import express, { response } from 'express';
//Importar corse
import corse from 'cors';
//Importar configuracion de la base de datos
import ConectarBD from '../configdb/db.js';

//Importar archivo rutas
import routesCitas from '../routes/routesCitas.js';

const app = express();
app.use(corse());
app.use(express.json());
app.use('/api/citas', routesCitas) //Importar archivo routesCitas

const port = 5000;

//Verificar conexion a la base de datos
try {
    await ConectarBD.authenticate();
    console.log('conexion exitosa a la base de datos');

} catch (error) {
    console.error('Hubo un error al conectar con la base de datos', error);
}

//Ruta para verificar la pagina
app.get('/',(req, res) => {
    res.send('Hola mundo')
});

//Ruta configuracion servidor
app.listen(port, ()=>{
    console.log('El servidor esta corriendo http://localhost:5000');
})