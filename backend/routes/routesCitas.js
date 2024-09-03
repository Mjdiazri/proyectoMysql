//Importar express
import express from 'express';

//Importamos controlador
import { agregarCitas, eliminarCita, getCita, modificarCita, mostrarCitas } from '../controllers/citasController.js';

const router = express.Router();

//Rutas metodos Crud

router.post('/', agregarCitas);
router.get('/', mostrarCitas);
router.get('/:id', getCita);
router.patch('/:id', modificarCita);
router.delete('/:id', eliminarCita);

export default router;
