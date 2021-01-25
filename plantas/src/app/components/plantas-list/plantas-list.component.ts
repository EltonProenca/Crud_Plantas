import { Component, HostBinding, OnInit } from '@angular/core';
import { PlantasService } from 'src/app/services/plantas.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  plantas: any = [];
  caracteristica_1_1: any = [];

  constructor(private plantasService: PlantasService) { }

  ngOnInit() {
   this.getPlantas();
   // this.getCaract();
  }

  getPlantas() {
    this.plantasService.getPlantas()
      .subscribe(
        res => {
          this.plantas = res;
          // console.log(res);
        },
        err => console.error(err)
      );
  }
  getCaract(){
  this.plantasService.getCaract()
  .subscribe(
    res => {
      this.caracteristica_1_1 = res;
      console.log(res);
    },
    err => console.error(err)
  );
}

deletePlanta(id_planta: string){
  console.log('deletando' + id_planta);

  this.plantasService.deletePlanta(id_planta)
  .subscribe(
    res => {
      console.log(res);
      this.getPlantas();
    },
    err => console.error(err)
  );
}
}




