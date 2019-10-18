var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database(":memory:");
var db = new sqlite3.Database("./temHum.db");

db.serialize(function() {
  db.run(
    "CREATE TABLE tempHumData (\
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
      sensor TEXT,\
      timestamp INTEGER(4) NOT NULL DEFAULT (strftime('%s','now')),\
      temperature INTEGER,\
      humidity INTEGER\
    )"
  );
});

db.close();
