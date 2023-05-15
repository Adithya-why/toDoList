import { createProj } from "./logic";
import { findProj,addnewData,currentProj,delTask,replaceData } from "./logic";
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
    let l;
    try{
    l = proj.length;
    }
    catch(err){
        l = 0;
    }
    for(let i=0;i<l;i++){
    const detdiv = document.querySelector('.jobs');
    let ddiv = document.createElement("div");
    ddiv.classList.add('job');
    ddiv.classList.add(name);
    ddiv.classList.add(i);
    //ddiv.classList.add(count);
    //console.log(count);
    

    let ddiv1 = document.createElement("div");
    let ddiv2= document.createElement("div");
    let ddiv3 = document.createElement("div");
    let ddiv4 = document.createElement("div");
    let btnd = document.createElement("button");
    let btnedit = document.createElement("button");


    btnd.innerHTML = "Delete";
    btnd.classList.add(name);
    btnd.classList.add(i);
    btnd.classList.add("deltask");
    btnd.addEventListener('click',function(e){
        let projn = e.target.classList[0];
        let projnum = e.target.classList[1];

        delTask(projn,projnum);
        clr();
        let x = findProj(name);
        putDetails(x,name);
    });



    btnedit.innerHTML="Edit";
    btnedit.classList.add(name);
    btnedit.classList.add(i);
    btnedit.classList.add("editask");




    btnedit.addEventListener("click",function(e){
        console.log("jhkd");
        let projn = e.target.classList[0];
        let projnum = e.target.classList[1];

        //let dd = document.querySelectorAll(`.job.${projn}.${projnum}`);
        
        let x = document.querySelector('.editt');
        x.classList.toggle('formviss');
        let b = document.querySelector('.edittsub');
        b.addEventListener('click',function(e){
            let a,b,c,d;
            a = document.querySelector('.a');
            let title = a.value;

            b = document.querySelector('.b');
            let details = b.value;

            c = document.querySelector('.c');
            let dati = c.value;
            let dat = format(new Date(dati),'yyyy-MM-dd');

            a = document.querySelector('.a');
            let priority = a.value;

            let obj = {title,details,dat,priority};
            
            replaceData(obj,name,i);
            clr();
            let x = findProj(name);
            putDetails(x,name);


            
        })

        

    
        
    });

    ddiv1.innerHTML = proj[i].title;
    ddiv2.innerHTML = proj[i].details;
    ddiv3.innerHTML = proj[i].dat;
    ddiv4.innerHTML = proj[i].priority;
    
    ddiv.appendChild(ddiv1);
    ddiv.appendChild(ddiv2);
    ddiv.appendChild(ddiv3);
    ddiv.appendChild(ddiv4);
    ddiv.append(btnd);
    ddiv.append(btnedit);
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

    // Create the div element
var divElement = document.createElement("div");
divElement.className = "editt";

// Create the title input element
var titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.placeholder = "Title";
titleInput.className = "a";
divElement.appendChild(titleInput);

// Create the description input element
var descriptionInput = document.createElement("input");
descriptionInput.type = "text";
descriptionInput.placeholder = "Description";
descriptionInput.className = "b";
divElement.appendChild(descriptionInput);

// Create the date input element
var dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.className = "c";
divElement.appendChild(dateInput);

// Create the priority input element
var priorityInput = document.createElement("input");
priorityInput.type = "text";
priorityInput.placeholder = "Priority";
priorityInput.className = "d";
divElement.appendChild(priorityInput);

// Create the submit button
var submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
submitButton.className = "edittsub";
divElement.appendChild(submitButton);

// Add the div element to the DOM
let x = document.querySelector('.jobs');
x.appendChild(divElement);

}


const addlisbutAdd = function(){
    const b = document.querySelector(".add");
    b.addEventListener('click',function(){
        const f = document.querySelector('form.to');
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
    const f = document.querySelector('form.to');
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



const adpr = function(){
    const b = document.querySelector(".adpr");
    b.addEventListener('click',function(){
        const f = document.querySelector('.pr');
        //f.style.display = "block";
        f.classList.add("formVis");

    });
}

const rempr = function(){
    const btn = document.querySelector('.closepr');
    btn.addEventListener('click',function(){
        let nm = document.querySelector('#tnam').value;
        let temp = createProj(nm);
        putProj(temp,nm);
        putDetails(temp,nm);
        addlis(temp,nm);

        let f = document.querySelector('.pr');
        f.classList.remove("formVis");
    });
}



const putmain = function(){
    clr();
    let x = findProj("main");
    putDetails(x,"main");
}

const putOthers = function(p,n){
    for(let i=0;i<n.length;i++){
        let x = findProj(n[i]);
        putProj(x,n[i]);
        putDetails(x,n[i]);
        addlis(x,n[i]);
    }
}


export { putProj,putDetails,addlis,addlisbutAdd,addlisbutCls,adpr,rempr,clr,putmain,putOthers };