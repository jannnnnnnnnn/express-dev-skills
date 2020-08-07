var express = require('express');
var router = express.Router();
var skillCtrl=require('../controllers/skills')

/* GET users listing. */
router.get('/', skillCtrl.index);


router.get('/newskill', skillCtrl.newOne);
router.post('/',skillCtrl.create);

router.get('/:id', skillCtrl.show);
router.delete('/:id', skillCtrl.delete);
// router.get('/deleteSkill/:id', skillCtrl.redirectMe);

module.exports = router;