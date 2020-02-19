import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(){
  var config = {
    apiKey: "AIzaSyACPZaQQ0UCJFZwIX_-AXZw3Bfj9e0zyPY",
    authDomain: "http-client-demo-da44e.firebaseapp.com",
    databaseURL: "https://http-client-demo-da44e.firebaseio.com",
    projectId: "http-client-demo-da44e",
    storageBucket: "http-client-demo-da44e.appspot.com",
    messagingSenderId: "476876256509",
    appId: "1:476876256509:web:d7ca62155f1f295733fa94",
    measurementId: "G-WL1J07P133"
  };

  firebase.initializeApp(config);
 }
}
