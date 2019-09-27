import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateMealComponent } from './create-meal/create-meal.component';
import { MealsComponent } from './meals/meals.component';
import { FormsModule } from '@angular/forms';
import { MealService } from './meal-service.service';
import { ToastrService } from './toastr.service'
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateMealComponent,
    MealsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [MealService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
