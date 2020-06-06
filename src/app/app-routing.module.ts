import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyOderDasCalculatorComponent } from './money-oder-das-calculator/money-oder-das-calculator.component';
import { PositionComponent } from './position/position.component';
import { GuidelineComponent } from './guideline/guideline.component';


const routes: Routes = [
  { path: '', redirectTo: 'guideline', pathMatch: 'full' },
  { path: 'guideline', component: GuidelineComponent },
  { path: 'oderDas', component: MoneyOderDasCalculatorComponent },
  { path: 'position', component: PositionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
