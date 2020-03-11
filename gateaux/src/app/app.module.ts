import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MaterialModule} from './material/material.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { TrouverComponent } from './components/trouver/trouver.component';
import { CommanderComponent } from './components/commander/commander.component';
import { LoginComponent } from './components/login/login.component';
import { PhotosComponent } from './components/photos/photos.component';
import { Home1Component } from './components/home1/home1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    ProduitsComponent,
    TrouverComponent,
    CommanderComponent,
    LoginComponent,
    PhotosComponent,
    Home1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
