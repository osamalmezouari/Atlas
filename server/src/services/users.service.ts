import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';
import { users } from '../entity/users.entity';

@Injectable()
export class UsersService {
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

  findAll(): Promise<users[]> {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM users', (error, results: users[], fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }

  findById(id: number): Promise<users> {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM users WHERE user_ID = ?', [id], (error, results: users[], fields) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.length === 0) {
          resolve(null); // Return null if user is not found
        } else {
          resolve(results[0]); // Return the first result (assuming user_ID is unique)
        }
      });
    });
  }

  create(user: users): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }

  update(id: number, updatedUser: users): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query('UPDATE users SET ? WHERE user_ID = ?', [updatedUser, id], (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }

  delete(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query('DELETE FROM users WHERE user_ID = ?', [id], (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
}
