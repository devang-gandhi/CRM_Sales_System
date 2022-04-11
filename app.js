require('dotenv').config();
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const port = process.env.PORT || 3001;

//security
app.use(helmet());

//error handling
app.use(cors());

//database connection
const mongoose = require('mongoose');
mongoose.connect(process.env.URL);
const check = mongoose.connection;
check.on('open', ()=> {
  console.log('Database Connected!');
})
check.on('error', (error)=> {
  console.log(error);
})


//logger
app.use(morgan('tiny'));

//parser
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


//routers
const userRouters = require('./src/routers/userRouter');
const recordRouters = require('./src/routers/recordRouter');
const tokenRouters = require('./src/routers/tokenRouter');
 

//use Routers
app.use('/user', userRouters);
app.use('/record',recordRouters);
app.use('/token', tokenRouters);

//errorHandlers
const errorHandlers = require('./src/assets/error');

app.use((req,res,next) =>{
    const error = new Error('Resources not Found:(');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next)=>{
  errorHandlers(error, res);  
})

app.listen(port, () => {
    console.log(`API is ready to work on http://localhost:${port}`);

})