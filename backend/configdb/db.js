import { Sequelize } from "sequelize";

const ConectarBD = new Sequelize('dbcitas','root','',{ //Se apunta a la base de datos dbcitas
    host: 'localhost',
    dialect:'mysql',
})

export default ConectarBD;