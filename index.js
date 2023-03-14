const express = require('express');
const app = express();

app.use(express.json());

const { getAllContacts, addContact, deleteContact } = require('./contacts');

app.post('/contacts', (req, res) => {
    const newContact = addContact(req.body);
    res.status(201).json(newContact);
});

app.get('/contacts', (req, res) => {
    const allContacts = getAllContacts();
    res.status(200).json(allContacts);
});

app.delete('/contacts/:id', (req, res) => {
    const id = req.params.id;
    const deletedContact = deleteContact(id);
    if (deletedContact) {
    
        res.status(200).json(deletedContact);
        
    } else {
        res.status(404).json({ message: "Contact unknown" });
    }
});

app.listen(3000, () => {
    console.log('Server http://localhost:3000');
});
