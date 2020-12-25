import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-todos-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.css']
})
export class TodosCreateComponent implements OnInit {
  submitted = false;
  todoForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.todoForm = this.fb.group({
      task: ['', [Validators.required]]
    });
  }


  get myForm() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.todoForm.valid) {
      return false;
    } else {
      this.apiService.createTodo(this.todoForm.value).subscribe(
        (res) => {
          console.log('Task created successfully..!');
          this.ngZone.run(() => this.router.navigateByUrl('/todos-list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
