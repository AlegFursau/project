export default interface IDataBaseHandler<T extends object> {
    getDataBase : (query: string) => Promise<T>;
    addToDB: (query: string) => Promise<T>;
}