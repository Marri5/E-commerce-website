const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    cart: Array
});

const User = mongoose.model('User', UserSchema);

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.json({ success: true, user });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

app.post('/cart', async (req, res) => {
    const { username, cart } = req.body;
    const user = await User.findOneAndUpdate({ username }, { cart }, { new: true });
    if (user) {
        res.json({ success: true, user });
    } else {
        res.json({ success: false, message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});