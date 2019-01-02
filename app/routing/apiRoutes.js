// Load data
var friendData = require("../data/friends");

module.exports = function(app) {
    // API GET requests
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });

    // API POST requests 
    app.post("/api/friends", function (req, res) {
        // Best friend match logic
        // Variable to hold the new friend object. - Body parser allows us to use req.body
        // var newFriend = req.body;
        // console.log(newFriend);
        
        // var newFriends = friendData.slice()
        // Create a new person object to store their data
        var person = new Object();
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
        // testing- console.log(person);
        // Push new person into friends(newFriends) array
        friendData.push(person);
        console.log('friendData', friendData);



        // // Variable for friend match
        // var bestFriend;
        // // Instantiate a variable with the maximum possible difference allowed by 10 survey questions + 1 (50 + 1)
        // var maximumDifference = 51; // This can be changed to totalDifference since they'll be doing the same thing, per Step 4
        // // Iterate through each element (object) in the friendData array - assign parameter 'friend' as placeholder for each object
        // friendData.forEach(function (friend) {
        //     // Instiatiate a variable to hold the sums of each difference calculation
        //     var differenceSum = 0;
        //     // Instantiate a variable to hold the 'scores' of each friend's survey results
        //     var scoresArray = friend.scores;
        //     // Iterate through each index (of each friend object) of the survey results' scoresArray - assign parameters score and index as placeholders for each score and each index
        //     scoresArray.forEach(function (score, index) {
        //         // For each index of the newFriend and existing friend's 'scores' array, reassign the sums variable to equal itself plus the difference between newFriends score value and existing friend's score value at the current index
        //         differenceSum += Math.abs(newFriend.scores[index] - score); // Take the absolute value of each difference before adding them all together so there are no negative solutions
        //     })
        //     // Set a condition to check if the sums variable is less than the maximumDifference
        //     if (differenceSum < maximumDifference) {
        //         // If it is, reassign the value of maximumDifference to the differenceSum to compare to subsequent differences for each friend object
        //         maximumDifference = differenceSum;
        //         // Reassign friendMatch to be the friend object with the lower differenceSum - this will occur for each friend object until the friend object with the lowest difference is reached
        //         friendMatch = friend;
        //     }
        // });
        // // Push newFriend object to array of objects in api/friends.js
        // friendData.push(bestFriend);
        // // Send the friendMatch object back as a JSON response to 'alert' user of a survey successfully submitted, then display their match with a modal containing values from this response
        // res.json(friendMatch);
    });
}
