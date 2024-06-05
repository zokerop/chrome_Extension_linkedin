const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const Profile = sequelize.define('Profile', {
    name: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
    about: { type: DataTypes.TEXT },
    bio: { type: DataTypes.TEXT },
    location: { type: DataTypes.STRING },
    follower_count: { type: DataTypes.INTEGER },
    connection_count: { type: DataTypes.INTEGER },
    bio_line: { type: DataTypes.TEXT }
});

const app = express();
app.use(bodyParser.json());

app.post('/profiles', async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
app.get('/profiles', async (req, res) => {
    try {
        const profile = await Profile.find();
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(3000, async () => {
    await sequelize.sync();
    console.log('Server is running on http://localhost:3000');
});
