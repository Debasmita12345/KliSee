import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MetarialModule } from '../metarial/metarial.module';

import { ComponentRoutingModule } from './component-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FlooringComponent } from './flooring/flooring.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OthersComponent } from './others/others.component';
import { BudgetAssumptionComponent } from './budget-assumption/budget-assumption.component';
import { BudgetCalculationComponent } from './budget-calculation/budget-calculation.component';
import { MaterialCostComponent } from './material-cost/material-cost.component';
import { ServiceHeadingComponent } from './service-heading/service-heading.component';
import { WorkTypeComponent } from './work-type/work-type.component';
import { YourRoomComponent } from './your-room/your-room.component';
import { LocationComponent } from './location/location.component';
import { StandardMaterialCostComponent } from './standard-material-cost/standard-material-cost.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FlooringComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    OthersComponent,
    BudgetAssumptionComponent,
    BudgetCalculationComponent,
    MaterialCostComponent,
    ServiceHeadingComponent,
    WorkTypeComponent,
    YourRoomComponent,
    LocationComponent,
    StandardMaterialCostComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MetarialModule
  ]
})
export class ComponentModule { }
