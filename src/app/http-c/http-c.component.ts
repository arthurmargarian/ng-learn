import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {Todo, TodosService} from '../services/todos.service';


@Component({
  selector: 'app-http-c',
  templateUrl: './http-c.component.html',
  styleUrls: ['./http-c.component.css']
})
export class HttpCComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false
    })
      .subscribe(res => {
        console.log(res);
        this.todos.unshift(res);
        this.todoTitle = '';
      });

  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      }, error => {
        this.error = error.message;
      });
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe((res) => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }

  doneTodo(id: number) {
    this.todosService.doneTodo(id)
      .subscribe(todo => {
        this.todos.find(t => t.id === todo.id).completed = true;
      });
  }
}
