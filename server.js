// DEPENDENCIES
const express = require("express");

//Express config
var app = express();
var PORT = process.env.PORT || 9800

app.use(express.static("./files"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  