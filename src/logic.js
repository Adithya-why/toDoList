import format from 'date-fns/format'



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
    console.log(proj);
}

export { createObj,createProj,addToProj };


