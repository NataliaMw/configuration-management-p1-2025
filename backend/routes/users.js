const express = require('express');
const router = express.Router();

let users = [
  { id: 1, nombre: 'Juan', email: 'juan@mail.com' },
  { id: 2, nombre: 'Ana', email: 'ana@mail.com' },
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(user);
});

router.post('/', (req, res) => {
  const { nombre, email } = req.body;
  if (!nombre || !email) {
    return res.status(400).json({ error: 'Nombre y email son requeridos' });
  }

  const nuevoUsuario = {
    id: users.length + 1,
    nombre,
    email,
  };

  users.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

  const { nombre, email } = req.body;
  if (nombre) user.nombre = nombre;
  if (email) user.email = email;

  res.json(user);
});

router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Usuario no encontrado' });

  const usuarioEliminado = users.splice(index, 1);
  res.json({ mensaje: 'Usuario eliminado', usuario: usuarioEliminado[0] });
});

module.exports = router;
