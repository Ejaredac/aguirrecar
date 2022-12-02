import bestiaM from "../models/bestia.model.js"

/**
 * [GET]
 * 
 * Funcion usada para la invocacion de todas las bestias.
 * @param {*} req Require que se manda, aqui en esta ruta usalmente estaria vacia, ya que es nada mas para la invocacion de todas las bestias. 
 * @param {*} res Response del resultado, ya sea todas las bestias o un status de error
 * @returns Retornar todas las bestias
 */
export const getBeasts = async (req, res) => {
    try {
        const bestia = await bestiaM.find()
        return res.json(bestia)
    } catch (error) {
        console.log(error)
        console.log('No se invoco a las bestias')
    }
    return res.status(500).json({ message: "Error al invocar a las bestias" })
}

/**
 * [GET]
 * 
 * Funcion para invocar una sola bestia con su id
 * @param {*} req Aqui usaremos el parametro id, que nos lo otrogara la ruta
 * @param {*} res Retornaremos una sola bestia, o los errores de esta peticion.
 * @returns Retornara una bestia
 */
export const getBeast = async (req, res) => {
    try {
        const beast = await bestiaM.findById(req.params.id)
        if (!beast) {
            return res.status(404).json({
                message: "La bestia no esta en esta realidad"
            })
        }
        return res.send(beast)
    } catch (error) {
        console.log(error)
        console.log('No se invoco la bestia')
    }
    return res.status(500).json({ message: "Error al invocar a la bestia" })
}


/**
 * [POST]
 * 
 * Funcion para crear una bestia
 * @param {*} req Se debe mandar un json, o un body. Con los parametros:
 * 
 * -nombre : String
 * 
 * -descripcion : String
 * 
 * -origen : String
 * 
 * -locacion : String
 * 
 * -habilidades : String
 * 
 * -afiliacion : String
 * 
 * -namenaza: Numero
 * @param {*} res Respondera la bestia creada o los status de error de esta
 * @returns Retorna la bestia creada
 */
export const postBeast = async (req, res) => {

    try {
        console.log(req.body)
        const { nombre, descripcion, origen, locacion, habilidades, afiliacion, namenaza } = req.body
        console.log(nombre, descripcion, origen, locacion, habilidades, afiliacion, namenaza)
        const bestia = new bestiaM({
            nombre,
            descripcion,
            origen,
            locacion,
            habilidades,
            afiliacion,
            namenaza
        })
        //res.json(bestia)
        await bestia.save()
        return res.json(bestia)
    } catch (error) {
        console.log(error)
        console.log('No se creo la bestia')
        return res.status(500).json({ message: "Error al crear la bestia" })
    }
}

/**
 * [PUT]
 * 
 * Funcion para mutar una bestia
 * @param {*} req Se debe especificar en la ruta el id de la bestia. 
 * 
 * Se debe mandar un json, o un body. Con los parametros:
 * 
 * -nombre : String
 * 
 * -descripcion : String
 * 
 * -origen : String
 * 
 * -locacion : String
 * 
 * -habilidades : String
 * 
 * -afiliacion : String
 * 
 * -namenaza: Numero
 * @param {*} res Respondera la bestia creada o los status de error de esta
 * @returns Retorna la bestia mutada
 */
export const putBeast = async (req, res) => {
    try {
        const { id } = req.params;
        const beast = await bestiaM.findByIdAndUpdate(id, req.body)
        if (!beast) {
            return res.status(404).json({
                message: "La bestia no tiene existencia, por lo tanto no se pudo mutar"
            })
        }
        return res.json(beast)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error al mutar la bestia" })
    }
}


/**
 * [DELETE]
 * 
 * @param {*} req Se debe especificar en la ruta el id de la bestia.
 * 
 * Se debe mandar un json, o un body. Con los parametros:
 * 
 * -nombre : String
 * 
 * -descripcion : String
 * 
 * -origen : String
 * 
 * -locacion : String
 * 
 * -habilidades : String
 * 
 * -afiliacion : String
 * 
 * -namenaza: Numero
 * @param {*} res Respondera la bestia creada o los status de error de esta
 * @returns Retorna la bestia matada.
 */
export const deleteBeast = async (req, res) => {
    try {
        const beast = await bestiaM.findByIdAndDelete(req.params.id)
        if (!beast) {
            return res.status(404).json({
                message: "La bestia no tiene existencia, por lo tanto no se pudo matar"
            })
        }
        return res.send(beast)

    } catch (error) {
        console.log(error)
    }
    return res.status(500).json({ message: "Error al matar bestia" })
}