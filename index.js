
// importation des modules
const express = require('express');
const indexRoute = require('./routes/router');
const testDate = require('./midellwere/date');
const app = express();
 const port = 4000 ;
 const path = require('path')
 


// configuration de fichier public 
app.use(express.static(path.join(__dirname,"public")))

// configuration de fichier views et l'extention 
 app.set('views','./views');
 app.set('view engine','pug')

// configuration de date 
 app.use(testDate)
 app.use('/',indexRoute)
 

// creation serveur 
 app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('serveur cree')
 })


