const express = require('express');
require('dotenv').config();

const ordersData = [
    {
        id: 1,
        productId: 235356,
        date: (new Date('2019-01-02')).toLocaleString()
    },
    {
        id: 2,
        productId: 894794,
        date: (new Date('2019-02-05')).toLocaleString()
    }
];

const app = express();
const port = process.env.ORDERS_SERVICE_PORT || 4000;

app.get('/orders', (_, res) => {
    res.json(ordersData)
});

app.listen(port, () => {
    console.log(`server listening at ${port}`);
});
