const { all } = require("../server");

const allMySkills=[
    {id:0, name:'JavaScript', type:'Programming', level:'Intermediate'},
    {id:1, name:'HTML', type:'Front-end', level:'Expert'},
    {id:2, name:'PHP', type:'Back-end', level:'Beginner'},
    {id:3, name:'CSS', type:'Front-end', level:'Expert'}
];

function getAll(){
    return allMySkills;
}

// function add(){
//     let newskill={id:allMySkills.length, name:'', type:'', level:''};
//     // newskill.name= document.querySelector('#skillName');
//     // newskill.type= document.querySelector('#skillType');
//     // newskill.level= document.querySelector('#skillLevel');
//     allMySkills.push(newskill);
// }

function getOne(id){
    console.log("i am called for id=",id);
    return allMySkills.find(todo => todo.id === parseInt(id));
  }

function create(newskill){
    newskill.id=allMySkills.length;
    allMySkills.push(newskill);
}
function deleteItem(i){
    const idx=allMySkills.findIndex(mySkill=> mySkill.id === parseInt(i));
    allMySkills.splice(idx,1);
}
// module.exports = allMySkills;


module.exports ={
    getAll: getAll,
    getOne: getOne,
    allSkills: allMySkills,
    create: create,
    deleteItem: deleteItem
};