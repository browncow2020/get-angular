import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://static.pexels.com/photos/161674/appetite-beef-big-bread-161674.jpeg'),
        new Recipe('Another Test Recipe', 'This is another test', 'https://c1.staticflickr.com/3/2549/5742094564_c763e3ce64_b.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

}
