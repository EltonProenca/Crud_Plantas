import { Router } from 'express';

 import plantasController  from '../controllers/plantasController';

class PlantasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    

    config(): void {
        // this.router.get('/', indexController.index);
        this.router.get('/', plantasController.list);
        this.router.get('/alelos1', plantasController.listAlelos1);
        this.router.get('/aleloscaract_1', plantasController.listAleloscaract_1);
        this.router.get('/aleloscaract_2', plantasController.listAleloscaract_2);
        this.router.get('/aleloscaract_3', plantasController.listAleloscaract_3);
        this.router.get('/aleloscaract_4', plantasController.listAleloscaract_4);
        this.router.get('/aleloscaract_5', plantasController.listAleloscaract_5);
        this.router.get('/aleloscaract_6', plantasController.listAleloscaract_6);
        this.router.get('/aleloscaract_7', plantasController.listAleloscaract_7);
        this.router.get('/caract2', plantasController.listCaract2);
        this.router.get('/caract3', plantasController.listCaract3);
        this.router.get('/:id_planta', plantasController.getOnePlanta);
        this.router.post('/planta', plantasController.createPlanta);
        this.router.post('/alelo1', plantasController.createAlelo1);
        this.router.post('/alelo2', plantasController.createAlelo2);
         this.router.post('/caract1', plantasController.createCaract1);
        this.router.post('/caract2', plantasController.createCaract2);
        this.router.put('/:id', plantasController.update);
        this.router.delete('/:id_planta', plantasController.delete);

    }



}

const plantasRoutes = new PlantasRoutes();
export default plantasRoutes.router;