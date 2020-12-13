import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashBoardComponent, PostsComponent, UsersComponent } from './views';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './views/dash-board/profile/profile/profile.component';
import { LoginComponent } from './views/dash-board/login/login/login.component';
import { AuthenticationService } from './_services';
import { AuthGuard } from './_services/auth/auth-guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    PostsComponent,
    UsersComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  exports: [],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
