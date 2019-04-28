const express = require('express');
const router = express.Router();
const models = require('../models');


router.post('/', function (req, res) {
    models.UnidadeMaterial.create(req.body)
        .then(unidade => res.status(200).send(unidade))
        .catch(err => res.status(500).send(err))
})

router.get('/', function (req, res) {
    models.UnidadeMaterial.findAll()
    .then(unidade => res.status(200).send(unidade))
    .catch(err => res.status(500).send(err))
})

router.get('/:id', function (req, res) {
    models.UnidadeMaterial.findById(req.params.id)
    .then(unidade =>
      {
        if (!unidade) res.status(404).send("Not Found.");
        res.status(200).send(unidade)
      }
    )
    .catch(err => res.status(500).send(err))
});

router.delete('/:id', function (req, res) {
    models.UnidadeMaterial.findById(req.params.id)
    .then(unidade => {
      if (!unidade) res.status(404).send("Not Found")

      models.UnidadeMaterial.destroy({
        where: { id: req.params.id }
      })
      .then(unidade => {
        res.status(200).send({success: true})
      })
      .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
});

router.put('/:id', function (req, res) {
    models.UnidadeMaterial.findById(req.params.id)
    .then(unidade => {
        if (!unidade) res.status(404).send("Not Found.")

        unidade.updateAttributes(req.body)

        res.status(200).send(unidade)

    })
    .catch(err => {
      res.status(500).send(err)
    })
});

module.exports = router;