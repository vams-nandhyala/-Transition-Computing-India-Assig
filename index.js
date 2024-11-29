const express = require('express');
const { fetchApplicationData } = require('./services/apiService');
const rules = require('./config/rules');
const path = require('path');
const app = express();



app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', async (req, res) => {
    try {
        const data = await fetchApplicationData();
        const results = rules.map(rule => ({
            name: rule.name,
            passed: rule.condition(data),
        }));

        res.render('dashboard', { results });
    } catch (error) {
        res.status(500).send("Error loading the dashboard");
    }
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});
