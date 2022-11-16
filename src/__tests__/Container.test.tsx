import { render, screen, cleanup } from "@testing-library/react";

import Container from '../components/Container';

describe('<Container />', () => {
    beforeEach(() => {
        render(
            <Container>
                <h1>Hello</h1>
            </Container>
        );
    });
    
    afterEach(() => {
        cleanup();
    });
    
    it("Container rendering", () => {
        const container = screen.getByTestId("container");
        expect(container).toBeInTheDocument();
    });
});