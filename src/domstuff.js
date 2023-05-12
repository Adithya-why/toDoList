import { findProj,addnewData,currentProj } from "./logic";
import format from 'date-fns/format';

//let count = 0;

const putProj = function(proj,name){
    let maindiv = document.querySelector(".projects");
    let pdiv = document.createElement('div');
    pdiv.classList.add('projediv');
    pdiv.classList.add(`${name}`);
    //pdiv.classList.add(count);
    pdiv.innerHTML = name;
    maindiv.appendChild(pdiv);

}


const putDetails = function(proj,name){
    let l = proj.length;
    for(let i=0;i<l;i++){
    const detdiv = document.querySelector('.jobs');
    let ddiv = document.createElement("div");
    ddiv.classList.add('job');
    //ddiv.classList.add(count);
    //console.log(count);
    

    let ddiv1 = document.createElement("div");
    let ddiv2= document.createElement("div");
    let ddiv3 = document.createElement("div");
    let ddiv4 = document.createElement("div");

    ddiv1.innerHTML = proj[i].title;
    ddiv2.innerHTML = proj[i].details;
    ddiv3.innerHTML = proj[i].dati;
    ddiv4.innerHTML = proj[i].priority;

    ddiv.appendChild(ddiv1);
    ddiv.appendChild(ddiv2);
    ddiv.appendChild(ddiv3);
    ddiv.appendChild(ddiv4);


    detdiv.appendChild(ddiv);
    

    //addlis(pdiv,name);
    }

    //count++;

    
}


const addlis  = function(proj,name){
    let mdiv = document.querySelector(`.${name}`);
    mdiv.addEventListener('click',function(e){
        console.log("hi");
        clr();
        let x = findProj(name);
        
        putDetails(x,name);
        
    });



}

const clr = function(){
    
    const di = document.querySelector('.jobs');
    di.replaceChildren();
}


const addlisbutAdd = function(){
    const b = document.querySelector(".add");
    b.addEventListener('click',function(){
        const f = document.querySelector('form');
        //f.style.display = "block";
        f.classList.add("formVis");

    });
}


const addlisbutCls = function(){
    const b = document.querySelector(".close");
    b.addEventListener('click',function(){
    let obj = getdata();
    let l= addnewData(obj);
    clr();
    putDetails(l,currentProj);
    const f = document.querySelector('form');
    //f.style.display = "block";
    f.classList.remove("formVis");
    })
}


const getdata = function(){
    let a,b,c,d;
    a = document.querySelector(".n");
    let title = a.value;

    b = document.querySelector(".d");
    let details = b.value;

    
    c = document.querySelector(".da");
    let dati = c.value;
    let dat = format(new Date(dati),'yyyy-MM-dd');
    
    d = document.querySelector(".p");
    let priority = d.value;
    
    return {title,details,dat,priority};
}



export { putProj,putDetails,addlis,addlisbutAdd,addlisbutCls };