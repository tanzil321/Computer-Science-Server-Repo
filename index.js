const express = require ('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const catagories = require('./data/categories.json')
app.use(cors());


app.get('/',(req,res)=>{
    res.send(catagories)
});
app.get('/categories/:id',(req,res)=>{
    const id = req.params.id
    const selectedCourse = catagories.find(n=>
        n._id==id)
    res.send(selectedCourse)
})



app.listen(port, () => {
    console.log('Example app listening on port', port);
  })

module.exports =app;