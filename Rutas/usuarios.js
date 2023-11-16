const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const esquema = mongoose.Schema;

const esquema_usuario = new esquema({
  nombre: String,
  email: String,
  telefono: String,
  IDuser: String,
});

const modelo_user = mongoose.model('usuarios', esquema_usuario);

router.post('/agregar_usuario', (req, res) => {
  const nuevo_usuario = new modelo_user({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    IDuser: req.body.IDuser,
  });

  nuevo_usuario
    .save()
    .then(() => {
      res.send('Usuario agregado');
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/obtenerusuarios', async (req, res) => {
  try {
    const usuarios = await modelo_user.find({});
    res.send(usuarios);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
