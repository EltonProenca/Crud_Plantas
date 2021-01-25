import { PlantasService } from './services/plantas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlantasFormComponent } from './components/plantas-form/plantas-form.component';
import { PlantasListComponent } from './components/plantas-list/plantas-list.component';
import { PlantasCruzeComponent } from './components/plantas-cruze/plantas-cruze.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlelosFormComponent } from './components/alelos-form/alelos-form.component';
import { Caracteristica2FormComponent } from './components/caracteristica2-form/caracteristica2-form.component';
import { Caracteristica1FormComponent } from './components/caracteristica1-form/caracteristica1-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlantasFormComponent,
    PlantasListComponent,
    PlantasCruzeComponent,
    AlelosFormComponent,
    Caracteristica2FormComponent,
    Caracteristica1FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PlantasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
