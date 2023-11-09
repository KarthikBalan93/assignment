const express = require('express');
const app = express();
const port = 3000;
const assignment = require('./index')

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/:assignment/:value', async (req, res) => {
    let response = {}
    if (req.params.assignment == 'fibonacci') {
        response = assignment.getFibonacci(parseInt(req.params.value))
    } else if (req.params.assignment == 'balancedstring') {
        response = assignment.getBalancedSubstrings(req.params.value)
    } else if (req.params.assignment == 'migraterings') {
        response = assignment.migrateRings(req.params.value, req.query.plate1, req.query.plate2, req.query.plate3)
    }
    return res.send(response)
})

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});