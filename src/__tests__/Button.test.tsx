import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import Button from '../components/Button';

describe('<Button />', () => {
    const buttonClick = jest.fn();
    beforeEach(() => {
        render(<Button text="Test Button" onClick={buttonClick}/>);
    });
    
    afterEach(() => {
        cleanup();
    });
    
    
    it("Button rendering", () => {
        const button = screen.getByText("Test Button");
        expect(button).toBeInTheDocument();
    });

    it("Button click", () => {
        const button = screen.getByText("Test Button");
        fireEvent.click(button);

        expect(buttonClick).toBeCalledTimes(1);
    });
});