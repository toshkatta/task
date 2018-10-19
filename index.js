const { sequelize } = require('./components')
const config = require('./config/config')

const express = require('express');
const fs = require("fs");
const cors = require('cors');

const employees = require('./routes/employees')
const openings = require('./routes/openings')
const seed = require('./routes/seed')

require('dotenv').config()

// const router = express.Router();
const app = express();

app.use('/employees', employees)
app.use('/openings', openings)
app.use('/seed', seed)

const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

app.use(express.static("build"));

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the db has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })

sequelize.sync({
    // force: true,
    logging: console.log
})
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
    .catch((err) => {
        console.error(err)
    })

