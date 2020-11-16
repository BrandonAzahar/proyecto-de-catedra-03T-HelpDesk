const { Router } = require('express');

const router = Router();
const _ = require('underscore');


const topics = require('../content/topics.json');

//const r = require('underscore');

router.get('/', (req, res) => {
    res.json(topics);
});

router.post('/', (req, res) => {

    const { Iname, Iemail, Iphone, Iarea, Idesc } = req.body;
    //const newTicket = {...req.body, id };
    if (Iname && Iemail && Iphone && Iarea && Idesc) {
        const id = topics.length + 1;
        const newTicket = {...req.body, id };
        topics.push(newTicket);
        res.json(topics);
    } else {
        res.status(500).json({ error: 'There was an error. :c' });
    }
});


module.exports = router;