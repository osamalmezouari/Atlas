import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';
import { AdoptionEntity } from './adoption.entity';

@Injectable()
export class AdoptionService {
  private connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'animals_adoption',
    });
    this.connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
      }
      console.log('Connected to MySQL!');
    });
  }

  findAll(): Promise<AdoptionEntity[]> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'SELECT * FROM adoption',
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

  findById(id: number): Promise<AdoptionEntity> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'SELECT * FROM adoption WHERE adoption_ID = ?',
        [id],
        (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          if (results.length === 0) {
            resolve(null); // Return null if adoption is not found
          } else {
            resolve(results[0]); // Return the first result
          }
        },
      );
    });
  }

  create(adoption: AdoptionEntity): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'INSERT INTO adoption SET ?',
        adoption,
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

  update(id: number, updatedAdoption: Partial<AdoptionEntity>): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'UPDATE adoption SET ? WHERE adoption_ID = ?',
        [updatedAdoption, id],
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
        'DELETE FROM adoption WHERE adoption_ID = ?',
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
