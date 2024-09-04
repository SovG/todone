import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoItem from "./TodoItem";


describe('TodoItem', () => {
    it('should render the name of the todo item', () => {
        render(<TodoItem name='Item Name' />);

        const itemText = screen.queryByRole('heading');

        expect(itemText?.textContent).toBe('Item Name');
    })

    it('should render a checkbox', () => {
        render(<TodoItem name='Item Name' />);

        const checkbox = screen.queryByRole('checkbox');

        expect(checkbox).not.toBeNull();
    })

    it('should set the text to be struck through when checkbox is clicked and remove if not clicked', () => {
        render(<TodoItem name='Item Name' />);

        const itemText = screen.queryByRole('heading');
        const checkbox = screen.queryByRole('checkbox');

        expect(itemText?.style.textDecoration).toBe('');

        act(() => {
            checkbox?.click();
        });
        expect(itemText?.style.textDecoration).toBe('line-through');

        act(() => {
            checkbox?.click();
        });
        expect(itemText?.style.textDecoration).toBe('');
    })

    it('should trigger the callback passed in as props when the trash button is clicked', () => {
        const mockCallback = vi.fn()
        render(<TodoItem name="Item Name" deleteCallback={mockCallback} />);

        const binButton = screen.queryByRole('button')
        binButton?.click();

        expect(mockCallback).toHaveBeenCalledTimes(1);
    })
})