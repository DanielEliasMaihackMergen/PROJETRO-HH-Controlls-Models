const express = require('express');
const router = express.Router();
const models = require('../models');


router.post('/', function (req, res) {
    models.Rede.create(req.body)
        .then(rede => res.status(200).send(rede))
        .catch(err => res.status(500).send(err))
})


router.get('/', function (req, res) {
    models.Rede.findAll()
    .then(redes => res.status(200).send(redes))
    .catch(err => res.status(500).send(err))
})


router.get('/:id', function (req, res) {
    models.Rede.findById(req.params.id)
    .then(rede =>
      {
        if (!rede) res.status(404).send("Not Found.");
        res.status(200).send(rede)
      }
    )
    .catch(err => res.status(500).send(err))
});


router.delete('/:id', function (req, res) {
    models.Rede.findById(req.params.id)
    .then(rede => {
      if (!rede) res.status(404).send("Not Found")

      models.Rede.destroy({
        where: { id: req.params.id }
      })
      .then(rede => {
        res.status(200).send({success: true})
      })
      .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
});


router.put('/:id', function (req, res) {
    models.Rede.findById(req.params.id)
    .then(rede => {
        if (!rede) res.status(404).send("Not Found.")

        rede.updateAttributes(req.body)

        res.status(200).send(rede)

    })
    .catch(err => {
      res.status(500).send(err)
    })
});

module.exports = router;
