const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const uri = "mongodb+srv://kavinrajcs21:kavinraj@cluster0.jz7gfjf.mongodb.net/Portfolio?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });



const users = new mongoose.Schema({
    pro_title:'string',
    site_link:'string',
    pro_images:'string'
})



const user = mongoose.model('project' , users , 'project')

app.get('/', (req,res)=>{
    user.find()
        .then((use) => {res.send(use)})
        .catch((err) => {console.log(err)})
})


app.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
});