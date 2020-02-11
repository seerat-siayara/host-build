const express = require('express');
const https = require('https');
const fs = require('fs')
const path = require('path');

const privateKey  = fs.readFileSync('nsigned.key', 'utf8');
const certificate = fs.readFileSync('ncertificate.crt', 'utf8');

const options = {
    key: privateKey,
    cert: certificate
}

const app = express();
app.use(express.static('build'))

app.use((req, res, next) => {
    return res.sendFile(path.resolve(__dirname, 'build', '.well-known', 'acme-challenge', 'CIstTGhpsclwIkiumAmoguvzpU7-mzzxFeVwLLjlYAg'));
});

const server = https.createServer(options, app);

app.listen(8080, () => {
    console.log(`Server is up and running at ${8080}`)
})
