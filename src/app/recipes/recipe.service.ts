import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  // If we use a service in a service, we have to ;
  // - declare the using service class as @Injectable
  // - declare the ussed service class as provider is app.module
  constructor(private slService : ShoppingListService){
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe1', 
          'This is simply a test1', 
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
          [
            new Ingredient("Meat", 1),
            new Ingredient("Frenc freis", 2)
          ]),
        new Recipe(
          'A Test Recipe2', 
          'This is simply a test2', 
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
          [
            new Ingredient("Buns", 2),
            new Ingredient("Meat", 5)
         ])
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}