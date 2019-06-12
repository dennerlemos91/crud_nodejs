const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

require('./routes/users.router')(app)
require('./routes/agencia-bancaria.router')(app)

const server = app.listen(3000, () => {
    console.log('Server is listening on:', server.address())
});