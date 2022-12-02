import { Router } from 'express'

const router = Router()

//rutas
/**
 * @swagger
 * paths:
 *   /libro/{idlibro}:
 *     get:
 *       parameters:
 *       - in: path
 *         type: Integer
 *         name: idlibro
 *         required: true
 *       description: Te da el libro especifico de su ID
 *       responses:
 *         200:
 *           description: Respuesta de un libro
 */
router.get('/',(req,res) => res.send('Hello world'))

export default router