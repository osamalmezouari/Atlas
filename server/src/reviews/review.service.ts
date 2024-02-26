import { Injectable } from "@nestjs/common";
import * as mysql from "mysql";
import { Review } from "./review.entity";

@Injectable()
export class ReviewService {
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

  findAll(): Promise<Review[]> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * FROM reviews",
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

  findById(id: number): Promise<Review> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * FROM reviews WHERE review_ID = ?",
        [id],
        (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          if (results.length === 0) {
            resolve(null); // Return null if review is not found
          } else {
            resolve(results[0]); // Return the first result
          }
        },
      );
    });
  }

  create(review: Review): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "INSERT INTO reviews SET ?",
        review,
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

  update(id: number, updatedReview: Partial<Review>): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "UPDATE reviews SET ? WHERE review_ID = ?",
        [updatedReview, id],
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
        "DELETE FROM reviews WHERE review_ID = ?",
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
