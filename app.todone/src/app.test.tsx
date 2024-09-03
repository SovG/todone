import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import App from './App';
import '@testing-library/jest-dom/vitest';

describe('Main Page', () => {
    it('should display hello world', () => {
        render(<App />)

        const header = screen.queryByRole("heading");

        expect(header?.textContent).toBe("Hello World");
    });
});