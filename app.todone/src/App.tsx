import { Button, FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import React, { useEffect, useState } from "react";
import { TodoItemProps } from "./components/todo-item/TodoItem";
import Header from "./components/header/Header";
import TodoList from "./components/todo-list/TodoList";
import { DarkThemeRegular } from "@fluentui/react-icons";
import TodoFormModal from "./components/todo-form-modal/TodoFormModal";
import { DB, Todo } from "./utils/db";
import { useLiveQuery } from "dexie-react-hooks";


const layoutStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '50px auto 50px',
    gridTemplateRows: '50px auto',
    rowGap: '15px',
    gridTemplateAreas: `
                        'themeButton header addTodoButton'
                        '. main .'
                        `
}

const App = () => {
    const [theme, setTheme] = useState(() => {
        const theme = localStorage.getItem('currTheme')
        console.log(theme);
        if (theme == undefined) {
            return 'light';
        }
        return theme;
    });
    const [db] = useState(new DB());

    const todoList = useLiveQuery(() => db.getDbObject().todo.toArray());

    useEffect(() => {
        const currTheme = theme === 'light' ? webLightTheme : webDarkTheme;
        const backgroundColor = currTheme.colorNeutralBackground1;
        document.body.style.backgroundColor = backgroundColor;
    }, [theme]);

    const themeChangeHandler = () => {
        setTheme((prevTheme) => {
            const theme = prevTheme === 'light' ? "dark" : "light";
            localStorage.setItem('currTheme', theme);
            return theme;
        });
    }

    const addTodo = (todo: string) => {
        db.addTodo(todo);
    }

    const renderTodoList = (todoList: Todo[] | undefined) => {
        if (todoList == undefined || todoList.length == 0) {
            return <p>All Done</p>;
        } else {
            const todoListProps: TodoItemProps[] = todoList.map(item => {
                return {
                    name: item.name,
                    done: item.status,
                    deleteCallback: () => {
                        db.deleteTodo(item.id);
                    },
                    statusUpdateCallback: (status: boolean) => {
                        console.log('main: ' + status);
                        db.updateTodoStatus(item.id, status);
                    }
                }
            });
            return <TodoList todoList={todoListProps} />;
        }
    }


    return (
        <FluentProvider theme={theme === 'light' ? webLightTheme : webDarkTheme}>
            <div style={layoutStyle}>
                <div style={{ gridArea: "themeButton", alignContent: 'center', justifySelf: 'center' }}>
                    <Button
                        icon={<DarkThemeRegular fontSize='2em' />}
                        onClick={themeChangeHandler}
                    />
                </div>
                <div style={{ gridArea: "header" }}>
                    <Header title="TODO" subtitle="Done" />
                </div>
                <div style={{ gridArea: "addTodoButton", alignContent: 'center', justifySelf: 'center' }}>
                    <TodoFormModal createTodo={addTodo} />
                </div>
                <div style={{ gridArea: "main" }}>
                    {renderTodoList(todoList)}
                </div>
            </div>
        </FluentProvider>
    )
}

export default App;