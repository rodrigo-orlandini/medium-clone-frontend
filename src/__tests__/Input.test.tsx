import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import Input from '../components/Input';

describe('<Input />', () => {
    const setInputValue = jest.fn();
    beforeEach(() => {
        render(<Input value="Testing" setValue={setInputValue} type="text" />);
    });
    
    afterEach(() => {
        cleanup();
    });
    
    
    it("Input rendering", () => {
        const input = screen.getByTestId("input");
        expect(input).toBeInTheDocument();
    });

    it("Input changeText", () => {
        const input = screen.getByTestId("input");
        fireEvent.change(input, { target: { value: "Testing 2" }});

        expect(setInputValue).toBeCalledTimes(1);
    });

    it("Input type", () => {
        const input = screen.getByTestId("input");

        expect(input).toHaveAttribute("type", "text");

        fireEvent.change(input, { target: { type: "password" }});
        expect(input).toHaveAttribute("type", "password");
    });
});