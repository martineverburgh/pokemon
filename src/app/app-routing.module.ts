import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RaadComponent } from 'src/app/raad/raad.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: AppComponent},
  {path: 'raad', component: RaadComponent},
  {path: 'battle', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
