import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent, PostsComponent, UsersComponent, ProfileComponent, LoginComponent } from './views';
import { AuthGuard } from './_services/auth/auth-guard';

const routes: Routes = [
  {path: '' , redirectTo: 'dashBoard', pathMatch: 'full'},
  {path: 'dashBoard' , component: DashBoardComponent},
  {path: 'Profile' , component: ProfileComponent,  canActivate: [AuthGuard]},
  {path: 'Posts' , component: PostsComponent},
  {path: 'Users' , component: UsersComponent},
  {path: 'Login' , component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
