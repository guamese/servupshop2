import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';  // <-- #1 import module



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';
import { PostingComponent } from './posting/posting.component';
import { NewuserComponent } from './newuser/newuser.component';
import { NewposterComponent } from './newposter/newposter.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'newposter', component: NewposterComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: 'posting', component: NewposterComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultsComponent,
    PostingComponent,
    NewuserComponent,
    NewposterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
