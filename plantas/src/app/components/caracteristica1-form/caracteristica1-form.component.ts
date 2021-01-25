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
  selector: 'app-caracteristica1-form',
  templateUrl: './caracteristica1-form.component.html',
  styleUrls: ['./caracteristica1-form.component.css']
})
export class Caracteristica1FormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  alelos1: Observable<Object>;
  alelos2: Observable<Object>;
  gene1: Observable<Object>;
  gene2: Observable<Object>;

  caract2: Caracteristica2 = {
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
    this.alelos1 =  this.plantasService.getAlelo1();

  }

  saveCaract2() {
    delete this.caract2.id_caract1;
    this.plantasService.saveCaract2(this.caract2)
    .subscribe(
      res => {
        console.log(res);
        alert('cadastrado com sucesso :)');
        this.router.navigate(['/plantas/add-caract2']);
      },
      err => console.error(err)
    );
  }

}
