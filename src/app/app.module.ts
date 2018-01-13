import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';  // <-- #1 import module
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopbarComponent } from './topbar/topbar.component';

var config = {
  apiKey: "AIzaSyAY4NhhA6pyoQwaK0IqaNL_BOkpXmdNXrU",
  authDomain: "servupshop.firebaseapp.com",
  databaseURL: "https://servupshop.firebaseio.com",
  projectId: "servupshop",
  storageBucket: "servupshop.appspot.com",
  messagingSenderId: "897688023108"
};

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    FormsModule,
    AngularFireModule.initializeApp(config),  // Add this
    AngularFirestoreModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
