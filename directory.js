const fs = require('fs');
const path = require('path');

class Directory{
    constructor(){
        this.__dir = 'docs';
        this.__path = __dirname;
        this.createDocsDir();
    }

    createDocsDir(){
        this.__path = path.join(this.__path, this.__dir)

        if(!fs.existsSync(this.__dir)){
            fs.mkdirSync(this.__dir);
        }
    }

    create(dirname){
        fs.mkdirSync('./' + dirname);
    }

    exists(dirname){
        return fs.existsSync(dirname);
    }

    getDirectories(){
        return fs.readdirSync('./').filter(function (file) {
            return fs.statSync('./' + '/' + file).isDirectory() && file != 'node_modules';
        });
    }

    getFiles(folder){
        let files = fs.readdirSync(`./${folder}`);
        return files;
    }

    getPath() {
        return this.__path;
    }

    getDirectory(){
        return this._dir;
    }

}

module.exports = Directory;