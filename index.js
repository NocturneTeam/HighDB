const fs = require("fs");

exports.Database = class Database {
  name;
  data = {};

  constructor(name = "Default_Database") {
    if (!fs.existsSync("./db/")) {
      fs.mkdir("./db", (err) => {
        if (err) throw err;
      });
    }

    if (!fs.statSync("./db/").isDirectory()) {
      fs.unlink("./db", (err) => {
        if (err) throw err;
        fs.mkdir("./db", (_err) => {
          console.log(_err);
        });
      });
    }

    if (!fs.existsSync(`./db/${name}.json`)) {
      fs.writeFileSync(`./db/${name}.json`, "{}", {
        encoding: "utf-8",
      });
    } else {
      try {
        JSON.parse(fs.readFileSync(`./db/${name}.json`))
      } catch (error) {
        console.error("Invalid JSON form. Can't work with this database.")
        process.exit(1);
      }
    }

    this.name = name;
    this.data = JSON.parse(fs.readFileSync(`./db/${name}.json`, "utf-8"));
  }

  write() {
    if (!fs.existsSync("./db/")) {
      fs.mkdir("./db", (err) => {
        if (err) throw err;
      });
    }

    if (!fs.statSync("./db/").isDirectory()) {
      fs.unlink("./db", (err) => {
        if (err) throw err;
        fs.mkdir("./db", (_err) => {
          console.log(_err);
        });
      });
    }

    return new Promise((resolve, reject) => {
      try {
        fs.writeFileSync(`./db/${this.name}.json`, JSON.stringify(this.data), {
          encoding: "utf-8",
        });
      } catch (error) {
        reject(error);
      } finally {
        try {
          this.data = JSON.parse(
            fs.readFileSync(`./db/${this.name}.json`, {
              encoding: "utf-8",
            })
          );
        } catch (_error) {
          reject(_error);
        } finally {
          resolve("Done!");
        }
      }
    });
  }
};
