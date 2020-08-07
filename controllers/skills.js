const skillsDb=require('../models/skills');

function index(req, res, next) {
    res.render('./skills/index', {
        myskills:skillsDb.getAll()
    });
};

function show(req, res) {
    // console.log("show is called",skillsDb.getOne(125223));
      res.render('./skills/show', {
        myskill: skillsDb.getOne(req.params.id)
      });
}


function newOne(req, res, next) {
    res.render('./skills/newskill');
}

function create(req,res){
    skillsDb.create(req.body);
    res.redirect('/skills');
}

function deleteMe(req,res){
    // let id=req.params.id;
    // skillsDb.allSkills.findIndex()
    // skillsDb.allSkills.splice(id,1)
    // console.log("deleteMe is ", id);
    // console.log("newskill is ", newskill.skillName);
    skillsDb.deleteItem(req.params.id);
    res.redirect('/skills');
}

module.exports={
    index: index,
    show: show,
    newOne: newOne,
    create: create,
    delete: deleteMe
}