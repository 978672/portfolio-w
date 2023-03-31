const pokeData = require("./data");

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

  // app.use("/tenki/", (req, res) => {
  //   console.log("Hello, express");
  //   const WEATHER_FORECAST =
  //     "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

  //   async function request() {
  //     const response = await fetch(WEATHER_FORECAST);
  //     const jsonResponse = await response.json();
  //     console.log(jsonResponse);
  //     console.log(jsonResponse[0].timeSeries[0].areas[0].weathers);
  //     const today = await jsonResponse[0].timeSeries[0].areas[0].weathers[0];
  //     const tomorrow = await jsonResponse[0].timeSeries[0].areas[0].weathers[1];
  //     const dayAfterT = await jsonResponse[0].timeSeries[0].areas[0]
  //       .weathers[2];

  //     console.log(today);
  //     console.log(tomorrow);
  //     console.log(dayAfterT);

  //     // const doc = document.getElementById('result');
  //     // doc.innerText = JSON.stringify(today, null , "\t");
  //     // const doc2 = document.getElementById('result2');
  //     // doc2.innerText = JSON.stringify(tomorrow, null , "\t");
  //     return today;
  //   }

  //   res.send(JSON.stringify(request(), null, "\t"));
  // });

  return app;
};

module.exports = { setupServer };
