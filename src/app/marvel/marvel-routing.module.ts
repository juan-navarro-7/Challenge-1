import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroPageComponent } from './pages/list-hero-page/list-hero-page.component';
import { InfoHeroPageComponent } from './pages/info-hero-page/info-hero-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListHeroPageComponent
  },
  {
    path: 'info/:id',
    component: InfoHeroPageComponent
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  },
]
@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class MarvelRoutingModule { }
