const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('sample.ejs')
});

module.exports = router;

