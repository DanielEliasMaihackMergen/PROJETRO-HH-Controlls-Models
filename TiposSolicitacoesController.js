const express = require('express');
const router = express.Router();
const models = require('../models');


router.post('/', function (req, res){
    models.TipoSolicitacao.create(req.body)
        .then(tiposol => res.status(200).send(tiposol))
        .catch(err => res.status(500).send(err))
})


router.get('/', function(req, res){
    models.TipoSolicitacao.findAll()
    .then(tiposol => res.status(200).send(tiposol))
    .catch(err => res.status(500).send(err))
})


router.get('/:id', function (req, res){
    models.TipoSolicitacao.findById(req.params.id)
    .then(tiposol => {
        if (!tiposol) res.status(404).send("Not Found.")
        res.status(200).send(tiposol)
    })
    .catch(err => res.status(500).send(err))
})


router.delete('/:id', function (req, res){
    models.TipoSolicitacao.findById(req.params.id)
    .then(tiposol => {
        if (!tiposol) res.status(404).send("Not Found")

        models.TipoSolicitacao.destroy({
            where: { id: req.params.id }
        })
        .then(tiposol => {
            res.status(200).send({success: true})
        })
        .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
})


router.put('/:id', function(req, res){
    models.TipoSolicitacao.findById(req.params.id)
    .then(tiposol => {
        if (!tiposol) res.status(404).send("Not Found.")

        tiposol.updateAttributes(req.body)

        res.status(200).send(tiposol)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})

module.exports = router;