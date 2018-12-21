// DEPENDENCIES
var express = require("express");
var path = require('path');


// EXPRESS CONFIGURATION
  // Tells node that we are creating an "express" server
  var app = express();

  // Sets an initial port. We"ll use this later in our listener
  var PORT = process.env.PORT || 3000;

  // Sets up the Express app to handle data parsing
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

// Set static path
app.use(express.static(path.join(__dirname, '/../public')))

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// External API routes

// var externalAPIRoutes = require("../Friend-Finder/app/routing/apiRoutes");
// app.use('/apiRoutes', externalAPIRoutes);

// External HTML routes

// var externalHTMLRoutes = require("../Friend-Finder/app/routing/htmlRoutes");
// app.use('/htmlRoutes', externalHTMLRoutes);

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
