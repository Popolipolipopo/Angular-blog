import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { BlogPageComponentComponent } from './blog-page-component/blog-page-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './navigation/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const appRoutes: Routes = [
  { path: 'home', component: LandingPageComponentComponent },
  { path: 'blog', component: BlogPageComponentComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarousselComponent,
    LandingPageComponentComponent,
    BlogPageComponentComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    BrowserModule,
    MatGridListModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
  ]
})

export class AppModule { }
