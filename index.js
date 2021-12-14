require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Routes
const customer_routes = require('./routes/user');
const transaction_routes = require('./routes/transactions');


mongoose.connect(process.env.DATABASE_URL_LOCAL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error) );
db.once('open', () => console.log('Connected to database') );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/ping', (req, res) => {
    res.status(200).send(console.log('Hello Express'))
})
app.use('/customers', customer_routes)
app.use('/transactions', transaction_routes);


app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`)
})