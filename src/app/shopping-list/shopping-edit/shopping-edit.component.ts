import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName') ingredientNameRef : ElementRef;

  constructor(private shopplingListService : ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(ingredientAmount: HTMLInputElement){
    this.shopplingListService.addIngredient(
      new Ingredient(this.ingredientNameRef.nativeElement.value, Number(ingredientAmount.value))
    );
    this.shopplingListService.ingredientAddedEvent.emit(new Array(new Ingredient(this.ingredientNameRef.nativeElement.value, Number(ingredientAmount.value))));
  }

}
