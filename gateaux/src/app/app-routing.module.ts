import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HomeComponent } from './components/home/home.component';
import { CommanderComponent } from './components/commander/commander.component';
import { LoginComponent } from './components/login/login.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { TrouverComponent } from './components/trouver/trouver.component';
import { PhotosComponent } from './components/photos/photos.component';


const routes: Routes = [
  {path: 'accueil', component : AccueilComponent },
  {path: 'home', component : HomeComponent},
  {path: 'photos', component : PhotosComponent},
  {path: 'commander', component : CommanderComponent  },
  {path: 'login', component : LoginComponent },
  {path: 'produits', component : ProduitsComponent},
  {path: 'trouver', component : TrouverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
