const Client = require("../models/client.model");

// get all clients
const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// get a client by id
const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// search clients by name
const searchClients = async (req, res) => {
  try {
    const { name } = req.query;
    const clients = await Client.find({ name: { $regex: name, $options: 'i' } }); // i for case-insensitive
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create a client
const createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a client
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndUpdate(id, req.body)
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }   

    const updatedClient = await Client.findById(id);
    res.status(200).json(updatedClient);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
}


// delete a client
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete all clients
const deleteAllClients = async (req, res) => {
  try {
    const clients = await Client.deleteMany();
    res.status(200).json({ message: 'All clients deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient,
    deleteAllClients,
    searchClients
};