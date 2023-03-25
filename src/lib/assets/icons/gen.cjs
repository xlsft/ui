const fs = require('fs'),
path = require('path')

function ftb(p) {
  try {
    // Чтение файла в виде буфера
    const fileBuffer = fs.readFileSync(path.join(__dirname + p));
    // Конвертация буфера в base64
    const base64String = fileBuffer.toString('base64');
    return base64String;
  } catch (error) {
    console.error(`Ошибка при конвертации файла в base64: ${error}`);
  }
}


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

let enums = ['export enum IconsBase64 {\n']

categories.forEach(category => {
    let folders = fs.readdirSync(path.join(__dirname + `/${category}`));
    folders.forEach(image => {
        let iconbase = ftb(`/${category}/${image}`)
        enums.push(`    ${category}_${image.split('.')[0]} = "data:image/svg+xml;base64,${iconbase}",\n`)
    });
});
enums.push('\n}\n\n\n')

enums.push('export type IconsName = "" | ')
categories.forEach(category => {
    let folders = fs.readdirSync(path.join(__dirname + `/${category}`));
    folders.forEach(image => {
        enums.push(` "${category}_${image.split('.')[0]}" |`)
    });
});


fs.writeFileSync(path.join(__dirname + '/icons.ts'), enums.join('').slice(0, -1))
