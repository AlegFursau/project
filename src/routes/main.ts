import { log } from "console";
import { NextFunction, Router, Request, Response} from 'express';
import DBHandler from '../db/service/dbHandler.service'


const router = Router({mergeParams: true});
const dbHandler = new DBHandler();



const getDB = async (req:Request, res: Response, next: NextFunction) => {
    await dbHandler.useDataBase('');
    next();
}; 

const timeShtamp = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('Time: ', Date.now());

   
    next()
  };

const statusHandler = (err: Error, req: Request, res: Response & { status: (x:number) => void}, next: NextFunction)=> {
    log(err)
    if(err) {
        res.status(404);
        next(err);
        return;
    }
       
   
    res.status(200);
    next()
};

const logInHandler = (req: Request, res: Response & {render: (x: any) => void, send?: (x: any) => void}) => {
         try{
            res.render('store'); 
         }catch{
            res.send('not found')
         } 
}

const middleware = [
    // getDB,
    statusHandler, 
    logInHandler 
]

router.use(timeShtamp)
router.get('/', middleware)
router.get('/kill', (_: any, res: any): void => {
    process.send? process.send({ cmd: 'kill' }): null;

    // res.sendStatus('json', 400, 'error')
    const a = 5;

    a > 0 ? 'a' : null;
    res.send('killed')
})




module.exports = router