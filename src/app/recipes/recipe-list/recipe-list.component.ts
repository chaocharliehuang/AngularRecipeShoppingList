import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is a test', 'http://lorempixel.com/output/food-q-c-640-480-2.jpg'),
    new Recipe('Test Recipe', 'this is a test', 'http://lorempixel.com/output/food-q-c-640-480-1.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
