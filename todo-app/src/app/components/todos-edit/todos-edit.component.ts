import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Todos } from 'src/app/model/todos';


@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.css']
})
export class TodosEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  todoData: Todos [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateTodos();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getTodos(id);
    this.editForm = this.fb.group({
      task: ['', [Validators.required]]
    });
  }
  updateTodo() {
    throw new Error('Method not implemented.');
  }
 
  get myForm() {
    return this.editForm.controls;
  }

  getTodos(id) {
    this.apiService.getTodo(id).subscribe(data => {
      this.editForm.setValue({
        task: data.task
      });
    });
  }

  updateTodos() {
    this.editForm = this.fb.group({
      task: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure to edit?')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateTodos(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/todos-list');
            console.log('Task updated successfully..!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
