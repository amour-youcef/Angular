import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { TaskComponent } from './component/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    LifecycleComponent,
    AddTaskComponent,
    TaskComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
