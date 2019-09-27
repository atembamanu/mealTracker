import { MealService } from './../meal-service.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.css']
})
export class CreateMealComponent implements OnInit {

  newMeal = new Meal(0, '', 0, new Date());


  @Output() addMeal = new EventEmitter<Meal>();
  @Output() editMeal = new EventEmitter<Meal>();
  @Input() editState: boolean;

  // @Output() updateClickedMeal = new EventEmitter<Meal>();

  ngOnInit() {
  }

  submitMeal() {
    this.addMeal.emit(this.newMeal);
    this.newMeal = new Meal(0, '', 0, new Date());

  }

  updateMeal(id, name, carolieLevel, mDate) {
    const thePost: Meal = {
      id,
      name,
      carolieLevel,
      mDate
    };
    this.editState = false;
    this.editMeal.emit(thePost);
  }

}
