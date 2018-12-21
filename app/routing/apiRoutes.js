// Load data
var friendsData = require("../data/friends");

module.exports = function(app) {
    // API GET Requests

    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });

    // Catch all route
    app.get('*', function(req, res) {
    res.redirect("/");
    });
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
  
    // app.post("/api/tables", function(req, res) {
    //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    //   // It will do this by sending out the value "true" have a table
    //   // req.body is available since we're using the body parsing middleware
      
    //   if (tableData.length < 5) {
    //     tableData.push(req.body);
    //     res.json(true);
    //   }
    //   else {
    //     waitListData.push(req.body);
    //     res.json(false);
    //   }
    // })
}
