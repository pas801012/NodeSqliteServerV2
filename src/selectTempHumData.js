var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database(":memory:");
var db = new sqlite3.Database("./temHum.db");

db.serialize(function() {
  // db.each("SELECT  timestamp, temperature, humidity FROM tempHumData", function(
  //   err,
  //   row
  // ) {
  //   console.log(row.timestamp, row.temperature, row.humidity);
  // });
  db.each("SELECT * FROM tempHumData", function(err, row) {
    console.log(row);
  });
});

db.close();
