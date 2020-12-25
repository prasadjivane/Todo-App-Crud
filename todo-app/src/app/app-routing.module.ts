import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosCreateComponent } from './components/todos-create/todos-create.component';
import { TodosEditComponent } from './components/todos-edit/todos-edit.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-todos' },
  { path: 'create-todos', component: TodosCreateComponent },
  { path: 'edit-todos/:id', component: TodosEditComponent },
  { path: 'todos-list', component: TodosListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


