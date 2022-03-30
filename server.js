const express = require ('express');
const cookieParser = require ('cookie-parser');
const cors = require ('cors');
const path = require ('path');
const mongoose = require ('mongoose');
const routes = require('./src/routes');
const bodyParser = require ('body-parser');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://rafacandido:Rafael07082002!@cluster0.ghz45.mongodb.net/MyPharma?retryWrites=true&w=majority' ,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("MongoDB CONECTADO com sucesso!")
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(routes);

app.listen(port, function(){
    console.log('Server runing on port ' + port);
});
