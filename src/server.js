const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  const express = require("express");
  const app = express();

  // '/'のルーティングは、その他のAPIのプログラムよりも下に記載
  var path = require("path");
  app.use(function(req, res, next) {
    var filename = path.basename(req.url);
    var extension = path.extname(filename);
    // if (extension === '.css')
    console.log("The file " + filename + " was requested.");
    next();
  });
  app.use("/static/", express.static(path.join(__dirname, "toppage")));
  app.use("/i/", express.static(path.join(__dirname, "tenkipage")));
  app.use("/weather/", express.static(path.join(__dirname, "tenki_city")));

  return app;
};

module.exports = { setupServer };
