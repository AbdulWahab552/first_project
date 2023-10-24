import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home page' }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: { title: 'Home details' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot(arg0: { path: string; component: any; }[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
