import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoneyOderDasCalculatorComponent } from './money-oder-das-calculator/money-oder-das-calculator.component';
import { PositionComponent } from './position/position.component';
import { GuidelineComponent } from './guideline/guideline.component';

@NgModule({
   declarations: [
      AppComponent,
      MoneyOderDasCalculatorComponent,
      PositionComponent,
      GuidelineComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
