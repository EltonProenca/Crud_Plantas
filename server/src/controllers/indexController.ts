import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
       res.json({text: 'API está em /api/plantas'});
    }

}

export const indexController = new IndexController;