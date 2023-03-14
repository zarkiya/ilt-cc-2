let contacts = [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890"
    }
  ];
  
  const getAllContacts = () => {
    return contacts;
  }
  
  const addContact = (contact) => {
    const id = contacts.length + 1;
    const newContact = { id, ...contact };
    contacts.push(newContact);
    return newContact;
  }
  
  const deleteContact = (id) => {
    const index = contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      const deletedContact = contacts.splice(index, 1);
    
      return deletedContact[0];
    } else {
      return null;
    }
  }
  
  module.exports = {
    getAllContacts,
    addContact,
    deleteContact
  };