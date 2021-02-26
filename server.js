const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/index'); 

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

//console.log(app.get('view engine'));
//If another folder needs to be configured 
//app.set('views', path.resolve(__dirname) + '/templates');


app.use(express.static('public')); 

/* app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname) + '/index.html')


}); */ 


/* app.get('/download', (req, res) => {

    res.download(path.resolve(__dirname) + '/about.html');

}); */

app.use(mainRouter)


app.listen(PORT, () => {

    console.log(`Listening on Port ${PORT}`); 

}); 