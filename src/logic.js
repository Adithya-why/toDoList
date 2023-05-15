import format from 'date-fns/format'
import { putDetails,putProj,addlis,clr} from './domstuff';


let projObj = {};
let mlist = [];

let currentProj = "main";



const createObj = function(title,details,dati,priority){
    let dat = format(new Date(dati),'yyyy-MM-dd');
    return {title,details,dat,priority}
}


const createProj = function(name){
    let na =[];

    let c = false;
    for(let i=0;i<mlist.length;i++){
        if(mlist[i]==name){
            c = true;
        }
    }

    if(c == false){
        mlist.push(name);
    }
    //mlist.push(name);
    projObj[name] = [];
    localStorage.setItem('mlist',JSON.stringify(mlist));
    return na;
}

const addToProj = function(proj,obj,name){
    proj.push(obj);
    projObj[name].push(obj);
    //localStorage.getItem(name).push(obj);
   /* if(!localStorage.getItem("master")){
        localStorage.setItem("master",JSON.stringify(projObj));
    }*/


    
        //localStorage.removeItem("master");
        localStorage.setItem("master",JSON.stringify(projObj));
    
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
    //localStorage.removeItem("master");
    //localStorage.setItem("master",JSON.stringify(projObj));
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
        localStorage.setItem("mlist",JSON.stringify(mlist));
    }

    else{
        mlist = JSON.parse(localStorage.getItem('mlist'));
    }



    for(let i=0;i<mlist.length;i++){
        if(mlist[i]=="main"){
            let l = projObj[mlist[i]];
            clr();
            putDetails(l,mlist[i]);
        }


        else{
        let objl;
        objl = projObj[mlist[i]];

        putProj(objl,mlist[i]);
        putDetails(objl,mlist[i]);
        addlis(objl,mlist[i]);
        }
    }
}

export { createObj,createProj,addToProj,findProj,addnewData,currentProj,delTask,replaceData,store,restoreData};


