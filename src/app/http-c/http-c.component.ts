import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Component({
  selector: 'app-http-c',
  templateUrl: './http-c.component.html',
  styleUrls: ['./http-c.component.css']
})
export class HttpCComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(res => {
        console.log(res);
        this.todos.unshift(res);
        this.todoTitle = '';
      });
  }

  fetchTodos() {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .pipe(
        delay(1500)
      )
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      });
  }

  removeTodo(id: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe((res) => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }
}
