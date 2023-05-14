import format from 'date-fns/format'


let projObj = {};
let mlist = [];

let currentProj = "main";



const createObj = function(title,details,dati,priority){
    let dat = format(new Date(dati),'yyyy-MM-dd');
    return {title,details,dat,priority}
}


const createProj = function(name){
    let na =[];
    mlist.push(name);
    projObj[name] = [];
    return na;
}

const addToProj = function(proj,obj,name){
    proj.push(obj);
    projObj[name].push(obj);
}

const findProj = function(cname){
    let objs = projObj[cname];
    console.log(projObj);
    currentProj = cname;
    return objs;
}

const addnewData = function(obj){
    let temp = [];
    addToProj(temp,obj,currentProj);
    return projObj[currentProj];
}


const delTask= function(na,no){
    console.log(projObj[na]);
  
  
    projObj[na].splice(no,1);
}



const replaceData = function(ob,na,no){
    projObj[na][no]=ob;
}


export { createObj,createProj,addToProj,findProj,addnewData,currentProj,delTask,replaceData };


