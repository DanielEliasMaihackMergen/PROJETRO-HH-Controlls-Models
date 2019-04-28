const express = require('express');
const router  = express.Router();
const models  = require('../models');


router.post('/', function (req, res){
    models.GruposMateriais.create(req.body)
        .then(grupomateriais => res.status(200).send(grupomateriais))
        .catch(err => res.status(500).send(err))
})


router.get('/', function (req, res){
    models.GruposMateriais.findAll()
    .then(grupomateriais => res.status(200).send(grupomateriais))
    .catch(err => res.status(500).send(err))
})


router.get('/:id', function (req, res){
    models.GruposMateriais.findById(req.params.id)
    .then(grupomateriais =>
        {
            if (!grupomateriais) res.status(404).send("Not Found.")
            res.status(200).send(grupomateriais)
        }
    )
    .catch(err => res.status(500).send(err))
})


router.delete('/:id', function (req, res){
    models.GruposMateriais.findById(req.params.id)
    .then(grupomateriais => {
        if (!grupomateriais) res.status(404).send("Not Found")

        models.GruposMateriais.destroy({
            where: { id: req.params.id }
        })
        .then(grupomateriais => {
            res.status(200).send({success: true})
        })
        .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
})

router.put('/:id', function (req, res){
    models.GruposMateriais.findById(req.params.id)
    .then(grupomateriais => {
        if (!grupomateriais) res.status(404).send("Not Found.")

        grupomateriais.updateAttributes(req.body)

        res.status(200).send(grupomateriais)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})

module.exports = router;
