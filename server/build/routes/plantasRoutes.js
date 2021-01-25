"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plantasController_1 = __importDefault(require("../controllers/plantasController"));
class PlantasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/', indexController.index);
        this.router.get('/', plantasController_1.default.list);
        this.router.get('/alelos1', plantasController_1.default.listAlelos1);
        this.router.get('/aleloscaract_1', plantasController_1.default.listAleloscaract_1);
        this.router.get('/aleloscaract_2', plantasController_1.default.listAleloscaract_2);
        this.router.get('/aleloscaract_3', plantasController_1.default.listAleloscaract_3);
        this.router.get('/aleloscaract_4', plantasController_1.default.listAleloscaract_4);
        this.router.get('/aleloscaract_5', plantasController_1.default.listAleloscaract_5);
        this.router.get('/aleloscaract_6', plantasController_1.default.listAleloscaract_6);
        this.router.get('/aleloscaract_7', plantasController_1.default.listAleloscaract_7);
        this.router.get('/caract2', plantasController_1.default.listCaract2);
        this.router.get('/caract3', plantasController_1.default.listCaract3);
        this.router.get('/:id_planta', plantasController_1.default.getOnePlanta);
        this.router.post('/planta', plantasController_1.default.createPlanta);
        this.router.post('/alelo1', plantasController_1.default.createAlelo1);
        this.router.post('/alelo2', plantasController_1.default.createAlelo2);
        this.router.post('/caract1', plantasController_1.default.createCaract1);
        this.router.post('/caract2', plantasController_1.default.createCaract2);
        this.router.put('/:id', plantasController_1.default.update);
        this.router.delete('/:id_planta', plantasController_1.default.delete);
    }
}
const plantasRoutes = new PlantasRoutes();
exports.default = plantasRoutes.router;
