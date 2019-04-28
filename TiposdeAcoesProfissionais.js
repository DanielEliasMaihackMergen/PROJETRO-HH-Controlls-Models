const express = require('express');
const router  = express.Router();
const models  = require('../models');

router.post('/', function (req, res){
    models.TipoDeAcaoProfissional.create(req.body)
        .then(tipoAcao => res.status(200).send(tipoAcao))
        .catch(err => res.status(500).send(err))
})

router.get('/', function (req, res){
    models.TipoDeAcaoProfissional.findAll()
    .then(tipoAcao => res.status(200).send(tipoAcao))
    .catch(err => res.status(500).send(err))
})

router.get('/:id', function (req, res){
    models.TipoDeAcaoProfissional.findById(req.params.id)
    .then(tipoAcao =>
        {
            if (!tipoAcao) res.status(404).send("Not Found.");
            res.status(200).send(tipoAcao)
        }
    )
    .catch(err => res.status(500).send(err))
})

router.delete('/:id', function (req, res){
    models.TipoDeAcaoProfissional.findById(req.params.id)
    .then(tipoAcao => {
        if (!tipoAcao) res.status(404).send("Not Found.")

        models.TipoDeAcaoProfissional.destroy({
            where: { id: req.params.id }
        })
        .then(tipoAcao => {
            res.status(200).send({sucess: true})
        })
        .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
})

router.put('/:id', function (req, res){
    models.TipoDeAcaoProfissional.findById(req.params.id)
    .then(tipoAcao => {
        if (!tipoAcao) res.status(404).send("Not Found.")

        tipoAcao.updateAttributes(req.body)

        res.status(200).send(err)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})

module.exports = router;
