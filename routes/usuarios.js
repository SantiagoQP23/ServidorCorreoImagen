
const { Router } = require('express');

const { enviarCorreo, subirImagen } = require('../controllers/usuarios');

const router = Router();


router.post('/correo', enviarCorreo);

router.post('/subirImagen', subirImagen);



/* 
router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );


 */


module.exports = router;