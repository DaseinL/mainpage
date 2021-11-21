const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.static('resource'));
app.use(express.json());

app.get('/',function(req,res){
    res.status(200).send('index.html');
});

app.use((req,res,next)=>{
    res.status(404).send('404 No found');
});

app.listen(8080);

console.log('This page runs on http://127.0.0.1:8080');