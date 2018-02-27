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

import { AuthComponent } from './pages/auth/auth.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WarehousesComponent } from './pages/warehouses/warehouses.component';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    HomepageComponent,
    WarehousesComponent,
    WarehouseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    AuthService,
    WarehouseCardService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
