import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName') ingredientNameRef : ElementRef;
  @Output() ingredientEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredientAmount: HTMLInputElement){
    this.ingredientEvent.emit(new Ingredient(this.ingredientNameRef.nativeElement.value, Number(ingredientAmount.value)));
  }

}
