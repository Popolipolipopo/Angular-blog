import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
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
import { AuthService } from './shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { SingleBlogPageComponent } from './single-blog-page/single-blog-page.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LegalPageComponent } from './legal-page/legal-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


const appRoutes: Routes = [
  { path: 'home', component: LandingPageComponentComponent },
  { path: 'blogs', component: BlogPageComponentComponent },
  { path: 'blog', component: SingleBlogPageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactPageComponent },
  { path: 'legal', component: LegalPageComponent },
  { path: 'about', component: AboutPageComponent },
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
    SingleBlogPageComponent,
    ContactPageComponent,
    LegalPageComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
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
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatDividerModule,
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
