import app from './app.js'
import {connectToDB} from './utils/mongoose.js'


/**
 * Funcion main principal que se ejecuta con el Npm start
 * 
 * Donde entabla conexion con la base de datos de mongo para suministrar la biblioteca de bestias de este bestiario.
 */
async function main() {
  await connectToDB()
  app.listen(8082)
  console.log('server is running on port 8082',8082)
}
main()