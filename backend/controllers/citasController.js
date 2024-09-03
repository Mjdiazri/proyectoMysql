//Importar el modelo
import Citas from '../models/Citas.js';

//Funcion agregar citas
export const agregarCitas = async (req, res) =>{
    try {
        await Citas.create(req.body)
        res.json({msg: "Se agrego una cita"})

    } catch (error) {
        res.json({msg: error.message})
    }
}

//Funcion mostrar citas
export const mostrarCitas = async (req, res) =>{
    try {
        const citas = await Citas.findAll();
        res.json(citas)

    } catch (error) {
        res.json({msg: error.message})
    }
}

//Funcion mostrar una cita
export const getCita = async (req, res) =>{
    try {
        const cita = await Citas.findAll({
            where: {id: req.params.id}
        });
        if(!cita[0]){
            res.status(400).json({msg: "Cita no encontrada con ese ID"})
            return;
        }
        res.json(cita);

    } catch (error) {
        res.json({msg: error.message})
    }
}

//Funcion modificar cita
export const modificarCita = async(req,res) => {
    try {
        await Citas.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({msg: "Se modifico la cita"})

    } catch (error) {
        res.json({msg: error.message})
    }
}

//Funcion eliminar cita
export const eliminarCita = async(req, res) => {
    try {
        await Citas.destroy({
            where: {id: req.params.id}
        })
        res.json({msg: "Se elimino la cita"})

    } catch (error) {
        res.json({msg: error.message})
    }
}