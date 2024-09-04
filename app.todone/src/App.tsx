import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import React, { useEffect } from "react";
import TodoItem from "./components/todo-item/TodoItem";
import Header from "./components/header/Header";


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
    const theme = webDarkTheme;
    useEffect(() => {
        const backgroundColor = theme.colorNeutralBackground1;
        document.body.style.backgroundColor = backgroundColor;
    });

    return (
        <FluentProvider theme={theme}>
            <div style={layoutStyle}>
                <div style={{ gridArea: "header" }}><Header title="TODO" subtitle="Done" /></div>
                <div style={{ gridArea: "main" }}>
                    <TodoItem name="yeee" deleteCallback={() => { console.log("here") }} />
                    <TodoItem name="nee" deleteCallback={() => { console.log("here") }} />
                </div>
            </div>
        </FluentProvider>
    )
}

export default App;