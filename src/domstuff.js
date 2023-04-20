import { findProj } from "./logic";

let count = 0;

const putProj = function(proj,name){
    let maindiv = document.querySelector(".projects");
    let pdiv = document.createElement('div');
    pdiv.classList.add('projediv');
    pdiv.classList.add(`${name}`);
    pdiv.classList.add(count);
    pdiv.innerHTML = name;
    maindiv.appendChild(pdiv);

}


const putDetails = function(proj,name){
    let l = proj.length;
    for(let i=0;i<l;i++){
    const detdiv = document.querySelector('.jobs');
    let ddiv = document.createElement("div");
    ddiv.classList.add('job');
    ddiv.classList.add(count);
    console.log(count);
    

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

    count++;

    
}


const addlis  = function(proj,name){
    let mdiv = document.querySelector(`.${name}`);
    mdiv.addEventListener('click',function(e){
        console.log("hi");
        clr();
        let x = findProj(e.target.classList[2]);
        
        putDetails(x,name);
        
    });



}

const clr = function(){
    
    const di = document.querySelector('.jobs');
    di.replaceChildren();
}




export { putProj,putDetails,addlis };