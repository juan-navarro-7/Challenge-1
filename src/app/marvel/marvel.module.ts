import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroPageComponent } from './pages/list-hero-page/list-hero-page.component';
import { InfoHeroPageComponent } from './pages/info-hero-page/info-hero-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { MarvelRoutingModule } from './marvel-routing.module';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    ListHeroPageComponent,
    InfoHeroPageComponent,
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    SharedModule
]
})
export class MarvelModule { }
