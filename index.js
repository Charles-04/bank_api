
const express = require('express');
const app = express();
const port = 3000


app.use(express.urlencoded({ extended: false }));

app.get('/ping', (req, res)=>{
    res.status(200).send(console.log('Hello Express'))
})

app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`)
})