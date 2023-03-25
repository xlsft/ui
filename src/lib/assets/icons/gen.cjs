const fs = require('fs'),
path = require('path'),
os = require('os')
let json = {}


let categories = fs.readdirSync(path.join(__dirname)); 

function exclude(file) {
    const index = categories.indexOf(file);
    if (index > -1) {
        categories.splice(index, 1);
    }
}

exclude('gen.cjs')
exclude('icons.js')
exclude('doc.js')

let files = []
let imports = []
categories.forEach(category => {
    let folder = fs.readdirSync(path.join(__dirname + `/${category}`));
    imports.push(`// ------------------${category}------------------\n`.toUpperCase())
    imports.push(`\n`)
    folder.forEach(image => {
        let name = image.split('.'); name = name[0]
        imports.push(`\n`)
        imports.push(`// ${image} export\n`.toUpperCase())
        imports.push(`import ${category}_${name} from "../../assets/icons/${category}/${image}"`)
        imports.push(`\n`)
        files.push(`${category}_${name}`)
    });
    imports.push(`\n`)
    imports.push(`\n`)
    imports.push(`\n`)
});

fs.writeFileSync(path.join(__dirname + '/icons.js'), imports.join(''))

let doc = []
doc.push('/** @type {string} icon\n')
doc.push('  * Modifyed Streamline HQ Core Line Icons\n')
doc.push('  * --------------------------------------\n')
files.forEach(file => {
    doc.push(`  * ${file}\n`)
    doc.push(`  * \n`)
});
doc.push('*/')
fs.writeFileSync(path.join(__dirname + '/doc.js'), doc.join(''))