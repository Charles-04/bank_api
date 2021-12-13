
const express = require('express');
const { Customer } = require('./models/customers');
const app = express();
const port = 3000


app.use(express.urlencoded({ extended: false }));

app.get('/ping', (req, res)=>{
    res.status(200).send(console.log('Hello Express'))
})

app.post('/users', async (req, res) => {
    const data = req.body
    try {
        customer = await new Customer({
           
       })
    } catch (error) {
        
    }
})
app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`)
})