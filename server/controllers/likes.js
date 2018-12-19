const mongoose = require("mongoose");

const Like = mongoose.model("Like");
const Pet = mongoose.model("Pet");

class Likes{
    addLike(req, res){
        let like = new Like(req.body);
        like.save(function(err){
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else{
                Pet.findOne({_id:req.params.id}, function(err, pet){
                    pet.likes.push(like);
                    pet.save(function(err){
                        if(err){
                            res.json({"status": 'not ok', "errors": err});
                        }
                        else{
                            res.json({"status": 'ok'});
                        }
                    })
                })
            }
        })
    }
}


module.exports = new Likes();