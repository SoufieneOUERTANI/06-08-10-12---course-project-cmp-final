import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  emitRecipeElement() {
    this.recipeService.recipeSelected.emit(this.recipeElement);
  }
  @Input() recipeElement : Recipe;  

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

}
