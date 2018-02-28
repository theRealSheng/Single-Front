import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { AuthService } from './services/auth.service';
import { WarehouseCardService } from './services/warehouse-card.service';

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

import { AuthComponent } from './pages/auth/auth.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WarehousesComponent } from './pages/warehouses/warehouses.component';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';
import { SingleWarehousePageComponent } from './pages/single-warehouse-page/single-warehouse-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileFormEditComponent } from './components/profile-form-edit/profile-form-edit.component';
import { WarehouseDetailComponent } from './components/warehouse-detail/warehouse-detail.component';
import { ProfileService } from './services/profile.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  { path: '',  component: HomepageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'auth',  component: AuthComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'warehouses',  component: WarehousesComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'warehouses/:id',  component: SingleWarehousePageComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'profile/:id', component: ProfileComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'dashboard/:id', component: DashboardComponent, canActivate: [RequireUserGuardService] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    HomepageComponent,
    WarehousesComponent,
    WarehouseListComponent,
    SingleWarehousePageComponent,
    ProfileComponent,
    ProfileFormEditComponent,
    WarehouseDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    WarehouseCardService,
    ProfileService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
