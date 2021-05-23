import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "display",
    component: DisplayComponent
  },
  {
    path: '',
    redirectTo: "/form", pathMatch: "full"
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
