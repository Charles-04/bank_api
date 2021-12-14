
const express = require('express');
const { Customer } = require('./models/customers');
const app = express();
const port = 3000
const customer_routes = require('./routes/user')


app.use(express.urlencoded({ extended: false }));

app.get('/ping', (req, res) => {
    res.status(200).send(console.log('Hello Express'))
})
app.use('/user',customer_routes)


app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`)
})