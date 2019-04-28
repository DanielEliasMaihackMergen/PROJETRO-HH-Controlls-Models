const express = require('express');
const router  = express.Router();
const models  = require('../models');

router.post('/', function (req, res){
    models.StatusSocilicitacao.create(req.body)
        .then(statusSol => res.status(200).send(statusSol))
        .catch(err => res.status(500).send(err))
})

router.get('/', function (req, res){
    models.StatusSocilicitacao.findAll(req.body)
        .then(statusSol => res.status(200).send(statusSol))
        .catch(err => res.status(500).send(err))
})

router.get('/:id', function (req, res){
    models.StatusSocilicitacao.findById(req.params.id)
    .then(statusSol =>
        {
            if (!statusSol) res.status(404).send("Not Found.");
            res.status(200).send(statusSol)
        }
    )
    .catch(err => res.status(500).send(err))
})

router.delete('/:id', function (req, res){
    models.StatusSocilicitacao.findById(req.params.id)
    .then (statusSol => {
        if (!statusSol) res.status(404).send("Not Found")

        models.StatusSocilicitacao.destroy({
            where: { id: req.params.id }
        })
        .then(statusSol => {
            res.status(200).send({sucess: true})
        })
        .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
})

router.put('/:id', function (req, res){
    models.StatusSocilicitacao.findById(req.params.id)
    .then(statusSol => {
        if (!statusSol) res.status(404).send("Not Found.")

        statusSol.updateAttibrutes(req.body)

        res.status(200).send(statusSol)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})

module.exports = router;