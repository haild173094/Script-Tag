const express = require('express');
const app = express();
const fs = require('fs');

app.listen(process.env.PORT || 6999);

console.log('Server is running on port 6999');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

let jsFile = null;
let cssFile = null;

const readFilePromise = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

const readDirPromise = (dirPath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

app.get('/test.js', async (req, res) => {
    let files = await readDirPromise(__dirname + '/sdk/dist/assets');
    files.forEach(file => {
        if (file.includes('js')) {
            jsFile = file;
        }
        else if (file.includes('css')) {
            cssFile = file;
        }
    });
    let file = await readFilePromise(__dirname + `/sdk/dist/assets/${jsFile}`);
    file += `
                    const styleSheetLink  = document.createElement('link');
                    styleSheetLink.rel = 'stylesheet';
                    styleSheetLink.href = 'https://aqueous-anchorage-20803.herokuapp.com/index.css';
                    document.head.appendChild(styleSheetLink);
            `;
    file.replaceAll("STRING_PORTAL_SERVER", process.env.PORTAL_SERVER);
    res.send(file);
});

app.get('/index.css', (req, res) => {
    res.sendFile(__dirname + `/sdk/dist/assets/${cssFile}`);
})