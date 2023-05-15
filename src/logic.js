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
    localStorage.setItem('mlist',JSON.stringify(mlist));
    return na;
}

const addToProj = function(proj,obj,name){
    proj.push(obj);
    projObj[name].push(obj);
    //localStorage.getItem(name).push(obj);
    if(!localStorage.getItem("master")){
        localStorage.setItem("master",JSON.stringify(projObj));
    }


    else{
        localStorage.removeItem("master");
        localStorage.setItem("master",JSON.stringify(projObj));
    }
}

const findProj = function(cname){
    let objs = projObj[cname];
    console.log(projObj);
    currentProj = cname;
    store();
    return objs;
}

const addnewData = function(obj){
    let temp = [];
    addToProj(temp,obj,currentProj);
    localStorage.removeItem("master");
    localStorage.setItem("master",JSON.stringify(projObj));
    return projObj[currentProj];
}


const delTask= function(na,no){
    console.log(projObj[na]);
  
    
    projObj[na].splice(no,1);
    localStorage.removeItem("master");
    localStorage.setItem("master",JSON.stringify(projObj));
    //localStorage.getItem(na).splice(no,1);
}



const replaceData = function(ob,na,no){
    projObj[na][no]=ob;
    //localStorage.getItem(na)[no] = ob;
    localStorage.removeItem("master");
    localStorage.setItem("master",JSON.stringify(projObj));
}



//localStorage

const store = function(){
    
        localStorage.setItem("currentProj",currentProj);
        localStorage.setItem("mlist",JSON.stringify(mlist));
    
}


const restoreData = function(){
    if(!localStorage.getItem('master')){
        
    }

    else{
        projObj = JSON.parse(localStorage.getItem('master'));
        currentProj = localStorage.getItem("currentProj");

    }


    if(!localStorage.getItem('mlist')){

    }

    else{
        mlist = JSON.parse(localStorage.getItem('mlist'));
    }
}

export { createObj,createProj,addToProj,findProj,addnewData,currentProj,delTask,replaceData,store,restoreData};


