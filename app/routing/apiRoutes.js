// Load data
var friendData = require("../data/friends");
var fs = require("fs");

module.exports = function(app) {
    // API GET requests
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });

    // API POST requests 
    app.post("/api/friends", function (req, res) {
        // Create a new person object to store their data
        var person = new Object(); // {}
        person.name = req.body.name;
        person.photo = req.body.photo;
        person.scores = [
            Number(req.body.q1),
            Number(req.body.q2),
            Number(req.body.q3),
            Number(req.body.q4),
            Number(req.body.q5),
            Number(req.body.q6),
            Number(req.body.q7),
            Number(req.body.q8),
            Number(req.body.q9),
            Number(req.body.q10),
        ]

        // Push new person into friends(newFriends) array
        friendData.push(person);
        console.log('friendData', friendData);

        // write file to friends.js
        fs.writeFile('./app/data/friends.json', JSON.stringify(friendData, null, 2), function (err) {
          console.log(err);
        });

        // compare persons scores with other friends to find closest compatibility
        var match = {
            name: "",
            photo: "",
            difference: 500
        };
    
        for (var i = 0; i < friendData.length - 1; i++) {
            var totalDifference = 0;
            for (var j = 0; j < person.scores.length; j++) {
                totalDifference += Math.abs(friendData[i].scores[j] - person.scores[j]);
            }
    
            if (totalDifference <= match.difference) {
                match.name = friendData[i].name;
                match.photo = friendData[i].photo;
                match.difference = totalDifference;
            }
        }
        console.log(match);
        res.json(match);
    })

}

