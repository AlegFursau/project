import { log } from 'console';
import { NextFunction, Router, Request, Response } from 'express';
import { Buffer } from 'node:buffer';

export class BufferService {
    readonly router = Router({mergeParams: true});

    constructor(){
        this.mainF()
    }
   
    mainF(): void {
        this.setBaseUrl()
    }


    setBaseUrl(): void {
        this.router.get('/', (req: Request, res: Response & {send: (x: string) => void }) => {
            const buf7 = Buffer.from([1,2,3,4,5,6]);
            res.send(buf7.toString())
        })
    }
}


