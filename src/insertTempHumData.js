var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database(":memory:");
var db = new sqlite3.Database("./temHum.db");

db.serialize(function() {
  // db.run(
  //   "CREATE TABLE tempHumData (sensor TEXT, timestamp INTEGER, temperature INTEGER, humidity INTEGER)"
  // );
  db.run(
    // "INSERT INTO tempHumData ( sensor, timestamp, temperature, humidity)\
    "INSERT INTO tempHumData ( sensor, temperature, humidity)\
     VALUES (?, ?, ?)",
    ["dht11-1", 23, 43],
    function(err) {
      if (err) {
        console.log("ERROR: ", err);
      }
    }
  );

  // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  // for (var i = 0; i < 10; i++) {
  //   stmt.run("Ipsum " + i);
  // }
  // stmt.finalize();

  // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
  //   console.log(row.id + ": " + row.info);
  // });
});

db.close();
