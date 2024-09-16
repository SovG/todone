import TodoItem, { TodoItemProps } from "../todo-item/TodoItem";

export interface TodoListProps {
    todoList: TodoItemProps[]
}

const TodoList = ({ todoList }: TodoListProps) => {
    return (
        <>
            {todoList.map((todoItem, index) => {
                return (
                    <div key={index} style={{ paddingBottom: "5px" }}>
                        <TodoItem
                            name={todoItem.name}
                            done={todoItem.done}
                            deleteCallback={todoItem.deleteCallback}
                            statusUpdateCallback={todoItem.statusUpdateCallback}
                        />
                    </div>)
            }
            )}
        </>
    )
}

export default TodoList;