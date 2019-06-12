const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.send(user)
        return next();
    } catch (error) {
        res.status(400).send({
            error: 'Erro ao tentar cadastrar novo usuário'
        })
    }
});
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        res.send(users)
        return next()
    } catch (error) {
        res.send([])
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
        return next()
    } catch (error) {
        res.status(404).send({
            message: 'Usuário não encontrado'
        })
    }
});

router.put('/:id', async (req, res, next) => {
    console.log(req.params.id)
    try {
        await User.findByIdAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        }, (err, user) => {
            if (err) {
                res.status(500).send({
                    error: 'Erro ao tentar atualizar o usuário'
                });
            } else {
                res.send(user);
                return next();
            }

        });
    } catch (error) {
        res.status(404).send({
            message: 'Usuário não encontrado asdasd'
        })
    }
})

module.exports = app => app.use('/api/users', router);