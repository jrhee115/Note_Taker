var noteData = require("../db/db.json");
var fs = require("fs");
var util = require ("util");
var string = require("string")

var writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app){

    app.get("/api/notes", function (req, res){
        res.json(noteData);
    });
    app.post("/api/notes", function (req,res){
       req.body.id = string();
       noteData.push(req.body)

       try{
           await writeFileAsync("./db/db.json", JSON.stringify(noteData));
           console.log("updated");
           return res.json(true);
       }
       catch(err){
           console.log(err);
           return res.json(false);
       }
    });
    app.delete("/api/notes/:id", function(req, res){
    });
}
