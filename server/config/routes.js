const Pets = require("../controllers/pets");
const Likes = require("../controllers/likes");

module.exports = function(app){
    app.get("/pets", Pets.getAll);
    app.post("/pet", Pets.create);
    app.get("/pet/:id", Pets.getId);
    app.put('/pet/:id', Pets.update);
    app.delete('/pet/:id', Pets.delete);
    
}