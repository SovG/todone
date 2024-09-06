import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoFormModal from "./TodoFormModal";


describe("TodoFormModal", () => {
    it('should only have a single button when modal is not visible', () => {
        render(<TodoFormModal createTodo={vi.fn()} />)

        const buttons = screen.getAllByRole('button');

        expect(buttons.length).toBe(1);
    })

    it('should open modal, when button is pressed', () => {
        render(<TodoFormModal createTodo={vi.fn()} />)
        const dialogButton = screen.getByRole('button');

        act(() => {
            dialogButton.click();
        })

        const dialogTitle = screen.getByRole('heading');

        expect(dialogTitle.textContent).toBe('Add TODO');
    })

    it('should send form content to callback prop when form is submitted', () => {
        const mockCallback = vi.fn();

        render(<TodoFormModal createTodo={mockCallback} />)

        const dialogButton = screen.getByRole('button');

        act(() => {
            dialogButton.click();
        });

        const textBox = screen.getByRole('textbox');
        const form = screen.getByTestId('new-todo-form');

        act(() => {
            fireEvent.change(textBox, { target: { value: 'NEW TODO' } })
            fireEvent.submit(form);
        });

        expect(mockCallback).toBeCalled();
    })
})