import mongoose from 'mongoose'

/**
 * 
 * Constante de la url para ala conexion a la base de datos local de mongodb
 */
const mongodb_uri = 'mongodb://localhost:27017'


/**
 * 
 * Funcion asincrona para conectarse a la base de datos de mongodb por medio de la url
 */
export async function connectToDB() {
  try {
    await mongoose.connect(mongodb_uri)
    console.log('Mongodb connected')
  } catch (error) {
    console.error(error)
  }
}