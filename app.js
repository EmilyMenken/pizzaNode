//import express
import express from 'express';

//express application
const app = express();

//Serve static files
app.use(express.static('public'));

//
app.use(express.urlencoded({extended: true}));

//define a port number
const PORT = 3000;

//make a default rout for home page
app.get(`/`, (req,res) => {

//send homepage as a response to the client's request
res.sendFile(`${import.meta.dirname}/views/home.html`)
});

//define thankyou.html route
app.get(`/thankyou`, (req,res)=>{

//send to thankyou.html

res.sendFile(`${import.meta.dirname}/views/thankyou.html`)

});

//send to contact-us.html
app.get(`/contactUs`, (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact-us.html`)

});

app.post(`/submit-order`, (req,res) =>{

console.log(req.body);
res.send(`<h1>Confirmed</h1>`)
});

//tell server to use chosen PORT
app.listen(PORT, ()=> {

console.log(`Server is running at http://localhost:${PORT}`);

})


// add nodemon npm install nodemon --save-dev
// npx nodemon to run it