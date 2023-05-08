const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const port = 3001;
const app = express();
app.use(express.json());//This allows parsing JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost/paperTradeDB', {
    useUrlParser: true,
    useUnifiedTopology: true

})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.post('/users', async (req, res) => {
    const { username, password } = req.body;

    const user = new User({
        username,
        password
    });

    try {
        await user.save();
        res.send('user saved');
    }catch(err) {
        res.status(500),send(err);
    }

});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});