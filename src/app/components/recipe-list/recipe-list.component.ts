import { Component } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  title_text_color = 'red';

  recipe_in_progress: Recipe;
  
  recipes: Recipe[];
  
  use_dark_background: boolean | undefined;
  /**
   *
   */
  constructor() {

    
    this.recipe_in_progress = Recipe.createBlank();

    this.recipes = [
      new Recipe('Banana bread', 
      'This is banana bread', 1,2,
      [], [], ''),
      new Recipe('Farm bread', 
      'This is Farm bread', 3,4,
      [], [], ''),
      new Recipe('Beef', 
      'This is Beef', 5,6,
      [], [], ''),
      new Recipe('Kabab ', 
      'This is Kabab', 7,8,
      [], [], '')
    ]
  }

  addRecipeCliked():void {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }
 
  recipeZoomedIn(recipe:Recipe):void{
    console.log("The user cilicked ");
    console.log(JSON.stringify(recipe, null, 2))
  }

  toggleDarkBackground():void{
    this.use_dark_background = !this.use_dark_background;
  }

  toggleTitleColor():void{
    if(this.title_text_color === 'red'){
      this.title_text_color = 'black'
    }else{
      this.title_text_color = 'red';
    }
  }
}
