

const putProj = function(proj,name){
    let maindiv = document.querySelector(".projects");
    let pdiv = document.createElement('div');
    pdiv.classList.add('projediv');
    pdiv.classList.add(`${name}`);
    pdiv.innerHTML = name;
    maindiv.appendChild(pdiv);


    const detdiv = document.querySelector('.jobs');
    let ddiv = document.createElement("div");
    ddiv.classList.add('job');
    let ddiv1 = document.createElement("div");
    let ddiv2= document.createElement("div");
    let ddiv3 = document.createElement("div");
    let ddiv4 = document.createElement("div");

    ddiv1.innerHTML = proj[0].title;
    ddiv2.innerHTML = proj[0].details;
    ddiv3.innerHTML = proj[0].dati;
    ddiv4.innerHTML = proj[0].priority;

    ddiv.appendChild(ddiv1);
    ddiv.appendChild(ddiv2);
    ddiv.appendChild(ddiv3);
    ddiv.appendChild(ddiv4);


    detdiv.appendChild(ddiv);

    return pdiv.classList[1];


}


const addlis  = function(proj,name){
    let mdiv = document.querySelector(`.${name}`);
    mdiv.addEventListener('click',function(){
        console.log("hi");
    });

}


c


export { putProj,addlis };