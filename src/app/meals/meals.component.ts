import { MealService } from './../meal-service.service';
import { Component, OnInit } from '@angular/core';

import { Meal } from '../meal';
import { ToastrService } from '../toastr.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {


  meals: Meal[];

  constructor(private mealService: MealService,
              private toastService: ToastrService,
              private commonService: CommonService) {

   }
   addNewMeal(meal) {
    if (meal.id) {
      // console.log("update")
      this.toastService.success('Meal updated succesfully');
      this.mealService.updateMeal(meal);
    } else {
      // console.log("push")
     this.toastService.success('Meal added succesfully');
     this.mealService.addNewMeal(meal);

   }
  }

  //  updateOldMeal(meal) {
  //    this.toastService.info('Meal Updated Sucessfully');
  //    this.mealService.editMeal(meal);
  //  }

   editMeal(id) {
     this.commonService.notifyOther({option: 'call_child', value: id});
     this.mealService.editMeal(id);
   }

   getAllMeals() {
     if (this.meals.length !== 0) {
      this.toastService.info('Filter Set to all meals');
      this.meals = this.mealService.getMeal();
     } else {
      this.toastService.error('Sorry, Meal Bucket is empty');
     }

  }
  withHighCalories() {
    if (this.meals.length !== 0) {
      this.toastService.info('Filter Set to meals with High Calories');
      this.meals = this.mealService.withHighCalories();
    } else {
      this.toastService.error('Sorry, Meal Bucket is empty');

    }

  }
  withLowCalories() {
    if (this.meals.length !== 0 ) {
      this.toastService.info('Filter Set to meals with Low Calories');
      this.meals = this.mealService.withLowCalories();
    } else {
      this.toastService.error('Sorry, Meal Bucket is empty');
    }

  }
  deleteMeal(index) {
    if (this.meals.length !== 0) {
      this.toastService.warning(this.meals[index].name + ' deleted succesfully');
      this.mealService.deleteMeal(index);
    } else {
      this.toastService.error('Operation not allowed, Meal Bucket is empty');

    }
  }
    ngOnInit() {
    this.meals = this.mealService.getMeal();

  }



}
