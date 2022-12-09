const readline = require('readline');
const screen = require('./screens');
const Document = require('./documents');
const Directory = require('./directory');
const Message = require('./messages');
const getTextWithColor = require('./utils/consoleColors')

let interface = readline.createInterface(process.stdin, process.stdout);
const document = new Document();
const directory = new Directory();

const mainMessage = {
    text: '',
    color: '',

    setMessage(text,color){
        this.text = text;
        this.color = color;
    },
    reset(){
        this.text = '';
        this.color = '';
    },
    print(){
        return console.log(getTextWithColor(this.text, this.color));
    }
}

function mainScreen() {
    interface.question('¿Qué acción desea realizar? \n', (answer) => {
        switch (answer){
            case '1':
                render('createFile')
                break;
            case '2':
                render('openFiles');
                break;
            case '3':
                renameFile();
                break;
            case '4':
                interface.close()
                break;
            default:
                render('main')
        }
    })
}

function render(view){
    process.stdout.write('\033c');
    mainMessage.print();

    switch (view) {
        case 'main':
            console.log(screen.main);
            mainScreen();
            break;
        case 'createFile':
            console.log(screen.carpetas);
            createFile();
            break;
        case 'openFiles':
            console.log(screen.carpetas);
            openFiles();
        default:
            break;
    }
}

function createFile(){
    let folders = directory.getDirectories();
    folders.forEach(folder => {
        console.log(`📁 ${folder}`);
    })
    console.log('---------------')

    interface.on('line', (answer) => {
        if(answer == ":q"){
            interface.removeAllListeners('line');
            mainMessage.reset();
            render('main');
        }else{
            if(!folders.includes(answer)){
                console.log(Message.dirNotFound.brightRed);
            }else{
                interface.question("🧑🏻 Por favor, escriba el nombre del archivo: ", (name) => {
                    let regExp = new RegExp(":")
                    if(document.exists(answer, name)){
                        mainMessage.setMessage(Message.fileNameExists, "brightRed")
                    }else if(regExp.test(answer)){
                        mainMessage.setMessage(`❎ El nombre del archivo no puede contener caracteres especiales`)
                    }else{
                        interface.question("🧑🏻 Por favor, escriba la extensión del archivo: ", (exten) => {
                            if(document.createFile(answer, name, exten)){
                                mainMessage.setMessage("✅ El archivo ha sido creado.", 'brightGreen');
                                render('main')
                            }else{
                                console.log("❎ Ha ocurrido un problema al crear el archivo..")
                            }
                        })
                    }
                })
            }
        }
        // if(answer)
        // document.createFile()
    })
}

function openFiles(){
    let folders = directory.getDirectories();
    folders.forEach(folder => {
        console.log(`📁 ${folder}`);
    })

    console.log('---------------')

    interface.on('line', (answer) => {
        if(answer == ":q"){
            interface.removeAllListeners('line');
            mainMessage.reset();
            mainScreen()
        }else{
            process.stdout.write('\033c');
            console.log(screen.archivos)

            let files = directory.getFiles(answer);

            files.forEach(function(file){
                console.log(`📃 ${file}`);
            })

            let folder = answer;

            console.log(`Por favor, escriba el nombre del archivo que desea abrir: `)
            interface.removeAllListeners('line');
            interface.on('line', (input) => {
                //Validación
                if(input == ':q'){
                    render('openFiles');
                }else{
                    let indx = files.map(file => {
                        return file.split('.')[0]
                    }).indexOf(input);

                    if(indx == -1){
                        console.log(Message.fileNotFound.brightRed)
                    }else{
                        let content = document.open(folder, files[indx]);
                        console.log(content);
                    }
                }
            })
        }
    });
}

function deleteFile(){}

function renameFile(){}

function readCommands(file){
    interface.on('line', (input) => {
        switch (input) {
            case ':q':
                render('openFiles')
                break;
            case ':s':
                break;
            case ':sq':
                break;
            default:
                break;
        }
    })
}

render('main')