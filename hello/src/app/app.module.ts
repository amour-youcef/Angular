import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { TaskComponent } from './component/task/task.component';
import { HomeComponent } from './component/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    ProfileComponent,
    NotFoundComponent,
    LifecycleComponent,
    AddTaskComponent,
    TaskComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
