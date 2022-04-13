const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);

console.log('Server is running on port 3000');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

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

app.get('/test.js', async (req, res) => {
    const file = await readFilePromise(__dirname + '/sdk/dist/assets/index.fd68666d.js');
    file.concat(`const styleSheetLink  = document.createElement('link');
                    styleSheetLink.rel = 'stylesheet';
                    styleSheetLink.href = 'https://aqueous-anchorage-20803.herokuapp.com/index.e46485b0.css';
                    document.head.appendChild(styleSheetLink);`);
    res.send(file);
});

app.get('/index.e46485b0.css', (req, res) => {
    res.sendFile(__dirname + '/sdk/dist/assets/index.e46485b0.css');
})