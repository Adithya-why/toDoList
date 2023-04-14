

const putProj = function(proj){
    let maindiv = document.querySelector(".projects");
    let pdiv = document.createElement('div');
    pdiv.classList.add('projediv');
    pdiv.innerHTML = proj[0].title;
    maindiv.appendChild(pdiv);
}


export { putProj };