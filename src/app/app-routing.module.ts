import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [

  {
    path:'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule ),
  },

  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),

  },

  {
    path:'404',
    component: Error404PageComponent,
  },
  {
    path:'',
    redirectTo: 'reactive',
    pathMatch: 'full',
  },
  {
    path:'**',
    redirectTo: 'reactive',
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
