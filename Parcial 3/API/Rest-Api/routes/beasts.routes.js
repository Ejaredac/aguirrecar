import {Router} from 'express'
import {getBeasts,
        putBeast,
        postBeast,
        deleteBeast,getBeast} from '../controllers/bestia.controllers.js'
const router = Router()



/**
 * @swagger
 * paths:
 *   /bestias:
 *     get:
 *       description: Te da todas las bestias que existen en el bestiario
 *       responses:
 *         200:
 *           description: Respuesta de todas las bestias
 */
router.get('/bestias',getBeasts)


/**
 * @swagger
 * paths:
 *   /bestias/{id}:
 *     get:
 *       parameters:
 *       - in: path
 *         type: Integer
 *         name: id
 *         required: true
 *       description: Te da la bestia especificada por su id
 *       responses:
 *         200:
 *           description: Respuesta de una bestia
 */
router.get('/bestias/:id',getBeast)

/**
 * @swagger
 * paths:
 *   /bestias:
 *     post:
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *                 origen:
 *                   type: string
 *                 locacion:
 *                   type: string
 *                 habilidades:
 *                   type: string
 *                 afiliacion:
 *                   type: string
 *                 namenaza:
 *                   type: number
 *       description: Te da la bestia especificada por su id
 *       responses:
 *         200:
 *           description: Respuesta de una bestia
 */
router.post('/bestias',postBeast)


/**
 * @swagger
 * paths:
 *   /bestias/{id}:
 *     put:
 *       parameters:
 *       - in: path
 *         type: Integer
 *         name: id
 *         required: true
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *                 origen:
 *                   type: string
 *                 locacion:
 *                   type: string
 *                 habilidades:
 *                   type: string
 *                 afiliacion:
 *                   type: string
 *                 namenaza:
 *                   type: number
 *       description: Te da la bestia especificada por su id
 *       responses:
 *         200:
 *           description: Respuesta de una bestia
 */
router.put('/bestias/:id',putBeast)


/**
 * @swagger
 * paths:
 *   /bestias/{id}:
 *     delete:
 *       parameters:
 *       - in: path
 *         type: Integer
 *         name: id
 *         required: true
 *       description: Mata a la bestia por su id
 *       responses:
 *         200:
 *           description: Respuesta de la bestia matada
 */
router.delete('/bestias/:id',deleteBeast)


export default router