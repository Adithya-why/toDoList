import { createObj,createProj,addToProj } from "./logic";
import { putProj,putDetails,addlis} from "./domstuff";




const start = function(){
    let defproj = createProj("main");
    let x = createObj("job","to code",'2023-09-09',"high");
    addToProj(defproj,x);
    let y = createObj("job","to not code",'2023-09-09',"high");
    addToProj(defproj,y,"main");
    putProj(defproj,"main");
    putDetails(defproj,"main");
    addlis(defproj,"main");
    console.log("hahahhahahah");
    
}

start();
