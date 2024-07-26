require('dotenv').config();
const cors=require('cors');
const express = require('express');
const mailRouter=require('./router/mailRouter');


const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(mailRouter);

app.listen(port,(err)=>{
    if(err){
        console.log(err) ;
    }else{
        console.log(`connecté`) ;
        
    }
})