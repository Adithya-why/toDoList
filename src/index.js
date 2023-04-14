import { createObj,createProj,addToProj } from "./logic";
import { putProj } from "./domstuff";




const start = function(){
    let defproj = createProj();
    let x = createObj("job","to code",'2023-09-09',"high");
    addToProj(defproj,x);
    putProj(defproj);
}

start();
