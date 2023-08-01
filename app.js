const express = require('express')

const app = express()

app.use(express.static("public"))

app.set("view engine", "pug")
app.set("views", "./views")


app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });  



  app.get("/", (req, res) => {
    res.render("index", {
      title: 'Home Page'
    });
  });
  
  app.get("/about", (req, res) => {
    res.render("about", {
      title: 'About Page' // Set the correct title for the about page
    });
  });