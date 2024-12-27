import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeartComponent } from './components/heart/heart.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeartComponent,
    CardComponent,
    MenuComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeartComponent,
    CardComponent,
    MenuComponent,
    SearchComponent
  ]
})
export class SharedModule { }
