import { Button, FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import React, { useEffect, useRef, useState } from "react";
import { TodoItemProps } from "./components/todo-item/TodoItem";
import Header from "./components/header/Header";
import TodoList from "./components/todo-list/TodoList";
import { DarkThemeRegular } from "@fluentui/react-icons";


const layoutStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '50px auto 50px',
    gridTemplateRows: '50px auto',
    rowGap: '15px',
    gridTemplateAreas: `
                        '. header themeButton'
                        '. main .'
                        `
}

const App = () => {
    const [isLightTheme, setLightTheme] = useState(true);

    useEffect(() => {
        const theme = isLightTheme ? webLightTheme : webDarkTheme;
        const backgroundColor = theme.colorNeutralBackground1;
        document.body.style.backgroundColor = backgroundColor;
    }, [isLightTheme]);

    const themeChangeHandler = () => {
        setLightTheme(lightTheme => !lightTheme)
    }

    const todoList: TodoItemProps[] = [
        { name: "yee", deleteCallback: () => { console.log("here") } },
        { name: "nee", deleteCallback: () => { console.log("here") } },
        { name: "yerr", deleteCallback: () => { console.log("here") } },
    ]

    return (
        <FluentProvider theme={isLightTheme ? webLightTheme : webDarkTheme}>
            <div style={layoutStyle}>
                <div style={{ gridArea: "header" }}>
                    <Header title="TODO" subtitle="Done" />
                </div>
                <div style={{ gridArea: "themeButton", alignContent: 'center', justifySelf: 'center' }}>
                    <Button
                        icon={<DarkThemeRegular fontSize='2em' />}
                        onClick={themeChangeHandler}
                    />
                </div>
                <div style={{ gridArea: "main" }}>
                    <TodoList todoList={todoList} />
                </div>
            </div>
        </FluentProvider>
    )
}

export default App;