import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./shared/guard/auth.guard";
import { AppComponent } from './app.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { BlogPageComponentComponent } from './blog-page-component/blog-page-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './navigation/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from "./shared/services/auth.service";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  { path: 'home', component: LandingPageComponentComponent },
  { path: 'blogs', component: BlogPageComponentComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
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
    HeaderComponent,
    AdminPageComponent,
    SignInComponent,
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    ReactiveFormsModule,
  ],
  providers: [AuthService],
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
