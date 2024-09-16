import Dexie, {type EntityTable} from 'dexie';

export interface Todo {
    id: number;
    name: string;
    status: boolean;
}


export class DB {
    private db;

    constructor() {
        this.db = new Dexie('TodoDB') as Dexie & {
            todo: EntityTable<Todo, 'id'>;
        };
        this.db.version(1).stores({
            todo: '++id, name, age'
        });
    }

    public async addTodo(name: string): Promise<Todo | undefined> {
        return this.db.todo.add({
            name,
            status: false
        }).then((id) => {
            return this.db.todo.where("id").equals(id).first();
        });
    }

    public async getAllTodos(): Promise<Todo[] | undefined> {
        return this.db.todo.toArray();
    }

    public async deleteTodo(id: number): Promise<void> {
        return this.db.todo.delete(id);
    }

    public async updateTodoStatus(id: number, status: boolean): Promise<void> {
        this.db.todo.update(id, {status: status});
    }

    public getDbObject() {
        return this.db;
    }
}