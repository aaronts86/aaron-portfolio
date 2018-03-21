const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
});

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
});

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body);
});

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
});

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8000);