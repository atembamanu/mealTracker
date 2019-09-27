import { Meal } from './meal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  meals: Meal[];
  highCalories: Meal[];
  lowCalories: Meal[];

  getMeal() {
    return this.meals;
  }

  addNewMeal(newmeal) {
    const mealLength = this.meals.length + 1;
    newmeal.id = mealLength + 1;
    newmeal.mDate = new Date(newmeal.mDate);
    this.meals.push(newmeal);
  }

  updateMeal(newmeal) {
    console.log('newmeal');
    console.log(newmeal);
    for (const meal of this.meals) {
     if ( meal.id === newmeal.id) {
        meal.id = newmeal.id;
        meal.name = newmeal.name;
        meal.carolieLevel = newmeal.carolieLevel;
        meal.mDate = newmeal.mDate;
     }

   }
  }

  withLowCalories() {
    this.lowCalories = this.meals.filter(meal => meal.carolieLevel < 500);
    return this.lowCalories;
  }

  withHighCalories() {
    this.highCalories = this.meals.filter(meal => meal.carolieLevel >= 500);
    return this.highCalories;
  }

  deleteMeal(index) {
    return this.meals.splice(index, 1);
  }

  editMeal(id) {
    for (const meal of this.meals) {
      if ( meal.id === id) {
        return meal;
      }
    }

  }

  constructor() {
    this.meals = [
      new Meal(1, 'Chapo Beans', 230, new Date(2018, 12, 2)),
      new Meal(2, 'Chips', 500, new Date(2018, 11, 2)),
      new Meal(4, 'Fries', 900, new Date(2018, 11, 2)),
      new Meal(5, 'Rice Meat', 100, new Date(2018, 12, 2)),
      new Meal(6, 'Rice beans', 80, new Date(2018, 12, 2))
    ];
  }
}
