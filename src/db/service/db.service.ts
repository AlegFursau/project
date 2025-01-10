const mysql = require('mysql2');

export default class  DataBase {
  private static connetion = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: 3306,
    multipleStatements: true
    
  });

  static connect(): void {
     this.connetion.getConnection((error: Error) =>{
      if(error) throw error;

      console.warn('connected');
    } )
  }


static async getActiveConnetion<T extends object>(): Promise<T> {
    return await this.connetion
  }
}

module.exports = DataBase


