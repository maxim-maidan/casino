import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layout/pages/login/login.component';
import { MainComponent } from './layout/pages/main/main.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'main', component: MainComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
