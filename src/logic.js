import format from 'date-fns/format'


let mlist = [];


const createObj = function(title,details,dati,priority){
    let dat = format(new Date(dati),'yyyy-MM-dd');
    return {title,details,dat,priority}
}


const createProj = function(){
    let na =[];
    return na;
}

const addToProj = function(proj,obj){
    proj.push(obj);
    mlist.push(proj);
    
}

const findProj = function(cname){
    let objs = mlist[cname];
    return objs;
}



export { createObj,createProj,addToProj,findProj };


