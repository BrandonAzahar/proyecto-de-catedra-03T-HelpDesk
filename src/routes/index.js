const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    const data = {
        "name": "prueba1",
    };
    res.json(data);
});

module.exports = router;