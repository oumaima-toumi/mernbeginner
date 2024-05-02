const express = require('express')
const router =express.Router()
const { ajouterUser,modifierUser,listerUser,supprimerUser} = require('../controllers/userController.js');

router.post('/ajouter',ajouterUser)
router.post('/:id/modifier',modifierUser)
router.get('/lister',listerUser)
router.get('/:id/supprimer',supprimerUser)
module.exports = router ; 