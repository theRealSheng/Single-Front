import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective } from "ng2-file-upload";
// Services

import { AuthService } from './services/auth.service';
import { WarehouseCardService } from './services/warehouse-card.service';
import { ProfileService } from './services/profile.service';
import { BookingService } from './services/booking.service';

// Guards

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

// Pages

import { AuthComponent } from './pages/auth/auth.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WarehousesComponent } from './pages/warehouses/warehouses.component';
import { SingleWarehousePageComponent } from './pages/single-warehouse-page/single-warehouse-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookingComponent } from './pages/booking/booking.component';
import { CreateWarehousePageComponent } from './pages/create-warehouse-page/create-warehouse-page.component';

// Components

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';
import { ProfileFormEditComponent } from './components/profile-form-edit/profile-form-edit.component';
import { WarehouseDetailComponent } from './components/warehouse-detail/warehouse-detail.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { CreateWarehouseFormComponent } from './components/create-warehouse-form/create-warehouse-form.component';
import { UploadComponent } from './components/upload/upload.component';
import { GraphChartComponent } from './components/graphChart/graphChart.component';


const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'auth',  component: AuthComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'warehouses',  component: WarehousesComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'warehouses/:id',  component: SingleWarehousePageComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'warehouses/:id/booking', component: BookingComponent, canActivate: [RequireUserGuardService] },
  { path: 'profile/:id', component: ProfileComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'dashboard/:id', component: DashboardComponent, canActivate: [RequireUserGuardService] },
  { path: 'profile/:id/create-warehouse', component: CreateWarehousePageComponent, canActivate: [RequireUserGuardService] },
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
    DashboardComponent,
    BookingComponent,
    BookingFormComponent,
    CreateWarehousePageComponent,
    CreateWarehouseFormComponent,
    UploadComponent,
    GraphChartComponent,
    FileSelectDirective
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
    ProfileService,
    BookingService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
