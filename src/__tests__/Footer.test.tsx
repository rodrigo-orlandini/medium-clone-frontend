import { render, screen, cleanup } from "@testing-library/react";

import Footer from '../components/Footer';

describe('<Footer />', () => {
    beforeEach(() => {
        render(<Footer />);
    });
    
    afterEach(() => {
        cleanup();
    });
    
    it("Footer rendering", () => {
        const footer = screen.getByTestId("footer");

        const image = screen.getByTestId("footer-logo");
        
        const about = screen.getByText("About");
        const help = screen.getByText("Help");
        const terms = screen.getByText("Terms");
        const privacy = screen.getByText("Privacy");

        expect(footer).toBeInTheDocument();

        expect(image).toBeInTheDocument();

        expect(about).toBeInTheDocument();
        expect(help).toBeInTheDocument();
        expect(terms).toBeInTheDocument();
        expect(privacy).toBeInTheDocument();
    });
});