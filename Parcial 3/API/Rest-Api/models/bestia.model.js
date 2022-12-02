import mongoose from "mongoose";


/**
 * Modelo de las bestia, schema del mongodb.
 */
const bestiaSchema  = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    descripcion:{
        type:String
    },
    origen:{
        type:String
    },
    locacion:{
        type:String,
        default:"Desconocido"
    },
    habilidades:{
        type:String,
        default:"Desconocidas"
    },
    afiliacion:{
        type:String,
        default:"Desconocida"
    },
    namenaza:{
        type:Number,
        default:0
    }
},{timestamps:true})

/**
 * Exportacion del schema del modelos de las bestias.
 */
export default mongoose.model('Bestia',bestiaSchema)