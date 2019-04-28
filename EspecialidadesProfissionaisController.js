const express = require('express');
const router  = express.Router();
const models  = require('../models');


router.post('/', function(req, res){
    models.EspecialidadeProfissional.create(req.body)
        .then(especialidade => res.status(200).send(especialidade))
        .catch(err => res.status(500).send(err))
});

router.get('/', function (req, res){
    models.EspecialidadeProfissional.findAll()
    .then(especialidade => res.status(200).send(especialidade))
    .catch(err => res.status(status).send(err))
});

router.get('/:id', function (req, res){
    models.EspecialidadeProfissional.findById(req.params.id)
    .then(especialidade => {
        if (!especialidade) res.status(404).send("Not Found.");
        res.status(200).send(especialidade)
    })
    .catch(err => res.status(500).send(err))
});

router.delete('/:id', function (req,res){
    models.EspecialidadeProfissional.findById(req.params.id)
    .then(especialidade => {
        if (!especialidade) res.status(404).send("Not Found")

        models.EspecialidadeProfissional.destroy({
            where: { id: req.params.id }
        })
        .then(especialidade => {
            res.status(200).send({sucess: true})
        })
        .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
});

router.put('/:id', function (req, res){
    models.EspecialidadeProfissional.findById(req.params.id)
    .then(especialidade => {
        if (!especialidade) res.status(404).send("Not Found.")
        
        especialidade.updateAttributes(req.body)

        res.status(200).send(especialidade)
    })
    .catch(err => {
        res.status(500).send(err)
    })
});

module.exports = router;