const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT;
const cors = require('cors');
const path = require('path');

// database connection
mongoose.connect('mongodb+srv://' + process.env.MONGO_USER + ':' + process.env.MONGO_ATLAS_PW + '@cluster0.uvymo.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true });
// mongodb+srv://jaybhanushali3166:<password>@cluster0.uvymo.mongodb.net/?retryWrites=true&w=majority

mongoose.Promise = global.Promise;



// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

// CORS error preventions
// app.use((req, res, next) => {
//     res.header("Acess-Control-Allow-Origin", "*");
//     res.header(
//         "Acess-Control-Allow-Headers",
//         "Origin, X-Requested-With,Content-Type,Accept,Authorization"
//     );

//     res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,GET');
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
// })

// route paths
// const productRoutes = require('./api/routes/products');
const templateRoutes = require('./routes/template');
const resumeRoutes = require('./routes/resume');

const userRoutes = require('./routes/user');

// Routes which should handle requests
// app.use('/products',productRoutes);
app.use('/user', userRoutes);
app.use('/template', templateRoutes);
app.use('/resume', resumeRoutes);

// Error handling
app.use((req, res, next) => {
    console.log("Heree");
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

const server = app.listen(port, () => {
    const address = server.address();
    console.log(`server listening on port ${address.port} , ENV PORT - ${port}`)
});

module.exports = app;