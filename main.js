let helpObj = require("./help");
let treeObj = require("./tree");
let orgObj = require("./organize");

let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch(command){
    case "help":    helpObj.helpFn();
        break;
    case "tree":    treeObj.treeFn(inputArr[1], 1);
        break;
    case "organize":    orgObj.org(inputArr[1]);
        break;
    default:
            console.log("Invalid Command!")
        break;
}
