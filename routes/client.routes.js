const express = require('express');
const router = express.Router();
const { getClients, getClient, createClient, updateClient, deleteClient, deleteAllClients } = require('../controllers/client.controller');

// controller
router.get('/', getClients);
router.get('/:id', getClient);
router.post('/', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);
router.delete('/', deleteAllClients);


module.exports = router;