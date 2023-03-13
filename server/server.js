const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port =  5000;

app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb+srv://exam:Exam123@cluster0.kl3pkto.mongodb.net/test';

mongoose.connect('mongodb://localhost:27017/exam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  createIndexes: true
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    photo: String,
    age: Number,
    gender: String
});

const User = mongoose.model('User', userSchema);

app.get('/users', (req, res) => {
    User.find((err, users) => {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

app.post('/users/add', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

app.put('/users/update/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (!user) {
            res.status(404).send('data not found');
        } else {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.photo = req.body.photo;
            user.age = req.body.age;
            user.gender = req.body.gender;

            user.save().then(user => {
                res.json('User updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});

app.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => {
            res.json('User deleted!');
        })
        .catch(err => {
            res.status(400).send('Delete not possible');
        });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
