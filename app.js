//import express
import express from 'express';

//express application
const app = express();

//Serve static files
app.use(express.static('public'));

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



//tell server to use chosen PORT
app.listen(PORT, ()=> {

console.log(`Server is running at http://localhost:${PORT}`);

})