const express = require('express');
const router = express.Router();

//@route  GET api/contacts
//@desc Get all users contacts
//@access Public
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

//@route  POST api/contacts
//@desc Get all users contacts
//@access Private
router.post('/', (req, res) => {
    res.send('Add contact');
});

//@route  PUT api/contacts/:id
//@desc Get all users contacts
//@access Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

//@route  DELETE api/contacts/:id
//@desc DELETE all users contacts
//@access Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;