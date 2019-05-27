const   express = require('express'),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose')
        // logger = require('morgan'),
        // cors = require('cors'),
        landing = require('./routes/api/landing');
        animalRoutes = require('./routes/api/animals');

const app = express();

//app.use(cors());
//bodyParser
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;


//Mongoose Connect to DB
mongoose.connect(db,{useNewUrlParser: true})
    .then(() => console.log('Mongo Connected...'))
    .catch(err => console.log(err));


//Use Routes
app.use('/', landing);
app.use('/animals', animalRoutes);

//REQUIRED ROUTES(ROUTER)
// app.use("/", indexRoutes),//nothng in common with other routes so only used "/"
// app.use("/countries", countriesRoutes);//append app.js routes with route name here then rename routes to "/..".
// app.use("/countries/:id/comments", commentRoutes),
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server started..");
// });

const port = process.env.PORT || 5000; //either heroku or port 5000

app.listen(port, () => console.log(`Server started on port ${port}`));

