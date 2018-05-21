import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { OverviewComponent } from './components/overview/overview.component';

import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
  {path: '', component: FormComponent},
  {path: 'overview', component: OverviewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
