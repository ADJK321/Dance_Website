// npm install pug
// npm install express
// npm i body-parser   ->   to use app.post with express to save the data


const express = require("express") ;
const path = require("path") ;

const bodyparser = require("body-parser") ;



const app = express() ;
const port = 8000 ;

// express specific stuff  
app.use('/static',express.static('static')) ;  // serving static files  //  url  --   folder
app.use(express.urlencoded())  // for receiving the data from form

//  pug specific stuff
app.set('view engine' , 'pug') ; // set the template engine as pug
app.set('views', path.join(__dirname,'views') ) ; // set the views directory

// endpoints
app.get( '/' , (req,res) =>{
    
     const params = {} ;
    res.status(200).render('index.pug' ,params ) ;
})

/


// to start the server
app.listen( port , ()=>{
     
    console.log(`The application started successfully on port ${port}`) ;
} )