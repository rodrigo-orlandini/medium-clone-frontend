import { render, screen, cleanup } from "@testing-library/react";

import Header from '../components/Header';

describe('<Header />', () => {
    beforeEach(() => {
        render(<Header />);
    });
    
    afterEach(() => {
        cleanup();
    });
    
    it("Header rendering", () => {
        const header = screen.getByTestId("header");

        const image = screen.getByTestId("header-logo");
        
        const ourStory = screen.getByText("Our story");
        const membership = screen.getByText("Membership");
        const write = screen.getByText("Write");
        const signIn = screen.getByText("Sign In");

        const button = screen.getByText("Get started");

        expect(header).toBeInTheDocument();

        expect(image).toBeInTheDocument();

        expect(ourStory).toBeInTheDocument();
        expect(membership).toBeInTheDocument();
        expect(write).toBeInTheDocument();
        expect(signIn).toBeInTheDocument();

        expect(button).toBeInTheDocument();
    });
});