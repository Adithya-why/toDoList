import { createObj,createProj,addToProj } from "./logic";
import { putProj,putDetails,addlis,addlisbutAdd,addlisbutCls,adpr,rempr} from "./domstuff";




const start = function(){


    let defproj = createProj("main");
    let x = createObj("job","to code",'2023-09-09',"high");
    addToProj(defproj,x,"main");
    let y = createObj("job","to not code",'2023-09-09',"high");
    addToProj(defproj,y,"main");
    let z = createObj("job","to not code",'2023-09-09',"high");
    addToProj(defproj,z,"main");




    putProj(defproj,"main");
    putDetails(defproj,"main");
    addlis(defproj,"main");


    addlisbutAdd();
    addlisbutCls();

    adpr();
    rempr();
    console.log("hahahhahahah");
    

    
}

start();
