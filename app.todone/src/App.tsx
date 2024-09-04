import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import React, { useEffect } from "react";
import { TodoItemProps } from "./components/todo-item/TodoItem";
import Header from "./components/header/Header";
import TodoList from "./components/todo-list/TodoList";


const layoutStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '50px auto 50px',
    gridTemplateRows: '50px auto',
    rowGap: '15px',
    gridTemplateAreas: `
                        '. header .'
                        '. main .'
                        `
}

const App = () => {
    const theme = webLightTheme;
    useEffect(() => {
        const backgroundColor = theme.colorNeutralBackground1;
        document.body.style.backgroundColor = backgroundColor;
    });

    const todoList: TodoItemProps[] = [
        { name: "yee", deleteCallback: () => { console.log("here") } },
        { name: "nee", deleteCallback: () => { console.log("here") } },
        { name: "yerr", deleteCallback: () => { console.log("here") } },
    ]

    return (
        <FluentProvider theme={theme}>
            <div style={layoutStyle}>
                <div style={{ gridArea: "header" }}><Header title="TODO" subtitle="Done" /></div>
                <div style={{ gridArea: "main" }}>
                    <TodoList todoList={todoList} />
                </div>
            </div>
        </FluentProvider>
    )
}

export default App;