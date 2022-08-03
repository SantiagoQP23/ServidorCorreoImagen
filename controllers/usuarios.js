const { response, request } = require('express');
const path = require('path');


const subirImagen = async (req = request, res = response) => {

  console.log("Subiendo imagen al servidor");
  console.log(req.files);

  // Si se envian archivos, si no se encontró el archivo imagen
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.imagen) {
    res.status(400).json({msg: 'No se subieron archivos.'});
    return;
  }

  const {imagen} = req.files;

  console.log(imagen)


  uploadPath = path.join(__dirname, '../img/' + imagen.name);

  imagen.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).json({err});
    }

    res.json({msg: 'Archivo subido al servidor '});

  })




}

const { transporter } = require('../config/mailer');

const enviarCorreo = async (req = request, res = response ) => {

  const {email, asunto, mensaje} = req.body;

  console.log(email, asunto, mensaje);

  try{
    await transporter.sendMail({
      from: '"Correo enviado desde App👻" <santiagoquirumbay10@gmail.com>', // sender address
      to: email, // list of receivers
      subject: asunto, // Subject line
      text: mensaje, // plain text body
      
    });

    return res.status(200).json({msg: 'El correo se envio correctamente'});

  }catch (error){
    return res.status(400).json({msg: 'Error al enviar el correo'});
  }



}








const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    enviarCorreo, 
    subirImagen
}