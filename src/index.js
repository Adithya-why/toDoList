import { createObj,createProj,addToProj } from "./logic";
import { putProj,addlis } from "./domstuff";




const start = function(){
    let defproj = createProj();
    let x = createObj("job","to code",'2023-09-09',"high");
    addToProj(defproj,x);
    let cname = putProj(defproj,"main");
    addlis(defproj,"main");
}

start();
