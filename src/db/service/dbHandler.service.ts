import { error } from "console";
import DataBase from "./db.service";
import IDataBaseHandler from "../model/db.interface";


export default class DBHandler<T extends object> implements IDataBaseHandler<T> {
    private readonly db: any = DataBase.getActiveConnetion();

    async useDataBase(dbName: string): Promise<void>{
        try{
            await this.db.use(dbName)
        }catch {
           throw error('check if db exists!') 
        }
    }

    async getDataBase<T>(query: string): Promise<T>{
        return await new Promise<T>(()=> []) 
    };



   async addToDB<T>(query: string): Promise<T> {
        return await new Promise<T>(()=> []) 
    };

}