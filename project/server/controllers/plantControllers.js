const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Plants } = require('../models/plants');

// => localhost:3000/plants/
router.get('/', (req, res) => {
    Plants.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Plants :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Plants.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Plants :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var pln = new Plants({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    pln.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Plants Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var pln = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Plants.findByIdAndUpdate(req.params.id, { $set: pln }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Plants.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Plants Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;