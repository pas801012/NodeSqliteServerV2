var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database(":memory:");
var db = new sqlite3.Database("./temHum.db");

db.serialize(function() {
  db.run("DROP TABLE IF EXISTS tempHumData");
});

db.close();
