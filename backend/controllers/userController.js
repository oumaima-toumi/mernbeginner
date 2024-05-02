const User = require('../models/user.model.js');
//fonction ajouter 
exports.ajouterUser = (req, res) => {
    const data = {
        name: req.body.name,
        number: req.body.number,
    };
    const _user = new User(data);
    
    // Insert data into database
    _user.save()
        .then(() => {
            res.status(200).json({ message: "User added successfully" });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};
//fonction modifier user 
exports.modifierUser = (req, res) => {
    const param = req.params.id;
  
    const modifiedObj = {
      name: req.body.name,
      number: req.body.number
    };
  
    User.findByIdAndUpdate(param, modifiedObj, { new: true }) // Use { new: true } to return the updated document
      .then(modifiedUser => {
        if (!modifiedUser) {
          // User with the specified ID was not found
          return res.status(404).json({ error: 'User not found' });
        }
        // User was successfully updated
        res.status(200).json({ message: 'User modified successfully', user: modifiedUser });
      })
      .catch(error => {
        // Handle any errors that occurred during the update operation
        res.status(400).json({ error: error.message });
      });
  };
  
//lister all users
exports.listerUser =(req,res)=> { 
    
    User.find({}).exec().then(list =>{res.status(200).json({ list })}).catch(error => {console.error('Error fetching user list:', error);
    res.status(400).json({ error: error.message })}) 
};
//supprimer un user by id 
exports.supprimerUser = (req, res) => {
    const param = req.params.id;
  
    User.findByIdAndDelete(param)
      .then(deletedUser => {
        if (!deletedUser) {
          // User with the specified ID was not found
          return res.status(404).json({ error: 'User not found' });
        }
        // User was successfully deleted
        res.status(200).json({ message: 'User deleted successfully' });
      })
      .catch(error => {
        // Handle any errors that occurred during the delete operation
        res.status(400).json({ error: error.message });
      });
  };
  



