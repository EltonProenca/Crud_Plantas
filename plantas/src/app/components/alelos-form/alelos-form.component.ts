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


@Component({
  selector: 'app-alelos-form',
  templateUrl: './alelos-form.component.html',
  styleUrls: ['./alelos-form.component.css']
})
export class AlelosFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  alelo1: Alelos1 = {
    id_ale1: 0,
    nome_ale1: '',
    valor_ale1: ''
  };
  alelo2: Alelos2 = {
    id_ale2: 0,
    nome_ale2: '',
    valor_ale2: ''
  };


  edit: boolean = false;


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private plantasService: PlantasService) { }

  ngOnInit() {
    /*const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.plantasService.getPlanta(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.alelo1 = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }*/
  }
  saveAlelo1() {
    if(this.alelo1.nome_ale1  === '' || this.alelo1.valor_ale1 === ''){
      alert('Favor preencher todos os campos!! :)');

    }else{
      delete this.alelo1.id_ale1;
      this.plantasService.saveAlelo1(this.alelo1)
      .subscribe(
        res => {
          console.log(res);
          alert('Alelos cadastrado com sucesso :)');
          this.router.navigate(['/plantas']);
        },
        err => console.error(err)
      );

    }

  }

  updateAlelo1() {
    this.plantasService.updateAlelo1(this.alelo1.id_ale1, this.alelo1)
    .subscribe(
      res => {
        console.log(res);
        alert('cadastrado com sucesso :)');
        this.router.navigate(['/plantas']);
      },
      err => console.log(err)
    );
  }

  updateAlelo2() {
    this.plantasService.updateAlelo2(this.alelo1.id_ale1, this.alelo2)
    .subscribe(
      res => {
        console.log(res);
        // this.router.navigate(['/plantas/add-alelos']);
      },
      err => console.log(err)
    );
  }
  }

