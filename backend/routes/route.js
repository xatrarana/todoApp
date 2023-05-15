const express = require('express');
const { homeController:posts, create, update, deleteNote } = require('../controllers/controller');
const router = express.Router();


router.get('/',posts);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',deleteNote);

module.exports = router;