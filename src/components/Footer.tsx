import React from "react";
import Image from "next/image";

import Container from "./Container";

import whiteLogo from "../assets/logo-white.svg";

const Footer = () => {
    return (
        <footer className="h-32 bg-black" data-testid="footer">
            <Container className="flex flex-col justify-center h-full">
                <Image src={whiteLogo} alt="Medium logo" data-testid="footer-logo" width={160} height={40} />

                <nav className="flex pt-2 font-main text-white">
                    {/* Here, should be used a <Link /> imported from Next to setup a navigation between screens */}
                    <p className="mr-6 hover:cursor-pointer">About</p>
                    <p className="mr-6 hover:cursor-pointer">Help</p>
                    <p className="mr-6 hover:cursor-pointer">Terms</p>
                    <p className="mr-6 hover:cursor-pointer">Privacy</p>
                </nav>
            </Container>
        </footer>   
    );
}

export default Footer;