const express = require("express");
const app = express();
const port = process.env.PORT || 3000
app.use(express.static("public"));
app.get('/leftleft', (req, res) => {
    res.render('index')
    })



    app.listen(port,function(req,res){
        console.log("Server running at port",port)
      });