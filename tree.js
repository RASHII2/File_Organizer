let fs = require('fs');
let path = require('path');
function treeFun(mainPath, level){
    let print = "";
    for(let i=1; i<level; i++)
        print += "      ";
    let sp = "";
    if(level != 1)
        sp = print+"└──";
    console.log(sp+path.basename(mainPath));
    let filePath = fs.readdirSync(mainPath);
    for(let i=0; i<filePath.length;i++){
        let currPath = path.join(mainPath,filePath[i]);
        let print = "";
        if(fs.lstatSync(currPath).isFile()){
                for(let j=1; j<level+1; j++)
                    print += "      ";
            console.log(print + "└──" + filePath[i] + "\n");    
        }
        else if(fs.lstatSync(currPath).isDirectory()){
            treeFun(currPath,level+1)
        }
    }
}

module.exports = {
    treeFn : treeFun
};

