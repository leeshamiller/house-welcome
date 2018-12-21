require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');

const app = express();
app.use(express.json());

const {CONNECTION_STRING, SERVER_PORT} = process.env;

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected yall')
})

app.get('/api/houses', ctrl.getAllHouses);

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} days until Christmas!`))