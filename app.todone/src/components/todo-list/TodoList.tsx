import TodoItem, { TodoItemProps } from "../todo-item/TodoItem";

export interface TodoListProps {
    todoList: TodoItemProps[]
}

const TodoList = ({ todoList }: TodoListProps) => {
    return (
        <>
            {todoList.map((todoItem, index) => {
                return (
                    <div style={{ paddingBottom: "5px" }}>
                        <TodoItem key={index} name={todoItem.name} done={todoItem.done} deleteCallback={todoItem.deleteCallback} />
                    </div>)
            }
            )}
        </>
    )
}

export default TodoList;