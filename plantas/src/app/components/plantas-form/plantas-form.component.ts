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
  selector: 'app-plantas-form',
  templateUrl: './plantas-form.component.html',
  styleUrls: ['./plantas-form.component.css']
})
export class PlantasFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  paisSelecionado1 :  Caracteristica2;
  paisSelecionado2 :  Caracteristica2;
  paisSelecionado3 :  Caracteristica2;
  paisSelecionado4 :  Caracteristica2;
  paisSelecionado5 :  Caracteristica2;
  paisSelecionado6 :  Caracteristica2;
  paisSelecionado7 :  Caracteristica2;

  alelos1: Observable<Object>;
  aleloscaract1: Observable<Object>;
  aleloscaract2: Observable<Object>;
  aleloscaract3: Observable<Object>;
  aleloscaract4: Observable<Object>;
  aleloscaract5: Observable<Object>;
  aleloscaract6: Observable<Object>;
  aleloscaract7: Observable<Object>;
  caract2: Observable<Object>;
  caract3: Observable<Object>;
  caract4:Observable<Object>;
  caract5:Observable<Object>;
   public plantasForm: FormGroup;

   dadosplanta:Observable<Object>;

  dadoscaract1: Caracteristica2= {
    id_caract1: 0,
    nome_caract: '',
    id_alelos_1_1: 0,
    id_alelos_1_2: 0,
    id_genotipo_1_1: 0,
    id_genotipo_1_2: 0,
  }


planta: Planta = {
  id_planta: 0,
  nome_planta: '',
  id_caracteristica_1_1_1: 0,
  id_ale1_1: 0,
  id_ale2_1: 0,
  id_gene1_1: 0,
  id_gene2_1: 0,
  id_caracteristica_1_1_2: 0,
  id_ale1_2: 0,
  id_ale2_2: 0,
  id_gene1_2: 0,
  id_gene2_2: 0,
  id_caracteristica_1_1_3: 0,
  id_ale1_3: 0,
  id_ale2_3: 0,
  id_gene1_3: 0,
  id_gene2_3: 0,
  id_caracteristica_1_1_4: 0,
  id_ale1_4: 0,
  id_ale2_4: 0,
  id_gene1_4: 0,
  id_gene2_4: 0,
  id_caracteristica_1_1_5: 0,
  id_ale1_5: 0,
  id_ale2_5: 0,
  id_gene1_5: 0,
  id_gene2_5: 0,
  id_caracteristica_1_1_6: 0,
  id_ale1_6: 0,
  id_ale2_6: 0,
  id_gene1_6: 0,
  id_gene2_6: 0,
  id_caracteristica_1_1_7: 0,
  id_ale1_7: 0,
  id_ale2_7: 0,
  id_gene1_7: 0,
  id_gene2_7: 0,

};

caract1: Caracteristica1 = {
  id_caract1: 0,
  id_caracteristica_1_2: 0
};

edit: boolean = false;

constructor(private router: Router,
  private activatedRoute: ActivatedRoute,
  private plantasService: PlantasService,
  public formBuilder: FormBuilder) { }


ngOnInit() {

  this.registerPlantaForm();
  this.alelos1 =  this.plantasService.getAlelo1();
   this.caract2 =  this.plantasService.getCaract2();
  this.caract3 =  this.plantasService.getCaract3();


  const params = this.activatedRoute.snapshot.params;
  console.log(params);
  if (params.id_planta) {
    this.plantasService.getPlanta(params.id_planta)
      .subscribe(
        res => {
          console.log(res);
          this.planta = res;
          this.edit = true;
          this.plantasForm.controls['nome_planta'].setValue(this.planta.nome_planta);
          this.plantasForm.controls['id_caracteristica_1_1'].setValue(this.planta.id_caracteristica_1_1_1);
          this.plantasForm.controls['id_ale1_1'].setValue(this.planta.id_ale1_1);
          this.plantasForm.controls['id_ale2_1'].setValue(this.planta.id_ale1_2);
          this.plantasForm.controls['id_gene1_2'].setValue(this.planta.id_gene1_1);
          this.plantasForm.controls['id_gene2_2'].setValue(this.planta.id_gene2_1);




        },
        err => console.log(err)
      );
  }
}

onSelect1(id:Caracteristica2) {
  const dados = this.plantasService.getCaract2().pipe((id)=>  id);
 console.log('onselect ='+ id);
 if (id === '1') {
    this.aleloscaract1 =  this.plantasService.getAlelocaract_1();
     }

}
onSelect2(id:Caracteristica2) {
 const dados = this.plantasService.getCaract2().pipe((id)=>  id)
console.log('onselect ='+ id);
if (id === '2') {
 this.aleloscaract2 =  this.plantasService.getAlelocaract_2();
    }

}
onSelect3(id:Caracteristica2) {
 const dados = this.plantasService.getCaract2().pipe((id)=>  id)
console.log('onselect ='+ id);
if (id === '3') {
 this.aleloscaract3=  this.plantasService.getAlelocaract_3();
    }

}
onSelect4(id:Caracteristica2) {
 const dados = this.plantasService.getCaract2().pipe((id)=>  id)
console.log('onselect ='+ id);
if (id === '4') {
 this.aleloscaract4 =  this.plantasService.getAlelocaract_4();
    }

}
onSelect5(id:Caracteristica2) {
 const dados = this.plantasService.getCaract2().pipe((id)=>  id)
console.log('onselect ='+ id);
if (id === '5') {
 this.aleloscaract5 =  this.plantasService.getAlelocaract_5();
    }

}
onSelect6(id:Caracteristica2) {
 const dados = this.plantasService.getCaract2().pipe((id)=>  id)
console.log('onselect ='+ id);
if (id === '6') {
 this.aleloscaract6 =  this.plantasService.getAlelocaract_6();
    }

}
onSelect7(id:Caracteristica2) {
 const dados = this.plantasService.getCaract2().pipe((id)=>  id)
console.log('onselect ='+ id);
if (id === '7') {
 this.aleloscaract7 =  this.plantasService.getAlelocaract_7();
    }

}

registerPlantaForm() {

  this.plantasForm = this.formBuilder.group({
  nome_planta: ['', [Validators.required, Validators.minLength(3)]],
  id_caracteristica_1_1: ['', [Validators.required, Validators.minLength(1)]],
  id_ale1_1: ['', [Validators.required, Validators.minLength(1)]],
  id_ale2_1: ['', [Validators.required, Validators.minLength(1)]],
  id_gene1_1: ['', [Validators.required, Validators.minLength(1)]],
  id_gene2_1: ['', [Validators.required, Validators.minLength(1)]],
  id_caracteristica_1_2: ['', [Validators.required, Validators.minLength(1)]],
  id_ale1_2: ['', [Validators.required, Validators.minLength(1)]],
  id_ale2_2: ['', [Validators.required, Validators.minLength(1)]],
  id_gene1_2: ['', [Validators.required, Validators.minLength(1)]],
  id_gene2_2: ['', [Validators.required, Validators.minLength(1)]],
  id_caracteristica_1_3: ['', [Validators.required, Validators.minLength(1)]],
  id_ale1_3: ['', [Validators.required, Validators.minLength(1)]],
  id_ale2_3: ['', [Validators.required, Validators.minLength(1)]],
  id_gene1_3: ['', [Validators.required, Validators.minLength(1)]],
  id_gene2_3: ['', [Validators.required, Validators.minLength(1)]],
  id_caracteristica_1_4: ['', [Validators.required, Validators.minLength(1)]],
  id_ale1_4: ['', [Validators.required, Validators.minLength(1)]],
  id_ale2_4: ['', [Validators.required, Validators.minLength(1)]],
  id_gene1_4: ['', [Validators.required, Validators.minLength(1)]],
  id_gene2_4: ['', [Validators.required, Validators.minLength(1)]],
  id_caracteristica_1_5: ['', [Validators.required, Validators.minLength(1)]],
  id_ale1_5: ['', [Validators.required, Validators.minLength(1)]],
  id_ale2_5: ['', [Validators.required, Validators.minLength(1)]],
  id_gene1_5: ['', [Validators.required, Validators.minLength(1)]],
  id_gene2_5: ['', [Validators.required, Validators.minLength(1)]],
  id_caracteristica_1_6: ['', [Validators.required, Validators.minLength(1)]],
  id_ale1_6: ['', [Validators.required, Validators.minLength(1)]],
  id_ale2_6: ['', [Validators.required, Validators.minLength(1)]],
  id_gene1_6: ['', [Validators.required, Validators.minLength(1)]],
  id_gene2_6: ['', [Validators.required, Validators.minLength(1)]],
  id_caracteristica_1_7: ['', [Validators.required, Validators.minLength(1)]],
  id_ale1_7: ['', [Validators.required, Validators.minLength(1)]],
  id_ale2_7: ['', [Validators.required, Validators.minLength(1)]],
  id_gene1_7: ['', [Validators.required, Validators.minLength(1)]],
  id_gene2_7: ['', [Validators.required, Validators.minLength(1)]],

});
}

get nome_planta() {
  return this.plantasForm.get('nome_planta');
}
get id_caracteristica_1_1() {
  return this.plantasForm.get('id_caracteristica_1_1');
}
get id_ale1_1() {
  return this.plantasForm.get('id_ale1_1');
}
get id_ale2_1() {
  return this.plantasForm.get('id_ale2_1');
}
get id_gene1_1() {
  return this.plantasForm.get('id_gene1_1');
}
get id_gene2_1() {
  return this.plantasForm.get('id_gene2_1');
}
get id_caracteristica_1_2() {
  return this.plantasForm.get('id_caracteristica_1_2');
}
get id_ale1_2() {
  return this.plantasForm.get('id_ale1_2');
}
get id_ale2_2() {
  return this.plantasForm.get('id_ale2_2');
}
get id_gene1_2() {
  return this.plantasForm.get('id_gene1_2');
}
get id_gene2_2() {
  return this.plantasForm.get('id_gene2_2');
}
get id_caracteristica_1_3() {
  return this.plantasForm.get('id_caracteristica_1_3');
}
get id_ale1_3() {
  return this.plantasForm.get('id_ale1_3');
}
get id_ale2_3() {
  return this.plantasForm.get('id_ale2_3');
}
get id_gene1_3() {
  return this.plantasForm.get('id_gene1_3');
}
get id_gene2_3() {
  return this.plantasForm.get('id_gene2_3');
}
get id_caracteristica_1_4() {
  return this.plantasForm.get('id_caracteristica_1_4');
}
get id_ale1_4() {
  return this.plantasForm.get('id_ale1_4');
}
get id_ale2_4() {
  return this.plantasForm.get('id_ale2_4');
}
get id_gene1_4() {
  return this.plantasForm.get('id_gene1_4');
}
get id_gene2_4() {
  return this.plantasForm.get('id_gene2_4');
}
get id_caracteristica_1_5() {
  return this.plantasForm.get('id_caracteristica_1_5');
}
get id_ale1_5() {
  return this.plantasForm.get('id_ale1_5');
}
get id_ale2_5() {
  return this.plantasForm.get('id_ale2_5');
}
get id_gene1_5() {
  return this.plantasForm.get('id_gene1_5');
}
get id_gene2_5() {
  return this.plantasForm.get('id_gene2_5');
}
get id_caracteristica_1_6() {
  return this.plantasForm.get('id_caracteristica_1_6');
}
get id_ale1_6() {
  return this.plantasForm.get('id_ale1_6');
}
get id_ale2_6() {
  return this.plantasForm.get('id_ale2_6');
}
get id_gene1_6() {
  return this.plantasForm.get('id_gene1_6');
}
get id_gene2_6() {
  return this.plantasForm.get('id_gene2_6');
}
get id_caracteristica_1_7() {
  return this.plantasForm.get('id_caracteristica_1_7');
}
get id_ale1_7() {
  return this.plantasForm.get('id_ale1_7');
}
get id_ale2_7() {
  return this.plantasForm.get('id_ale2_7');
}
get id_gene1_7() {
  return this.plantasForm.get('id_gene1_7');
}
get id_gene2_7() {
  return this.plantasForm.get('id_gene2_7');
}

ResetForm() {
  this.plantasForm.reset();
}


savePlanta() {
  this.planta = this.plantasForm.value;
  delete this.planta.created_at;
  delete this.planta.id_planta;
  this.plantasService.savePlanta(this.planta)
  .subscribe(
    res =>{
      console.log(res);
      alert('Planta cadastrada com sucesso:)');
      this.ResetForm();
      this.router.navigate(['/plantas']);
    },
    err => console.error(err)
  );
}


updatePlanta() {
  delete this.planta.created_at;
  this.plantasService.updatePlanta(this.planta.id_planta, this.planta)
  .subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/plantas']);
    },
    err => console.log(err)
  );
}
}
