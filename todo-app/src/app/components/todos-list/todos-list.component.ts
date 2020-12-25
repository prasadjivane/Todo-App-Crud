import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  Todo: any = [];
  constructor(private apiService: ApiService) {
    this.readTodo();
  }

  ngOnInit() {}

  readTodo() {
    this.apiService.getTodos().subscribe((data) => {
     this.Todo = data;
    });
  }

  removeTodo(user, index) {
    if (window.confirm('Are you sure to delete?')) {
        this.apiService.deleteTodo(this.Todo._id).subscribe((data) => {
          this.Todo.splice(index, 1);
        }
      );
    }
  }

}
