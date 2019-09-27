import { MealService } from './../meal-service.service';
import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Meal } from '../meal';
import { CommonService } from '../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.css']
})
export class CreateMealComponent implements OnInit, OnDestroy {

  newMeal = new Meal(0, '', 0, new Date());
  private subscription: Subscription;

  @Output() addMeal = new EventEmitter<Meal>();
  @Output() editMeal = new EventEmitter<Meal>();
  editState = false;

  // @Output() updateClickedMeal = new EventEmitter<Meal>();

  ngOnInit() {
    this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'call_child') {
        console.log(res.value);
        this.newMeal = this.mealservice.editMeal(res.value);
        this.editState = true;

      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private commonService: CommonService, private mealservice: MealService ) {
    // this.newMeal  = mealService.editMeal(this.newMeal.id);
  }

  submitMeal() {
    this.addMeal.emit(this.newMeal);
    this.newMeal = new Meal(0, '', 0, new Date());

  }

  updateMeal() {
    this.editState = true;
    this.editMeal.emit(this.newMeal);


  }

}
