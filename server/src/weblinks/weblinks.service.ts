import { Injectable } from "@nestjs/common";
import * as mysql from "mysql";
import { Weblink } from "./weblinks.entity";

@Injectable()
export class WeblinkService {
  private connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "animals_adoption",
    });
    this.connection.connect((err) => {
      if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
      }
      console.log("Connected to MySQL!");
    });
  }

  findAll(): Promise<Weblink[]> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * FROM weblinks",
        (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        },
      );
    });
  }

  findById(id: number): Promise<Weblink> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * FROM weblinks WHERE id = ?",
        [id],
        (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          if (results.length === 0) {
            resolve(null); // Return null if weblink is not found
          } else {
            resolve(results[0]); // Return the first result
          }
        },
      );
    });
  }

  create(weblink: Weblink): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "INSERT INTO weblinks SET ?",
        weblink,
        (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        },
      );
    });
  }

  update(id: number, updatedWeblink: Partial<Weblink>): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "UPDATE weblinks SET ? WHERE id = ?",
        [updatedWeblink, id],
        (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        },
      );
    });
  }

  delete(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "DELETE FROM weblinks WHERE id = ?",
        [id],
        (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        },
      );
    });
  }
}
