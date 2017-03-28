import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./app.home.component";
import { LoginComponent } from "./login.component";

const appRoutes: Routes = [
    /*{
      path: 'compose',
      component: ComposeMessageComponent,
      outlet: 'popup'
    },*/
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
{
        path: "home",
        component: HomeComponent
    },
    {
        path: "users",
        loadChildren: "app/users/users.module#UsersModule"
        /*canLoad: [AuthGuard]*/
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
          appRoutes/*,
      { preloadingStrategy: SelectivePreloadingStrategy }*/
    )
  ],
  exports: [
    RouterModule
  ]/*,
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]*/
})
export class AppRoutingModule { }
