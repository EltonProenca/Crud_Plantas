import { Alelos1 } from './../models/alelos_1_1';
import { Caracteristica1 } from './../models/caracteristica_1_1';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Planta} from '../models/planta';
import { Observable } from 'rxjs';
import { Alelos2 } from '../models/alelos_1_2';
import { Caracteristica2 } from '../models/caracteristica_1_2';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  getPlantas() {
    console.log('retornando dados get');
    return this.http.get(`${this.API_URI}/plantas`);

  }
  getCaract() {
    console.log('retornando dados get');
    return this.http.get(`${this.API_URI}/plantas`);

  }
  getCaract2() {
    console.log('retornando dados');
    return this.http.get(`${this.API_URI}/plantas/caract2`);

  }
  getCaract3() {
    console.log('retornando dados 33');
    return this.http.get(`${this.API_URI}/plantas/caract3`);

  }
  getCaract2id(id: string){
    return this.http.get(`${this.API_URI}/plantas/${id}`);
  }
  getAlelo1() {
    console.log('retornando dados do alelos1');
    return this.http.get(`${this.API_URI}/plantas/alelos1`);

  }
  getAlelocaract_1() {
    console.log('retornando dados do alelos1');
    return this.http.get(`${this.API_URI}/plantas/aleloscaract_1`);
  }
  getAlelocaract_2() {
    console.log('retornando dados do alelos1');
    return this.http.get(`${this.API_URI}/plantas/aleloscaract_2`);
  }
  getAlelocaract_3() {
    console.log('retornando dados do alelos1');
    return this.http.get(`${this.API_URI}/plantas/aleloscaract_3`);
  }
  getAlelocaract_4() {
    console.log('retornando dados do alelos1');
    return this.http.get(`${this.API_URI}/plantas/aleloscaract_4`);
  }
  getAlelocaract_5() {
    console.log('retornando dados do alelos1');
    return this.http.get(`${this.API_URI}/plantas/aleloscaract_5`);
  }
  getAlelocaract_6() {
    console.log('retornando dados do alelos1');
    return this.http.get(`${this.API_URI}/plantas/aleloscaract_6`);
  }
  getAlelocaract_7() {
    console.log('retornando dados do alelos1');
    return this.http.get(`${this.API_URI}/plantas/aleloscaract_7`);
  }


  getPlanta(id_planta: string){
    return this.http.get(`${this.API_URI}/plantas/${id_planta}`);
  }
  deletePlanta(id_planta: string){
    console.log('delte service;'+ id_planta;
    return this.http.delete(`${this.API_URI}/plantas/${id_planta}`);

  }


  savePlanta(planta: Planta) {
    return this.http.post(`${this.API_URI}/plantas/planta`, planta);
  }
  updatePlanta(id: string | number, updatePlanta: Planta): Observable<any> {
    return this.http.put(`${this.API_URI}/plantas/${id}`, updatePlanta);
  }


  saveAlelo1(alelo1: Alelos1) {
    return this.http.post(`${this.API_URI}/plantas/alelo1`, alelo1);
  }
  updateAlelo1(id: string | number, updateAlelo1: Alelos1): Observable<any> {
    return this.http.put(`${this.API_URI}/plantas/${id}`, updateAlelo1);
  }


  saveAlelo2(alelo2: Alelos2) {
    return this.http.post(`${this.API_URI}/plantas/alelo2`, alelo2);
  }
  updateAlelo2(id: string | number, updateAlelo2: Alelos2): Observable<any> {
    return this.http.put(`${this.API_URI}/plantas/${id}`, updateAlelo2);
  }


  saveCaract1(caract1: Caracteristica1) {
    return this.http.post(`${this.API_URI}/plantas/caract1`, caract1);
  }
  saveCaract2(caract2: Caracteristica2) {
    return this.http.post(`${this.API_URI}/plantas/caract2`, caract2);
  }
  updateCaract2(id: string | number, updateCaract2: Caracteristica2): Observable<any> {
    return this.http.put(`${this.API_URI}/plantas/${id}`, updateCaract2);
  }





}
