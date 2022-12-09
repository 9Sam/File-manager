const fs = require('fs');

class Document{
    constructor(dir){
        this._content = ''
        this._dir = dir;
        this.fileName = ''
    }

    createFile(folder, name, extension){
        let route = `${folder}/${name}.${extension}`;
        fs.writeFileSync(route, '');
        return true;
    }

    exists(folder, name){
        let files = fs.readdirSync(`./${folder}`).map(file => {
            return file.split('.')[0];
        });

        return files.includes(name);
    }

    existsInFolder(folder, file, extension){
        return fs.existsSync(`./${folder}/${file}.${extension}`);
    }

    append(file){
        fs.appendFileSync(file, 'utf8');
    }

    open(folder, fileName){
        let file = fs.readFileSync(`./${folder}/${fileName}`, 'UTF-8')
        return file;
    }
}

// const doc = new Document();
// let file = doc.open('./docs/Hola.txt')
// console.log(file)
// console.log(doc.exists('docs','Hilo'))

module.exports = Document;