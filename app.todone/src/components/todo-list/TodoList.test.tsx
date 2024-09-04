import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import TodoList from "./TodoList";
import { TodoItemProps } from "../todo-item/TodoItem";


describe("TodoList", () => {
    it("should render the same amount of todo items as matches in the list of props passed to it", () => {
        const mockItems: TodoItemProps[] = [
            { "name": "MockItem One" },
            { "name": "MockItem Two" },
            { "name": "MockItem Three" }
        ]

        render(<TodoList todoList={mockItems} />)

        const todoListCheckboxes = screen.queryAllByRole('checkbox');
        const todoListTrashButtons = screen.queryAllByRole('button');

        screen.debug();

        expect(todoListCheckboxes.length).toBe(mockItems.length);
        expect(todoListTrashButtons.length).toBe(mockItems.length);
    })
});