import { log } from 'console';
import { NextFunction, Router, Request, Response} from 'express';

const router = Router({mergeParams: true})

router.get('/', (req: Request, res: Response & {render: (x: string) => void})=> {
    res.render('products')
})

router.post('/', (req: Request, res: Response & {send: (x: string) => void})=> {
    log(req.body)
    res.send('sent')
})

module.exports = router