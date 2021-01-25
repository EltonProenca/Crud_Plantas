import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlelosFormComponent } from './components/alelos-form/alelos-form.component';
import { Caracteristica1FormComponent } from './components/caracteristica1-form/caracteristica1-form.component';
import { Caracteristica2FormComponent } from './components/caracteristica2-form/caracteristica2-form.component';
import { PlantasCruzeComponent } from './components/plantas-cruze/plantas-cruze.component';
import { PlantasFormComponent } from './components/plantas-form/plantas-form.component';
import { PlantasListComponent } from './components/plantas-list/plantas-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/plantas',
    pathMatch: 'full'
  },
  {
    path: 'plantas',
    component: PlantasListComponent
  },
  {
    path: 'plantas/add-planta',
    component: PlantasFormComponent
  },
  {
    path: 'plantas/edit/:id_planta',
    component: PlantasFormComponent
  },
  {
    path: 'plantas/cruze',
    component: PlantasCruzeComponent
  },
  {
    path: 'plantas/add-alelos',
    component: AlelosFormComponent
  },
  {
    path: 'plantas/add-caract2',
    component: Caracteristica2FormComponent
  },
  {
    path: 'plantas/add-caract1',
    component: Caracteristica1FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
