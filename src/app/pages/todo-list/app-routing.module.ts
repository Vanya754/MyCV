import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesGuard } from 'src/app/pages/todo-list//shared/guards/unsaved-changes.guard';
import { LoginComponent } from 'src/app/pages/todo-list/pages/login/login.component';
import { MainComponent } from 'src/app/pages/todo-list/pages/main/main.component';
import { CanActivateLogin } from 'src/app/pages/todo-list/shared/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [CanActivateLogin],
    canDeactivate: [UnsavedChangesGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
