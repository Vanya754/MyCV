import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

import { Todo } from 'src/app/pages/todo-list/shared/interfaces/todo';
import { GeneralModel } from 'src/app/pages/todo-list/shared/types/general.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  m!: GeneralModel;

  constructor(private readonly messageService: MessageService) {}

  init(m: GeneralModel): void {
    this.m = m;
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.m.todos = JSON.parse(storedTodos);
    }
  }

  createTodo(todo: Todo): void {
    todo.id = Math.floor(Math.random() * 8000) + 201;

    this.m.todos.unshift(todo);

    this.saveTodosLocally();

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Task Created',
      life: 3000,
    });
  }

  editTodo(todo: Todo) {
    const foundTodo = this.m.todos.find((t) => t.id === todo.id);
    if (foundTodo) {
      Object.assign(foundTodo, todo);

      this.saveTodosLocally();

      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Task Updated',
        life: 3000,
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Todo not found',
        life: 3000,
      });
    }
  }

  deleteTodo(todo: Todo): void {
    const index = this.m.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.m.todos.splice(index, 1);

      this.saveTodosLocally();

      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Task Deleted',
        life: 3000,
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Todo not found',
        life: 3000,
      });
    }
  }

  private saveTodosLocally(): void {
    localStorage.setItem('todos', JSON.stringify(this.m.todos));
  }
}
