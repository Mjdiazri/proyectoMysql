//Importar conexion a base de datos
import ConectarBD from "../configdb/db.js";

//Importar Sequialize
import { DataTypes } from "sequelize";

const Citas = ConectarBD.define('citas', { //Se apunta a la tabla "citas" de la base de datos
    
    n_medico:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    especialidad:
    {
        type: DataTypes.STRING,
        allowNull:false
    },

    fecha:
    {
        type: DataTypes.STRING,
        allowNull:false
    },

    duracion:
    {
        type: DataTypes.STRING,
        allowNull:false
    },


})  

export default Citas;