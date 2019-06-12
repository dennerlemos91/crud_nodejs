const express = require('express');
const AgenciaBancaria = require('../models/agencia-bancaria');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const agenciaBancaria = await AgenciaBancaria.create(req.body);
        res.send(agenciaBancaria)
        return next();
    } catch (error) {
        res.status(400).send({
            error: 'Erro ao tentar cadastrar nova agência bancária'
        })
    }
});
router.get('/', async (req, res, next) => {
    try {
        const agencias = await AgenciaBancaria.find({})
        res.send(agencias)
        return next()
    } catch (error) {
        res.send([])
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const agencia = await AgenciaBancaria.findById(req.params.id)
        res.send(agencia)
        return next()
    } catch (error) {
        res.status(404).send({
            message: 'Agência bancária não encontrada'
        })
    }
});

router.put('/:id', async (req, res, next) => {
    console.log(req.params.id)
    try {
        await AgenciaBancaria.findByIdAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        }, (err, agenciaBancaria) => {
            if (err) {
                res.status(500).send({
                    error: 'Erro ao tentar atualizar a agência bancária'
                });
            } else {
                res.send(agenciaBancaria);
                return next();
            }

        });
    } catch (error) {
        res.status(404).send({
            message: 'Agência bancária não encontrada'
        })
    }
})

module.exports = app => app.use('/api/agencia-bancaria', router);