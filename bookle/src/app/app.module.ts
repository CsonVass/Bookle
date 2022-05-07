import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { BodyComponent } from './components/body/body.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ResultsComponent } from './components/results/results.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HttpClientModule } from '@angular/common/http';import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { BooksPageComponent } from './components/pages/books-page/books-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'books', component: BooksPageComponent },
  { path: 'about', component: AboutPageComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPanelComponent,
    BodyComponent,
    ResultsComponent,
    BookDetailsComponent,
    HomePageComponent,
    BooksPageComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
