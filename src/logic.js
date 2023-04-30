import format from 'date-fns/format'


let projObj = {};
let mlist = [];


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
    return objs;
}



export { createObj,createProj,addToProj,findProj };


