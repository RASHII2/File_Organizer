let fs = require('fs');
let path = require('path');
let types = {
    media: [".mp4", ".mkv", ".mp3"],
    archives: ['.zip', '.7z', '.rar', '.tar', '.gz', '.ar', '.iso', ".xz"],
    documents: ['.docx', '.doc', '.pdf', '.xlsx', '.xls', '.odt', '.ods', '.odp', '.odg', '.odf', '.txt', '.ps', '.tex'],
    app: ['.exe', '.dmg', '.pkg', ".deb"],
    pictures: ['.png','.jpg','.jpeg']
}
function organizeFun(pathName) { 
    
    let filearr = fs.readdirSync(pathName);
    let mainDir = path.join(pathName,"Organizer");
    if(!fs.existsSync(mainDir))
        fs.mkdirSync(mainDir);
    for(let i=0; i<filearr.length; i++){
        let filePath = path.join(pathName,filearr[i]);
        if((fs.lstatSync(filePath)).isFile())
        {
        let type = checkType(filePath)
        let typefolder = path.join(mainDir,type);
        if(!fs.existsSync(typefolder))
            fs.mkdirSync(typefolder)
        let src = path.join(pathName,filearr[i]);
        let dest = path.join(typefolder,filearr[i]);
        fs.copyFileSync(src,dest);}
    }
    
}
function checkType(filePath){
    let exc = path.extname(filePath);
    for(let j in types)
    {
        for(i of types[j])
            if(exc == i)
                return j;
    }
    return "others";
}
module.exports = {
    org : organizeFun
}