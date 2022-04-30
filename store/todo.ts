import { defineStore } from "pinia";
import { v4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
  done: Boolean;
  createAt: Date;
  updateAt: Date;
}
export interface TodoState {
  items: Todo[] | undefined[];
}

export interface UpdateTodo {
  title?: string;
  done?: Boolean;
}

export interface TodoAdd {
  title: string;
}

const state = (): TodoState => ({
  items: [],
});

const getters = {
  getById: (state: TodoState) => (id: string) => {
    return state.items.find((i: Todo) => i.id === id);
  },
  getOrderedTodo: (state: TodoState) => {
    return state.items.sort(
      (a: Todo, b: Todo) => a.createAt.getTime() - b.createAt.getTime()
    );
  },
};

const actions = {
  add(partialTodo: TodoAdd) {
    const todo: Todo = {
      id: v4(),
      done: false,
      createAt: new Date(),
      updateAt: new Date(),
      ...partialTodo,
    };
    this.items.push(todo);
  },
  remove(id: string) {
    this.items = this.items.filter((i: Todo) => i.id !== id);
  },
  update(id: string, data: UpdateTodo) {
    this.items = this.items.map((i: Todo) =>
      i.id === id ? { ...i, ...data, updateAt: new Date() } : i
    );
  },
};

export const useTodoStore = defineStore("todoStore", {
  state,
  getters,
  actions,
});
