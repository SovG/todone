import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import React, { useEffect } from "react";
import TodoItem from "./components/todo-item/TodoItem";

const App = () => {
    const theme = webDarkTheme;
    useEffect(() => {
        // Access the theme's background color
        const backgroundColor = theme.colorNeutralBackground2;

        // Set the body's background color to match the theme
        document.body.style.backgroundColor = backgroundColor;
    });

    return (
        <FluentProvider theme={theme}>
            <TodoItem name="yeee" deleteCallback={() => { console.log("here") }} />
        </FluentProvider>
    )
}

export default App;