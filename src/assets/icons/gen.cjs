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


let imports = []
categories.forEach(category => {
    let folder = fs.readdirSync(path.join(__dirname + `/${category}`));
    imports.push(`// ------------------${category}------------------\n`.toUpperCase())
    imports.push(`\n`)
    folder.forEach(image => {
        let name = image.split('.'); name = name[0]
        imports.push(`\n`)
        imports.push(`// ${image} export\n`.toUpperCase())
        imports.push(`export { default as ${category}_${name}_icon } from "./${category}/${image}"`)
        imports.push(`\n`)
    });
    imports.push(`\n`)
    imports.push(`\n`)
    imports.push(`\n`)
});

fs.writeFileSync(path.join(__dirname + '/icons.js'), imports.join(''))