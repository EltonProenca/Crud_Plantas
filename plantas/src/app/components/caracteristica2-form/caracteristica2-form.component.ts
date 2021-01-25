import { Genotipo2 } from './../../models/genotipo_1_2';
import { Genotipo1 } from './../../models/genotipo_1_1';
import { Alelos2 } from './../../models/alelos_1_2';
import { Alelos1 } from './../../models/alelos_1_1';
import { Caracteristica2 } from './../../models/caracteristica_1_2';
import { Caracteristica1 } from './../../models/caracteristica_1_1';
import { Planta } from './../../models/planta';
import { PlantasService } from 'src/app/services/plantas.service';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-caracteristica2-form',
  templateUrl: './caracteristica2-form.component.html',
  styleUrls: ['./caracteristica2-form.component.css']
})
export class Caracteristica2FormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  alelos1: Observable<Object>;
  alelos2: Observable<Object>;
  gene1: Observable<Object>;
  gene2: Observable<Object>;
  public caract2Form: FormGroup;


caract2: Caracteristica2 = {
  id_caract1:  0,
  nome_caract: '',
  id_alelos_1_1: 0,
  id_alelos_1_2:  0,
  id_genotipo_1_1:  0,
  id_genotipo_1_2: 0
};
caract2dados: Caracteristica2 = {
  id_caract1:  0,
  nome_caract: '',
  id_alelos_1_1: 0,
  id_alelos_1_2:  0,
  id_genotipo_1_1:  0,
  id_genotipo_1_2: 0
};

  edit: boolean = false;



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private plantasService: PlantasService,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerCaractForm();
    this.alelos1 =  this.plantasService.getAlelo1();


    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.plantasService.getCaract2id(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.caract2 = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  registerCaractForm() {

      this.caract2Form = this.formBuilder.group({
      nome_caract: ['', [Validators.required, Validators.minLength(3)]],
      id_alelos_1_1: ['', [Validators.required, Validators.minLength(1)]],
      id_alelos_1_2: ['', [Validators.required, Validators.minLength(1)]],
      id_genotipo_1_1: ['', [Validators.required, Validators.minLength(1)]],
      id_genotipo_1_2: ['', [Validators.required, Validators.minLength(1)]],
    });
  }


  get nome_caract() {
    return this.caract2Form.get('nome_caract');
  }
  get id_alelos_1_1() {
    return this.caract2Form.get('id_alelos_1_1');
  }
  get id_alelos_1_2() {
    return this.caract2Form.get('id_alelos_1_2');
  }
  get id_genotipo_1_1() {
    return this.caract2Form.get('id_genotipo_1_1');
  }
  get id_genotipo_1_2() {
    return this.caract2Form.get('id_genotipo_1_2');
  }

  ResetForm() {
    this.caract2Form.reset();
  }
  saveCaract2() {
    if (this.caract2.id_genotipo_1_1 === 0 && this.caract2.id_genotipo_1_2 === 0){
      this.caract2 = this.caract2Form.value;
    this.caract2dados.nome_caract = this.caract2.nome_caract;
    this.caract2dados.id_alelos_1_1 = this.caract2.id_alelos_1_1;
    this.caract2dados.id_alelos_1_2 = this.caract2.id_alelos_1_2;
    this.caract2dados.id_genotipo_1_1 = this.caract2.id_alelos_1_1;
    this.caract2dados.id_genotipo_1_2 = this.caract2.id_alelos_1_2;
    delete this.caract2dados.id_caract1;
    this.plantasService.saveCaract2(this.caract2dados)
    .subscribe(
      res => {
        console.log(res);
        alert('Caracteristica cadastrada com sucesso :)');
        this.ResetForm();
        this.router.navigate(['/plantas/add-caract2']);
      },
      err => console.error(err)
    );

    } else {
      this.caract2 = this.caract2Form.value;
      delete this.caract2.id_caract1;
      this.plantasService.saveCaract2(this.caract2)
      .subscribe(
        res => {
          console.log(res);
          alert('Caracteristica cadastrada com sucesso :)');
          this.ResetForm();
          this.router.navigate(['/plantas/add-caract2']);
        },
        err => console.error(err)
      );

    }
  }
  updateCaract2() {
    this.plantasService.updateCaract2(this.caract2.id_caract1, this.caract2)
    .subscribe(
      res => {
        console.log(res);
        alert('cadastrado com sucesso :)');
        this.router.navigate(['/plantas']);
      },
      err => console.log(err)
    );
  }
  }
