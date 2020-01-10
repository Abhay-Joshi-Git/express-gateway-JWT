const express = require('express');
require('dotenv').config();

const customersData = [
    {
        id: 1,
        name: 'abc',
    },
    {
        id: 2,
        name: 'xyz',
    }
];

const app = express();
const port = process.env.CUSTOMER_SERVICE_PORT || 3000;

app.get('/customers/:id?', (req, res) => {
    const id = +req.params.id;
    if (id) {
        const customer = customersData.find(d => d.id === id);
        if (customer) {
            res.json([customer])
        } else {
            res.status(400).send('no customer found with id: ' + id);
        }
    } else {
        res.json(customersData)
    }
});

app.listen(port, () => {
    console.log(`server listening at ${port}`);
});
