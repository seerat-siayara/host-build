const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('build'))

app.use((req, res, next) => {
    return res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(80, () => {
    console.log(`Server is up and running at ${80}`)
})
