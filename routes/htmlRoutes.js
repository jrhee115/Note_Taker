// DEPENDENCIES
const path = require("path");

module.exports = function(app) {

//GET `/notes` - Should return the `notes.html` file.
//GET `*` - Should return the `index.html` file

    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};