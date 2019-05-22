import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

///// Import the components so they can be referenced in routes
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

//// Pass the configured routes to the forRoot() method to let the angular router know about our routes
//// Export the imported RouterModule so router directives are available to the module that imports this AppRoutingModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
