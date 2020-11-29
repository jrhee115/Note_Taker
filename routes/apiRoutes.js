const express = require("express");
const path = require("path");
const fs = require("fs");
let noteData = require("../db/db.json")

module.exports = function(app){
    var data = fs.readFileSync("./db/db.json", "utf8");

    app.get("/api/notes", function (req, res){
        res.json(noteData);
    });
    app.post("/api/notes", function (req,res){
        let newNote = req.body;
        newNote.id = Math.floor(Math.random() * 10000);

        noteData.push(newNote);
        res.json(noteData);

        fs.writeFile("./db/db.json", JSON.stringify(noteData), function (err){
            if (err) throw err;
            res.end(noteData);
            console.log(success);
        });
    });
    app.delete("/api/notes/:id", function(req, res){
        
    })
}